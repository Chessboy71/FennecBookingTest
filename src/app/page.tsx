"use client";

import { useEffect, useState } from "react";
import PageHeaderWithNavigation from "./components/PageHeaderWithNavigation";
import FilterList from "./components/FilterList";
import Products from "./components/products/Products";
import { Category, plantProducts, Product } from "./utils";
import FloatingCart from "./components/FloatingCart";
import RootSkeleton from "./components/RootSkeleton";

export default function Home() {
  const [filter, setFilter] = useState<Category>("All");

  //mimic loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <RootSkeleton />;
  return (
    <div className="flex items-center justify-center font-sans bg-linear-to-b from-white to-30% to-secondary">
      <main className="py-6 h-screen w-screen lg:flex lg:flex-row lg:max-w-6xl">
        <div className="w-full lg:w-1/2 lg:h-full flex">
          <PageHeaderWithNavigation title="Let’s Make our lives Greener" />
        </div>
        <div className="w-full lg:w-1/2 overflow-y-scroll lg:flex lg:flex-col lg:justify-center [scrollbar-width:none] lg:px-0">
          <FilterList filter={filter} setFilter={setFilter} />
          <Products
            filter={filter}
            products={
              filter == "All"
                ? plantProducts
                : plantProducts.filter(
                    (plant: Product) => plant.category == filter
                  )
            }
          />
        </div>
        <FloatingCart />
      </main>
    </div>
  );
}
