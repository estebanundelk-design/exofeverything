"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const savedUsers = localStorage.getItem("users");

      const users: User[] = savedUsers
        ? JSON.parse(savedUsers)
        : [];

      const user = users.find(
        (item) =>
          item.email.toLowerCase() ===
            email.toLowerCase() &&
          item.password === password
      );

      if (!user) {
        setError(
          "Correo o contraseña incorrectos."
        );
        setLoading(false);
        return;
      }

      // Guardar sesión
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      );

      // También dejamos una bandera sencilla de sesión
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      router.push("/admin");
    } catch (error) {
      console.error(error);

      setError(
        "No fue posible iniciar sesión."
      );

      setLoading(false);
    }
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

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-600 p-4">
            {error}
          </div>
        )}

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
          className="w-full border rounded-xl p-4 mt-2 mb-8"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition disabled:opacity-50"
        >
          {loading
            ? "Ingresando..."
            : "Ingresar"}
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