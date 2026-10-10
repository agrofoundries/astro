import { HeroSection } from "@/components/home/hero-section";
import { CompanyIntro } from "@/components/home/company-intro";
import { ProductCategories } from "@/components/home/product-categories";
import { ApplicationsSection } from "@/components/home/applications-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { EngineeringSection } from "@/components/home/engineering-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProjectGallery } from "@/components/home/project-gallery";
import { QualitySection } from "@/components/home/quality-section";
import { ProcessSection } from "@/components/home/process-section";
import { TechnicalResources } from "@/components/home/technical-resources";
import { LogisticsSection } from "@/components/home/logistics-section";
import { TrustSection } from "@/components/home/trust-section";
import { FAQSection } from "@/components/home/faq-section";
import { ResourceCenter } from "@/components/home/resource-center";
import { AboutSection } from "@/components/home/about-section";
import { QuoteCTA } from "@/components/home/quote-cta";

export default function HomePage() {
  return (
    <>
      {/* 02. Hero */}
      <HeroSection />

      {/* 03. Company Introduction */}
      <CompanyIntro />

      {/* 04. Product Categories */}
      <ProductCategories />

      {/* 05. Industries & Applications */}
      <ApplicationsSection />

      {/* 06. Benefits of Precast */}
      <BenefitsSection />

      {/* 07. Manufacturing Capabilities */}
      <ManufacturingSection />

      {/* 08. Engineering & Custom Solutions */}
      <EngineeringSection />

      {/* 09. Featured Projects */}
      <FeaturedProjects />

      {/* 10. Project Gallery */}
      <ProjectGallery />

      {/* 11. Quality Assurance */}
      <QualitySection />

      {/* 12. How It Works */}
      <ProcessSection />

      {/* 13. Technical Resources */}
      <TechnicalResources />

      {/* 14. Delivery & Logistics */}
      <LogisticsSection />

      {/* 15. Customer Trust */}
      <TrustSection />

      {/* 16. FAQ */}
      <FAQSection />

      {/* 17. Resource Center */}
      <ResourceCenter />

      {/* 18. About PRECASTPRO */}
      <AboutSection />

      {/* 19. Quote Conversion CTA */}
      <QuoteCTA />
    </>
  );
}
