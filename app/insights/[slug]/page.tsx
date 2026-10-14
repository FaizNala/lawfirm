import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insights } from "@/lib/content";

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `${a.title.id} / ${a.title.en}`,
    description: a.excerpt.id,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  if (!a) notFound();

  const others = insights.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <article className="bg-[#FAF8F4]">
      <div className="bg-[#081426] pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/#wawasan"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#E8D5A8] hover:text-white transition-colors"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20 12H5M11 6l-6 6 6 6" />
            </svg>
            Kembali ke Wawasan
          </Link>
          <p className="mt-8 text-[12px] text-white/45 tracking-[0.18em] uppercase font-medium">
            {a.date} — Wijaya &amp; Partners · {a.body.id.join(" ").split(/\s+/).length > 300 ? "6" : "4"} min read
          </p>
          <h1 className="font-display text-[32px] md:text-[48px] text-white mt-4 leading-[1.12]">
            {a.title.id}
          </h1>
          <p className="font-display text-[19px] text-white/55 mt-3 italic leading-relaxed">{a.title.en}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 -mt-2 pb-20">
        <div className="relative aspect-[16/9] rounded-[14px] overflow-hidden bg-[#0B1D33] -mt-2">
          <Image src={a.image} alt={a.title.id} fill sizes="768px" className="object-cover img-calm" priority />
        </div>

        <div className="mt-10 flex items-center gap-4 border-b border-[#0B1D33]/10 pb-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1D33] text-[#E8D5A8] font-display text-lg">
            W
          </span>
          <div>
            <p className="text-[14.5px] font-semibold text-[#0B1D33]">Tim Wijaya &amp; Partners</p>
            <p className="text-[13px] text-[#5b6b84]">Ditulis partner, disunting bahasa direksi</p>
          </div>
          <a
            href="#kontak"
            className="ml-auto hidden sm:inline-flex items-center gap-2 border border-[#0B1D33]/15 rounded-[10px] px-4 py-2.5 text-[13.5px] font-semibold text-[#0B1D33] hover:border-[#A9884E] hover:text-[#8a6f3e] transition-colors"
          >
            Diskusikan topik ini
          </a>
        </div>

        <div className="prose-legal mt-8 text-[17px]">
          {a.body.id.map((p, i) => (
            <p key={i} className={i === 0 ? "text-[19px] text-[#0B1D33] leading-[1.8]" : ""}>
              {p}
            </p>
          ))}
          <hr className="my-10 border-[#0B1D33]/10" />
          <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-[#8a6f3e]">English version</p>
          <div className="mt-4">
            {a.body.en.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#0B1D33] rounded-[14px] p-7 md:p-8 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="font-display text-[22px] text-white">Ada kasus serupa?</p>
            <p className="text-white/60 text-[14px] mt-1">Ceritakan ringkas — partner relevan akan merespons.</p>
          </div>
          <Link
            href="/#kontak"
            className="inline-flex items-center gap-2 bg-[#C9A96A] text-[#0B1D33] px-6 py-3 rounded-[10px] text-[14.5px] font-bold hover:bg-white transition-colors"
          >
            Jadwalkan Konsultasi
          </Link>
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <p className="font-display text-[22px] text-[#0B1D33]">Bacaan lanjutan</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/insights/${o.slug}`}
                  className="group bg-white border border-[#0B1D33]/10 rounded-[14px] overflow-hidden hover:border-[#A9884E]/50 transition-colors"
                >
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image src={o.image} alt={o.title.id} fill sizes="380px" className="object-cover img-calm group-hover:scale-[1.04] transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] text-[#69778f]">{o.date}</p>
                    <p className="font-display text-[17px] text-[#0B1D33] mt-1.5 leading-snug">{o.title.id}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
