import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmartCallFab } from "@/components/layout/SmartCallFab";
import { seoContent } from "@/data/content";
import { defaultDescription, defaultTitle } from "@/lib/seo";
import { siteConfig } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  keywords: [
    "аварийное вскрытие замков СЗАО",
    "вскрытие замков Москва СЗАО",
    "вскрыть дверь СЗАО",
    "вскрытие дверей Москва",
    "вскрытие автомобильных замков Москва",
    "вскрытие сейфов Москва",
    "замена замков СЗАО",
    "мастер по замкам СЗАО",
    "вскрытие замков Митино",
    "вскрытие замков Строгино",
    "вскрытие замков Тушино",
    "вскрытие замков Щукино",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: seoContent.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFD21F",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${oswald.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <SmartCallFab />
      </body>
    </html>
  );
}
