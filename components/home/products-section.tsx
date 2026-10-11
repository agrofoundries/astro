"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal,
  Factory,
} from "lucide-react";

// ─── 1. HEAVY CIVIL INFRASTRUCTURE FIRST (TOP SPOTLIGHT) ─────────────────────

const HEAVY_MANUFACTURING_HEROES = [
  {
    id: "box-culvert-heavy",
    title: "Heavy Precast Box Culverts",
    tagline: "Highway Stream Crossings · ASTM C1577",
    category: "heavy",
    image: "/images/infrastructure.jpg",
    badge: "★ HEAVY CIVIL INFRASTRUCTURE",
    specs: "Spans 6' to 16' · AASHTO HS-25 Highway Traffic",
    useFor: "Under-road stream crossings, rail underpasses, and large stormwater tunnels.",
    highlight1: "Poured with 6,000+ PSI high-strength reinforced concrete",
    highlight2: "Fast 1–2 day installation drastically cuts road closures",
  },
  {
    id: "bridge-system",
    title: "3-Sided Concrete Bridge Culverts",
    tagline: "Stream Bed Preservation · Short-Span Bridges",
    category: "heavy",
    image: "/images/hero-bridge.jpg",
    badge: "DOT HIGHWAY BRIDGE",
    specs: "Clear Spans 12' to 45' · Precast Footings Included",
    useFor: "Environmentally sensitive creek bridges and highway road crossings.",
    highlight1: "Open-bottom design leaves natural river beds completely undisturbed",
    highlight2: "Precast modular segments set in place in a single crane shift",
  },
  {
    id: "wingwall-retaining",
    title: "Precast Bridge Wing Walls",
    tagline: "Bridge Slopes & Retaining Panels · State DOT",
    category: "heavy",
    image: "/images/products/wingwall-dot.png",
    badge: "DOT HIGHWAY STANDARD",
    specs: "Heights 4' to 16' · Straight & 30°/45° Flared Wings",
    useFor: "Holding back steep earth embankments at culvert and bridge entrances.",
    highlight1: "Locks tight to box culverts to stop road shoulder erosion",
    highlight2: "Cast-in lifting hardware enables rapid crane alignment",
  },
];

// ─── 2. PRODUCT CARDS WITH IMAGE, DESCRIPTION, AND DEDICATED SIZES PILL ─────

export interface ProductCardItem {
  id: string;
  name: string;
  category: "heavy" | "drainage" | "tanks";
  categoryBadge: string;
  badgeType: "exchange" | "heavy" | "dot";
  categoryLabel: string;
  description: string;
  availableSizes: string;
  standard: string;
  image: string;
  href: string;
}

