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
  ShieldCheck,
  Factory,
  Compass,
  Building2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "Direct Precast Concrete Manufacturing Plant",
  "50-State Licensed PE & SE Structural Calculations",
  "125,000 Sq. Ft. Climate-Controlled Casting Beds",
  "In-House Tekla LOD 400 3D BIM Detailing Hub",
  "AASHTO Bridge & State DOT Submittals Approved",
  "High-Volume Box Culverts, Basins & Utility Vaults",
];

interface SubmenuLink {
  label: string;
  desc: string;
  href: string;
}

interface SubmenuCol {
  heading: string;
  links: SubmenuLink[];
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown: boolean;
  columns?: SubmenuCol[];
  featured?: {
    eyebrow: string;
    title: string;
    desc: string;
    image: string;
    ctaLabel: string;
    href: string;
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/#hero",
    hasDropdown: false,
  },
  {
    id: "products",
    label: "Products & Basins",
    href: "/#products",
    hasDropdown: true,
    columns: [
      {
        heading: "HEAVY CIVIL INFRASTRUCTURE",
        links: [
          {
            label: "Heavy Box Culverts",
            desc: "ASTM C1577 Spans 6'–16' AASHTO HS-25",
            href: "/#products",
          },
          {
            label: "3-Sided Concrete Bridges",
            desc: "Clear spans up to 45' stream preservation",
            href: "/#products",
          },
          {
            label: "Bridge Wing Walls & Headwalls",
            desc: "Flared slopes & erosion-control panels",
            href: "/#products",
          },
          {
            label: "Highway Sound & Security Barriers",
            desc: "Interlocking noise attenuation walls",
            href: "/#products",
          },
        ],
      },
      {
        heading: "STORMWATER & CATCH BASINS",
        links: [
          {
            label: "Precast Catch Basins",
            desc: "Maine & NH DOT standard road drainage",
            href: "/#products",
          },
          {
            label: "Curb Inlets & Drainage Structures",
            desc: "H-20 & HS-25 heavy traffic load rated",
            href: "/#products",
          },
          {
            label: "Subsurface Leaching Galleys",
            desc: "Underground stormwater infiltration chambers",
            href: "/#products",
          },
          {
            label: "Trench Drains & Slotted Channels",
            desc: "Heavy logistics yard & airport drainage",
            href: "/#products",
          },
        ],
      },
      {
        heading: "UTILITY & WATER TANKS",
        links: [
          {
            label: "Multi-Component Pump Stations",
            desc: "Watertight monolithic pump wet wells",
            href: "/#products",
          },
          {
            label: "Monolithic Septic & Holding Tanks",
            desc: "1,000 to 5,000-gallon watertight units",
            href: "/#products",
          },
          {
            label: "Commercial Grease Traps",
            desc: "Foodservice gravity interceptors H-20",
            href: "/#products",
          },
          {
            label: "Custom Precast Utility Vaults",
            desc: "Power, telecom & municipal water valves",
            href: "/#products",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "DIRECT PLANT PRODUCTION",
      title: "125,000 Sq. Ft. Casting Beds",
      desc: "Computerized twin-shaft planetary batching pouring 6,000+ PSI mixes daily with zero weather delays.",
      image: "/images/manufacturing.jpg",
      ctaLabel: "Browse Complete Catalog",
      href: "/#products",
    },
  },
  {
    id: "services",
    label: "Engineering Services",
    href: "/#services",
    hasDropdown: true,
    columns: [
      {
        heading: "STRUCTURAL ENGINEERING",
        links: [
          {
            label: "50-State PE & SE Stamped Calcs",
            desc: "Municipal & DOT approved calculations",
            href: "/#services",
          },
          {
            label: "Prestressed Concrete Design",
            desc: "Long-line strand tensioning & camber",
            href: "/#services",
          },
          {
            label: "Precast Connection Design",
            desc: "Welded, bolted & seismic bearing joints",
            href: "/#services",
          },
          {
            label: "Lateral Wind & Seismic Analysis",
            desc: "ASCE 7 & IBC structural code reviews",
            href: "/#services",
          },
        ],
      },
      {
        heading: "VIRTUAL DESIGN & 3D BIM",
        links: [
          {
            label: "Tekla Structures LOD 400 BIM",
            desc: "Clash-free digital concrete prototypes",
            href: "/#services",
          },
          {
            label: "Automated Shop Detailing & Tickets",
            desc: "Direct production piece tickets & embeds",
            href: "/#services",
          },
          {
            label: "Bar Bending Schedules (BBS)",
            desc: "CAM export for automated rebar bending",
            href: "/#services",
          },
          {
            label: "Multi-Trade BIM Federation",
            desc: "Navisworks & Revit clash detection",
            href: "/#software",
          },
        ],
      },
      {
        heading: "RIGGING & ERECTION ENGINEERING",
        links: [
          {
            label: "Lifting & Rigging Calculations",
            desc: "4:1 OSHA factor crane pickup charts",
            href: "/#services",
          },
          {
            label: "Stripping & Yard Handling Stress",
            desc: "Damage-free demolding stress checks",
            href: "/#services",
          },
          {
            label: "Temporary Erection Bracing",
            desc: "Field stability plans during setting",
            href: "/#services",
          },
          {
            label: "Fast Estimating & Takeoff Desk",
            desc: "2-hour average RFI turnaround hub",
            href: "/#contact",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "50-STATE LICENSED",
      title: "Tekla LOD 400 & PE Calculations",
      desc: "Licensed professional structural engineers providing stamped calculation packages across all 50 states.",
      image: "/images/engineering-team.jpg",
      ctaLabel: "Submit Drawings for Takeoff",
      href: "/#contact",
    },
  },
  {
    id: "about",
    label: "About & Plant",
    href: "/#company-intro",
    hasDropdown: true,
    columns: [
      {
        heading: "PLANT INFRASTRUCTURE",
        links: [
          {
            label: "125,000 Sq. Ft. Casting Bay",
            desc: "Continuous enclosed climate-controlled space",
            href: "/#manufacturing-specs",
          },
          {
            label: "60-Ton Tandem Overhead Cranes",
            desc: "Dual-hook handling for massive bridge picks",
            href: "/#manufacturing-specs",
          },
          {
            label: "Twin-Shaft Planetary Batching",
            desc: "Microwave moisture probe mix automation",
            href: "/#manufacturing-specs",
          },
          {
            label: "Accelerated Steam Hydration",
            desc: "Stripping strength in under 16 hours",
            href: "/#manufacturing-specs",
          },
        ],
      },
      {
        heading: "QUALITY & TESTING LAB",
        links: [
          {
            label: "In-House Materials Testing Lab",
            desc: "ACI & PCI certified testing protocols",
            href: "/#quality",
          },
          {
            label: "ASTM C39 Compression Cylinder Breaks",
            desc: "1-day, 7-day, and 28-day break verification",
            href: "/#quality",
          },
          {
            label: "PCI MNL-116 Tolerance Audits",
            desc: "±1/16″ laser alignment before every pour",
            href: "/#quality",
          },
          {
            label: "Aggregates & Rebar Mill Certs",
            desc: "Strict raw material heat tracking logs",
            href: "/#quality",
          },
        ],
      },
      {
        heading: "NETWORK & CREDENTIALS",
        links: [
          {
            label: "Seven Regional Offices",
            desc: "Coast-to-coast delivery & technical hubs",
            href: "/#locations",
          },
          {
            label: "PCI & State DOT Approvals",
            desc: "Maine, NH, NY, and Mass DOT standards",
            href: "/#locations",
          },
          {
            label: "Company Leadership & Engineers",
            desc: "Experienced precast industry specialists",
            href: "/#company-intro",
          },
          {
            label: "Technical Insights & Blog",
            desc: "Precast engineering articles & case studies",
            href: "/#blog",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "ONE DELIVERY STANDARD",
      title: "Seven Regional Offices",
      desc: "Strategically located regional nodes providing sequenced jobsite deliveries synchronized to crane arrival.",
      image: "/images/northeast-office.jpg",
      ctaLabel: "View All 7 Offices",
      href: "/#locations",
    },
  },
  {
    id: "locations",
    label: "Locations",
    href: "/#locations",
    hasDropdown: false,
  },
  {
    id: "blog",
    label: "Technical Blog",
    href: "/#blog",
    hasDropdown: false,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    hasDropdown: false,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeMenu && item.hasDropdown);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-[#DCE5F0] shadow-xs"
      onMouseLeave={handleMouseLeave}
    >
      {/* ======================================================== */}
      {/* Top Utility Strip (Full Width Edge-to-Edge)              */}
      {/* ======================================================== */}
      <div className="bg-[#030F21] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between h-9">
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
      {/* Main Navigation Bar (Prominent Font Height & Size)       */}
      {/* ======================================================== */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 bg-white relative">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 shrink-0" aria-label="Precast Engineers">
            <Image
              src="/logo.png"
              alt="Precast Engineers - Empowering Precasters"
              width={250}
              height={65}
              className="h-12 sm:h-13 lg:h-15 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Items (Bigger Font Height, Accenture-Style Trigger) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 h-full" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const isDropdownActive = activeMenu === item.id;

              return (
                <div
                  key={item.id}
                  className="h-full flex items-center relative group"
                  onMouseEnter={() => (item.hasDropdown ? handleMouseEnter(item.id) : setActiveMenu(null))}
                >
                  <Link
                    href={item.href}
                    className={`h-full flex items-center gap-1 px-1 text-[16px] xl:text-[17px] font-extrabold tracking-tight transition-colors border-b-[3px] ${
                      isDropdownActive
                        ? "text-[#D7030F] border-[#D7030F]"
                        : "text-[#01255F] hover:text-[#D7030F] border-transparent"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-slate-500 group-hover:text-[#D7030F] ${
                          isDropdownActive ? "rotate-180 text-[#D7030F]" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-black uppercase tracking-wider transition-all duration-300 bg-[#D7030F] text-white shadow-md shadow-red-600/30 hover:bg-[#B31217] hover:shadow-lg h-11 px-6 sm:px-7 text-xs sm:text-[13px] gap-2 select-none whitespace-nowrap"
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ACCENTURE-STYLE FULL-WIDTH MEGA SUBMENU PANEL           */}
      {/* ======================================================== */}
      {activeItem && activeItem.columns && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-white border-b-2 border-[#DCE5F0] shadow-2xl z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full px-6 lg:px-10 xl:px-14 py-8 lg:py-10 bg-white">
            <div className="grid grid-cols-12 gap-8 xl:gap-10">
              {/* Left 9 Columns: 3 Category Columns */}
              <div className="col-span-8 xl:col-span-9 grid grid-cols-3 gap-6 xl:gap-8">
                {activeItem.columns.map((col, idx) => (
                  <div key={idx} className="space-y-4">
                    {/* Category Eyebrow */}
                    <div className="pb-2 border-b-2 border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black tracking-wider text-[#D7030F] uppercase font-mono">
                        {col.heading}
                      </span>
                    </div>

                    {/* Links in Column */}
                    <ul className="space-y-2">
                      {col.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item block p-2 -mx-2 rounded-lg hover:bg-[#F4F8FD] transition-colors"
                          >
                            <div className="text-[13px] font-bold text-[#01255F] group-hover/item:text-[#D7030F] transition-colors flex items-center justify-between">
                              <span>{link.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#D7030F] group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100" />
                            </div>
                            <p className="text-[11px] text-[#64748B] leading-tight mt-0.5 font-medium line-clamp-1">
                              {link.desc}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right 3/4 Columns: Featured Spotlight Card */}
              {activeItem.featured && (
                <div className="col-span-4 xl:col-span-3">
                  <div className="bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-2xl p-5 flex flex-col justify-between h-full shadow-xs">
                    <div>
                      {/* Image Preview */}
                      <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4 bg-slate-200 border border-slate-200">
                        <Image
                          src={activeItem.featured.image}
                          alt={activeItem.featured.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#01255F] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                          {activeItem.featured.eyebrow}
                        </div>
                      </div>

                      <h4 className="text-base font-black text-[#01255F] uppercase tracking-tight mb-1.5">
                        {activeItem.featured.title}
                      </h4>
                      <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                        {activeItem.featured.desc}
                      </p>
                    </div>

                    <Link
                      href={activeItem.featured.href}
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#01255F] hover:bg-[#D7030F] text-white text-xs font-black uppercase tracking-wider transition-colors"
                    >
                      <span>{activeItem.featured.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE DRAWER WITH ACCORDION SUBMENUS                   */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto animate-in fade-in duration-200">
          {NAV_ITEMS.map((item) => {
            const isExpanded = mobileExpanded === item.id;

            return (
              <div key={item.id} className="border-b border-slate-100 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-bold text-[#01255F] hover:text-[#D7030F]"
                  >
                    {item.label}
                  </Link>

                  {item.hasDropdown && (
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.id)}
                      className="p-2 text-slate-500 hover:text-[#01255F]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.hasDropdown && isExpanded && item.columns && (
                  <div className="pl-3 pr-1 py-2 bg-[#F8FAFC] rounded-lg mt-1 space-y-3">
                    {item.columns.map((col, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <span className="text-[10px] font-black tracking-wider text-[#D7030F] uppercase font-mono block">
                          {col.heading}
                        </span>
                        <div className="space-y-1">
                          {col.links.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-xs font-semibold text-[#01255F] hover:text-[#D7030F]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

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
