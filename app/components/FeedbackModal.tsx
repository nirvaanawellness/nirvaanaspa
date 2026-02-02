"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "success";

export default function FeedbackModal({ open, onClose }: Props) {
  const [therapies, setTherapies] = useState<string[]>([]);
  const [staff, setStaff] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  if (open) {
    setStatus("idle");
    setError(null);
  }
}, [open]);


  /* ────────────────────────────────
     Load dropdown data on open
  ──────────────────────────────── */
  useEffect(() => {
    if (!open) return;

    let active = true;

    const loadMeta = async () => {
      try {
        const res = await fetch("/api/meta");
        if (!res.ok) throw new Error("Failed to load meta");

        const data = await res.json();

        if (!active) return;

        setTherapies(Array.isArray(data.therapies) ? data.therapies : []);
        setStaff(Array.isArray(data.staff) ? data.staff : []);
      } catch (err) {
        console.error("META LOAD ERROR:", err);
        if (active) {
          setTherapies([]);
          setStaff([]);
        }
      }
    };

    loadMeta();

    return () => {
      active = false;
    };
  }, [open]);

  if (!open) return null;

  /* ────────────────────────────────
     Submit feedback
  ──────────────────────────────── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget; // ✅ capture BEFORE await
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name")),
          phone: String(formData.get("phone")),
          age: String(formData.get("age")),
          city: String(formData.get("city")),
          therapy: String(formData.get("therapy")),
          therapist: String(formData.get("therapist")),
          rating: String(formData.get("rating")),
          feedback: String(formData.get("feedback")),
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      form.reset(); // ✅ SAFE

      setTimeout(onClose, 1500);
    } catch (err) {
      console.error("SUBMIT ERROR:", err);
      setError("Unable to submit feedback. Please try again.");
      setStatus("idle");
    }
  };

  /* ────────────────────────────────
     UI
  ──────────────────────────────── */
  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl 
        bg-gradient-to-br from-[#1a120c] via-[#120b07] to-[#0c0704]
        border border-[#d4af37]/40
        rounded-3xl p-10 shadow-[0_0_80px_rgba(212,175,55,0.15)]">


        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#d4af37]"
        >
          <X size={28} />
        </button>

        <h2 className="text-4xl font-serif tracking-wide text-center
          bg-gradient-to-r from-[#f7e7b4] via-[#d4af37] to-[#f7e7b4]
          bg-clip-text text-transparent mb-10">
          Guest Feedback
        </h2>


        <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-2 gap-5">
          <input name="name" placeholder="Name" required className="lux-input" />
          <input name="phone" placeholder="Phone Number" required className="lux-input" />

          <input name="age" placeholder="Age" required className="lux-input" />
          <input name="city" placeholder="City" required className="lux-input" />

          <select name="therapy" required className="lux-input">
            <option value="">Select Therapy</option>
            {therapies.map(t => <option key={t}>{t}</option>)}
          </select>

          <select name="therapist" required className="lux-input">
            <option value="">Select Therapist</option>
            {staff.map(s => <option key={s}>{s}</option>)}
          </select>

          <input
            type="number"
            name="rating"
            min={1}
            max={10}
            placeholder="Rating (1–10)"
            className="lux-input col-span-2"
          />
        </div>

        <textarea
          name="feedback"
          rows={4}
          placeholder="Your experience with Nirvaana…"
          className="lux-input"
        />


          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full mt-6 py-4 rounded-2xl text-lg font-semibold tracking-wide
              bg-gradient-to-r from-[#f7e7b4] via-[#d4af37] to-[#b8962e]
              text-[#120b07]
              hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]
              transition-all duration-300
              disabled:opacity-60
            "
          >
            {status === "idle" && "Submit Feedback"}
            {status === "sending" && "Submitting…"}
            {status === "success" && "✓ Thank You"}
          </button>

        </form>
      </div>
    </div>
  );
}
