"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    alert("Más adelante conectaremos este formulario con la base de datos.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >

        <h1 className="text-4xl font-black mb-2">
          Crear cuenta
        </h1>

        <p className="text-gray-500 mb-8">
          Regístrate para comprar en Exofeverything
        </p>

        <label className="font-semibold">
          Nombre completo
        </label>

        <input
          type="text"
          className="w-full border rounded-xl p-4 mt-2 mb-6"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Crear cuenta
        </button>

        <p className="text-center mt-8 text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-bold"
          >
            Iniciar sesión
          </Link>
        </p>

      </form>

    </main>
  );
}