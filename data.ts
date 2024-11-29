// data.ts
import { Billboard, Category, Product, Size, Color } from "./types";

export const billboards: Billboard[] = [
  {
    id: "e2620e77-058d-407c-9178-04aeec533f16",
    label: "عروض مميزة",
    imageUrl: "/images/billboard.jpg",
  },
];

export const sizes: Size[] = [
  { id: "1", name: "Small", value: "S" },
  { id: "2", name: "Medium", value: "M" },
  { id: "3", name: "Large", value: "L" },
];

export const colors: Color[] = [
  { id: "1", name: "Red", value: "#fff" },
  { id: "2", name: "Blue", value: "#f50" },
  { id: "3", name: "Green", value: "#000" },
];

export const categories: Category[] = [
  {
    id: "category1",
    name: "ملابس",
    billboard: billboards[0],
  },
];

export const products: Product[] = [
  {
    id: "product1",
    category: categories[0],
    name: "قميص جميل",
    price: 50,
    isFeatured: true,
    sizes: [sizes[0], sizes[1]],
    colors: [colors[0], colors[1]],
    images: [{ id: "img1", url: "/images/product1.jpg" }],
  },
];
