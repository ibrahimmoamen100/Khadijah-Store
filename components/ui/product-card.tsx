"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import usePreviewModel from "@/hooks/use-preview-model";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModel();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group max-h-[30rem] cursor-pointer rounded-xl border p-2 space-y-4"
    >
      <div className="aspect-square rounded-xl  bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={"image"}
          fill
          className="object-contain aspect-square rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="md:font-normal font-normal overflow-hidden h-16  md:text-base text-sm">
          {data?.name}
        </p>
        <p className="md:text-sm text-xs text-gray-500">
          {data?.category?.name}
        </p>
      </div>
      {/* Price  */}
      <div className="flex justify-between items-center">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
