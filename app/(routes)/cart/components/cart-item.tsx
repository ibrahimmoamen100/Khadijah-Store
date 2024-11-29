import Image from "next/image";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}
const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data);
  };
  return (
    <li className="flex py-6 border-b ">
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm ">
            <p className="text-gray-500  border-l ml-4  pl-4 border-gray-200"></p>

            <p className="text-gray-500  "></p>
          </div>
          <Currency value={data?.price} />
        </div>
      </div>

      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <Image src={data.images[0].url} fill alt={data?.name} />
      </div>
    </li>
  );
};

export default CartItem;
