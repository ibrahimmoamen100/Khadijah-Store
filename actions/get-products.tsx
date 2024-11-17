import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string; // Comma-separated values
  sizeId?: string; // Comma-separated values
  isFeatured?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  // Build the query string URL
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  const products = await res.json();

  // Filter products on the client side based on colorId and sizeId
  const selectedColors = query.colorId?.split(",") || [];
  const selectedSizes = query.sizeId?.split(",") || [];

  // Filter logic for colors and sizes
  const filteredProducts = products.filter((product: any) => {
    const matchesColor =
      selectedColors.length === 0 ||
      product.colors.some((color: any) => selectedColors.includes(color.id));

    const matchesSize =
      selectedSizes.length === 0 ||
      product.sizes.some((size: any) => selectedSizes.includes(size.id));

    return matchesColor && matchesSize;
  });

  // Transform the response to match the Product interface
  return filteredProducts.map((product: any) => ({
    id: product.id,
    name: product.name,
    price: parseFloat(product.price), // Convert price to a number
    isFeatured: product.isFeatured,
    category: {
      id: product.category.id,
      name: product.category.name,
      billboard: product.category.billboard || null, // Handle missing billboard
    },
    sizes: product.sizes.map((ps: any) => ({
      id: ps.size.id,
      name: ps.size.name,
      value: ps.size.value,
    })),
    colors: product.colors.map((pc: any) => ({
      id: pc.color.id,
      name: pc.color.name,
      value: pc.color.value,
    })),
    images: product.images.map((image: any) => ({
      id: image.id,
      url: image.url,
    })),
  }));
};

export default getProducts;
