import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const I18nCtx = createContext(null);

const dict = {
  ua: {
    menu: { home: "Головна", about: "Про нас", portfolio: "Портфоліо", contacts: "Контакти" },
    hero: { title: "Любі види брендування для вас", ctaPortfolio: "Портфоліо", ctaContact: "Зв'язатися" },
    promo: { leftTop: "Спеціальна пропозиція", leftTitle: "До -50%", btn: "Дивитись" },
    footer: { copy: "Всі права захищено." },
    contacts: { title: "Контакти", name: "Імʼя", email: "Email", message: "Повідомлення", send: "Надіслати" },
    portfolio: { title: "Портфоліо", all: "Усе", laser: "Лазер", uv: "UV", subl: "Сублімація" },
    about: { title: "Про нас" }
  },
  ru: {
    menu: { home: "Главная", about: "О нас", portfolio: "Портфолио", contacts: "Контакты" },
    hero: { title: "Любые виды брендирования для вас", ctaPortfolio: "Портфолио", ctaContact: "Связаться" },
    promo: { leftTop: "Специальное предложение", leftTitle: "До -50%", btn: "Смотреть" },
    footer: { copy: "Все права защищены." },
    contacts: { title: "Контакты", name: "Имя", email: "Email", message: "Сообщение", send: "Отправить" },
    portfolio: { title: "Портфолио", all: "Все", laser: "Лазер", uv: "UV", subl: "Сублимация" },
    about: { title: "О нас" }
  }
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ua");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const t = (key) =>
    key.split(".").reduce((acc, p) => (acc && acc[p] != null ? acc[p] : key), dict[lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
