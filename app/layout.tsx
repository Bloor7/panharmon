import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/ClientProviders";
import ChatWidget from "@/components/ui/ChatWidget";
import { Analytics } from "@vercel/analytics/next"

const playfairDisplay = Playfair_Display({
  variable: "--font-cinzel",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-space-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

const SITE_URL = "https://panharmon.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Panharmon — Giải Mã Giấc Mơ Theo Tâm Lý Jung & Tâm Linh",
    template: "%s | Panharmon",
  },
  description:
    "Giải mã ngôn ngữ bí ẩn của giấc mơ bằng tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo. Khám phá ý nghĩa ẩn sau giấc mơ của bạn.",
  keywords: [
    "giải mã giấc mơ",
    "nằm mơ thấy",
    "ý nghĩa giấc mơ",
    "tâm lý Jung",
    "giấc mơ tiên tri",
    "biểu tượng giấc mơ",
    "phân tích giấc mơ",
    "Panharmon",
  ],
  authors: [{ name: "Panharmon", url: SITE_URL }],
  creator: "Panharmon",
  publisher: "Panharmon",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Panharmon",
    title: "Panharmon — Giải Mã Giấc Mơ Theo Tâm Lý Jung & Tâm Linh",
    description:
      "Giải mã ngôn ngữ bí ẩn của giấc mơ bằng tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Panharmon — Giải Mã Giấc Mơ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panharmon — Giải Mã Giấc Mơ Theo Tâm Lý Jung & Tâm Linh",
    description:
      "Giải mã ngôn ngữ bí ẩn của giấc mơ bằng tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${notoSansMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-ghost relative">
        <ClientProviders />
        <Header />
        <main className="flex-1 pt-20 relative z-10">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
