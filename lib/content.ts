export type Lang = "id" | "en";

export interface Practice {
  slug: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  points: Record<Lang, string[]>;
}

export interface Person {
  slug: string;
  name: string;
  role: Record<Lang, string>;
  expertise: Record<Lang, string>;
  photo: string;
}

export interface Insight {
  slug: string;
  title: Record<Lang, string>;
  date: string;
  excerpt: Record<Lang, string>;
  image: string;
  body: Record<Lang, string[]>;
}

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  handshake:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  library:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
  columns:
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop",
  signing:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  strategy:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  meeting:
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1600&auto=format&fit=crop",
};

export const practices: Practice[] = [
  {
    slug: "corporate",
    title: { id: "Korporasi, Investasi & Transaksi", en: "Corporate, Investment & Transactions" },
    desc: {
      id: "Pendirian PT & PMA, JV, M&A, kontrak komersial, dan kepatuhan korporasi end-to-end.",
      en: "Company & PMA setup, JV, M&A, commercial contracts, and end-to-end corporate compliance.",
    },
    points: {
      id: ["M&A & due diligence", "Kontrak & perizinan OSS", "Tata kelola & sekretariat perusahaan"],
      en: ["M&A & due diligence", "Contracts & OSS licensing", "Governance & corporate secretarial"],
    },
  },
  {
    slug: "litigation",
    title: { id: "Litigasi & Arbitrase", en: "Litigation & Arbitration" },
    desc: {
      id: "Sengketa perdata, pidana korporasi, arbitrase BANI/SIAC, dan eksekusi putusan.",
      en: "Civil disputes, corporate crime, BANI/SIAC arbitration, and enforcement.",
    },
    points: {
      id: ["Perdata & TUN", "Arbitrase & mediasi", "Kepailitan & PKPU"],
      en: ["Civil & administrative", "Arbitration & mediation", "Bankruptcy & PKPU"],
    },
  },
  {
    slug: "competition",
    title: { id: "Persaingan Usaha", en: "Antitrust & Competition" },
    desc: {
      id: "Notifikasi merger KPPU, pendampingan penyelidikan, dan audit kepatuhan persaingan.",
      en: "KPPU merger filing, investigation assistance, and competition compliance audits.",
    },
    points: {
      id: ["Notifikasi merger", "Pendampingan KPPU", "Pelatihan kepatuhan"],
      en: ["Merger notification", "KPPU assistance", "Compliance training"],
    },
  },
  {
    slug: "employment",
    title: { id: "Ketenagakerjaan", en: "Employment" },
    desc: {
      id: "PKWT/PKWTT, outsourcing, PHK, serikat, dan penyelesaian perselisihan industrial.",
      en: "Contracts, outsourcing, termination, unions, and industrial disputes.",
    },
    points: {
      id: ["Perjanjian kerja & PP/PKB", "Izin TKA", "Perselisihan bipartit & PHI"],
      en: ["Employment contracts & rules", "Expat permits", "Bipartite & court disputes"],
    },
  },
  {
    slug: "property",
    title: { id: "Properti & Pertanahan", en: "Real Estate & Land" },
    desc: {
      id: "Due diligence tanah, HGB/Hak Pakai, sewa komersial, dan konstruksi.",
      en: "Land due diligence, HGB/use rights, commercial leases, and construction.",
    },
    points: {
      id: ["Akusisi lahan", "Sewa & BOT", "Sengketa pertanahan"],
      en: ["Land acquisition", "Leases & BOT", "Land disputes"],
    },
  },
  {
    slug: "fintech",
    title: { id: "Keuangan & Fintech", en: "Banking, Finance & Fintech" },
    desc: {
      id: "Pinjam-meminjam, P2P/OJK licensing, perlindungan data, dan transaksi keuangan.",
      en: "Lending, P2P/OJK licensing, data protection, and finance transactions.",
    },
    points: {
      id: ["Perizinan OJK/BI", "PDP & keamanan siber", "Restrukturisasi utang"],
      en: ["OJK/BI licensing", "PDP & cybersecurity", "Debt restructuring"],
    },
  },
];

