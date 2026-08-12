"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ProductCard from "@/components/products/ProductCard";
import { useProducts } from "@/context/ProductContext";

export default function ProductosPage() {
  const { products } = useProducts();

  const [categoria, setCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [promociones, setPromociones] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setCategoria(params.get("categoria") || "");
    setBusqueda(params.get("busqueda") || "");
    setPromociones(params.get("promociones") === "true");
  }, []);

  const productosFiltrados = products.filter((product) => {
    const coincideCategoria =
      !categoria || product.category === categoria;

    const textoBusqueda = busqueda.toLowerCase().trim();

    const coincideBusqueda =
      !textoBusqueda ||
      product.name.toLowerCase().includes(textoBusqueda) ||
      product.brand.toLowerCase().includes(textoBusqueda) ||
      product.category.toLowerCase().includes(textoBusqueda) ||
      product.description.toLowerCase().includes(textoBusqueda);

    const coincidePromocion =
      !promociones || (product.discount ?? 0) > 0;

    return (
      coincideCategoria &&
      coincideBusqueda &&
      coincidePromocion
    );
  });

  let titulo = "Todos los productos";

  if (categoria) {
    titulo = categoria;
  }

  if (promociones) {
    titulo = "Promociones";
  }

  if (busqueda) {
    titulo = `Resultados para "${busqueda}"`;
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* ENCABEZADO */}
      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300 font-semibold"
          >
            ← Volver al inicio
          </Link>

          <h1 className="text-4xl md:text-5xl font-black mt-6">
            {titulo}
          </h1>

          <p className="text-zinc-400 mt-3">
            Encuentra los productos que estás buscando en
            Exofeverything.
          </p>

        </div>
      </section>

      {/* FILTROS */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-wrap gap-3">

          <Link
            href="/productos"
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              !categoria && !promociones
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            Todos
          </Link>

          <Link
            href="/productos?categoria=Celulares"
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              categoria === "Celulares"
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            📱 Celulares
          </Link>

          <Link
            href="/productos?categoria=Relojes"
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              categoria === "Relojes"
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            ⌚ Relojes
          </Link>

          <Link
            href="/productos?categoria=Zapatos"
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              categoria === "Zapatos"
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            👟 Zapatos
          </Link>

          <Link
            href="/productos?promociones=true"
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              promociones
                ? "bg-yellow-400 text-black"
                : "bg-white hover:bg-yellow-100"
            }`}
          >
            🔥 Promociones
          </Link>

        </div>

      </section>

      {/* PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        {productosFiltrados.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-12 text-center">

            <div className="text-6xl mb-5">
              🔎
            </div>

            <h2 className="text-2xl font-black">
              No encontramos productos
            </h2>

            <p className="text-gray-500 mt-2">
              Intenta cambiar la categoría o realizar otra búsqueda.
            </p>

            <Link
              href="/productos"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-800"
            >
              Ver todos los productos
            </Link>

          </div>

        ) : (

          <>
            <div className="flex items-center justify-between mb-6">

              <p className="text-gray-600">
                <strong>{productosFiltrados.length}</strong>{" "}
                productos encontrados
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {productosFiltrados.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          </>

        )}

      </section>

    </main>
  );
}