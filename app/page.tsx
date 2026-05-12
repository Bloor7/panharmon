import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import DecodeSection from "@/components/sections/DecodeSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";

const SITE_URL = "https://panharmon.com";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panharmon",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Nền tảng giải mã giấc mơ kết hợp tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.",
  inLanguage: "vi",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Panharmon",
  url: SITE_URL,
  description:
    "Giải mã ngôn ngữ bí ẩn của giấc mơ bằng tâm lý học Jung, tâm linh phương Đông và trí tuệ nhân tạo.",
  inLanguage: "vi",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/bai-viet?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <ProductsSection />
      <DecodeSection />
      <ArticlesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
