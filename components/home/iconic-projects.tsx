"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Building2,
  HardHat,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: "iconic" | "ongoing";
  location: string;
  status: string;
  image: string;
  description: string;
  specs: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  // ICONIC PROJECTS
  {
    id: "suffolk-nassau-stormwater",
    title: "Long Island County Highway Drainage Infrastructure",
    category: "Stormwater & Highway Inlets",
    type: "iconic",
    location: "Suffolk & Nassau Counties, NY",
    status: "Completed Landmark",
    image: "/images/hero-clean-yard.jpg",
    description:
      "Full municipal delivery of certified 5,000+ PSI precast catch basins, heavy traffic frames, and monolithic drywells meeting strict Suffolk County DPW standards.",
    specs: ["5,000+ PSI Concrete", "AASHTO HS20-44", "Suffolk & Nassau Approved"],
  },
  {
    id: "route-110-utility-corridor",
    title: "Route 110 Commercial & Industrial Precast Corridor",
    category: "Heavy Civil & Underground Utility",
    type: "iconic",
    location: "Deer Park & Melville, NY",
    status: "Completed Landmark",
    image: "/images/wall-panels.jpg",
    description:
      "High-load monolithic utility vaults, transformer pads, and precast electrical chambers engineered for regional utility distribution.",
    specs: ["Heavy Vault Systems", "Zero Hook Delays", "DOT Traffic Spec"],
  },
  {
    id: "state-dot-box-culverts",
    title: "Tri-State Regional DOT Highway Box Culverts",
    category: "Highway & Civil Infrastructure",
    type: "iconic",
    location: "New York Metropolitan Area",
    status: "Completed Landmark",
    image: "/images/infrastructure.jpg",
    description:
      "Precast reinforced concrete box culverts engineered for accelerated bridge construction, severe hydraulic flow, and heavy highway axle loadings.",
    specs: ["High-Capacity Culverts", "ASTM C1577 Spec", "Accelerated Crane Erect"],
  },

  // ONGOING PROJECTS
  {
    id: "leaching-galley-network",
    title: "Subsurface Leaching Galley Stormwater Dissipation Network",
    category: "Suffolk & Nassau New Showcase",
    type: "ongoing",
    location: "Deer Park Plant Staging, NY",
    status: "Active Production & Delivery",
    image: "/images/hero-precast-yard-clean.jpg",
    description:
      "High-void slotted leaching galley structures and aggregate dissipation beds engineered to maximize groundwater recharge across sandy Long Island subsoils.",
    specs: ["Leaching Galleys", "High-Void Dissipation", "Suffolk Approved"],
  },
  {
    id: "norweco-fuji-wastewater",
    title: "Norweco & Fuji Clean Advanced Sanitary Treatment Systems",
    category: "Wastewater Treatment Systems",
    type: "ongoing",
    location: "Long Island Sanitary Districts, NY",
    status: "Authorized Manufacturing & Supply",
    image: "/images/commercial-building.jpg",
    description:
      "Authorized plant casting of monolithic wastewater tanks and distribution chambers certified for advanced nitrogen reduction and environmental compliance.",
    specs: ["Norweco Authorized", "Fuji Clean Certified", "Monolithic Tanks"],
  },
  {
    id: "nassau-box-culvert-replacement",
    title: "Municipal Stormwater Box Culvert & Vault Modernization",
    category: "On-Site Installation & Delivery",
    type: "ongoing",
    location: "Nassau County, NY",
    status: "Active Field Operations",
    image: "/images/hero-bridge.jpg",
    description:
      "Ongoing scheduled deliveries of precast box culverts, traffic-rated curb inlets, and custom weir chambers deployed with dedicated crane logistics.",
    specs: ["Active Pouring & Staging", "HS20-44 Traffic Rated", "Direct Plant Fleet"],
  },
];

export function IconicProjectsSection() {
  const [activeType, setActiveType] = useState<"iconic" | "ongoing">("iconic");

  const filteredProjects = PROJECTS_DATA.filter((p) => p.type === activeType);

  return (
    <section id="projects-showcase" className="w-full bg-[#F8FAFD] py-14 sm:py-20 border-b border-[#D0E2F2]">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0E96E1] mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1]" />
              <span>CERTIFIED FIELD INSTALLATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] tracking-tight uppercase">
              Iconic &amp; <span className="text-[#0E96E1]">Ongoing Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 max-w-2xl">
              From landmark civil drainage installations to active daily production runs engineered for Suffolk, Nassau, and regional municipalities.
            </p>
          </div>

          {/* Interactive Project Type Switcher */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 p-1.5 bg-[#F1F5F9] rounded-xl border border-slate-200 w-fit">
            <button
              onClick={() => setActiveType("iconic")}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeType === "iconic"
                  ? "bg-[#014088] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#014088] hover:bg-white/60"
              }`}
            >
              <Building2 className="w-4 h-4 text-[#0E96E1]" />
              <span>Iconic Projects</span>
            </button>
            <button
              onClick={() => setActiveType("ongoing")}
              type="button"
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeType === "ongoing"
                  ? "bg-[#014088] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#014088] hover:bg-white/60"
              }`}
            >
              <HardHat className="w-4 h-4 text-[#0E96E1]" />
              <span>Ongoing Projects</span>
            </button>
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 hover:border-[#0E96E1] rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#014088]/90 text-white text-[10.5px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#014088] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0E96E1]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#014088] tracking-tight mb-2 group-hover:text-[#0E96E1] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Specs and Link */}
              <div className="p-5 bg-[#F8FAFC] border-t border-slate-200">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10.5px] font-mono bg-white border border-slate-200 text-[#014088] px-2.5 py-1 rounded-md font-bold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  className="flex items-center justify-between text-xs font-bold text-[#014088] group-hover:text-[#0E96E1] uppercase tracking-wider transition-colors"
                >
                  <span>Project Specs &amp; RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#0E96E1]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
