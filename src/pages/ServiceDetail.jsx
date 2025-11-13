import React from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES } from "../data/services.js";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((s) => String(s.id) === id);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-600">
        <p>Послугу не знайдено.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
  to="/services"
  className="inline-flex items-center gap-2 text-sm text-emerald-700 border border-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  <span className="hidden sm:inline">Назад до списку послуг</span>
  <span className="sm:hidden">Назад</span>
</Link>

      <div className="mt-6 rounded-xl overflow-hidden border bg-white shadow">
        <img
          src={service.img}
          alt={service.title}
          className="w-full object-cover h-64 sm:h-80 md:h-96"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{service.title}</h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {service.desc || "Ця послуга доступна до замовлення. Зв’яжіться з нами для уточнення деталей, термінів виконання та ціни."}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contacts"
              className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              Замовити послугу
            </Link>
            <a
              href="/portfolio"
              className="px-6 py-2 bg-gray-100 border text-gray-700 rounded hover:bg-gray-200 transition"
            >
              Переглянути інші роботи
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
