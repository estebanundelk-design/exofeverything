"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/types/product";
import { FavoriteItem } from "@/types/favorite";

interface FavoriteContextType {
  favorites: FavoriteItem[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export function FavoriteProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addFavorite = (product: Product) => {
    if (favorites.some((item) => item.product.id === product.id)) {
      return;
    }

    setFavorites([...favorites, { product }]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(
      favorites.filter((item) => item.product.id !== id)
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some(
      (item) => item.product.id === id
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      "useFavorite debe usarse dentro de FavoriteProvider"
    );
  }

  return context;
}