import { Category } from "./../types";
import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
          Swal.fire({
            icon: "info",
            title: "المنتج موجود بالفعل",
            text: "هذا المنتج موجود بالفعل في عربة التسوق! يمكنك زيارة السلة أو متابعة التسوق.",
            showCancelButton: true,
            confirmButtonText: "اذهب إلى السلة",
            cancelButtonText: "مواصلة التسوق",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/cart"; // الذهاب إلى صفحة السلة
            }
          });
          return;
        }
        set({ items: [...get().items, data] });
        Swal.fire({
          icon: "success",
          title: "تم إضافة المنتج",
          text: "تمت إضافة المنتج إلى السلة بنجاح! يمكنك زيارة السلة أو متابعة التسوق.",
          showCancelButton: true,
          confirmButtonText: "اذهب إلى السلة",
          cancelButtonText: "مواصلة التسوق",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/cart"; // الذهاب إلى صفحة السلة
          }
        });
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
