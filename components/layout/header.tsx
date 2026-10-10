"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight, MapPin, Clock, Mail, ShieldCheck } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        isScrolled ? "shadow-md border-b border-slate-200" : "border-b border-slate-200"
      }`}
    >
      {/* ThemeForest Construction Top Utility Bar - Exact USA Navy & Red from Logo */}
      <div className="w-full bg-[#06182E] text-slate-300 text-xs py-2.5 border-b border-slate-800">
        <div className="section-container-wide flex items-center justify-between">
          {/* Plant Location & Operating Hours */}
          <div className="flex items-center gap-5">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
              <span>{COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state}</span>
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#D71920]" />
              <span>{COMPANY.hours}</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D71920]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Plant Certification & Direct Estimating Desk */}
          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D71920]" />
              <span>PCI Professional Member • PE Licensed 48 States</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-red-400 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Call Us: <strong className="text-white">{COMPANY.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="section-container-wide">
        <div className="flex items-center justify-between h-20 lg:h-22">
          {/* Logo with Precast Engineers Brand Image */}
          <Link
            href="/"
            className="flex-shrink-0 relative py-2 flex items-center gap-3"
            aria-label="PRECAST ENGINEERS Home"
          >
            <Image
              src="/images/logo.png"
              alt="PRECAST ENGINEERS - Empowering Precasters...."
              width={240}
              height={65}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#D71920] hover:bg-slate-50 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden md:inline-flex btn-construction px-6 py-3 rounded text-xs font-black tracking-wider uppercase transition-all shadow-md hover:shadow-lg items-center gap-2"
              id="header-quote-cta"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#0B2545] hover:bg-slate-100 border border-slate-200 rounded"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-auto bg-white border-b-2 border-slate-200 shadow-2xl z-50 p-6 space-y-4"
        >
          <div className="text-xs text-slate-500 font-semibold pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>Plant Yard: Houston, TX</span>
            <span className="text-[#D71920] font-bold">{COMPANY.phone}</span>
          </div>
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#D71920] hover:bg-slate-50 rounded border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="/quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-construction w-full justify-center py-3.5 rounded text-sm font-black flex items-center gap-2"
            >
              <span>Submit Drawings for Takeoff</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