export const people: Person[] = [
  {
    slug: "wijaya-kusuma",
    name: "Wijaya Kusuma, S.H., LL.M.",
    role: { id: "Managing Partner", en: "Managing Partner" },
    expertise: {
      id: "Korporasi & M&A — 18 tahun mendampingi PMA Jepang, Korea, dan BUMN.",
      en: "Corporate & M&A — 18 years advising Japanese, Korean FDI and SOEs.",
    },
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "ratna-dewi",
    name: "Ratna Dewi, S.H.",
    role: { id: "Partner — Litigasi", en: "Partner — Litigation" },
    expertise: {
      id: "Litigasi & arbitrase — sengketa konstruksi dan energi.",
      en: "Litigation & arbitration — construction and energy disputes.",
    },
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "andreas-pratama",
    name: "Andreas Pratama, S.H.",
    role: { id: "Senior Associate", en: "Senior Associate" },
    expertise: {
      id: "Persaingan usaha & kepatuhan — notifikasi merger KPPU.",
      en: "Competition & compliance — KPPU merger filings.",
    },
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "sinta-maharani",
    name: "Sinta Maharani, S.H., M.Kn.",
    role: { id: "Associate — Properti", en: "Associate — Real Estate" },
    expertise: {
      id: "Pertanahan & notariat — due diligence dan HGB.",
      en: "Land & notarial — due diligence and HGB.",
    },
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];

export const insights: Insight[] = [
  {
    slug: "oss-perizinan-2026",
    title: {
      id: "OSS-RBA 2026: yang berubah untuk PMA baru",
      en: "OSS-RBA 2026: what changed for new foreign investment",
    },
    date: "2026-09-28",
    excerpt: {
      id: "Alur NIB, risiko menengah-tinggi, dan strategi menghindari penolakan verifikasi.",
      en: "NIB flow, medium-high risk tiers, and how to avoid verification rejection.",
    },
    image: IMAGES.signing,
    body: {
      id: [
        "Perizinan berbasis risiko masih menjadi tulang punggung OSS-RBA. Untuk PMA, kesalahan paling umum bukan di modal, melainkan di pemilihan KBLI dan pemetaan lokasi.",
        "Pastikan KBLI 5 digit sesuai kegiatan riil, lalu sinkronkan dengan tata ruang (RDTR). NIB terbit cepat, tetapi verifikasi syarat efektif yang menentukan Anda bisa operasi.",
        "Checklist kami: 1) KBLI & risiko, 2) kesesuaian lokasi, 3) NPWP & laporan LKPM, 4) SOP ketenagakerjaan. Satu saja meleset, timeline mundur 3–6 minggu.",
      ],
      en: [
        "Risk-based licensing remains the backbone of OSS-RBA. For foreign investors, the most common failure is not capital — it is wrong KBLI and location mapping.",
        "Use the 5-digit KBLI that matches real activity, then align with spatial plans (RDTR). NIB is fast; verification of effective requirements decides operations.",
        "Our checklist: 1) KBLI & risk tier, 2) location conformity, 3) tax ID & LKPM reporting, 4) employment SOPs. Miss one and lose 3–6 weeks.",
      ],
    },
  },
  {
    slug: "pkpu-restrukturisasi",
    title: {
      id: "PKPU bukan akhir: anatomi restrukturisasi yang lolos voting",
      en: "PKPU is not the end: anatomy of a plan that passes voting",
    },
    date: "2026-08-14",
    excerpt: {
      id: "Mengapa proposal damai gagal — dan cara menyusun cash-flow yang dipercaya kreditor.",
      en: "Why composition plans fail — and how to draft cash-flows creditors trust.",
    },
    image: IMAGES.strategy,
    body: {
      id: [
        "Kreditor tidak menolak haircut; mereka menolak ketidakpastian. Proposal yang lolos selalu punya tiga hal: arus kas berbasis kontrak, jaminan yang dieksekusi bertahap, dan pemantau independen.",
        "Struktur voting menentukan strategi. Pisahkan kreditor separatis, konkuren, dan preferen sejak awal — jangan disamaratakan.",
        "Jika Anda debitur, datang dengan data bank 12 bulan. Jika Anda kreditor, minta skenario downside tertulis, bukan janji lisan.",
      ],
      en: [
        "Creditors don't reject haircuts; they reject uncertainty. Plans that pass share three traits: contract-backed cash-flows, staged collateral, and an independent monitor.",
        "Voting structure dictates strategy. Separate secured, unsecured and preferred creditors early — never blend them.",
        "Debtors: bring 12 months of bank data. Creditors: demand a written downside case, not verbal promises.",
      ],
    },
  },
  {
    slug: "kontrak-jv-aman",
    title: {
      id: "Joint venture aman: 5 klausul yang selalu dinegosiasikan",
      en: "Safe joint ventures: 5 clauses always negotiated",
    },
    date: "2026-06-02",
    excerpt: {
      id: "Deadlock, put option, non-compete — bahasa sederhananya untuk direksi.",
      en: "Deadlock, put options, non-competes — in plain language for directors.",
    },
    image: IMAGES.meeting,
    body: {
      id: [
        "JV yang baik diuji saat hubungan memburuk. Lima klausul penentu: deadlock & buy-sell, reserved matters, dividen, non-compete, dan exit.",
        "Hindari deadlock 50:50 tanpa mekanisme. Gunakan Russian roulette atau Texas shoot-out yang disesuaikan dengan valuasi independen.",
        "Terakhir: pilih hukum dan forum sengketa sejak awal — BANI untuk domestik, SIAC untuk lintas negara.",
      ],
      en: [
        "Good JVs are tested when relationships sour. Five decisive clauses: deadlock & buy-sell, reserved matters, dividends, non-compete, and exit.",
        "Avoid 50:50 deadlock with no mechanism. Use Russian roulette or Texas shoot-out tied to independent valuation.",
        "Finally: pick governing law and forum early — BANI for domestic, SIAC for cross-border.",
      ],
    },
  },
];

export const ui = {
  nav: {
    firm: { id: "Firma Kami", en: "Our Firm" },
    practices: { id: "Bidang Praktik", en: "Practice Areas" },
    people: { id: "Tim Kami", en: "Our People" },
    insights: { id: "Wawasan", en: "Insights" },
    careers: { id: "Karier", en: "Careers" },
    contact: { id: "Kontak", en: "Contact" },
    consult: { id: "Konsultasi", en: "Consult" },
  },
};
