"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Phone,
  FileText,
  Factory,
  Compass,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const TRUST_METRICS = [
  {
    icon: Factory,
    title: "PCI Certified Plant",
    subtitle: "125,000 Sq. Ft. Casting Bays",
  },
  {
    icon: Award,
    title: "Heavy Civil & DOT",
    subtitle: "Box Culverts, Basins & Bridges",
  },
  {
    icon: ShieldCheck,
    title: "50-State PE Licensed",
    subtitle: "PE & SE Stamped Calculations",
  },
  {
    icon: CheckCircle2,
    title: "Tekla LOD 400 BIM",
    subtitle: "Clash-Free Production Detailing",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Precast Engineers Flagship Hero"
      className="relative w-full bg-white overflow-hidden border-b border-[#DCE5F0]"
    >
      {/* 
        DAYLIGHT PRECAST BRIDGE & HEAVY CIVIL INFRASTRUCTURE BACKGROUND
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bridge.jpg"
          alt="Precast concrete highway bridge viaduct and civil infrastructure"
          fill
          priority
          className="object-cover object-center lg:object-right brightness-[1.02] contrast-[1.03]"
        />
        {/* Crisp White Daylight Wash Gradient: guarantees 100% crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 section-container-wide pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#01255F] uppercase font-mono">
              Dual Division Capability
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="hidden sm:inline-block text-[11px] font-extrabold text-[#D7030F] bg-white px-2 py-0.5 rounded border border-red-200 uppercase">
              Plant Manufacturing &amp; Structural Engineering
            </span>
          </div>

          {/* High-Impact Headline in Bold USA Navy & USA Red */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] uppercase mb-4 text-[#01255F]">
            Precast{" "}
            <span className="text-[#D7030F]">
              Manufacturing
            </span>
            <br />
            <span className="text-[#01255F]">
              &amp; Structural Engineering
            </span>
          </h1>

          {/* Accent Line */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-1 bg-[#D7030F] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#01255F] uppercase">
              Plant Casting Beds · DOT Products · 50-State PE Calcs · Tekla 3D BIM
            </span>
          </div>

          {/* Clear Supporting Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#1E293B] leading-relaxed font-medium max-w-2xl mb-8">
            Two integrated divisions delivering precision concrete solutions: direct high-capacity plant manufacturing for heavy civil infrastructure, coupled with 50-state licensed structural engineering and Tekla LOD 400 BIM modeling.
          </p>

          {/* Action CTAs in USA Red & Navy */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            {/* Primary Division 1 Button (Manufacturing) */}
            <Link
              href="/#manufacturing"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <Factory className="w-4 h-4" />
              <span>Division 01: Manufacturing Plant</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Division 2 Button (Engineering) */}
            <Link
              href="/#engineering"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-[#01255F] hover:bg-[#06182E] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D7030F]" />
              <span>Division 02: Engineering &amp; BIM</span>
              <ArrowRight className="w-4 h-4 text-[#D7030F]" />
            </Link>

            {/* Direct Email / Takeoff Inquiry */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#01255F] hover:text-[#D7030F] px-3 py-2 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#FFF2F2] border border-red-200 flex items-center justify-center text-[#D7030F]">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <span>
                Fast Takeoff Desk: <strong className="text-[#01255F] font-mono">Submit Drawings</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 
        Bottom Trust Strip:
        Clean white surface with crisp borders and USA Navy/Red icons
      */}
      <div className="relative z-20 bg-white/95 backdrop-blur-md border-t border-[#DCE5F0] shadow-xs">
        <div className="section-container-wide py-4 sm:py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {TRUST_METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx > 0 ? "pt-3 sm:pt-0 sm:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8F3FF] border border-[#DCE5F0] flex items-center justify-center shrink-0 text-[#01255F]">
                    <Icon className="w-5 h-5 text-[#D7030F]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#01255F] leading-tight">
                      {metric.title}
                    </h3>
                    <p className="text-[11px] text-[#64748B] leading-tight mt-0.5 font-medium">
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
