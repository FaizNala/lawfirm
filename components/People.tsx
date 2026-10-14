"use client";

import Image from "next/image";
import { people } from "@/lib/content";
import { useLang } from "./LanguageContext";

export default function People() {
  const { lang } = useLang();
  return (
    <section id="tim" className="bg-[#0B1D33] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[#C9A96A] tracking-[0.25em] text-xs uppercase">
              {lang === "id" ? "Tim Kami" : "Our People"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
              {lang === "id" ? "Ditangani partner, bukan sekadar tim." : "Handled by partners, not just staff."}
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed">
            {lang === "id"
              ? "Foto, jabatan, dan keahlian dapat dikelola via CMS — tambah, urutkan, nonaktifkan tanpa ubah kode."
              : "Photos, roles and expertise are CMS-managed — add, reorder, hide without code changes."}
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {people.map((p) => (
            <article key={p.slug} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
              <div className="relative aspect-[3/4]">
                <Image src={p.photo} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-white leading-snug">{p.name}</h3>
                <p className="text-[#C9A96A] text-xs uppercase tracking-widest mt-1">{p.role[lang]}</p>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">{p.expertise[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
