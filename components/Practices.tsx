"use client";

import { useState } from "react";
import Link from "next/link";
import { practices } from "@/lib/content";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import {
  IconBuilding,
  IconScale,
  IconShield,
  IconUsers,
  IconLandmark,
  IconBriefcase,
  IconPlus,
  IconMinus,
  IconArrowUpRight,
} from "./icons";

const ICONS = [IconBuilding, IconScale, IconShield, IconUsers, IconLandmark, IconBriefcase];

export default function Practices() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>(practices[0].slug);

  return (
    <section id="praktik" className="bg-white py-24 md:py-32 border-y hairline-navy">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <h2 className="font-display text-[34px] md:text-[44px] leading-[1.08] text-[#0B1D33]">
              {lang === "id" ? (
                <>
                  Enam bidang yang paling sering dibutuhkan <em className="italic text-[#8a6f3e]">bisnis.</em>
                </>
              ) : (
                <>
                  The six areas businesses need <em className="italic text-[#8a6f3e]">most.</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[#5b6b84] leading-[1.75] text-[15.5px] max-w-[58ch] lg:justify-self-end">
              {lang === "id"
                ? "Fokus, bukan generalis. Setiap bidang dipimpin partner dengan rekam sengketa dan transaksi yang bisa diverifikasi — buka untuk melihat ruang lingkupnya."
                : "Focused, not generalist. Each area is led by a partner with verifiable dispute and deal records — expand to see the scope."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-[#0B1D33]/12">
          {practices.map((p, i) => {
            const isOpen = active === p.slug;
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={p.slug} delay={Math.min(i * 60, 240)}>
                <div className={`border-b border-[#0B1D33]/12 transition-colors duration-300 ${isOpen ? "bg-[#FAF8F4]" : "bg-white hover:bg-[#FAF8F4]/70"}`}>
                  <button
                    onClick={() => setActive(isOpen ? null : p.slug)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-5 py-6 px-4 md:px-7 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#0B1D33] text-[#E8D5A8] border-[#0B1D33]"
                            : "bg-white text-[#8a6f3e] border-[#0B1D33]/12"
                        }`}
                      >
                        <Icon width={22} height={22} />
                      </span>
                      <span>
                        <span className="font-display text-[20px] md:text-[24px] text-[#0B1D33] leading-snug block">
                          {p.title[lang]}
                        </span>
                        <span className="text-[13.5px] text-[#5b6b84] mt-1 block max-w-[60ch]">{p.desc[lang]}</span>
                      </span>
                    </div>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C9A96A] border-[#C9A96A] text-[#0B1D33] rotate-180"
                          : "border-[#0B1D33]/15 text-[#0B1D33]"
                      }`}
                    >
                      {isOpen ? <IconMinus width={18} height={18} /> : <IconPlus width={18} height={18} />}
                    </span>
                  </button>
                  <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                    <div className="acc-inner">
                      <div className="pb-7 px-4 md:px-7 md:pl-[104px] grid md:grid-cols-[1fr_auto] gap-5 items-start">
                        <ul className="flex flex-wrap gap-2.5">
                          {p.points[lang].map((pt) => (
                            <li
                              key={pt}
                              className="inline-flex items-center gap-2 bg-white border border-[#0B1D33]/12 rounded-full px-4 py-2 text-[13.5px] text-[#0B1D33]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="#kontak"
                          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8a6f3e] hover:text-[#0B1D33] transition-colors whitespace-nowrap pt-1"
                        >
                          {lang === "id" ? "Konsultasikan" : "Consult"}
                          <IconArrowUpRight width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
