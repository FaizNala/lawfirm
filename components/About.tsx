"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/content";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import { IconCheck, IconArrowRight } from "./icons";

export default function About() {
  const { lang } = useLang();
  const values =
    lang === "id"
      ? [
          ["Integritas", "Jujur soal risiko dan peluang — bukan sekadar janji menang."],
          ["Ketepatan", "Jawaban awal 1×24 jam untuk urgensi, dengan PIC partner yang jelas."],
          ["Kejernihan", "Memo dan kontrak dalam bahasa direksi, bukan jargon pasal."],
        ]
      : [
          ["Integrity", "Honest about risk and upside — never just promises of victory."],
          ["Responsiveness", "Initial reply within 24 hours for urgent matters, with a named partner."],
          ["Clarity", "Memos and contracts in boardroom language, not article jargon."],
        ];

  return (
    <section id="firma" className="bg-[#FAF8F4] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-28 h-28 border-t border-l border-[#A9884E]/50" aria-hidden />
            <div className="relative aspect-[4/5] max-h-[560px] w-full rounded-[14px] overflow-hidden bg-[#0B1D33]">
              <Image
                src={IMAGES.office}
                alt={lang === "id" ? "Ruang kerja Wijaya & Partners" : "Wijaya & Partners office"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-calm"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 md:-right-8 w-52 md:w-72 rounded-[14px] overflow-hidden border-[6px] border-[#FAF8F4] bg-white">
              <div className="relative aspect-[16/11]">
                <Image src={IMAGES.handshake} alt="Handshake" fill sizes="300px" className="object-cover img-calm" />
              </div>
            </div>
            <div className="absolute top-6 -right-3 md:-right-6 bg-[#0B1D33] text-white rounded-[12px] px-5 py-4 shadow-[0_24px_50px_-20px_rgba(11,29,51,0.6)]">
              <p className="font-display text-3xl leading-none text-[#E8D5A8]">
                18<span className="text-[#C9A96A]">+</span>
              </p>
              <p className="text-[12px] text-white/65 mt-1.5 tracking-wide">
                {lang === "id" ? "Tahun praktik sejak 2008" : "Years of practice since 2008"}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-[34px] md:text-[44px] leading-[1.08] text-[#0B1D33]">
              {lang === "id" ? (
                <>
                  Melindungi kepentingan klien dengan menempatkan mereka <em className="italic text-[#8a6f3e]">pertama.</em>
                </>
              ) : (
                <>
                  Protecting clients by putting them <em className="italic text-[#8a6f3e]">first.</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[#3d4c63] leading-[1.8] text-[16px] max-w-[62ch]">
              {lang === "id"
                ? "Wijaya & Partners adalah firma hukum bisnis di Jakarta. Kami tumbuh dari praktik korporasi dan litigasi, dan dipercaya PMA, BUMN, serta grup keluarga untuk transaksi dan sengketa yang menentukan — dari pendirian hingga exit."
                : "Wijaya & Partners is a Jakarta business law firm. Grown from corporate and litigation practice, trusted by foreign investors, SOEs and family groups for decisive deals and disputes — from setup to exit."}
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-5">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 110}>
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B1D33] text-[#E8D5A8]">
                    <IconCheck width={15} height={15} />
                  </span>
                  <div>
                    <p className="font-display text-[19px] text-[#0B1D33]">{t}</p>
                    <p className="text-[14px] text-[#5b6b84] mt-1 leading-relaxed max-w-[52ch]">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#tim"
                className="group inline-flex items-center gap-2 bg-[#0B1D33] text-white px-6 py-3.5 rounded-[10px] text-[14.5px] font-semibold hover:bg-[#1a3a5f] transition-colors"
              >
                {lang === "id" ? "Kenali Partner Kami" : "Meet Our Partners"}
                <IconArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["WK", "RD", "AP"].map((n) => (
                    <span
                      key={n}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#FAF8F4] bg-[#E9E2D3] text-[11px] font-bold text-[#0B1D33]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] text-[#5b6b84] leading-snug">
                  {lang === "id" ? (
                    <>
                      Ditangani <strong className="text-[#0B1D33]">partner langsung</strong>
                      <br />
                      bukan sekadar tim
                    </>
                  ) : (
                    <>
                      Handled by <strong className="text-[#0B1D33]">partners directly</strong>
                      <br />
                      not just staff
                    </>
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
