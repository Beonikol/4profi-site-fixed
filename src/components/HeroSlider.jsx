import React, { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/i18n.jsx";

const slides = [
  { id: 1, type: "video", src: "/media/video1.mp4", title: "Відео 1" },
  { id: 2, type: "video", src: "/media/video2.mp4", title: "Відео 2" },
  { id: 3, type: "image", src: "/media/banner1.jpg", title: "Банер" },
];

export default function HeroSlider() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const timer = useRef(null);
  const INTERVAL = 6000;

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setActive((v) => (v + 1) % slides.length);
    }, INTERVAL);
    return () => clearTimeout(timer.current);
  }, [active]);

  const goContacts = () => (window.location.href = "/contacts");

  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden z-0"
      // невеликий зазор під шапкою (8px). Можеш змінити 8px на 12/16px
      style={{ marginTop: "calc(var(--header-h, 56px) * -1 + 8px)" }}
    >
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          onClick={goContacts}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && goContacts()}
        >
          {s.type === "video" ? (
            <video
              src={s.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : (
            <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
          )}

          <div className="absolute left-6 md:left-12 bottom-12 text-white drop-shadow-lg">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
              {t("hero.title")}
            </h1>
            <div className="mt-6 flex gap-3">
              <a
                href="/portfolio"
                className="px-5 py-2 rounded-full bg-green-500 text-white font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {t("hero.ctaPortfolio")}
              </a>
              <a
                href="/contacts"
                className="px-5 py-2 rounded-full bg-green-600 text-white font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {t("hero.ctaContact")}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActive(idx);
            }}
            className={`w-3 h-3 rounded-full ${
              idx === active ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Слайд ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
