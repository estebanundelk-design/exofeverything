"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { useProducts } from "@/context/ProductContext";

export default function NuevoProductoPage() {
  const router = useRouter();
  const { addProduct } = useProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-black mb-8">
          Nuevo Producto
        </h1>

        <ProductForm
          buttonText="Guardar producto"
          onSubmit={(product) => {
            addProduct(product);

            alert("Producto agregado correctamente");

            router.push("/admin/productos");
          }}
        />

      </div>

    </main>
  );
}