"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/types/product";
import { products as initialProducts } from "@/data/products";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export function ProductProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loaded, setLoaded] = useState(false);

  // Cargar productos guardados en el navegador
  useEffect(() => {
    try {
      const savedProducts = localStorage.getItem("products");

      if (savedProducts) {
        const parsedProducts: Product[] = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          setProducts(parsedProducts);
        }
      }
    } catch (error) {
      console.error(
        "Error cargando productos desde localStorage:",
        error
      );

      setProducts(initialProducts);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Guardar productos en localStorage
  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );
    } catch (error) {
      console.error(
        "Error guardando productos en localStorage:",
        error
      );
    }
  }, [products, loaded]);

  function addProduct(product: Omit<Product, "id">) {
    const newProduct: Product = {
      id: Date.now(),
      ...product,
    };

    setProducts((prev) => [...prev, newProduct]);
  }

  function updateProduct(updatedProduct: Product) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  }

  function deleteProduct(id: number) {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts debe usarse dentro de ProductProvider"
    );
  }

  return context;
}