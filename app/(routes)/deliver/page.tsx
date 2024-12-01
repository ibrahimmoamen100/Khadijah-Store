import ShippingAndDelivery from "@/components/delivery";
import Image from "next/image";

export default function Page() {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <ShippingAndDelivery />
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/deliver.webp"}
            alt="delivery"
            className="rounded-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
