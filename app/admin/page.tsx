"use client";

import { Package, Users, ShoppingCart, DollarSign } from "lucide-react";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-2">
          Panel de Administración
        </h1>

        <p className="text-gray-500 mb-10">
          Bienvenido al panel de control de Exofeverything.
        </p>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="bg-white rounded-2xl shadow p-6">
            <Package className="text-blue-600 mb-4" size={40} />
            <h2 className="font-bold text-xl">Productos</h2>
            <p className="text-4xl font-black mt-2">4</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <ShoppingCart className="text-green-600 mb-4" size={40} />
            <h2 className="font-bold text-xl">Pedidos</h2>
            <p className="text-4xl font-black mt-2">0</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <Users className="text-purple-600 mb-4" size={40} />
            <h2 className="font-bold text-xl">Clientes</h2>
            <p className="text-4xl font-black mt-2">0</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <DollarSign className="text-yellow-500 mb-4" size={40} />
            <h2 className="font-bold text-xl">Ventas</h2>
            <p className="text-4xl font-black mt-2">$0</p>
          </div>

        </div>

        {/* Acciones rápidas */}
        <div className="bg-white rounded-2xl shadow mt-10 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Acciones rápidas
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
              Agregar producto
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
              Ver pedidos
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold">
              Clientes
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}