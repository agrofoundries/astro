"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  FileText,
  SlidersHorizontal,
} from "lucide-react";

// ─── 1. HEAVY CIVIL & SPOTLIGHT PRODUCTS (HEAVY PRODUCTS FIRST) ──────────────

const HEAVY_SPOTLIGHT_PRODUCTS = [
  {
    id: "box-culvert-heavy",
    title: "Heavy Precast Concrete Box Culverts",
    subtitle: "Highway & Creek Stream Crossings · Stormwater Corridors",
    category: "heavy",
    image: "/images/infrastructure.jpg",
    badge: "★ HEAVY CIVIL INFRASTRUCTURE",
    specs: "Spans: 6 ft to 16 ft wide · Heights: 3 ft to 12 ft · AASHTO HS-20/HS-25 Traffic Rated",
    description:
      "Massive rectangular concrete tunnel blocks placed beneath roads, highways, and railroads. They allow creeks, rivers, and heavy storm water to flow naturally underneath traffic without washing out the roadway.",
    features: [
      "Engineered to carry full semi-truck and highway traffic immediately after placement",
      "Fast 1 to 2 day installation that drastically shortens road closure times",
      "Watertight rubber gasket joints that prevent dirt washouts and road sinkholes",
      "Over 100-year design life with virtually zero maintenance required",
    ],
    plainEnglishUse: "Used for highway stream crossings, large stormwater canals, underground retention tunnels, and pedestrian underpasses.",
  },
  {
    id: "bridge-crossing-system",
    title: "3-Sided Concrete Bridge Culverts",
    subtitle: "Natural Stream Bed Preservation · Short-Span Bridges",
    category: "heavy",
    image: "/images/hero-bridge.jpg",
    badge: "STATE HIGHWAY BRIDGE SYSTEM",
    specs: "Spans: 12 ft to 45 ft clear span · Heights: 4 ft to 14 ft · Precast Foundation Footings",
    description:
      "Sturdy arch and flat-top concrete bridge segments with an open natural bottom. They preserve natural river gravel and fish habitats while providing a heavy-duty road bridge on top.",
    features: [
      "Open-bottom design preserves natural stream beds and easily meets environmental rules",
      "Spans up to 45 feet for rural roads, highway bridges, and golf course crossings",
      "Rapid crane placement onto precast footings in just a few hours",
      "High-strength 6,000+ PSI concrete built to resist freezing winters and deicing salts",
    ],
    plainEnglishUse: "Perfect for creek bridges where environmental permits require leaving the natural stream floor undisturbed.",
  },
  {
    id: "wingwall-retaining-dot",
    title: "Precast Bridge Wing Walls & Retaining Panels",
    subtitle: "Bridge Slope Retaining Walls · Erosion Prevention",
    category: "heavy",
    image: "/images/products/wingwall-dot.png",
    badge: "DOT APPROVED BRIDGE WALL",
    specs: "Heights: 4 ft to 16 ft · Thickness: 8\" to 14\" · Straight or 30°/45° Flared Wings",
    description:
      "Heavy vertical concrete retaining panels installed on the sides of bridge culverts. They hold back steep dirt banks, prevent soil landslides, and guide floodwaters smoothly into the culvert opening.",
    features: [
      "Locks securely onto box culverts and bridge footings for total earth retention",
      "Stops dirt slopes from eroding during heavy 100-year rainstorms and flash floods",
      "Precast with lifting anchors so crane crews can set each wall section in minutes",
      "Meets Department of Transportation (DOT) highway standards across all 50 states",
    ],
    plainEnglishUse: "Installed at both ends of culvert bridges to keep dirt from sliding into the water channel.",
  },
];

// ─── 2. COMPLETE PRODUCT CATALOG (COPIED FROM PRECAST EXCHANGE + HEAVY CIVIL) ──

export interface ProductItem {
  id: string;
  name: string;
  category: "heavy" | "drainage" | "tanks";
  categoryLabel: string;
  image: string;
  sourceBadge: string;
  simpleDescription: string;
  practicalSize: string;
  standard: string;
  bestFor: string;
}

