"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sugma Deik",
    role: "Customer",
    image: "/user1.jpg",
    text: "SmartNex made our home so much more convenient."
  },
  {
    name: "Joe Mama",
    role: "Customer",
    image: "/user2.jpg",
    text: "Everything is controllable from my phone."
  },
  {
    name: "Deez Nuts",
    role: "Customer",
    image: "/user3.jpg",
    text: "Best smart home experience ever."
  },
  {
    name: "John Doe",
    role: "Customer",
    image: "/user1.jpg",
    text: "Smooth automation and great support."
  },
  {
    name: "Jane Smith",
    role: "Customer",
    image: "/user2.jpg",
    text: "Highly reliable system."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const visible = 3;
  const maxIndex = testimonials.length - visible;

  const next = () => setIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setIndex((p) => (p <= 0 ? maxIndex : p - 1));

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-semibold font-arimo">
          Hear From Our Happy Clients
        </h2>

        <div className="w-24 h-0.5 bg-purple-800 mx-auto mt-3 mb-12" />

        {/* Carousel Wrapper */}
        <div className="relative flex items-center">

          {/* LEFT ARROW (outside cards) */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 font-arimo text-3xl text-gray-600 hover:text-black"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="overflow-hidden w-full px-10">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[33.333%] font-arimo bg-gray-200 p-6 text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <h4 className="font-semibold font-arimo text-gray-800">
                      {item.name}, {item.role}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm font-arimo">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 z-10 font-arimo text-3xl text-gray-600 hover:text-black"
          >
            ›
          </button>
        </div>

        {/* Pagination with MOVING BAR */}
        <div className="mt-10 flex justify-center items-center relative w-fit mx-auto gap-6">

          {testimonials.slice(0, maxIndex + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`text-sm z-10 ${
                index === i ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* MOVING BAR */}
          <div
            className="absolute bottom-[-6px] h-1 w-10 bg-gray-900 rounded-full transition-all duration-300"
            style={{
              left: `${index * 40}px`
            }}
          />
        </div>

      </div>
    </section>
  );
}