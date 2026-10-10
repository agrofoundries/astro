import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const INDUSTRIAL_PROJECTS = [
  {
    id: "metro-transit-hub",
    title: "Metro Multi-Modal Transit Center",
    category: "Highway & Civil Infrastructure",
    location: "Dallas, TX",
    year: "2024",
    image: "/images/infrastructure.jpg",
    description: "420 prestressed AASHTO Type IV bridge girders and 85 custom architectural spandrels fabricated and delivered on an accelerated night-shift crane schedule.",
    specs: ["420 Girders", "8,500 PSI High-Early", "Zero Hook Delays"],
  },
  {
    id: "apex-logistics-park",
    title: "Apex Gateway Logistics Hub",
    category: "Heavy Industrial Distribution",
    location: "Fort Worth, TX",
    year: "2023",
    image: "/images/wall-panels.jpg",
    description: "240,000 sq. ft. of insulated concrete sandwich wall panels with composite non-conductive pins and continuous R-22 thermal envelope across 48 loading docks.",
    specs: ["240,000 SF Precast", "R-22 Continuous", "6 Weeks Ahead of Schedule"],
  },
  {
    id: "horizon-tower",
    title: "Horizon Commercial Plaza",
    category: "Architectural Commercial Enclosure",
    location: "Austin, TX",
    year: "2024",
    image: "/images/commercial-building.jpg",
    description: "Ten-story commercial structure featuring custom acid-etched white quartz aggregate facade panels with integrated window receiver pockets and cast-in embeds.",
    specs: ["180 Custom Panels", "Acid-Etch Quartz", "LEED Gold Certified"],
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
            <ArrowRight className="w-4 h-4 text-[#D71920]" />
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
                    <Calendar className="w-3 h-3 text-[#D71920]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0B2545] tracking-tight mb-2 group-hover:text-[#D71920] transition-colors uppercase">
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
                  className="flex items-center justify-between text-xs font-bold text-[#0B2545] group-hover:text-[#D71920] uppercase tracking-wider transition-colors"
                >
                  <span>Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D71920]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
