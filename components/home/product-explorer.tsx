"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  X,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ArrowRight,
  Download,
  ChevronDown,
  CheckCircle2,
  Scale,
  Eye,
  Filter,
  ChevronRight,
  Zap,
  Shield,
  Layers,
  Building2,
  Droplets,
  Ruler,
  Factory,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  applications: string[];
  finishes: string[];
  tags: string[];
  badge?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  strength: string;
  maxSpan: string;
  fireRating: string;
  thermalValue?: string;
  thickness?: string;
  standards: string;
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  csiSection: string;
  featured?: boolean;
}

// ─── Catalog Data ─────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: "insulated-wall-panels",
    name: "Insulated Sandwich Wall Panels",
    subtitle: "Architectural & Structural Envelope System",
    category: "Wall Systems",
    applications: ["Commercial", "Industrial", "Cold Storage", "Distribution"],
    finishes: ["Smooth", "Sandblast", "Acid-Etch", "Thin Brick"],
    tags: ["R-32", "4-Hour Fire", "Load-Bearing"],
    badge: "Most Specified",
    icon: Layers,
    strength: "6,000 – 8,500 PSI",
    maxSpan: "Up to 48 ft. height",
    fireRating: "Up to 4 Hours",
    thermalValue: "R-14 to R-32+",
    thickness: '6" – 14"',
    standards: "ACI 318 / PCI MNL-120",
    description:
      "Factory-engineered insulated concrete sandwich panels delivering structural load-bearing capacity, continuous insulation, and architectural finish in a single installed element. Non-conductive composite ties prevent thermal bridging.",
    highlights: [
      "Factory-installed electrical conduit & window blockouts",
      "Non-conductive composite thermal ties",
      "Custom reveals, returns, and brick ledges",
      "ASTM C1116 fiber-reinforced options available",
    ],
    specs: [
      { label: "Panel Height", value: "Up to 48 ft." },
      { label: "Compressive Strength", value: "6,000 – 8,500 PSI" },
      { label: "Thermal Value", value: "R-14 to R-32+" },
      { label: "Fire Rating", value: "Up to 4 Hours" },
      { label: "Thickness", value: '6" – 14"' },
      { label: "Design Code", value: "ACI 318 / PCI MNL-120" },
    ],
    csiSection: "03 45 00",
    featured: true,
  },
  {
    id: "prestressed-double-tees",
    name: "Prestressed Double Tee Slabs",
    subtitle: "Long-Span Structural Deck System",
    category: "Structural",
    applications: ["Parking Structures", "Warehouse", "Industrial", "Retail"],
    finishes: ["Smooth", "Exposed Aggregate", "Painted"],
    tags: ["75+ ft Span", "Prestressed", "Parking"],
    badge: "Heavy Span",
    icon: Building2,
    strength: "8,000 – 10,000 PSI",
    maxSpan: "75+ ft.",
    fireRating: "2 Hours",
    thickness: '24" – 32" depth',
    standards: "ACI 318 / PCI MNL-120",
    description:
      "Prestressed double tee slabs are the industry workhorse for long-span structural deck applications. Available in standard 10DT and 12DT widths, these members span distances impossible with conventional construction.",
    highlights: [
      "0.5\" & 0.6\" low-relaxation prestress strand",
      "Carbon-fiber shear reinforcement options",
      "Inverted tee ledger connection systems",
      "Stainless or epoxy-coated rebar upgrades",
    ],
    specs: [
      { label: "Clear Span", value: "75+ ft." },
      { label: "Section Width", value: "10 ft. & 12 ft." },
      { label: "Concrete Strength", value: "8,000 – 10,000 PSI" },
      { label: "Strand Type", value: '0.5" & 0.6" Low-Relax' },
      { label: "Depth Range", value: '24" – 32"' },
      { label: "Design Code", value: "PCI MNL-120" },
    ],
    csiSection: "03 41 33",
    featured: true,
  },
  {
    id: "hollow-core-slabs",
    name: "Hollow-Core Prestressed Slabs",
    subtitle: "Floor & Roof Deck Spanning System",
    category: "Structural",
    applications: ["Residential", "Hotels", "Offices", "Parking"],
    finishes: ["Smooth", "Topping Slab Ready"],
    tags: ["40 ft Span", "Sound Rated", "Lightweight"],
    icon: Ruler,
    strength: "5,000 – 7,000 PSI",
    maxSpan: "Up to 40 ft.",
    fireRating: "Up to 3 Hours",
    thickness: '4" – 12"',
    standards: "ASTM C1214 / PCI MNL-120",
    description:
      "Extruded or wet-cast hollow-core slabs deliver exceptional span-to-depth ratios, integrated sound attenuation, and a continuous fire-rated deck system. Widely used for multi-story residential and hotel construction.",
    highlights: [
      "Uniform factory-extruded void geometry",
      "Low weight enabling smaller columns & footings",
      "Field-cut openings for MEP penetrations",
      "Self-spanning without shoring during erection",
    ],
    specs: [
      { label: "Span Range", value: "Up to 40 ft." },
      { label: "Slab Depths", value: '4", 6", 8", 10", 12"' },
      { label: "Concrete Strength", value: "5,000 – 7,000 PSI" },
      { label: "Fire Rating", value: "Up to 3 Hours" },
      { label: "STC Rating", value: "50+ (with topping)" },
      { label: "Design Code", value: "ASTM C1214" },
    ],
    csiSection: "03 41 16",
  },
  {
    id: "precast-columns-beams",
    name: "Precast Columns & Beams",
    subtitle: "Structural Frame Components",
    category: "Structural",
    applications: ["Parking", "Industrial", "Commercial", "Infrastructure"],
    finishes: ["Smooth", "Sandblast", "Chamfered"],
    tags: ["Custom Section", "Corbels", "Moment Frame"],
    icon: Factory,
    strength: "6,000 – 10,000 PSI",
    maxSpan: "Custom spans",
    fireRating: "Up to 4 Hours",
    standards: "ACI 318 / AISC",
    description:
      "Factory-cast columns and beams allow a complete precast moment frame system with field-bolted or grouted connections. Cast-in corbels, haunch inserts, and shear keys are embedded during production.",
    highlights: [
      "Square, rectangular, and L-shaped column profiles",
      "Inverted tee & ledger beam cross-sections",
      "Cast-in anchor rods, plates & connection hardware",
      "PE-stamped erection bracing engineering included",
    ],
    specs: [
      { label: "Column Sizes", value: '12×12" to 36×36"' },
      { label: "Beam Depths", value: '24" – 60"' },
      { label: "Concrete Strength", value: "6,000 – 10,000 PSI" },
      { label: "Fire Rating", value: "Up to 4 Hours" },
      { label: "Corbel Capacity", value: "Up to 250 kip" },
      { label: "Design Code", value: "ACI 318 / AISC" },
    ],
    csiSection: "03 41 00",
  },
  {
    id: "precast-manholes",
    name: "Precast Concrete Manholes",
    subtitle: "ASTM C478 Utility Structures",
    category: "Utility",
    applications: ["Municipal", "Water & Wastewater", "DOT", "Energy"],
    finishes: ["Standard Gray", "Polyurea Liner", "Coal Tar"],
    tags: ["ASTM C478", "Watertight", "HS-25"],
    badge: "DOT Approved",
    icon: Droplets,
    strength: "5,000 – 6,500 PSI",
    maxSpan: '48" – 120" dia.',
    fireRating: "N/A",
    standards: "ASTM C478 / AASHTO HS-25",
    description:
      "Monolithic precast concrete manhole risers, cones, and grade rings engineered to ASTM C478 for sanitary sewer, storm drainage, and utility vault applications. Tongue-and-groove joints with ASTM C443 rubber gaskets ensure watertight performance.",
    highlights: [
      "ASTM C443 & C990 watertight joint gasket systems",
      "Integrated Kor-N-Seal pipe boot connectors",
      "Polypropylene or aluminum manhole frames/covers",
      "Polyurea or coal tar epoxy interior protective lining",
    ],
    specs: [
      { label: "Diameters", value: '48", 60", 72", 96", 120"' },
      { label: "Concrete Strength", value: "5,000 – 6,500 PSI" },
      { label: "Traffic Rating", value: "AASHTO HS-20 & HS-25" },
      { label: "Joint Type", value: "ASTM C443 Watertight" },
      { label: "Coating Options", value: "Polyurea / Coal Tar" },
      { label: "Design Code", value: "ASTM C478" },
    ],
    csiSection: "33 05 13",
    featured: true,
  },
  {
    id: "box-culverts",
    name: "Precast Box Culverts",
    subtitle: "ASTM C1577 Drainage & Roadway Structures",
    category: "Infrastructure",
    applications: ["Highway", "DOT", "Stormwater", "Rail"],
    finishes: ["Standard Gray"],
    tags: ["DOT Certified", "ASTM C1577", "Rapid Install"],
    badge: "DOT Certified",
    icon: Building2,
    strength: "5,000 – 7,000 PSI",
    maxSpan: "6×3 ft to 16×12 ft",
    fireRating: "N/A",
    standards: "ASTM C1577 / AASHTO LRFD",
    description:
      "Monolithic precast box culverts manufactured per ASTM C1577 for accelerated roadway installation. DOT-approved single-cell and multi-cell configurations allow rapid weekend installation sequences.",
    highlights: [
      "Single-piece monolithic construction — no joints mid-section",
      "Tongue-and-groove lifting ends with gasket slots",
      "Headwalls, wingwalls, and aprons available to match",
      "Fill heights from 0 to 30+ ft. engineered cover",
    ],
    specs: [
      { label: "Box Sizes", value: "6×3 ft to 16×12 ft" },
      { label: "Concrete Strength", value: "5,000 – 7,000 PSI" },
      { label: "Fill Heights", value: "0 to 30+ ft." },
      { label: "Design Life", value: "100+ Years" },
      { label: "Agency Approval", value: "State DOT Approved" },
      { label: "Design Code", value: "ASTM C1577" },
    ],
    csiSection: "33 42 13",
  },
  {
    id: "retaining-walls",
    name: "MSE & Precast Retaining Walls",
    subtitle: "Earth Retention & Slope Stabilization",
    category: "Infrastructure",
    applications: ["Highway", "Commercial", "Industrial", "DOT"],
    finishes: ["Smooth", "Textured", "Stone Finish", "Exposed Aggregate"],
    tags: ["MSE System", "DOT Approved", "Modular"],
    icon: Shield,
    strength: "5,000 – 7,000 PSI",
    maxSpan: "Up to 50 ft. wall height",
    fireRating: "N/A",
    standards: "AASHTO LRFD / FHWA",
    description:
      "Mechanically stabilized earth (MSE) precast panel facing systems and gravity retaining wall blocks for highway widening, grade separation, and commercial site development.",
    highlights: [
      "Architectural panel facing with custom texture options",
      "Geosynthetic or steel reinforcement geogrid design",
      "Cope-cut and custom connection hardware available",
      "FHWA/NHI certified MSE design methodology",
    ],
    specs: [
      { label: "Wall Heights", value: "Up to 50 ft." },
      { label: "Panel Sizes", value: "6×6 ft., 6×12 ft." },
      { label: "Concrete Strength", value: "5,000 – 7,000 PSI" },
      { label: "Reinforcement", value: "Geosynthetic / Steel Strip" },
      { label: "Batter", value: "0° – 6° adjustable" },
      { label: "Design Code", value: "AASHTO LRFD / FHWA" },
    ],
    csiSection: "32 32 23",
  },
  {
    id: "utility-vaults",
    name: "Electrical & Utility Vaults",
    subtitle: "Precast Access Structures for Critical Infrastructure",
    category: "Utility",
    applications: ["Energy", "Telecom", "Municipal", "Industrial"],
    finishes: ["Standard Gray", "Polyurea Liner"],
    tags: ["Custom Sizing", "HS-20", "Aluminum Access"],
    icon: Zap,
    strength: "5,000 – 6,000 PSI",
    maxSpan: "Custom up to 20×12 ft",
    fireRating: "N/A",
    standards: "ASTM C858 / NEMA",
    description:
      "Heavy-duty precast electric and telecommunications vaults sized to NEMA and utility-specific requirements. Factory-installed conduit knockouts, grounding bars, and aluminum flush-mounted hatches reduce field installation to simple crane placement.",
    highlights: [
      "Factory-drilled conduit entry knockouts to NEMA spec",
      "Cast-in ground rod and cable support inserts",
      "Bilco or custom aluminum hatch frames and doors",
      "Dual stacked vault configurations for metering rooms",
    ],
    specs: [
      { label: "Standard Sizes", value: "4×4 ft. to 20×12 ft." },
      { label: "Concrete Strength", value: "5,000 – 6,000 PSI" },
      { label: "Traffic Rating", value: "AASHTO HS-20" },
      { label: "Access Options", value: "Aluminum / Steel Hatch" },
      { label: "Conduit Size", value: '2" – 6" knockouts' },
      { label: "Design Code", value: "ASTM C858 / NEMA" },
    ],
    csiSection: "33 05 17",
  },
];

