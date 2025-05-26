export type ProductDTO = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  description: string;
  brand: string;
  stock: number;
  category: string;
};

export type Category = {
  name: string;
  slug: string;
  url: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  brand: string;
  stock: number;
  category: string;
};
