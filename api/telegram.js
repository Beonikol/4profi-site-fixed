// /api/telegram.js  (Vercel serverless function)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ ok: false, error: "Missing TELEGRAM_* envs" });
    }

    const text =
`📩 Нове повідомлення з 4Profi
👤 Ім’я: ${name || "-"}
📧 Email: ${email || "-"}
📱 Телефон: ${phone || "-"}
📝 Повідомлення:
${message || "-"}`;

    const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await tgResp.json();
    if (!data.ok) {
      return res.status(200).json({ ok: false, error: "Telegram API error", data });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(200).json({ ok: false, error: String(err) });
  }
}
