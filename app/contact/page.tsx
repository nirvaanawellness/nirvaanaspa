"use client";
import FeedbackModal from "@/app/components/FeedbackModal";

import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
export default function ContactPage() {
  const [enquiryStatus, setEnquiryStatus] =
    useState<"idle" | "sending" | "success">("idle");

  const [cvUploaded, setCvUploaded] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      
      {/* Spacer */}
      <div className="h-[0px]" />

      {/* ================= MAIN ================= */}
      <main className="bg-[#0b0604] text-[#f5d58a] px-1 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Upcoming Projects */}
          <p className="text-center text-[#d4af37] tracking-widest animate-pulse my-16">
            <br/>
            <br/>
            UPCOMING PROJECTS — Shimla | Manali | Goa | Andaman | Indore | Bangalore
            <br/>
            <br/>
          </p>

          {/* ================= TOP GRID ================= */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">

            {/* -------- CONTACT INFO -------- */}
            <div>
              <h2 className="text-4xl font-serif mb-8">Contact Us</h2>

              <p className="info-line">
                📞 <a href="tel:+918800977146">+91-88009-77146</a>
              </p>
            <br/>
              <p className="info-line">
                📧 <a href="mailto:nirvaanabysunrise@gmail.com">
                  nirvaanabysunrise@gmail.com
                </a>
              </p>
            <br/>

              <p className="text-[#e8d9a8] mb-8">
                📍 Serving premium hotels & resorts across India
              </p>

              <a
                href="https://wa.me/918800977146"
                target="_blank"
                className="primary-btn"
              >
                WhatsApp Us
              </a>
            </div>

            {/* -------- WE ARE HIRING -------- */}
            <div className="glass-card">
              <h3 className="text-3xl font-serif mb-4">We Are Hiring</h3>
              <p className="text-[#e8d9a8] mb-6">
                Ayurvedic Therapists & Professional Massage Therapists
              </p>

              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);

                  await fetch("/api/career", {
                    method: "POST",
                    body: data,
                  });

                  setCvUploaded(false);
                  form.reset();
                }}
              >
                <input className="input" name="name" placeholder="Your Name" required />
                <input className="input" name="phone" placeholder="Phone Number" required />
                <input className="input" name="languages" placeholder="Languages Known" required />
                <input className="input" name="experience" placeholder="Years of Experience" required />

                <select className="input" name="role" required>
                  <option value="">Select Role</option>
                  <option>Ayurvedic Therapist</option>
                  <option>Massage Therapist</option>
                </select>

                {/* CV Buttons */}
                <div className="flex gap-4 pt-2">
                  <input
                    id="cv"
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                    onChange={() => setCvUploaded(true)}
                  />

                  <label htmlFor="cv" className="secondary-btn">
                    {cvUploaded ? "CV Selected ✓" : "Upload CV"}
                  </label>

                  <button
                    type="submit"
                    disabled={!cvUploaded}
                    className={`primary-btn ${
                      !cvUploaded && "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    Send CV
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ================= ENQUIRY ================= */}
          <div className="glass-card max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif mb-8 text-center">
              For Any Query
            </h3>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setEnquiryStatus("sending");

                const f = e.currentTarget;

                await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: f.name.valueOf,
                    phone: f.phone.value,
                    email: f.email.value,
                    subject: "General Enquiry",
                    message: f.message.value,
                  }),
                });

                setEnquiryStatus("success");
                f.reset();
              }}
            >
              <input className="input" name="name" placeholder="Your Name" required />
              <input className="input" name="phone" placeholder="Phone Number" required />
              <input className="input" name="email" placeholder="Email Address" required />
              <textarea className="input" name="message" rows={4} placeholder="Your Message" required />

              <button className="primary-btn w-full">
                {enquiryStatus === "idle" && "Submit Enquiry"}
                {enquiryStatus === "sending" && "Sending..."}
                {enquiryStatus === "success" && "✓ Sent Successfully"}
              </button>
            </form>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-10 mt-20 text-[#d4af37] border-t border-[#d4af37]/20">
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
        
      </main>

      {/* ================= SHARED STYLES ================= */}
      <style jsx>{`
        .icon-btn {
          padding: 0.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(212,175,55,0.4);
          color: #d4af37;
          transition: transform 0.2s;
        }
        .icon-btn:hover { transform: scale(1.1); }

        .glass-card {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(212,175,55,0.3);
        }

        .primary-btn {
          background: #d4af37;
          color: black;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .primary-btn:hover { transform: scale(1.05); }

        .secondary-btn {
          flex: 1;
          height: 3rem;
          border-radius: 9999px;
          border: 1px solid #d4af37;
          color: #d4af37;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .info-line a { color: #d4af37; }
      `}</style>
    </>
  );
}
