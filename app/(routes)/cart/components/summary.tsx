"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";

const Summary = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    address: "",
    city: "",
    country: "",
    phone: "",
  });
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
  const onCheckout = () => {
    if (
      !customerInfo.phone ||
      !customerInfo.address ||
      !customerInfo.city ||
      !customerInfo.country
    ) {
      toast.error("يرجى ملء جميع الحقول.");
      return;
    }

    // Format cart items into a readable string
    const cartDetails = items
      .map((item, index) => `${index + 1}. ${item.name} - ${item.price} جنيه`)
      .join("\n");

    // Total price
    const totalPrice = items.reduce(
      (total, item) => total + Number(item.price),
      0
    );

    // Customer details
    const customerDetails =
      `الاسم: ${customerInfo.country}\n` +
      `العنوان: ${customerInfo.address}, ${customerInfo.city}\n` +
      `رقم التليفون: ${customerInfo.phone}`;

    // WhatsApp message content
    const message = encodeURIComponent(
      `مرحبًا، أود تقديم طلب جديد:\n\n` +
        `🛒 تفاصيل الطلب:\n${cartDetails}\n\n` +
        `💰 المجموع الكلي: ${totalPrice} جنيه\n\n` +
        `📍 تفاصيل العميل:\n${customerDetails}`
    );

    // WhatsApp URL
    const whatsappURL = `https://wa.me/01024911062?text=${message}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">ملخص مشترياتك</h2>
      <div className="mt-6 space-y-4 bg-gray-200  py-6 sm:p-6">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            المجموع الكلي
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-4 px-2 py-4">
        <Input
          type="text"
          placeholder="الاسم"
          value={customerInfo.country}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, country: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="العنوان"
          value={customerInfo.address}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, address: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="المحافظه"
          value={customerInfo.city}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, city: e.target.value })
          }
        />

        <Input
          type="number"
          placeholder="رقم التليفون"
          value={customerInfo.phone}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, phone: e.target.value })
          }
        />
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        {loading ? "جاري الطلب..." : "اطلب"}
      </Button>
    </div>
  );
};

export default Summary;
