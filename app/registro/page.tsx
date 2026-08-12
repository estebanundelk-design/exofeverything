"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    if (!name || !email || !password) {
      setError("Completa todos los campos.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      setMessage(
        "Cuenta creada correctamente. Ahora puedes iniciar sesión."
      );

      setName("");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
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

        {error && (
          <div className="mb-5 rounded-xl bg-red-100 text-red-700 p-4">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-5 rounded-xl bg-green-100 text-green-700 p-4">
            {message}
          </div>
        )}

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
          placeholder="Mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 disabled:opacity-50"
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
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