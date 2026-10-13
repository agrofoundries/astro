import { SectionHeading } from "@/components/ui/section-heading";
import { Clock, ShieldCheck, Mountain, TrendingDown, Flame, Leaf, ArrowRight } from "lucide-react";

const INDUSTRIAL_BENEFITS = [
  {
    code: "BEN-01",
    metric: "40–60%",
    metricLabel: "Schedule Compression",
    title: "Off-Site Concurrent Critical Path",
    desc: "Precast components are cast and cured concurrently while site excavation and foundation work are underway, cutting months off the critical path.",
    icon: Clock,
  },
  {
    code: "BEN-02",
    metric: "100%",
    metricLabel: "Weather Independence",
    title: "Factory-Controlled Hydration",
    desc: "Casting inside enclosed steam-cured beds eliminates weather delays, cold-weather freeze risks, and hot-weather surface cracking.",
    icon: ShieldCheck,
  },
  {
    code: "BEN-03",
    metric: "10,000",
    metricLabel: "PSI Max Strength",
    title: "High-Performance Concrete Mixes",
    desc: "Low water-cement ratios and precision vibration achieve superior density, low permeability, and extraordinary abrasion resistance.",
    icon: Mountain,
  },
  {
    code: "BEN-04",
    metric: "Up to 4-HR",
    metricLabel: "UL Fire Endurance",
    title: "Inherent Fire & Blast Resistance",
    desc: "Concrete will not burn, melt, or produce toxic fumes. Inherently meets strict UL fire barrier ratings without expensive applied sprays.",
    icon: Flame,
  },
  {
    code: "BEN-05",
    metric: "70%",
    metricLabel: "Field Crew Reduction",
    title: "Minimal Jobsite Labor & Congestion",
    desc: "Erected directly from delivery trailers with small rigging crews, eliminating messy formwork staging and extensive on-site rebar tying.",
    icon: TrendingDown,
  },
  {
    code: "BEN-06",
    metric: "-35%",
    metricLabel: "Embodied Carbon",
    title: "Low-Carbon SCM Mix Designs",
    desc: "Custom mix formulations integrating blast furnace slag and fly ash lower embodied carbon with verified third-party EPD certificates.",
    icon: Leaf,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full section-warm-concrete section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Heading & Sticky CTA Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Precast Advantage"
              specCode="ENGINEERING VALUE"
              title="Why Contractors Choose Precast"
              description="Eliminate the unpredictable field variables of cast-in-place concrete. Precast provides deterministic scheduling, higher compressive strength, and lower total project installed costs."
            />

            <div className="p-5 sm:p-6 bg-[#EAEEF3] border-2 border-[#CBD5E1] rounded-xl shadow-sm">
              <div className="font-mono-spec text-[11px] font-bold text-[#64748B] uppercase mb-1">
                VALUE ENGINEERING AUDIT
              </div>
              <h3 className="text-base font-bold text-[#0A2540] mb-2">
                Evaluate Precast vs. Cast-in-Place for Your Job
              </h3>
              <p className="text-xs text-[#475569] mb-5 leading-relaxed font-normal">
                Our precast applications team can run a comparative schedule and crane cycle cost breakdown for your structural drawings.
              </p>
              <a href="/quote" className="btn btn-usa-red btn-sm w-full">
                Get a Project Estimate
              </a>
            </div>
          </div>

          {/* Right Column: 6 Technical Benefit Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {INDUSTRIAL_BENEFITS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.code}
                    className="p-5 sm:p-6 bg-[#F8FAFC] border-2 border-[#CBD5E1] border-t-4 border-t-[#D4030C] rounded-xl shadow-sm hover:border-[#0A2540] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="font-mono-spec text-xs font-bold text-[#64748B]">
                          [{item.code}]
                        </span>
                        <div className="w-8 h-8 bg-white border border-[#CBD5E1] text-[#D4030C] rounded flex items-center justify-center shadow-2xs">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Big Metric Display */}
                      <div className="mb-2.5">
                        <span className="font-mono-spec text-2xl sm:text-3xl font-black text-[#0A2540] tracking-tight">
                          {item.metric}
                        </span>
                        <span className="block text-[11px] font-mono-spec font-bold text-[#D4030C] uppercase mt-0.5">
                          {item.metricLabel}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0A2540] tracking-tight mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
