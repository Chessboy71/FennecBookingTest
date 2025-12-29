import PageHeaderWithNavigation from "@/app/components/PageHeaderWithNavigation";
import { plantProducts, Product } from "@/app/utils";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = plantProducts.find((product: Product) => product.id === id);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-b from-white to-30% to-secondary">
      <main className="py-6 h-screen w-screen overflow-hidden">
        <PageHeaderWithNavigation title={product?.name || ""} />
      </main>
    </div>
  );
};

export default ProductPage;
