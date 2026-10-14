import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const INDUSTRIAL_PROJECTS = [
  {
    id: "suffolk-stormwater-network",
    title: "Suffolk County Municipal Stormwater Catch Basin Modernization",
    category: "Highway & Civil Infrastructure",
    location: "Suffolk County, NY",
    year: "2024",
    image: "/images/infrastructure.jpg",
    description: "450 precast concrete catch basins (Model AR 3048 CB) and monolithic drainage structures delivered on schedule to Suffolk County DPW standards.",
    specs: ["450 Structures", "5,000+ PSI Concrete", "AASHTO HS20-44"],
  },
  {
    id: "route-110-utility-vaults",
    title: "Route 110 Commercial Corridor Underground Utility Vaults",
    category: "Heavy Civil & Utility Infrastructure",
    location: "Deer Park & Melville, NY",
    year: "2024",
    image: "/images/wall-panels.jpg",
    description: "Monolithic precast utility vaults, electrical manholes, and heavy traffic slabs engineered with cast-in knockout panels and watertight joints.",
    specs: ["Heavy Vault Systems", "Zero Hook Delays", "Suffolk & Nassau Approved"],
  },
  {
    id: "nassau-leaching-fields",
    title: "Nassau County Subsurface Stormwater Leaching Galley Network",
    category: "Subsurface Stormwater Infiltration",
    location: "Nassau County, NY",
    year: "2024",
    image: "/images/commercial-building.jpg",
    description: "Multi-row precast concrete leaching galleys and heavy civil drywell rings engineered for rapid groundwater percolation and soil recharge.",
    specs: ["Slotted Galleys", "High-Void Dissipation", "County Health Approved"],
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="w-full bg-[#F4F6F9] py-16 lg:py-24 border-t border-b border-slate-200">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <SectionHeading
              eyebrow="Proven Field Execution"
              specCode="CASE HISTORIES"
              title="Major Civil &amp; Commercial Precast Installations"
              description="Explore how PRECAST ENGINEERS solves complex site logistics, tight urban crane clearances, and demanding structural specifications across the region."
            />
          </div>
          <Link
            href="/projects"
            className="btn-dark px-6 py-3 rounded text-xs font-bold uppercase tracking-wider mb-4 md:mb-8 inline-flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#0E96E1]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INDUSTRIAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-slate-200 hover:border-[#0B2545] rounded-xl transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B2545] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#0B2545] text-xs font-bold px-2.5 py-1 rounded shadow-md flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#0E96E1]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0E96E1]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0B2545] tracking-tight mb-2 group-hover:text-[#0E96E1] transition-colors uppercase">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-slate-200">
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-white border border-slate-200 text-[#0B2545] px-2.5 py-1 rounded font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects#${project.id}`}
                  className="flex items-center justify-between text-xs font-bold text-[#0B2545] group-hover:text-[#0E96E1] uppercase tracking-wider transition-colors"
                >
                  <span>Project Case Study</span>
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
