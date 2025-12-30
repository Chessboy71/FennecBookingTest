"use client";

import Button from "@/app/components/Button";
import { useCartStore } from "@/app/store/cart.store";
import { Product } from "@/app/utils";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ProductCheckout = ({ product }: { product: Product }) => {
  const { addItem, updateCount, removeItem, items } = useCartStore(
    (state) => state
  );
  const router = useRouter();
  const currentItem = items.find((item) => item.id === product.id);

  const [currentCount, setCurrentCount] = useState(currentItem?.quantity || 0);

  const handleAddToCart = () => {
    if (currentCount === 0) {
      removeItem(product.id);
      toast.error("Item removed from cart!");
      router.push("/");
      return;
    }

    if (currentItem) {
      updateCount(product.id, currentCount);
      toast.success("Cart updated!");
      router.push("/");
    } else {
      addItem({ ...product, quantity: currentCount });
      toast.success("Item added to cart!");
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex flex-row w-full items-center justify-between gap-2 overflow-x-hidden">
        <button
          className="bg-[url('/leftclicker.svg')] lg:bg-secondary bg-contain rounded-full w-24 lg:h-24 -translate-x-2 lg:translate-x-6 h-56 flex text-6xl items-center justify-center cursor-pointer active:scale-95 transition-all duration-200"
          onClick={() => setCurrentCount(Math.max(0, currentCount - 1))}
        >
          <p className="-translate-y-2">-</p>
        </button>
        <span className="font-bold text-4xl">{currentCount}</span>
        <button
          className="bg-[url('/rightClicker.svg')] lg:bg-secondary bg-contain rounded-full w-24 h-56 lg:h-24 lg:-translate-x-6 flex text-6xl items-center justify-center translate-x-4 cursor-pointer active:scale-95 transition-all duration-200"
          onClick={() => setCurrentCount(currentCount + 1)}
        >
          <p className="-translate-y-2 lg:-translate-y-1">+</p>
        </button>
      </div>

      <div className="w-full px-4 mb-4 lg:mt-24">
        <Button price={`$${product?.price || 0}`} onClick={handleAddToCart}>
          <div className="h-10 w-10 bg-primary rounded-full flex flex-row items-center justify-center">
            <Image
              src={"/icons/trashCanBlack.svg"}
              alt={product.name}
              width={18}
              height={18}
              className="text-black"
            />
          </div>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductCheckout;
