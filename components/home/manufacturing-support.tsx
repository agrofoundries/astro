import {
  CalendarDays,
  Beaker,
  Maximize2,
  Grid3X3,
  Flame,
  Zap,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

interface SupportTopic {
  title: string;
  description: string;
  icon: typeof CalendarDays;
}

const TOPICS: SupportTopic[] = [
  {
    title: "Production Planning",
    description: "Casting bed turnaround schedules, piece sequencing, mold cycling optimization, and storage yard logistics.",
    icon: CalendarDays,
  },
  {
    title: "Concrete Mix Information",
    description: "Self-consolidating concrete (SCC) formulations, low water-cement ratios, aggregate gradation, and early strength gain.",
    icon: Beaker,
  },
  {
    title: "Formwork and Molds",
    description: "Precision steel molds, timber formwork carpentry, form release agent application, and dimensional stability checks.",
    icon: Maximize2,
  },
  {
    title: "Reinforcement",
    description: "Rebar cage fabrication, chair spacing, welded wire mesh placement, and minimum concrete clear cover verification.",
    icon: Grid3X3,
  },
  {
    title: "Casting and Curing",
    description: "Controlled placement, consolidation techniques, thermal curing blankets, and maturity-based strength monitoring.",
    icon: Flame,
  },
  {
    title: "Prestressing Operations",
    description: "Hydraulic strand tensioning, elongation verification, detensioning sequences, and prestress force transfer protocols.",
    icon: Zap,
  },
  {
    title: "Production Efficiency",
    description: "Lean manufacturing workflows, scrap minimization, crane cycle improvements, and automated batching integration.",
    icon: TrendingUp,
  },
  {
    title: "Manufacturing Documentation",
    description: "Pour records, mill test reports, daily bed inspection logs, and comprehensive plant quality tracking files.",
    icon: FileCheck2,
  },
];

export function ManufacturingSupport() {
  return (
    <section id="manufacturing" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Plant Operations</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#032356] tracking-tight">
            Manufacturing Support
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Technical guidance and operational engineering to help precast concrete fabrication plants optimize daily casting, prestressing, and curing.
          </p>
        </div>

        {/* 8 Topics Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between hover:border-[#032356] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center text-[#032356] mb-4">
                    <Icon className="w-5 h-5 text-[#D4030C]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#032356] mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2F7FF] text-[11px] text-[#64748B]">
                  Precast Plant Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