const ALL_PRODUCT_CARDS: ProductCardItem[] = [
  // ─── HEAVY PRODUCTS FIRST (AS REQUESTED) ──────────────────────────
  {
    id: "box-culvert-card",
    name: "Precast Concrete Box Culverts",
    category: "heavy",
    categoryBadge: "HEAVY INFRASTRUCTURE",
    badgeType: "heavy",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Massive rectangular concrete tunnel blocks placed beneath highways to carry streams and storm runoff.",
    availableSizes: "Spans: 6'×3' to 16'×12' · 24 DOT Standard Sizes",
    standard: "ASTM C1577 / AASHTO HS-25",
    image: "/images/infrastructure.jpg",
    href: "/#contact",
  },
  {
    id: "wingwall-dot-card",
    name: "Precast Bridge Wing Walls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    badgeType: "dot",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Heavy concrete retaining walls that hold back steep dirt banks and guide water smoothly into culverts.",
    availableSizes: "Heights: 4 ft to 16 ft · 30° & 45° Flared Wings",
    standard: "Maine DOT / AASHTO HS-20",
    image: "/images/products/wingwall-dot.png",
    href: "/#contact",
  },
  {
    id: "headwall-nh-24-card",
    name: "24\" Pipe Highway Headwalls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    badgeType: "dot",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Solid precast end block for 24-inch drainage pipes that stops road shoulder washouts and anchors the pipe.",
    availableSizes: "Fits 24\" Culvert Pipes · 10 Standard Models",
    standard: "NH DOT Standard / HS-20",
    image: "/images/products/headwall-nh-24.png",
    href: "/#contact",
  },
  {
    id: "headwall-nh-12-card",
    name: "12\" Pipe Precast Concrete Headwalls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    badgeType: "dot",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Monolithic precast culvert end wall for 12-inch drainage pipes on driveways, streets, and parking lots.",
    availableSizes: "Fits 12\" Culvert Pipes · 12 Standard Models",
    standard: "NH DOT Standard / HS-20",
    image: "/images/products/headwall-nh-12.png",
    href: "/#contact",
  },
  {
    id: "headwall-custom-card",
    name: "Custom Culvert Headwalls & Weirs",
    category: "heavy",
    categoryBadge: "ENGINEERED PRECAST",
    badgeType: "heavy",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Custom-cast concrete headwalls with engineered pipe openings and water-measuring weir cutouts.",
    availableSizes: "Custom Sized to Project Plans · 8 Base Models",
    standard: "NH DOT / PE Stamped",
    image: "/images/products/headwall-custom.png",
    href: "/#contact",
  },
  {
    id: "endwall-dot-triple-card",
    name: "Triple-Opening Culvert End Walls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    badgeType: "dot",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "Wide precast concrete headwall built to receive three parallel drainage pipes cleanly at major ditch exits.",
    availableSizes: "Multi-Culvert Outfall · 6 Standard Models",
    standard: "Maine DOT / AASHTO HS-20",
    image: "/images/products/endwall-dot-triple.png",
    href: "/#contact",
  },
  {
    id: "endwall-dot-corner-card",
    name: "Corner L-End Retaining Walls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    badgeType: "dot",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    description: "90-degree corner concrete walls that support roadside slopes while letting storm drainage pipes pass through.",
    availableSizes: "L-Configuration Geometry · 8 Models Available",
    standard: "Maine DOT Standard",
    image: "/images/products/endwall-dot-corner.png",
    href: "/#contact",
  },

  // ─── DRAINAGE & STORMWATER (COPIED DIRECTLY FROM PRECAST EXCHANGE) ──
  {
    id: "storm-inlet-1-card",
    name: "1.2m Storm Drain Inlet (600×900mm) — Case 1",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Heavy precast concrete box installed beneath street curbs to catch rushing rainwater during storms.",
    availableSizes: "600 × 900 mm · 1.2m Depth",
    standard: "ASTM C478 / Traffic Rated",
    image: "/images/products/storm-drain-inlet-1.webp",
    href: "/#contact",
  },
  {
    id: "storm-inlet-2-card",
    name: "1.2m Storm Drain Inlet (600×900mm) — Case 2",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Deep street drain inlet box with multi-direction pipe knockouts for road intersections and curb gutters.",
    availableSizes: "600 × 900 mm · 1.2m Depth",
    standard: "ASTM C478 / AASHTO HS-20",
    image: "/images/products/storm-drain-inlet-2.webp",
    href: "/#contact",
  },
  {
    id: "storm-inlet-case1-card",
    name: "600×900mm Opening Storm Drain Inlet Case 1",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Precast storm inlet basin engineered for high-volume roadway water collection and easy pipe hookup.",
    availableSizes: "600 × 900 mm Top Opening · Ready Stock",
    standard: "ASTM C478 / DOT Ready",
    image: "/images/products/storm-drain-inlet-case1-logo.webp",
    href: "/#contact",
  },
  {
    id: "storm-inlet-case2-card",
    name: "600×900mm Opening Storm Drain Inlet Case 2",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Heavy-duty storm drain box with cast-in knockout walls for municipal roadway storm sewer tie-ins.",
    availableSizes: "600 × 900 mm Top Opening · Heavy Traffic",
    standard: "ASTM C478 / Traffic Rated",
    image: "/images/products/storm-drain-inlet-case2-logo.webp",
    href: "/#contact",
  },
  {
    id: "catch-basin-b01b-card",
    name: "B-01B Precast Road Catch Basin",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Monolithic roadside catchpit box that catches street runoff and traps gravel before water enters sewers.",
    availableSizes: "Sizes: 24\"×24\" to 36\"×36\" · DOT Standard",
    standard: "ASTM C478 / DOT Approved",
    image: "/images/products/b-01b.webp",
    href: "/#contact",
  },
  {
    id: "catch-basin-b01d-card",
    name: "B-01D Heavy Curb Catch Basin",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Reinforced catch basin built to sit directly beneath street curbs and support heavy semi-truck wheel loads.",
    availableSizes: "Heavy Curb Inlet Profile · 12 Models",
    standard: "AASHTO HS-20 Traffic Rated",
    image: "/images/products/b-01d.webp",
    href: "/#contact",
  },
  {
    id: "catch-basin-b01e-card",
    name: "B-01E Deep Sump Catch Basin",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Catch basin with an extra deep bottom reservoir that traps sand, leaves, and street grime cleanly.",
    availableSizes: "Deep Sump Sediment Pit · 10 Models",
    standard: "ASTM C478 Municipal Standard",
    image: "/images/products/b-01e.webp",
    href: "/#contact",
  },
  {
    id: "catch-basin-side-inlet-card",
    name: "Catch Basin with Side Inlet Frame & Cover",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "All-in-one precast basin with heavy cast-iron side curb frame that swallows water rushing along street gutters.",
    availableSizes: "Monolithic Box + Iron Frame · Ready Stock",
    standard: "DOT Curb Inlet Standard",
    image: "/images/products/catch-basin-side-inlet.webp",
    href: "/#contact",
  },
  {
    id: "cb-6-card",
    name: "CB-6 Series Roadway Catch Basin",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Standard road construction catchpit basin for parking lots, business parks, and residential subdivisions.",
    availableSizes: "Standard CB-6 DOT Geometry · 12 Models",
    standard: "ASTM C478 / HS-20 Traffic",
    image: "/images/products/cb-6-catch-basin.webp",
    href: "/#contact",
  },
  {
    id: "manhole-1050-card",
    name: "Catch Basin Manhole 1050mm Diameter",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Deep circular concrete access shaft allowing utility workers to inspect and maintain underground pipes safely.",
    availableSizes: "Diameter: 1050 mm (42\") · Stackable Risers",
    standard: "ASTM C478 / AASHTO HS-20",
    image: "/images/products/manhole-1050mm.webp",
    href: "/#contact",
  },
  {
    id: "manhole-reinforced-card",
    name: "Precast Reinforced Catch Basin Manhole (1050mm)",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    badgeType: "exchange",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Heavy reinforced circular manhole chamber with pipe gaskets designed for deep utility installations.",
    availableSizes: "1050 mm Reinforced Shell · 8 Models",
    standard: "ASTM C478 Heavy Duty",
    image: "/images/products/precast-reinforced-manhole.webp",
    href: "/#contact",
  },
  {
    id: "catch-basin-2ft-card",
    name: "2 FT Monolithic Square Catch Basin",
    category: "drainage",
    categoryBadge: "PRIMARY SHOWCASE",
    badgeType: "heavy",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Square concrete basin with seamless leak-proof base and pre-cast pipe knockouts for rapid connection.",
    availableSizes: "Sizes: 24\"×24\" to 48\"×48\" · Depths up to 12 ft",
    standard: "ASTM C478 / AASHTO HS-20",
    image: "/images/products/catch-basin-2ft.png",
    href: "/#contact",
  },
  {
    id: "leaching-galleys-dot-card",
    name: "(Maine DOT) 2 FT Leaching Galleys",
    category: "drainage",
    categoryBadge: "DOT SPECIFICATION",
    badgeType: "dot",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Compact underground soakaway galleries that replace surface retention ponds and save usable site land.",
    availableSizes: "2 FT Modular Infiltration · 6 Models",
    standard: "Maine DOT / AASHTO H-20",
    image: "/images/products/leaching-galley.png",
    href: "/#contact",
  },
  {
    id: "leaching-galleys-lc6-card",
    name: "(Maine DOT) LC-6 Leaching Galleys",
    category: "drainage",
    categoryBadge: "DOT CERTIFIED",
    badgeType: "dot",
    categoryLabel: "ROAD & STORM DRAINAGE",
    description: "Underground perforated concrete chambers that naturally soak rainwater runoff into the soil beneath parking lots.",
    availableSizes: "High-Capacity LC-6 Geometry · 8 Models",
    standard: "Maine DOT / High Capacity",
    image: "/images/products/leaching-galley-lc6.png",
    href: "/#contact",
  },

  // ─── UNDERGROUND TANKS & SANITARY ─────────────────────────────────
  {
    id: "catch-basin-system-card",
    name: "Multi-Component Basin & Pump Station",
    category: "tanks",
    categoryBadge: "INDUSTRIAL SYSTEM",
    badgeType: "heavy",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "Dual-room concrete station: room 1 separates dirt and sediment; room 2 houses electric water pumps.",
    availableSizes: "Dual Monolithic Chambers · 9 Models",
    standard: "ASTM C478 / Heavy Duty",
    image: "/images/products/catch-basin-system.png",
    href: "/#contact",
  },
  {
    id: "grease-trap-1000g-card",
    name: "1000G Commercial Kitchen Grease Traps",
    category: "tanks",
    categoryBadge: "COMMERCIAL PLUMBING",
    badgeType: "exchange",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "Heavy concrete underground tank that traps restaurant grease and oil so they cannot clog city sewer lines.",
    availableSizes: "Capacity: 1,000 Gallons · Dual Compartments",
    standard: "IAPMO / UPC Compliant",
    image: "/images/products/grease-trap-1000g.png",
    href: "/#contact",
  },
  {
    id: "grease-trap-1500g-card",
    name: "1500G High-Capacity Commercial Grease Traps",
    category: "tanks",
    categoryBadge: "COMMERCIAL PLUMBING",
    badgeType: "exchange",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "High-volume grease interceptor with dual inspection risers for busy restaurants, hotels, and schools.",
    availableSizes: "Capacity: 1,500 Gallons · Traffic Rated Covers",
    standard: "IAPMO / UPC / ASTM C1227",
    image: "/images/products/grease-trap-1500g.png",
    href: "/#contact",
  },
  {
    id: "septic-tank-1000g-card",
    name: "1000G Monolithic Septic Tanks",
    category: "tanks",
    categoryBadge: "WATERTIGHT PRECAST",
    badgeType: "dot",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "One-piece poured concrete tank that safely treats household sewage underground without leaking.",
    availableSizes: "Capacity: 1,000 Gallons · 10 Models",
    standard: "ASTM C1227 / NPCA Certified",
    image: "/images/products/septic-tank-1000g.png",
    href: "/#contact",
  },
  {
    id: "septic-tank-1500g-card",
    name: "1500G Monolithic Septic Tanks",
    category: "tanks",
    categoryBadge: "WATERTIGHT PRECAST",
    badgeType: "dot",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "One-piece concrete septic tank with internal dividing wall, 100% leak-proof to protect groundwater.",
    availableSizes: "Capacity: 1,500 Gallons · 12 Models",
    standard: "ASTM C1227 / NPCA Certified",
    image: "/images/products/septic-tank-1500g.png",
    href: "/#contact",
  },
  {
    id: "septic-tank-2000g-card",
    name: "2000G Commercial Precast Septic Tanks",
    category: "tanks",
    categoryBadge: "WATERTIGHT PRECAST",
    badgeType: "dot",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    description: "Large commercial-grade wastewater tank built with thick walls to withstand heavy vehicle wheel traffic above.",
    availableSizes: "Capacity: 2,000 Gallons · AASHTO HS-20",
    standard: "ASTM C1227 / HS-20 Traffic",
    image: "/images/products/septic-tank-2000g.png",
    href: "/#contact",
  },
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "heavy" | "drainage" | "tanks">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredCards =
    activeFilter === "all"
      ? ALL_PRODUCT_CARDS
      : ALL_PRODUCT_CARDS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] pt-8 pb-12 sm:pt-10 sm:pb-14">
      {/* ── TOP HEADER ───────────────────────────────────────────── */}
      <div className="section-container-wide mb-6 sm:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-[#DCE5F0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#01255F] font-mono">
                Direct Precast Manufacturing · Fast Jobsite Delivery
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#01255F] tracking-tight uppercase">
              Precast Products <span className="text-[#D7030F]">&amp; Manufacturing</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#334155] max-w-2xl leading-relaxed">
              Real manufactured precast concrete for contractors, civil builders, and municipalities.
              Heavy products like highway box culverts and bridges shown first, followed by street storm drains and underground utility tanks.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>Get Fast Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:6314581111"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-[#01255F] text-[#01255F] hover:bg-[#01255F] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D7030F]" />
              <span>(631) 458-1111</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── 1. HEAVY MANUFACTURING FIRST (TOP CIVIL SPOTLIGHT) ───── */}
      <div className="section-container-wide mb-8 sm:mb-10">
        <div className="bg-white border-2 border-[#01255F]/20 rounded-2xl p-6 sm:p-8 shadow-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#DCE5F0] gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-1">
                <Factory className="w-4 h-4" />
                <span>HEAVY PRODUCTS FIRST · CIVIL MANUFACTURING SPOTLIGHT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight">
                Highway Box Culverts &amp; Bridge Infrastructure
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFF2F2] border border-[#FCD2D4] text-[11px] font-bold text-[#D7030F] uppercase self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>AASHTO HS-25 &amp; DOT Certified</span>
            </span>
          </div>

          {/* 3 Heavy Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HEAVY_MANUFACTURING_HEROES.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Visual Stage */}
                <div className="relative h-60 sm:h-64 w-full bg-[#06182E] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#D7030F] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Size Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono font-bold border border-white/20">
                      📏 {item.specs}
                    </span>
                  </div>
                </div>

                {/* Content with high line-height, clean breathing room, minimal text */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7030F] block mb-2 font-mono">
                      {item.tagline}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug mb-3">
                      {item.title}
                    </h4>

                    {/* Single Clean Sentence with high line-height */}
                    <p className="text-sm text-[#475569] leading-relaxed mb-5 font-normal">
                      {item.useFor}
                    </p>

                    {/* 2 Clean Highlights with spacious line height */}
                    <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm leading-relaxed font-medium text-slate-800">
                          {item.highlight1}
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm leading-relaxed font-medium text-slate-800">
                          {item.highlight2}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean CTA Button */}
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg bg-[#01255F] hover:bg-[#D7030F] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer group/btn"
                  >
                    <span>Inquire Specifications</span>
                    <ArrowRight className="w-4 h-4 text-[#D7030F] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. PRODUCT CARDS WITH PRODUCT SIZE PILL MATCHING USER SCREENSHOT ───── */}
      <div className="section-container-wide">
        {/* Category Filter Pills & Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7030F] mb-1 font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>MULTIPLE SIZES &amp; MODELS INVENTORY ({filteredCards.length} PRODUCTS)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight">
              Precast Products Line &amp; Models Catalog
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#01255F] text-white shadow-sm"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              All Products ({ALL_PRODUCT_CARDS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("heavy")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "heavy"
                  ? "bg-[#D7030F] text-white shadow-sm"
                  : "bg-white text-[#D7030F] border border-[#FCD2D4] hover:bg-[#FFF2F2]"
              }`}
            >
              ★ Heavy Civil &amp; Box Culverts (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("drainage")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "drainage"
                  ? "bg-[#01255F] text-white shadow-sm"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              Storm Drains &amp; Basins (14)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("tanks")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "tanks"
                  ? "bg-[#01255F] text-white shadow-sm"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              Tanks &amp; Traps (6)
            </button>
          </div>
        </div>

        {/* 4-COLUMN GRID MATCHING EXACT FORMAT IN USER'S SCREENSHOT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((card) => {
            const isHovered = hoveredId === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-xs hover:shadow-xl transition-all duration-200"
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                {/* 1. Top Image Stage with Floating Category Badge */}
                <div className="relative h-56 w-full bg-[#F8FAFD] border-b border-[#EBF1F8] flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#F2F7FF] transition-colors">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Pill Badge (like PRECAST EXCHANGE PRODUCT in screenshot) */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded tracking-wider shadow-xs ${
                        card.badgeType === "heavy"
                          ? "bg-[#FFF2F2] text-[#D7030F] border border-[#FCD2D4]"
                          : card.badgeType === "dot"
                          ? "bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]"
                          : "bg-[#E8F3FF] text-[#01255F] border border-[#DCE5F0]"
                      }`}
                    >
                      {card.categoryBadge}
                    </span>
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Red Category Subtitle */}
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#D7030F] block mb-1.5 font-mono">
                      {card.categoryLabel}
                    </span>

                    {/* Product Title */}
                    <h4 className="text-base sm:text-lg font-black text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug min-h-[46px] mb-3">
                      {card.name}
                    </h4>

                    {/* Plain Human Description */}
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 min-h-[42px]">
                      {card.description}
                    </p>

                    {/* 3. Product Available Size Box (Prominently displayed) */}
                    <div className="p-3 rounded-lg bg-[#F0F6FF] border border-[#CBDDF7] mb-4 text-xs font-mono font-bold text-[#01255F] flex items-center gap-2 shadow-xs">
                      <span className="text-sm">📏</span>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-[#D7030F] block tracking-wider font-sans">
                          Available Sizes:
                        </span>
                        <span className="truncate block text-slate-900 font-extrabold text-[11px] sm:text-xs">
                          {card.availableSizes}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Bottom Footer: Standard on left + Inquire → on right */}
                  <div className="pt-3 border-t border-[#F2F7FF] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#64748B] font-semibold truncate max-w-[130px]">
                      {card.standard}
                    </span>
                    <Link
                      href={card.href}
                      className="text-xs font-black text-[#D7030F] hover:text-[#01255F] transition-colors inline-flex items-center gap-1.5 shrink-0"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
