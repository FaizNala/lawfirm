"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/content";
import { useLang } from "./LanguageContext";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end bg-[#0B1D33]">
      <Image
        src={IMAGES.hero}
        alt="Jakarta business district"
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-40 w-full">
        <p className="text-[#C9A96A] tracking-[0.3em] text-xs uppercase mb-4">
          {lang === "id" ? "Sejak 2008 — Jakarta" : "Since 2008 — Jakarta"}
        </p>
        <h1 className="font-display text-white text-4xl md:text-6xl leading-[1.05] max-w-3xl">
          {lang === "id"
            ? "Navigator bisnis yang tenang di tengah regulasi yang bergerak."
            : "A calm business navigator amid shifting regulations."}
        </h1>
        <p className="mt-5 text-white/70 max-w-xl text-lg leading-relaxed">
          {lang === "id"
            ? "Korporasi, litigasi, dan kepatuhan — ditangani partner langsung, dengan bahasa yang dimengerti direksi."
            : "Corporate, litigation, and compliance — handled by partners directly, in language directors understand."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#kontak"
            className="bg-[#C9A96A] text-[#0B1D33] px-6 py-3 rounded-full font-medium hover:bg-white transition"
          >
            {lang === "id" ? "Jadwalkan Konsultasi" : "Schedule a Consultation"}
          </Link>
          <Link
            href="#praktik"
            className="border hairline text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            {lang === "id" ? "Lihat Bidang Praktik" : "View Practice Areas"}
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-3 max-w-lg gap-6 border-t hairline pt-6 text-white">
          {[
            ["18+", lang === "id" ? "Tahun praktik" : "Years of practice"],
            ["240+", lang === "id" ? "Klien korporasi" : "Corporate clients"],
            ["ID / EN", lang === "id" ? "Layanan dwibahasa" : "Bilingual service"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl text-[#C9A96A]">{n}</p>
              <p className="text-sm text-white/60 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
