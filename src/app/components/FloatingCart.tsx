import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../store/cart.store";

const FlowingCart = () => {
  const items = useCartStore((state) => state.items);
  return (
    <Link
      className="flex flex-col items-center w-screen h-auto bg-[url(/floatingCart2.svg)] bg-center bg-cover bg-no-repeat group cursor-pointer fixed bottom-0 left-0 z-50"
      href={`/cart`}
    >
      {/* Top drag indicator */}
      <div className=" w-16 h-1.5 rounded-full bg-primary translate-y-2 group-hover:translate-y-0 duration-200 transition-all" />

      <div className="flex items-center justify-between  rounded-full px-2 py-5 w-full">
        {/* Left section */}
        <div className="flex items-center gap-4 w-[40%]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-lg font-semibold">
            {items.length}
          </div>

          <div className="leading-tight">
            <p className="text-lg font-semibold text-black">Cart</p>
            <p className="text-sm text-black/80">{items.length} items</p>
          </div>
        </div>

        {/* Right avatars */}
        <div className="flex items-center w-[60%] justify-end">
          {items.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`relative w-12 h-12 rounded-full border-2 border-[#43F0A3] overflow-hidden ${
                index !== 0 ? "-ml-6" : ""
              }`}
            >
              <Image
                src={item.imageUrl}
                alt="product"
                fill
                className="object-cover bg-gray-100"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FlowingCart;
