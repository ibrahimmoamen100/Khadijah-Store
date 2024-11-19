import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionQustion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {/* السؤال الموجود سابقًا وتم تحسين صياغته */}
      <AccordionItem value="item-1">
        <AccordionTrigger>
          هل يمكنني أخذ السلعة بعد دفع المقدم وأول قسط؟
        </AccordionTrigger>
        <AccordionContent>
          لا، يمكنك استلام السلعة فقط بعد سداد جميع الأقساط بالكامل. ومع ذلك،
          السلعة ستبقى محفوظة في المخزن لدينا بأمان، ويمكنك معاينتها في أي وقت
          للتأكد من حالتها.
        </AccordionContent>
      </AccordionItem>

      {/* السؤال الموجود وتم تعديله لزيادة التوضيح */}
      <AccordionItem value="item-2">
        <AccordionTrigger>ما هي فائدة نظام التقسيط؟</AccordionTrigger>
        <AccordionContent>
          نظام التقسيط يساعدك على اقتناء السلع التي تحتاجها دون الحاجة إلى دفع
          المبلغ بالكامل دفعة واحدة. إنه بمثابة خطة توفير مدروسة، خصوصًا إذا كنت
          تجد صعوبة في توفير مبلغ كبير دفعة واحدة.
        </AccordionContent>
      </AccordionItem>

      {/* السؤال الموجود وتم تحسينه */}
      <AccordionItem value="item-3">
        <AccordionTrigger>
          لماذا أختار التقسيط بدلاً من توفير المال بنفسي؟
        </AccordionTrigger>
        <AccordionContent>
          لأن الأسعار تتغير بشكل مستمر بسبب تقلبات السوق وتحرير العملة. عند
          محاولة توفير المال، قد تجد أن سعر المنتج قد تضاعف، بينما مع التقسيط،
          يمكنك ضمان السعر الحالي والدفع بشكل مريح.
        </AccordionContent>
      </AccordionItem>

      {/* السؤال الموجود وتم تحسينه */}
      <AccordionItem value="item-4">
        <AccordionTrigger>ما هو الحد الأدنى للتقسيط لديكم؟</AccordionTrigger>
        <AccordionContent>
          الحد الأدنى للتقسيط يبدأ من 2000 جنيه، ويمكن تقسيم المبلغ على شهرين
          فقط.
        </AccordionContent>
      </AccordionItem>

      {/* السؤال الموجود وتم تحسينه */}
      <AccordionItem value="item-5">
        <AccordionTrigger>
          هل يمكن استخدام نظام التقسيط لتجهيز بناتي؟
        </AccordionTrigger>
        <AccordionContent>
          بالطبع، نظام التقسيط مصمم خصيصًا لمساعدة العائلات على تجهيز بناتهم أو
          اقتناء احتياجاتهم بسهولة ومرونة.
        </AccordionContent>
      </AccordionItem>

      {/* السؤال الموجود وتم تحسينه */}
      <AccordionItem value="item-6">
        <AccordionTrigger>
          لدي أسئلة أخرى غير مدرجة هنا، كيف أتواصل معكم؟
        </AccordionTrigger>
        <AccordionContent>
          يمكنك التواصل معنا مباشرة عبر الواتساب، وسنكون سعداء بالإجابة على جميع
          استفساراتك.
        </AccordionContent>
      </AccordionItem>

      {/* سؤال مضاف جديد - يُوضح سياسة الإرجاع */}
      <AccordionItem value="item-7">
        <AccordionTrigger>ما هي سياسة الإرجاع لديكم؟</AccordionTrigger>
        <AccordionContent>
          سياسة الإرجاع لدينا تختلف بناءً على طريقة الشراء:
          <ul className="list-disc pl-5 mt-2">
            <li>
              إذا قمت بشراء المنتج نقدًا (بدون أقساط)، يمكنك استرجاع المنتج في
              غضون 10 أيام فقط من تاريخ الشراء، بشرط أن تكون المشكلة ناتجة عن
              عيب في التصنيع. بعد هذه المدة، لا يمكن استرجاع المنتج.
            </li>
            <li>
              إذا قمت بشراء المنتج بنظام الأقساط:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  نقوم بإرسال صور واضحة لحالة المنتج عبر الواتساب للتأكد من
                  حالته.
                </li>
                <li>
                  أو يمكنك زيارة المخزن لدينا لمعاينة المنتج بنفسك خلال مدة لا
                  تزيد عن 10 أيام من تاريخ الاتفاق.
                </li>
                <li>
                  بعد انتهاء هذه المدة، يجب عليك استكمال الأقساط المتفق عليها
                  لاستلام المنتج.
                </li>
              </ul>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          ماذا يحدث إذا تأخرت عن سداد أحد الأقساط؟
        </AccordionTrigger>
        <AccordionContent>
          في حالة التأخر عن سداد قسط معين، يمكنك تعويض ذلك بدفع قسطين أو ثلاثة
          أقساط دفعة واحدة. يتم تطبيق هذا الإجراء إذا تكرر التأخير في السداد
          ثلاث مرات أو أكثر في مواعيد السداد المتفق عليها. نحرص على التواصل معك
          دائمًا لضمان تسوية أي مشكلة تواجهك.
        </AccordionContent>
      </AccordionItem>

      {/* سؤال مضاف جديد - يُوضح طرق الدفع */}
      <AccordionItem value="item-8">
        <AccordionTrigger>ما هي طرق الدفع المتاحة؟</AccordionTrigger>
        <AccordionContent>
          نوفر عدة طرق للدفع لتلبية احتياجاتك المختلفة، وتشمل:
          <ul className="list-disc pl-5 mt-2">
            <li>الدفع نقدًا (كاش في اليد).</li>
            <li>الدفع عن طريق البطاقات البنكية.</li>
            <li>
              الدفع عبر فودافون كاش (المحفظة الإلكترونية) مع إرسال صورة تفاصيل
              عملية الدفع على الواتساب الخاص بنا.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
