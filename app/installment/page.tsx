import React from "react";
import Image from "next/image";

export default function Installment() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="max-w-7xl mx-auto  w-full py-4 flex flex-col space-y-10 mt-20 p-4">
        <h1 className="text-3xl ">نظام التفسيط</h1>
        <div className=" h-auto   flex flex-col lg:flex-row justify-between items-start gap-4">
          <p className="text-base text-gray-600 max-w-2xl">
            نظام التقسيط هو طريقة دفع يتم فيها شراء السلع أو الخدمات ودفع ثمنها
            على دفعات متساوية أو غير متساوية على فترة زمنية محددة بدلاً من دفع
            المبلغ بالكامل مقدمًا. يعد هذا النظام شائعًا لتمكين المستهلكين من
            شراء منتجات أو خدمات قد تكون باهظة الثمن، مثل الأجهزة الإلكترونية،
            السيارات، العقارات، والأثاث، حيث يتم توزيع تكلفة المنتج على فترة
            زمنية تسهل عملية الدفع.
          </p>
          <Image
            src="/image/pound101.png"
            className=""
            alt=""
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
