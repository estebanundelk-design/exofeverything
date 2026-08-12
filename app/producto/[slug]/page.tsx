"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PackageSearch } from "lucide-react";

import ProductCard from "@/components/products/ProductCard";
import { useProducts } from "@/context/ProductContext";

export default function ProductosPage() {
  const searchParams = useSearchParams();

  const categoria = searchParams.get("categoria");
  const busqueda = searchParams.get("busqueda");
  const promociones = searchParams.get("promociones");

  const { products } = useProducts();

  const filteredProducts = products.filter((product) => {
    // Filtrar por categoría
    if (
      categoria &&
      product.category.toLowerCase() !== categoria.toLowerCase()
    ) {
      return false;
    }

    // Filtrar por búsqueda
    if (busqueda) {
      const query = busqueda.toLowerCase();

      const matches =
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      if (!matches) {
        return false;
      }
    }

    // Filtrar promociones
    if (promociones === "true" && product.discount <= 0) {
      return false;
    }

    return true;
  });

  let title = "Todos los productos";

  if (categoria) {
    title = categoria;
  }

  if (promociones === "true") {
    title = "Promociones";
  }

  if (busqueda) {
    title = `Resultados para "${busqueda}"`;
  }

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
            Volver al inicio
          </Link>

          <h1 className="text-4xl md:text-5xl font-black">
            {title}
          </h1>

          <p className="text-gray-400 mt-3">
            Encuentra lo que necesitas en Exofeverything.
          </p>

        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {filteredProducts.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <PackageSearch
                  size={48}
                  className="text-gray-400"
                />
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900">
              No encontramos productos
            </h2>

            <p className="text-gray-500 mt-3">
              Intenta buscar otro producto o revisar otra categoría.
            </p>

            <Link
              href="/productos"
              className="inline-block mt-7 bg-black text-white px-7 py-3 rounded-xl font-bold hover:bg-zinc-800 transition"
            >
              Ver todos los productos
            </Link>

          </div>

        ) : (

          <>
            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1
                    ? "producto"
                    : "productos"}
                </h2>

                <p className="text-gray-500">
                  Productos disponibles
                </p>
              </div>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredProducts.map((product) => (
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