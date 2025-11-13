import React from "react";

const images = [
  "/portfolio/laser-1.jpg",
  "/portfolio/laser-2.jpg",
  "/portfolio/laser-3.jpg",
  "/portfolio/sub-1.jpg",
  "/portfolio/sub-2.jpg",
  "/portfolio/sub-3.jpg",
  "/portfolio/uv-1.jpg",
  "/portfolio/uv-2.jpg",
  "/portfolio/uv-3.jpg",
];

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Портфоліо робіт</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow">
            <img
              src={src}
              alt={`Робота ${i + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}