const CATEGORIES = [
  "All Products",
  "Structural",
  "Wall Systems",
  "Utility",
  "Infrastructure",
];

const APPLICATIONS = [
  "Commercial",
  "Industrial",
  "Municipal",
  "Highway",
  "Parking",
  "Residential",
  "Energy",
  "DOT",
  "Water & Wastewater",
];

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  view,
  isComparing,
  compareDisabled,
  onToggleCompare,
  onQuickView,
}: {
  product: Product;
  view: "grid" | "list";
  isComparing: boolean;
  compareDisabled: boolean;
  onToggleCompare: (p: Product) => void;
  onQuickView: (p: Product) => void;
}) {
  const Icon = product.icon;

  return (
    <article
      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_36px_rgba(1,37,95,0.13)] hover:-translate-y-0.5 ${
        isComparing
          ? "border-2 border-[#014088] ring-2 ring-[#014088]/15"
          : "border border-[#DCE5F0] hover:border-[#014088]/40"
      } ${view === "grid" ? "flex flex-col" : "flex flex-row items-stretch"}`}
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#0E96E1] text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
          {product.badge}
        </span>
      )}

      {/* Compare toggle */}
      <button
        onClick={() => onToggleCompare(product)}
        disabled={compareDisabled && !isComparing}
        aria-label={isComparing ? "Remove from compare" : "Add to compare"}
        className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full border text-[10px] font-bold transition-all duration-200 ${
          isComparing
            ? "bg-[#014088] border-[#014088] text-white"
            : compareDisabled
            ? "bg-white border-[#DCE5F0] text-[#CBD5E1] cursor-not-allowed"
            : "bg-white border-[#DCE5F0] text-[#64748B] hover:border-[#014088] hover:text-[#014088]"
        }`}
      >
        <Scale className="w-3 h-3" />
        {isComparing ? "Added" : "Compare"}
      </button>

      {/* Visual area */}
      <div
        className={`relative bg-[#F0F6FC] flex items-center justify-center overflow-hidden ${
          view === "grid" ? "h-44" : "w-48 shrink-0"
        }`}
      >
        <Icon className="w-16 h-16 text-[#014088]/12 group-hover:text-[#014088]/22 transition-all duration-500 group-hover:scale-110" />

        {/* CSI tag */}
        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[10px] font-mono font-bold text-[#014088] border border-[#DCE5F0] shadow-sm">
          CSI {product.csiSection}
        </span>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-[#014088]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="flex items-center gap-2 bg-white text-[#014088] text-xs font-bold px-4 py-2 rounded-full shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            Full Specs
          </button>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category + tags */}
        <div className="flex items-center gap-1.5 flex-wrap mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#014088] bg-[#F2F7FF] border border-[#DCE5F0] px-2 py-0.5 rounded-md">
            {product.category}
          </span>
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-[#64748B] bg-slate-100 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-extrabold text-[#014088] leading-snug mb-0.5">
          {product.name}
        </h3>
        <p className="text-[11px] text-[#64748B] mb-3 leading-relaxed">
          {product.subtitle}
        </p>

        {/* Spec mini-grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs.slice(0, 4).map((spec) => (
            <div
              key={spec.label}
              className="bg-[#F8F9FB] rounded-lg px-2.5 py-1.5 border border-[#F0F4F8]"
            >
              <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider leading-none mb-0.5">
                {spec.label}
              </div>
              <div className="text-[11px] font-bold text-[#014088] leading-tight">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* List view shows description */}
        {view === "list" && (
          <p className="text-[11px] text-[#475569] leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* CTA row */}
        <div className="mt-auto pt-3 border-t border-[#F0F4F8] flex items-center gap-2">
          <Link
            href={`/quote?product=${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-colors"
          >
            <ArrowRight className="w-3 h-3" />
            Get Quote
          </Link>
          <button
            onClick={() => onQuickView(product)}
            className="inline-flex items-center gap-1 border border-[#DCE5F0] hover:border-[#014088] text-[#64748B] hover:text-[#014088] text-[11px] font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <Eye className="w-3 h-3" />
            Specs
          </button>
        </div>
      </div>
    </article>
  );
}

// ─── Quick View Modal ─────────────────────────────────────────────────────────

function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const Icon = product.icon;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Specifications for ${product.name}`}
    >
      <div
        className="absolute inset-0 bg-[#014088]/35 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#D0E2F2] bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#E8F0FA] border border-[#DCE5F0] flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-[#014088]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E96E1] bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md">
                  CSI {product.csiSection}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#014088] bg-[#F2F7FF] border border-[#DCE5F0] px-2 py-0.5 rounded-md">
                  {product.category}
                </span>
              </div>
              <h2 className="text-base font-black text-[#014088] leading-snug">
                {product.name}
              </h2>
              <p className="text-[11px] text-[#64748B]">{product.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#F2F7FF] hover:bg-[#DCE5F0] flex items-center justify-center transition-colors ml-4 shrink-0"
          >
            <X className="w-4 h-4 text-[#64748B]" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          <p className="text-sm text-[#475569] leading-relaxed">
            {product.description}
          </p>

          {/* Full spec grid */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-[#F8F9FB] rounded-xl p-3 border border-[#F0F4F8]"
                >
                  <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-[#014088]">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-xs text-[#475569]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Two-column: Applications + Finishes */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                Application Markets
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="px-2.5 py-1 rounded-full bg-[#F2F7FF] border border-[#DCE5F0] text-[11px] font-semibold text-[#014088]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                Available Finishes
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.finishes.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-medium text-[#334155]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#DCE5F0] bg-[#FAFBFD] shrink-0 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#64748B]">
            Standard:{" "}
            <span className="font-bold text-[#014088]">{product.standards}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resources"
              className="inline-flex items-center gap-1.5 border border-[#DCE5F0] hover:border-[#014088] text-[#014088] text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Spec
            </a>
            <Link
              href={`/quote?product=${product.id}`}
              className="inline-flex items-center gap-1.5 bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-bold px-5 py-2 rounded-full transition-colors"
            >
              Request Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Compare Drawer ───────────────────────────────────────────────────────────

function CompareDrawer({
  products,
  onRemove,
  onClear,
}: {
  products: Product[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  if (products.length === 0) return null;

  const rows = [
    { label: "Category", getValue: (p: Product) => p.category },
    { label: "Strength", getValue: (p: Product) => p.strength },
    { label: "Max Span", getValue: (p: Product) => p.maxSpan },
    { label: "Fire Rating", getValue: (p: Product) => p.fireRating },
    { label: "Standards", getValue: (p: Product) => p.standards },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-[#014088] shadow-2xl">
      {/* Compact bar */}
      <div
        className="section-container-wide flex items-center justify-between py-3 cursor-pointer select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <Scale className="w-4 h-4 text-[#014088] shrink-0" />
          <span className="text-sm font-bold text-[#014088]">
            Comparing{" "}
            <span className="text-[#0E96E1]">{products.length}</span>
            /3 selected
          </span>
          <div className="hidden sm:flex items-center gap-2">
            {products.map((p) => (
              <span
                key={p.id}
                className="inline-flex items-center gap-1 bg-[#F2F7FF] border border-[#DCE5F0] text-[#014088] text-[10px] font-semibold px-2.5 py-1 rounded-full"
              >
                {p.name.split(" ").slice(0, 2).join(" ")}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(p.id);
                  }}
                  className="ml-0.5 text-[#64748B] hover:text-[#014088] transition-colors"
                  aria-label={`Remove ${p.name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="text-xs text-[#64748B] hover:text-[#014088] transition-colors font-medium"
          >
            Clear all
          </button>
          <ChevronDown
            className={`w-4 h-4 text-[#014088] transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Expanded table */}
      {expanded && (
        <div className="border-t border-[#DCE5F0] overflow-x-auto bg-[#F8FAFC]">
          <div className="section-container-wide">
            <div className="flex divide-x divide-[#DCE5F0]">
              {/* Labels column */}
              <div className="w-40 shrink-0 py-5 pr-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-4">
                  Spec
                </div>
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className="py-2.5 text-[11px] text-[#475569] font-medium"
                  >
                    {r.label}
                  </div>
                ))}
              </div>

              {/* Product columns */}
              {products.map((p) => (
                <div key={p.id} className="w-60 shrink-0 py-5 px-4 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0E96E1] mb-0.5">
                        {p.category}
                      </div>
                      <div className="text-xs font-bold text-[#014088] leading-snug line-clamp-2">
                        {p.name}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(p.id)}
                      className="text-[#94A3B8] hover:text-[#014088] transition-colors ml-2 mt-0.5 shrink-0"
                      aria-label={`Remove ${p.name}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {rows.map((r) => (
                    <div
                      key={r.label}
                      className="py-2.5 text-[11px] text-[#334155] font-semibold"
                    >
                      {r.getValue(p)}
                    </div>
                  ))}

                  <div className="pt-4">
                    <Link
                      href={`/quote?product=${p.id}`}
                      className="inline-flex items-center gap-1.5 bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors"
                    >
                      Quote
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Explorer ────────────────────────────────────────────────────────────

export function ProductExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "name" | "category">("default");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.applications.some((a) => a.toLowerCase().includes(q))
      );
    }
    if (activeCategory !== "All Products") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (selectedApplications.length > 0) {
      result = result.filter((p) =>
        selectedApplications.some((app) => p.applications.includes(app))
      );
    }
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "category") result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    return result;
  }, [search, activeCategory, selectedApplications, sortBy]);

  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      if (prev.some((p) => p.id === product.id))
        return prev.filter((p) => p.id !== product.id);
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  };

  const toggleApplication = (app: string) => {
    setSelectedApplications((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const clearAll = () => {
    setSearch("");
    setActiveCategory("All Products");
    setSelectedApplications([]);
  };

  const activeFilterCount =
    (activeCategory !== "All Products" ? 1 : 0) + selectedApplications.length + (search.trim() ? 1 : 0);

  return (
    <section className="w-full bg-[#F8F9FB] min-h-screen" id="explorer">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#DCE5F0]">
        <div className="section-container-wide py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#0E96E1] mb-3">
                <Filter className="w-3 h-3" />
                Product Explorer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#014088] tracking-tight leading-[1.05]">
                Browse Our Full
                <br />
                <span className="text-[#0E96E1]">Precast Catalog</span>
              </h1>
              <p className="mt-3 text-sm text-[#475569] max-w-xl leading-relaxed">
                Filter by category, application, and finish type. Compare up to
                3 products side-by-side. Click any card to view the full
                technical specification sheet.
              </p>
            </div>
            {/* Stats */}
            <div className="flex items-center gap-3 shrink-0">
              {[
                { value: `${PRODUCTS.length}`, label: "Products" },
                { value: "4", label: "Categories" },
                { value: "50-State", label: "PE Licensed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-4 py-3 rounded-xl bg-[#F2F7FF] border border-[#DCE5F0]"
                >
                  <div className="text-lg font-black text-[#014088]">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Toolbar ───────────────────────────────────────────── */}
      <div className="sticky top-[69px] md:top-[81px] z-30 bg-white/95 backdrop-blur-md border-b border-[#DCE5F0] shadow-sm">
        <div className="section-container-wide py-3">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px] max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
              <input
                ref={searchRef}
                type="search"
                id="explorer-search"
                placeholder="Search specs, products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
                className="w-full pl-9 pr-14 py-2.5 text-sm bg-[#F8F9FB] border border-[#DCE5F0] rounded-xl text-[#014088] placeholder-[#94A3B8] focus:outline-none focus:border-[#014088] focus:ring-2 focus:ring-[#014088]/10 transition-all"
              />
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#475569]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5">
                  <span className="text-[9px] text-[#B0BBC8] font-mono bg-[#F0F4F8] border border-[#DCE5F0] px-1 py-0.5 rounded">
                    ⌘K
                  </span>
                </kbd>
              )}
            </div>

            {/* Mobile filter toggle */}
            <button
              id="mobile-filter-toggle"
              onClick={() => setMobileSidebarOpen((v) => !v)}
              className={`lg:hidden inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                activeFilterCount > 0
                  ? "bg-[#014088] border-[#014088] text-white"
                  : "bg-white border-[#DCE5F0] text-[#64748B] hover:border-[#014088] hover:text-[#014088]"
              }`}
              aria-expanded={mobileSidebarOpen}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0E96E1] text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <select
              id="explorer-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              aria-label="Sort products"
              className="px-3 py-2.5 rounded-xl border border-[#DCE5F0] bg-white text-sm text-[#334155] font-medium focus:outline-none focus:border-[#014088] cursor-pointer"
            >
              <option value="default">Sort: Featured</option>
              <option value="name">Sort: Name A–Z</option>
              <option value="category">Sort: Category</option>
            </select>

            {/* Grid / List toggle */}
            <div className="hidden sm:flex items-center border border-[#DCE5F0] rounded-xl overflow-hidden">
              <button
                onClick={() => setView("grid")}
                id="view-toggle-grid"
                aria-label="Grid view"
                aria-pressed={view === "grid"}
                className={`p-2.5 transition-colors ${
                  view === "grid"
                    ? "bg-[#014088] text-white"
                    : "bg-white text-[#94A3B8] hover:text-[#014088]"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("list")}
                id="view-toggle-list"
                aria-label="List view"
                aria-pressed={view === "list"}
                className={`p-2.5 transition-colors ${
                  view === "list"
                    ? "bg-[#014088] text-white"
                    : "bg-white text-[#94A3B8] hover:text-[#014088]"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <span className="ml-auto text-xs text-[#94A3B8] font-medium hidden md:block">
              {filtered.length} / {PRODUCTS.length} products
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────── */}
      <div className="section-container-wide py-8 flex gap-6 items-start">
        {/* Sidebar */}
        <aside
          aria-label="Filter products"
          className={`shrink-0 w-60 bg-white rounded-2xl border border-[#DCE5F0] shadow-sm p-5 space-y-6 sticky top-[132px] ${
            mobileSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          {/* Category filter */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">
              Category
            </p>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All Products"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#014088] text-white shadow-sm"
                        : "text-[#334155] hover:bg-[#F2F7FF] hover:text-[#014088]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-[#F2F7FF] text-[#64748B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Application filter */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">
              Application Market
            </p>
            <div className="space-y-1">
              {APPLICATIONS.map((app) => {
                const isSelected = selectedApplications.includes(app);
                return (
                  <button
                    key={app}
                    onClick={() => toggleApplication(app)}
                    aria-pressed={isSelected}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#E0F2FE] border border-[#0E96E1]/20 text-[#0E96E1]"
                        : "text-[#475569] hover:bg-[#F8F9FB] hover:text-[#014088]"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? "bg-[#0E96E1] border-[#0E96E1]"
                          : "border-[#DCE5F0]"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {app}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear filters */}
          {activeFilterCount > 0 && (
            <button
              onClick={clearAll}
              className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#0E96E1] py-2 border border-[#0E96E1]/20 rounded-xl hover:bg-sky-50 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear Filters ({activeFilterCount})
            </button>
          )}

          {/* Sidebar CTA */}
          <div className="pt-2 border-t border-[#F0F4F8]">
            <div className="rounded-xl bg-[#014088] p-4 text-white">
              <div className="text-xs font-black mb-1">Need help choosing?</div>
              <p className="text-[11px] text-blue-100 leading-relaxed mb-3">
                Our engineers will specify the right product for your project in
                under 2 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 bg-white text-[#014088] text-[11px] font-bold px-3 py-1.5 rounded-full hover:bg-[#F2F7FF] transition-colors"
              >
                Ask an Engineer
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Right: results */}
        <div className="flex-1 min-w-0">
          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-xs text-[#94A3B8] font-medium shrink-0">
                Active:
              </span>
              {search.trim() && (
                <span className="inline-flex items-center gap-1.5 bg-[#F2F7FF] border border-[#DCE5F0] text-[#014088] text-xs font-semibold px-2.5 py-1 rounded-full">
                  &ldquo;{search}&rdquo;
                  <button onClick={() => setSearch("")} aria-label="Remove search filter">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeCategory !== "All Products" && (
                <span className="inline-flex items-center gap-1.5 bg-[#014088] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {activeCategory}
                  <button
                    onClick={() => setActiveCategory("All Products")}
                    aria-label={`Remove ${activeCategory} filter`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedApplications.map((app) => (
                <span
                  key={app}
                  className="inline-flex items-center gap-1.5 bg-[#E0F2FE] border border-sky-200 text-[#0E96E1] text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {app}
                  <button
                    onClick={() => toggleApplication(app)}
                    aria-label={`Remove ${app} filter`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center mb-5">
                <Search className="w-8 h-8 text-[#DCE5F0]" />
              </div>
              <h2 className="text-lg font-black text-[#014088] mb-2">
                No products matched
              </h2>
              <p className="text-sm text-[#64748B] mb-6 max-w-sm">
                Try adjusting your filters, or contact our engineering team for
                custom product solutions outside the standard catalog.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-2 bg-[#014088] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#06182E] transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#DCE5F0] text-[#014088] text-sm font-semibold px-5 py-2.5 rounded-full hover:border-[#014088] transition-colors"
                >
                  Contact Engineering
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                }
              >
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    view={view}
                    isComparing={compareList.some((p) => p.id === product.id)}
                    compareDisabled={
                      compareList.length >= 3 &&
                      !compareList.some((p) => p.id === product.id)
                    }
                    onToggleCompare={toggleCompare}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>

              {/* Bottom banner */}
              <div className="mt-12 rounded-2xl bg-[#014088] border border-[#1662B0] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7BA7E8] mb-1">
                    Custom Engineering
                  </div>
                  <h2 className="text-xl font-black text-white">
                    Need a non-standard solution?
                  </h2>
                  <p className="text-sm text-blue-100 mt-1.5 max-w-md leading-relaxed">
                    Our engineering team designs custom precast elements for
                    non-standard cross-sections, complex architectural shapes,
                    and special-use infrastructure.
                  </p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                  >
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                  >
                    Talk to an Engineer
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {/* Compare Drawer */}
      <CompareDrawer
        products={compareList}
        onRemove={(id) => setCompareList((prev) => prev.filter((p) => p.id !== id))}
        onClear={() => setCompareList([])}
      />
    </section>
  );
}
