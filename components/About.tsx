"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/content";
import { useLang } from "./LanguageContext";

export default function About() {
  const { lang } = useLang();
  return (
    <section id="firma" className="bg-[#FAF8F4] py-20">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src={IMAGES.office} alt="Wijaya office" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-6 w-48 md:w-64 aspect-video rounded-xl overflow-hidden border-4 border-[#FAF8F4] shadow-xl">
            <Image src={IMAGES.handshake} alt="Handshake" fill className="object-cover" />
          </div>
        </div>
        <div>
          <p className="text-[#A9884E] tracking-[0.25em] text-xs uppercase">
            {lang === "id" ? "Tentang Kami" : "About Us"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#0B1D33] mt-3 leading-tight">
            {lang === "id"
              ? "Melindungi kepentingan klien dengan menempatkan mereka pertama."
              : "Protecting clients by putting them first."}
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            {lang === "id"
              ? "Wijaya & Partners adalah firma hukum bisnis di Jakarta. Kami tumbuh dari praktik korporasi dan litigasi, dan dipercaya PMA, BUMN, serta grup keluarga untuk transaksi dan sengketa yang menentukan."
              : "Wijaya & Partners is a Jakarta business law firm. Grown from corporate and litigation practice, trusted by foreign investors, SOEs and family groups for decisive deals and disputes."}
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {(
              lang === "id"
                ? [
                    ["Integritas", "Jujur soal risiko, bukan sekadar janji menang."],
                    ["Ketepatan", "Jawaban 1×24 jam untuk urgensi."],
                    ["Kejernihan", "Bahasa direksi, bukan jargon."],
                  ]
                : [
                    ["Integrity", "Honest about risk, not just promises."],
                    ["Responsiveness", "24-hour reply for urgent matters."],
                    ["Clarity", "Boardroom language, not jargon."],
                  ]
            ).map(([t, d]) => (
              <div key={t} className="border hairline rounded-xl p-4 bg-white">
                <p className="font-display text-lg text-[#0B1D33]">{t}</p>
                <p className="text-sm text-slate-500 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