const ALL_PRODUCTS: ProductItem[] = [
  // ─── HEAVY CIVIL FIRST ──────────────────────────────────────────
  {
    id: "box-culvert",
    name: "Heavy Precast Concrete Box Culvert Sections",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/infrastructure.jpg",
    sourceBadge: "Heavy Infrastructure",
    simpleDescription:
      "Massive reinforced concrete tunnels installed under highways to let floodwaters and streams pass underneath safely.",
    practicalSize: "Sizes from 6'×3' up to 16'×12' · Lengths: 6' to 8' per section",
    standard: "ASTM C1577 / AASHTO HS-25",
    bestFor: "Highway crossings, stream bridges, and large stormwater tunnels",
  },
  {
    id: "wingwall-retaining",
    name: "Precast Bridge Wing Walls & Retaining Panels",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/wingwall-dot.png",
    sourceBadge: "DOT Highway Standard",
    simpleDescription:
      "Heavy-duty concrete retaining walls that hold back dirt slopes around bridge openings to stop mudslides and erosion.",
    practicalSize: "Heights from 4 ft to 16 ft · Flared 30° and 45° angles",
    standard: "State DOT Specifications",
    bestFor: "Bridge abutments, culvert outfalls, and steep roadside banks",
  },
  {
    id: "triple-endwall",
    name: "Triple-Opening Culvert End Walls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/endwall-dot-triple.png",
    sourceBadge: "DOT Highway Standard",
    simpleDescription:
      "A wide concrete wall designed to receive three parallel drainage pipes at once, keeping all three pipes locked and stable.",
    practicalSize: "Multi-pipe configuration · Heavy monolithic precast base",
    standard: "Maine DOT / AASHTO HS-20",
    bestFor: "Large road ditches and major stormwater outflow channels",
  },
  {
    id: "corner-endwall",
    name: "Corner L-Configuration Retaining End Walls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/endwall-dot-corner.png",
    sourceBadge: "DOT Highway Standard",
    simpleDescription:
      "L-shaped concrete retaining walls that wrap around road corners to hold back soil while allowing drainage pipes to discharge.",
    practicalSize: "Heavy 90-degree corner geometry · Monolithic footing",
    standard: "Maine DOT Standard",
    bestFor: "Road intersections, property boundary ditches, and culvert exits",
  },
  {
    id: "headwall-nh-24",
    name: "24\" Pipe Precast Concrete Headwalls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-nh-24.png",
    sourceBadge: "DOT Standard Culvert",
    simpleDescription:
      "Heavy concrete end blocks placed around 24-inch drainage pipes to anchor the pipe in place and prevent road soil washouts.",
    practicalSize: "Engineered for 24\" pipes · Heavy bottom footing block",
    standard: "NH DOT Standard / HS-20",
    bestFor: "Highway roadside ditches, culvert inlets, and driveway drainage",
  },
  {
    id: "headwall-nh-12",
    name: "12\" Pipe Precast Concrete Headwalls",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-nh-12.png",
    sourceBadge: "DOT Standard Culvert",
    simpleDescription:
      "Solid concrete headwall unit for 12-inch drainage pipes that stops driveway erosion and secures pipe ends cleanly.",
    practicalSize: "Engineered for 12\" pipes · Precision knockout pipe opening",
    standard: "NH DOT Standard / HS-20",
    bestFor: "Driveway crossings, parking lot drainage, and secondary roads",
  },
  {
    id: "headwall-custom",
    name: "Custom Sized Culvert Headwalls & V-Notch Weirs",
    category: "heavy",
    categoryLabel: "Heavy Civil Infrastructure",
    image: "/images/products/headwall-custom.png",
    sourceBadge: "Engineered Custom Precast",
    simpleDescription:
      "Custom-cast concrete headwalls with special pipe angles or water-measuring notches built according to project civil plans.",
    practicalSize: "Custom dimensions built to engineering drawing specifications",
    standard: "PE Stamped / DOT Approved",
    bestFor: "Complex pipe intersections, detention pond outflows, and retention dams",
  },

  // ─── DRAINAGE & STORMWATER (COPIED FROM PRECAST EXCHANGE) ─────────
  {
    id: "storm-inlet-case1",
    name: "Highway Storm Drain Inlet (600 × 900 mm — Case 1)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-1.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "A deep heavy concrete drain box installed beneath road curbs to catch rainwater from streets during heavy downpours.",
    practicalSize: "Opening: 600 × 900 mm (24\"×36\") · Depth: 1.2 meters (4 ft)",
    standard: "ASTM C478 / Traffic Rated",
    bestFor: "City avenues, highway gutters, and commercial parking areas",
  },
  {
    id: "storm-inlet-case2",
    name: "Highway Storm Drain Inlet (600 × 900 mm — Case 2)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/storm-drain-inlet-2.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "Precast concrete street drain box with knockouts on multiple sides so connecting pipes can enter at different road angles.",
    practicalSize: "Opening: 600 × 900 mm · High-strength monolithic walls",
    standard: "ASTM C478 / AASHTO HS-20",
    bestFor: "Street corners, intersection drainage, and highway curbs",
  },
  {
    id: "catch-basin-b01b",
    name: "Standard Roadside Catch Basin (B-01B Series)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01b.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "The classic rectangular concrete catch basin installed beneath iron grates along streets to collect water and trap dirt.",
    practicalSize: "Standard DOT road dimensions with pre-formed pipe entry holes",
    standard: "ASTM C478 / DOT Approved",
    bestFor: "Subdivision roadways, commercial parking lots, and municipal streets",
  },
  {
    id: "catch-basin-b01d",
    name: "Heavy Curb Catch Basin (B-01D Series)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01d.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "Reinforced concrete catchpit box engineered to sit tight against concrete street curbs and support heavy traffic wheels.",
    practicalSize: "Heavy-duty reinforced walls · Curb inlet frame ready",
    standard: "AASHTO HS-20 Traffic Rated",
    bestFor: "Bus routes, shopping plazas, and industrial park roadways",
  },
  {
    id: "catch-basin-b01e",
    name: "Deep Sump Catch Basin (B-01E Series)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/b-01e.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "A deeper concrete basin with an extra sediment pit at the bottom so sand and road gravel settle out instead of clogging city sewer pipes.",
    practicalSize: "Extra deep bottom sump area for dirt and sediment collection",
    standard: "ASTM C478 / Municipal Standard",
    bestFor: "Eco-sensitive storm networks, industrial facilities, and parking decks",
  },
  {
    id: "catch-basin-side-inlet",
    name: "Catch Basin with Side Inlet Frame & Cover",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/catch-basin-side-inlet.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "Complete precast drain unit with integrated side-opening steel frame that swallows rushing gutter water directly from the curb face.",
    practicalSize: "Monolithic concrete box + cast iron side inlet grate",
    standard: "DOT Curb Inlet Standard",
    bestFor: "Steep hill roads, highway shoulders, and major city intersections",
  },
  {
    id: "manhole-1050mm",
    name: "Deep Round Drainage Manhole (1050 mm / 42\" Diameter)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/manhole-1050mm.webp",
    sourceBadge: "Precast Exchange Catalog",
    simpleDescription:
      "A strong circular concrete access chamber that lets municipal workers inspect, clean, and connect underground drainage pipes safely.",
    practicalSize: "Diameter: 1050 mm (approx. 42 inches) · Stackable riser sections",
    standard: "ASTM C478 / AASHTO HS-20",
    bestFor: "Main sewer lines, pipe junctions, and deep street utility access",
  },
  {
    id: "catch-basin-2ft",
    name: "2 FT Monolithic Square Catch Basin (Catchpit)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/catch-basin-2ft.png",
    sourceBadge: "Heavy-Duty Precast",
    simpleDescription:
      "Square concrete basin with seamless leak-proof base and pre-cast pipe knockouts for rapid connection to 4\" to 12\" drain pipes.",
    practicalSize: "Sizes: 24\"×24\" to 48\"×48\" · Depths up to 12 feet",
    standard: "ASTM C478 / HS-20",
    bestFor: "Commercial driveways, apartment complexes, and warehouse yards",
  },
  {
    id: "leaching-galley-lc6",
    name: "Subsurface Leaching Galleys (Maine DOT LC-6)",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/leaching-galley-lc6.png",
    sourceBadge: "Maine DOT Specification",
    simpleDescription:
      "Underground open-bottom concrete chambers with perforated side holes that soak huge volumes of storm rainwater naturally into the ground.",
    practicalSize: "High-capacity LC-6 Maine DOT geometry · Heavy traffic roof",
    standard: "Maine DOT Standard / H-20",
    bestFor: "Underground parking lot retention, aquifer recharge, and flood control",
  },
  {
    id: "leaching-galley-2ft",
    name: "2 FT Subsurface Rainwater Infiltration Galleys",
    category: "drainage",
    categoryLabel: "Road & Storm Drainage",
    image: "/images/products/leaching-galley.png",
    sourceBadge: "Maine DOT Specification",
    simpleDescription:
      "Compact underground concrete soakaway chambers that eliminate ugly surface retention ponds so land above can be paved as parking.",
    practicalSize: "2 ft tall modular units · Interlocks end-to-end in continuous rows",
    standard: "Maine DOT / HS-20 Traffic",
    bestFor: "Retail shopping centers, office parks, and tight commercial sites",
  },

  // ─── UNDERGROUND TANKS & SANITARY UTILITIES ───────────────────────
  {
    id: "pump-station-system",
    name: "Multi-Chamber Stormwater Pump & Sump Station",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/catch-basin-system.png",
    sourceBadge: "Dual-Chamber Station",
    simpleDescription:
      "An engineered double-room concrete vault that separates heavy dirt in room 1 and houses powerful electric water pumps in room 2.",
    practicalSize: "Dual monolithic chambers · 5,000+ PSI air-entrained concrete",
    standard: "ASTM C478 / Heavy Industrial",
    bestFor: "Lift stations, flood-prone commercial basements, and highway sumps",
  },
  {
    id: "grease-trap-1000g",
    name: "1,000 Gallon Commercial Kitchen Grease Interceptor",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/grease-trap-1000g.png",
    sourceBadge: "Commercial Plumbing",
    simpleDescription:
      "Heavy underground concrete tank that traps restaurant oils, animal fats, and cooking grease so they cannot clog city sewer lines.",
    practicalSize: "Capacity: 1,000 Gallons · Dual interior separation compartments",
    standard: "IAPMO / UPC Compliant",
    bestFor: "Restaurants, hotel dining facilities, schools, and food processing plants",
  },
  {
    id: "grease-trap-1500g",
    name: "1,500 Gallon High-Capacity Grease Trap",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/grease-trap-1500g.png",
    sourceBadge: "Commercial Plumbing",
    simpleDescription:
      "Extra-large concrete grease interceptor for high-volume commercial kitchens with dual inspection risers for easy pump-out trucks.",
    practicalSize: "Capacity: 1,500 Gallons · Watertight gasket seals · Traffic covers",
    standard: "IAPMO / UPC / ASTM C1227",
    bestFor: "Hospital cafeterias, large supermarket bakeries, and sports arenas",
  },
  {
    id: "septic-tank-1000g",
    name: "1,000 Gallon Watertight Concrete Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-1000g.png",
    sourceBadge: "Watertight Precast",
    simpleDescription:
      "Strong monolithic precast concrete tank that safely collects and treats household sewage water underground.",
    practicalSize: "Capacity: 1,000 Gallons · Single or two-compartment options",
    standard: "ASTM C1227 / NPCA Certified",
    bestFor: "Single-family homes, vacation cabins, and small rural offices",
  },
  {
    id: "septic-tank-1500g",
    name: "1,500 Gallon Monolithic Precast Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-1500g.png",
    sourceBadge: "Watertight Precast",
    simpleDescription:
      "One-piece poured concrete septic tank with internal baffle wall, guaranteed leak-proof to protect groundwater and drinking wells.",
    practicalSize: "Capacity: 1,500 Gallons · Reinforced concrete roof slab",
    standard: "ASTM C1227 / NPCA Certified",
    bestFor: "Large residential homes, rural medical clinics, and duplex buildings",
  },
  {
    id: "septic-tank-2000g",
    name: "2,000 Gallon Heavy Commercial Septic Tank",
    category: "tanks",
    categoryLabel: "Underground Tanks & Utilities",
    image: "/images/products/septic-tank-2000g.png",
    sourceBadge: "Watertight Precast",
    simpleDescription:
      "Heavy commercial-grade wastewater tank engineered with thick concrete walls to handle heavy vehicle traffic above if installed under driveways.",
    practicalSize: "Capacity: 2,000 Gallons · HS-20 wheel load certified options",
    standard: "ASTM C1227 / AASHTO HS-20",
    bestFor: "Commercial rest stops, RV campgrounds, rural schools, and small hotels",
  },
];

