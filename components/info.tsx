"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 break-words">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="flex items-center gap-x-4 flex-wrap">
            {data?.sizes?.map((size) => (
              <div key={size} className="">
                {" "}
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>

          {data?.colors?.map((color) => (
            <div key={color} className="">
              {" "}
              <div
                className="w-6 h-6  rounded-full border border-gray-600"
                style={{
                  backgroundColor: color,
                }}
              />{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          اٍضافه الي العربه
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
