"use client";

import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "Understanding Camber in Prestressed Concrete Double Tees",
    category: "Design Tutorials",
    readTime: "4 min read",
    summary: "Learn what causes upward camber during strand detensioning, how long-term concrete creep affects deflections, and methods to balance topping slab dead loads.",
  },
  {
    id: "art-2",
    title: "Thermal Bridging Prevention in Insulated Sandwich Panels",
    category: "Precast Engineering Articles",
    readTime: "5 min read",
    summary: "A practical guide to continuous insulation layers, non-conductive composite connector ties, and meeting ASHRAE 90.1 energy envelope standards.",
  },
  {
    id: "art-3",
    title: "Essential Precast Industry Terminology & Definitions",
    category: "Industry Terminology",
    readTime: "6 min read",
    summary: "Clear definitions for common terms including detensioning, stripping strength, spandrel ledger, embed plate, dowel tube, and non-shrink grout.",
  },
  {
    id: "art-4",
    title: "Form Release Agent Selection & Application Best Practices",
    category: "Manufacturing Guides",
    readTime: "3 min read",
    summary: "How proper mold release agents prevent surface bug-holes, concrete staining, and mold adhesion without impairing architectural surface finishes.",
  },
  {
    id: "art-5",
    title: "How Diaphragm Shear Works in Precast Floor Systems",
    category: "Technical Explanations",
    readTime: "5 min read",
    summary: "An introduction to how precast hollow-core or double tee floor slabs transfer lateral wind and earthquake forces into building shear walls.",
  },
  {
    id: "art-6",
    title: "Precast Concrete Quality Control Technician Study Guide",
    category: "Educational Resources",
    readTime: "7 min read",
    summary: "An educational overview of fresh concrete sampling, cylinder fabrication per ASTM C31, slump spread verification, and batching tolerances.",
  },
];

const CATEGORIES = [
  "All Articles",
  "Design Tutorials",
  "Precast Engineering Articles",
  "Industry Terminology",
  "Manufacturing Guides",
  "Technical Explanations",
  "Educational Resources",
];

export function KnowledgeCenter() {
  const [selectedCat, setSelectedCat] = useState("All Articles");

  const filteredArticles =
    selectedCat === "All Articles"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCat);

  return (
    <section id="knowledge" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="badge-tag mb-3">Educational Library</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#014088] tracking-tight">
            Knowledge Center
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Practical engineering articles, design tutorials, and technical explanations written in simple, clear language for precast professionals.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#014088] text-white border-[#014088] font-semibold"
                  : "bg-white text-[#014088] border-[#DCE5F0] hover:bg-[#E8F3FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between hover:border-[#014088] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px]">
                  <span className="font-bold text-[#0E96E1] uppercase tracking-wider bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                    {article.category}
                  </span>
                  <span className="text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#014088] mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F7FF]">
                <button
                  type="button"
                  onClick={() => {
                    alert(`Opening educational article: "${article.title}"`);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#014088] hover:text-[#0E96E1] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
