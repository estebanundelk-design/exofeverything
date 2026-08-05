"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  onClick: () => void;
};

export default function CartButton({ onClick }: Props) {
  const { cart } = useCart();

  const quantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-black hover:bg-zinc-800 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <ShoppingCart
        size={28}
        className="mx-auto"
      />

      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
          {quantity}
        </span>
      )}
    </button>
  );
}