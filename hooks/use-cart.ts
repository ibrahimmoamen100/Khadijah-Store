import { Category } from "./../types";
import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (data: Product) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("هذا المنتج موجود بالفعل في عربة التسوق");
        }
        set({ items: [...get().items, data] });
        toast.success("تم ايضافه المنتج بنجاح");
      },
      removeItem: (data: Product) => {
        set({ items: [...get().items.filter((item) => item.id !== data.id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
