"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Search,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "ISO 9001:2015 certified delivery process",
  "PCI MNL-120 certified precast detailing",
  "Average response time under 2 working hours",
  "In-house Tekla LOD 400 BIM modeling",
  "50-State PE stamped structural calculations",
  "AASHTO bridge & DOT submittals approved",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DCE5F0] shadow-sm">
      {/* ======================================================== */}
      {/* Top Utility Strip (Full Width Edge-to-Edge)              */}
      {/* ======================================================== */}
      <div className="bg-[#030F21] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-9">
          {/* Left Direct Contacts */}
          <div className="flex items-center gap-5 shrink-0">
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#D7030F]" />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3 h-3 text-[#D7030F]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Center Continuous Marquee Strip */}
          <div className="relative min-w-0 flex-1 overflow-hidden mx-6">
            <div className="flex w-max items-center gap-8 animate-marquee">
              {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
                <span
                  key={idx}
                  className="flex shrink-0 items-center gap-2 font-mono text-[10px] tracking-wider text-slate-300 uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7030F]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Status / Flag */}
          <div className="flex items-center gap-4 shrink-0 font-mono text-[10px] text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>50-STATE PE LICENSED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Main Navigation Bar (Substantially Bigger, Bold, High-Impact) */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* Main Navigation Bar (Clean, Sleek, Single-Line)          */}
      {/* ======================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="flex items-center justify-between h-20 lg:h-22 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 shrink-0" aria-label="Precast Engineers">
            <Image
              src="/logo.png"
              alt="Precast Engineers - Empowering Precasters"
              width={240}
              height={60}
              className="h-11 sm:h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Items (Clean Single-Line Font, Crisp Hover) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-2 py-1 text-sm font-bold text-[#01255F] hover:text-[#D7030F] transition-colors relative group tracking-normal whitespace-nowrap"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D7030F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct RFP CTA Button (Sleek & Proportional) */}
            <Link
              href="/#contact"
              className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold uppercase tracking-wider transition-all duration-300 bg-[#D7030F] text-white shadow-md shadow-red-600/30 hover:bg-[#B31217] hover:shadow-lg h-10 px-5 sm:px-6 text-xs gap-2 select-none whitespace-nowrap"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
              <span className="relative">REQUEST TAKEOFF</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#01255F] hover:bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-6 py-4 space-y-2 animate-in fade-in duration-200">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-semibold text-[#01255F] hover:bg-[#F2F7FF] hover:text-[#D7030F] rounded-lg border-b border-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full text-center text-xs py-3 rounded-full flex items-center justify-center gap-2"
            >
              <span>Request Precast Takeoff</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
