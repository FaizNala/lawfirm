"use client";

import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";

const ITEMS_ID = ["PMA Jepang & Korea", "BUMN & Institusi", "Grup Keluarga", "Startup & Fintech", "Konstruksi & Energi"];
const ITEMS_EN = ["Japanese & Korean FDI", "SOEs & Institutions", "Family Groups", "Startups & Fintech", "Construction & Energy"];

export default function TrustBar() {
  const { lang } = useLang();
  const items = lang === "id" ? ITEMS_ID : ITEMS_EN;
  const row = [...items, ...items];

  return (
    <section aria-label={lang === "id" ? "Dipercaya oleh" : "Trusted by"} className="bg-[#081426] border-y border-white/10 py-7 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-[11px] tracking-[0.28em] uppercase text-white/40 font-medium">
            {lang === "id" ? "Dipercaya direksi lintas sektor" : "Trusted by directors across sectors"}
          </p>
        </Reveal>
      </div>
      <div className="marquee-mask relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-12 pr-12">
          {row.map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-display text-[19px] text-white/55 italic">{t}</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A96A]/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
