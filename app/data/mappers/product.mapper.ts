import { ProductDTO, Product } from "../types/product";

export const mapProduct = (dto: ProductDTO): Product => ({
  id: dto.id,
  name: dto.title,
  price: dto.price,
  rating: dto.rating,
  image: dto.thumbnail,
  description: dto.description,
  brand: dto.brand,
  stock: dto.stock,
  category: dto.category,
});
