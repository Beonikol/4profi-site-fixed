import React, { useState, useRef, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n/i18n.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const setVar = () => {
      if (!wrapRef.current) return;
      const h = wrapRef.current.offsetHeight || 56;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  const Item = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "px-4 py-2 rounded-md " +
        (isActive ? "font-semibold text-white" : "text-white/80 hover:text-white")
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <header ref={wrapRef} className="sticky top-0 z-50 bg-[#297FA4] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/brand/logo.png" alt="4Profi" className="h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-base">
          <Item to="/">{t("menu.home")}</Item>
          <Item to="/about">{t("menu.about")}</Item>
          <Item to="/services">{t("menu.services")}</Item>
          <Item to="/portfolio">{t("menu.portfolio")}</Item>
          <Item to="/contacts">{t("menu.contacts")}</Item>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ua" ? "ru" : "ua")}
            className="text-xs md:text-sm px-2 py-1 border border-white/40 rounded-md hover:bg-white/10"
            title="Switch language"
          >
            {lang.toUpperCase()}
          </button>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#297FA4]">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
            <Item to="/">{t("menu.home")}</Item>
            <Item to="/about">{t("menu.about")}</Item>
            <Item to="/services">{t("menu.services")}</Item>
            <Item to="/portfolio">{t("menu.portfolio")}</Item>
            <Item to="/contacts">{t("menu.contacts")}</Item>
          </div>
        </div>
      )}
    </header>
  );
}