// ─── 3. MAIN COMPONENT ────────────────────────────────────────────────────────

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "heavy" | "drainage" | "tanks">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProducts =
    activeFilter === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="products"
      className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] py-16 sm:py-24"
    >
      {/* ── SECTION HEADER ────────────────────────────────────────── */}
      <div className="section-container-wide mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DCE5F0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7030F] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#01255F] font-mono">
                Real Precast Products · DOT Approved &amp; Certified
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#01255F] tracking-tight uppercase">
              Heavy Infrastructure <span className="text-[#D7030F]">&amp; Precast Products</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#334155] max-w-3xl leading-relaxed">
              We build heavy-duty precast concrete products for contractors, civil engineers, and municipalities.
              From massive highway box culverts and bridge walls to street storm drains, catch basins, and underground water tanks — explained in simple, everyday language.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md group cursor-pointer"
            >
              <span>Get a Fast Project Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:6314581111"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border-2 border-[#01255F] text-[#01255F] hover:bg-[#01255F] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D7030F]" />
              <span>Call (631) 458-1111</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── 1. HEAVY PRODUCTS FIRST: LARGE SPOTLIGHT CARDS ────────── */}
      <div className="section-container-wide mb-16 sm:mb-20">
        <div className="bg-white border-2 border-[#01255F]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Spotlight Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#DCE5F0] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-1">
                <span className="w-4 h-0.5 bg-[#D7030F]" />
                <span>HEAVY PRODUCTS FIRST · TOP CIVIL SPOTLIGHT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase tracking-tight">
                Heavy Highway Box Culverts &amp; Bridge Systems
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Our largest, heaviest precast structures designed to carry loaded semi-trucks, cross active rivers, and stabilize highway slopes.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFF2F2] border border-[#FCD2D4] text-[11px] font-bold text-[#D7030F] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#D7030F]" />
                <span>AASHTO HS-25 &amp; DOT Certified</span>
              </span>
            </div>
          </div>

          {/* 3 Heavy Product Spotlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {HEAVY_SPOTLIGHT_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col rounded-xl overflow-hidden bg-white border-2 border-[#DCE5F0] hover:border-[#01255F] shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Photo Stage */}
                <div className="relative h-64 sm:h-72 w-full bg-[#06182E] overflow-hidden flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/90 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded bg-[#D7030F] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Plain English "What it does" bottom overlay */}
                  <div className="absolute bottom-3 inset-x-3 z-10">
                    <p className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-xs p-2 rounded border border-white/20 line-clamp-2">
                      💡 {prod.plainEnglishUse}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7030F] block mb-1">
                      {prod.subtitle}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-[#01255F] leading-snug mb-2 group-hover:text-[#D7030F] transition-colors min-h-[52px]">
                      {prod.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-4 min-h-[60px]">
                      {prod.description}
                    </p>

                    {/* Everyday Highlights in Clear English */}
                    <div className="space-y-2 mb-5 pb-5 border-b border-slate-100 min-h-[140px]">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                          <span className="text-xs leading-snug font-medium text-slate-800">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Simple Specs Box */}
                    <div className="p-3 rounded-lg bg-[#F2F7FF] border border-[#DCE5F0] mb-4 text-[11px] text-[#01255F] font-mono font-semibold">
                      📏 {prod.specs}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[#D7030F] hover:bg-[#B31217] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Inquire This Product</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#01255F] hover:text-[#D7030F] transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ask Sizing</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. FULL PRODUCT CATALOG BROWSER WITH FILTER BUTTONS ─────── */}
      <div className="section-container-wide mb-14">
        {/* Title + Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7030F] mb-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>BROWSE ALL PRODUCTS · PLAIN HUMAN ENGLISH</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase tracking-tight">
              Complete Precast Product Line ({filteredProducts.length} Items)
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#01255F] text-white shadow-md"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              All Products ({ALL_PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("heavy")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "heavy"
                  ? "bg-[#D7030F] text-white shadow-md"
                  : "bg-white text-[#D7030F] border border-[#FCD2D4] hover:bg-[#FFF2F2]"
              }`}
            >
              ★ Heavy Civil &amp; Bridges (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("drainage")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "drainage"
                  ? "bg-[#01255F] text-white shadow-md"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              Road &amp; Storm Drains (9)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("tanks")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "tanks"
                  ? "bg-[#01255F] text-white shadow-md"
                  : "bg-white text-[#01255F] border border-[#DCE5F0] hover:border-[#01255F]"
              }`}
            >
              Underground Tanks (6)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex flex-col rounded-xl overflow-hidden bg-white border border-[#DCE5F0] hover:border-[#01255F] shadow-xs hover:shadow-xl transition-all duration-200"
                style={{
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider ${
                      item.category === "heavy"
                        ? "bg-[#FFF2F2] text-[#D7030F] border border-[#FCD2D4]"
                        : "bg-[#E8F3FF] text-[#01255F]"
                    }`}
                  >
                    {item.sourceBadge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#64748B]">
                    {item.standard}
                  </span>
                </div>

                {/* Real Product Image Stage (No AI) */}
                <div className="relative mx-3 my-2 rounded-lg overflow-hidden h-44 bg-[#F8FAFD] border border-[#EBF1F8] flex items-center justify-center p-3 group-hover:bg-[#F2F7FF] transition-colors">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Title & Plain-English Description */}
                <div className="px-4 py-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D7030F] block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug min-h-[44px]">
                      {item.name}
                    </h4>

                    {/* Plain Human English Explanation */}
                    <p className="mt-2 text-xs text-[#475569] leading-relaxed min-h-[50px]">
                      {item.simpleDescription}
                    </p>

                    {/* Best For Tag */}
                    <div className="mt-3 p-2 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#334155] leading-tight font-medium">
                      <span className="font-bold text-[#01255F]">Best For: </span>
                      {item.bestFor}
                    </div>

                    {/* Simple Practical Size */}
                    <p className="mt-2 text-[10px] font-mono text-[#64748B] font-semibold">
                      📏 {item.practicalSize}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-4 pt-3 border-t border-[#F2F7FF] flex items-center justify-between">
                    <Link
                      href="/#contact"
                      className="text-xs font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Inquire / Get Price</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D7030F] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 3. ESTIMATING DESK BANNER ───────────────────────────────── */}
      <div className="section-container-wide">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-8 sm:px-12 py-8 sm:py-10 rounded-2xl bg-[#06182E] bg-gradient-to-r from-[#06182E] via-[#0B2545] to-[#01255F] text-white border-t-4 border-[#D7030F] shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-2">
              <span className="w-3 h-0.5 bg-[#D7030F]" />
              <span>PRECAST PRO ESTIMATING &amp; DRAWINGS DESK</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug uppercase">
              Need Pricing for Box Culverts, Catch Basins, or Tanks?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Send us your project plan sheets or item counts. Our team will review your drawings, calculate freight, and return a clear, competitive precast quote in simple, human-friendly terms.
            </p>
          </div>

          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#D7030F] hover:bg-[#B31217] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-4 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-200 group whitespace-nowrap cursor-pointer"
          >
            <span>Send Plans for Free Takeoff</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
