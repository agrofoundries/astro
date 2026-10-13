"use client";

import { useState } from "react";
import { Search, MapPin, CheckCircle, ExternalLink } from "lucide-react";

interface SupplierItem {
  name: string;
  category: string;
  state: string;
  city: string;
  specialty: string;
  isVerified: boolean;
}

const SUPPLIERS_DATABASE: SupplierItem[] = [
  {
    name: "Lone Star Precast Fabricators",
    category: "Precast Manufacturers",
    state: "Texas",
    city: "Houston",
    specialty: "Prestressed double tees, hollow-core slabs, and architectural wall panels.",
    isVerified: true,
  },
  {
    name: "Midwest Reinforcing Supply",
    category: "Reinforcement Suppliers",
    state: "Illinois",
    city: "Chicago",
    specialty: "ASTM A615 Grade 60/80 rebar, epoxy coated steel, and custom precast wire mesh.",
    isVerified: true,
  },
  {
    name: "American Formwork Systems",
    category: "Formwork Manufacturers",
    state: "Ohio",
    city: "Columbus",
    specialty: "Heavy-duty steel self-stressing casting beds and adjustable precast box culvert forms.",
    isVerified: true,
  },
  {
    name: "Apex Lifting & Rigging Hardware",
    category: "Lifting Hardware Suppliers",
    state: "Pennsylvania",
    city: "Pittsburgh",
    specialty: "Forged ring clutches, erection anchors, spreader bars, and lifting loops.",
    isVerified: true,
  },
  {
    name: "SureConnect Structural Embeds",
    category: "Connection System Suppliers",
    state: "Georgia",
    city: "Atlanta",
    specialty: "Column base shoes, slotted bearing connections, weld plates, and bearing pads.",
    isVerified: true,
  },
  {
    name: "Pacific Testing & Inspection Labs",
    category: "Testing Laboratories",
    state: "California",
    city: "Sacramento",
    specialty: "ASTM C39 compressive testing, aggregate petrography, and ultrasonic weld NDT.",
    isVerified: true,
  },
  {
    name: "Southeastern Concrete Materials",
    category: "Concrete Material Suppliers",
    state: "Florida",
    city: "Tampa",
    specialty: "Type I/II Portland cement, slag cement, microsilica, and high-range water reducers.",
    isVerified: false,
  },
  {
    name: "Keystone Precast Consultants",
    category: "Engineering Consultants",
    state: "Pennsylvania",
    city: "Allentown",
    specialty: "Licensed structural precast calculations, seismic analysis, and plant QA audits.",
    isVerified: true,
  },
];

const CATEGORIES = [
  "All Types",
  "Precast Manufacturers",
  "Concrete Material Suppliers",
  "Reinforcement Suppliers",
  "Formwork Manufacturers",
  "Lifting Hardware Suppliers",
  "Connection System Suppliers",
  "Testing Laboratories",
  "Engineering Consultants",
];

const STATES = [
  "All States",
  "Texas",
  "Illinois",
  "Ohio",
  "Pennsylvania",
  "Georgia",
  "California",
  "Florida",
];

export function SuppliersDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Types");
  const [selectedState, setSelectedState] = useState("All States");

  const filteredSuppliers = SUPPLIERS_DATABASE.filter((item) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      selectedCategory === "All Types" || item.category === selectedCategory;

    const matchesState =
      selectedState === "All States" || item.state === selectedState;

    return matchesSearch && matchesCat && matchesState;
  });

  return (
    <section id="directory" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="badge-tag mb-3">Industry Network</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#032356] tracking-tight">
            Suppliers and Industry Directory
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            A searchable directory of precast concrete manufacturers, material suppliers, hardware fabricators, and testing laboratories across the United States.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search company name, specialty, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#DCE5F0] rounded pl-9 pr-3 py-2 text-xs text-[#032356] placeholder-[#64748B] focus:outline-none focus:border-[#032356]"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-[#DCE5F0] rounded px-3 py-2 text-xs text-[#032356] focus:outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* State Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-white border border-[#DCE5F0] rounded px-3 py-2 text-xs text-[#032356] focus:outline-none"
              >
                {STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Directory Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSuppliers.map((supplier, idx) => (
            <div
              key={idx}
              className="card-clean p-5 flex flex-col justify-between hover:border-[#032356] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-[#032356] bg-[#E8F3FF] px-2 py-0.5 rounded border border-[#DCE5F0]">
                    {supplier.category}
                  </span>
                  {supplier.isVerified ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#032356]">
                      <CheckCircle className="w-3 h-3 text-[#D4030C]" />
                      <span>Verified</span>
                    </span>
                  ) : (
                    <span className="text-[10px] text-[#64748B]">Listing</span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#032356] mb-1.5 leading-snug">
                  {supplier.name}
                </h3>

                <p className="text-xs text-[#64748B] flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#D4030C] shrink-0" />
                  <span>
                    {supplier.city}, {supplier.state}
                  </span>
                </p>

                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {supplier.specialty}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F7FF] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#64748B]">United States</span>
                <span className="text-[11px] font-semibold text-[#032356] hover:text-[#D4030C] cursor-pointer inline-flex items-center gap-1">
                  <span>Directory Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <div className="p-8 text-center text-xs text-[#64748B] bg-[#F2F7FF] rounded border border-[#DCE5F0]">
            No suppliers found matching your filter criteria. Try resetting filters.
          </div>
        )}

        {/* Directory Verification Note */}
        <p className="mt-8 text-xs text-[#64748B] text-center max-w-2xl mx-auto italic">
          Note: Verified listings indicate that the supplier&apos;s corporate registration and contact details have been reviewed. Unverified user submissions are labeled accordingly.
        </p>
      </div>
    </section>
  );
}
