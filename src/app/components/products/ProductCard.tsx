"use client";
import Image from "next/image";
import Button from "../Button";
import { Product } from "@/app/utils";
import Link from "next/link";

const ProductCard = ({
  product,
  active,
  next,
  previous,
}: {
  product: Product;
  active: boolean;
  next: boolean;
  previous: boolean;
}) => {
  return (
    <div
      className={`bg-white w-[70vw] lg:w-80 p-4 rounded-3xl flex flex-col items-center gap-2 shrink-0 snap-center transition-all duration-500 
        ${
          active
            ? "scale-100 opacity-100 z-50"
            : " scale-95 lg:scale-100 opacity-60 lg:opacity-100 lg:mx-2"
        }
        ${previous ? "-translate-x-8 rotate-6 z-0 blur-[0.5px]" : ""}
        ${next ? "translate-x-8 -rotate-6 z-0 blur-[0.5px]" : ""}`}
    >
      <div className="mb-2 bg-gray-200 rounded-2xl max-h-[60vw] overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
        />
      </div>
      <h2 className="font-bold text-2xl">{product.name}</h2>
      <p className="text-sm text-gray-400 text-center">{product.description}</p>
      <Link href={`/products/${product.id}`} className="w-full">
        <Button price={`$${product.price}`}>
          <Image
            src={"/icons/trashCan.svg"}
            alt={product.name}
            width={20}
            height={20}
          />
          Add to cart
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
