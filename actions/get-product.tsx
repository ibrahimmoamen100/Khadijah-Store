import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  const product = await res.json();

  return {
    id: product.id,
    name: product.name,
    price: parseFloat(product.price),
    isFeatured: product.isFeatured,
    category: {
      id: product.category.id,
      name: product.category.name,
      billboard: product.category.billboard || null,
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
  };
};

export default getProduct;
