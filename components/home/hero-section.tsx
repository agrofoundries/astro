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
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const TRUST_METRICS = [
  {
    icon: ShieldCheck,
    title: "50-State PE Licensed",
    subtitle: "PE & SE Stamped Calculations",
  },
  {
    icon: Award,
    title: "DOT Infrastructure",
    subtitle: "Maine & NH DOT Standards",
  },
  {
    icon: CheckCircle2,
    title: "Tekla LOD 400 BIM",
    subtitle: "Clash-Free Production Detailing",
  },
  {
    icon: Clock,
    title: "Fast Takeoff Desk",
    subtitle: "Direct Engineering Submittal",
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
          alt="Precast Engineers - Modern precast concrete highway bridge viaduct and civil infrastructure"
          fill
          priority
          className="object-cover object-center lg:object-right brightness-[1.02] contrast-[1.03]"
        />
        {/* Crisp White Daylight Wash Gradient: guarantees 100% crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 section-container-wide pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#01255F] uppercase font-mono">
              Precast Engineers · Empowering Precasters
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="hidden sm:inline-block text-[11px] font-extrabold text-[#D7030F] bg-white px-2 py-0.5 rounded border border-red-200 uppercase">
              Civil Infrastructure
            </span>
          </div>

          {/* High-Impact Headline in Bold USA Navy & USA Red */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] uppercase mb-4 text-[#01255F]">
            Precision{" "}
            <span className="text-[#D7030F]">
              Precast Infrastructure
            </span>
            <br />
            <span className="text-[#01255F]">
              &amp; Civil Engineering
            </span>
          </h1>

          {/* Accent Line */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-1 bg-[#D7030F] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#01255F] uppercase">
              Heavy Civil · DOT Drainage · 3D BIM Detailing · PE Stamping
            </span>
          </div>

          {/* Clear Supporting Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#1E293B] leading-relaxed font-medium max-w-2xl mb-8">
            Empowering precast producers, civil contractors, and DOT agencies nationwide with licensed PE calculations, Tekla 3D BIM shop drawings, and precision drainage products.
          </p>

          {/* Action CTAs in USA Red & Navy */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            {/* Primary USA Red Button */}
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Explore Products &amp; Basins</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary USA Navy Button */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#01255F] hover:bg-[#06182E] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request Takeoff</span>
              <ArrowRight className="w-4 h-4 text-[#D7030F]" />
            </Link>

            {/* Direct Email Inquiry */}
            <a
              href={`mailto:${COMPANY.inquiriesEmail}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#01255F] hover:text-[#D7030F] px-3 py-2 rounded-md transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#FFF2F2] border border-red-200 flex items-center justify-center text-[#D7030F]">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <span>
                RFQ Submittals: <strong className="text-[#01255F] font-mono">{COMPANY.inquiriesEmail}</strong>
              </span>
            </a>
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
