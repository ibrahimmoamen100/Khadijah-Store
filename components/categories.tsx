import { Category } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  data: Category[];
};

function Categories({ data }: Props) {
  return (
    <div className=" flex flex-col gap-6">
      <h1 className="text-center font-bold text-3xl"> اختر القسم👇🛒</h1>

      <div className="flex flex-row gap-2 flex-grow w-full justify-between items-center ">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.id}`}
            className="flex-1  bg-red-600 w-full h-32 rounded-xl relative overflow-hidden p-4"
          >
            <Image
              src={item.image}
              fill
              alt={item.name}
              className="object-cover w-full absolute top-0 left-0"
            />
            <span className="text-black font-bold text-center text-2xl z-50 relative left-50 top-50 text-stroke-sm stroke-white">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
