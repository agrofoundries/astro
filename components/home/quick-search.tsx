"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Layers, FileText, Wrench, Building, BookOpen, Users } from "lucide-react";

interface SearchIndexItem {
  title: string;
  category: string;
  description: string;
  href: string;
}

const SEARCH_DATABASE: SearchIndexItem[] = [
  {
    title: "Structural Engineering Calculations",
    category: "Engineering Services",
    description: "Licensed PE stamped gravity, wind, and seismic structural analysis for precast systems.",
    href: "/#services",
  },
  {
    title: "Precast Connection & Anchor Design",
    category: "Engineering Services",
    description: "Erection inserts, lifting loops, welded connection plates, and bearing assemblies.",
    href: "/#services",
  },
  {
    title: "Shop Drawings & Rebar Detailing",
    category: "Engineering Services",
    description: "Production fabrication sheets, piece tickets, and erection placement plans.",
    href: "/#services",
  },
  {
    title: "Structural 3D Tekla Modeling",
    category: "Engineering Services",
    description: "LOD 400 fabrication models, clash detection, and digital field coordination.",
    href: "/#services",
  },
  {
    title: "Hollow-Core Slabs",
    category: "Precast Products",
    description: "Extruded and slipformed prestressed hollow-core floor and roof panels.",
    href: "/#products",
  },
  {
    title: "Architectural Precast Panels",
    category: "Precast Products",
    description: "Custom aesthetic facade panels with insulated sandwich wall construction.",
    href: "/#products",
  },
  {
    title: "Prestressed Bridge Beams & Culverts",
    category: "Precast Products",
    description: "AASHTO bridge girders, concrete box culverts, and heavy civil structures.",
    href: "/#products",
  },
  {
    title: "ACI 318 & PCI MNL-120 Guidelines",
    category: "Technical Resources",
    description: "Standard design codes, tolerances, and structural design handbooks.",
    href: "/#codes",
  },
  {
    title: "Concrete Volume Calculator",
    category: "Technical Resources",
    description: "Working volume estimator in cubic yards and cubic meters for slabs and footings.",
    href: "/#calculators",
  },
  {
    title: "U.S. Precast Manufacturers Directory",
    category: "Industry Suppliers",
    description: "Verified precast producers, formwork fabricators, and hardware suppliers across states.",
    href: "/#directory",
  },
  {
    title: "Multi-Story Commercial Parking Structure",
    category: "Projects",
    description: "Precast double tees, shear walls, and spandrels engineered for rapid erection.",
    href: "/#projects",
  },
  {
    title: "Precast Concrete Curing & Strength Control",
    category: "Engineering Articles",
    description: "Accelerated steam curing, maturity methods, and compressive strength protocols.",
    href: "/#knowledge",
  },
];

const CATEGORIES = [
  { name: "Engineering Services", icon: Wrench, href: "/#services" },
  { name: "Precast Products", icon: Layers, href: "/#products" },
  { name: "Technical Resources", icon: FileText, href: "/#resources" },
  { name: "Industry Suppliers", icon: Users, href: "/#directory" },
  { name: "Projects", icon: Building, href: "/#projects" },
  { name: "Engineering Articles", icon: BookOpen, href: "/#knowledge" },
];

export function QuickSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = SEARCH_DATABASE.filter((item) => {
    const matchesQuery =
      query.trim() === "" ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <section id="quick-search" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-10">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#014088]">
              Quick Search
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              Search engineering services, products, technical resources, industry suppliers, and articles.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative">
            <div className="relative flex items-center bg-white border border-[#DCE5F0] rounded-lg shadow-sm focus-within:border-[#014088] transition-all">
              <Search className="w-5 h-5 text-[#64748B] ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search services, products, standards, calculators..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3.5 text-sm text-[#014088] placeholder-[#64748B] bg-transparent focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mr-4 text-xs font-semibold text-[#64748B] hover:text-[#0E96E1]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Quick Filter Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selectedCategory === null
                  ? "bg-[#014088] text-white border-[#014088]"
                  : "bg-white text-[#014088] border-[#DCE5F0] hover:bg-[#E8F3FF]"
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(isActive ? null : cat.name)
                  }
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    isActive
                      ? "bg-[#014088] text-white border-[#014088]"
                      : "bg-white text-[#014088] border-[#DCE5F0] hover:bg-[#E8F3FF]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#0E96E1]"}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Filtered Search Results Dropdown/Box when actively querying or category selected */}
          {(query.trim() !== "" || selectedCategory !== null) && (
            <div className="bg-white border border-[#DCE5F0] rounded-lg shadow-sm divide-y divide-[#DCE5F0] max-h-80 overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-3.5 hover:bg-[#F2F7FF] flex items-center justify-between gap-4 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#0E96E1] uppercase tracking-wider bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                          {item.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#014088] group-hover:text-[#0E96E1]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#475569] mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#014088] shrink-0" />
                  </Link>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-[#64748B]">
                  No matching resources found for &quot;{query}&quot;. Try exploring the sections below.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
