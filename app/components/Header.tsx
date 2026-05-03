"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 left-0 w-full h-[86px] z-50 bg-black/90 backdrop-blur-md border-b border-[#d4af37]/20">

        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">


          {/* LOGO */}
          <Image
            src="/pic.png"
            alt="Nirvaana Wellness & Spa"
            width={180}
            height={70}
            priority
            className="object-contain"
          />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-[#f5d58a]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#d4af37] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP ICONS */}
            <div className="hidden md:flex items-center gap-2">
              <a href="tel:+918800977146" className="icon-btn">
                <Phone size={18} />
              </a>
              <a href="mailto:nirvaanabysunrise@gmail.com" className="icon-btn">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/918800977146" className="icon-btn">
                <MessageCircle size={18} />
              </a>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden text-[#d4af37]"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/95 text-[#f5d58a] overflow-y-auto">

          <div className="min-h-screen flex flex-col pt-[86px] px-6 relative">

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-6 right-6 text-[#d4af37]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={36} />
            </button>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 mt-24 text-2xl uppercase tracking-widest items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#d4af37] transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="w-24 h-px bg-[#d4af37]/40 my-16 mx-auto" />

            {/* CONTACT ICONS */}
            <div className="flex justify-center gap-8 pb-16">
              <a href="tel:+918800977146" className="icon-btn">
                <Phone size={22} />
              </a>
              <a href="mailto:nirvaanabysunrise@gmail.com" className="icon-btn">
                <Mail size={22} />
              </a>
              <a href="https://wa.me/918800977146" className="icon-btn">
                <MessageCircle size={22} />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
