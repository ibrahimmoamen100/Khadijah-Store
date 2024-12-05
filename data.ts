// data.ts

// export const sizes: Size[] = [
//   { id: "1", name: "Small", value: "S" },
//   { id: "2", name: "Medium", value: "M" },
//   { id: "3", name: "Large", value: "L" },
// ];

// export const colors: Color[] = [
//   { id: "1", name: "ابيض", value: "#fff" },
//   { id: "2", name: "برتقالي", value: "#f50" },
//   { id: "3", name: "اسود", value: "#000" },
//   { id: "4", name: "احمر", value: "#d83738" },
//   { id: "5", name: "ازرق", value: "#3979b0" },
//   { id: "6", name: "اخضر", value: "#38b24d" },
//   { id: "7", name: "بني", value: "#3a0808" },
// ];

import { Billboard, Category, Product, Size, Color } from "./types";

export const billboards: Billboard[] = [
  {
    id: "e2620e77-058d-407c-9178-04aeec533f16",
    label: " اكتشف اهم عروض الملابس في متجر المرج",
    imageUrl: "/images/cover40.png",
  },
];

export const categories: Category[] = [
  {
    id: "closthes",
    name: "ملابس",
    billboard: billboards[0],
    image: "/images/clos.png",
  },
  {
    id: "home",
    name: "ادوات منزليه",
    billboard: billboards[0],
    image: "/images/home.png",
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
  {
    id: "p8",
    category: categories.find((c) => c.id === "home")!,
    name: `
طقم جرانيت دريم بوناسيرا 9 قطع 
وجريل 28 

 `,
    price: 2300,
    realPrice: 2000,
    isFeatured: true,
    sizes: ["28 ", "26", "24", "22", "20", "18"],
    colors: ["blue"],
    images: [
      {
        id: "img1",
        url: "/images/dream.jpg",
      },
    ],
  },
  {
    id: "p9",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
جاكت جلد مستورد

 `,
    price: 320,
    realPrice: 300,
    isFeatured: true,
    sizes: ["XL ", "L", "XXL", "3XL"],
    colors: ["#8e5329", "black", "#6c5b54"],
    images: [
      {
        id: "img1",
        url: "/images/ac1.jpg",
      },
      {
        id: "img2",
        url: "/images/ac2.jpg",
      },
      {
        id: "img1",
        url: "/images/ac3.jpg",
      },
    ],
  },
  {
    id: "p9",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
ترنج شتوي خامه ممتازه

 `,
    price: 280,
    realPrice: 300,
    isFeatured: true,
    sizes: ["XL ", "L", "XXL", "3XL"],
    colors: ["#8e5329"],
    images: [
      {
        id: "img1",
        url: "/images/dc1.jpg",
      },
    ],
  },
  {
    id: "p10",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
ترنج Adidas  

 `,
    price: 280,
    realPrice: 300,
    isFeatured: true,
    sizes: ["XL ", "L", "XXL", "3XL"],
    colors: ["#716e76"],
    images: [
      {
        id: "img1",
        url: "/images/d5.jpg",
      },
    ],
  },
  {
    id: "p10",
    category: categories.find((c) => c.id === "closthes")!,
    name: `
◾خامة ميلتون ضد الوبرة والانكماش 
◾تقفيل وفينيش عالي 
◾بزنط (كابيشو)
◾يوجد جيب امامي لتدفئة اليدين
◾شكل شيك وجذاب 
 `,
    price: 280,
    realPrice: 300,
    isFeatured: true,
    sizes: ["XL ", "L", "XXL", "3XL"],
    colors: ["#bcbabd", "red", "white", "black"],
    images: [
      {
        id: "img1",
        url: "/images/wrc.jpg",
      },
      {
        id: "img2",
        url: "/images/wrc2.jpg",
      },
      {
        id: "img3",
        url: "/images/wrc3.jpg",
      },
    ],
  },
  {
    id: "p11",
    category: categories.find((c) => c.id === "home")!,
    name: `
اطقم توزيع من شركة دريم سيليكون حرارى سعر الطقم
 `,
    price: 450,
    realPrice: 400,
    isFeatured: true,
    sizes: [],
    colors: ["blue", "white"],
    images: [
      {
        id: "img1",
        url: "/images/ssv.jpg",
      },
    ],
  },
  {
    id: "p12",
    category: categories.find((c) => c.id === "home")!,
    name: `
السجاد الجوبلان  وش قطيفه  3دي 
  ضهر دوتس  تقيل 

 `,
    price: 450,
    realPrice: 200,
    isFeatured: true,
    sizes: ["80 سم * 200 سم"],
    colors: ["blue", "white"],
    images: [
      {
        id: "img1",
        url: "/images/سجاده 1.jpg",
      },
      {
        id: "img2",
        url: "/images/سجاده 2.jpg",
      },
      {
        id: "img3",
        url: "/images/سجاده 3.jpg",
      },
      {
        id: "img4",
        url: "/images/سجاده 4.jpg",
      },
    ],
  },
  {
    id: "p13",
    category: categories.find((c) => c.id === "home")!,
    name: `
السجاد الجوبلان  وش قطيفه  3دي 
  ضهر دوتس  تقيل 

 `,
    price: 650,
    realPrice: 4100,
    isFeatured: true,
    sizes: ["١.٦٠ * ٢.٤٠"],
    colors: ["blue", "white"],
    images: [
      {
        id: "img1",
        url: "/images/سجاده كبير 1.jpg",
      },
      {
        id: "img2",
        url: "/images/سجاده كبير 2.jpg",
      },
    ],
  },
  {
    id: "p13",
    category: categories.find((c) => c.id === "home")!,
    name: `
طقم Bonera 
10 قطع
بمقبض ذهبي

 `,
    price: 4600,
    realPrice: 4100,
    isFeatured: true,
    sizes: ["32 "],
    colors: ["white"],
    images: [
      {
        id: "img1",
        url: "/images/طقم حلل 32 سم.jpg",
      },
    ],
  },
  {
    id: "p14",
    category: categories.find((c) => c.id === "home")!,
    name: `
طاسه تيفال

 `,
    price: 300,
    realPrice: 190,
    isFeatured: true,
    sizes: ["22سم  ", "24سم ", "26سم"],
    colors: ["#6791a9"],
    images: [
      {
        id: "img1",
        url: "/images/طقم تاسات.jpg",
      },
    ],
  },
  {
    id: "p15",
    category: categories.find((c) => c.id === "home")!,
    name: `
توزيع ماربل

 `,
    price: 425,
    realPrice: 295,
    isFeatured: true,
    sizes: [],
    colors: ["#6791a9"],
    images: [
      {
        id: "img1",
        url: "/images/توزيع 1.jpg",
      },
      {
        id: "img2",
        url: "/images/توزيع 2.jpg",
      },
      {
        id: "img3",
        url: "/images/توزيع3.jpg",
      },
    ],
  },
];
