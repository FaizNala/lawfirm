"use client";

import Link from "next/link";
import { useLang } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-[#071426] text-white/60 py-12 border-t hairline">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <p className="font-display text-xl text-white">Wijaya &amp; Partners</p>
          <p className="text-[#C9A96A] text-[11px] tracking-[0.2em] uppercase mt-1">Counsellors at Law</p>
          <p className="mt-4 max-w-sm leading-relaxed">
            {lang === "id"
              ? "Firma hukum bisnis — korporasi, litigasi, kepatuhan. Wireframe siap CMS & Vercel."
              : "Business law firm — corporate, litigation, compliance. CMS-ready wireframe for Vercel."}
          </p>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Menu</p>
          <div className="flex flex-col gap-2">
            <Link href="#firma">Firma</Link>
            <Link href="#praktik">Praktik</Link>
            <Link href="#tim">Tim</Link>
            <Link href="#wawasan">Wawasan</Link>
          </div>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Kontak</p>
          <p>Jakarta — Sudirman Kav. 71</p>
          <p className="mt-1">contact@wijayapartners.co.id</p>
          <p className="mt-1">+62 21 522 3252</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-2 text-xs">
        <p>© 2026 Wijaya &amp; Partners. All rights reserved.</p>
        <p>Wireframe — Next.js + Vercel ready.</p>
      </div>
    </footer>
  );
}
