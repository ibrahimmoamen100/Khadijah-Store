import Billboard from "@/components/billboard";
import { products } from "@/data";
import ProductList from "@/components/product-list";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = {
    id: "1",
    label: "عروض مميزة",
    imageUrl: "/images/billboard.jpg",
  };

  return (
    <>
      <Billboard data={billboard} />
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} title="عروضنا المميزه" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
