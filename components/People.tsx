"use client";

import Image from "next/image";
import { people } from "@/lib/content";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import { IconLinkedin, IconArrowUpRight } from "./icons";

export default function People() {
  const { lang } = useLang();
  return (
    <section id="tim" className="bg-[#0B1D33] py-24 md:py-32 relative overflow-hidden">
      {/* Subtle architectural backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,106,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.6) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-end">
          <Reveal>
            <h2 className="font-display text-[34px] md:text-[44px] leading-[1.08] text-white">
              {lang === "id" ? (
                <>
                  Ditangani partner, <em className="italic text-[#E8D5A8]">bukan sekadar tim.</em>
                </>
              ) : (
                <>
                  Handled by partners, <em className="italic text-[#E8D5A8]">not just staff.</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-white/60 text-[15px] leading-[1.75] max-w-[52ch] lg:justify-self-end">
              {lang === "id"
                ? "Setiap mandat memiliki PIC partner. Anda tahu siapa yang menjawab telepon — dan siapa yang hadir di meja perundingan."
                : "Every mandate has a partner-in-charge. You know who picks up the phone — and who sits at the negotiating table."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {people.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 100, 300)}>
              <article className="group bg-white/[0.04] border border-white/12 rounded-[14px] overflow-hidden hover:bg-white/[0.07] hover:border-[#C9A96A]/40 transition-all duration-500 hover:-translate-y-1.5">
                <div className="relative aspect-[3/3.4] overflow-hidden bg-[#132c4d]">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover img-calm grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/70 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-[#081426]/80 backdrop-blur-sm border border-white/15 text-white/85 text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full">
                    {p.role[lang]}
                  </span>
                  <span className="absolute bottom-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A96A] text-[#0B1D33] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <IconLinkedin />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[18px] text-white leading-snug">{p.name}</h3>
                  <div className="mt-2.5 h-px w-8 bg-[#C9A96A]/70 group-hover:w-full transition-all duration-500" />
                  <p className="text-white/70 text-[13.5px] mt-2.5 leading-relaxed">{p.expertise[lang]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/10 rounded-[14px] px-6 py-5 bg-white/[0.03]">
            <p className="text-white/65 text-[14px]">
              {lang === "id"
                ? "Butuh profil lengkap, CV, dan daftar transaksi representatif?"
                : "Need full profiles, CVs, and representative deal lists?"}
            </p>
            <a
              href="#kontak"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#E8D5A8] hover:text-white transition-colors"
            >
              {lang === "id" ? "Minta company profile" : "Request company profile"}
              <IconArrowUpRight width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
