"use client";

import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";

import ProductCard from "@/components/products/ProductCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritosPage() {
  const { favorites } = useFavorite();

  return (
    <main className="min-h-screen bg-gray-100">

      {/* ENCABEZADO */}
      <section className="bg-[#111111] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition mb-8"
          >
            <ArrowLeft size={20} />
            Volver a la tienda
          </Link>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <Heart
                size={34}
                className="text-red-500 fill-red-500"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-black">
                Mis favoritos
              </h1>

              <p className="text-gray-400 mt-2">
                Guarda aquí los productos que más te gustan.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        {favorites.length === 0 ? (

          /* SIN FAVORITOS */
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <div className="flex justify-center mb-6">

              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <Heart
                  size={48}
                  className="text-gray-400"
                />
              </div>

            </div>

            <h2 className="text-3xl font-black text-gray-900">
              No tienes favoritos todavía
            </h2>

            <p className="text-gray-500 max-w-md mx-auto mt-4">
              Explora nuestra tienda y presiona el corazón
              en los productos que quieras guardar.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 bg-black hover:bg-zinc-800 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              <ShoppingBag size={20} />
              Explorar productos
            </Link>

          </div>

        ) : (

          /* CON FAVORITOS */
          <>
            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  Tus productos favoritos
                </h2>

                <p className="text-gray-500 mt-1">
                  {favorites.length}{" "}
                  {favorites.length === 1
                    ? "producto guardado"
                    : "productos guardados"}
                </p>
              </div>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {favorites.map((item) => (
                <ProductCard
                  key={item.product.id}
                  product={item.product}
                />
              ))}

            </div>
          </>
        )}

      </section>

    </main>
  );
}