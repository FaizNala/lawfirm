"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "./LanguageContext";
import { ui } from "@/lib/content";
import { IconClose, IconMenu, IconArrowUpRight } from "./icons";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = ui.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#firma", label: t.firm[lang] },
    { href: "#praktik", label: t.practices[lang] },
    { href: "#tim", label: t.people[lang] },
    { href: "#wawasan", label: t.insights[lang] },
    { href: "#karier", label: t.careers[lang] },
    { href: "#kontak", label: t.contact[lang] },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Main bar */}
      <div
        className={`transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#0B1D33]/96 backdrop-blur-md border-[#C9A96A]/25 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)]"
            : "bg-[#0B1D33]/92 backdrop-blur-sm border-white/10"
        }`}
        style={{ backgroundColor: scrolled ? "rgba(11,29,51,0.96)" : "rgba(11,29,51,0.94)" }}
      >
        <div className="mx-auto max-w-6xl px-6 h-[68px] flex items-center justify-between gap-6">
          <Link href="#top" className="flex items-center gap-3.5 group shrink-0" aria-label="Wijaya & Partners — home">
            <div className="relative w-10 h-10 flex items-center justify-center border border-[#C9A96A]/70 bg-[#C9A96A]/10 group-hover:bg-[#C9A96A] group-hover:text-[#0B1D33] text-[#C9A96A] transition-colors duration-300">
              <span className="font-display text-[22px] leading-none -mt-0.5">W</span>
              <span className="absolute -bottom-px -right-px w-2 h-2 bg-[#0B1D33] border-t border-l border-[#C9A96A]/70" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-display text-[19px] tracking-[-0.01em]">Wijaya &amp; Partners</p>
              <p className="text-[#C9A96A] text-[10.5px] tracking-[0.24em] uppercase font-medium">
                Counsellors at Law
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-white/70" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative py-2 hover:text-white transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#C9A96A] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div
              className="flex items-center border border-white/15 rounded-full p-1 text-[11px] font-semibold tracking-wider"
              role="group"
              aria-label="Language"
            >
              {(["id", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-3.5 py-1.5 rounded-full uppercase transition-all duration-300 cursor-pointer ${
                    lang === l ? "bg-[#C9A96A] text-[#0B1D33]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="#kontak"
              className="group flex items-center gap-2 bg-[#C9A96A] text-[#0B1D33] text-[13.5px] px-5 py-2.5 rounded-[10px] font-semibold hover:bg-white transition-colors duration-300"
            >
              {t.consult[lang]}
              <IconArrowUpRight
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose width={24} height={24} /> : <IconMenu width={24} height={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[#081426] border-t border-white/10 px-6 py-5 flex flex-col text-white/85">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3.5 flex items-center justify-between text-[15px] ${
                  i !== links.length - 1 ? "border-b border-white/8" : ""
                }`}
              >
                {l.label}
                <IconArrowUpRight width={16} height={16} className="text-[#C9A96A]" />
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex gap-2">
                {(["id", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 border rounded-[8px] text-xs uppercase tracking-wider cursor-pointer ${
                      lang === l
                        ? "bg-[#C9A96A] text-[#0B1D33] border-[#C9A96A]"
                        : "border-white/20 text-white/70"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <Link
                href="#kontak"
                onClick={() => setOpen(false)}
                className="flex-1 text-center bg-[#C9A96A] text-[#0B1D33] py-2.5 rounded-[8px] text-sm font-semibold"
              >
                {t.consult[lang]}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
