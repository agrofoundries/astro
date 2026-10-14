"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Layers,
  ShieldCheck,
  Factory,
  Box,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ServiceTab {
  id: string;
  title: string;
  tagline: string;
  icon: typeof FileText;
  image: string;
  imageAlt: string;
  badge: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
}

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "design-engineering",
    title: "Design and Engineering",
    tagline: "The structural thinking behind every piece.",
    icon: FileText,
    image: "/images/engineering-team.jpg",
    imageAlt: "Engineer reviewing 3D precast CAD structures on dual monitors in technical office",
    badge: "Structural PE Consulting",
    tags: [
      "Structural design and calculations",
      "FEA modeling",
      "Precast detailing and 3D CAD",
      "Structural retrofitting",
      "Reverse engineering from scans or old parts",
    ],
    ctaLabel: "Inquire About Engineering",
    ctaHref: "/#contact",
  },
  {
    id: "drawings-submittals",
    title: "Drawings and Submittals",
    tagline: "Documents your plant and the agency can both work from.",
    icon: Layers,
    image: "/images/hero-clean-yard.jpg",
    imageAlt: "Detailed precast shop drawings and fabrication piece tickets",
    badge: "146-Page CAD Drawing Catalog",
    tags: [
      "LOD 400 production drawings",
      "Fabrication piece tickets",
      "State DOT submittal packages",
      "Reinforcement bending schedules",
      "Crane rigging & erection sequences",
    ],
    ctaLabel: "Download CAD Drawings (146-Page PDF)",
    ctaHref: "/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf",
  },
  {
    id: "specs-approvals",
    title: "Specs and Approvals",
    tagline: "Getting your product written into the job.",
    icon: ShieldCheck,
    image: "/images/infrastructure.jpg",
    imageAlt: "Civil precast highway infrastructure specifications and agency approvals",
    badge: "Suffolk & Nassau Approved",
    tags: [
      "Suffolk & Nassau County specs",
      "AASHTO HS20-44 highway standards",
      "ASTM A1064 welded wire reinforcement",
      "Municipal stormwater permits",
      "Agency engineer sign-offs",
    ],
    ctaLabel: "Review Approval Documents",
    ctaHref: "/#contact",
  },
  {
    id: "precast-manufacturing",
    title: "Precast Manufacturing",
    tagline: "We cast what we design, in our own plant.",
    icon: Factory,
    image: "/images/hero-precast-yard-clean.jpg",
    imageAlt: "Precast casting beds and computerized twin-shaft planetary batching plant",
    badge: "Plant Precision Casting",
    tags: [
      "5,000+ PSI compressive strength",
      "Climate-controlled casting bays",
      "Twin-shaft planetary batching",
      "Monolithic single-pour structures",
      "Precision crane stripping",
    ],
    ctaLabel: "Browse Plant Products",
    ctaHref: "/#products",
  },
  {
    id: "molds-formwork",
    title: "Molds and Formwork",
    tagline: "Engineering and fabrication that keep casting beds turning, ours and yours.",
    icon: Box,
    image: "/images/products_hero_steel_form.png",
    imageAlt: "Heavy structural steel casting forms and precision mold tooling",
    badge: "Heavy Structural Steel",
    tags: [
      "Heavy-gauge structural steel forms",
      "Octagonal knockout inserts",
      "Adjustable riser form tooling",
      "Watertight tongue & groove headers",
      "High-cycle vibration durability",
    ],
    ctaLabel: "Custom Formwork Inquiry",
    ctaHref: "/#contact",
  },
  {
    id: "testing-quality",
    title: "Testing and Quality",
    tagline: "Proof that the product does what the drawing says.",
    icon: CheckCircle2,
    image: "/images/commercial-building.jpg",
    imageAlt: "Certified in-house materials testing laboratory and hydraulic compression break tests",
    badge: "Certified QA/QC Lab",
    tags: [
      "28-day cylinder break testing",
      "Air entrainment & slump verification",
      "Certified plant QC inspection",
      "Batch heat & hydration monitoring",
      "Full mill certification traceability",
    ],
    ctaLabel: "Download QC Certifications",
    ctaHref: "/#contact",
  },
];

export function EverythingElseWeDo() {
  const [activeId, setActiveId] = useState<string>("design-engineering");
  const activeTab = SERVICE_TABS.find((t) => t.id === activeId) || SERVICE_TABS[0];

  return (
    <section id="services-everything" className="w-full bg-[#F8FAFC] py-14 sm:py-20 border-b border-[#D0E2F2]">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] tracking-tight">
              Everything Else We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-1">
              Complete end-to-end precast structural engineering, detailing, and manufacturing support.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs sm:text-sm font-bold text-[#014088] hover:text-[#0E96E1] transition-colors inline-flex items-center gap-1.5 mt-3 sm:mt-0 group"
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4 text-[#0E96E1] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive 2-Column Showcase matching exact user reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Interactive Vertical Service List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  type="button"
                  className={`w-full text-left p-4 sm:p-4.5 rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-4 border ${
                    isActive
                      ? "bg-[#014088] text-white border-[#014088] shadow-md scale-[1.01]"
                      : "bg-white hover:bg-white/80 text-slate-800 border-slate-200 hover:border-[#0E96E1]/40 shadow-xs"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/10 text-[#0E96E1]"
                        : "bg-[#E0F2FE] text-[#014088]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-sm sm:text-[15px] font-bold tracking-tight leading-snug mb-1 ${
                        isActive ? "text-white" : "text-[#014088]"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed font-medium line-clamp-2 ${
                        isActive ? "text-slate-100" : "text-slate-700"
                      }`}
                    >
                      {tab.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Feature Card with Image and Tag Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
              {/* Feature Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-900">
                <Image
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  fill
                  priority
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-[#014088]/90 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  {activeTab.badge}
                </div>
              </div>

              {/* Dark Card Overlay / Information Panel below image */}
              <div className="p-6 sm:p-8 bg-[#014088] text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {activeTab.title}
                  </h3>
                  <a
                    href={activeTab.ctaHref}
                    download={activeTab.ctaHref.endsWith(".pdf") ? "Astro-2026-Precast-Engineering-Catalog-Drawings.pdf" : undefined}
                    target={activeTab.ctaHref.endsWith(".pdf") ? "_blank" : undefined}
                    rel={activeTab.ctaHref.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0E96E1] hover:bg-[#0C82C4] px-4 py-2 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
                  >
                    <span>{activeTab.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-white/90 mb-6 leading-relaxed font-medium">
                  {activeTab.tagline}
                </p>

                {/* Pill Tags Matrix */}
                <div className="flex flex-wrap gap-2">
                  {activeTab.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="sm:hidden mt-6 pt-4 border-t border-white/10">
                  <a
                    href={activeTab.ctaHref}
                    download={activeTab.ctaHref.endsWith(".pdf") ? "Astro-2026-Precast-Engineering-Catalog-Drawings.pdf" : undefined}
                    target={activeTab.ctaHref.endsWith(".pdf") ? "_blank" : undefined}
                    rel={activeTab.ctaHref.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#0E96E1] hover:bg-[#0C82C4] px-4 py-2.5 rounded-lg shadow-sm transition-colors"
                  >
                    <span>{activeTab.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
