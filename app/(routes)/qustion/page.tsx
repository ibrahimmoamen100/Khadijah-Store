import { AccordionQustion } from "@/components/accordion-qustuin";
import Image from "next/image";

export default function Page() {
  return (
    <div className="  space-y-4 flex flex-col p-4 mt-10">
      <h1 className="text-3xl font-bold text-black flex justify-start">
        {" "}
        الاسأله الشائعه
      </h1>
      <div className="flex justify-start items-start flex-col md:flex-row gap-10">
        <AccordionQustion />
        <Image
          src="/image/common.webp"
          alt="question"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
