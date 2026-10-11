"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Download,
  CheckCircle2,
} from "lucide-react";

// ─── Featured Basin & Drainage Spotlight Products (From Canva Catalog) ─────────

const FEATURED_BASIN_PRODUCTS = [
  {
    id: "catch-basin-2ft",
    title: "2 FT Precast Catch Basin (Catchpit System)",
    subtitle: "AASHTO HS-20 Traffic Rated Stormwater Inlets",
    image: "/images/products/catch-basin-2ft.png",
    specs: "Sizes: 24\"×24\" to 48\"×48\" · Depth: Up to 12 ft · HS-20/HS-25",
    badge: "★ MOST SPECIFIED • DOT APPROVED",
    description:
      "Precision-cast monolithic basin featuring integral pipe knockouts, mastic gasket joints, and cast iron grates for commercial lots, DOT highways, and municipal drainage.",
    features: [
      "Monolithic sump base preventing groundwater contamination",
      "Cast-in flexible pipe seals (Kor-N-Seal or equivalent)",
      "AASHTO HS-20 & HS-25 vehicular traffic loading certified",
      "Customizable depth with precast riser rings & flat top slabs",
    ],
    href: "/products#utility",
  },
  {
    id: "catch-basin-system",
    title: "Multi-Component Catch Basin & Pump Station",
    subtitle: "Engineered Dual-Chamber Wet Well & Sump Station",
    image: "/images/products/catch-basin-system.png",
    specs: "Chambers: Dual Monolithic · Interconnect: 4\"–12\" · Traffic Rated",
    badge: "HEAVY-DUTY INDUSTRIAL SYSTEM",
    description:
      "Multi-vessel precast stormwater station combining sediment separation basin, wet well overflow chamber, dual cast iron access, and electrical control conduit junctions.",
    features: [
      "Dual chamber precast containment for sediment separation",
      "Factory-installed lifting anchors for balanced crane pick",
      "High-compressive 5,000–6,000 PSI air-entrained concrete",
      "Cast-iron bicycle-safe traffic grates or solid manhole covers",
    ],
    href: "/products#utility",
  },
  {
    id: "leaching-galley",
    title: "(MAINE DOT) 2 FT & LC-6 Leaching Galleys",
    subtitle: "Subsurface Stormwater Retention & Infiltration Galley",
    image: "/images/products/leaching-galley.png",
    specs: "Rating: Maine DOT Standard · High-Void Open Bottom · HS-20",
    badge: "STATE DOT SPECIFICATION",
    description:
      "Perforated precast leaching chambers engineered per Maine DOT specifications for rapid stormwater infiltration, groundwater recharge, and subsurface site retention.",
    features: [
      "Maine DOT approved geometry with engineered side-wall orifices",
      "Center inspection risers with locking cast iron access covers",
      "Interlocking modular ends for continuous linear galley runs",
      "Structural roof slab engineered for direct vehicular traffic",
    ],
    href: "/products#utility",
  },
];

// ─── Complete Precast Catalog Data — 100% Sourced From Canva Catalog ─────────

