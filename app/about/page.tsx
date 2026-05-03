"use client";
import Link from "next/link";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- FAQ DATA ---------------- */

const faqData = [
  {
    q: "How can I book a spa appointment at NIRVAANA?",
    a: "You may book your appointment by calling us or messaging us on WhatsApp between 10:00 AM and 9:00 PM, all days. Appointments are confirmed with a token amount. Complimentary sessions may be available for in-house hotel guests as per hotel policy.",
  },
  {
    q: "Do you offer monthly or wellness membership packages?",
    a: "Yes. We curate personalized monthly wellness and rejuvenation packages. Please reach out to our team directly and our wellness concierge will guide you through available options.",
  },
  {
    q: "Is it necessary to book in advance?",
    a: "We highly recommend booking your appointment in advance to secure your preferred time slot and therapist. Walk-ins are welcome based on availability.",
  },
  {
    q: "What should I bring for my spa appointment?",
    a: "You don’t need to bring anything special. Robes, towels, slippers, and all treatment essentials are provided. We recommend wearing comfortable clothing and leaving valuables at home.",
  },
  {
    q: "Can I request a male or female therapist?",
    a: "Absolutely. Your comfort is our priority. You may request a male or female therapist at the time of booking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly request at least 24 hours’ notice for cancellations or rescheduling to avoid a cancellation fee.",
  },
  {
  q: "Does NIRVAANA provide any form of sexual or inappropriate services?",
  a: "Absolutely not. NIRVAANA Wellness & Spa is a strictly professional therapeutic spa. Any form of sexual services, inappropriate behavior, or indecent requests are neither offered nor tolerated. Our therapies are designed solely for wellness, relaxation, and holistic healing. We maintain a zero-tolerance policy toward harassment to ensure a safe, respectful, and dignified environment for both our guests and our therapists."
  },

];

/* ---------------- FAQ ITEM ---------------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#d4af37]/30 rounded-xl bg-black/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left text-[#f5d58a] hover:bg-[#d4af37]/5 transition"
      >
        <span className="text-lg">{q}</span>
        <ChevronDown
          className={`transition ${open ? "rotate-180 text-[#d4af37]" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 text-[#e8d9a8] leading-relaxed">{a}</div>
      )}
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function AboutPage() {
  const images = [
    "/gallery/spa1.jpg",
    "/gallery/spa2.jpg",
    "/gallery/spa3.jpg",
    "/gallery/spa4.jpg",
    "/gallery/spa5.jpg",
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="bg-[#0b0604] text-white">

      {/* ---------------- HERO ---------------- */}
      
      <section className="relative h-[100vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
                  backgroundImage: "url('/about-hero.jpg')",
                  backgroundPosition: "100% 0%", // X Y
                }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </section>

      <div className="h-15" id="home"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-[#f5d58a] tracking-widest">
            About NIRVAANA
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-[#e8d9a8]">
            A sanctuary where ancient rituals meet contemporary luxury.
          </p>
        </div>

      {/* ---------------- ABOUT ---------------- */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-serif text-[#f5d58a] mb-6">
          At NIRVAANA, wellness is not a service. It is a ritual. An atmosphere. A return to stillness.
        </h2>

        <p className="text-[#e8d9a8] leading-relaxed text-lg">
          NIRVAANA Wellness & Spa is a luxury spa brand curated by Sunrise Wellness,
          inspired by ancient Indian healing traditions and refined global rituals.
          Each experience is designed to restore balance between body, mind, and spirit.
          Through immersive environments, intuitive therapies, and personalized wellness
          journeys, we redefine spa culture within premium hotels and resorts across India.
        </p>
      </section>

      <div className="w-32 h-[2px] bg-[#d4af37] mx-auto mb-20" />

      {/* ---------------- GALLERY ---------------- */}
      <section className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-serif text-center text-[#f5d58a] mb-10">
          Our Spa Experiences
        </h3>

        <div className="grid md:grid-cols-5 gap-4">
          {images.map((src, i) => (
            <div key={i} onClick={() => setActive(i)} className="cursor-pointer">
              <Image
                src={src}
                alt="Nirvaana Spa"
                width={400}
                height={300}
                className="rounded-xl object-cover h-56 w-full hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#d4af37] mt-6 tracking-widest">
          Photos © NIRVAANA Wellness & Spa — All Rights Reserved
        </p>
      </section>

      {/* ---------------- LIGHTBOX ---------------- */}
      {active !== null && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
          <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-[#d4af37]">
            <X size={36} />
          </button>

          <button onClick={() => setActive((active - 1 + images.length) % images.length)}
            className="absolute left-6 text-[#d4af37]">
            <ChevronLeft size={44} />
          </button>

          <Image
            src={images[active]}
            alt="Spa"
            width={1100}
            height={500}
            className="max-h-[85vh] w-auto rounded-xl border border-[#d4af37]/40"
          />

          <button onClick={() => setActive((active + 1) % images.length)}
            className="absolute right-6 text-[#d4af37]">
            <ChevronRight size={44} />
          </button>
        </div>
      )}

      <div className="w-32 h-[2px] bg-[#d4af37] mx-auto my-24" />

      {/* ---------------- CONTACT + DISCLAIMER (TWO COLUMNS) ---------------- */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 pb-24">

        {/* LEFT: CONTACT */}
        <div>
            <h3 className="text-3xl font-serif text-[#f5d58a] mb-6">
            Contact & Bookings
            </h3>

            <p className="text-[#e8d9a8] mb-3">📞 +91-88009-77146</p>
            <p className="text-[#e8d9a8] mb-3">📧 nirvaanabysunrise@gmail.com</p>
            <p className="text-[#e8d9a8] mb-6">
            📍 Serving premium hotels & resorts across India
            </p>

            {/* WhatsApp button */}
            <a
            href="https://wa.me/918800977146"
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
            wellness brand. We do not provide any illegal services of any kind. 
            Any indecent requests, misconduct, or harassment
            toward our staff will result in immediate termination of service and may
            be reported to hotel management and local authorities.
            </p>
        </div>

        </section>


        {/* ---------------- FAQ (CENTERED BELOW BOTH) ---------------- */}
        <section className="w-full pb-32">

        <div className="flex flex-col items-center">

            <h3 className="text-3xl font-serif text-[#f5d58a] mb-12 text-center">
            Frequently Asked Questions
            </h3>

            <div className="w-full max-w-3xl space-y-4 px-6">
            {faqData.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
            ))}
            </div>

        </div>

        </section>


      {/* ---------------- FOOTER ---------------- */}
      <footer className="text-center py-10 text-[#d4af37] border-t border-[#d4af37]/20">
        © 2026 NIRVAANA Wellness & Spa — A Premium Spa Brand by Sunrise Wellness
        <br />
        GSTIN: 09AIHPB3271B1ZR
      </footer>

      {/* ---------------- FLOATING WHATSAPP ---------------- */}
      <a
        href="https://wa.me/918800977146"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition z-50"
      >
        Appointment
      </a>

        

    </main>
  );
}
