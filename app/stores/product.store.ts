import { create } from "zustand";

type ProductFilters = {
  category: string;
  sortBy: "price" | "rating";
};

type ProductState = {
  filters: ProductFilters;
  setFilters: (filters: Partial<ProductFilters>) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  filters: {
    category: "",
    sortBy: "price",
  },
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));
