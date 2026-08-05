"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "iPhone 16 Pro Max",
    subtitle: "Hasta 20% de descuento",
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Samsung Galaxy S25 Ultra",
    subtitle: "Entrega inmediata",
    color: "from-purple-700 to-purple-500",
  },
  {
    title: "Apple Watch Series 10",
    subtitle: "En promoción esta semana",
    color: "from-red-700 to-red-500",
  },
  {
    title: "Nike Air Max",
    subtitle: "Originales y garantizados",
    color: "from-green-700 to-green-500",
  },
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="py-8 bg-gray-100">
      <div
        className={`max-w-7xl mx-auto rounded-3xl bg-gradient-to-r ${slide.color} text-white p-10 transition-all duration-500`}
      >
        <h2 className="text-4xl font-black">
          {slide.title}
        </h2>

        <p className="mt-3 text-xl">
          {slide.subtitle}
        </p>

        <button className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
          Ver oferta
        </button>

        <div className="flex gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}