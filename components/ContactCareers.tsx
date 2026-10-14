"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

export default function ContactCareers() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <>
      <section id="karier" className="bg-[#F3EFE6] py-20">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[#A9884E] tracking-[0.25em] text-xs uppercase">
              {lang === "id" ? "Karier" : "Careers"}
            </p>
            <h2 className="font-display text-3xl text-[#0B1D33] mt-3">
              {lang === "id" ? "Tumbuh bersama firma yang serius." : "Grow with a serious firm."}
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm">
              {lang === "id"
                ? "Kami membuka magang, associate, dan sekretaris legal. Kirim CV + transkrip — dibalas maksimal 14 hari kerja bila lolos kurasi."
                : "Open for interns, associates, and legal secretaries. Send CV + transcript — replied within 14 working days if shortlisted."}
            </p>
            <ul className="mt-4 text-sm text-[#0B1D33] space-y-1">
              <li>— Associate Litigasi (2–4 th)</li>
              <li>— Associate Korporasi (1–3 th)</li>
              <li>— Magang Riset (mahasiswa FH)</li>
            </ul>
          </div>
          <form
            className="bg-white border hairline rounded-2xl p-6 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const subject = `Lamaran ${d.get("posisi")} — ${d.get("nama")}`;
              const body = `Nama: ${d.get("nama")}%0D%0AEmail: ${d.get("email")}%0D%0APesan: ${d.get("pesan")}`;
              window.location.href = `mailto:careers@wijayapartners.co.id?subject=${encodeURIComponent(String(subject))}&body=${body}`;
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="nama" required placeholder={lang === "id" ? "Nama lengkap" : "Full name"} className="border hairline rounded-lg px-3 py-2.5 text-sm" />
              <input name="email" type="email" required placeholder="Email" className="border hairline rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <select name="posisi" className="border hairline rounded-lg px-3 py-2.5 text-sm bg-white">
              <option>Associate Litigasi</option>
              <option>Associate Korporasi</option>
              <option>Magang Riset</option>
            </select>
            <textarea name="pesan" rows={4} placeholder={lang === "id" ? "Pengalaman singkat + link CV" : "Brief experience + CV link"} className="border hairline rounded-lg px-3 py-2.5 text-sm" />
            <button className="bg-[#0B1D33] text-white rounded-full py-3 text-sm hover:bg-[#1A3A5F] transition">
              {lang === "id" ? "Kirim via Email" : "Send via Email"}
            </button>
            {sent && <p className="text-xs text-green-700">✓ {lang === "id" ? "Aplikasi email terbuka — lampirkan CV Anda." : "Email app opened — attach your CV."}</p>}
          </form>
        </div>
      </section>

      <section id="kontak" className="bg-[#0B1D33] py-20">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[#C9A96A] tracking-[0.25em] text-xs uppercase">Kontak</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
              {lang === "id" ? "Ceritakan kebutuhan Anda." : "Tell us what you need."}
            </h2>
            <div className="mt-6 text-white/70 text-sm space-y-2">
              <p>Sequis Center Lt. 7 Unit 706, Jl. Jend. Sudirman Kav. 71, Jakarta 12190</p>
              <p>+62 21 522 3252 — contact@wijayapartners.co.id</p>
              <p>{lang === "id" ? "Senin–Jumat, 09.00–18.00 WIB" : "Mon–Fri, 09.00–18.00 WIB"}</p>
            </div>
          </div>
          <form
            className="bg-white rounded-2xl p-6 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const subject = `Konsultasi — ${d.get("nama")}`;
              const body = `Nama: ${d.get("nama")}%0D%0AEmail: ${d.get("email")}%0D%0AKebutuhan: ${d.get("pesan")}`;
              window.location.href = `mailto:contact@wijayapartners.co.id?subject=${encodeURIComponent(String(subject))}&body=${body}`;
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="nama" required placeholder={lang === "id" ? "Nama" : "Name"} className="border hairline rounded-lg px-3 py-2.5 text-sm" />
              <input name="email" type="email" required placeholder="Email" className="border hairline rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <textarea name="pesan" rows={5} required placeholder={lang === "id" ? "Kebutuhan hukum Anda…" : "Your legal need…"} className="border hairline rounded-lg px-3 py-2.5 text-sm" />
            <button className="bg-[#C9A96A] text-[#0B1D33] rounded-full py-3 text-sm font-medium hover:bg-white border hairline transition">
              {lang === "id" ? "Kirim Pesan" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
