"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  FileText, 
  Building2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Phone
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface HeroSlide {
  id: string;
  eyebrow: string;
  badgeTag: string;
  titleNavy: string;
  titleRed: string;
  tagline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "structural-precast-engineering",
    eyebrow: "LICENSED STRUCTURAL ENGINEERS • PE/SE IN 48 STATES",
    badgeTag: "PCI CERTIFIED",
    titleNavy: "STRUCTURAL PRECAST ENGINEERING &",
    titleRed: "TEKLA LOD 400 BIM DETAILING.",
    tagline: "EMPOWERING PRECASTERS NATIONWIDE — SINCE 1994",
    description: "We provide licensed PE-stamped structural calculations, clash-free Tekla fabrication shop drawings, lifting/handling analysis, and precast bid takeoffs to empower precasters, fabricators, and general contractors.",
    primaryCtaText: "Submit Drawings for Takeoff",
    primaryCtaHref: "/quote",
    secondaryCtaText: "Explore Engineering Disciplines",
    secondaryCtaHref: "/capabilities",
    mediaType: "video",
    mediaSrc: "/videos/hero-precast.mp4",
    posterSrc: "/images/hero-precast.jpg",
  },
  {
    id: "civil-bridge-infrastructure",
    eyebrow: "AASHTO & STATE DOT INFRASTRUCTURE SPECIALISTS",
    badgeTag: "DOT APPROVED",
    titleNavy: "HIGHWAY BRIDGE GIRDERS &",
    titleRed: "HEAVY CIVIL INFRASTRUCTURE.",
    tagline: "AASHTO HS-25 & HL-93 LOAD RATED DESIGNS",
    description: "Engineering analysis for prestressed bridge girders, storm box culverts, MSE retaining walls, and underground utility vaults with accelerated construction erection sequencing and 100-year design life.",
    primaryCtaText: "View Civil Solutions",
    primaryCtaHref: "/applications",
    secondaryCtaText: "Download DOT Details",
    secondaryCtaHref: "/resources",
    mediaType: "image",
    mediaSrc: "/images/infrastructure.jpg",
  },
  {
    id: "architectural-wall-systems",
    eyebrow: "ARCHITECTURAL PRECAST & ENVELOPE ENGINEERING",
    badgeTag: "LOD 400 BIM",
    titleNavy: "HIGH-PERFORMANCE INSULATED",
    titleRed: "PRECAST ENCLOSURE SYSTEMS.",
    tagline: "CONTINUOUS THERMAL MASS ENVELOPE R-24 TO R-32",
    description: "Complete engineering for thermally broken sandwich panels, spandrels, and custom architectural facades with composite ties, wind load deflection analysis, and integrated window receiver details.",
    primaryCtaText: "Request Panel Engineering",
    primaryCtaHref: "/quote",
    secondaryCtaText: "View Case Studies",
    secondaryCtaHref: "/projects",
    mediaType: "image",
    mediaSrc: "/images/wall-panels.jpg",
  },
];

const ENGINEERING_PILLARS = [
  {
    icon: Building2,
    number: "01",
    title: "PE Stamped Structural Design",
    description: "Gravity, lateral, wind & seismic calculations per PCI Design Handbook 8th Ed & ACI 318.",
    href: "/capabilities#engineering",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Tekla LOD 400 Production BIM",
    description: "Clash-free 3D models, automated rebar fabrication tickets, and erection sequencing drawings.",
    href: "/capabilities#engineering",
  },
  {
    icon: Layers,
    number: "03",
    title: "Connection & Rigging Engineering",
    description: "Stripping anchors, crane hook rigging, handling analysis, and jobsite welded/bolted inserts.",
    href: "/products#custom",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Bid Takeoffs & Plant Advisory",
    description: "Itemized piece counts, hardware takeoffs, value engineering, and PCI MNL-116 audit prep.",
    href: "/quote",
  },
];

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section 
      id="hero"
      aria-label="Flagship Hero"
      className="relative w-full bg-slate-100 overflow-hidden min-h-[calc(100vh-112px)] lg:h-[calc(100vh-112px)] flex flex-col justify-between"
    >
      {/* 
        BRIGHT DAYLIGHT BACKGROUND MEDIA — FULL CLARITY & SATURATION
        Zero darkness, zero dull blue tint. Bright, sunlit, vibrant daylight precast engineering scene!
      */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {HERO_SLIDES.map((s, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {s.mediaType === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={s.posterSrc}
                  className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.02] saturate-[1.10]"
                >
                  <source src={s.mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={s.mediaSrc}
                  alt={s.titleNavy}
                  fill
                  priority={idx === 0}
                  className="object-cover filter brightness-[1.02] contrast-[1.02] saturate-[1.10]"
                />
              )}
            </div>
          );
        })}

        {/* 
          BRIGHT DAYLIGHT WASH OVERLAY — SOFT SUNLIT GRADIENT
          Soft daylight wash on the left guarantees 100% sharp contrast for Navy & Red text,
          while keeping the whole scene bright, open, and vibrant with ZERO black or dullness!
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% to-white/10 z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content in Bright High-Contrast Navy & Red */}
      <div className="relative z-20 section-container-wide pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow badge in Bright White & Brand Red */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-300 shadow-sm mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
            <span className="text-[#0B2545] text-xs font-black uppercase tracking-wider">
              {slide.eyebrow}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[#D71920] font-extrabold text-[11px] uppercase bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
              {slide.badgeTag}
            </span>
          </div>

          {/* 
            Main Title: Bright, Powerful USA Navy & USA Red
            Solid, high-contrast, razor-sharp lettering!
          */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] uppercase mb-3">
            <span className="text-[#0B2545]">
              {slide.titleNavy}
            </span>
            <br />
            <span className="text-[#D71920]">
              {slide.titleRed}
            </span>
          </h1>

          {/* Subtitle Accent Line in USA Navy Blue */}
          <div className="text-[#0B2545] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#D71920]" />
            <span>{slide.tagline}</span>
          </div>

          {/* Supporting Description in Deep Charcoal / Slate */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl mb-8">
            {slide.description}
          </p>

          {/* Action Buttons: Vibrant USA Red & Deep USA Navy */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href={slide.primaryCtaHref}
              className="bg-[#D71920] hover:bg-[#B31217] text-white px-7 py-3.5 rounded text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <FileText className="w-4 h-4" />
              <span>{slide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.secondaryCtaHref}
              className="bg-[#0B2545] hover:bg-[#06182E] text-white px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:shadow-lg border border-[#0B2545]"
            >
              <span>{slide.secondaryCtaText}</span>
            </Link>

            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 text-[#0B2545] hover:text-[#D71920] px-4 py-2 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D71920]" />
              <span>Engineering Desk: <strong className="text-[#0B2545]">{COMPANY.phone}</strong></span>
            </a>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 pt-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2 transition-all rounded-full ${
                  i === currentSlideIndex
                    ? "w-8 bg-[#D71920]"
                    : "w-2 bg-slate-400 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 
        Bottom 4 Engineering Pillars — Industry-Standard Precast Engineering Strip
        Clean white surface with crisp borders and USA Red / Navy branding
      */}
      <div className="relative z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-md">
        <div className="section-container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {ENGINEERING_PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.number}
                  href={item.href}
                  className="p-4 lg:p-5 hover:bg-slate-50/90 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded bg-red-50 border border-red-100 flex items-center justify-center text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0B2545]/50">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-tight mb-1 group-hover:text-[#D71920] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2 font-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform">
                    <span>Engineering Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
