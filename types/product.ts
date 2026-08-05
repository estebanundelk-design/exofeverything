export interface Product {
  id: number;
  slug: string;

  name: string;
  brand: string;
  category: string;

  description: string;

  price: number;
  oldPrice: number;
  discount: number;

  image: string;
  images: string[];

  rating: number;
  stock: number;

  colors: string[];

  storage?: string[];

  specifications: {
    pantalla: string;
    procesador: string;
    memoria: string;
    bateria: string;
  };
}