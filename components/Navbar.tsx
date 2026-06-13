"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { schoolInfo } from "../lib/SchoolData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/admissions", label: "Admissions" },
    { href: "/gallery", label: "Gallery" },
    { href: "/notices", label: "Notices" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#800020] text-white text-center py-2 text-sm font-medium">
        🏆 Celebrating 25 Years of Educational Excellence • Admissions Open for Session 2026-27
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo + School Name */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-[#800020] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              S
            </div>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-[#800020] leading-tight">
                {schoolInfo.name}
              </h1>

              <div className="flex items-center gap-2 flex-wrap">

                <p className="text-xs md:text-sm text-gray-500">
                  {schoolInfo.motto}
                </p>

                <span className="bg-yellow-400 text-black text-[10px] md:text-xs px-2 py-1 rounded-full font-bold">
                  🏆 25 Years
                </span>

              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#800020] font-bold border-b-2 border-[#800020] pb-1"
                    : "text-gray-700 hover:text-[#800020]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/admissions"
              className="bg-[#800020] text-white px-5 py-3 rounded-xl hover:bg-[#650019] transition shadow-md"
            >
              Admissions Open
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-[#800020]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">

            <div className="flex flex-col p-6 gap-5">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${
                    pathname === link.href
                      ? "text-[#800020] font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="bg-[#800020] text-white px-4 py-3 rounded-xl text-center"
              >
                Admissions Open
              </Link>

            </div>

          </div>
        )}
      </nav>
    </>
  );
}