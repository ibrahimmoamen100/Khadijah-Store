import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";

import ProductList from "@/components/product-list";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("e2620e77-058d-407c-9178-04aeec533f16");
  const products = await getProducts({ isFeatured: "true" });

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
