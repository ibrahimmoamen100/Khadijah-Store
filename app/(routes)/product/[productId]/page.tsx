import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { products } from "@/data";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = products.find((item) => item.id === params.productId);
  const suggestedProducts = products.filter(
    (item) => item.id !== params.productId
  );

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0  lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};
export default ProductPage;
