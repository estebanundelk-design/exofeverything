"use client";

import { useState } from "react";

import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/search/SearchBar";
import { useProducts } from "@/context/ProductContext";

export default function FeaturedProducts() {
  const { products } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(text) ||
      product.brand.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  return (
    <section
      id="productos"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">

          <div>

            <span className="text-blue-600 font-bold uppercase tracking-wider">
              Productos
            </span>

            <h2 className="text-5xl font-black mt-2">
              Destacados
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Descubre los productos más vendidos de Exofeverything.
            </p>

          </div>

          <button className="hidden md:block bg-black text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition">
            Ver todos
          </button>

        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">

              <h3 className="text-2xl font-bold">
                No se encontraron productos
              </h3>

              <p className="text-gray-500 mt-2">
                Intenta buscar por otra palabra.
              </p>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}