export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full space-y-7">
      <h1 className="text-3xl font-bold text-center mt-10">
        موقع المخزن الخاص بنا
      </h1>
      <p className="text-lg text-center">
        شارع البترول المرج خلف مستشفي اليوم الواحد
      </p>
      <div className="relative w-full h-[500px] max-h-[600px] aspect-square">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568.1521984431018!2d31.33880694175911!3d30.144307752362216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458143bbacc7c5d%3A0xc0bed31768d7708!2s5%20Al%20Betrool%2C%20Kafr%20El-Shorafa%2C%20El%20Marg%2C%20Cairo%20Governorate%204620134!5e1!3m2!1sen!2seg!4v1733003893855!5m2!1sen!2seg"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
