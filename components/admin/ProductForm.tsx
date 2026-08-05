"use client";

import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  initialData?: Product;
  onSubmit: (product: Omit<Product, "id">) => void;
  buttonText: string;
}

export default function ProductForm({
  initialData,
  onSubmit,
  buttonText,
}: Props) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    brand: initialData?.brand || "",
    category: initialData?.category || "",
    description: initialData?.description || "",
    price: initialData?.price.toString() || "",
    stock: initialData?.stock.toString() || "",
    image: initialData?.image || "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      slug: form.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-"),

      name: form.name,

      brand: form.brand,

      category: form.category,

      description: form.description,

      price: Number(form.price),

      oldPrice: Number(form.price),

      discount: 0,

      image:
        form.image.trim() === ""
          ? "/products/default.jpg"
          : form.image,

      images: [
        form.image.trim() === ""
          ? "/products/default.jpg"
          : form.image,
      ],

      rating: 5,

      stock: Number(form.stock),

      colors: ["Negro"],

      storage: [],

      specifications: {
        pantalla: "-",
        procesador: "-",
        memoria: "-",
        bateria: "-",
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="font-semibold">
          Nombre
        </label>

        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 mt-2"
        />
      </div>

      <div>
        <label className="font-semibold">
          Marca
        </label>

        <input
          required
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 mt-2"
        />
      </div>

      <div>
        <label className="font-semibold">
          Categoría
        </label>

        <select
          required
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 mt-2"
        >
          <option value="">Seleccione...</option>
          <option value="Celulares">Celulares</option>
          <option value="Relojes">Relojes</option>
          <option value="Zapatos">Zapatos</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">
          Descripción
        </label>

        <textarea
          rows={4}
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 mt-2"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold">
            Precio
          </label>

          <input
            required
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Stock
          </label>

          <input
            required
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 mt-2"
          />
        </div>

      </div>

      <div>
        <label className="font-semibold">
          Ruta imagen
        </label>

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="/products/iphone16.jpg"
          className="w-full border rounded-xl p-4 mt-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
      >
        {buttonText}
      </button>
    </form>
  );
}