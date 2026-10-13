"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eye } from "lucide-react";

const GALLERY_CATEGORIES = [
  "ALL SPECS",
  "WALL PANELS",
  "CIVIL INFRASTRUCTURE",
  "ARCHITECTURAL",
  "PLANT PRODUCTION",
] as const;

type Category = (typeof GALLERY_CATEGORIES)[number];

const GALLERY_ITEMS = [
  {
    code: "SPEC-WP-01",
    title: "Precast Insulated Sandwich Panels",
    category: "WALL PANELS",
    image: "/images/wall-panels.jpg",
    specs: "THICKNESS: 10\" | R-VALUE: R-22 | FINISH: SMOOTH STEEL",
  },
  {
    code: "SPEC-CIV-02",
    title: "AASHTO Precast Highway Girders",
    category: "CIVIL INFRASTRUCTURE",
    image: "/images/infrastructure.jpg",
    specs: "SPAN: 110 FT | STRENGTH: 8,500 PSI | STRAND: 270K",
  },
  {
    code: "SPEC-ARCH-03",
    title: "High-Rise Architectural Cladding",
    category: "ARCHITECTURAL",
    image: "/images/commercial-building.jpg",
    specs: "FINISH: ACID-ETCH WHITE QUARTZ | STC: 55+ RATING",
  },
  {
    code: "SPEC-PLT-04",
    title: "Heavy Casting Bed Fabrication",
    category: "PLANT PRODUCTION",
    image: "/images/manufacturing.jpg",
    specs: "CAPACITY: 450 CY/DAY | STEAM-CURED ACCELERATION",
  },
  {
    code: "SPEC-LAB-05",
    title: "Laser Metrology & QA Break Testing",
    category: "PLANT PRODUCTION",
    image: "/images/quality-inspection.jpg",
    specs: "TOLERANCE: ±0.0625\" | ASTM C39 HYDRAULIC BREAKS",
  },
  {
    code: "SPEC-BIM-06",
    title: "Tekla LOD 400 Erection Modeling",
    category: "ARCHITECTURAL",
    image: "/images/engineering-team.jpg",
    specs: "CLASH DETECTION: 100% RESOLVED | STAMPED PE STAMP",
  },
];

export function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<Category>("ALL SPECS");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeTab === "ALL SPECS"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="w-full section-steel section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Visual Portfolio"
          specCode="FIELD GALLERY"
          title="Precast Structural Details &amp; Jobsite Installations"
          description="Filter our recent manufacturing casting runs and heavy civil installations to inspect factory tolerances, embed detailing, and surface finishes."
        />

        {/* Light Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 font-mono-spec text-xs font-bold uppercase rounded-md transition-all cursor-pointer ${
                activeTab === cat
                  ? "bg-[#0A2540] text-white shadow-sm"
                  : "bg-[#EAEEF3] text-[#0A2540] border border-[#CBD5E1] hover:bg-[#DEE4EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.code}
              onClick={() => setSelectedImage(item.image)}
              className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-all group overflow-hidden"
            >
              {/* Clean Light Header */}
              <div className="px-4 py-2 bg-[#EAEEF3] text-[#0A2540] font-mono-spec text-[11px] uppercase font-bold flex justify-between border-b border-[#CBD5E1]">
                <span className="text-[#D4030C]">[{item.code}]</span>
                <span className="text-[#64748B]">{item.category}</span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEEF3] border-b border-[#CBD5E1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1.5 rounded shadow-xs text-[#0A2540]">
                  <Eye className="w-4 h-4 text-[#D4030C]" />
                </div>
              </div>

              <div className="p-4 bg-white">
                <h4 className="text-sm font-bold tracking-tight text-[#0A2540] mb-1 group-hover:text-[#D4030C] transition-colors">
                  {item.title}
                </h4>
                <p className="font-mono-spec text-[11px] text-[#64748B]">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Light Modal preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[85vh] aspect-[16/10] bg-white border border-[#E0E2E5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="Enlarged project view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 px-3 py-1.5 bg-[#D4030C] text-white font-mono-spec text-xs font-bold uppercase rounded hover:bg-[#A50E1B] cursor-pointer"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
