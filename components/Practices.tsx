"use client";

import { useState } from "react";
import { practices } from "@/lib/content";
import { useLang } from "./LanguageContext";

export default function Practices() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>(practices[0].slug);

  return (
    <section id="praktik" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[#A9884E] tracking-[0.25em] text-xs uppercase">
          {lang === "id" ? "Bidang Praktik" : "Practice Areas"}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[#0B1D33] mt-3 max-w-2xl">
          {lang === "id"
            ? "Fokus pada enam bidang yang paling sering dibutuhkan bisnis."
            : "Focused on the six areas businesses need most."}
        </h2>

        <div className="mt-10 border-t hairline">
          {practices.map((p, i) => {
            const isOpen = active === p.slug;
            return (
              <div key={p.slug} className="border-b hairline">
                <button
                  onClick={() => setActive(isOpen ? null : p.slug)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-[#A9884E] font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl text-[#0B1D33]">
                      {p.title[lang]}
                    </span>
                  </div>
                  <span className="text-2xl text-[#A9884E] leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pl-8 md:pl-10 grid md:grid-cols-2 gap-4">
                    <p className="text-slate-600 leading-relaxed">{p.desc[lang]}</p>
                    <ul className="flex flex-col gap-2">
                      {p.points[lang].map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm text-[#0B1D33]">
                          <span className="text-[#C9A96A]">—</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
