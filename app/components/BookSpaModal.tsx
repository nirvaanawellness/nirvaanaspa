"use client";

import { X } from "lucide-react";
import { useState } from "react";

const cities = [
  "Agra","New Delhi","Noida","Gurgaon","Ghaziabad","Lucknow","Kanpur","Indore",
  "Mumbai","Bangalore","Rishikesh","Dehradun","Mussoorie","Manali",
  "Shimla","Jaipur","Udaipur","Chandigarh"
];

export default function BookSpaModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  if (!open) return null;

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    /* 1️⃣ EMAIL */
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: "Spa Booking Request",
        message: `City: ${form.city}`,
      }),
    });

    /* 2️⃣ WHATSAPP */
    const msg = `🌿 Spa Booking Request - NIRVAANA

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City: ${form.city}`;

    window.open(
      `https://wa.me/918800977146?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    onClose();
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0e0805] to-black border border-[#d4af37]/40 rounded-3xl p-10 shadow-2xl">

        <button onClick={onClose} className="absolute top-5 right-5 text-[#d4af37] hover:scale-110">
          <X />
        </button>

        <h2 className="text-3xl font-serif text-center text-[#f5d58a] mb-8">
          Book a Spa Experience
        </h2>

        <form onSubmit={submitForm} className="space-y-4">

          {["name","email","phone"].map((f, i) => (
            <input
              key={i}
              required
              placeholder={
                f === "name" ? "Your Name" :
                f === "email" ? "Email Address" : "Phone Number"
              }
              className="w-full p-3 rounded-xl bg-black/50 border border-[#d4af37]/30 text-[#f5d58a]"
              value={(form as any)[f]}
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            />
          ))}

          {/* CITY SEARCH + SELECT */}
          <input
            list="cities"
            placeholder="Select or type your city"
            className="w-full p-3 rounded-xl bg-black/50 border border-[#d4af37]/30 text-[#f5d58a]"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
          />

          <datalist id="cities">
            {cities.map((c) => (
              <option key={c} value={c} />
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
  );
}
