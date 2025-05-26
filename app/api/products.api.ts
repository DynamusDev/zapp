import { api } from "./client";
import { ProductDTO, Category } from "../data/types/product";

export const fetchProducts = async () => {
  const res = await api.get<{ products: ProductDTO[] }>("/products");
  return res.data.products;
};

export const fetchCategories = async () => {
  const res = await api.get<Category[]>("/products/categories");
  return res.data;
};

export const fetchProductById = async (id: string) => {
  const res = await api.get<ProductDTO>(`/products/${id}`);
  return res.data;
};
