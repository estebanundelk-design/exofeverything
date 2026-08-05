"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Search,
  User,
} from "lucide-react";
import { useState, useEffect } from "react";

import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  // Evita el error de hidratación
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <header className="bg-[#111111] border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black text-2xl font-black">
              X
            </div>

            <div>
              <h1 className="text-white font-black text-2xl">
                EXOFEVERYTHING
              </h1>

              <p className="text-xs text-zinc-500">
                Tecnología y estilo
              </p>
            </div>

          </Link>

          {/* Menú */}
          <nav className="hidden lg:flex gap-8 text-white font-medium">

            <Link href="/">Inicio</Link>

            <a href="#">Celulares</a>

            <a href="#">Relojes</a>

            <a href="#">Zapatos</a>

            <a href="#">Promociones</a>

            <a href="#">Contacto</a>

          </nav>

          {/* Iconos */}
          <div className="flex items-center gap-5 text-white">

            <Search className="cursor-pointer hover:text-yellow-400 transition" />

            <Heart className="cursor-pointer hover:text-yellow-400 transition" />

            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <ShoppingCart className="hover:text-yellow-400 transition" />

              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}

            </div>

            <User className="cursor-pointer hover:text-yellow-400 transition" />

          </div>

        </div>
      </header>

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />
    </>
  );
}