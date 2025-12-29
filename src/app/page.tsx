"use client";

import { useState } from "react";
import PageHeaderWithNavigation from "./components/PageHeaderWithNavigation";
import FilterList from "./components/FilterList";
import Products from "./components/products/Products";
import { Category } from "./utils";

export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: Category;
};

export default function Home() {
  const MainPagetitle = (
    <>
      Let’s Make our lives <span className="font-bold">Greener</span>
    </>
  );

  const [filter, setFilter] = useState<Category>("All");
  const plantProducts: Product[] = [
    {
      id: "plant-1",
      name: "Monstera Deliciosa",
      description:
        "Large tropical leaves that bring a bold, modern touch to any room.",
      imageUrl: "/productsImages/monstera.png",
      price: 45,
      category: "Plants",
    },
    {
      id: "plant-2",
      name: "Fiddle Leaf Fig",
      description:
        "A statement indoor plant with tall branches and violin-shaped leaves.",
      imageUrl: "/productsImages/fiddleLeaf.png",
      price: 60,
      category: "Plants",
    },
    {
      id: "plant-3",
      name: "Snake Plant",
      description:
        "Low-maintenance plant that purifies air and thrives in low light.",
      imageUrl: "/productsImages/snakePlant.png",
      price: 30,
      category: "Plants",
    },
    {
      id: "plant-4",
      name: "Pothos Golden",
      description:
        "Fast-growing trailing plant, perfect for shelves and hanging pots.",
      imageUrl: "/productsImages/pothos.png",
      price: 25,
      category: "Plants",
    },
    {
      id: "plant-5",
      name: "Rubber Plant",
      description:
        "Glossy dark-green leaves that add elegance to minimalist interiors.",
      imageUrl: "/productsImages/rubberPlant.png",
      price: 40,
      category: "Plants",
    },
    {
      id: "plant-6",
      name: "Peace Lily",
      description:
        "Elegant white blooms with lush green leaves, ideal for brightening indoor spaces.",
      imageUrl: "/productsImages/peaceLily.png",
      price: 35,
      category: "Plants",
    },
    {
      id: "plant-7",
      name: "Aloe Vera",
      description:
        "A hardy succulent known for its soothing gel and minimal care needs.",
      imageUrl: "/productsImages/aloeVera.png",
      price: 20,
      category: "Plants",
    },
    {
      id: "plant-8",
      name: "Calathea Orbifolia",
      description:
        "Decorative plant with striking patterned leaves that thrive in humid environments.",
      imageUrl: "/productsImages/calathea.png",
      price: 50,
      category: "Plants",
    },
    {
      id: "plant-9",
      name: "ZZ Plant",
      description:
        "Extremely durable plant with glossy leaves, perfect for offices and low light.",
      imageUrl: "/productsImages/zzPlant.png",
      price: 38,
      category: "Plants",
    },
    {
      id: "plant-10",
      name: "Chinese Evergreen",
      description:
        "Colorful foliage plant that adapts well to different indoor conditions.",
      imageUrl: "/productsImages/chineseEvergreen.png",
      price: 42,
      category: "Plants",
    },
    {
      id: "flower-1",
      name: "Rose Bouquet",
      description: "Classic red roses, perfect for romantic occasions.",
      imageUrl: "/productsImages/roses.png",
      price: 35,
      category: "Flowers",
    },
    {
      id: "flower-2",
      name: "Orchid Phalaenopsis",
      description: "Elegant flowering plant with long-lasting blooms.",
      imageUrl: "/productsImages/orchid.png",
      price: 55,
      category: "Flowers",
    },
    {
      id: "flower-3",
      name: "Tulip Mix",
      description: "Colorful spring flowers that bring freshness to any room.",
      imageUrl: "/productsImages/tulips.png",
      price: 30,
      category: "Flowers",
    },
    {
      id: "flower-4",
      name: "Sunflower Pot",
      description: "Bright and cheerful flowers that thrive in sunlight.",
      imageUrl: "/productsImages/sunflower.png",
      price: 25,
      category: "Flowers",
    },
    {
      id: "flower-5",
      name: "Lavender Pot",
      description: "Soothing fragrance with delicate purple flowers.",
      imageUrl: "/productsImages/lavender.png",
      price: 28,
      category: "Flowers",
    },
    {
      id: "cactus-1",
      name: "Golden Barrel Cactus",
      description: "Round cactus with golden spines, very low maintenance.",
      imageUrl: "/productsImages/goldenCactus.png",
      price: 40,
      category: "Cacti",
    },
    {
      id: "cactus-2",
      name: "Bunny Ear Cactus",
      description: "Playful cactus with soft-looking pads (handle with care!).",
      imageUrl: "/productsImages/bunnyEar.png",
      price: 22,
      category: "Cacti",
    },
    {
      id: "cactus-3",
      name: "Saguaro Mini",
      description: "Mini version of the iconic desert cactus.",
      imageUrl: "/productsImages/saguaro.png",
      price: 45,
      category: "Cacti",
    },
    {
      id: "cactus-4",
      name: "Moon Cactus",
      description: "Colorful grafted cactus, great for desks.",
      imageUrl: "/productsImages/moonCactus.png",
      price: 20,
      category: "Cacti",
    },
    {
      id: "cactus-5",
      name: "Old Man Cactus",
      description: "Unique cactus with white hair-like spines.",
      imageUrl: "/productsImages/oldManCactus.png",
      price: 38,
      category: "Cacti",
    },
    {
      id: "herb-1",
      name: "Basil Plant",
      description: "Fresh aromatic herb, perfect for cooking.",
      imageUrl: "/productsImages/basil.png",
      price: 15,
      category: "Herbs",
    },
    {
      id: "herb-2",
      name: "Rosemary Pot",
      description: "Woody herb with a strong fragrance, great for roasting.",
      imageUrl: "/productsImages/rosemary.png",
      price: 18,
      category: "Herbs",
    },
    {
      id: "herb-3",
      name: "Mint Plant",
      description: "Fast-growing herb, ideal for tea and desserts.",
      imageUrl: "/productsImages/mint.png",
      price: 14,
      category: "Herbs",
    },
    {
      id: "herb-4",
      name: "Thyme Pot",
      description: "Compact herb with earthy flavor.",
      imageUrl: "/productsImages/thyme.png",
      price: 16,
      category: "Herbs",
    },
    {
      id: "herb-5",
      name: "Parsley Pot",
      description: "Easy-to-grow herb used in many dishes.",
      imageUrl: "/productsImages/parsley.png",
      price: 12,
      category: "Herbs",
    },
    {
      id: "bonsai-1",
      name: "Juniper Bonsai",
      description: "Classic bonsai with dense foliage and strong character.",
      imageUrl: "/productsImages/juniperBonsai.png",
      price: 85,
      category: "Bonsai",
    },
    {
      id: "bonsai-2",
      name: "Ficus Bonsai",
      description: "Popular indoor bonsai with glossy leaves.",
      imageUrl: "/productsImages/ficusBonsai.png",
      price: 70,
      category: "Bonsai",
    },
    {
      id: "bonsai-3",
      name: "Maple Bonsai",
      description: "Delicate leaves that change color with the seasons.",
      imageUrl: "/productsImages/mapleBonsai.png",
      price: 95,
      category: "Bonsai",
    },
    {
      id: "bonsai-4",
      name: "Chinese Elm Bonsai",
      description: "Resilient bonsai, perfect for beginners.",
      imageUrl: "/productsImages/chineseElm.png",
      price: 75,
      category: "Bonsai",
    },
    {
      id: "bonsai-5",
      name: "Pine Bonsai",
      description: "Traditional bonsai with strong trunk and needles.",
      imageUrl: "/productsImages/pineBonsai.png",
      price: 90,
      category: "Bonsai",
    },
    {
      id: "succulent-1",
      name: "Echeveria",
      description: "Rosette-shaped succulent with soft pastel colors.",
      imageUrl: "/productsImages/echeveria.png",
      price: 18,
      category: "Succulents",
    },
    {
      id: "succulent-2",
      name: "Haworthia",
      description: "Compact succulent with striped leaves.",
      imageUrl: "/productsImages/haworthia.png",
      price: 20,
      category: "Succulents",
    },
    {
      id: "succulent-3",
      name: "Jade Plant",
      description: "Symbol of good luck and prosperity.",
      imageUrl: "/productsImages/jadePlant.png",
      price: 25,
      category: "Succulents",
    },
    {
      id: "succulent-4",
      name: "String of Pearls",
      description: "Trailing succulent with bead-like leaves.",
      imageUrl: "/productsImages/stringOfPearls.png",
      price: 28,
      category: "Succulents",
    },
    {
      id: "succulent-5",
      name: "Zebra Plant",
      description: "Eye-catching succulent with white stripes.",
      imageUrl: "/productsImages/zebraPlant.png",
      price: 22,
      category: "Succulents",
    },
    {
      id: "indoor-1",
      name: "Snake Plant Indoor",
      description:
        "Hardy indoor plant that thrives in low light and improves air quality.",
      imageUrl: "/productsImages/indoorSnakePlant.png",
      price: 32,
      category: "Indoor",
    },
    {
      id: "indoor-2",
      name: "Peace Lily Indoor",
      description: "Elegant indoor plant with white blooms and glossy leaves.",
      imageUrl: "/productsImages/indoorPeaceLily.png",
      price: 38,
      category: "Indoor",
    },
    {
      id: "indoor-3",
      name: "ZZ Plant Indoor",
      description: "Low-light tolerant plant ideal for offices and apartments.",
      imageUrl: "/productsImages/indoorZZPlant.png",
      price: 35,
      category: "Indoor",
    },
    {
      id: "indoor-4",
      name: "Pothos Hanging",
      description:
        "Trailing indoor plant perfect for shelves and hanging baskets.",
      imageUrl: "/productsImages/indoorPothos.png",
      price: 28,
      category: "Indoor",
    },
    {
      id: "indoor-5",
      name: "Calathea Medallion",
      description: "Decorative indoor plant with vibrant patterned leaves.",
      imageUrl: "/productsImages/indoorCalathea.png",
      price: 45,
      category: "Indoor",
    },
    {
      id: "outdoor-1",
      name: "Garden Fern",
      description: "Lush green fern ideal for shaded outdoor gardens.",
      imageUrl: "/productsImages/outdoorFern.png",
      price: 30,
      category: "Outdoor",
    },
    {
      id: "outdoor-2",
      name: "Olive Tree",
      description:
        "Mediterranean outdoor tree that thrives in sunny environments.",
      imageUrl: "/productsImages/oliveTree.png",
      price: 120,
      category: "Outdoor",
    },
    {
      id: "outdoor-3",
      name: "Rose Bush",
      description: "Classic flowering bush for gardens and patios.",
      imageUrl: "/productsImages/roseBush.png",
      price: 40,
      category: "Outdoor",
    },
    {
      id: "outdoor-4",
      name: "Lavender Bush",
      description: "Fragrant outdoor plant that attracts pollinators.",
      imageUrl: "/productsImages/outdoorLavender.png",
      price: 34,
      category: "Outdoor",
    },
    {
      id: "outdoor-5",
      name: "Palm Tree",
      description: "Tropical outdoor plant perfect for terraces and gardens.",
      imageUrl: "/productsImages/palmTree.png",
      price: 95,
      category: "Outdoor",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-b from-white to-30% to-secondary">
      <main className="px-4 py-6 h-screen w-screen overflow-hidden">
        <PageHeaderWithNavigation title={MainPagetitle} />
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
      </main>
    </div>
  );
}
