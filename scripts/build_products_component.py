import json

# Import categories_data from test_categories
loc = {}
with open('scripts/test_categories.py', 'r', encoding='utf-8') as f:
    exec(f.read(), {}, loc)
categories = loc['categories_data']

# Build TypeScript code
header_code = """\"use client\";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ShieldCheck,
  Truck,
  Anchor,
  Clock,
  Droplet,
  Box,
  FileText,
  Layers,
  Scale,
} from "lucide-react";

// ─── DATA INTERFACES ──────────────────────────────────────────────────────────

export interface VariableSpec {
  label: string;
  value: string;
  sub?: string;
}

export interface ProductVariable {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  categoryLabel: string;
  description: string;
  features: [string, string, string, string];
  specCapacity: VariableSpec;
  specDimensions: VariableSpec;
  specStandards: VariableSpec;
  image: string;
  href: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  category: string;
  categoryBadge: string;
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  variables: ProductVariable[];
}

// ─── PRODUCT FAMILIES DATA (14 OFFICIAL CATALOG CATEGORIES) ─────────────────

export const PRODUCT_FAMILIES: ProductFamily[] = """

families_json = []
for c in categories:
    family = {
        "id": c["id"],
        "name": c["name"],
        "category": c["category"],
        "categoryBadge": c["categoryBadge"],
        "categoryLabel": c["categoryLabel"],
        "summary": c["summary"],
        "description": c["description"],
        "image": c["image"],
        "variables": []
    }
    for v in c["variables"]:
        var_item = {
            "id": v["id"],
            "name": v["name"],
            "shortName": v["shortName"],
            "badge": v["badge"],
            "categoryLabel": v["categoryLabel"],
            "description": v["description"],
            "features": v["features"],
            "specCapacity": v["specCapacity"],
            "specDimensions": v["specDimensions"],
            "specStandards": v["specStandards"],
            "image": c["image"],
            "href": "/#contact"
        }
        family["variables"].append(var_item)
    families_json.append(family)

json_str = json.dumps(families_json, indent=2)

