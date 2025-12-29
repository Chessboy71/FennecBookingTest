"use client";

import { useState } from "react";
import PageHeaderWithNavigation from "./components/PageHeaderWithNavigation";
import FilterList from "./components/FilterList";
import Products from "./components/products/Products";
import { Category, plantProducts, Product } from "./utils";
import FloatingCart from "./components/FloatingCart";

export default function Home() {
  const [filter, setFilter] = useState<Category>("All");

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-b from-white to-30% to-secondary">
      <main className="py-6 h-screen w-screen overflow-hidden">
        <PageHeaderWithNavigation title="Let’s Make our lives Greener" />
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
        <FloatingCart
          count={4}
          items={4}
          images={[
            "/productsImages/potterHead.png",
            "/productsImages/potterHead.png",
            "/productsImages/potterHead.png",
            "/productsImages/potterHead.png",
          ]}
        />
      </main>
    </div>
  );
}
