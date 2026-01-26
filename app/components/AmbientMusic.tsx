"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  // Initialize once
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/flute.mp3"); // <-- your music file
      audio.loop = true;
      audio.volume = 0;
      audioRef.current = audio;

      const saved = localStorage.getItem("nirvaana-music");
      if (saved === "on") setEnabled(true);
      setReady(true);
    }
  }, []);

  // Handle play / pause
  useEffect(() => {
    if (!ready || !audioRef.current) return;

    const audio = audioRef.current;

    if (enabled) {
      audio.play().catch(() => {});
      fadeIn(audio);
      localStorage.setItem("nirvaana-music", "on");
    } else {
      audio.pause();
      localStorage.setItem("nirvaana-music", "off");
    }
  }, [enabled, ready]);

  function fadeIn(audio: HTMLAudioElement) {
    let v = 0;
    audio.volume = 0;
    const fade = setInterval(() => {
      v += 0.02;
      if (v >= 0.3) {
        audio.volume = 0.3;
        clearInterval(fade);
      } else {
        audio.volume = v;
      }
    }, 100);
  }

  if (!ready) return null;

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="fixed bottom-6 left-6 z-50 bg-black/70 border border-[#d4af37]/40 text-[#d4af37] px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 hover:scale-105 transition"
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span className="text-sm tracking-widest">
        {enabled ? "AMBIENCE ON" : "AMBIENCE OFF"}
      </span>
    </button>
  );
}
