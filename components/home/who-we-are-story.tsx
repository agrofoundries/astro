"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  MapPin,
  Clock,
  HardHat,
  FileCheck2,
} from "lucide-react";

const MILESTONES = [
  {
    value: "5,000+",
    unit: "PSI",
    label: "Compressive Strength",
    spec: "ASTM C39 28-Day Strength",
  },
  {
    value: "HS20-44",
    unit: "AASHTO",
    label: "Highway Traffic Rated",
    spec: "Suffolk & Nassau Approved",
  },
  {
    value: "LOD 400",
    unit: "TEKLA 3D",
    label: "Fabrication Detailing",
    spec: "Licensed PE Stamped Submittals",
  },
  {
    value: "100%",
    unit: "DOMESTIC",
    label: "Direct Plant Fleet",
    spec: "Deer Park, Long Island Facility",
  },
];

const MISSION_PILLARS = [
  {
    title: "Dense Structural Concrete Formulations",
    description:
      "Every mix is batched with high-durability Type II/V Portland cement, low water-to-cement ratios, and ASTM A1064 steel reinforcement positioned with calibrated 1.5-inch clear cover.",
  },
  {
    title: "Synchronized Rigging & Crane Delivery",
    description:
      "We coordinate casting schedules, curing cycles, and specialized flatbed transport directly with contractor crane critical paths to eliminate jobsite downtime.",
  },
  {
    title: "Transparent Precast Takeoffs & Submittals",
    description:
      "Itemized unit pricing, guaranteed lead times, and comprehensive PE-stamped engineering calculations provided before initial casting commences.",
  },
];

const VISION_PILLARS = [
  {
    title: "Zero-Clash 3D BIM & Tekla Coordination",
    description:
      "Integrating heavy civil precast fabrication with Tekla 3D modeling to verify knockout dimensions, invert elevations, and embed locations prior to pour.",
  },
  {
    title: "Century-Scale Environmental Durability",
    description:
      "Precast components engineered to resist aggressive subterranean water tables, chloride exposure, and repeated heavy highway axle loadings for decades.",
  },
  {
    title: "Turnkey Civil Precast Partnership",
    description:
      "Partnering with general contractors and municipalities from initial agency approvals through crane hook delivery and verified quality documentation.",
  },
];

