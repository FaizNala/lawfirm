"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import { IconMail, IconPhone, IconPin, IconClock, IconCheck, IconArrowRight, IconShield } from "./icons";

export default function ContactCareers() {
  const { lang } = useLang();
  const [sentCareer, setSentCareer] = useState(false);
  const [sentContact, setSentContact] = useState(false);

  return (
    <>
      <section id="karier" className="bg-[#F3EFE6] py-24 md:py-28 border-t hairline-navy">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <Reveal>
            <div>
              <h2 className="font-display text-[32px] md:text-[40px] text-[#0B1D33] leading-[1.1]">
                {lang === "id" ? (
                  <>
                    Tumbuh bersama firma yang <em className="italic text-[#8a6f3e]">serius.</em>
                  </>
                ) : (
                  <>
                    Grow with a <em className="italic text-[#8a6f3e]">serious</em> firm.
                  </>
                )}
              </h2>
              <p className="text-[#3d4c63] mt-5 leading-[1.8] text-[15.5px] max-w-[54ch]">
                {lang === "id"
                  ? "Kami membuka magang, associate, dan sekretaris legal. Kirim CV + transkrip — dibalas maksimal 14 hari kerja bila lolos kurasi. Yang kami cari: ketelitian, bahasa Inggris kerja, dan keberanian bertanya."
                  : "Open for interns, associates, and legal secretaries. Send CV + transcript — replied within 14 working days if shortlisted. We look for precision, working English, and the courage to ask."}
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {(
                  lang === "id"
                    ? [
                        ["Associate Litigasi", "2–4 th · Perdata & arbitrase"],
                        ["Associate Korporasi", "1–3 th · M&A & perizinan"],
                        ["Magang Riset", "Mahasiswa FH · min. smt 5"],
                      ]
                    : [
                        ["Litigation Associate", "2–4 yrs · Civil & arbitration"],
                        ["Corporate Associate", "1–3 yrs · M&A & licensing"],
                        ["Research Intern", "Law students · min. 5th sem"],
                      ]
                ).map(([role, meta]) => (
                  <li
                    key={role}
                    className="flex items-center justify-between gap-4 bg-white border border-[#0B1D33]/10 rounded-[12px] px-5 py-4"
                  >
                    <div>
                      <p className="font-semibold text-[#0B1D33] text-[15px]">{role}</p>
                      <p className="text-[13px] text-[#5b6b84] mt-0.5">{meta}</p>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold tracking-[0.1em] uppercase text-[#2f7a4d] bg-[#2f7a4d]/10 px-3 py-1.5 rounded-full">
                      {lang === "id" ? "Buka" : "Open"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              aria-label={lang === "id" ? "Formulir lamaran" : "Application form"}
              className="bg-white border border-[#0B1D33]/10 rounded-[14px] p-6 md:p-8 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const d = new FormData(e.currentTarget);
                const subject = `Lamaran ${d.get("posisi")} — ${d.get("nama")}`;
                const body = `Nama: ${d.get("nama")}%0D%0AEmail: ${d.get("email")}%0D%0APesan: ${d.get("pesan")}`;
                window.location.href = `mailto:careers@wijayapartners.co.id?subject=${encodeURIComponent(String(subject))}&body=${body}`;
                setSentCareer(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="career-nama" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                    {lang === "id" ? "Nama lengkap" : "Full name"} *
                  </label>
                  <input id="career-nama" name="nama" required autoComplete="name" placeholder="cth. Nadia Prameswari" className="field" />
                </div>
                <div>
                  <label htmlFor="career-email" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">Email *</label>
                  <input id="career-email" name="email" type="email" required autoComplete="email" placeholder="nama@email.com" className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="career-posisi" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                  {lang === "id" ? "Posisi" : "Position"}
                </label>
                <select id="career-posisi" name="posisi" className="field bg-white">
                  <option>Associate Litigasi</option>
                  <option>Associate Korporasi</option>
                  <option>Magang Riset</option>
                </select>
              </div>
              <div>
                <label htmlFor="career-pesan" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                  {lang === "id" ? "Pengalaman singkat + link CV" : "Brief experience + CV link"}
                </label>
                <textarea id="career-pesan" name="pesan" rows={4} placeholder="3–5 kalimat + link Google Drive / LinkedIn" className="field" />
              </div>
              <button className="group inline-flex items-center justify-center gap-2 bg-[#0B1D33] text-white rounded-[10px] py-3.5 text-[14.5px] font-semibold hover:bg-[#1a3a5f] transition-colors cursor-pointer">
                {lang === "id" ? "Kirim via Email" : "Send via Email"}
                <IconArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              {sentCareer && (
                <p role="status" className="flex items-start gap-2 text-[13px] text-[#2f7a4d] bg-[#2f7a4d]/10 border border-[#2f7a4d]/20 rounded-[10px] px-4 py-3">
                  <IconCheck width={16} height={16} className="mt-0.5 shrink-0" />
                  {lang === "id" ? "Aplikasi email terbuka — lampirkan CV Anda." : "Email app opened — attach your CV."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section id="kontak" className="bg-[#081426] py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,106,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.7) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
            maskImage: "radial-gradient(ellipse 70% 70% at 20% 20%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 20% 20%, black, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <Reveal>
            <div>
              <h2 className="font-display text-[34px] md:text-[46px] text-white leading-[1.06]">
                {lang === "id" ? (
                  <>
                    Ceritakan kebutuhan <em className="italic text-[#E8D5A8]">Anda.</em>
                  </>
                ) : (
                  <>
                    Tell us what <em className="italic text-[#E8D5A8]">you need.</em>
                  </>
                )}
              </h2>
              <p className="mt-5 text-white/60 text-[15.5px] leading-[1.75] max-w-[50ch]">
                {lang === "id"
                  ? "Ceritakan ringkas kebutuhan Anda. Partner yang relevan akan menghubungi kembali — rahasia terjaga sejak email pertama."
                  : "Briefly describe your need. The relevant partner will call back — confidentiality holds from the first email."}
              </p>
              <div className="mt-8 flex flex-col gap-4 text-[14px]">
                {[
                  { icon: IconPin, label: "Sequis Center Lt. 7 Unit 706, Jl. Jend. Sudirman Kav. 71, Jakarta 12190" },
                  { icon: IconPhone, label: "+62 21 522 3252", href: "tel:+62215223252" },
                  { icon: IconMail, label: "contact@wijayapartners.co.id", href: "mailto:contact@wijayapartners.co.id" },
                  { icon: IconClock, label: lang === "id" ? "Senin–Jumat, 09.00–18.00 WIB" : "Mon–Fri, 09.00–18.00 WIB" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3.5 text-white/75">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/12 bg-white/5 text-[#E8D5A8]">
                      <row.icon width={17} height={17} />
                    </span>
                    {row.href ? (
                      <a href={row.href} className="pt-1.5 hover:text-white transition-colors">
                        {row.label}
                      </a>
                    ) : (
                      <span className="pt-1.5 leading-relaxed">{row.label}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border border-white/12 bg-white/[0.04] rounded-[12px] px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#C9A96A]/15 text-[#E8D5A8]">
                  <IconShield width={18} height={18} />
                </span>
                <p className="text-[13.5px] text-white/70 leading-relaxed">
                  {lang === "id"
                    ? "Privilegi advokat–klien berlaku sejak konsultasi pertama. Dokumen Anda rahasia."
                    : "Attorney–client privilege applies from the first consultation. Your documents stay confidential."}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              aria-label={lang === "id" ? "Formulir konsultasi" : "Consultation form"}
              className="bg-[#FAF8F4] rounded-[14px] p-6 md:p-8 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const d = new FormData(e.currentTarget);
                const subject = `Konsultasi — ${d.get("nama")}`;
                const body = `Nama: ${d.get("nama")}%0D%0AEmail: ${d.get("email")}%0D%0ATelepon: ${d.get("telepon")}%0D%0AKebutuhan: ${d.get("pesan")}`;
                window.location.href = `mailto:contact@wijayapartners.co.id?subject=${encodeURIComponent(String(subject))}&body=${body}`;
                setSentContact(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-nama" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                    {lang === "id" ? "Nama" : "Name"} *
                  </label>
                  <input id="contact-nama" name="nama" required autoComplete="name" placeholder={lang === "id" ? "Nama Anda" : "Your name"} className="field" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">Email *</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="nama@perusahaan.com" className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-telp" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                  {lang === "id" ? "Telepon / WhatsApp" : "Phone / WhatsApp"}
                </label>
                <input id="contact-telp" name="telepon" type="tel" autoComplete="tel" placeholder="+62 …" className="field" />
              </div>
              <div>
                <label htmlFor="contact-pesan" className="block text-[13px] font-semibold text-[#0B1D33] mb-1.5">
                  {lang === "id" ? "Kebutuhan hukum Anda" : "Your legal need"} *
                </label>
                <textarea
                  id="contact-pesan"
                  name="pesan"
                  rows={5}
                  required
                  placeholder={lang === "id" ? "cth. Kami PMA manufaktur, butuh pendampingan JV + perizinan OSS…" : "e.g. We are a manufacturing FDI, need JV + OSS licensing support…"}
                  className="field"
                />
              </div>
              <button className="group inline-flex items-center justify-center gap-2 bg-[#C9A96A] text-[#0B1D33] rounded-[10px] py-3.5 text-[14.5px] font-bold hover:bg-[#0B1D33] hover:text-white transition-colors duration-300 cursor-pointer">
                {lang === "id" ? "Kirim Pesan Rahasia" : "Send Confidential Message"}
                <IconArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-[12px] text-[#69778f] leading-relaxed text-center">
                {lang === "id"
                  ? "Dengan mengirim, Anda menyetujui kebijakan privasi. Tidak ada spam — hanya balasan partner."
                  : "By sending, you agree to the privacy policy. No spam — only a partner's reply."}
              </p>
              {sentContact && (
                <p role="status" className="flex items-start gap-2 text-[13px] text-[#2f7a4d] bg-[#2f7a4d]/10 border border-[#2f7a4d]/20 rounded-[10px] px-4 py-3">
                  <IconCheck width={16} height={16} className="mt-0.5 shrink-0" />
                  {lang === "id" ? "Aplikasi email terbuka — pesan Anda siap dikirim." : "Email app opened — your message is ready to send."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
