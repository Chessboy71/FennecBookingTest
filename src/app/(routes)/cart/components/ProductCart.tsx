import { Product } from "@/app/page";
import ProductCard from "./ProductCard";

const ProductCart = () => {
  const productsInCart: Product[] = [
    {
      id: "plant-1",
      name: "Monstera Deliciosa",
      description:
        "Large tropical leaves that bring a bold, modern touch to any room.",
      imageUrl: "/productsImages/monstera.jpg",
      price: 45,
      category: "Plants",
    },
    {
      id: "flower-4",
      name: "Sunflower Pot",
      description: "Bright and cheerful flowers that thrive in sunlight.",
      imageUrl: "/productsImages/sunflower.jpg",
      price: 25,
      category: "Flowers",
    },
    {
      id: "cactus-2",
      name: "Bunny Ear Cactus",
      description: "Playful cactus with soft-looking pads (handle with care!).",
      imageUrl: "/productsImages/bunnyEar.jpg",
      price: 22,
      category: "Cacti",
    },
    {
      id: "herb-2",
      name: "Rosemary Pot",
      description: "Woody herb with a strong fragrance, great for roasting.",
      imageUrl: "/productsImages/rosemary.jpg",
      price: 18,
      category: "Herbs",
    },
    {
      id: "herb-4",
      name: "Thyme Pot",
      description: "Compact herb with earthy flavor.",
      imageUrl: "/productsImages/thyme.jpg",
      price: 16,
      category: "Herbs",
    },
  ];
  return (
    <div className="flex flex-col w-screen gap-2 px-4 my-4 max-h-[464px] overflow-y-auto">
      {productsInCart.map((product, index) => (
        <div key={product.id}>
          <ProductCard product={product} />
          {index < productsInCart.length - 1 && (
            <div className="my-4 border-b border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
