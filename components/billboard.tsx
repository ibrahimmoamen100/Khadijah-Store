"use client";
import { Billboard as BillboardType } from "@/types";
import { motion } from "framer-motion";

import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  console.log(data);

  return (
    <div className=" overflow-hidden w-full mb-20  bg-red-600 rounded-none md:rounded-xl ">
      <div className="relative aspect-square md:aspect-[2.4/1] bg-orange-600 w-full h-full">
        <Image
          src={data?.imageUrl}
          alt="image"
          fill
          className="object-cover absolute  "
        />
        <div className="absolute  bg-[#41404081] w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1, delay: 0 }}
            className=" text-center absolute top-1/2 w-full h-full"
          >
            <p className=" text-4xl  md:text-4xl text-stroke  lg:text-5xl  font-bold bg-gradient-to-tr from-rose-600 via-yellow-200 to-gray-400  bg-clip-text">
              {data?.label}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
