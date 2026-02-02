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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto h-[86px] px-4 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/pic.png"
          alt="Nirvaana Wellness & Spa"
          width={180}
          height={70}
          className="object-contain"
          priority
        />

        {/* Desktop Nav (DESKTOP ONLY) */}
        <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-[#f5d58a]">
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

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Contact Icons (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+919520034538" className="icon-btn">
              <Phone size={18} />
            </a>
            <a href="mailto:nirvaanabysunrise@gmail.com" className="icon-btn">
              <Mail size={18} />
            </a>
            <a href="https://wa.me/919520034538" className="icon-btn">
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Hamburger (MOBILE ONLY) */}
          <button
            className="md:hidden text-[#d4af37]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center text-[#f5d58a]">

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-[#d4af37]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={36} />
          </button>

          {/* Mobile Nav */}
          <div className="flex flex-col items-center gap-8 text-2xl uppercase tracking-widest">
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

          {/* Divider */}
          <div className="w-24 h-px bg-[#d4af37]/40 my-10" />

          {/* Contact Icons INSIDE HAMBURGER */}
          <div className="flex items-center gap-6">
            <a href="tel:+919520034538" className="icon-btn">
              <Phone size={22} />
            </a>
            <a href="mailto:nirvaanabysunrise@gmail.com" className="icon-btn">
              <Mail size={22} />
            </a>
            <a href="https://wa.me/919520034538" className="icon-btn">
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
