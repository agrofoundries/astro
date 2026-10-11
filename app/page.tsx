import { HeroSection } from "@/components/home/hero-section";
import { SponsorMarquee } from "@/components/home/sponsor-marquee";
import { CompanyIntro } from "@/components/home/company-intro";
import { ProductsSection } from "@/components/home/products-section";
import { ServicesSection } from "@/components/home/services-section";
import { BlogSection } from "@/components/home/blog-section";
import { LocationsSection } from "@/components/home/locations-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Precast Bridge Highway Infrastructure) */}
      <HeroSection />

      {/* 1b. Association & Sponsor Marquee (NEPCA, NJPCA, PCANY, PCAV, PCMA, PPA) */}
      <SponsorMarquee />

      {/* 2. Precision Precast Company Overview & Technical Credentials */}
      <CompanyIntro />

      {/* 3. Products Catalog (Primary Basin Showcase + 100% Canva Product Line) */}
      <ProductsSection />

      {/* 4. Core Precast Engineering Services (USA Navy Background) */}
      <ServicesSection />

      {/* 5. Technical Insights & Blog (Light Blue Background) */}
      <BlogSection />

      {/* 6. Eight Offices, One Delivery Standard (Locations Section in USA Navy & Red) */}
      <LocationsSection />
    </>
  );
}
