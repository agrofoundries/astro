"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const SERVICES_LINKS = [
  { label: "Precast Catch Basins", href: "/#products" },
  { label: "Multi-Component Pump Stations", href: "/#products" },
  { label: "Maine DOT Leaching Galleys", href: "/#products" },
  { label: "NH DOT Concrete Headwalls", href: "/#products" },
  { label: "Commercial Grease Traps", href: "/#products" },
  { label: "Monolithic Septic Tanks", href: "/#products" },
];

const SOLUTIONS_LINKS = [
  { label: "Licensed PE & SE Calculations", href: "/#services" },
  { label: "Tekla 3D BIM Detailing", href: "/#services" },
  { label: "Precast Connection Design", href: "/#services" },
  { label: "Lifting & Rigging Engineering", href: "/#services" },
  { label: "Rebar & Reinforcement Schedules", href: "/#services" },
  { label: "Fast Material Quotes", href: "/#contact" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About Precast Engineers", href: "/#company-intro" },
  { label: "Products & Basins", href: "/#products" },
  { label: "Engineering Services", href: "/#services" },
  { label: "Regional Offices", href: "/#locations" },
  { label: "Technical Blog", href: "/#blog" },
  { label: "Contact & Quotes", href: "/#contact" },
];

const INDUSTRIES_PILLS = [
  "Highway & DOT Projects",
  "Stormwater Drainage",
  "Civil Infrastructure",
  "Commercial Sites",
  "Subsurface Infiltration",
  "Precast Fabrication Plants",
];

const LATEST_INSIGHTS = [
  {
    title: "State DOT Stormwater Criteria for Traffic-Rated Catch Basins",
    tag: "STORMWATER",
    date: "OCT 2026",
    href: "/#blog",
  },
  {
    title: "Subsurface Stormwater Retention: Maine DOT Leaching Galleys",
    tag: "DOT SPECIFICATION",
    date: "SEP 2026",
    href: "/#blog",
  },
  {
    title: "Tekla 3D BIM in Precast: Eliminating Casting Bed Clashes",
    tag: "3D BIM",
    date: "SEP 2026",
    href: "/#blog",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#032356] text-white border-t-4 border-[#D4030C] relative" role="contentinfo">
      {/* Main Footer Container */}
      <div className="section-container-wide py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Column 1: Brand & Contact Info (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* White Logo Emblem Card */}
            <div className="inline-block bg-white px-4 py-2.5 rounded-lg shadow-sm border border-slate-200">
              <Link href="/" aria-label="PRECAST PRO Home">
                <Image
                  src="/logo.png"
                  alt="PRECAST PRO - Empowering Precasters"
                  width={210}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              From engineering to digital, design to deployment — Precast Engineering Group brings every precast solution under one roof to turn ideas into real-world impact.
            </p>

            {/* Contact Details with Theme Icon Badges */}
            <div className="space-y-3 text-xs text-slate-200 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <span>105 Maxess Road, Melville, NY 11747</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-red-400 transition-colors font-medium"
                >
                  (631) 452-1111
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <a
                  href="mailto:info@precasteng.com"
                  className="hover:text-red-400 transition-colors"
                >
                  info@precasteng.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <span>Mon – Fri : 8:00 AM to 6:00 PM ET</span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-3">
              <span className="block text-[11px] font-bold tracking-wider uppercase text-slate-300 mb-2.5">
                FOLLOW US
              </span>
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Services, Solutions, Company & Industries (span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* 3 Link Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Manufacturing Division */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4030C] mb-4">
                  MANUFACTURING
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {SERVICES_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Division */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  ENGINEERING &amp; BIM
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {SOLUTIONS_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  COMPANY
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {COMPANY_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industries Sub-section with Pill Badges */}
            <div className="border-t border-slate-700/60 pt-6 mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                INDUSTRIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES_PILLS.map((pill) => (
                  <Link
                    key={pill}
                    href="/applications"
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#D4030C] border border-white/20 hover:border-[#D4030C] text-[11px] font-medium text-slate-200 hover:text-white transition-all"
                  >
                    {pill}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Stay Informed & Latest Insights (span 3) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stay Informed */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                STAY INFORMED
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Engineering notes, technology breakdowns and project insights. One email a month, no filler.
              </p>

              {/* Newsletter Subscription Input */}
              {subscribed ? (
                <div className="flex items-center gap-2 bg-emerald-900/60 border border-emerald-500 rounded-full px-4 py-2 text-xs font-semibold text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex items-center bg-white rounded-full p-1 pl-4 shadow-md">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs text-[#032356] placeholder-slate-400 focus:outline-none bg-transparent pr-2 font-medium"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="w-8 h-8 rounded-full bg-[#D4030C] hover:bg-[#B50209] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Latest Insights */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                LATEST INSIGHTS
              </h4>
              <div className="space-y-4">
                {LATEST_INSIGHTS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <Link
                      href={item.href}
                      className="text-xs font-semibold text-slate-200 hover:text-white transition-colors line-clamp-2 leading-snug block"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded font-bold tracking-wider text-slate-200">
                        {item.tag}
                      </span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Compliance & Legal Bar */}
      <div className="border-t border-slate-700/60 bg-[#032356] py-5 text-xs text-slate-400">
        <div className="section-container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Precast Engineering Group. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              Standard Specifications
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Floating Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#D4030C] hover:bg-[#B50209] text-white shadow-xl border border-white/20 flex items-center justify-center transition-all group"
      >
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}
