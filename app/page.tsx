import { HeroSection } from "@/components/home/hero-section";
import { SponsorMarquee } from "@/components/home/sponsor-marquee";
import { WhoWeAreStory } from "@/components/home/who-we-are-story";
import { MarketsSection } from "@/components/home/markets-section";
import { ProductsSection } from "@/components/home/products-section";
import { LiveMockupShowcase } from "@/components/home/live-mockup-showcase";
import { EngineeringSection } from "@/components/home/engineering-section";
import { IconicProjectsSection } from "@/components/home/iconic-projects";
import { LocationsSection } from "@/components/home/locations-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Flagship Hero Section (Advanced Precast Engineering & Infrastructure) */}
      <HeroSection />

      {/* 2. Regional DOT & Precast Industry Affiliations (NEPCA, NJPCA, PCANY, PCAV, PCMA, PPA) */}
      <SponsorMarquee />

      {/* 3. The Visual Story: Who We Are, Deer Park Heritage, Mission & Vision, and Core Pillars */}
      <WhoWeAreStory />

      {/* 4. Client Industries & Market Sectors Served (7 Markets in One Row) */}
      <MarketsSection />

      {/* 5. Certified Precast Products Catalog (Heavy Civil & Underground Infrastructure) */}
      <ProductsSection />

      {/* 6. Live Device Mockups (iPad & Mobile Real-Time Platform Experience) */}
      <LiveMockupShowcase />

      {/* 7. In-House Structural Engineering, Licensed PE Stamped Calcs & 3D Tekla Detailing */}
      <EngineeringSection />

      {/* 6. Iconic & Ongoing Certified Civil Projects in NY/NJ Metro */}
      <IconicProjectsSection />

      {/* 7. Estimating Desk, Realistic USA Contractor Request Form & CAD Drawing Attachment */}
      <ContactSection />

      {/* 8. Deer Park, Long Island Production Plant Coordinates & Tri-State Service Area */}
      <LocationsSection />
    </>
  );
}
