import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionDock } from "@/components/layout/MobileActionDock";
import { defaultDescription, defaultTitle } from "@/lib/seo";
import { siteConfig } from "@/data/site";

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
        alt: "Аварийное вскрытие замков в СЗАО Москвы",
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
  themeColor: "#facc15",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileActionDock />
      </body>
    </html>
  );
}
