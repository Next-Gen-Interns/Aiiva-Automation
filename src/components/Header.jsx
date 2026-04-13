"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[40] bg-black/30 transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Navbar Wrapper */}
      <div className="w-full flex justify-center fixed top-4 z-50 px-4">
        <header className="w-full max-w-7xl">
          <div className="bg-white px-5 py-4 flex items-center justify-between rounded-2xl shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex">
                <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
                <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-[16px] font-semibold text-black">
                  AIIVA
                </span>
                <span className="text-[11px] font-bold text-orange-500">
                  Automation
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`text-[13px] font-semibold tracking-wide transition
                  ${
                    isActive(href)
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="tel:+18001230789"
                className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-full transition"
              >
                Call Now
              </a>

              {/* Mobile Call */}
              <a
                href="tel:+18001230789"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-black/20"
              >
                <Phone className="h-6 w-6 text-black/40" />
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1"
              >
                <span
                  className={`w-5 h-[2px] bg-black transition ${
                    menuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-black transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-black transition ${
                    menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black text-white z-50 transform transition-transform duration-300
            ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <span className="font-semibold">Menu</span>

              <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
