import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmbientMusic from "@/app/components/AmbientMusic";
import Header from "@/app/components/Header"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIRVAANA Wellness & Spa",
  description: "Luxury Spa & Wellness Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />                {/* ✅ GLOBAL HEADER */}
        <main className="pt-[86px]">{children}</main> {/* ✅ OFFSET FIX */}
        <AmbientMusic />
      </body>
    </html>
  );
}
