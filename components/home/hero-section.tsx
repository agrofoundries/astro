"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  Factory,
  MapPin,
  BookOpen,
} from "lucide-react";

const TRUST_METRICS = [
  {
    icon: Award,
    title: "5,000+ PSI Concrete",
    subtitle: "Min 28-Day Compressive Strength",
  },
  {
    icon: ShieldCheck,
    title: "AASHTO HS20-44 Rated",
    subtitle: "Suffolk & Nassau County Spec",
  },
  {
    icon: Factory,
    title: "WWF ASTM A1064 Steel",
    subtitle: "Mesh Centered in 6\" Wall · 1.5\" Cover",
  },
  {
    icon: MapPin,
    title: "Deer Park, NY Plant",
    subtitle: "631-667 3300 · www.astromasonry.com",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Astro Precast Engineering Flagship Hero"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFFFFF] via-[#F4F9FF] to-[#E8F3FD] border-b border-[#D0E2F2] flex flex-col justify-between"
    >
      {/* Background Technical Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#0E96E112_1px,transparent_1px),linear-gradient(to_bottom,#0E96E112_1px,transparent_1px)] bg-[size:36px_36px]" 
      />

      {/* Ambient Top Glow */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#0E96E1]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 
        Right-Side Precast Concrete Catch Basins with Technical CAD Blueprint Overlay
        Extracted directly from the Astro 2026 Engineering reference specification
      */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[55%] z-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-precast-blueprint-side@2x.png"
            alt="Astro Precast Concrete Catch Basins with CAD technical blueprint dimensions"
            fill
            priority
            className="object-cover object-right-center lg:object-contain lg:object-right select-none"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 section-container-wide flex-1 flex flex-col justify-center py-8 sm:py-10 lg:py-14 xl:py-16">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          {/* Eyebrow Pill Badge (Matching Exact User Reference) */}
          <div className="inline-flex items-center gap-2 p-1 pl-3.5 pr-1.5 rounded-full bg-[#E1F3FE]/95 border border-[#BAE6FD] mb-4 sm:mb-5 shadow-xs w-fit animate-fade-down">
            <span className="w-2 h-2 rounded-full bg-[#014088] shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#014088] uppercase font-mono">
              ASTRO 2026 CATALOG SPECIFICATION
            </span>
            <span className="text-[10.5px] sm:text-xs font-bold text-[#0E96E1] bg-[#EBF7FF] px-2.5 py-0.5 rounded-full border border-[#BAE6FD] uppercase font-mono tracking-wide">
              DEER PARK, NY • 631-667 3300
            </span>
          </div>

          {/* High-Impact Headline from Astro 2026 Catalog */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] font-black tracking-tight leading-[1.04] uppercase mb-4 text-[#014088] animate-fade-up">
            ADVANCED PRECAST<br />
            <span className="text-[#0E96E1]">
              ENGINEERING
            </span>
            <br />
            <span className="text-[#014088]">
              &amp; INFRASTRUCTURE
            </span>
          </h1>

          {/* Accent Line with PDF Tagline */}
          <div className="flex items-center gap-2.5 mb-4 animate-fade-up [animation-delay:150ms]">
            <span className="w-8 h-[3.5px] bg-[#0E96E1] rounded-full shrink-0" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.14em] text-[#014088] uppercase font-mono">
              INFRASTRUCTURE | UTILITY | CUSTOM SOLUTIONS
            </span>
            <span className="text-[#0E96E1] font-mono font-bold text-xs select-none">
              ⁝⁝
            </span>
          </div>

          {/* Clear Supporting Description matching Astro 2026 PDF */}
          <p className="text-sm sm:text-base lg:text-[16px] text-slate-800 leading-relaxed font-medium max-w-xl mb-7 animate-fade-up [animation-delay:220ms]">
            Astro Masonry &amp; Precast manufactures certified high-strength precast concrete structures engineered for municipal stormwater, underground utilities, and civil site work. Certified 5,000+ PSI compressive strength, AASHTO HS20-44 traffic-rated, and engineered to exact Suffolk &amp; Nassau County standards from our Long Island production plant.
          </p>

          {/* Action CTAs (2 High-Impact Buttons) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 xl:gap-5 animate-fade-up [animation-delay:300ms]">
            {/* Primary Cyan Button */}
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#0E96E1] hover:bg-[#0C82C4] text-white font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer active:scale-95 shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>BROWSE 2026 CATALOG</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 
        Bottom Trust Strip:
        Refined engineering metrics docked at the base
      */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md border-t border-[#D0E2F2] shadow-xs">
        <div className="section-container-wide py-3 sm:py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {TRUST_METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 ${
                    idx > 0 ? "pt-2 sm:pt-0 sm:pl-5" : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0 text-[#014088]">
                    <Icon className="w-4 h-4 text-[#0E96E1]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#014088] leading-tight">
                      {metric.title}
                    </h3>
                    <p className="text-[10.5px] text-[#014088]/80 leading-tight mt-0.5 font-bold font-mono">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
