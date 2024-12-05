import create from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Product {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: string[];
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
