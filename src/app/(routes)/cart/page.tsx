import PageHeaderWithNavigation from "@/app/components/PageHeaderWithNavigation";
import CartCheckout from "./components/CartCheckout";
import ProductCart from "./components/ProductCart";

const CartPage = () => {
  const CartPageTitle = "Cart";
  return (
    <div className="min-h-screen flex flex-col items-center font-sans bg-linear-to-b from-white to-30% to-secondary px-4">
      <PageHeaderWithNavigation title={CartPageTitle} cartCount={4} />
      {/* Separation */}
      <div className=" w-16 h-1 rounded-full bg-gray-700 group-hover:-translate-y-2 duration-200 transition-all" />
      <ProductCart />
      <CartCheckout />
    </div>
  );
};

export default CartPage;
