import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services.js";

const TABS = [
  { key: "all", label: "Усе" },
  { key: "laser", label: "Лазер" },
  { key: "sublimation", label: "Сублімація" },
  { key: "uv", label: "УФ друк" },
];

export default function Services() {
  const [tab, setTab] = useState("all");

  const list = useMemo(() => {
    if (tab === "all") return SERVICES;
    return SERVICES.filter((i) => i.cat === tab);
  }, [tab]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Види послуг</h1>
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={
                "px-3 py-1.5 rounded-full text-sm " +
                (tab === t.key
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200")
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-gray-500">
          Наразі тут порожньо. Додайте файли у <code>public/portfolio/</code>.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((it) => (
            <Link
              key={it.id}
              to={`/services/${it.id}`}
              className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
            >
              <div
                className="h-[220px] w-full bg-gray-100"
                style={{
                  backgroundImage: `url(${it.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <figcaption className="p-4">
                <div className="text-base font-medium">{it.title}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {it.cat === "laser" && "Лазерне гравіювання"}
                  {it.cat === "sublimation" && "Сублімація"}
                  {it.cat === "uv" && "УФ друк"}
                </div>
              </figcaption>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