const PRODUCT_CATEGORIES = [
  {
    id: "catch-basin-2ft-cat",
    name: "Precast Catch Basins (Catchpit)",
    modelCount: "16 Models",
    standard: "ASTM C478 / AASHTO HS-20",
    href: "/#contact",
    exploreLabel: "Inquire Catch Basin",
    image: "/images/products/catch-basin-2ft.png",
    specs: "Sizes: 24\"×24\" to 48\"×48\" · Traffic Grates & Sump Knockouts",
    highlight: "Primary Showcase",
  },
  {
    id: "catch-basin-system-cat",
    name: "Multi-Component Basin & Pump Station",
    modelCount: "9 Models",
    standard: "ASTM C478 / Heavy Duty",
    href: "/#contact",
    exploreLabel: "Inquire Pump Station",
    image: "/images/products/catch-basin-system.png",
    specs: "Dual Monolithic Wet Wells, Valve Vaults & Lift Stations",
    highlight: "DOT Approved",
  },
  {
    id: "leaching-galleys-dot-cat",
    name: "(Maine DOT) 2 FT Leaching Galleys",
    modelCount: "6 Models",
    standard: "Maine DOT / AASHTO H-20",
    href: "/#contact",
    exploreLabel: "Inquire 2 FT Galley",
    image: "/images/products/leaching-galley.png",
    specs: "High-Void Subsurface Retention & Rapid Stormwater Infiltration",
    highlight: "DOT Specification",
  },
  {
    id: "leaching-galleys-lc6-cat",
    name: "(Maine DOT) LC-6 Leaching Galleys",
    modelCount: "8 Models",
    standard: "Maine DOT / High Capacity",
    href: "/#contact",
    exploreLabel: "Inquire LC-6 Galley",
    image: "/images/products/leaching-galley-lc6.png",
    specs: "Heavy-Duty Infiltration Galleys for High Storm Water Volumes",
    highlight: "DOT Certified",
  },
  {
    id: "headwall-nh-12-cat",
    name: "NH DOT 12\" Concrete Headwalls",
    modelCount: "12 Models",
    standard: "NH DOT Standard / HS-20",
    href: "/#contact",
    exploreLabel: "Inquire 12\" Headwall",
    image: "/images/products/headwall-nh-12.png",
    specs: "Monolithic Precast Culvert Headwalls with Knockout Seals",
    highlight: "DOT Standard",
  },
  {
    id: "headwall-nh-24-cat",
    name: "NH DOT 24\" Concrete Headwalls",
    modelCount: "10 Models",
    standard: "NH DOT Standard / HS-20",
    href: "/#contact",
    exploreLabel: "Inquire 24\" Headwall",
    image: "/images/products/headwall-nh-24.png",
    specs: "Heavy Drainage Culvert Headwalls for Highways & Roads",
    highlight: "DOT Standard",
  },
  {
    id: "headwall-custom-cat",
    name: "NH DOT Custom Size Headwalls",
    modelCount: "8 Models",
    standard: "NH DOT Engineered",
    href: "/#contact",
    exploreLabel: "Inquire Custom Headwall",
    image: "/images/products/headwall-custom.png",
    specs: "V-Notch Weir & Multi-Pipe Culvert Headwalls per Project Specs",
  },
  {
    id: "endwall-dot-triple-cat",
    name: "(Maine DOT) Triple-Opening End Walls",
    modelCount: "6 Models",
    standard: "Maine DOT Standard",
    href: "/#contact",
    exploreLabel: "Inquire Triple End Wall",
    image: "/images/products/endwall-dot-triple.png",
    specs: "Multi-Culvert Outfall End Walls for Stormwater Conveyance",
    highlight: "DOT Approved",
  },
  {
    id: "endwall-dot-corner-cat",
    name: "(Maine DOT) Corner L-End Walls",
    modelCount: "8 Models",
    standard: "Maine DOT Standard",
    href: "/#contact",
    exploreLabel: "Inquire Corner End Wall",
    image: "/images/products/endwall-dot-corner.png",
    specs: "Precision L-Configuration Culvert Retaining & End Wall",
  },
  {
    id: "wingwall-dot-cat",
    name: "(Maine DOT) Precast Wing Walls",
    modelCount: "10 Models",
    standard: "Maine DOT Standard",
    href: "/#contact",
    exploreLabel: "Inquire Wing Wall",
    image: "/images/products/wingwall-dot.png",
    specs: "Flared Wing Walls for Highway Bridge Culverts & Inlets",
    highlight: "DOT Certified",
  },
  {
    id: "grease-trap-1000g-cat",
    name: "1000G Commercial Grease Traps",
    modelCount: "8 Models",
    standard: "IAPMO / UPC Compliant",
    href: "/#contact",
    exploreLabel: "Inquire Grease Trap",
    image: "/images/products/grease-trap-1000g.png",
    specs: "Dual-Compartment Concrete Interceptor with Manhole Access",
  },
  {
    id: "septic-tank-1500g-cat",
    name: "1500G Monolithic Septic Tanks",
    modelCount: "12 Models",
    standard: "ASTM C1227 / NPCA Certified",
    href: "/#contact",
    exploreLabel: "Inquire Septic Tank",
    image: "/images/products/septic-tank-1500g.png",
    specs: "Monolithic Precast Concrete Tank with Internal Baffle Wall",
  },
];

