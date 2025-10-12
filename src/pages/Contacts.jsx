import React, { useState } from "react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const [botcheck, setBotcheck] = useState(false); // honeypot

  const errors = {
    name:
      !form.name ? "Вкажіть ім’я" :
      form.name.trim().length < 2 ? "Мінімум 2 символи" : "",
    email:
      !form.email ? "Вкажіть email" :
      !emailRe.test(form.email) ? "Некоректний email" : "",
    message:
      !form.message ? "Напишіть повідомлення" :
      form.message.trim().length < 10 ? "Мінімум 10 символів" : "",
  };

  const hasErrors = !!(errors.name || errors.email || errors.message);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }
  function onBlur(e) {
    setTouched((s) => ({ ...s, [e.target.name]: true }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (botcheck) return; // боти заповнять — ми тихо ігноруємо

    if (hasErrors) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus("sending");
    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY, // ключ із .env
        subject: "Запит з 4Profi сайту",
        from_name: "4Profi Website",
        reply_to: form.email,
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.success) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
        setTouched({});
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  const baseInput =
    "w-full rounded-md border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 outline-none transition";
  const okInput = "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200";
  const errInput = "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Контакти</h1>
      <p className="text-gray-600 mb-8">
        Залиште повідомлення — відповімо якнайшвидше.
      </p>

      <form onSubmit={onSubmit} noValidate className="max-w-2xl space-y-5">
        {/* Honeypot (прихований): не чіпати, має бути порожнім */}
        <label className="hidden">
          Не заповнюйте:
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            className="hidden"
          />
        </label>

        {/* Ім'я */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Ім’я
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Введіть ваше ім’я"
            className={`${baseInput} ${(touched.name && errors.name) ? errInput : okInput}`}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="name@example.com"
            className={`${baseInput} ${(touched.email && errors.email) ? errInput : okInput}`}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Повідомлення */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Повідомлення
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Коротко опишіть ваш запит"
            className={`${baseInput} ${(touched.message && errors.message) ? errInput : okInput} min-h-[140px]`}
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5
                     font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
        >
          {status === "sending" ? "Надсилаю…" : "Надіслати"}
        </button>

        {/* Повідомлення для screen-reader / користувача */}
        <div className="min-h-[24px]" aria-live="polite">
          {status === "ok" && (
            <div className="mt-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2">
              ✅ Дякуємо! Ми з вами звʼяжемось.
            </div>
          )}
          {status === "err" && (
            <div className="mt-3 rounded-md bg-red-50 border border-red-200 text-red-700 px-3 py-2">
              ❌ Помилка відправки. Спробуйте ще раз.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
