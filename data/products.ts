import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-15-pro-max",

    name: "iPhone 15 Pro Max",

    brand: "Apple",

    category: "Celulares",

    description:
      "El iPhone 15 Pro Max ofrece un rendimiento extraordinario gracias al chip A17 Pro, cámaras profesionales y una espectacular pantalla Super Retina XDR.",

    price: 5800000,

    oldPrice: 6300000,

    discount: 8,

    image: "/products/iphone15.jpg",

    images: [
      "/products/iphone15.jpg",
      "/products/iphone15.jpg",
      "/products/iphone15.jpg",
    ],

    rating: 5,

    stock: 3,

    colors: [
      "Negro Titanio",
      "Azul Titanio",
      "Blanco Titanio",
    ],

    storage: [
      "256 GB",
      "512 GB",
      "1 TB",
    ],

    specifications: {
      pantalla: '6.7" OLED',
      procesador: "A17 Pro",
      memoria: "8 GB RAM",
      bateria: "4441 mAh",
    },
  },

  {
    id: 2,
    slug: "samsung-s25-ultra",

    name: "Samsung S25 Ultra",

    brand: "Samsung",

    category: "Celulares",

    description:
      "El nuevo Galaxy S25 Ultra incorpora inteligencia artificial, una cámara de alta resolución y una experiencia premium.",

    price: 4990000,

    oldPrice: 5500000,

    discount: 10,

    image: "/products/s25.jpg",

    images: [
      "/products/s25.jpg",
      "/products/s25.jpg",
      "/products/s25.jpg",
    ],

    rating: 5,

    stock: 5,

    colors: [
      "Titanio Gris",
      "Negro",
      "Azul",
    ],

    storage: [
      "256 GB",
      "512 GB",
    ],

    specifications: {
      pantalla: '6.9" AMOLED',
      procesador: "Snapdragon 8 Elite",
      memoria: "12 GB RAM",
      bateria: "5000 mAh",
    },
  },

  {
    id: 3,
    slug: "apple-watch-series-10",

    name: "Apple Watch Series 10",

    brand: "Apple",

    category: "Relojes",

    description:
      "Reloj inteligente con monitoreo de salud, GPS y excelente duración de batería.",

    price: 1950000,

    oldPrice: 2200000,

    discount: 12,

    image: "/products/watch.jpg",

    images: [
      "/products/watch.jpg",
      "/products/watch.jpg",
    ],

    rating: 5,

    stock: 4,

    colors: [
      "Negro",
      "Plata",
    ],

    specifications: {
      pantalla: '1.9" Retina',
      procesador: "S10",
      memoria: "64 GB",
      bateria: "18 horas",
    },
  },

  {
    id: 4,
    slug: "nike-air-max",

    name: "Nike Air Max",

    brand: "Nike",

    category: "Zapatos",

    description:
      "Tenis deportivos originales con máxima comodidad y excelente amortiguación.",

    price: 520000,

    oldPrice: 650000,

    discount: 20,

    image: "/products/nike.jpg",

    images: [
      "/products/nike.jpg",
      "/products/nike.jpg",
    ],

    rating: 5,

    stock: 8,

    colors: [
      "Blanco",
      "Negro",
    ],

    specifications: {
      pantalla: "-",
      procesador: "-",
      memoria: "-",
      bateria: "-",
    },
  },
];