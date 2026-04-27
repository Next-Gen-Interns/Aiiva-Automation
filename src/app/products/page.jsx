import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Smart Touch Switches", desc: "Premium modular and app-controlled switches for modern spaces." },
  { id: 2, name: "Smart Locks & Access Systems", desc: "Digital locks with fingerprint, PIN, card, and mobile access." },
  { id: 3, name: "Smart Lighting Solutions", desc: "RGB lights, dimmers, mood lighting, and automated lighting controls." },
  { id: 4, name: "Smart Plugs & Power Devices", desc: "Remote-controlled plugs, power modules, and energy-saving devices." },
  { id: 5, name: "Sensors & Safety Devices", desc: "Motion, smoke, gas, temperature, and security sensors with instant alerts." },
  { id: 6, name: "Motorized Automation Products", desc: "Curtain motors, gate motors, door operators, and water valve automation" },
  { id: 7, name: "Smart Fans & Appliances", desc: "BLDC fans and automation-ready smart appliances" },
  { id: 8, name: "Mobile App & Voice Control", desc: "Centralized control through mobile app, Alexa, and Google Assistant integration." },
  { id: 9, name: "Commercial Automation Solutions", desc: "Smart systems for offices, hotels, retail outlets, and commercial buildings." },
  { id: 10, name: "Installation & Support Services", desc: "Site survey, setup, training, maintenance, and after-sales support." },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center py-10 pt-30">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-arimo leading-tight">OUR OFFERINGS</h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
    </div>
  );
}