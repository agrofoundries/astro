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
  FileText,
  Briefcase,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "Direct Precast Concrete Manufacturing Plant",
  "50-State Licensed PE & SE Structural Calculations",
  "125,000 Sq. Ft. Climate-Controlled Casting Beds",
  "In-House Tekla LOD 400 3D BIM Detailing Hub",
  "AASHTO Bridge & State DOT Submittals Approved",
  "High-Volume Box Culverts, Basins & Utility Vaults",
];

// Company Dropdown Items
const COMPANY_PAGES = [
  {
    title: "About Precast Engineers",
    desc: "Our history, team & precast engineering mission",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Plant & Casting Facilities",
    desc: "125,000 sq. ft., 60-ton cranes & batch plant",
    href: "/capabilities",
    icon: Factory,
  },
  {
    title: "Structural Engineering & 3D BIM",
    desc: "50-state PE stamped calcs & Tekla LOD 400",
    href: "/#services",
    icon: Compass,
  },
  {
    title: "Quality Control & Testing Lab",
    desc: "ACI & PCI certified testing, ASTM C39 cylinder breaks",
    href: "/#quality",
    icon: ShieldCheck,
  },
  {
    title: "Seven Regional Offices",
    desc: "Coast-to-coast delivery hubs and engineering desks",
    href: "/#locations",
    icon: MapPin,
  },
  {
    title: "Industry Applications",
    desc: "Highways, stormwater, utilities & logistics",
    href: "/applications",
    icon: Layers,
  },
  {
    title: "Featured Projects",
    desc: "Case studies & major bridge and civil infrastructure",
    href: "/projects",
    icon: Briefcase,
  },
];

