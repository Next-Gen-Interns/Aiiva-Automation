"use client";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="w-[250px] border rounded-xl p-4 flex flex-col h-full">
      <div className="flex flex-col gap-3 flex-1">
        <div className="w-full h-40 bg-gray-100 rounded-lg" />
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 flex-1 pb-2">
          {product.desc}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white py-2 rounded-lg mt-auto hover:bg-black/80 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}