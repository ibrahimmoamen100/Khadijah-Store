import React from "react";
import Image from "next/image";

export default function Installment() {
  return (
    <div className="max-w-7xl mx-auto  w-full py-4 space-y-5">
      <div className=" flex flex-col md:flex-row md:gap-6 gap-4 justify-start items-center  mt-10 p-4">
        <div className="max-w-4xl mx-auto p-6 bg-white ">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            نظام التقسيط الخاص بنا
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            نحن نوفر لك نظام تقسيط مرن يساعدك على شراء المنتجات التي تحتاجها
            بسهولة. إليك التفاصيل:
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              2. خيارات الدفع المتقدمة:
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>إذا دفعت مقدم 20%، يمكنك تحديد خطة الأقساط التي تناسبك.</li>
              <li>
                يمكنك أيضًا شراء المنتج نقدًا والاستفادة من خصم 10% الي 15% على
                سعر المنتج.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              3. الشروط الخاصة بالتقسيط حسب سعر المنتج:
            </h2>
            <h3>يمكن تقسيطها على مدة تبدأ من شهر وحتى 6 شهور كحد أقصى.</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong> المنتجات التي يزيد سعرها عن 5000 جنيه </strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    يتم إضافة نسبة زيادة 7% لكل شهر على السعر الأصلي للمنتج.
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  المنتجات التي يتراوح سعرها بين 3000 جنيه و5000 جنيه
                </strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    يتم إضافة نسبة زيادة 9% لكل شهر على السعر الأصلي للمنتج.
                  </li>
                </ul>
              </li>

              <li>
                <strong> المنتجات التي يقل سعرها عن 3000 جنيه </strong>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    يتم إضافة نسبة زيادة 11% لكل شهر على السعر الأصلي للمنتج.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              1. مقدم الدفع:
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                يمكنك دفع 10% مقدمًا من سعر المنتج واستكمال باقي المبلغ على
                أقساط.
              </li>
              <li>
                أقصى مدة للتقسيط هي 6 شهور، مع بقاء المنتج في المخزن حتى انتهاء
                الأقساط بالكامل.
              </li>
            </ul>
          </div>
          <p className="mt-6 text-gray-800 text-center font-medium">
            مع نظامنا، راحتك هي الأولوية. اختر ما يناسبك وتمتع بتجربة تسوق مرنة
            ومريحة!
          </p>
        </div>
        <Image
          src="/image/pound101.png"
          className="rounded-lg"
          alt=""
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
