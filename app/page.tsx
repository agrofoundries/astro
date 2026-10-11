import { HeroSection } from "@/components/home/hero-section";
import { CompanyIntro } from "@/components/home/company-intro";
import { ProductsSection } from "@/components/home/products-section";
import { ServicesSection } from "@/components/home/services-section";
import { BlogSection } from "@/components/home/blog-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Precast Bridge Highway Infrastructure) */}
      <HeroSection />

      {/* 2. Precision Precast Company Overview & Technical Credentials */}
      <CompanyIntro />

      {/* 3. Products Catalog (Primary Basin Showcase + 100% Canva Product Line) */}
      <ProductsSection />

      {/* 4. Core Precast Engineering Services (USA Navy Background) */}
      <ServicesSection />

      {/* 5. Technical Insights & Blog (Light Blue Background) */}
      <BlogSection />

      {/* 6. Direct RFQ Takeoff & Engineering Desk (Clean White Surface) */}
      <ContactSection />
    </>
  );
}
