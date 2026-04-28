"use client";

const items = [
  {
    title: "Smart Home Automation",
    description: "Control and monitor your home devices seamlessly.",
    points: [
      "Mobile app control",
      "Voice assistant integration",
      "Remote access",
    ],
  },
  {
    title: "Security & Access Control",
    description: "Advanced protection systems for your property.",
    points: ["Biometric locks", "CCTV integration", "Real-time alerts"],
  },
  {
    title: "Lighting Automation",
    description: "Enhance ambiance with intelligent lighting.",
    points: ["Scene-based lighting", "Energy saving modes", "Remote dimming"],
  },
  {
    title: "Energy Management Solutions",
    description: "Optimize power usage and reduce bills.",
    points: ["Real-time monitoring", "Usage analytics", "Smart scheduling"],
  },
];

export default function OurServices() {
  const loopItems = [...items, ...items]; // IMPORTANT for smooth loop

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-20 py-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm tracking-[2px] text-orange-500 font-medium">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Connected Home Solutions <br />
            For Everyday Convenience
          </h2>

          <p className="text-gray-600">
            Sollicitudin pede risus a vulputate feugiat lobortis est class nec
            phasellus vehicula.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative overflow-hidden">

          <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">

            {loopItems.map((item, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <span className="text-orange-500 font-bold">↗</span>
                </div>

                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>

                <ul className="text-sm text-gray-700 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-500">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50" />
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}