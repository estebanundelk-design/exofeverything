"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { buyProductMessage } from "@/lib/whatsapp";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto py-14 px-6">

      <div className="grid lg:grid-cols-2 gap-16">

        <div>

          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="rounded-3xl border"
          />

        </div>

        <div>

          <p className="text-blue-600 font-bold">
            {product.brand}
          </p>

          <h1 className="text-5xl font-black mt-2">
            {product.name}
          </h1>

          <div className="mt-8">

            <span className="line-through text-gray-400 text-xl">
              ${product.oldPrice.toLocaleString("es-CO")}
            </span>

            <h2 className="text-red-600 text-5xl font-black mt-2">
              ${product.price.toLocaleString("es-CO")}
            </h2>

          </div>

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-10">

            <h3 className="font-bold text-xl">
              Colores
            </h3>

            <div className="flex gap-3 mt-3">

              {product.colors.map((color) => (
                <span
                  key={color}
                  className="border rounded-full px-4 py-2"
                >
                  {color}
                </span>
              ))}

            </div>

          </div>

          {product.storage && product.storage.length > 0 && (
            <div className="mt-10">

              <h3 className="font-bold text-xl">
                Almacenamiento
              </h3>

              <div className="flex gap-3 mt-3">

                {product.storage.map((item) => (
                  <span
                    key={item}
                    className="border rounded-full px-4 py-2"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          )}

          <a
            href={buyProductMessage(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-bold flex justify-center"
          >
            Comprar por WhatsApp
          </a>

        </div>

      </div>

    </main>
  );
}