// data.ts
import { Billboard, Category, Product, Size, Color } from "./types";

export const billboards: Billboard[] = [
  {
    id: "e2620e77-058d-407c-9178-04aeec533f16",
    label: " اكتشف اهم عروض متجر المرج",
    imageUrl: "/images/dd.jpg",
  },
];

export const sizes: Size[] = [
  { id: "1", name: "Small", value: "S" },
  { id: "2", name: "Medium", value: "M" },
  { id: "3", name: "Large", value: "L" },
];

export const colors: Color[] = [
  { id: "1", name: "ابيض", value: "#fff" },
  { id: "2", name: "برتقالي", value: "#f50" },
  { id: "3", name: "اسود", value: "#000" },
  { id: "4", name: "احمر", value: "#d83738" },
  { id: "5", name: "ازرق", value: "#3979b0" },
  { id: "6", name: "اخضر", value: "#38b24d" },
  { id: "7", name: "بني", value: "#3a0808" },
];

export const categories: Category[] = [
  {
    id: "closthes",
    name: "ملابس",
    billboard: billboards[0],
  },
  {
    id: "home",
    name: "ادوات منزليه",
    billboard: billboards[0],
  },
];

export const products: Product[] = [
  {
    id: "p2",
    category: categories.find((c) => c.id === "home")!,
    name: `
   ‎طقم صواني تقديم سيلفر و مدهب 
📌‎٢ قطعة 
💯‎مستورد خامة عالية جدا
‎🔥🔥موديل شيك جدا و حديث 
`,
    price: 1900,
    realPrice: 1750,
    isFeatured: true,
    sizes: ["25", "35"],
    colors: ["#f50", "#000"],
    images: [
      { id: "img1", url: "/images/swany.jpg" },
      { id: "img2", url: "/images/swany2.jpg" },
      { id: "img3", url: "/images/swany3.jpg" },
    ],
  },
  {
    id: "p3",
    category: categories.find((c) => c.id === "home")!,
    name: `طقم حلل الدهان الاصلى 👊
موديل. عدل بيد استانلس 👍
 `,
    price: 3250,
    realPrice: 3050,
    isFeatured: true,
    sizes: ["30سم", "26سم", "24سم", "22سم", "20سم", "18سم", "16سم", "14سم"],
    colors: ["#fff"],
    images: [{ id: "img1", url: "/images/dhn1.jpg" }],
  },
  {
    id: "p4",
    category: categories.find((c) => c.id === "home")!,
    name: `
    
اقوي أشكال أطقم الصواني الجرانيت💥
 `,
    price: 1500,
    realPrice: 1350,
    isFeatured: true,
    sizes: [""],
    colors: ["Purple", "green ", "black"],
    images: [
      { id: "img1", url: "/images/swany granet1.jpg" },
      { id: "img2", url: "/images/swany granet2.jpg" },
      { id: "img3", url: "/images/swany granet3.jpg" },
    ],
  },
  {
    id: "p5",
    category: categories.find((c) => c.id === "home")!,
    name: `
    
اقوي أشكال أطقم الطاسات الجرانيت💥
 `,
    price: 1500,
    realPrice: 1350,
    isFeatured: true,
    sizes: [""],
    colors: ["Purple", "green ", "black"],
    images: [
      { id: "img1", url: "/images/tasat granet1.jpg" },
      { id: "img2", url: "/images/tasat granet2.jpg" },
      { id: "img3", url: "/images/tasat granet3.jpg" },
    ],
  },
  {
    id: "p6",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
    
ترنج شتوي    
 `,
    price: 300,
    realPrice: 300,
    isFeatured: true,
    sizes: ["Xl ", "L", "XXL"],
    colors: ["black", "white"],
    images: [
      { id: "img1", url: "/images/tr1.jpg" },
      { id: "img2", url: "/images/tr2.jpg" },
      { id: "img3", url: "/images/tr3.jpg" },
    ],
  },
  {
    id: "p7",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
    
ترنج شتوي   
Adidas
 `,
    price: 300,
    realPrice: 300,
    isFeatured: true,
    sizes: ["Xl ", "L", "XXL"],
    colors: ["black"],
    images: [{ id: "img1", url: "/images/tr adidas.jpg" }],
  },
];
