"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Factory,
  Compass,
  Building2,
  ShieldCheck,
  MapPin,
  Download,
  Clock,
  FileText,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

// Clean Industrial Company Navigation
const COMPANY_PAGES = [
  {
    title: "About Astro Precast",
    href: "/about",
    desc: "Long Island manufacturing heritage & craftsmanship",
    icon: Building2,
  },
  {
    title: "Plant & Production Facilities",
    href: "/capabilities",
    desc: "Deer Park high-capacity casting yard & batching",
    icon: Factory,
  },
  {
    title: "Structural Engineering & Detailing",
    href: "/#engineering",
    desc: "Licensed PE stamped calculations & Tekla LOD 400",
    icon: Compass,
  },
  {
    title: "Quality Control & Testing",
    href: "/#story",
    desc: "5,000+ PSI concrete & ASTM C39 compliance",
    icon: ShieldCheck,
  },
  {
    title: "Featured Projects",
    href: "/projects",
    desc: "Certified NY & Tri-State civil installations",
    icon: MapPin,
  },
];

// Clean 3-Category Product Matrix
const PRODUCT_CATEGORIES = [
  {
    category: "Stormwater & Drainage",
    items: [
      { name: "Catch Basins (AR 3048 CB)", href: "/#products" },
      { name: "Precast Leaching Galleys", href: "/#products" },
      { name: "Low Domes & High Domes", href: "/#products" },
      { name: "Commercial Curb Stops", href: "/#products" },
    ],
  },
  {
    category: "Tanks & Wastewater",
    items: [
      { name: "Monolithic Septic Tanks", href: "/#products" },
      { name: "Commercial Grease Interceptors", href: "/#products" },
      { name: "Septic Distribution Boxes", href: "/#products" },
      { name: "Pump Stations & Basins", href: "/#products" },
    ],
  },
  {
    category: "Slabs, Rings & Covers",
    items: [
      { name: "AASHTO HS20-44 Traffic Slabs", href: "/#products" },
      { name: "Solid Precast Utility Rings", href: "/#products" },
      { name: "Sanitary Leaching Rings", href: "/#products" },
      { name: "Footing Rings & Collars", href: "/#products" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"company" | "products" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: "company" | "products") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-[#CBD5E1]"
          : "bg-white border-b border-[#E2E8F0] shadow-xs"
      }`}
    >
      {/* ======================================================== */}
      {/* 1. PROFESSIONAL INDUSTRIAL TOP UTILITY STRIP             */}
      {/* Clean, calm, authoritative — no frantic tickers          */}
      {/* ======================================================== */}
      <div className="bg-[#014088] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="section-container-wide flex items-center justify-between h-9 px-4 sm:px-6 lg:px-8">
          {/* Left Plant Coordinates & Direct Phone */}
          <div className="flex items-center gap-6 text-[11.5px] font-medium text-slate-200">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>Plant: Deer Park, Long Island, NY</span>
            </div>
            <span className="h-3 w-px bg-white/20" />
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>(631) 667-3300</span>
            </a>
            <span className="h-3 w-px bg-white/20 hidden lg:inline" />
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Right Standards & Hours */}
          <div className="flex items-center gap-5 text-[11px] font-medium text-slate-300">
            <span className="hidden xl:inline text-sky-200 font-mono">
              AASHTO HS20-44 &bull; 5,000+ PSI &bull; Suffolk &amp; Nassau Approved
            </span>
            <span className="h-3 w-px bg-white/20 hidden xl:inline" />
            <div className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3 h-3 text-[#0E96E1]" />
              <span>Mon&ndash;Fri 7:00 AM &ndash; 5:00 PM EST</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN NAVIGATION BAR (CLEAN, NEAT, PROFESSIONAL)       */}
      {/* ======================================================== */}
      <div className="section-container-wide px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            scrolled ? "h-16 lg:h-18" : "h-18 lg:h-20"
          } gap-6`}
        >
          {/* Logo (Clean, Authoritative Standalone) */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="Astro Masonry & Precast Homepage"
          >
            <div className="relative h-12 sm:h-14 lg:h-16 w-24 sm:w-28 lg:w-32 shrink-0 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="/Astro Geometric Mark Logo.png"
                alt="Astro Masonry & Precast Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 100px, 140px"
              />
            </div>
          </Link>

          {/* Desktop Nav Items (Clean 15px Industrial Typography) */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 h-full"
            aria-label="Primary navigation"
          >
            {/* 1. Home */}
            <Link
              href="/"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#014088] hover:text-[#0E96E1] transition-colors whitespace-nowrap tracking-tight"
            >
              Home
            </Link>

            {/* 2. Company Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
                className={`flex items-center gap-1 text-[14.5px] xl:text-[15.5px] font-bold transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "company"
                    ? "text-[#0E96E1]"
                    : "text-[#014088] hover:text-[#0E96E1]"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "company"
                      ? "rotate-180 text-[#0E96E1]"
                      : "text-slate-400 group-hover:text-[#0E96E1]"
                  }`}
                />
              </button>
            </div>

            {/* 3. Products Dropdown */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
                className={`flex items-center gap-1 text-[14.5px] xl:text-[15.5px] font-bold transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "products"
                    ? "text-[#0E96E1]"
                    : "text-[#014088] hover:text-[#0E96E1]"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "products"
                      ? "rotate-180 text-[#0E96E1]"
                      : "text-slate-400 group-hover:text-[#0E96E1]"
                  }`}
                />
              </button>
            </div>

            {/* 4. Engineering */}
            <Link
              href="/#engineering"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#014088] hover:text-[#0E96E1] transition-colors whitespace-nowrap tracking-tight"
            >
              Engineering
            </Link>

            {/* 5. Live Mockup */}
            <Link
              href="/mockup"
              className="inline-flex items-center gap-1.5 text-[14.5px] xl:text-[15.5px] font-bold text-[#014088] hover:text-[#0E96E1] transition-colors whitespace-nowrap tracking-tight"
            >
              <span>Live Mockup</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-[#0E96E1] text-white tracking-wider">
                DEMO
              </span>
            </Link>

            {/* 6. Projects */}
            <Link
              href="/projects"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#014088] hover:text-[#0E96E1] transition-colors whitespace-nowrap tracking-tight"
            >
              Projects
            </Link>

            {/* 6. Contact */}
            <Link
              href="/#contact"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#014088] hover:text-[#0E96E1] transition-colors whitespace-nowrap tracking-tight"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTAs (Neat, Crisp Industrial Buttons) */}
          <div className="flex items-center gap-3">
            {/* Secondary: CAD Drawings PDF */}
            <a
              href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
              download="Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg font-bold tracking-tight transition-all duration-200 border border-[#014088] text-[#014088] hover:bg-[#014088] hover:text-white h-9.5 px-3.5 text-xs gap-1.5 whitespace-nowrap shadow-2xs active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>Drawings (PDF)</span>
            </a>

            {/* Primary: Request a Quote */}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg font-bold tracking-tight transition-all duration-200 bg-[#014088] hover:bg-[#024B9E] text-white h-9.5 px-4 sm:px-5 text-xs gap-1.5 whitespace-nowrap shadow-sm active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0E96E1]" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#014088] hover:bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg cursor-pointer ml-1"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FULL-WIDTH PRODUCTS MEGA MENU (EXPANSIVE & CLEAN)     */}
      {/* ======================================================== */}
      {activeMenu === "products" && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b-2 border-[#CBD5E1] shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-container-wide py-7 px-4 sm:px-6 lg:px-8">
            {/* Top Specification Header */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0E96E1]" />
                <span className="text-xs font-bold text-[#014088] uppercase tracking-wider font-mono">
                  Astro 2026 Precast Product Catalog
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  &bull; 5,000+ PSI &bull; AASHTO HS20-44 Traffic Rated
                </span>
              </div>
              <a
                href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                download="Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0E96E1] hover:text-[#0C82C4] flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download All 140+ CAD Drawings (PDF)</span>
              </a>
            </div>

            {/* 4 Clean Columns: 3 Categories + 1 Spotlight Card */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
              {PRODUCT_CATEGORIES.map((col, idx) => (
                <div
                  key={idx}
                  className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="pb-2 border-b border-slate-200">
                      <h4 className="text-xs font-black tracking-wider text-[#014088] uppercase font-mono">
                        {col.category}
                      </h4>
                    </div>

                    <ul className="space-y-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white hover:shadow-2xs transition-all text-[#014088] hover:text-[#0E96E1]"
                          >
                            <span className="text-[13px] font-semibold leading-snug">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#0E96E1] shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 mt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Stock &amp; Custom Sizes</span>
                    <Link
                      href="/#products"
                      onClick={() => setActiveMenu(null)}
                      className="text-[#0E96E1] font-bold hover:underline"
                    >
                      View Specs &rarr;
                    </Link>
                  </div>
                </div>
              ))}

              {/* Clean Spotlight Card */}
              <div className="col-span-3 bg-[#014088] text-white rounded-xl p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200">
                      Plant Spotlight
                    </span>
                    <span className="text-[10px] font-mono text-slate-300">
                      Deer Park, NY
                    </span>
                  </div>

                  <div className="relative rounded-lg overflow-hidden aspect-[16/9] mb-3 bg-slate-900 border border-white/10">
                    <video
                      src="/videos/solid-round-slab-gang-mold.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <h5 className="text-xs font-bold uppercase tracking-tight text-white mb-1">
                    Solid Round Slab Gang Mold
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                    Precision multi-cavity casting for ASTM traffic lids, curbs, and custom diameter risers.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-2">
                  <a
                    href="tel:6316673300"
                    className="text-xs font-mono font-bold text-sky-300 hover:text-white transition-colors"
                  >
                    (631) 667-3300
                  </a>
                  <Link
                    href="/#products"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-[11px] font-bold uppercase tracking-wider transition-all"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. FULL-WIDTH COMPANY MEGA MENU (EXPANSIVE & CLEAN)      */}
      {/* ======================================================== */}
      {activeMenu === "company" && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b-2 border-[#CBD5E1] shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-container-wide py-7 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0E96E1]" />
                <span className="text-xs font-bold text-[#014088] uppercase tracking-wider font-mono">
                  Company &amp; Facilities Overview
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  &bull; Direct Precast Manufacturer &bull; Deer Park, NY
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Astro Masonry &amp; Precast
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6 items-stretch">
              {/* Col 1: Who We Are */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#014088]">
                    <Building2 className="w-4 h-4 text-[#0E96E1]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Who We Are</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1.5">
                    Direct Precast Manufacturer
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    Enclosed casting yards in Deer Park, NY. Serving Long Island and NY Metro civil contractors with certified heavy precast structures.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/about"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Full Company Story
                  </Link>
                  <Link
                    href="/#story"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Mission &amp; Vision
                  </Link>
                </div>
              </div>

              {/* Col 2: Facilities */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#014088]">
                    <Factory className="w-4 h-4 text-[#0E96E1]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Plant Facilities</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1.5">
                    Deer Park Production Yard
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    Computerized twin-shaft planetary batching, climate-controlled curing bays, and synchronized overhead crane loading.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/capabilities"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Production Capabilities
                  </Link>
                  <Link
                    href="/#locations"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Service Area &amp; Delivery
                  </Link>
                </div>
              </div>

              {/* Col 3: Engineering */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#014088]">
                    <Compass className="w-4 h-4 text-[#0E96E1]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Engineering &amp; QC</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1.5">
                    Licensed PE Stamped &amp; Detailing
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    In-house structural calculations, Tekla LOD 400 digital fabrication modeling, and certified ASTM C39 cylinder testing.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/#engineering"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Engineering Services
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#014088] hover:text-[#0E96E1] py-0.5"
                  >
                    &rarr; Certified Project Portfolio
                  </Link>
                </div>
              </div>

              {/* Col 4: Estimating Desk */}
              <div className="col-span-3 bg-[#014088] text-white rounded-xl p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200 mb-2">
                    Direct Estimating Desk
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-1.5 text-white">
                    Need Plans Stamped or Quoted?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                    Send your project plans and takeoffs directly to our Deer Park plant estimators for same-day engineering turnaround.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <a
                    href="tel:6316673300"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0E96E1]" />
                    <span>(631) 667-3300</span>
                  </a>
                  <Link
                    href="/#contact"
                    onClick={() => setActiveMenu(null)}
                    className="w-full inline-flex items-center justify-center gap-1 py-2 rounded bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Request Official Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. MOBILE DRAWER NAVIGATION                              */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in fade-in duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#014088] hover:text-[#0E96E1] border-b border-slate-100"
          >
            Home
          </Link>

          {/* Company Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-bold tracking-wider text-[#0E96E1] uppercase font-mono block mb-1">
              Company
            </span>
            <div className="space-y-1 pl-2">
              {COMPANY_PAGES.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-medium text-[#014088] hover:text-[#0E96E1]"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-bold tracking-wider text-[#0E96E1] uppercase font-mono block mb-1">
              Products
            </span>
            <div className="space-y-1 pl-2">
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-xs font-bold text-[#0E96E1]"
              >
                &bull; View All Products
              </Link>
              {PRODUCT_CATEGORIES.flatMap((c) => c.items).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-0.5 text-xs text-slate-700 hover:text-[#0E96E1]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#engineering"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#014088] hover:text-[#0E96E1] border-b border-slate-100"
          >
            Engineering
          </Link>

          <Link
            href="/mockup"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-sm font-bold text-[#014088] hover:text-[#0E96E1] border-b border-slate-100"
          >
            <span>Live Mockup (iPad &amp; Mobile)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-[#0E96E1] text-white">
              LIVE
            </span>
          </Link>

          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#014088] hover:text-[#0E96E1] border-b border-slate-100"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#014088] hover:text-[#0E96E1] border-b border-slate-100"
          >
            Contact
          </Link>

          {/* Mobile CTAs */}
          <div className="pt-2 space-y-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs py-2.5 rounded-lg bg-[#014088] text-white font-bold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
              download
              className="w-full text-center text-xs py-2 rounded-lg border border-[#014088] text-[#014088] font-bold flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Drawings (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
