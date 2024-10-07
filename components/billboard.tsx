"use client";
import { Billboard as BillboardType } from "@/types";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";

import img3 from "@/images/btateen.png";
import img4 from "@/images/img4.png";
import img5 from "@/images/bed.png";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const images = [img4.src, img5.src, img3.src];
  return (
    <div className=" overflow-hidden w-full mb-20">
      <ImagesSlider className="md:h-[40rem] h-[60vh] " images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-main_yellow to-main_red py-4">
            {data?.label}
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-black-300/10 border-main_yellow text-main_yellow mx-auto text-center rounded-full relative mt-4">
            <span>استكشف منتجاتنا →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-gray-700 " />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};
export default Billboard;
