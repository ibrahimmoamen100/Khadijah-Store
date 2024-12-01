import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddSeller: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6 rounded-lg flex items-center justify-between md:flex-row-reverse flex-col gap-4">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] aspect-square ">
          <Image
            src={"/images/seller.webp"}
            alt="add-seller"
            className="rounded-2xl aspect-square"
            fill
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-start mb-6">
            شروط إضافة منتج
          </h2>
          <p className="text-lg text-gray-700">
            إذا كنت بائعًا وتود عرض منتجاتك بالجملة على موقعنا، يرجى الالتزام
            بالشروط التالية:
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              1. سعر الجملة:
            </h3>
            <p className="text-gray-600">
              تأكد من أن المنتج يتم بيعه بسعر الجملة فقط، مع تقديم أسعار منافسة
              للسوق.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              2. الكمية المتوفرة:
            </h3>
            <p className="text-gray-600">
              يجب تحديد الكمية المتوفرة من المنتج بوضوح لتجنب أي مشاكل في تلبية
              الطلبات.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              3. الخامة وجودة المنتج:
            </h3>
            <p className="text-gray-600">
              يرجى توضيح نوع الخامة أو المواد المستخدمة في تصنيع المنتج (مثل:
              قماش، معدن، إلخ).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              4. صور واضحة للمنتج:
            </h3>
            <p className="text-gray-600">
              يجب إضافة صور واضحة وعالية الجودة للمنتج من زوايا مختلفة. تأكد من
              وضوح الصورة.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              5. معلومات البائع:
            </h3>
            <p className="text-gray-600">
              يجب أن تقدم اسم البائع، العنوان (أو المدينة)، ورقم الهاتف أو وسيلة
              للتواصل.
            </p>
          </div>

          <div className="mt-6 text-start">
            <p className="text-lg text-gray-700">
              بعد الاطلاع على الشروط، يمكنك التواصل معنا عبر واتساب لإضافة
              منتجك!
            </p>
            <Link
              href="https://wa.me/201024911062"
              target="_blank"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600"
            >
              تواصل معانا عبر واتساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeller;
