// components/ShippingAndDelivery.tsx
import React from "react";

const ShippingAndDelivery: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">الشحن والتوصيل</h1>
      <div className="bg-gray-100 p-6 rounded-lg ">
        <p className="text-lg mb-4">
          🚚 التوصيل في المناطق التالية:
          <ul className="list-disc pl-6 mt-2">
            <li>المرج القديمة</li>
            <li>مؤسسة الزكاة</li>
          </ul>
          <span className="font-bold">السعر: 20 جنيه</span>
        </p>
        <p className="text-lg mb-4">
          📍 إذا كنت في منطقة أخرى، يرجى التواصل معنا عبر الواتساب لتحديد السعر
          حسب منطقتك.
        </p>
        <p className="text-lg font-bold text-green-600">
          🚇 المقابلة في محطة مترو المرج:{" "}
          <span className="text-black">مجاناً</span>
        </p>
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://wa.me/201024911062" // ضع رقم الواتساب هنا
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          تواصل معنا على الواتساب
        </a>
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
