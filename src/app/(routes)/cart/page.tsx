"use client";

import PageHeaderWithNavigation from "@/app/components/PageHeaderWithNavigation";
import CartCheckout from "./components/CartCheckout";
import ProductCart from "./components/ProductCart";
import { useCartStore } from "@/app/store/cart.store";

const CartPage = () => {
  const CartPageTitle = "Cart";
  const cartItems = useCartStore((state) => state.items);

  return (
    <main className="bg-linear-to-b from-white to-30% to-secondary lg:flex lg:justify-center">
      <div className="h-dvh lg:w-xl flex flex-col items-center font-sans px-4">
        <PageHeaderWithNavigation
          title={CartPageTitle}
          cartCount={cartItems.length}
        />
        {/* Separation */}
        <div className=" w-16 h-1 rounded-full bg-gray-700 group-hover:-translate-y-2 duration-200 transition-all" />
        {cartItems.length > 0 ? (
          <ProductCart items={cartItems} />
        ) : (
          <p className="text-gray-500 mt-auto">Your cart is empty.</p>
        )}
        <CartCheckout
          prices={cartItems.map((item) => ({
            price: item.price,
            quantity: item.quantity,
          }))}
        />
      </div>
    </main>
  );
};

export default CartPage;
