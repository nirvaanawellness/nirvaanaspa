"use client";

import { useState } from "react";
import FeedbackModal from "../components/FeedbackModal";

export default function FeedbackPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <FeedbackModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
