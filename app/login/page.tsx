"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    alert("Próximamente conectaremos este formulario con la base de datos.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >

        <h1 className="text-4xl font-black mb-2">
          Iniciar sesión
        </h1>

        <p className="text-gray-500 mb-8">
          Bienvenido nuevamente a Exofeverything
        </p>

        <label className="font-semibold">
          Correo electrónico
        </label>

        <input
          type="email"
          className="w-full border rounded-xl p-4 mt-2 mb-6"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="font-semibold">
          Contraseña
        </label>

        <input
          type="password"
          className="w-full border rounded-xl p-4 mt-2 mb-8"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800"
        >
          Ingresar
        </button>

        <p className="text-center mt-8 text-gray-500">
          ¿No tienes cuenta?{" "}
          <Link
            href="/registro"
            className="text-blue-600 font-bold"
          >
            Crear cuenta
          </Link>
        </p>

      </form>

    </main>
  );
}