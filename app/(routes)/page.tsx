import Billboard from "@/components/billboard";
import { products } from "@/data";
import ProductList from "@/components/product-list";
import { billboards } from "@/data";
import { categories } from "@/data";
import Categories from "@/components/categories";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = billboards[0];
  console.log(categories);
  return (
    <>
      <Billboard data={billboard} />
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Categories data={categories} />

          <ProductList items={products} title="عروضنا المميزه" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
