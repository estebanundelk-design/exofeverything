"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, Truck } from "lucide-react";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useFavorite } from "@/context/FavoriteContext";
import { buyProductMessage } from "@/lib/whatsapp";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorite();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

      <div className="relative overflow-hidden">

        <Link href={`/producto/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-72 object-cover transition duration-500 hover:scale-110"
          />
        </Link>

        <button
          onClick={() =>
            isFavorite(product.id)
              ? removeFavorite(product.id)
              : addFavorite(product)
          }
          className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-red-50 transition"
        >
          <Heart
            size={20}
            className={
              isFavorite(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        {product.discount > 0 && (
          <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </span>
        )}

      </div>

      <div className="p-6">

        <p className="text-sm uppercase tracking-wide text-blue-600 font-bold">
          {product.brand}
        </p>

        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-black text-2xl mt-2 hover:text-blue-600 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-4">

          {Array.from({ length: product.rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="text-gray-500 text-sm ml-2">
            ({product.rating}.0)
          </span>

        </div>

        <div className="flex items-center gap-2 mt-5 text-green-600">

          <Truck size={18} />

          <span className="text-sm font-semibold">
            Envío gratis
          </span>

        </div>

        <div className="mt-5">

          {product.oldPrice > product.price && (
            <p className="line-through text-gray-400">
              ${product.oldPrice.toLocaleString("es-CO")}
            </p>
          )}

          <p className="text-red-600 text-3xl font-black">
            ${product.price.toLocaleString("es-CO")}
          </p>

        </div>

        <div className="mt-3">

          <span
            className={`font-semibold ${
              product.stock > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.stock > 0
              ? `Stock: ${product.stock}`
              : "Agotado"}
          </span>

        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">

          <button
            onClick={() => addToCart(product)}
            className="bg-black hover:bg-zinc-800 text-white rounded-xl py-3 font-bold flex items-center justify-center gap-2 transition"
          >
            <ShoppingCart size={18} />
            Carrito
          </button>

          <a
            href={buyProductMessage(
              product.name,
              product.price
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-bold flex items-center justify-center transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}