"use client";

import Link from "next/link";
import {
  BookText,
  FileCode,
  Paperclip,
  Newspaper,
  DraftingCompass,
  CheckSquare,
  ArrowRight,
  Download,
} from "lucide-react";

interface ResourceCard {
  title: string;
  category: string;
  description: string;
  format: string;
  icon: typeof BookText;
}

const RESOURCES: ResourceCard[] = [
  {
    title: "Precast Concrete Engineering Guides",
    category: "Engineering Guides",
    description: "Design criteria, gravity and lateral load path distribution, and camber estimation methods.",
    format: "PDF Guide",
    icon: BookText,
  },
  {
    title: "Structural Design References",
    category: "Design References",
    description: "Load combination summaries, diaphragm shear design tables, and prestress loss equations.",
    format: "Reference Sheet",
    icon: FileCode,
  },
  {
    title: "Precast Connection Details Library",
    category: "Connection Details",
    description: "Standard details for column-to-foundation shoes, bearing angle brackets, and weld plate embeds.",
    format: "DWG / PDF",
    icon: Paperclip,
  },
  {
    title: "Technical Engineering Articles",
    category: "Technical Articles",
    description: "In-depth discussions on thermal bridging in insulated walls, stripping stresses, and ACI 318 updates.",
    format: "Technical Paper",
    icon: Newspaper,
  },
  {
    title: "Standard Engineering Drawings",
    category: "Engineering Drawings",
    description: "Sample shop drawings, typical rebar placement layouts, and erection sequence sheets.",
    format: "Sample Sheets",
    icon: DraftingCompass,
  },
  {
    title: "Checklists and Quality Templates",
    category: "Checklists & Templates",
    description: "Pre-pour formwork inspection checklists, lifting hardware verification logs, and shop ticket templates.",
    format: "Interactive Form",
    icon: CheckSquare,
  },
];

export function TechnicalResources() {
  return (
    <section id="resources" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="badge-tag mb-3">Technical Documentation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01255F] tracking-tight">
              Technical Resources
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2">
              Engineering guides, design details, connection standards, and plant inspection templates for precast professionals.
            </p>
          </div>
          <Link
            href="/#resources"
            className="btn-outline-navy text-xs inline-flex items-center gap-2 self-start md:self-end"
          >
            <span>Browse Full Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Resources Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-clean p-6 flex flex-col justify-between hover:border-[#01255F] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#D7030F] uppercase tracking-wider bg-[#FFF2F2] px-2 py-0.5 rounded border border-[#FCD2D4]">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono">
                      {item.format}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#01255F]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#01255F] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2F7FF] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B]">Precast Engineering Library</span>
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Accessing: ${item.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#01255F] hover:text-[#D7030F] transition-colors cursor-pointer"
                  >
                    <span>View Resource</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
