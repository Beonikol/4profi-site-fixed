// api/telegram.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ ok: false, error: "Missing Telegram env vars" });
    }

    const text =
      `🔔 Нове повідомлення з 4Profi\n` +
      `👤 Ім'я: ${name || "-"}\n` +
      `✉️ Email: ${email || "-"}\n` +
      `📞 Телефон: ${phone || "-"}\n` +
      `💬 Повідомлення:\n${message || "-"}`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const r = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await r.json();
    if (!data.ok) {
      return res.status(500).json({ ok: false, error: data.description || "Telegram error" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || "Unknown error" });
  }
}
