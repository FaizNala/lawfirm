"use client";

import Link from "next/link";
import { useLang } from "./LanguageContext";
import { IconMail, IconPhone, IconPin } from "./icons";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-[#050e1d] text-white/60 border-t border-[#C9A96A]/20">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 text-[14px]">
        <div>
          <Link href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#C9A96A]/70 bg-[#C9A96A]/10 flex items-center justify-center text-[#C9A96A] font-display text-[22px]">
              W
            </div>
            <div className="leading-tight">
              <p className="font-display text-[19px] text-white">Wijaya &amp; Partners</p>
              <p className="text-[#C9A96A] text-[10.5px] tracking-[0.24em] uppercase font-medium">Counsellors at Law</p>
            </div>
          </Link>
          <p className="mt-5 max-w-[38ch] leading-[1.75] text-white/55">
            {lang === "id"
              ? "Firma hukum bisnis Jakarta — korporasi, litigasi, kepatuhan. Ditangani partner langsung sejak 2008."
              : "Jakarta business law firm — corporate, litigation, compliance. Handled by partners directly since 2008."}
          </p>
          <div className="mt-5 flex items-center gap-2 text-[12px] text-white/45">
            <span className="border border-white/15 rounded-full px-3 py-1.5">PERADI</span>
            <span className="border border-white/15 rounded-full px-3 py-1.5">BANI</span>
            <span className="border border-white/15 rounded-full px-3 py-1.5">KPPU Partner</span>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-white font-semibold mb-4 text-[13px] tracking-[0.14em] uppercase">Menu</p>
          <div className="flex flex-col gap-2.5">
            {[
              ["#firma", lang === "id" ? "Firma Kami" : "Our Firm"],
              ["#praktik", lang === "id" ? "Bidang Praktik" : "Practice Areas"],
              ["#tim", lang === "id" ? "Tim Kami" : "Our People"],
              ["#wawasan", lang === "id" ? "Wawasan" : "Insights"],
              ["#karier", lang === "id" ? "Karier" : "Careers"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-[#E8D5A8] transition-colors w-fit">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-white font-semibold mb-4 text-[13px] tracking-[0.14em] uppercase">
            {lang === "id" ? "Praktik" : "Practices"}
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              lang === "id" ? "Korporasi & M&A" : "Corporate & M&A",
              lang === "id" ? "Litigasi & Arbitrase" : "Litigation & Arbitration",
              lang === "id" ? "Persaingan Usaha" : "Competition",
              lang === "id" ? "Ketenagakerjaan" : "Employment",
            ].map((t) => (
              <Link key={t} href="#praktik" className="hover:text-[#E8D5A8] transition-colors w-fit">
                {t}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-4 text-[13px] tracking-[0.14em] uppercase">Kontak</p>
          <div className="flex flex-col gap-3">
            <p className="flex gap-2.5 leading-relaxed">
              <IconPin width={16} height={16} className="mt-0.5 shrink-0 text-[#C9A96A]" />
              Sequis Center Lt. 7 Unit 706, Sudirman Kav. 71, Jakarta 12190
            </p>
            <a href="mailto:contact@wijayapartners.co.id" className="flex gap-2.5 hover:text-white transition-colors">
              <IconMail width={16} height={16} className="mt-0.5 shrink-0 text-[#C9A96A]" />
              contact@wijayapartners.co.id
            </a>
            <a href="tel:+62215223252" className="flex gap-2.5 hover:text-white transition-colors">
              <IconPhone width={16} height={16} className="mt-0.5 shrink-0 text-[#C9A96A]" />
              +62 21 522 3252
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[12px] leading-relaxed text-white/35 border-t border-white/10 pt-6 max-w-[110ch]">
          {lang === "id"
            ? "Informasi di situs ini bersifat umum dan bukan nasihat hukum. Hubungan advokat–klien terbentuk setelah engagement letter ditandatangani."
            : "Information on this site is general and not legal advice. An attorney–client relationship forms after a signed engagement letter."}
        </p>
        <div className="mt-4 pb-8 pt-5 border-t border-white/10 flex flex-wrap justify-between gap-3 text-[12.5px] text-white/40">
          <p>© 2026 Wijaya &amp; Partners. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="hover:text-white/70 transition-colors cursor-pointer">
              {lang === "id" ? "Privasi" : "Privacy"}
            </span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">
              {lang === "id" ? "Syarat Layanan" : "Terms"}
            </span>
            <span>ID / EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
