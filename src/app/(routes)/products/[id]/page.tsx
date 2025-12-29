import Button from "@/app/components/Button";
import PageHeaderWithNavigation from "@/app/components/PageHeaderWithNavigation";
import { plantProducts, Product } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import ProductCheckout from "./ProductCounter";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = plantProducts.find((product: Product) => product.id === id);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white">
      {product ? (
        <main className="py-6 min-h-screen w-screen overflow-hidden">
          <PageHeaderWithNavigation title={product?.name || ""} />
          {/* Product showcase */}
          <div className="flex flex-col items-center justify-center">
            <span className=" text-primary/30 absolute text-9xl font-bold left-[50vw] top-[30vh] translate-x-[-50%] select-none">
              {product?.category}
            </span>
            <Image
              src={product?.imageUrl || "/productsImages/notFound.png"}
              alt={product?.name}
              width={1200}
              height={1200}
              className="h-[40vh] object-contain z-20"
            />
            <p className="text-gray-400 mt-2 px-12 text-center italic">
              {product?.description}
            </p>
          </div>

          {/* Product pieces counter */}
          <ProductCheckout product={product} />

          {/* Checkout button */}
        </main>
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center min-h-[50vh]">
          <h1 className="text-4xl font-bold text-primary">Product Not Found</h1>
          <p className="text-gray-600 mt-2">
            The product you are looking for does not exist.
          </p>
          <Link href={"/"}>
            <Button>Return</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
