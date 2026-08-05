"use client";

import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  function handleWhatsApp() {
    if (cart.length === 0) return;

    let message = "Hola Exofeverything 👋%0A%0A";
    message += "Quiero comprar:%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.product.name} x${item.quantity}%0A`;
    });

    message += `%0ATotal: $${total.toLocaleString("es-CO")}%0A%0A`;
    message += "Mi nombre es:%0A";
    message += "Mi dirección es:%0A";

    window.open(
      `https://wa.me/573192020863?text=${message}`,
      "_blank"
    );
  }

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">
            Mi carrito
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 && (
            <p className="text-gray-500">
              Tu carrito está vacío.
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.product.id}
              className="border rounded-xl p-4"
            >
              <h3 className="font-semibold">
                {item.product.name}
              </h3>

              <p className="text-red-600 font-bold mt-2">
                ${item.product.price.toLocaleString("es-CO")}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQuantity(item.product.id)}
                  className="border rounded p-2"
                >
                  <Minus size={16} />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.product.id)}
                  className="border rounded p-2"
                >
                  <Plus size={16} />
                </button>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="ml-auto text-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-6">
          <h3 className="text-xl font-bold">
            Total:
          </h3>

          <p className="text-3xl text-green-600 font-black">
            ${total.toLocaleString("es-CO")}
          </p>

          <button
            onClick={handleWhatsApp}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
          >
            Comprar por WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}