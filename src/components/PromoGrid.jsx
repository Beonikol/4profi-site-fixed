import React from "react";
import { Link } from "react-router-dom";

/**
 * Два промо-карти — як у вашому дизайнерському референсі.
 * Картинки шукаємо тут:
 *   public/media/promo-left.jpg
 *   public/media/promo-right.jpg
 * Якщо їх немає — показуємо приємні градієнти-плейсхолдери.
 */
export default function PromoGrid() {
  const cards = [
    {
      side: "left",
      title: "Акції до -50%",
      text: "Вибрані позиції та комплекти",
      img: "/media/promo-left.jpg",
      to: "/portfolio",
    },
    {
      side: "right",
      title: "Термочашки та мерч",
      text: "Готові рішення для бізнесу",
      img: "/media/promo-right.jpg",
      to: "/portfolio",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((c, idx) => (
          <Link
            key={idx}
            to={c.to}
            className="group relative rounded-2xl overflow-hidden border bg-white"
          >
            {/* фонове зображення, якщо існує */}
            <div
              className="h-[260px] md:h-[300px] w-full"
              style={{
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* fallback-плашка поверх, якщо картинки немає */}
              <div className="h-full w-full bg-gradient-to-tr from-slate-100 to-slate-50/60 mix-blend-multiply" />
            </div>

            {/* контент */}
            <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end pointer-events-none">
              <div className="rounded-xl bg-white/85 backdrop-blur px-4 py-3 shadow pointer-events-auto max-w-[80%]">
                <div className="text-sm text-gray-500">{c.text}</div>
                <div className="text-xl font-semibold">{c.title}</div>
                <div className="mt-3">
                  <span className="inline-block px-4 py-1.5 text-sm rounded-full bg-emerald-600 text-white">
                    Дивитись
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
