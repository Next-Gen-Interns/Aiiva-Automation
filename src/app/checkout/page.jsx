"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const items = cart
      .map((item) => `${item.name}`)
      .join("\n");

    const message = `
New Order 🛒

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

Items:
${items}
    `;

    const url = `https://wa.me/18001230789?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Checkout</h1>

      <div className="mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto p-6 flex flex-col gap-4">

      <input
        name="name"
        placeholder="Full Name"
        className="border p-2 rounded"
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="border p-2 rounded"
        onChange={handleChange}
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        className="border p-2 rounded"
        onChange={handleChange}
        required
      />

      <button
        onClick={sendToWhatsApp}
        className="bg-green-600 text-white py-2 rounded"
      >
        Send Order on WhatsApp
      </button>

      </div>
    </div>
  );
}