// Products Mega Menu Data
const PRODUCT_CATEGORIES = [
  {
    category: "HEAVY CIVIL INFRASTRUCTURE",
    items: [
      {
        name: "Heavy Precast Box Culverts",
        desc: "ASTM C1577 Highway Spans 6' to 16'",
        href: "/#products",
      },
      {
        name: "3-Sided Concrete Bridges",
        desc: "Clear Spans up to 45' stream crossings",
        href: "/#products",
      },
      {
        name: "Bridge Wing Walls & Headwalls",
        desc: "State DOT flared road erosion barriers",
        href: "/#products",
      },
      {
        name: "Highway Noise & Security Walls",
        desc: "Modular sound reflection panels",
        href: "/#products",
      },
    ],
  },
  {
    category: "STORMWATER & CATCH BASINS",
    items: [
      {
        name: "Precast Catch Basins",
        desc: "Maine & NH DOT road drainage structures",
        href: "/#products",
      },
      {
        name: "Curb Inlets & Traffic Drop Basins",
        desc: "H-20 & HS-25 heavy traffic highway boxes",
        href: "/#products",
      },
      {
        name: "Subsurface Leaching Galleys",
        desc: "Underground stormwater retention chambers",
        href: "/#products",
      },
      {
        name: "Slotted Trench Drains",
        desc: "Heavy truck terminal & airport channels",
        href: "/#products",
      },
    ],
  },
  {
    category: "UTILITY & WATER TANKS",
    items: [
      {
        name: "Multi-Component Pump Stations",
        desc: "Watertight monolithic wastewater wet wells",
        href: "/#products",
      },
      {
        name: "Monolithic Septic & Holding Tanks",
        desc: "1,000 to 5,000-gallon watertight vaults",
        href: "/#products",
      },
      {
        name: "Commercial Grease Traps",
        desc: "Foodservice gravity interceptors H-20",
        href: "/#products",
      },
      {
        name: "Custom Electrical & Valve Vaults",
        desc: "Underground access for power & valves",
        href: "/#products",
      },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"company" | "products" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      className="sticky top-0 z-50 bg-white border-b border-[#DCE5F0] shadow-xs"
      onMouseLeave={handleMouseLeave}
    >
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
              <span>PLANT CASTING &amp; 50-STATE PE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Main Navigation Bar (Clean, Sleek, 5 Clean Links)        */}
      {/* ======================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 bg-white relative">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-4">
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

          {/* Desktop Nav Items (Home, Company, Products, Blogs, Contact Us) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 h-full" aria-label="Primary navigation">
            {/* 1. Home */}
            <Link
              href="/"
              className="px-3 py-1.5 text-sm xl:text-[15px] font-extrabold text-[#01255F] hover:text-[#D7030F] transition-colors relative group whitespace-nowrap"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D7030F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>

            {/* 2. Company (with Dropdown) */}
            <div
              className="h-full flex items-center relative group"
              onMouseEnter={() => handleMouseEnter("company")}
            >
              <Link
                href="/about"
                className={`flex items-center gap-1 px-3 py-1.5 text-sm xl:text-[15px] font-extrabold transition-colors whitespace-nowrap ${
                  activeMenu === "company" ? "text-[#D7030F]" : "text-[#01255F] hover:text-[#D7030F]"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "company" ? "rotate-180 text-[#D7030F]" : "text-slate-400 group-hover:text-[#D7030F]"
                  }`}
                />
              </Link>
            </div>

            {/* 3. Products (with Good Megamenu) */}
            <div
              className="h-full flex items-center relative group"
              onMouseEnter={() => handleMouseEnter("products")}
            >
              <Link
                href="/#products"
                className={`flex items-center gap-1 px-3 py-1.5 text-sm xl:text-[15px] font-extrabold transition-colors whitespace-nowrap ${
                  activeMenu === "products" ? "text-[#D7030F]" : "text-[#01255F] hover:text-[#D7030F]"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180 text-[#D7030F]" : "text-slate-400 group-hover:text-[#D7030F]"
                  }`}
                />
              </Link>
            </div>

            {/* 4. Blogs */}
            <Link
              href="/#blog"
              className="px-3 py-1.5 text-sm xl:text-[15px] font-extrabold text-[#01255F] hover:text-[#D7030F] transition-colors relative group whitespace-nowrap"
            >
              <span>Blogs</span>
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D7030F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/#contact"
              className="px-3 py-1.5 text-sm xl:text-[15px] font-extrabold text-[#01255F] hover:text-[#D7030F] transition-colors relative group whitespace-nowrap"
            >
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D7030F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct RFP CTA Button */}
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

      {/* ======================================================== */}
      {/* COMPANY DROPDOWN MENU (All Pages Related to Company)    */}
      {/* ======================================================== */}
      {activeMenu === "company" && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-white border-b-2 border-[#DCE5F0] shadow-2xl z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full px-6 lg:px-10 xl:px-14 py-8 bg-white">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left 8 Cols: List of All Company Pages */}
              <div className="col-span-8">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D7030F]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#D7030F] font-mono">
                      COMPANY DIVISIONS &amp; PROFILES
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] font-medium">
                    Explore our infrastructure, licensing &amp; organization
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {COMPANY_PAGES.map((page, idx) => {
                    const Icon = page.icon;
                    return (
                      <Link
                        key={idx}
                        href={page.href}
                        onClick={() => setActiveMenu(null)}
                        className="group/item flex items-start gap-3 p-2.5 -mx-2 rounded-xl hover:bg-[#F4F8FD] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] group-hover/item:bg-[#01255F] group-hover/item:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-[#D7030F] group-hover/item:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-[#01255F] group-hover/item:text-[#D7030F] transition-colors flex items-center gap-1.5">
                            <span>{page.title}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D7030F]" />
                          </div>
                          <p className="text-[11px] text-[#64748B] leading-tight font-medium mt-0.5">
                            {page.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right 4 Cols: Company Snapshot Card */}
              <div className="col-span-4">
                <div className="bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-slate-200 border border-slate-200">
                      <Image
                        src="/images/manufacturing.jpg"
                        alt="Precast concrete plant facilities"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#01255F] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        PCI CERTIFIED PLANT
                      </div>
                    </div>

                    <h4 className="text-sm font-black text-[#01255F] uppercase tracking-tight mb-1">
                      Direct Manufacturing &amp; 50-State Engineering
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      Operating 125,000 sq. ft. of casting beds with in-house structural engineers, providing turnkey precast solutions from initial takeoffs to jobsite flatbed delivery.
                    </p>
                  </div>

                  <Link
                    href="/about"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#01255F] hover:bg-[#D7030F] text-white text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    <span>Read Full Company Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PRODUCTS GOOD MEGAMENU (3 Categorized Cols + Spotlight) */}
      {/* ======================================================== */}
      {activeMenu === "products" && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-white border-b-2 border-[#DCE5F0] shadow-2xl z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full px-6 lg:px-10 xl:px-14 py-8 lg:py-10 bg-white">
            <div className="grid grid-cols-12 gap-8 xl:gap-10">
              {/* Left 9 Cols: 3 Clean Product Columns */}
              <div className="col-span-8 xl:col-span-9 grid grid-cols-3 gap-6 xl:gap-8">
                {PRODUCT_CATEGORIES.map((col, idx) => (
                  <div key={idx} className="space-y-3.5">
                    {/* Category Eyebrow */}
                    <div className="pb-2 border-b-2 border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black tracking-wider text-[#D7030F] uppercase font-mono">
                        {col.category}
                      </span>
                    </div>

                    {/* Links */}
                    <ul className="space-y-1.5">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item block p-2 -mx-2 rounded-lg hover:bg-[#F4F8FD] transition-colors"
                          >
                            <div className="text-[13px] font-bold text-[#01255F] group-hover/item:text-[#D7030F] transition-colors flex items-center justify-between">
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#D7030F] group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100" />
                            </div>
                            <p className="text-[11px] text-[#64748B] leading-tight mt-0.5 font-medium">
                              {item.desc}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right 3 Cols: Featured Product Spotlight Card */}
              <div className="col-span-4 xl:col-span-3">
                <div className="bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-2xl p-5 flex flex-col justify-between h-full shadow-xs">
                  <div>
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-slate-200 border border-slate-200">
                      <Image
                        src="/images/infrastructure.jpg"
                        alt="Precast heavy civil infrastructure"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#D7030F] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        ★ HEAVY CIVIL CATALOG
                      </div>
                    </div>

                    <h4 className="text-sm font-black text-[#01255F] uppercase tracking-tight mb-1">
                      Heavy Precast Concrete Products
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                      Direct factory supply of AASHTO HS-25 box culverts, bridge spans, and DOT road drainage basins with available size specs.
                    </p>
                  </div>

                  <Link
                    href="/#products"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Browse All Products &amp; Sizes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE DRAWER WITH ALL PAGES & ACCORDIONS               */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#01255F] hover:text-[#D7030F] border-b border-slate-100"
          >
            Home
          </Link>

          {/* Company Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D7030F] uppercase font-mono block mb-1">
              Company Pages
            </span>
            <div className="space-y-1 pl-2">
              {COMPANY_PAGES.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs font-semibold text-[#01255F] hover:text-[#D7030F]"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D7030F] uppercase font-mono block mb-1">
              Products Catalog
            </span>
            <div className="space-y-1 pl-2">
              <Link
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold text-[#D7030F]"
              >
                ★ View All Products Catalog
              </Link>
              {PRODUCT_CATEGORIES.flatMap((c) => c.items).slice(0, 8).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-semibold text-[#01255F] hover:text-[#D7030F]"
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
            className="block py-2 text-sm font-bold text-[#01255F] hover:text-[#D7030F] border-b border-slate-100"
          >
            Blogs
          </Link>

          {/* Contact Us */}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#01255F] hover:text-[#D7030F] border-b border-slate-100"
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
              <span>Request Precast Takeoff</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
