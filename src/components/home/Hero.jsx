import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f9fafb] font-arimo">
      {/* 🔥 Bottom Center Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-200 blur-[120px] opacity-40 pointer-events-none"></div>

      {/* 🔥 Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-block px-4 py-2 text-sm border rounded-full text-gray-600 mb-6">
            Welcome to AIIVA
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 leading-tight">
            {/* Stop Clicking, Start <br />
            Scaling with{" "} */}
            Launch Your Smart Home Brand in
            <span className="text-black font-bold"> 28 Days.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-lg">
            White-label solution with 150+ ready-to-ship products and a fully
            featured mobile app.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
              Connect with us
            </button>

            <button className="border border-gray-800 text-gray-800 px-6 py-3 hover:scale-105 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100">
              Explore Catalogs →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Testimonial Card) */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 max-w-sm">
            <p className="text-gray-600 text-sm mb-4">
              “Automate saved our team over 15 hours a week just in lead
              qualification alone, making our sales cycle faster.”
            </p>

            <div className="flex items-center justify-between text-sm">
              <span className="bg-yellow-100 px-3 py-1 rounded-full">
                ⭐ 5.0 on TrustSaaS
              </span>

              <span className="font-semibold text-gray-700">True North</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
