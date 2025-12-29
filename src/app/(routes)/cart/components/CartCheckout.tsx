"use client";
import Button from "@/app/components/Button";
import { useCartStore } from "@/app/store/cart.store";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CartCheckout = ({
  prices,
}: {
  prices: { price: number; quantity: number }[];
}) => {
  const [deliveryAmount] = useState(() => Math.random() * 100);
  const totalAmount = prices.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const { clear } = useCartStore((state) => state);
  const router = useRouter();

  const handleCheckout = () => {
    if (prices.length === 0) {
      router.push("/");
      return;
    }
    clear();
    toast.success("Checkout successful! You spent $" + totalAmount.toFixed(2));
    router.push("/");
  };
  return (
    <div className="w-full flex flex-col p-4 bg-[url(/cartCheckoutBackground.svg)] bg-cover pt-12 rounded-lg mt-auto mb-4 mx-4 min-h-60">
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium">Delivery amount: </p>
        <p className="font-bold">
          ${prices.length > 0 ? deliveryAmount.toFixed(2) : 0}
        </p>
      </div>
      <div className="flex justify-between items-center h-[0.5px] my-2 bg-white/30"></div>
      <div className="flex justify-between items-center mb-auto">
        <p className="font-bold text-lg">Total Amount: </p>
        <p className="font-semibold">${totalAmount.toFixed(2)}</p>
      </div>

      <Button variant="secondary" onClick={handleCheckout}>
        <p>{prices.length > 0 ? "Make Payment" : "Return to home"}</p>
        <div className="bg-black/70 ml-auto h-9 flex flex-row items-center justify-center rounded-full px-2">
          <ChevronRight className="text-white/30 group-hover:text-white/70 transition-all duration-400 group-hover:translate-x-3" />
          <ChevronRight className="text-white/70 group-hover:text-white transition-all duration-200 group-hover:translate-x-1.5" />
          <ChevronRight className="text-white " />
        </div>
      </Button>
    </div>
  );
};

export default CartCheckout;
