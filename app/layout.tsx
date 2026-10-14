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
  display: "swap",
});

const displaySerif = EB_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wijaya & Partners — Counsellors at Law",
    template: "%s | Wijaya & Partners",
  },
  description:
    "Firma hukum bisnis Jakarta: korporasi & M&A, litigasi & arbitrase, persaingan usaha, ketenagakerjaan. Ditangani partner langsung. Bilingual ID/EN.",
  metadataBase: new URL("https://wijayapartners.co.id"),
  keywords: ["firma hukum jakarta", "corporate law indonesia", "litigasi", "arbitrase BANI", "KPPU", "law firm jakarta"],
  openGraph: {
    title: "Wijaya & Partners — Counsellors at Law",
    description: "Navigator bisnis yang tenang di tengah regulasi yang bergerak. Ditangani partner sejak 2008.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: "Wijaya & Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wijaya & Partners — Counsellors at Law",
    description: "Korporasi, litigasi, kepatuhan — ditangani partner langsung.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${displaySerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F4] text-[#0B1D33]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#C9A96A] focus:text-[#0B1D33] focus:px-4 focus:py-2 focus:rounded-[8px] focus:text-sm focus:font-semibold"
        >
          Lewati ke konten
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main" className="flex-1 pt-[68px]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "Wijaya & Partners",
              slogan: "Counsellors at Law",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sequis Center Lt. 7 Unit 706, Jl. Jend. Sudirman Kav. 71",
                addressLocality: "Jakarta",
                postalCode: "12190",
                addressCountry: "ID",
              },
              telephone: "+62-21-522-3252",
              email: "contact@wijayapartners.co.id",
              foundingDate: "2008",
              areaServed: "Indonesia",
            }),
          }}
        />
      </body>
    </html>
  );
}
