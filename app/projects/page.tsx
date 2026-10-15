import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "metro-transit-hub",
    title: "Metro Multi-Modal Transit Center",
    category: "Infrastructure & Transportation",
    location: "Dallas, TX",
    year: "2024",
    image: "/images/infrastructure.jpg",
    overview: "A flagship regional transportation center requiring 420 precast prestressed bridge girders and 85 custom architectural spandrels delivered on an accelerated night-shift erection schedule.",
    challenges: "Active freight rail lines adjacent to erection crane pads required strict 4-hour night delivery windows with zero margin for delayed transport.",
    solution: "Our plant dispatch team coordinated a dedicated transport convoy, arriving at the crane hook within a 15-minute margin every night.",
    stats: [
      { label: "Girders Delivered", value: "420 Units" },
      { label: "Maximum Span", value: "115 Feet" },
      { label: "Compressive Strength", value: "8,500 PSI" },
      { label: "Erection Schedule", value: "100% On-Time" },
    ],
  },
  {
    id: "apex-logistics-park",
    title: "Apex Gateway Logistics Hub",
    category: "Industrial Distribution",
    location: "Fort Worth, TX",
    year: "2023",
    image: "/images/wall-panels.jpg",
    overview: "Over 240,000 sq. ft. of insulated concrete sandwich wall panels for a premier 1.2M sq. ft. automated e-commerce distribution center.",
    challenges: "Demanding thermal envelope requirements (R-22 continuous) combined with extreme dock-door opening densities.",
    solution: "Custom engineered non-conductive composite connector pins and prestressed panel lintels over 48 truck loading bays.",
    stats: [
      { label: "Precast Surface Area", value: "240,000 SF" },
      { label: "Panel Thickness", value: "10 Inches" },
      { label: "Thermal Value", value: "R-22 Continuous" },
      { label: "Completion Delta", value: "6 Weeks Early" },
    ],
  },
  {
    id: "horizon-tower",
    title: "Horizon Commercial Plaza",
    category: "Commercial Architecture",
    location: "Austin, TX",
    year: "2024",
    image: "/images/commercial-building.jpg",
    overview: "Ten-story commercial office building showcasing white aggregate architectural precast facades with deep window reveals and acid-etched texture.",
    challenges: "Strict aesthetic color uniformity requirements across 180 panels cast over a 3-month seasonal temperature swing.",
    solution: "Enclosed climate-cured bays and strict single-source white cement and quartz aggregate stockpiles maintained chromatic fidelity.",
    stats: [
      { label: "Facade Panels", value: "180 Custom Units" },
      { label: "Finish Type", value: "Acid-Etch White Quartz" },
      { label: "LEED Rating", value: "Gold Certified" },
      { label: "Punchlist Rate", value: "< 0.5% Rectification" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Completed Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Project Case Studies & Performance Records
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Explore how Astro Precast solves complex site logistics, tight urban clearances, and demanding structural specifications for major regional builders.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24 space-y-24">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="p-8 md:p-12 rounded-3xl border border-gray-200 bg-[#FAFAFB] shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
                  {project.title}
                </h2>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1 font-semibold">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Completed {project.year}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.overview}
                </p>

                <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs space-y-2">
                  <div>
                    <strong className="text-gray-900">Project Challenge: </strong>
                    <span className="text-gray-600">{project.challenges}</span>
                  </div>
                  <div>
                    <strong className="text-brand-primary">Precast Solution: </strong>
                    <span className="text-gray-600">{project.solution}</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {project.stats.map((st, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-gray-200 text-center">
                      <div className="text-xs font-bold text-gray-900">{st.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link href="/quote" className="btn-primary text-xs">
                    Discuss a Similar Project
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
