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

// ─── 1. HEAVY MANUFACTURING SHOWCASE (HEAVY FIRST: BOX CULVERT & CIVIL) ─────

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

// ─── 2. PRODUCT CATALOG (PRECAST EXCHANGE + HEAVY CIVIL + TANKS) ───────────

export interface ProductItem {
  id: string;
  name: string;
  category: "heavy" | "drainage" | "tanks";
  categoryLabel: string;
  image: string;
  badge: string;
  shortDesc: string;
  size: string;
  standard: string;
}

const PRODUCTS: ProductItem[] = [
  // ─── HEAVY PRODUCTS FIRST ──────────────────────────────────────────
  {
    id: "box-culvert",
    name: "Heavy Precast Concrete Box Culvert",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/infrastructure.jpg",
    badge: "Heavy Infrastructure",
    shortDesc: "Giant hollow rectangular concrete tunnel sections placed beneath highways to carry streams and storm runoff.",
    size: "Spans 6'×3' up to 16'×12'",
    standard: "ASTM C1577 / AASHTO HS-25",
  },
  {
    id: "wingwall-dot",
    name: "Precast Bridge Wing Wall Panels",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/wingwall-dot.png",
    badge: "DOT Highway Standard",
    shortDesc: "Heavy concrete retaining wings installed on bridge sides to hold back steep dirt banks and stop mudslides.",
    size: "Heights: 4 ft to 16 ft",
    standard: "State DOT Approved",
  },
  {
    id: "endwall-triple",
    name: "Triple-Opening Culvert End Walls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/endwall-dot-triple.png",
    badge: "DOT Highway Standard",
    shortDesc: "Wide precast concrete headwall built to receive three parallel drainage pipes cleanly at major ditch exits.",
    size: "Multi-Pipe Monolithic Base",
    standard: "Maine DOT / HS-20",
  },
  {
    id: "endwall-corner",
    name: "Corner L-End Retaining Walls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/endwall-dot-corner.png",
    badge: "DOT Highway Standard",
    shortDesc: "90-degree corner concrete walls that support roadside slopes while letting storm drainage pipes pass through.",
    size: "L-Shape Corner Base",
    standard: "Maine DOT Standard",
  },
  {
    id: "headwall-24",
    name: "24\" Pipe Highway Headwalls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-nh-24.png",
    badge: "DOT Culvert Standard",
    shortDesc: "Solid precast end block for 24-inch drainage pipes that stops road shoulder washouts and anchors the pipe.",
    size: "Fits 24\" Culvert Pipes",
    standard: "NH DOT / HS-20",
  },
  {
    id: "headwall-12",
    name: "12\" Pipe Precast Concrete Headwalls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-nh-12.png",
    badge: "DOT Culvert Standard",
    shortDesc: "Precast concrete end wall for 12-inch drainage pipes on driveways, parking lots, and secondary roads.",
    size: "Fits 12\" Culvert Pipes",
    standard: "NH DOT / HS-20",
  },
  {
    id: "headwall-custom",
    name: "Custom Culvert Headwalls & Weirs",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-custom.png",
    badge: "Engineered Precast",
    shortDesc: "Custom-poured concrete headwalls with engineered pipe openings and water-measuring weir cutouts.",
    size: "Custom Sized to Plans",
    standard: "PE Stamped / DOT",
  },

  // ─── DRAINAGE & STORMWATER (COPIED DIRECTLY FROM PRECAST EXCHANGE) ──
  {
    id: "storm-inlet-1",
    name: "1.2m Storm Drain Inlet (600×900mm) — Case 1",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-1.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Heavy precast concrete box installed beneath street curbs to catch rushing rainwater during storms.",
    size: "600 × 900 mm · 1.2m Depth",
    standard: "ASTM C478 / Traffic Rated",
  },
  {
    id: "storm-inlet-2",
    name: "1.2m Storm Drain Inlet (600×900mm) — Case 2",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-2.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Deep street drain inlet box with multi-direction pipe knockouts for road intersections and curb gutters.",
    size: "600 × 900 mm · 1.2m Depth",
    standard: "ASTM C478 / HS-20",
  },
  {
    id: "storm-inlet-opening-1",
    name: "600×900mm Opening Storm Drain Inlet Case 1",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-case1-logo.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Precast storm inlet basin engineered for high-volume roadway water collection and easy pipe hookup.",
    size: "600 × 900 mm Top Opening",
    standard: "ASTM C478 / DOT Ready",
  },
  {
    id: "storm-inlet-opening-2",
    name: "600×900mm Opening Storm Drain Inlet Case 2",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-case2-logo.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Heavy-duty storm drain box with cast-in knockout walls for municipal roadway storm sewer tie-ins.",
    size: "600 × 900 mm Top Opening",
    standard: "ASTM C478 / Traffic",
  },
  {
    id: "cb-b01b",
    name: "B-01B Precast Road Catch Basin",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01b.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Monolithic roadside catchpit box that catches street runoff and traps gravel before water enters sewers.",
    size: "DOT Standard Road Size",
    standard: "ASTM C478 / DOT",
  },
  {
    id: "cb-b01d",
    name: "B-01D Heavy Curb Catch Basin",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01d.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Reinforced catch basin built to sit directly beneath street curbs and support heavy semi-truck wheel loads.",
    size: "Heavy Curb Inlet Profile",
    standard: "AASHTO HS-20 Traffic",
  },
  {
    id: "cb-b01e",
    name: "B-01E Deep Sump Catch Basin",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01e.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Catch basin with an extra deep bottom reservoir that traps sand, leaves, and street grime cleanly.",
    size: "Deep Sump Sediment Pit",
    standard: "ASTM C478 Municipal",
  },
  {
    id: "cb-side-inlet",
    name: "Catch Basin with Side Inlet Frame & Cover",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/catch-basin-side-inlet.webp",
    badge: "Precast Exchange Product",
    shortDesc: "All-in-one precast basin with heavy cast-iron side curb frame that swallows water rushing along street gutters.",
    size: "Monolithic Box + Iron Frame",
    standard: "DOT Curb Standard",
  },
  {
    id: "cb-cb6",
    name: "CB-6 Series Roadway Catch Basin",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/cb-6-catch-basin.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Standard road construction catchpit basin for parking lots, business parks, and residential subdivisions.",
    size: "Standard CB-6 DOT Geometry",
    standard: "ASTM C478 / HS-20",
  },
  {
    id: "manhole-1050",
    name: "Round Drainage Manhole (1050mm / 42\" Dia)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/manhole-1050mm.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Deep circular concrete access shaft allowing utility workers to inspect and maintain underground pipes safely.",
    size: "1050 mm (42\") Diameter",
    standard: "ASTM C478 / HS-20",
  },
  {
    id: "manhole-reinforced",
    name: "Reinforced Catch Basin Manhole (1050mm)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/precast-reinforced-manhole.webp",
    badge: "Precast Exchange Product",
    shortDesc: "Heavy reinforced circular manhole chamber with pipe gaskets designed for deep utility installations.",
    size: "1050 mm Reinforced Shell",
    standard: "ASTM C478 Heavy Duty",
  },
  {
    id: "cb-2ft",
    name: "2 FT Monolithic Square Catch Basin",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/catch-basin-2ft.png",
    badge: "DOT Approved",
    shortDesc: "Monolithic seamless concrete box with clean pipe knockouts for parking lots, driveways, and road sumps.",
    size: "24\"×24\" to 48\"×48\"",
    standard: "ASTM C478 / HS-20",
  },
  {
    id: "leaching-lc6",
    name: "Maine DOT LC-6 Subsurface Leaching Galleys",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/leaching-galley-lc6.png",
    badge: "Maine DOT Specification",
    shortDesc: "Underground perforated concrete chambers that naturally soak rainwater runoff into the soil beneath parking lots.",
    size: "High-Capacity LC-6 Gallery",
    standard: "Maine DOT / H-20",
  },
  {
    id: "leaching-2ft",
    name: "2 FT Underground Infiltration Galleys",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/leaching-galley.png",
    badge: "Maine DOT Specification",
    shortDesc: "Modular underground soakaway galleries that replace surface retention ponds and save usable site land.",
    size: "2 FT Modular Infiltration",
    standard: "Maine DOT / HS-20",
  },

  // ─── UNDERGROUND TANKS & SANITARY ─────────────────────────────────
  {
    id: "pump-station",
    name: "Multi-Chamber Storm Sump & Pump Station",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/catch-basin-system.png",
    badge: "Industrial Pump Station",
    shortDesc: "Dual-room concrete station: room 1 separates dirt and sediment; room 2 houses electric water pumps.",
    size: "Dual Monolithic Chambers",
    standard: "ASTM C478 Industrial",
  },
  {
    id: "grease-1000",
    name: "1,000 Gallon Commercial Kitchen Grease Trap",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/grease-trap-1000g.png",
    badge: "Commercial Plumbing",
    shortDesc: "Heavy concrete underground tank that traps restaurant grease and oil so they cannot clog city sewer lines.",
    size: "Capacity: 1,000 Gallons",
    standard: "IAPMO / UPC Compliant",
  },
  {
    id: "grease-1500",
    name: "1,500 Gallon High-Capacity Grease Trap",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/grease-trap-1500g.png",
    badge: "Commercial Plumbing",
    shortDesc: "High-volume grease interceptor with dual inspection risers for busy restaurants, hotels, and schools.",
    size: "Capacity: 1,500 Gallons",
    standard: "UPC / ASTM C1227",
  },
  {
    id: "septic-1000",
    name: "1,000 Gallon Watertight Concrete Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-1000g.png",
    badge: "Watertight Precast",
    shortDesc: "One-piece poured concrete tank that safely treats household sewage underground without leaking.",
    size: "Capacity: 1,000 Gallons",
    standard: "ASTM C1227 / NPCA",
  },
  {
    id: "septic-1500",
    name: "1,500 Gallon Monolithic Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-1500g.png",
    badge: "Watertight Precast",
    shortDesc: "One-piece concrete septic tank with internal dividing wall, 100% leak-proof to protect groundwater.",
    size: "Capacity: 1,500 Gallons",
    standard: "ASTM C1227 / NPCA",
  },
  {
    id: "septic-2000",
    name: "2,000 Gallon Commercial Precast Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-2000g.png",
    badge: "Watertight Precast",
    shortDesc: "Large commercial-grade wastewater tank built with thick walls to withstand heavy vehicle wheel traffic above.",
    size: "Capacity: 2,000 Gallons",
    standard: "ASTM C1227 / HS-20 Traffic",
  },
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "heavy" | "drainage" | "tanks">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeFilter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] py-14 sm:py-20">
      {/* ── TOP HEADER ───────────────────────────────────────────── */}
      <div className="section-container-wide mb-10 sm:mb-14">
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

      {/* ── 1. HEAVY MANUFACTURING FIRST (PHOTO-HEAVY SPOTLIGHT) ─── */}
      <div className="section-container-wide mb-14 sm:mb-18">
        <div className="bg-white border-2 border-[#01255F]/20 rounded-2xl p-5 sm:p-8 shadow-lg">
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
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7030F] block mb-2 font-mono">
                      {item.tagline}
                    </span>
                    <h4 className="text-xl font-black text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug mb-3.5">
                      {item.title}
                    </h4>

                    {/* Single Clean Sentence with high line-height */}
                    <p className="text-sm text-[#334155] leading-relaxed mb-5 font-normal">
                      {item.useFor}
                    </p>

                    {/* 2 Clean Highlights with spacious line height */}
                    <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed font-medium text-slate-800">
                          {item.highlight1}
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                        <span className="text-xs leading-relaxed font-medium text-slate-800">
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

      {/* ── 2. VISUAL PRODUCT GALLERY (MORE IMAGES, LESS TEXT) ─────── */}
      <div className="section-container-wide">
        {/* Category Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7030F] mb-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>VISUAL PRODUCT CATALOG ({filtered.length} PRODUCTS)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight">
              Precast Manufacturing Inventory
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#01255F] text-white shadow-sm"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              All ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("heavy")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "tanks"
                  ? "bg-[#01255F] text-white shadow-sm"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              Tanks &amp; Traps (6)
            </button>
          </div>
        </div>

        {/* Visual Product Grid: Compact Cards, High-Visibility Images, Short Text */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col rounded-xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-xs hover:shadow-lg transition-all duration-200"
                style={{
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                {/* Product Image Stage (Large, Clean, No AI) */}
                <div className="relative h-44 sm:h-48 w-full bg-[#F8FAFD] border-b border-[#EBF1F8] flex items-center justify-center p-3 overflow-hidden group-hover:bg-[#F2F7FF] transition-colors">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span
                      className={`text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider ${
                        item.category === "heavy"
                          ? "bg-[#FFF2F2] text-[#D7030F] border border-[#FCD2D4]"
                          : "bg-[#E8F3FF] text-[#01255F] border border-[#DCE5F0]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Compact Content */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D7030F] block mb-0.5">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-tight line-clamp-2 min-h-[34px]">
                      {item.name}
                    </h4>

                    {/* Short Human Explanation */}
                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#475569] leading-snug line-clamp-2 min-h-[30px]">
                      {item.shortDesc}
                    </p>

                    {/* Practical Size */}
                    <div className="mt-2 text-[10px] font-mono text-[#01255F] font-bold bg-[#F4F8FD] px-2 py-1 rounded truncate">
                      📏 {item.size}
                    </div>
                  </div>

                  {/* Bottom Quick Quote */}
                  <div className="mt-3 pt-2.5 border-t border-[#F2F7FF] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B] font-semibold truncate max-w-[110px]">
                      {item.standard}
                    </span>
                    <Link
                      href="/#contact"
                      className="text-[11px] font-bold text-[#D7030F] hover:text-[#01255F] transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
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
