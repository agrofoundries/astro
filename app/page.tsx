import { HeroSection } from "@/components/home/hero-section";
import { SponsorMarquee } from "@/components/home/sponsor-marquee";
import { DivisionNavigator } from "@/components/home/division-navigator";
import { DivisionHeader } from "@/components/home/division-header";
import { CompanyIntro } from "@/components/home/company-intro";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { ProductsSection } from "@/components/home/products-section";
import { QCAssurance } from "@/components/home/qc-assurance";
import { DivisionBridge } from "@/components/home/division-bridge";
import { EngineeringSection } from "@/components/home/engineering-section";
import { ServicesSection } from "@/components/home/services-section";
import { SoftwareTechnology } from "@/components/home/software-technology";
import { LocationsSection } from "@/components/home/locations-section";
import { BlogSection } from "@/components/home/blog-section";

export default function HomePage() {
  return (
    <>
      {/* 1. Dual-Pillar Hero Section (Manufacturing Plant + Structural Engineering) */}
      <HeroSection />

      {/* 1b. Regional Association & Sponsor Marquee (NEPCA, NJPCA, PCANY, PCAV, PCMA, PPA) */}
      <SponsorMarquee />

      {/* 1c. Dedicated Dual-Division Navigator Matrix */}
      <DivisionNavigator />

      {/* ======================================================== */}
      {/* DIVISION 01: PRECAST CONCRETE MANUFACTURING & SUPPLY    */}
      {/* ======================================================== */}
      <DivisionHeader
        id="manufacturing"
        divisionNumber="01"
        title="Precast Concrete Manufacturing & Plant Facilities"
        subtitle="High-Capacity Casting Beds & DOT-Approved Civil Infrastructure"
        badge="PLANT CASTING & DOT CONCRETE PRODUCTS"
        description="Direct high-volume plant production operating climate-controlled casting beds, computerized twin-shaft planetary batching, and tandem 60-ton overhead cranes. Fabricating heavy highway box culverts, bridge panels, utility vaults, and stormwater drainage structures."
        primaryLink={{ label: "Browse Products Catalog", href: "/#products" }}
        secondaryLink={{ label: "Review Plant Specifications", href: "/#manufacturing-specs" }}
        theme="manufacturing"
      />

      {/* 2. Precision Precast Company Overview & Technical Credentials */}
      <CompanyIntro />

      {/* 3. Plant Metrics & Heavy-Duty Casting Beds */}
      <ManufacturingSection />

      {/* 4. Products Catalog (Heavy Civil Infrastructure First + Complete Line) */}
      <ProductsSection />

      {/* 5. In-House Materials Testing & Quality Assurance Lab */}
      <QCAssurance />

      {/* ======================================================== */}
      {/* INTEGRATION BRIDGE: 3D BIM MODEL TO PLANT CASTING BED     */}
      {/* ======================================================== */}
      <DivisionBridge />

      {/* ======================================================== */}
      {/* DIVISION 02: STRUCTURAL ENGINEERING & 3D BIM CONSULTING */}
      {/* ======================================================== */}
      <DivisionHeader
        id="engineering"
        divisionNumber="02"
        title="Precast Structural Engineering & 3D BIM Services"
        subtitle="50-State PE Stamped Calculations & Tekla LOD 400 Detailing"
        badge="VIRTUAL DESIGN & 50-STATE PE CONSULTING"
        description="Dedicated in-house structural engineering consultancy specializing exclusively in precast and prestressed concrete systems. Delivering 50-state PE/SE stamped calculations, custom connection designs, erection sequencing, and clash-free fabrication detailing."
        primaryLink={{ label: "View 8 Engineering Disciplines", href: "/#services" }}
        secondaryLink={{ label: "Digital BIM Workflows", href: "/#software" }}
        theme="engineering"
      />

      {/* 6. In-House Precast Structural Engineering & BIM Detailing */}
      <EngineeringSection />

      {/* 7. 8 Core Precast Engineering Disciplines */}
      <ServicesSection />

      {/* 8. Digital Engineering Software & CAD/CAM Automation */}
      <SoftwareTechnology />

      {/* ======================================================== */}
      {/* REGIONAL LOCATIONS & TECHNICAL INSIGHTS                  */}
      {/* ======================================================== */}
      {/* 9. Regional Delivery Network & Engineering Offices */}
      <LocationsSection />

      {/* 10. Technical Insights & Blog */}
      <BlogSection />
    </>
  );
}
