"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/content";
import { useLang } from "./LanguageContext";
import { IconArrowRight, IconShield, IconClock } from "./icons";

export default function Hero() {
  const { lang } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end bg-[#081426] overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Jakarta business district at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45 img-calm"
      />
      {/* Editorial veils — depth from layered surfaces, not decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-[#081426]/55 to-[#081426]/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081426]/80 via-transparent to-transparent" />
      {/* Fine architectural grid drawn from the subject world — survey lines */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,106,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.35) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage: "linear-gradient(to top, black 20%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-44 md:pt-52 w-full">
        <div className="max-w-3xl">
          <div className="hero-rise flex items-center gap-3" style={{ "--hero-delay": "0ms" } as CSSProperties}>
            <span className="inline-flex items-center gap-2 border border-[#C9A96A]/40 bg-[#C9A96A]/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-[12px] tracking-[0.14em] uppercase text-[#E8D5A8] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A] animate-pulse" />
              {lang === "id" ? "Sejak 2008 · Jakarta · Bilingual ID–EN" : "Since 2008 · Jakarta · Bilingual ID–EN"}
            </span>
          </div>

          <h1
            className="hero-rise font-display text-white text-[42px] leading-[1.02] md:text-[68px] mt-6"
            style={{ "--hero-delay": "120ms" } as CSSProperties}
          >
            {lang === "id" ? (
              <>
                Navigator bisnis yang tenang di tengah regulasi yang{" "}
                <em className="not-italic text-[#E8D5A8]">bergerak.</em>
              </>
            ) : (
              <>
                A calm business navigator amid <em className="not-italic text-[#E8D5A8]">shifting</em> regulations.
              </>
            )}
          </h1>

          <p
            className="hero-rise mt-6 text-white/75 max-w-xl text-[17px] md:text-lg leading-[1.75]"
            style={{ "--hero-delay": "240ms" } as CSSProperties}
          >
            {lang === "id"
              ? "Korporasi, litigasi, dan kepatuhan — ditangani partner langsung, dengan bahasa yang dimengerti direksi. Respons 1×24 jam untuk urgensi."
              : "Corporate, litigation, and compliance — handled by partners directly, in language directors understand. 24-hour response for urgent matters."}
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={{ "--hero-delay": "360ms" } as CSSProperties}>
            <Link
              href="#kontak"
              className="group inline-flex items-center gap-2.5 bg-[#C9A96A] text-[#0B1D33] px-7 py-[15px] rounded-[10px] font-semibold text-[15px] hover:bg-white transition-colors duration-300"
            >
              {lang === "id" ? "Jadwalkan Konsultasi" : "Schedule a Consultation"}
              <IconArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#praktik"
              className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-[15px] rounded-[10px] text-[15px] font-medium hover:border-[#C9A96A]/60 hover:bg-white/5 transition-all duration-300"
            >
              {lang === "id" ? "Lihat Bidang Praktik" : "View Practice Areas"}
            </Link>
          </div>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/60"
            style={{ "--hero-delay": "460ms" } as CSSProperties}
          >
            <span className="inline-flex items-center gap-2">
              <IconShield width={16} height={16} className="text-[#C9A96A]" />
              {lang === "id" ? "Berizin PERADI · Terdaftar KPPU & BANI" : "PERADI licensed · KPPU & BANI registered"}
            </span>
            <span className="inline-flex items-center gap-2">
              <IconClock width={16} height={16} className="text-[#C9A96A]" />
              {lang === "id" ? "Jawaban awal 1×24 jam" : "Initial reply within 24 hours"}
            </span>
          </div>
        </div>

        {/* Credibility strip — hairline-divided, not card metrics */}
        <div
          className="hero-rise mt-14 border-t border-[#C9A96A]/25 pt-7 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ "--hero-delay": "560ms" } as CSSProperties}
        >
          {[
            ["18+", lang === "id" ? "Tahun mendampingi bisnis" : "Years advising business"],
            ["240+", lang === "id" ? "Klien korporasi & institusi" : "Corporate & institutional clients"],
            ["120+", lang === "id" ? "Sengketa & transaksi setahun" : "Disputes & deals per year"],
            ["ID / EN", lang === "id" ? "Dokumen & sidang dwibahasa" : "Bilingual docs & hearings"],
          ].map(([n, l], i) => (
            <div key={l} className={i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}>
              <p className="font-display text-[32px] md:text-4xl text-white leading-none">
                {n}
                <span className="text-[#C9A96A]">.</span>
              </p>
              <p className="text-[13px] text-white/55 mt-2 leading-snug max-w-[22ch]">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-3 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          {lang === "id" ? "Gulir" : "Scroll"}
        </span>
        <span className="w-px h-12 bg-gradient-to-b from-[#C9A96A] to-transparent" />
      </div>
    </section>
  );
}