export function WhoWeAreStory() {
  return (
    <section id="story" className="w-full bg-white border-b border-[#DCE5F0]">
      {/* ======================================================== */}
      {/* CHAPTER 1: WHO WE ARE (THE LONG ISLAND PRECAST STORY)    */}
      {/* ======================================================== */}
      <div className="section-container-wide py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Visual Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014088] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0E96E1]" />
              <span>WHO WE ARE · ASTRO PRECAST ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] tracking-wide leading-[1.2] uppercase">
              Direct Precast Casting &amp; Structural Engineering{" "}
              <span className="text-[#0E96E1]">Under One Roof</span>
            </h2>

            <div className="space-y-4 text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                Operating from our dedicated manufacturing complex in Deer Park, New York, Astro Precast Engineering provides integrated heavy civil precast fabrication and in-house structural engineering. We work directly with general contractors, civil engineers, and municipalities across New York and the Tri-State area to deliver robust subterranean infrastructure built to exceed specification.
              </p>
              <p>
                From DOT-compliant stormwater catch basins and monolithic watertight septic tanks to AASHTO HS20-44 highway traffic slabs, our production floor combines automated precision batching with heavy-duty steel formwork. Every precast component is cast with minimum 5,000+ PSI compressive strength, reinforced with ASTM-specified steel cages, and tested to verify durability in demanding subsurface environments.
              </p>
            </div>

            {/* Milestones Strip with Stagger Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 reveal-stagger">
              {MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal-child bg-[#F0F6FC] border-2 border-[#BCD7F5] rounded-xl p-3.5 flex flex-col justify-between hover:border-[#0E96E1] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md cursor-default group"
                >
                  <div>
                    <div className="flex items-baseline gap-1 text-[#014088] group-hover:text-[#0E96E1] transition-colors">
                      <span className="text-2xl sm:text-3xl font-black font-mono">
                        {item.value}
                      </span>
                      <span className="text-xs font-black text-[#0E96E1] font-mono">
                        {item.unit}
                      </span>
                    </div>
                    <div className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug mt-1">
                      {item.label}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-800 font-mono font-bold mt-2 pt-2 border-t border-slate-300">
                    {item.spec}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image & Plant Proof Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE5F0] shadow-xl aspect-[4/3] bg-slate-900 group">
              <Image
                src="/images/hero-clean-yard.jpg"
                alt="Astro precast concrete casting floor in Deer Park, NY"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#014088]/90 via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0E96E1] text-[10px] font-mono font-black uppercase tracking-wider mb-1.5 shadow-xs">
                  <MapPin className="w-3 h-3" />
                  <span>DEER PARK, NY PLANT YARD</span>
                </div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight">
                  High-Capacity Precast Casting Beds &amp; Crane Rigging
                </h3>
              </div>
            </div>

            {/* Quick Proof Strip */}
            <div className="mt-4 p-4 rounded-xl bg-[#F0F6FC] border border-[#DCE5F0] flex items-center justify-between gap-4 shadow-sm hover:border-[#014088] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#014088] text-white flex items-center justify-center shrink-0">
                  <HardHat className="w-5 h-5 text-[#0E96E1]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#014088] uppercase">
                    Suffolk &amp; Nassau Approved
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono">
                    Certified for Municipal DPW &amp; Civil Contracts
                  </div>
                </div>
              </div>
              <Link
                href="/#contact"
                className="px-3.5 py-2 rounded-lg bg-[#014088] hover:bg-[#024B9E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow active:scale-95 shrink-0"
              >
                Request Specs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* CHAPTER 2: OUR MISSION & OUR VISION (ARCHITECTURAL STORY) */}
      {/* ======================================================== */}
      <div className="w-full bg-[#F4F8FD] border-t border-b border-[#DCE5F0] py-12 sm:py-16">
        <div className="section-container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 reveal-init">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE5F0] text-[#0E96E1] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>FOUNDATION &amp; PURPOSE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] uppercase tracking-wide leading-[1.25]">
              Our Mission &amp; <span className="text-[#0E96E1]">Our Vision</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 mt-2.5 font-medium leading-relaxed">
              Committed to structural reliability, certified concrete quality, and virtual design precision across every precast installation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-stagger">
            {/* Mission Card */}
            <div className="reveal-child bg-white border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-[#0E96E1] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-black text-[#0E96E1] tracking-wider uppercase">
                    CHAPTER 01 · PURPOSE
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#014088] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0E96E1]" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#014088] uppercase tracking-tight mb-3">
                  Our Mission
                </h3>

                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium mb-6">
                  To engineer, manufacture, and deliver precision precast concrete infrastructure that withstands severe roadway traffic loading, groundwater hydrostatic pressure, and aggressive coastal subsoils for generations.
                </p>

                <div className="space-y-3.5">
                  {MISSION_PILLARS.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#014088] uppercase">
                          {p.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed mt-0.5 font-normal">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#014088]">
                <span className="font-bold">STANDARD: ASTM C39 &amp; AASHTO HS-20</span>
                <span className="text-[#0E96E1] font-bold">100% QUALITY CONTROLLED</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="reveal-child bg-white border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-[#014088] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-black text-[#014088] tracking-wider uppercase">
                    CHAPTER 02 · FUTURE
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#014088] flex items-center justify-center">
                    <Compass className="w-5 h-5 text-[#0E96E1]" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#014088] uppercase tracking-tight mb-3">
                  Our Vision
                </h3>

                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium mb-6">
                  To advance civil infrastructure through the seamless combination of heavy industrial precast production with Tekla LOD 400 3D CAD modeling, ensuring zero-clash field installation and dependable lifecycle performance.
                </p>

                <div className="space-y-3.5">
                  {VISION_PILLARS.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-4 h-4 text-[#014088] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#014088] uppercase">
                          {p.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed mt-0.5 font-normal">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#014088]">
                <span className="font-bold">ENGINEERING: TEKLA LOD 400 CAD</span>
                <span className="text-[#014088] font-bold">ZERO FIELD CORING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* CHAPTER 3: WHAT WE DO (THE 2 DUAL PILLARS)               */}
      {/* ======================================================== */}
      <div id="what-we-do" className="section-container-wide pt-10 pb-8 sm:pt-12 sm:pb-10 border-b border-[#DCE5F0]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0E96E1] uppercase tracking-widest mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] uppercase tracking-wide leading-[1.25]">
              What We Do: <span className="text-[#0E96E1]">Manufacturing &amp; Engineering</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 mt-2 font-medium leading-relaxed max-w-2xl">
              Two integrated divisions operating in complete harmony to deliver civil infrastructure on time and on spec.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-mono text-xs font-bold text-[#014088] bg-[#F0F6FC] border border-[#BCD7F5] px-3.5 py-2 rounded-lg shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#014088]" />
            <span>DEER PARK, NY MANUFACTURING FACILITY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-stagger">
          {/* Pillar 1: Precast Manufacturing */}
          <div className="reveal-child bg-white border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-[#0E96E1] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0E96E1]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0E96E1] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span>PILLAR 01</span>
                  <span>·</span>
                  <span>PLANT CASTING &amp; FABRICATION</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0E96E1] flex items-center justify-center group-hover:bg-[#0E96E1] group-hover:text-white transition-colors">
                  <Factory className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#014088] uppercase tracking-tight mb-2">
                Precast Concrete Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed mb-6 font-medium">
                High-capacity climate-controlled casting beds, computerized twin-shaft planetary batching, and turnkey fabrication of heavy civil, utility, and highway infrastructure.
              </p>

              <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100 text-xs text-slate-900 font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span><strong>Stormwater Drainage:</strong> Certified Catch Basins (12&quot;×12&quot; to 84&quot;×84&quot;, Model AR 3048 CB) &amp; Leaching Galleys</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span><strong>Sanitary Wastewater:</strong> Watertight Monolithic Septic Tanks &amp; Grease Interceptors (1,000 to 2,500 Gal)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span><strong>Structural Slabs &amp; Rings:</strong> AASHTO HS20-44 Traffic Slabs (6&apos; to 12&apos;), Solid Rings &amp; D-Boxes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span><strong>Engineering Standard:</strong> 5,000+ PSI Concrete, WWF ASTM A1064 mesh in 6&quot; wall, Suffolk &amp; Nassau Approved</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Browse Products Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F4F8FD] hover:bg-[#E8F3FF] border border-[#DCE5F0] text-[#014088] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95"
              >
                <span>Download CAD Drawings</span>
              </a>
            </div>
          </div>

          {/* Pillar 2: Structural Engineering & Detailing */}
          <div className="reveal-child bg-white border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-[#014088] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#014088]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#014088] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span>PILLAR 02</span>
                  <span>·</span>
                  <span>LICENSED PE CONSULTING &amp; 3D CAD</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#014088] flex items-center justify-center group-hover:bg-[#014088] group-hover:text-white transition-colors">
                  <Compass className="w-5 h-5 text-[#0E96E1] group-hover:text-white" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#014088] uppercase tracking-tight mb-2">
                Structural Engineering &amp; 3D Detailing
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed mb-6 font-medium">
                In-house licensed structural engineers providing certified calculations, connection engineering, Tekla LOD 400 fabrication models, and job site crane sequencing.
              </p>

              <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100 text-xs text-slate-900 font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#014088] shrink-0 mt-0.5" />
                  <span><strong>Stamped Calculations:</strong> Licensed PE/SE in New York, New Jersey, and Connecticut for municipal approvals</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#014088] shrink-0 mt-0.5" />
                  <span><strong>Tekla LOD 400 Detailing:</strong> Complete precast fabrication drawings with exact rebar bend schedules &amp; embeds</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#014088] shrink-0 mt-0.5" />
                  <span><strong>Custom Connection Engineering:</strong> Field-tested seismic and heavy wind shear connection designs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#014088] shrink-0 mt-0.5" />
                  <span><strong>Erection Sequencing:</strong> Coordinated crane rigging analysis to guarantee safe and fast field placement</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <Link
                href="/#engineering"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#014088] hover:bg-[#024B9E] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Engineering Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F4F8FD] hover:bg-[#E8F3FF] border border-[#DCE5F0] text-[#014088] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95"
              >
                <span>Consult Our PE Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
