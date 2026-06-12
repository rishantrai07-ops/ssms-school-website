"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + School Name */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#800020]">
              {schoolInfo.name}
            </h1>

            <p className="text-xs text-gray-500">
              {schoolInfo.motto}
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-[#800020] font-semibold"
                  : "text-gray-700 hover:text-[#800020]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/admissions"
            className="bg-[#800020] text-white px-4 py-2 rounded-lg hover:bg-[#650019] transition"
          >
            Admissions Open
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.href
                    ? "text-[#800020] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-[#800020] text-white px-4 py-2 rounded-lg text-center"
            >
              Admissions Open
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}