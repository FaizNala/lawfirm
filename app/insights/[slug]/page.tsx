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

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-2xl px-5 pt-14 pb-20">
        <Link href="/#wawasan" className="text-sm text-[#A9884E]">
          ← Kembali / Back
        </Link>
        <p className="mt-6 text-xs text-slate-400 tracking-widest uppercase">{a.date} — Wijaya & Partners</p>
        <h1 className="font-display text-3xl md:text-5xl text-[#0B1D33] mt-3 leading-tight">
          {a.title.id}
        </h1>
        <p className="font-display text-xl text-slate-500 mt-2 italic">{a.title.en}</p>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-8">
          <Image src={a.image} alt={a.title.id} fill className="object-cover" />
        </div>
        <div className="prose-legal mt-8 text-[17px]">
          {a.body.id.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <hr className="my-8 hairline" />
          <p className="text-sm text-slate-400 italic">English version:</p>
          {a.body.en.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
