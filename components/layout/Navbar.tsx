"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Search,
  User,
  X,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  const { cart } = useCart();

  // Cargar usuario de Supabase
  useEffect(() => {
    setMounted(true);

    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Total de productos en carrito
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Buscar productos
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const query = search.trim();

    if (!query) return;

    setOpenSearch(false);

    window.location.href = `/productos?busqueda=${encodeURIComponent(
      query
    )}`;
  }

  // Cerrar sesión
  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/";
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="bg-[#111111] border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
          >
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

          {/* ================= MENÚ ================= */}

          <nav className="hidden lg:flex gap-8 text-white font-medium">

            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >
              Inicio
            </Link>

            <Link
              href="/productos?categoria=Celulares"
              className="hover:text-yellow-400 transition"
            >
              Celulares
            </Link>

            <Link
              href="/productos?categoria=Relojes"
              className="hover:text-yellow-400 transition"
            >
              Relojes
            </Link>

            <Link
              href="/productos?categoria=Zapatos"
              className="hover:text-yellow-400 transition"
            >
              Zapatos
            </Link>

            <Link
              href="/productos?promociones=true"
              className="hover:text-yellow-400 transition"
            >
              Promociones
            </Link>

            <a
              href="https://wa.me/573192020863"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Contacto
            </a>

          </nav>

          {/* ================= ICONOS ================= */}

          <div className="flex items-center gap-5 text-white">

            {/* BUSCAR */}

            <button
              type="button"
              onClick={() => setOpenSearch(true)}
              aria-label="Buscar"
              className="hover:text-yellow-400 transition"
            >
              <Search size={25} />
            </button>

            {/* FAVORITOS */}

            <Link
              href="/favoritos"
              aria-label="Favoritos"
              className="hover:text-yellow-400 transition"
            >
              <Heart size={25} />
            </Link>

            {/* CARRITO */}

            <button
              type="button"
              onClick={() => setOpenCart(true)}
              aria-label="Carrito"
              className="relative hover:text-yellow-400 transition"
            >
              <ShoppingCart size={25} />

              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* USUARIO */}

            {user ? (
              <div className="relative group">

                <Link
                  href="/admin"
                  aria-label="Mi cuenta"
                  className="hover:text-yellow-400 transition flex items-center"
                >
                  <User size={25} />
                </Link>

                <div className="hidden group-hover:block absolute right-0 top-8 bg-white text-black rounded-xl shadow-xl p-4 w-48">

                  <p className="text-sm font-semibold mb-3 truncate">
                    {user.email}
                  </p>

                  <Link
                    href="/admin"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100 mb-1"
                  >
                    Mi cuenta
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
                  >
                    Cerrar sesión
                  </button>

                </div>
              </div>
            ) : (
              <Link
                href="/login"
                aria-label="Iniciar sesión"
                className="hover:text-yellow-400 transition"
              >
                <User size={25} />
              </Link>
            )}

          </div>
        </div>
      </header>

      {/* ================= BUSCADOR ================= */}

      {openSearch && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm">

          <div className="bg-white w-full shadow-2xl">

            <div className="max-w-4xl mx-auto px-6 py-6">

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-black">
                  Buscar productos
                </h2>

                <button
                  type="button"
                  onClick={() => {
                    setOpenSearch(false);
                    setSearch("");
                  }}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Cerrar búsqueda"
                >
                  <X size={28} />
                </button>

              </div>

              <form
                onSubmit={handleSearch}
                className="flex gap-3"
              >

                <div className="flex-1 relative">

                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={22}
                  />

                  <input
                    autoFocus
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Busca celulares, relojes, zapatos..."
                    className="w-full border-2 border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-400"
                  />

                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-7 rounded-xl font-black"
                >
                  Buscar
                </button>

              </form>

              {/* CATEGORÍAS RÁPIDAS */}

              <div className="flex flex-wrap gap-3 mt-5">

                <Link
                  href="/productos?categoria=Celulares"
                  onClick={() => setOpenSearch(false)}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
                >
                  📱 Celulares
                </Link>

                <Link
                  href="/productos?categoria=Relojes"
                  onClick={() => setOpenSearch(false)}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
                >
                  ⌚ Relojes
                </Link>

                <Link
                  href="/productos?categoria=Zapatos"
                  onClick={() => setOpenSearch(false)}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
                >
                  👟 Zapatos
                </Link>

                <Link
                  href="/productos?promociones=true"
                  onClick={() => setOpenSearch(false)}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
                >
                  🔥 Promociones
                </Link>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ================= CARRITO ================= */}

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />

      {/* ================= WHATSAPP ================= */}

      <a
        href="https://wa.me/573192020863"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}