export function ProductsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const totalModels = PRODUCT_CATEGORIES.reduce((sum, cat) => {
    const n = parseInt(cat.modelCount.split(" ")[0], 10);
    return sum + n;
  }, 0);

  return (
    <section
      id="products"
      className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] py-16 sm:py-20"
    >
      {/* ── 1. SECTION HEADER ────────────────────────────────────────── */}
      <div className="section-container-wide mb-12 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#01255F] font-mono">
                Engineered Precast Products &amp; Civil Systems
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#01255F] tracking-tight uppercase">
              Precast Products <span className="text-[#D7030F]">&amp; Basins</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#334155] max-w-2xl leading-relaxed">
              Explore our full inventory of precision-manufactured stormwater catch basins, leaching galleys, underground utility structures, and civil DOT components.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#01255F] text-[#01255F] hover:bg-[#01255F] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 group shadow-xs cursor-pointer"
            >
              <span>Request Takeoff on All {totalModels} Products</span>
              <ArrowRight className="w-4 h-4 text-[#D7030F] group-hover:text-white transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── 2. FIRST & PRIMARY SHOWCASE: CATCH BASINS & LEACHING GALLEYS ─ */}
      <div className="section-container-wide mb-16">
        <div className="bg-white border-2 border-[#01255F]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          {/* Showcase Section Heading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#DCE5F0] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-1">
                <span className="w-4 h-0.5 bg-[#D7030F]" />
                <span>PRIMARY PRODUCT SHOWCASE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase tracking-tight">
                Precast Catch Basins &amp; Drainage Systems
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Direct manufacturing of DOT-compliant catchpit basins, wet well stations, and Maine DOT leaching galleys.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFF2F2] border border-[#FCD2D4] text-[11px] font-bold text-[#D7030F] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#D7030F]" />
                <span>DOT &amp; ASTM C478 Certified</span>
              </span>
            </div>
          </div>

          {/* 3 Prominent Basin Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_BASIN_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col rounded-xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image Stage */}
                <div className="relative h-64 sm:h-72 w-full bg-[#F8FAFD] border-b border-[#EBF1F8] flex items-center justify-center p-4 overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    width={400}
                    height={400}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#01255F] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {prod.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7030F] block mb-1">
                      {prod.subtitle}
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#01255F] leading-snug mb-2 group-hover:text-[#D7030F] transition-colors min-h-[52px]">
                      {prod.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed mb-4 min-h-[48px]">
                      {prod.description}
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-100 min-h-[110px]">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D7030F] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Pill */}
                    <div className="min-h-[42px] flex items-center p-2.5 rounded bg-[#F2F7FF] border border-[#DCE5F0] mb-4 text-[11px] text-[#01255F] font-mono font-semibold">
                      {prod.specs}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[#D7030F] hover:bg-[#B31217] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Inquire About Basin</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#01255F] hover:text-[#D7030F] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>CAD Specs</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. FULL CATEGORY EXPLORER GRID WITH 100% CANVA PRODUCT IMAGES ───── */}
      <div className="section-container-wide mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight">
            Complete Precast Product Line &amp; Catalog
          </h3>
          <span className="text-xs font-bold text-[#64748B]">
            All 12 Certified Products
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isHovered = hovered === cat.id;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col rounded-xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-sm hover:shadow-xl transition-all duration-200"
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
                aria-label={`${cat.name} — ${cat.exploreLabel}`}
              >
                {/* Top standard badge */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded transition-colors ${
                      isHovered
                        ? "bg-[#D7030F] text-white"
                        : "bg-[#E8F3FF] text-[#01255F]"
                    }`}
                  >
                    {cat.modelCount}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase font-mono">
                    {cat.standard}
                  </span>
                </div>

                {/* Card Title */}
                <div className="px-5 pb-1">
                  <h4 className="text-base sm:text-lg font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-tight min-h-[44px] flex items-center">
                    {cat.name}
                  </h4>
                  {cat.highlight && (
                    <span className="inline-block mt-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#FFF2F2] text-[#D7030F] border border-[#FCD2D4]">
                      ★ {cat.highlight}
                    </span>
                  )}
                </div>

                {/* REAL CANVA PRODUCT IMAGE STAGE */}
                <div className="relative mx-4 my-3 rounded-lg overflow-hidden h-44 bg-[#F8FAFD] border border-[#EBF1F8] flex items-center justify-center p-2 group-hover:bg-[#F2F7FF] transition-colors">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Specs */}
                <div className="px-5 pb-3">
                  <p className="text-[11px] text-[#64748B] font-medium line-clamp-1">
                    {cat.specs}
                  </p>
                </div>

                {/* Explore */}
                <div className="mt-auto px-5 pt-3.5 pb-4 border-t border-[#F2F7FF] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors">
                    {cat.exploreLabel}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D7030F] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── 4. HIGH-IMPACT USA NAVY & RED ESTIMATING CTA BANNER ──────── */}
      <div className="section-container-wide">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-8 sm:px-12 py-8 sm:py-10 rounded-2xl bg-[#06182E] bg-gradient-to-r from-[#06182E] via-[#0B2545] to-[#01255F] text-white border-t-4 border-[#D7030F] shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-2">
              <span className="w-3 h-0.5 bg-[#D7030F]" />
              <span>CUSTOM BASIN &amp; PRECAST ESTIMATING DESK</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug uppercase">
              Need Project Takeoffs for Catch Basins or Custom Precast?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Send us your drainage plan sheets and structural specifications for rapid takeoff, PE-stamped calculations, and contractor pricing — response in under 2 working hours.
            </p>
          </div>

          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#D7030F] hover:bg-[#B31217] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-200 group whitespace-nowrap cursor-pointer"
          >
            <span>Submit Basin Plans for Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
