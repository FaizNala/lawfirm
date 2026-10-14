import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displaySerif = EB_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Wijaya & Partners — Counsellors at Law",
    template: "%s | Wijaya & Partners",
  },
  description:
    "Firma hukum bisnis Jakarta: korporasi, litigasi & arbitrase, persaingan usaha. Bilingual ID/EN.",
  metadataBase: new URL("https://wijayapartners.co.id"),
  openGraph: {
    title: "Wijaya & Partners — Counsellors at Law",
    description: "Navigator bisnis yang tenang di tengah regulasi yang bergerak.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${displaySerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F4]">
        {/* THESIS: kredibilitas tenang ala ABNR/MAPS, bukan hero agensi. OWN-WORLD: navy pekat + ivory + hairline emas, serif klasik. STORY: visitor paham 6 praktik, tim, wawasan dalam 1 scroll. FIRST VIEWPORT: foto tower gelap + headline serif + 2 CTA + 3 stats. FORM: one-page sections + Medium article. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
