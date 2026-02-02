"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="relative w-full h-[86px] flex items-center">
          <div className="ml-4 flex items-center gap-5">
            <Image
              src="/pic.png"
              alt="Nirvaana Wellness & Spa"
              width={230}
              height={90}
              priority
              className="object-contain drop-shadow-[0_0_16px_rgba(212,175,55,0.45)]"
            />
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[86px]" />

      {/* ================= MAIN ================= */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-[#e8d9a8]">
        {/* -------- CONTACT INFO -------- */}
        <div>
          <h2 className="text-4xl font-serif mb-8 text-[#d4af37]">
            Contact Us
          </h2>

          <p className="mb-4">
            📞{" "}
            <a
              href="tel:+919520034538"
              className="hover:text-[#d4af37]"
            >
              +91-95200-34538
            </a>
          </p>

          <p className="mb-6">
            📧{" "}
            <a
              href="mailto:nirvaanabysunrise@gmail.com"
              className="hover:text-[#d4af37]"
            >
              nirvaanabysunrise@gmail.com
            </a>
          </p>

          <p className="mb-8">
            📍 Serving premium hotels & resorts across India
          </p>

          <a
            href="https://wa.me/919520034538"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-[#d4af37] text-black font-semibold hover:bg-[#e8d9a8] transition"
          >
            WhatsApp Us
          </a>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-[#d4af37] border-t border-[#d4af37]/20">
        © 2026 NIRVAANA Wellness & Spa — A Premium Spa Brand by Sunrise Wellness
        <br />
        GSTIN: 09AIHPB3271B1ZR
      </footer>
    </>
  );
}
