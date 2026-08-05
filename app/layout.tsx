import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { ProductProvider } from "@/context/ProductContext";

export const metadata: Metadata = {
  title: "Exofeverything",
  description: "Tecnología y estilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ProductProvider>
          <FavoriteProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </FavoriteProvider>
        </ProductProvider>
      </body>
    </html>
  );
}