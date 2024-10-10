import React from "react";
import Image from "next/image";
import { AccordionQustion } from "@/components/accordion-qustuin";
import { Separator } from "@/components/ui/separator";

export default function Installment() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="max-w-7xl mx-auto  w-full py-4 space-y-10">
        <div className=" flex flex-col md:flex-row md:gap-8 gap-4 justify-center items-start  mt-20 p-4">
          <div className=" h-auto   flex flex-col justify-between items-start gap-4 space-y-8">
            <h1 className="text-3xl font-bold  ">نظام التقسيط</h1>
            <p className="text-base text-gray-600 max-w-2xl">
              أولاٌ نظام التقسيط عندنا بيتيح لك تدفع مقدم 10% وتكمل الباقي لحد 6
              شهور او حتي سنه كامله والسلعه بتاعتك بتفضل عندنا في المخزن , مجرد
              ما تخلص الاقساط كلها بتقدر تاخد السلعه بتاعتك ولو عاوز تدفع مقدم
              20% وتقسط الباقي برحتك وممكن تشتري السلعه كاش وتوفر 3% من تمن
              المنتج - المنتجات الي الي بتدخل في الاقساط هي المنتجات الي فوق ال
              5000 جنيه اقل من كده ممكن تدفعها لمده شهر فقط
            </p>
          </div>
          <Image
            src="/image/pound101.png"
            className=""
            alt=""
            width={500}
            height={400}
          />
        </div>
        <Separator />
        <div className="max-w-2xl  space-y-4 flex flex-col p-4">
          <h1 className="text-3xl font-bold text-black flex justify-start">
            {" "}
            الاسأله الشائعه
          </h1>
          <div className="">
            <AccordionQustion />
          </div>
        </div>
      </div>
    </div>
  );
}
