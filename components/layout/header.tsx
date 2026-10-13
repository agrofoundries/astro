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
  Layers,
  Briefcase,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "Direct Precast Concrete Manufacturing Plant",
  "Licensed PE & SE Structural Calculations Available",
  "Climate-Controlled Plant Casting Beds",
  "In-House Tekla LOD 400 3D BIM Detailing Hub",
  "AASHTO Bridge & State DOT Submittals Approved",
  "High-Volume Box Culverts, Basins & Utility Vaults",
];

// All Pages Related to Company (Clean Simple Titles - No Clutter)
const COMPANY_PAGES = [
  {
    title: "About Precast Engineers",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Plant & Casting Facilities",
    href: "/capabilities",
    icon: Factory,
  },
  {
    title: "Structural Engineering & 3D BIM",
    href: "/#services",
    icon: Compass,
  },
  {
    title: "Quality Control & Testing Lab",
    href: "/#quality",
    icon: ShieldCheck,
  },
  {
    title: "Seven Regional Offices",
    href: "/#locations",
    icon: MapPin,
  },
  {
    title: "Industry Applications",
    href: "/applications",
    icon: Layers,
  },
  {
    title: "Featured Projects",
    href: "/projects",
    icon: Briefcase,
  },
];

// Products Mega Menu Data (Clean, Simple English Titles - No Small Text Clutter)
const PRODUCT_CATEGORIES = [
  {
    category: "BRIDGES & CULVERTS",
    items: [
      { name: "Box Culverts", href: "/#products" },
      { name: "Concrete Bridges", href: "/#products" },
      { name: "Wing Walls & Headwalls", href: "/#products" },
      { name: "Retaining Wall Panels", href: "/#products" },
    ],
  },
  {
    category: "DRAINAGE & STORMWATER",
    items: [
      { name: "Catch Basins", href: "/#products" },
      { name: "Curb Inlets", href: "/#products" },
      { name: "Leaching Galleys", href: "/#products" },
      { name: "Trench Drains", href: "/#products" },
    ],
  },
  {
    category: "TANKS & GANG MOLDS",
    items: [
      { name: "Solid Round Slab Gang Mold", href: "/#products" },
      { name: "Utility Vaults", href: "/#products" },
      { name: "Septic Tanks", href: "/#products" },
      { name: "Pump Stations", href: "/#products" },
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
    }, 180);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#CBD5E1]"
          : "bg-white border-b border-[#DCE5F0] shadow-xs"
      }`}
    >
      {/* ======================================================== */}
      {/* Top Utility Strip (Full Width Edge-to-Edge)              */}
      {/* ======================================================== */}
      <div className="bg-[#032356] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-9">
          {/* Left Direct Contacts */}
          <div className="flex items-center gap-5 shrink-0">
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-mono text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#D4030C]" />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3 h-3 text-[#D4030C]" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4030C]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Status / Flag */}
          <div className="flex items-center gap-4 shrink-0 font-mono text-[10px] text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PLANT CASTING &amp; STRUCTURAL PE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Main Navigation Bar (Clean, High-Contrast 18px Font)     */}
      {/* ======================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 bg-white/90">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-18 lg:h-20" : "h-20 lg:h-22"} gap-4`}>
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 shrink-0" aria-label="Precast Engineers">
            <Image
              src="/logo.png"
              alt="Precast Engineers - Empowering Precasters"
              width={240}
              height={60}
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Items (Bigger 17-18px Font Size & Direct Anchored Dropdowns) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 h-full" aria-label="Primary navigation">
            {/* 1. Home */}
            <Link
              href="/"
              className="px-2 py-2 text-[16px] xl:text-[18px] font-black text-[#032356] hover:text-[#D4030C] transition-colors relative group whitespace-nowrap tracking-tight"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4030C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>

            {/* 2. Company (Dropdown directly under this item) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
                className={`flex items-center gap-1 px-2 py-2 text-[16px] xl:text-[18px] font-black transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "company" ? "text-[#D4030C]" : "text-[#032356] hover:text-[#D4030C]"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "company" ? "rotate-180 text-[#D4030C]" : "text-slate-400 group-hover:text-[#D4030C]"
                  }`}
                />
              </button>

              {/* Company Dropdown Menu: Positioned DIRECTLY UNDER "Company" */}
              {activeMenu === "company" && (
                <div
                  className="absolute top-full -left-2 pt-2 w-[340px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl border-2 border-[#DCE5F0] shadow-2xl p-3.5 overflow-hidden">
                    {/* Header Banner */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#D4030C] font-mono">
                        COMPANY PAGES
                      </span>
                      <span className="text-[10px] text-[#64748B] font-bold uppercase">
                        7 Links
                      </span>
                    </div>

                    {/* All Company Pages: Titles Only for Pristine Readability */}
                    <div className="space-y-1">
                      {COMPANY_PAGES.map((page, idx) => {
                        const Icon = page.icon;
                        return (
                          <Link
                            key={idx}
                            href={page.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F2F7FF] transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-7 h-7 rounded-lg bg-[#E8F3FF] border border-[#DCE5F0] text-[#032356] group-hover/item:bg-[#032356] group-hover/item:text-white transition-colors flex items-center justify-center shrink-0">
                                <Icon className="w-3.5 h-3.5 text-[#D4030C] group-hover/item:text-white transition-colors" />
                              </div>
                              <span className="text-sm font-bold text-[#032356] group-hover/item:text-[#D4030C] transition-colors truncate">
                                {page.title}
                              </span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D4030C] shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Products (Good Megamenu: Clean Titles Only for Optimal Eye Comfort) */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
                className={`flex items-center gap-1 px-2 py-2 text-[16px] xl:text-[18px] font-black transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "products" ? "text-[#D4030C]" : "text-[#032356] hover:text-[#D4030C]"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180 text-[#D4030C]" : "text-slate-400 group-hover:text-[#D4030C]"
                  }`}
                />
              </button>

              {/* Products Megamenu: Positioned DIRECTLY UNDER "Products" (Bigger, Expansive & High-Contrast) */}
              {activeMenu === "products" && (
                <div
                  className="absolute top-full -left-64 xl:-left-80 pt-2 w-[880px] xl:w-[980px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-3xl border-2 border-[#DCE5F0] shadow-2xl p-7 xl:p-8 overflow-hidden">
                    <div className="grid grid-cols-12 gap-7 items-stretch">
                      {/* Left 8 Cols: 3 Clean Product Columns with Bigger 15-16px Font */}
                      <div className="col-span-8 grid grid-cols-3 gap-6">
                        {PRODUCT_CATEGORIES.map((col, idx) => (
                          <div key={idx} className="space-y-3">
                            {/* Category Eyebrow (Bigger & Bolder) */}
                            <div className="pb-2 border-b-2 border-slate-100">
                              <span className="text-xs xl:text-[13px] font-black tracking-wider text-[#D4030C] uppercase font-mono block">
                                {col.category}
                              </span>
                            </div>

                            {/* Clean Titles - Bigger 15-16px Font & High Eye Contrast */}
                            <ul className="space-y-1">
                              {col.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="group/item flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F0F5FF] transition-all"
                                  >
                                    <span className="text-[14px] xl:text-[15.5px] font-extrabold text-[#032356] group-hover/item:text-[#D4030C] transition-colors leading-snug">
                                      {item.name}
                                    </span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D4030C] shrink-0" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Right 4 Cols: Bigger Spotlight Card */}
                      <div className="col-span-4 flex flex-col justify-between bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-2xl p-5">
                        <div>
                          <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-3.5 bg-slate-900 border border-slate-200 shadow-xs">
                            <video
                              src="/videos/solid-round-slab-gang-mold.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#D4030C] text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
                              ★ FEATURED PRODUCT
                            </div>
                          </div>

                          <h4 className="text-sm xl:text-base font-black text-[#032356] uppercase tracking-tight mb-1.5">
                            Solid Round Slab Gang Mold
                          </h4>
                          <p className="text-xs text-[#334155] leading-relaxed mb-4 font-medium">
                            Precision multi-cavity steel gang mold for rapid, high-volume casting of precast round slabs and covers.
                          </p>
                        </div>

                        <Link
                          href="/#products"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#D4030C] hover:bg-[#B50209] text-white text-xs sm:text-[13px] font-black uppercase tracking-wider transition-all shadow-md shadow-red-600/25 active:scale-95"
                        >
                          <span>View Product &amp; Video</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Blogs */}
            <Link
              href="/#blog"
              className="px-2 py-2 text-[16px] xl:text-[18px] font-black text-[#032356] hover:text-[#D4030C] transition-colors relative group whitespace-nowrap tracking-tight"
            >
              <span>Blogs</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4030C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/#contact"
              className="px-2 py-2 text-[16px] xl:text-[18px] font-black text-[#032356] hover:text-[#D4030C] transition-colors relative group whitespace-nowrap tracking-tight"
            >
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4030C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct RFP CTA Button */}
            <Link
              href="/#contact"
              className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold uppercase tracking-wider transition-all duration-300 bg-[#D4030C] text-white shadow-md shadow-red-600/30 hover:bg-[#B50209] hover:shadow-lg h-10 px-5 sm:px-6 text-xs gap-2 select-none whitespace-nowrap active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
              <span className="relative">GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#032356] hover:bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE DRAWER WITH ALL PAGES & ACCORDIONS               */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Home
          </Link>

          {/* Company Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D4030C] uppercase font-mono block mb-1">
              Company Pages
            </span>
            <div className="space-y-1 pl-2">
              {COMPANY_PAGES.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs font-semibold text-[#032356] hover:text-[#D4030C]"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D4030C] uppercase font-mono block mb-1">
              Products
            </span>
            <div className="space-y-1 pl-2">
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold text-[#D4030C]"
              >
                ★ View All Products
              </Link>
              {PRODUCT_CATEGORIES.flatMap((c) => c.items).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-semibold text-[#032356] hover:text-[#D4030C]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Blogs */}
          <Link
            href="/#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Blogs
          </Link>

          {/* Contact Us */}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Contact Us
          </Link>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full text-center text-xs py-3 rounded-full flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
