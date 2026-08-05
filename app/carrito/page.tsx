"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-black mb-10">
        Mi carrito
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-24">

          <h2 className="text-3xl font-bold">
            Tu carrito está vacío
          </h2>

          <Link
            href="/"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            Ir a comprar
          </Link>

        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <div
                key={item.product.id}
                className="flex gap-6 bg-white rounded-2xl shadow p-5"
              >

                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  width={120}
                  height={120}
                  className="rounded-xl"
                />

                <div className="flex-1">

                  <h3 className="font-bold text-xl">
                    {item.product.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.product.brand}
                  </p>

                  <p className="text-red-600 font-black text-2xl mt-3">
                    ${item.product.price.toLocaleString("es-CO")}
                  </p>

                  <div className="flex gap-3 mt-5">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.product.id)
                      }
                      className="border w-10 h-10 rounded-lg"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.product.id)
                      }
                      className="border w-10 h-10 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.product.id)
                  }
                  className="text-red-600 font-bold"
                >
                  Eliminar
                </button>

              </div>

            ))}

          </div>

          <div className="bg-white rounded-2xl shadow p-8 h-fit">

            <h2 className="text-2xl font-bold">
              Resumen
            </h2>

            <div className="flex justify-between mt-8">

              <span>Total</span>

              <span className="font-black text-3xl">
                ${total.toLocaleString("es-CO")}
              </span>

            </div>

            <button className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold">
              Finalizar compra
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-4 border py-4 rounded-xl"
            >
              Vaciar carrito
            </button>

          </div>

        </div>
      )}
    </main>
  );
}