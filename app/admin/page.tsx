"use client";

import {
  Package,
  Users,
  ShoppingCart,
  DollarSign,
  LogOut,
  Plus,
  ArrowLeft,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CurrentUser = {
  name: string;
  email: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [user, setUser] = useState<CurrentUser | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    try {
      const isLoggedIn =
        localStorage.getItem("isLoggedIn");

      const savedUser =
        localStorage.getItem("currentUser");

      if (isLoggedIn !== "true" || !savedUser) {
        router.replace("/login");
        return;
      }

      const parsedUser: CurrentUser =
        JSON.parse(savedUser);

      setUser(parsedUser);
      setCheckingSession(false);
    } catch (error) {
      console.error(
        "Error verificando sesión:",
        error
      );

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");

      router.replace("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    router.replace("/login");
  }

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-500">
            Verificando sesión...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="bg-black text-white rounded-3xl p-6 md:p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <p className="text-yellow-400 font-semibold mb-2">
                EXOFEVERYTHING
              </p>

              <h1 className="text-3xl md:text-5xl font-black">
                Panel de Administración
              </h1>

              <p className="text-gray-400 mt-3">
                Bienvenido,{" "}
                <span className="text-white font-bold">
                  {user?.name}
                </span>
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {user?.email}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/"
                className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                <ArrowLeft size={18} />
                Ver tienda
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                <LogOut size={18} />
                Cerrar sesión
              </button>

            </div>

          </div>

        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="bg-white rounded-2xl shadow p-6">
            <Package
              className="text-blue-600 mb-4"
              size={40}
            />

            <h2 className="font-bold text-xl">
              Productos
            </h2>

            <p className="text-4xl font-black mt-2">
              4
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <ShoppingCart
              className="text-green-600 mb-4"
              size={40}
            />

            <h2 className="font-bold text-xl">
              Pedidos
            </h2>

            <p className="text-4xl font-black mt-2">
              0
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <Users
              className="text-purple-600 mb-4"
              size={40}
            />

            <h2 className="font-bold text-xl">
              Clientes
            </h2>

            <p className="text-4xl font-black mt-2">
              0
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <DollarSign
              className="text-yellow-500 mb-4"
              size={40}
            />

            <h2 className="font-bold text-xl">
              Ventas
            </h2>

            <p className="text-4xl font-black mt-2">
              $0
            </p>
          </div>

        </div>

        {/* Acciones rápidas */}
        <div className="bg-white rounded-2xl shadow mt-10 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Acciones rápidas
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/admin/productos/nuevo"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <Plus size={18} />
              Agregar producto
            </Link>

            <Link
              href="/admin/productos"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <Package size={18} />
              Administrar productos
            </Link>

            <button
              disabled
              className="bg-green-600/50 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
            >
              Ver pedidos
            </button>

            <button
              disabled
              className="bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
            >
              Clientes
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}