import Image from "next/image";


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
    points: [
      "Biometric locks",
      "CCTV integration",
      "Real-time alerts",
    ],
  },
  {
    title: "Lighting Automation",
    description: "Enhance ambiance with intelligent lighting.",
    points: [
      "Scene-based lighting",
      "Energy saving modes",
      "Remote dimming",
    ],
  },
  {
    title: "Energy Management Solutions",
    description: "Optimize power usage and reduce bills.",
    points: [
      "Real-time monitoring",
      "Usage analytics",
      "Smart scheduling",
    ],
  },
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
    title: "Smart Home Automation",
    description: "Control and monitor your home devices seamlessly.",
    points: [
      "Mobile app control",
      "Voice assistant integration",
      "Remote access",
    ],
  },
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
    title: "Smart Home Automation",
    description: "Control and monitor your home devices seamlessly.",
    points: [
      "Mobile app control",
      "Voice assistant integration",
      "Remote access",
    ],
  },
];

export default function OurServices() {
  return (
    <>
    <style>{`@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}`}</style>
    <section className="bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl h-[100vh] py-40 mx-auto grid lg:grid-cols-2 gap-10 ">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-[2px] text-orange-500 mb-3">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Connected Home Solutions <br />
            For Everyday Convenience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Sollicitudin pede risus a vulputate feugiat lobortis est class nec
            phasellus vehicula. Feugiat torquent nulla in netus dictum ligula
            iaculis integer nibh. Platea sociosqu justo class porttitor ad sit
            finibus.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>

        {/* RIGHT FEATURES */}
        {/* RIGHT CAROUSEL */}
        <div className="relative overflow-hidden group py-10">
        <div className="flex w-max gap-6 animate-scroll group-hover:[animation-play-state:paused] px-4">

        {[ ...items].map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] h-[340px] border border-gray-200 rounded-2xl p-5 flex flex-col shadow-sm"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <span className="text-orange-500 text-sm font-bold">↗</span>
            </div>

            {/* Title */}
            <h3 className="text-gray-900 font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
              {item.description}
            </p>

            {/* Bullet Points */}
            <ul className="text-sm text-gray-700 space-y-1 mb-auto">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-[2px]">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom line */}
            <div className="h-[2px] bg-orange-500 w-0 hover:w-full transition-all duration-500 mt-4" />
          </div>
        ))}

      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-0 bg-linear-[90deg,white_0%,transparent_10%,transparent_90%,white_100%]" />
    </div>
      </div>
    </section>
    </>
  );
}

// {/* Subtitle */}
// <p className="text-sm text-gray-500 mt-2">
// Premium service built for modern workflows.
// </p>
// import Image from "next/image";

// export default function OurServices() {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-6">
//           <p className="text-sm font-medium tracking-[2px] text-orange-500 mb-3">
//             Our Services
//           </p>

//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
//             Connected Home Solutions <br />
//             For Everyday Convenience
//           </h2>

//           <p className="text-gray-600 leading-relaxed">
//             Sollicitudin pede risus a vulputate feugiat lobortis est class nec
//             phasellus vehicula. Feugiat torquent nulla in netus dictum ligula
//             iaculis integer nibh. Platea sociosqu justo class porttitor ad sit
//             finibus.
//           </p>

//           <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
//             Learn more
//           </button>
//         </div>

//         {/* RIGHT FEATURES */}
//         <div className="space-y-5">
//           {[
//             "Transparent Pricing",
//             "Modern Tools",
//             "Data-Driven Strategy",
//             "Fast Turnaround",
//             "Client Satisfaction Focus",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between border-b pb-3 group cursor-pointer"
//             >
//               <span className="text-gray-800 group-hover:text-black transition">
//                 {item}
//               </span>
//               <span className="text-gray-400 group-hover:translate-x-1 transition">
//                 →
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }