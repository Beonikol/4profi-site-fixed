import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/i18n.jsx";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#297FA4] text-white text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between border-t border-white/20">
        <Link to="/" className="mb-4 md:mb-0">
          <img src="/brand/logo.png" alt="4Profi" className="h-6" />
        </Link>

        <nav className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <Link to="/">{t("menu.home")}</Link>
          <Link to="/about">{t("menu.about")}</Link>
          <Link to="/services">{t("menu.services")}</Link>
          <Link to="/portfolio">{t("menu.portfolio")}</Link>
          <Link to="/contacts">{t("menu.contacts")}</Link>
        </nav>

        <div className="flex gap-4 text-sm">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">IG</a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">FB</a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">TG</a>
        </div>
      </div>

      <div className="text-center text-xs text-white/70 py-2 border-t border-white/10">
        © {new Date().getFullYear()} 4Profi. {t("footer.copy")}
      </div>
    </footer>
  );
}
