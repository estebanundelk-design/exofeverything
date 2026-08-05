"use client";

import { useRouter, useParams } from "next/navigation";
import { useProducts } from "@/context/ProductContext";
import ProductForm from "@/components/admin/ProductForm";

export default function EditarProductoPage() {
  const router = useRouter();
  const params = useParams();

  const { products, updateProduct } = useProducts();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Producto no encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-black mb-8">
          Editar Producto
        </h1>

        <ProductForm
          initialData={product}
          buttonText="Guardar cambios"
          onSubmit={(data) => {
            updateProduct({
              ...product,
              ...data,
            });

            alert("Producto actualizado correctamente");

            router.push("/admin/productos");
          }}
        />

      </div>

    </main>
  );
}