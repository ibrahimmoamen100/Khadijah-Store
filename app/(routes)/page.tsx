import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";

import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("2e4cfdc7-f185-467c-8161-9de0877aeb39");
  const products = await getProducts({ isFeatured: "true" });

  return (
    <>
      <Billboard data={billboard} />
      <Container>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList items={products} title="عروضنا المميزه" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
