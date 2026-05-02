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

export const metadata: Metadata = {
  title: "Panharmon — Bí mật của giấc mơ",
  description: "Giải mã ngôn ngữ bí ẩn của giấc mơ. Kết hợp tâm lý học Jung, tâm linh học và trí tuệ nhân tạo.",
  icons: {
    icon: "/favicon.png",
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
