import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { site } from "@/content/site";
import { buildLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

/** Serifada elegante — títulos (ritmo Kurotel) */
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

/** Sans limpa — UI e corpo */
const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | Taquaral, Campinas`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.siteUrl,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/brand/logo.svg", width: 280, height: 80, alt: site.name }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = buildLocalBusinessSchema();

  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
