"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-80 h-80 bg-yellow-400 rounded-full blur-3xl -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Texto */}

          <div>

            <span className="inline-flex items-center bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm shadow-lg">
              🔥 OFERTAS EXCLUSIVAS
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black text-white leading-tight">
              Todo lo que
              <span className="block text-yellow-400">
                necesitas
              </span>
              en un solo lugar.
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-9 max-w-xl">
              Celulares, relojes y zapatos originales con garantía,
              excelentes precios y envío a todo Colombia.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="#productos"
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                Comprar ahora
              </Link>

              <Link
                href="/admin/productos"
                className="border border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition"
              >
                Ver catálogo
              </Link>

            </div>

            <div className="flex gap-12 mt-16">

              <div>
                <h2 className="text-4xl font-black text-white">
                  +500
                </h2>

                <p className="text-zinc-400">
                  Productos
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-white">
                  +1000
                </h2>

                <p className="text-zinc-400">
                  Clientes
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-white">
                  ★★★★★
                </h2>

                <p className="text-zinc-400">
                  Calificación
                </p>
              </div>

            </div>

          </div>

          {/* Imágenes */}

          <div className="relative h-[650px] hidden lg:block">

            <Image
              src="/hero/hero-phone.png"
              alt="Celular"
              width={380}
              height={380}
              priority
              className="absolute left-0 top-10 hover:scale-105 transition duration-500 drop-shadow-2xl"
            />

            <Image
              src="/hero/hero-watch.png"
              alt="Reloj"
              width={240}
              height={240}
              className="absolute right-0 top-0 hover:scale-105 transition duration-500 drop-shadow-2xl"
            />

            <Image
              src="/hero/hero-shoes.png"
              alt="Zapatos"
              width={330}
              height={330}
              className="absolute right-10 bottom-0 hover:scale-105 transition duration-500 drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}