footer_code = """;

// ─── MAIN PRODUCTS SECTION COMPONENT ─────────────────────────────────────────

export function ProductsSection() {
  const [activeFamilyId, setActiveFamilyId] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalVariables = PRODUCT_FAMILIES.reduce(
    (acc, family) => acc + family.variables.length,
    0
  );

  const displayedFamilies =
    activeFamilyId === "all"
      ? PRODUCT_FAMILIES
      : PRODUCT_FAMILIES.filter((f) => f.id === activeFamilyId);

  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-white border-b border-[#D0E2F2] relative overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="section-container mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#00A3E0] text-xs font-black tracking-widest uppercase mb-4 shadow-2xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse" />
            <span>ASTRO 2026 PRODUCT CATALOG · 14 DIVISIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072C5B] tracking-tight uppercase leading-tight">
            ENGINEERED PRECAST <span className="text-[#00A3E0]">PRODUCTS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed">
            Select any product line below to view models, dimensions, capacities, and DOT standards.
            Certified 5,000+ PSI compressive strength, AASHTO HS20-44 highway traffic rated,
            and engineered to exact Suffolk &amp; Nassau County standards from our Long Island plant.
          </p>
        </div>

        {/* 14 Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFamilyId("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
              activeFamilyId === "all"
                ? "bg-[#072C5B] text-white shadow-md scale-102"
                : "bg-[#F0F6FC] text-[#072C5B] border border-[#D0E2F2] hover:border-[#072C5B] hover:bg-white"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>All Categories ({totalVariables} Models)</span>
          </button>

          {PRODUCT_FAMILIES.map((family) => {
            const isActive = activeFamilyId === family.id;
            return (
              <button
                key={family.id}
                type="button"
                onClick={() => setActiveFamilyId(family.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                  isActive
                    ? "bg-[#00A3E0] text-white shadow-md scale-102"
                    : "bg-[#F0F6FC] text-[#072C5B] border border-[#D0E2F2] hover:border-[#00A3E0] hover:bg-white"
                }`}
              >
                <span>{family.name.replace("Precast Concrete ", "")}</span>
                <span
                  className={`text-[10px] font-black px-1.5 py-0.5 rounded font-mono ${
                    isActive
                      ? "bg-white text-[#00A3E0]"
                      : "bg-[#E0F2FE] text-[#072C5B]"
                  }`}
                >
                  {family.variables.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PRODUCT VARIABLE SLIDERS LIST ──────────────────────────────── */}
      <div className="section-container-wide space-y-16 sm:space-y-20">
        {displayedFamilies.map((family) => (
          <ProductVariableSlider
            key={family.id}
            family={family}
            mounted={mounted}
          />
        ))}
      </div>
    </section>
  );
}

// ─── PER-FAMILY SLIDER COMPONENT ─────────────────────────────────────────────

interface ProductVariableSliderProps {
  family: ProductFamily;
  mounted: boolean;
}

function ProductVariableSlider({ family, mounted }: ProductVariableSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="bg-[#F8FAFC] border-2 border-[#D0E2F2] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Family Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-[#D0E2F2]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-[#072C5B] text-white">
              {family.categoryBadge}
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-[#00A3E0]">
              {family.categoryLabel}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#072C5B] uppercase tracking-tight">
            {family.name}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
            {family.description}
          </p>
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block text-[11px] font-mono font-bold text-[#64748B] mr-2">
            Model {currentSlideIndex + 1} of {family.variables.length}
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-xl border-2 border-[#D0E2F2] hover:border-[#072C5B] bg-white text-[#072C5B] hover:bg-[#F0F6FC] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Previous ${family.name} model`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-xl border-2 border-[#D0E2F2] hover:border-[#072C5B] bg-white text-[#072C5B] hover:bg-[#F0F6FC] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Next ${family.name} model`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Model Switcher Chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mr-1">
          Catalog Models:
        </span>
        {family.variables.map((variable, idx) => {
          const isActive = currentSlideIndex === idx;
          return (
            <button
              key={variable.id}
              type="button"
              onClick={() => {
                swiperRef.current?.slideTo(idx);
                setCurrentSlideIndex(idx);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#072C5B] text-white border-[#072C5B] shadow-xs scale-102"
                  : "bg-white text-[#072C5B] border-[#D0E2F2] hover:border-[#00A3E0]"
              }`}
            >
              {variable.shortName}
            </button>
          );
        })}
      </div>

      {/* Variable Slider Stage */}
      {!mounted ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {family.variables.slice(0, 3).map((variable) => (
            <VariableCard key={variable.id} variable={variable} />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlideIndex(swiper.activeIndex);
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
            }}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={false}
            className="w-full pb-4"
          >
            {family.variables.map((variable) => (
              <SwiperSlide key={variable.id} className="h-auto">
                <VariableCard variable={variable} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

// ─── SINGLE VARIABLE / PRODUCT CARD COMPONENT ────────────────────────────────

interface VariableCardProps {
  variable: ProductVariable;
}

function VariableCard({ variable }: VariableCardProps) {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#D0E2F2] hover:border-[#00A3E0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* 1. HD 3D Render Image Container */}
      <div className="relative aspect-[4/3] w-full bg-[#F0F6FC] border-b border-[#D0E2F2] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={variable.image}
          alt={variable.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded bg-[#072C5B] text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
            {variable.badge}
          </span>
          <span className="px-2 py-0.5 rounded bg-white text-[#00A3E0] border border-sky-200 text-[10px] font-mono font-extrabold shadow-2xs">
            DEER PARK, NY
          </span>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#00A3E0] mb-1.5 block font-mono">
            {variable.categoryLabel}
          </span>

          <h4 className="text-lg sm:text-xl font-black text-[#072C5B] group-hover:text-[#00A3E0] transition-colors leading-snug mb-2">
            {variable.name}
          </h4>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-normal min-h-[40px]">
            {variable.description}
          </p>

          {/* 3. Four Feature Badges */}
          <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-[#F0F6FC] mb-5">
            {variable.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] font-bold text-[#334155]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* 4. Three-Column Technical Spec Box */}
          <div className="p-3.5 rounded-xl bg-[#F0F6FC] border border-[#D0E2F2] grid grid-cols-3 gap-2 mb-5">
            {/* Spec 1: Capacity */}
            <div className="min-w-0">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specCapacity.label}
              </span>
              <span className="text-xs font-black text-[#072C5B] block truncate">
                {variable.specCapacity.value}
              </span>
              {variable.specCapacity.sub && (
                <span className="text-[10px] text-[#64748B] block truncate">
                  {variable.specCapacity.sub}
                </span>
              )}
            </div>

            {/* Spec 2: Dimensions */}
            <div className="min-w-0 border-l border-[#D0E2F2] pl-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specDimensions.label}
              </span>
              <span className="text-xs font-black text-[#072C5B] block truncate">
                {variable.specDimensions.value}
              </span>
              {variable.specDimensions.sub && (
                <span className="text-[10px] text-[#64748B] block truncate">
                  {variable.specDimensions.sub}
                </span>
              )}
            </div>

            {/* Spec 3: Standards */}
            <div className="min-w-0 border-l border-[#D0E2F2] pl-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specStandards.label}
              </span>
              <span className="text-xs font-black text-[#072C5B] block truncate">
                {variable.specStandards.value}
              </span>
              {variable.specStandards.sub && (
                <span className="text-[10px] text-[#64748B] block truncate">
                  {variable.specStandards.sub}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 5. Bottom Action Row */}
        <div className="pt-4 border-t border-[#F0F6FC] flex items-center justify-between">
          <Link
            href="/#contact"
            className="text-xs font-bold text-[#072C5B] hover:text-[#00A3E0] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Submittal Sheet</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/#contact"
            className="bg-[#00A3E0] hover:bg-[#0284C7] text-white font-black py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 inline-flex items-center gap-1.5"
          >
            <span>RFQ Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
"""

with open("components/home/products-section.tsx", "w", encoding="utf-8") as out:
    out.write(header_code + json_str + footer_code)

print("Generated components/home/products-section.tsx successfully!")
