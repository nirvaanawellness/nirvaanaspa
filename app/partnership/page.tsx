"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
export default function Partnership() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  return (
    <>
      {/* TOP NAVBAR — SAME AS HOME */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="relative w-full h-[86px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-5">
            <Image
              src="/pic.png"
              alt="Nirvaana Wellness & Spa"
              width={230}
              height={90}
              priority
              className="object-contain drop-shadow-[0_0_16px_rgba(212,175,55,0.45)]"
            />

            <div className="flex items-center gap-3">
              <a href="tel:+919520034538" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:scale-110 transition">
                <Phone size={18} />
              </a>
              <a href="mailto:nirvaanabysunrise@gmail.com" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:scale-110 transition">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/919520034538" target="_blank" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:scale-110 transition">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <nav className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-10 text-sm uppercase tracking-[0.28em] text-[#f5d58a]">
            {["Home", "About", "Services", "Partnership", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`transition ${
                    item === "Contact"
                      ? "text-[#d4af37]"
                      : "hover:text-[#d4af37]"
                  }`}
                >
                  {item}
                </Link>
              ))}
          </nav>
        </div>
      </header>

      <div className="h-15" id="home"></div>

        {/* ---------------- HERO IMAGE ONLY ---------------- */}
        <section className="relative h-[80vh] w-full bg-black mt-[86px]">
        <div
            className="absolute inset-0 bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: "url('/proposal.jpg')" }}
        />
        </section>

        {/* ---------------- HERO TEXT BELOW ---------------- */}
        <section className="bg-[#0b0604] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#f5d58a] mb-6">
            Luxury Spa Partnership Program
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e8d9a8] leading-relaxed">
            Transform your spa space into a professionally managed, revenue-generating
            wellness destination — without operational burden.
        </p>
        </section>



      {/* MAIN CONTENT */}
      <main className="bg-[#0b0604] text-[#f5d58a] py-20 px-6">


        {/* PARTNER WITH US FORM */}
        <div className="max-w-3xl mx-auto bg-black/40 border border-[#d4af37]/30 rounded-3xl p-12 backdrop-blur-md mb-24">
          <h3 className="text-3xl font-serif text-[#f5d58a] mb-8 text-center">
            Partner With Us
          </h3>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("sending");
              const f = e.currentTarget;

              await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: (f.elements.namedItem("business") as HTMLInputElement).value,
                  phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
                  email: (f.elements.namedItem("email") as HTMLInputElement).value,
                  subject: "Spa Partnership Request",
                  message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
                }),
              });

              setStatus("success");
              setTimeout(() => {
                setStatus("idle");
                f.reset();
              }, 2500);
            }}
          >
            <input name="business" required placeholder="Business / Property Name"
              className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

            <input name="phone" required placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

            <input name="email" type="email" required placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

            <textarea name="message" rows={4} required placeholder="Tell us about your property & spa space"
              className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

            <button
              type="submit"
              className="w-full mt-4 bg-[#d4af37] text-black py-3 rounded-full font-semibold transition"
            >
              {status === "idle" && "Request for Proposal"}
              {status === "sending" && "Submitting..."}
              {status === "success" && "✓ Request Sent"}
            </button>
          </form>
        </div>

        {/* ---------------- CONTACT + DISCLAIMER (TWO COLUMNS) ---------------- */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 pb-24">

        {/* LEFT: CONTACT */}
        <div>
            <h3 className="text-3xl font-serif text-[#f5d58a] mb-6">
            Contact & Bookings
            </h3>

            <p className="text-[#e8d9a8] mb-3">📞 +91-95200-34538</p>
            <p className="text-[#e8d9a8] mb-3">📧 nirvaanabysunrise@gmail.com</p>
            <p className="text-[#e8d9a8] mb-6">
            📍 Serving premium hotels & resorts across India
            </p>

            {/* WhatsApp button */}
            <a
            href="https://wa.me/919520034538"
            target="_blank"
            className="inline-block mt-4 bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
            WhatsApp Us
            </a>
        </div>

        {/* RIGHT: DISCLAIMER */}
        <div className="border border-red-500/40 rounded-2xl p-8 bg-black/40">
            <h4 className="text-xl text-red-400 font-semibold mb-4">
            Professional Ethics & Safety Notice
            </h4>

            <p className="text-[#f1dcdc] leading-relaxed text-sm">
            NIRVAANA Wellness & Spa operates as a strictly professional therapeutic
            wellness brand. We do not provide any sexual, escort, or inappropriate
            services of any kind. Any indecent requests, misconduct, or harassment
            toward our staff will result in immediate termination of service and may
            be reported to hotel management and local authorities.
            </p>
        </div>

        </section>
        {/* FOOTER */}
        <div className="pb-10" />

        {/* ---------------- FOOTER ---------------- */}
        <footer className="text-center py-10 text-[#d4af37] border-t border-[#d4af37]/20">
            © 2026 NIRVAANA Wellness & Spa — A Premium Spa Brand by Sunrise Wellness
            <br />
            GSTIN: 09AIHPB3271B1ZR
        </footer>
      </main>

    </>
  );
}
