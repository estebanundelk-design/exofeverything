"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres.");
      return;
    }

    try {
      const savedUsers = localStorage.getItem("users");

      const users: User[] = savedUsers
        ? JSON.parse(savedUsers)
        : [];

      const existingUser = users.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) {
        setError(
          "Ya existe una cuenta con este correo."
        );
        return;
      }

      const newUser: User = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      localStorage.setItem(
        "users",
        JSON.stringify([...users, newUser])
      );

      setSuccess(
        "Cuenta creada correctamente. Redirigiendo..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
      setError(
        "No fue posible crear la cuenta."
      );
    }
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
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-600 p-4">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl bg-green-50 border border-green-200 text-green-600 p-4">
            {success}
          </div>
        )}

        <label className="font-semibold">
          Nombre completo
        </label>

        <input
          type="text"
          required
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
          required
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
          required
          minLength={6}
          className="w-full border rounded-xl p-4 mt-2 mb-8"
          placeholder="Mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition"
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