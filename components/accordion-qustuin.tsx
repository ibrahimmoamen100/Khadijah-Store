import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionQustion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          ممكن اخذ السلعه بعد ما ادفع المقدم و اول قسط
        </AccordionTrigger>
        <AccordionContent>
          لا بتقدر تاخد السلعه بعد ما تخلص كل الاقساط , والحاجه بتكون في المخزن
          عندنا في الحفظ , ممكن تيجي تعاينها في اي وقت وتطمن عليها
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>ما فائده نظام القسط ؟</AccordionTrigger>
        <AccordionContent>
          اكنك بتعمل جمعيه علشان تشتري مثلا تلاجه , لو مثلا مش بتقدر تحوش ,احنا
          بنسعدك في ده , وطبعا بدل ما تشتري
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          ليه لازم اشتري بالتقسيط ومحولش احوش الفلوس مع نفسي{" "}
        </AccordionTrigger>
        <AccordionContent>
          {" "}
          لان ببساطه علشان تحوش الفلوس وتروح تشتري المنتج هتلاقي السلعه بقي
          ثمنها الضعف في ظل موجه الاسعار الي مش مظبوطه وتحرير العمله{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>التقسيط عندكم بيبدأ من كام</AccordionTrigger>
        <AccordionContent>
          {" "}
          بيبدا من اول 2000 جنيه ولكن التفسيط بيكون علي شهرين فقط
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          {" "}
          هل ممكن نظام التفسيط يساعدني في تجهييز بناتي{" "}
        </AccordionTrigger>
        <AccordionContent>
          {" "}
          بالفعل ديه افضل طريقه تجهز بناتك و خاصتا مع نظام التفسيط الي عملينو
          اصلا علشان يساعد العائلات
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          {" "}
          عندي اسأله تانيه و مش مطروحها عندكم{" "}
        </AccordionTrigger>
        <AccordionContent>
          {" "}
          تقدر تتواصل معانا علي الواتص واحنا نجوبك
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
