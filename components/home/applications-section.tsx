import { SectionHeading } from "@/components/ui/section-heading";
import { Building, Factory, Route, Droplets, Zap, ShieldAlert, Landmark, Wheat } from "lucide-react";

const INDUSTRIAL_SECTORS = [
  {
    code: "SEC-01",
    title: "Distribution & Logistics Hubs",
    spec: "R-22+ Insulated Thermal Envelopes & Heavy Dock Openings",
    designCode: "IBC 2024 / ASHRAE 90.1",
    icon: Factory,
  },
  {
    code: "SEC-02",
    title: "Interstate Highways & Overpasses",
    spec: "AASHTO Precast Girders, Wingwalls & Box Culverts",
    designCode: "AASHTO LRFD / DOT SPEC",
    icon: Route,
  },
  {
    code: "SEC-03",
    title: "Water & Wastewater Infrastructure",
    spec: "Watertight Manholes, Vaults & Corrosion-Resistant Mixes",
    designCode: "ACI 350 / ASTM C478",
    icon: Droplets,
  },
  {
    code: "SEC-04",
    title: "Energy & Electrical Substations",
    spec: "Ballistic Perimeter Walls & Oil Containment Basins",
    designCode: "IEEE 693 SEISMIC",
    icon: Zap,
  },
  {
    code: "SEC-05",
    title: "Commercial & Office Towers",
    spec: "Architectural Precast Facades & Window Receiver Panels",
    designCode: "PCI MNL-122 ARCH",
    icon: Building,
  },
  {
    code: "SEC-06",
    title: "Multi-Level Parking Structures",
    spec: "Prestressed Double Tees, Shear Walls & Spandrel Beams",
    designCode: "ACI 318 / PCI MNL-120",
    icon: Landmark,
  },
  {
    code: "SEC-07",
    title: "Heavy Manufacturing Facilities",
    spec: "High-Load Foundations, Crane Runways & Equipment Vaults",
    designCode: "AISC / ACI INDUSTRIAL",
    icon: ShieldAlert,
  },
  {
    code: "SEC-08",
    title: "Agricultural & Bulk Storage",
    spec: "Freestanding Bunker Walls & Slatted Livestock Flooring",
    designCode: "ASAE STANDARDS",
    icon: Wheat,
  },
];

export function ApplicationsSection() {
  return (
    <section id="applications" className="w-full section-slate section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Target Industry Sectors"
          specCode="SECTOR CRITERIA"
          title="Heavy Construction &amp; Infrastructure Applications"
          description="Engineered precast concrete components tailored to the rigorous load criteria, environmental exposure ratings, and jurisdictional codes of each construction vertical."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {INDUSTRIAL_SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.code}
                className="p-5 bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono-spec">
                    <span className="text-[#0E96E1] font-bold">[{sector.code}]</span>
                    <span className="text-[#0A2540] bg-[#EEF3F8] border border-[#CBD5E1] px-2 py-0.5 rounded text-[10px] font-bold">{sector.designCode}</span>
                  </div>

                  <div className="w-10 h-10 bg-[#EEF3F8] border border-[#CBD5E1] text-[#0A2540] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0A2540] tracking-tight mb-1.5 group-hover:text-[#0E96E1] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {sector.spec}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#CBD5E1] font-mono-spec text-[10px] text-[#64748B] flex items-center justify-between">
                  <span>PRECAST SCOPE:</span>
                  <span className="text-[#0A2540] font-bold group-hover:text-[#0E96E1]">VIEW DETAILS →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
