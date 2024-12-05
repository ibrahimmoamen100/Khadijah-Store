import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { products, categories } from "@/data";
// import MobileFilters from "./components/mobile-filters";
// import { sizes, colors } from "@/data";
// import Filter from "./components/filter";

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const category = categories.find((item) => item.id === params.categoryId);

  // Filter products that belong to this category
  const filteredProducts = products.filter(
    (product) => product.category.id === params.categoryId
  );

  return (
    <div className="bg-white">
      <Container>
        {category?.billboard && <Billboard data={category.billboard} />}
        <div className="px-4 sm:px-6 lg:px-2 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="المقاسات" data={sizes} />
              <Filter valueKey="colorId" name="الالوان" data={colors} />
            </div> */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredProducts.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CategoryPage;

{
  /* <MobileFilters sizes={sizes} colors={colors} />
<div className="hidden lg:block">
  <Filter valueKey="sizeId" name="المقاسات" data={sizes} />
  <Filter valueKey="colorId" name="الالوان" data={colors} />
</div> */
}
