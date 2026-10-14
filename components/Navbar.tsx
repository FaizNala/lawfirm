"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "./LanguageContext";
import { ui } from "@/lib/content";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const t = ui.nav;

  const links = [
    { href: "#firma", label: t.firm[lang] },
    { href: "#praktik", label: t.practices[lang] },
    { href: "#tim", label: t.people[lang] },
    { href: "#wawasan", label: t.insights[lang] },
    { href: "#karier", label: t.careers[lang] },
    { href: "#kontak", label: t.contact[lang] },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B1D33]/95 backdrop-blur border-b hairline">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3">
          <div className="w-9 h-9 border border-[#C9A96A] flex items-center justify-center text-[#C9A96A] font-display text-xl">
            W
          </div>
          <div className="leading-tight">
            <p className="text-white font-display text-lg">Wijaya &amp; Partners</p>
            <p className="text-[#C9A96A] text-[11px] tracking-[0.2em] uppercase">
              Counsellors at Law
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <div className="flex border hairline rounded-full overflow-hidden text-xs">
            {(["id", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase tracking-wider ${
                  lang === l ? "bg-[#C9A96A] text-[#0B1D33]" : "text-white/70"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="#kontak"
            className="ml-2 bg-[#C9A96A] text-[#0B1D33] text-sm px-4 py-2 rounded-full font-medium hover:bg-white transition"
          >
            {t.consult[lang]}
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl px-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0B1D33] border-t hairline px-5 py-4 flex flex-col gap-3 text-white/90">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            {(["id", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 border hairline rounded text-xs uppercase ${
                  lang === l ? "bg-[#C9A96A] text-[#0B1D33]" : ""
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
