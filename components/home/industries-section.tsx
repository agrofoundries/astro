import {
  Building2,
  Factory,
  Home,
  Car,
  HeartPulse,
  TrainTrack,
  GitFork,
  Droplets,
} from "lucide-react";

interface IndustryItem {
  title: string;
  description: string;
  icon: typeof Building2;
}

const INDUSTRIES: IndustryItem[] = [
  {
    title: "Commercial Buildings",
    description: "Office towers, corporate headquarters, and mixed-use commercial developments utilizing architectural facades and precast floor systems.",
    icon: Building2,
  },
  {
    title: "Industrial Buildings",
    description: "Logistics fulfillment centers, manufacturing facilities, and heavy cold storage warehouses requiring durable insulated precast walls.",
    icon: Factory,
  },
  {
    title: "Residential Construction",
    description: "Multi-family apartment complexes, condominiums, and student housing benefiting from fire-rated, acoustic precast floor planks and walls.",
    icon: Home,
  },
  {
    title: "Parking Structures",
    description: "High-capacity multi-level parking garages built with long-span prestressed double tees, precast columns, and spandrel panels.",
    icon: Car,
  },
  {
    title: "Healthcare and Education",
    description: "Hospitals, medical research labs, university classrooms, and dormitories demanding rapid erection and structural vibration mitigation.",
    icon: HeartPulse,
  },
  {
    title: "Transportation",
    description: "Transit rail stations, airport terminal concourses, and sound barrier walls designed for high traffic corridors and extreme weather.",
    icon: TrainTrack,
  },
  {
    title: "Bridges and Infrastructure",
    description: "Highway overpasses, pedestrian footbridges, and river crossings utilizing standard AASHTO girders and precast substructure units.",
    icon: GitFork,
  },
  {
    title: "Water and Wastewater",
    description: "Treatment plant holding basins, precast clarifier walls, storm water retention tanks, and sanitary sewer conveyance vaults.",
    icon: Droplets,
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Sectors &amp; Applications</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01255F] tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Providing tailored engineering support across the primary construction sectors that rely on precast concrete components.
          </p>
        </div>

        {/* 8 Industry Sectors Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="card-clean p-6 flex flex-col justify-between hover:border-[#01255F] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center mb-4 text-[#01255F]">
                    <Icon className="w-5 h-5 text-[#D7030F]" />
                  </div>
                  <h3 className="text-base font-bold text-[#01255F] mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
