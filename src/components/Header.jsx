"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[100%] h-[10vh] flex items-center justify-center">
        <header className="w-[90%] flex items-center justify-center">
      <div className="w-[100%] bg-[white] mx-auto px-4 py-3 flex items-center justify-between rounded-2xl shadow-sm">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex">
            <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
            <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
          </div>
          <span className="text-xl font-semibold">
            auto<span className="text-orange-500">mate</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <button className="hover:text-black">Products ▾</button>
          <button className="hover:text-black">Company ▾</button>
          <button className="hover:text-black">Workflow ▾</button>
          <button className="hover:text-black">Pages ▾</button>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Sign Up →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t">
          <button className="block w-full text-left">Products</button>
          <button className="block w-full text-left">Company</button>
          <button className="block w-full text-left">Workflow</button>
          <button className="block w-full text-left">Pages</button>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
            Sign Up →
          </button>
        </div>
      )}
    </header>
    </div>
  );
}


// function Header() {
//   return (
//     <div className="w-[100%] h-[10vh]  flex items-center justify-center">
//         <div className="w-[90%] h-full flex items-center justify-between px-10 bg-[lightpink] ">
//             <div>
//                 <h6>AIIVA Automation</h6>
//             </div>
//             <div>
//                 <ul className="hidden md:flex items-center justify-center gap-4">
//                     <li>Home</li>
//                     <li>Services</li>
//                     <li>Contact</li>
//                 </ul>
//             </div>
//             <div>
//                 <button className="bg-[green] md:px-4 md:py-2 px-3 py-1 rounded-4xl">Call Now</button>
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Header