"use client";

import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/content";
import { useLang } from "./LanguageContext";

export default function Insights() {
  const { lang } = useLang();
  return (
    <section id="wawasan" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[#A9884E] tracking-[0.25em] text-xs uppercase">
          {lang === "id" ? "Wawasan" : "Insights"}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
          <h2 className="font-display text-3xl md:text-4xl text-[#0B1D33]">
            {lang === "id" ? "Tulisan yang jernih, bukan jargon." : "Clear writing, not jargon."}
          </h2>
          <p className="text-slate-500 text-sm">
            {lang === "id" ? "Gaya membaca ala Medium — bersih dan fokus." : "Medium-style reading — clean and focused."}
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {insights.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group border hairline rounded-2xl overflow-hidden bg-[#FAF8F4] hover:shadow-xl transition"
            >
              <div className="relative aspect-[16/10]">
                <Image src={a.image} alt={a.title[lang]} fill className="object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-400">{a.date}</p>
                <h3 className="font-display text-xl text-[#0B1D33] mt-2 leading-snug group-hover:underline">
                  {a.title[lang]}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{a.excerpt[lang]}</p>
                <span className="inline-block mt-4 text-sm text-[#A9884E]">
                  {lang === "id" ? "Baca →" : "Read →"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
