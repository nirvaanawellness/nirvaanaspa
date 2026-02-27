"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import FeedbackModal from "@/app/components/FeedbackModal";


function BookSpaSection() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const cities = [
    "Agra", "New Delhi", "Noida", "Gurgaon", "Ghaziabad",
    "Lucknow", "Kanpur", "Indore", "Mumbai", "Bangalore",
    "Rishikesh", "Dehradun", "Mussoorie", "Manali", "Shimla",
    "Jaipur", "Udaipur", "Chandigarh", "Amritsar", "Goa",
    "Pune", "Hyderabad", "Chennai", "Kolkata"
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const message = `
🌿 NIRVAANA SPA BOOKING REQUEST

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
City: ${form.city}
`;

    // EMAIL
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: "Spa Booking Request",
        message,
      }),
    });

    // WHATSAPP
    window.open(
      `https://wa.me/919520034538?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setOpen(false);
    setForm({ name: "", email: "", phone: "", city: "" });
  };

  return (
    <>
      {/* BOOK SPA SECTION */}
      <section className="bg-[#0b0604] py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden border border-[#d4af37]/30">
            <Image
              src="/spa-booking.jpg"
              alt="Luxury Spa Room"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-3xl font-serif text-[#f5d58a] mb-6">
              A Sanctuary of Stillness Awaits
            </h2>

            <p className="text-[#e8d9a8] leading-relaxed mb-8 text-lg">
              The daily rhythm of life places immense demands on the body and mind.
              At NIRVAANA, we invite you into an atmosphere of deep calm, where ancient
              healing rituals meet refined luxury. Each therapy is thoughtfully
              curated to restore balance, awaken the senses, and elevate wellbeing.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book a Spa Now
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4">
          <div className="relative w-full max-w-lg bg-[#0b0604] border border-[#d4af37]/40 rounded-3xl p-10">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#d4af37] text-2xl"
            >
              ✕
            </button>

            <h3 className="text-3xl font-serif text-[#f5d58a] mb-8 text-center">
              Book a Spa Experience
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input required placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input required type="email" placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input required placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                list="city-list"
                required
                placeholder="Select or type your city"
                className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />

              <datalist id="city-list">
                {cities.map((city, i) => (
                  <option key={i} value={city} />
                ))}
              </datalist>


              <button
                type="submit"
                className="w-full mt-6 bg-[#d4af37] text-black py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Submit Booking Request
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}



export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      {/* HERO IMAGE SLIDER */}
      <section className="w-full bg-black">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          navigation
          className="w-full h-[80vh]"
        >

          <SwiperSlide>
            <div
              className="relative w-full h-full bg-no-repeat bg-center bg-contain flex items-end"
              style={{ backgroundImage: "url('/spa1.jpg')" }}
            >
              <div className="w-full bg-white/10 backdrop-blur-sm border-t border-white/20 py-4 px-6 text-center">
                <h2 className="text-2xl md:text-2xl font-serif text-[#f5d58a] tracking-wide">
                  ॐ सर्वेषां स्वस्तिर्भवतु | सर्वेषां शान्तिर्भवतु | सर्वेषां पूर्णं भवतु | सर्वेषां मङ्गलं भवतु ॥
                </h2>
                <p className="mt-3 text-[#e8d9a8] text-lg">
                  ✨ Where mind, body, and soul find harmony
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div
              className="w-full h-full bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/spa2.jpg')" }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-full bg-no-repeat bg-center bg-contain flex items-end"
              style={{ backgroundImage: "url('/spa3.jpg')" }}
            >
              <div className="w-full bg-white/10 backdrop-blur-sm border-t border-white/20 py-4 px-6 text-center">
                <h2 className="text-2xl md:text-2xl font-serif text-[#f5d58a] tracking-wide">
                  'ॐ शांति, शांति, शांति'
                </h2>
                <p className="mt-1 text-[#e8d9a8] text-2xl md:text-3xl lg:text-4xl font-serif tracking-wide leading-relaxed drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]">
                  ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྂ | ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྂ | ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྂ

                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* LUXURY INTRO STRIP */}
      <section className="bg-gradient-to-b from-black via-[#120b07] to-black py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#f5d58a] tracking-wider">
          Welcome to Nirvaana Wellness & Spa - by Sunrise Wellness
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-[#e8d9a8] leading-relaxed">
          NIRVAANA Wellness & Spa is a sanctuary of refined luxury and ancient healing.
          We craft immersive spa experiences that restore balance, awaken the senses,
          and elevate the art of relaxation. From signature therapies to bespoke hotel
          spa operations, every detail is designed to embody calm, beauty, and excellence.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-[#d4af37] text-lg italic">
          “Where timeless rituals meet modern luxury.”
        </p>
      </section>

      <BookSpaSection />

      {/* MAIN SITE */}
      <main className="bg-[#0b0604] text-[#f5d58a] min-h-screen font-[serif]">

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

      
        {/* TESTIMONIALS */}
        <section className="py-24 bg-[#120b07] px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Guest Experiences</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-[#e8d9a8] text-lg">
            <p>“One of the most luxurious spa experiences we’ve ever had.”</p>
            <p>“Professional therapists and truly premium ambience.”</p>
            <p>“NIRVAANA elevated our hotel’s wellness offering completely.”</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28 px-6 bg-[#0b0604]">
          <div className="max-w-7xl mx-auto">

            {/* TOP ROW — CONTACT + DISCLAIMER */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-24">

              {/* LEFT — CONTACT INFO */}
              <div className="text-left">
                <h2 className="text-4xl font-bold mb-8 text-[#f5d58a]">
                  Contact & Bookings
                </h2>

                <p className="text-[#e8d9a8] text-lg mb-4">
                  📞 <a className="text-[#d4af37]" href="tel:+919520034538">+91-95200-34538</a>
                </p>

                <p className="text-[#e8d9a8] text-lg mb-4">
                  📧 <a className="text-[#d4af37]" href="mailto:nirvaanabysunrise@gmail.com">
                    nirvaanabysunrise@gmail.com
                  </a>
                </p>

                <p className="text-[#e8d9a8] text-lg mb-8">
                  📍 Serving premium hotels & resorts across India
                </p>

                <a
                  href="https://wa.me/919520034538"
                  target="_blank"
                  className="inline-block bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* RIGHT — DISCLAIMER */}
              <div className="bg-black/40 border border-red-500/30 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-serif text-red-400 mb-4">
                  Professional Ethics & Safety Notice
                </h3>

                <p className="text-[#e8d9a8] leading-relaxed text-lg">
                  NIRVAANA Wellness & Spa operates as a strictly professional therapeutic wellness brand.
                  We do not provide any illegal services of any kind.
                  Any indecent requests, misconduct, or harassment toward our staff will result in
                  immediate termination of service and may be reported to hotel management and local authorities.
                </p>
              </div>

            </div>


            {/* CENTERED — ENQUIRY FORM */}
            <div className="max-w-3xl mx-auto bg-black/40 border border-[#d4af37]/30 rounded-3xl p-12 backdrop-blur-md">

              <h3 className="text-3xl font-serif text-[#f5d58a] mb-8 text-center">
                Enquire With Us
              </h3>

              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("sending");

                  const f = e.currentTarget;

                  try {
                    await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: (f.elements.namedItem("name") as HTMLInputElement).value,
                        phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
                        email: (f.elements.namedItem("email") as HTMLInputElement).value,
                        subject: (f.elements.namedItem("subject") as HTMLInputElement).value,
                        message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
                      }),
                    });

                    setStatus("success");

                    setTimeout(() => {
                      setStatus("idle");
                      f.reset();
                    }, 2500);

                  } catch {
                    alert("Something went wrong. Please try again.");
                    setStatus("idle");
                  }
                }}
              >

                <input name="name" required placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

                <input name="phone" required placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

                <input name="email" type="email" required placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

                <input name="subject" required placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

                <textarea name="message" rows={4} required placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-black/40 border border-[#d4af37]/30 text-[#f5d58a]" />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full mt-4 bg-[#d4af37] text-black py-3 rounded-full font-semibold transition flex items-center justify-center"
                >
                  {status === "idle" && "Submit Enquiry"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "✓ Sent Successfully"}
                </button>

              </form>

            </div>

          </div>
        </section>



        {/* FOOTER */}
        <footer className="py-10 border-t border-[#d4af37]/20 text-center text-[#c9b26d] text-sm">
          © {new Date().getFullYear()} NIRVAANA Wellness & Spa — A Premium Spa Brand by Sunrise Wellness  
          <br /> GSTIN: 09AIHPB3271B1ZR
        </footer>

      </main>
    <style jsx global>{`
      .swiper-button-next,
      .swiper-button-prev {
        color: #d4af37;
        width: 44px;
        height: 44px;
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        font-size: 28px;
        font-weight: bold;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        transform: scale(1.1);
      }
    `}</style>

    </>
  );
}
