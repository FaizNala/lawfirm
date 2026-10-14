"use client";

import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/content";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import { IconArrowRight, IconArrowUpRight } from "./icons";

function readingMinutes(body: string[]) {
  const words = body.join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export default function Insights() {
  const { lang } = useLang();
  const [featured, ...rest] = insights;

  return (
    <section id="wawasan" className="bg-[#FAF8F4] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Reveal>
            <h2 className="font-display text-[34px] md:text-[44px] leading-[1.08] text-[#0B1D33] max-w-[16ch]">
              {lang === "id" ? (
                <>
                  Tulisan yang jernih, <em className="italic text-[#8a6f3e]">bukan jargon.</em>
                </>
              ) : (
                <>
                  Clear writing, <em className="italic text-[#8a6f3e]">not jargon.</em>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[#5b6b84] text-[14.5px] max-w-[38ch] leading-relaxed">
              {lang === "id"
                ? "Analisis regulasi dalam bahasa direksi — apa yang berubah, apa risikonya, apa yang harus dilakukan."
                : "Regulatory analysis in boardroom language — what changed, what it risks, what to do."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid h-full overflow-hidden rounded-[14px] bg-[#0B1D33] text-white hover:shadow-[0_30px_60px_-24px_rgba(11,29,51,0.55)] transition-shadow duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover img-calm group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#C9A96A] text-[#0B1D33] text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                  {lang === "id" ? "Sorotan" : "Featured"}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <p className="text-[12.5px] text-white/50 tracking-wide">
                  {featured.date} · {readingMinutes(featured.body[lang])} {lang === "id" ? "mnt baca" : "min read"}
                </p>
                <h3 className="font-display text-[24px] md:text-[28px] leading-[1.2] mt-3 group-hover:text-[#E8D5A8] transition-colors">
                  {featured.title[lang]}
                </h3>
                <p className="text-[14.5px] text-white/60 mt-3 leading-relaxed">{featured.excerpt[lang]}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-[14px] font-semibold text-[#E8D5A8]">
                  {lang === "id" ? "Baca analisis" : "Read analysis"}
                  <IconArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-5">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={120 + i * 100}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group grid sm:grid-cols-[200px_1fr] overflow-hidden rounded-[14px] bg-white border border-[#0B1D33]/10 hover:border-[#A9884E]/50 transition-colors duration-300 h-full"
                >
                  <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-[190px] overflow-hidden bg-[#E9E2D3]">
                    <Image
                      src={a.image}
                      alt={a.title[lang]}
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover img-calm group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] text-[#69778f] tracking-wide">
                      {a.date} · {readingMinutes(a.body[lang])} {lang === "id" ? "mnt" : "min"}
                    </p>
                    <h3 className="font-display text-[19px] text-[#0B1D33] mt-2 leading-snug group-hover:underline decoration-[#C9A96A] decoration-2 underline-offset-4">
                      {a.title[lang]}
                    </h3>
                    <p className="text-[13.5px] text-[#5b6b84] mt-2 leading-relaxed line-clamp-2">{a.excerpt[lang]}</p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-[13.5px] font-semibold text-[#8a6f3e]">
                      {lang === "id" ? "Baca" : "Read"}
                      <IconArrowUpRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
