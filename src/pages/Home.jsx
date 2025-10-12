import React from "react";
import HeroSlider from "../components/HeroSlider.jsx";
import PromoGrid from "../components/PromoGrid.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* 3 ключові напрямки */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Наші напрямки
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-3xl mb-3">🔦</div>
            <h3 className="text-xl font-semibold mb-2">Лазерне гравіювання</h3>
            <p className="text-gray-600">
              Метал, дерево, шкіра, пластик — точність і довговічність. Серійне
              та індивідуальне виробництво.
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-3xl mb-3">🌈</div>
            <h3 className="text-xl font-semibold mb-2">Сублімація</h3>
            <p className="text-gray-600">
              Яскравий друк на чашках, тканинах, сувенірах. Малий та середній
              тираж.
            </p>
          </div>

          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-xl font-semibold mb-2">УФ-друк</h3>
            <p className="text-gray-600">
              Фотореалістичні зображення на склі, пластику, металі та інших
              матеріалах.
            </p>
          </div>
        </div>
      </section>

      {/* промо-блоки під хедером як у макеті */}
      <PromoGrid />

      {/* CTA секція */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-500 p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Маєш ідею? Давайте зробимо її реальністю
          </h3>
          <p className="text-white/90 mb-6">
            Підкажемо матеріал, технологію та підготуємо макет під виробництво.
          </p>
          <div className="flex gap-3">
            <Link
              to="/portfolio"
              className="px-5 py-2 rounded-full bg-white text-emerald-700 font-medium"
            >
              Дивитись портфоліо
            </Link>
            <Link
              to="/contacts"
              className="px-5 py-2 rounded-full bg-white/10 border border-white/40 hover:bg-white/15"
            >
              Зв’язатися
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
