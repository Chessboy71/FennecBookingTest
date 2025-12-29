"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import navIcon from "../../../../public/icons/ArrowRight.svg";
import { Category } from "../../utils";
import ProductCard from "./ProductCard";
import { Product } from "@/app/page";

const Products = ({
  filter,
  products,
}: {
  filter: Category;
  products: Product[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // duplicate products to simulate infinite scroll
  const infiniteProducts = [...products, ...products, ...products];

  // Scroll to middle copy when filter changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth ?? 0;

    // Jump to middle copy
    container.scrollLeft = cardWidth * products.length;

    const onScroll = () => {
      const children = Array.from(container.children) as HTMLElement[];
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => container.removeEventListener("scroll", onScroll);
  }, [filter, products.length]);

  // Scroll to a specific card index
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const child = children[index];
    if (!child) return;

    const containerCenter = container.offsetWidth / 2;
    const childCenter = child.offsetLeft + child.offsetWidth / 2;

    container.scrollTo({
      left: childCenter - containerCenter,
      behavior: "smooth",
    });
  };

  // Right arrow
  const handleNext = () => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= infiniteProducts.length) {
      nextIndex = products.length;
    }
    scrollToIndex(nextIndex);
  };

  // Left arrow
  const handlePrev = () => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) {
      prevIndex = products.length * 2 - 1;
    }
    scrollToIndex(prevIndex);
  };

  return (
    <div className="my-8 w-full">
      <header className="flex justify-between items-center px-4">
        <h1 className="text-2xl">{filter} Collections</h1>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="p-1">
            <Image
              src={navIcon}
              alt="Arrow left"
              width={16}
              height={12}
              className="rotate-180"
            />
          </button>
          <button onClick={handleNext} className="p-1">
            <Image src={navIcon} alt="Arrow right" width={16} height={12} />
          </button>
        </div>
      </header>

      <div
        ref={containerRef}
        className="mt-4 w-full flex items-center overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none]"
      >
        {products.length > 0 ? (
          infiniteProducts.map((product: Product, index) => (
            <ProductCard
              key={index}
              product={product}
              active={index === activeIndex}
              previous={index - 1 === activeIndex}
              next={index + 1 === activeIndex}
            />
          ))
        ) : (
          <p className="text-gray-400 text-2xl text-center mt-12">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
