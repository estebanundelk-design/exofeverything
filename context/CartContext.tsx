"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Siempre inicia vacío
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carga el carrito SOLO en el cliente
  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  // Guarda cada cambio
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(product: Product) {
    setCart((current) => {

      const exists = current.find(
        (item) => item.product.id === product.id
      );

      if (exists) {

        return current.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...current,
        {
          product,
          quantity: 1,
        },
      ];

    });
  }

  function removeFromCart(id: number) {
    setCart((current) =>
      current.filter(
        (item) => item.product.id !== id
      )
    );
  }

  function increaseQuantity(id: number) {
    setCart((current) =>
      current.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (acc, item) =>
      acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe usarse dentro de CartProvider"
    );
  }

  return context;
}