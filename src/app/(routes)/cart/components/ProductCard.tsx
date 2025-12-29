import { Product } from "@/app/page";
import Image from "next/image";
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-row gap-4  items-center w-full">
      <Image
        src={
          product.imageUrl
            ? product.imageUrl
            : "/productsImages/placeholder.jpg"
        }
        alt={product.name}
        width={200}
        height={200}
        className="rounded-full h-20 w-20 object-cover"
      />
      <div>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600 text-xs mt-1">1 piece</p>
      </div>

      <p className="font-semibold mt-2 ml-auto">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
