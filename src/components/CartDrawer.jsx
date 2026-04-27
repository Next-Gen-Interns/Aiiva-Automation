"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, open, setOpen, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-50 transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-[320px] h-full bg-white z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b font-semibold">
  <span>Cart</span>

  <button
    onClick={() => setOpen(false)}
    className="w-8 h-8 flex items-center justify-center rounded-lg border hover:bg-black/10 transition"
    aria-label="Close cart"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
</div>

        <div className="p-4 flex flex-col gap-3">
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">{item.name}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-6 h-6 border rounded"
              >
                -
              </button>

              <span className="text-sm">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-6 h-6 border rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
        </div>

        {cart.length > 0 && (
          <div className="p-4 mt-auto">
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-black text-white py-2 rounded-lg"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}