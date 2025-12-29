import { Product } from "@/app/utils";
import ProductCard from "./ProductCard";

const ProductCart = ({
  items,
}: {
  items: (Product & { quantity: number })[];
}) => {
  return (
    <div className="flex flex-col w-screen gap-2 px-4 my-4 max-h-[464px] overflow-y-auto">
      {items.map((product, index) => (
        <div key={product.id}>
          <ProductCard product={product} />
          {index < items.length - 1 && (
            <div className="my-4 border-b border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
