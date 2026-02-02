"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import BookSpaModal from "@/app/components/BookSpaModal";
import FeedbackModal from "@/app/components/FeedbackModal";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="relative w-full h-[86px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <Image
              src="/pic.png"
              alt="Nirvaana Wellness & Spa"
              width={220}
              height={90}
              priority
              className="object-contain drop-shadow-[0_0_16px_rgba(212,175,55,0.45)]"
            />

            <div className="hidden md:flex items-center gap-3 ml-2">
              <a href="tel:+919520034538" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 transition">
                <Phone size={18} />
              </a>

              <a href="mailto:nirvaanabysunrise@gmail.com" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 transition">
                <Mail size={18} />
              </a>

              <a href="https://wa.me/919520034538" target="_blank" className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 transition">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <nav className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-10 text-sm uppercase tracking-[0.28em] text-[#f5d58a]">
            {["Home", "About", "Services", "Partnership", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-[#d4af37] transition after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      {/* ---------------- HERO ---------------- */}
      <section className="relative h-[100vh] w-full bg-black mt-[0px]">

      <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: "url('/spa3.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      </section>




      <main className="bg-[#0b0604] text-[#f5d58a] font-[serif]">

        {/* GOLD SEPARATOR */}
        <div className="w-full flex justify-center py-14">
          <div className="w-40 h-[2px] bg-[#d4af37]" />
        </div>

        {/* SIGNATURE + BRAND */}
        <section className="py-20 px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20items-start">

          {/* SIGNATURE */}
          <div>
            <h2 className="text-4xl font-serif mb-10">NIRVAANA Signature Therapies</h2>

            <div className="space-y-8">
              <div className="rounded-2xl p-6 bg-black/40">

                <h3 className="text-2xl mb-2">Signature Shirodhara</h3>
                <p className="text-[#e8d9a8]">
                  Warm herbal oils gently flow over the forehead, calming the nervous system and restoring mental clarity.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-black/40">

                <h3 className="text-2xl mb-2">Royal Hot Stone Ritual</h3>
                <p className="text-[#e8d9a8]">
                  Heated basalt stones dissolve deep muscular tension and enhance circulation.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-black/40">

                <h3 className="text-2xl mb-2">Sacred Sleep Therapy</h3>
                <p className="text-[#e8d9a8]">
                  Slow rhythmic therapy infused with calming aromatherapy oils for emotional balance.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND */}
          <div>
            <h2 className="text-4xl font-serif mb-8">Brand Identity</h2>

            <p className="text-lg text-[#e8d9a8] leading-relaxed mb-12">
              NIRVAANA Wellness & Spa is a luxury spa brand by Sunrise Wellness, inspired by ancient Indian
              healing traditions and refined global wellness rituals. Designed for premium hotels and
              resorts, NIRVAANA delivers deeply relaxing, therapeutic, and restorative spa experiences.
              Every therapy is curated to restore harmony between mind, body, and spirit.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-12">
            <button
                onClick={() => setOpen(true)}
                className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
                Book a Spa Now
            </button>

            <a
                href="/nirvaana-spa-menu.pdf"
                target="_blank"
                className="border border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-semibold hover:bg-[#d4af37]/30 hover:scale-105 transition"
            >
                Download Menu
            </a>
            </div>


          </div>
        </section>
        
        {/* STAFF + DISCLAIMER */}
        <section className="py-24 px-6 bg-[#120b07] text-center">
          <p className="max-w-4xl mx-auto text-lg text-[#e8d9a8] leading-relaxed">
            Every NIRVAANA therapy is delivered by professionally trained spa therapists who undergo
            continuous skill development in anatomy, pressure techniques, hospitality standards, and
            guest wellness care — ensuring each experience is refined, safe, and deeply restorative.
          </p>

          <p className="mt-6 max-w-4xl mx-auto italic text-[#d4af37] text-sm leading-relaxed">
            NIRVAANA Wellness & Spa operates strictly as a professional therapeutic wellness brand.
            We do not provide any sexual, escort, or inappropriate services of any kind. Any indecent
            requests or misconduct will result in immediate termination of service and may be reported.
          </p>
        </section>

        {/* ---------------- FLOATING WHATSAPP ---------------- */}
        <a
          href="https://wa.me/919520034538"
          target="_blank"
          className="fixed bottom-6 right-6 bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition z-50"
        >
          Appointment
        </a>

        <button
          onClick={() => setFeedbackOpen(true)}
          className="fixed bottom-20 right-6 bg-black border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#d4af37]/20 transition z-50"
          >
          Feedback
        </button>
        <FeedbackModal
          open={feedbackOpen}
          onClose={() => setFeedbackOpen(false)}
        />
                

        {/* FOOTER */}
        <footer className="py-10 border-t border-[#d4af37]/20 text-center text-[#c9b26d] text-sm">
          © {new Date().getFullYear()} NIRVAANA Wellness & Spa — A Premium Spa Brand by Sunrise Wellness
        </footer>
      </main>

      {/* BOOK SPA MODAL */}
      <BookSpaModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
