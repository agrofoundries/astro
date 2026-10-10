import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Factory, Route, Droplets, Zap, Warehouse, Landmark } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const SECTORS = [
  {
    title: "Commercial & Office Developments",
    icon: Building,
    image: "/images/commercial-building.jpg",
    desc: "Rapid vertical enclosures with architectural precast facade panels, insulated spandrels, and integrated window systems that reduce tenant occupancy schedules.",
    highlights: ["Custom architectural finishes", "Superior acoustic STC 55+ insulation", "Accelerated exterior dried-in date"],
  },
  {
    title: "Industrial & Logistics Hubs",
    icon: Factory,
    image: "/images/wall-panels.jpg",
    desc: "Durable, high-efficiency insulated sandwich panels and heavy-duty dock doors engineered to endure continuous forklift and distribution operations.",
    highlights: ["R-22+ continuous thermal envelope", "High thermal mass temperature regulation", "Impact-resistant interior hard-wall finish"],
  },
  {
    title: "Highways, Roads & Civil Bridges",
    icon: Route,
    image: "/images/infrastructure.jpg",
    desc: "AASHTO prestressed girders, box culverts, MSE retaining walls, and crash barriers designed for maximum service life under severe freeze-thaw cycles.",
    highlights: ["Pre-approved by state DOT agencies", "Weekend road closure rapid installation", "100-year corrosion-resistant service life"],
  },
  {
    title: "Water, Wastewater & Underground Utilities",
    icon: Droplets,
    image: "/images/quality-inspection.jpg",
    desc: "Monolithic precast pump stations, wet wells, valve vaults, and storm retention vaults with specialized antimicrobial concrete additives.",
    highlights: ["Watertight resilient gasket connections", "H-20 & HS-25 heavy traffic load ratings", "Resistant to hydrogen sulfide microbial corrosion"],
  },
];

export default function ApplicationsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Industry Applications
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Built for Every Construction Sector
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Discover how PRECASTPRO provides tailored structural and civil solutions across mission-critical infrastructure, commercial development, and logistics parks.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary">
                Discuss Your Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Applications */}
      <div className="section-container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl text-brand-primary shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {sector.title}
                    </h2>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {sector.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Key Engineering Advantages:
                      </div>
                      {sector.highlights.map((h, i) => (
                        <div key={i} className="text-xs text-gray-700 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={`/quote?sector=${encodeURIComponent(sector.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-dark"
                  >
                    Request Sector Engineering Spec
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
