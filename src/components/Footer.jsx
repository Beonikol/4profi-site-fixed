import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#297FA4] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Лого + копірайт */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/brand/logo.png" alt="4Profi" className="h-8 w-auto" />
            <span className="sr-only">4Profi</span>
          </Link>

          {/* Навігація футера */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <NavLink to="/" className="opacity-90 hover:opacity-100">
              Головна
            </NavLink>
            <NavLink to="/about" className="opacity-90 hover:opacity-100">
              Про нас
            </NavLink>
            <NavLink to="/portfolio" className="opacity-90 hover:opacity-100">
              Портфоліо
            </NavLink>
            <NavLink to="/contacts" className="opacity-90 hover:opacity-100">
              Контакти
            </NavLink>
          </nav>

          {/* Соціалки (за потреби підставиш свої посилання) */}
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
            <a href="#" aria-label="Telegram" className="hover:text-white">TG</a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/15 pt-6 text-center text-xs text-white/80">
          © {new Date().getFullYear()} 4Profi. Всі права захищено.
        </div>
      </div>
    </footer>
  );
}
