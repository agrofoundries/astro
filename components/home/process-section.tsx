import { SectionHeading } from "@/components/ui/section-heading";
import { MessageSquareCode, DraftingCompass, Factory, Truck } from "lucide-react";

const INDUSTRIAL_PROCESS_STEPS = [
  {
    step: "PHASE 01",
    title: "Plan Review & Material Takeoff",
    spec: "24-48 HR ESTIMATING",
    description: "Our estimating engineers review architectural and structural general notes, identify connection optimization opportunities, and deliver an itemized precast proposal.",
    icon: MessageSquareCode,
  },
  {
    step: "PHASE 02",
    title: "BIM Detailing & PE Stamped Submittals",
    spec: "LOD 400 TEKLA / REVIT",
    description: "Full 3D modeling of every rebar cage, anchor bolt pocket, and embedment plate. Complete stamped engineering calculation packages submitted for engineer-of-record approval.",
    icon: DraftingCompass,
  },
  {
    step: "PHASE 03",
    title: "Precision Batching & Steam-Cured Casting",
    spec: "PCI MNL-116 QA INSPECTED",
    description: "Casting in laser-aligned steel beds with automated high-early mix batching. Slump, air, and 1-day/7-day/28-day cylinder compressive break tests logged for every pour.",
    icon: Factory,
  },
  {
    step: "PHASE 04",
    title: "Permitted Heavy Haul & Crane Hook Staging",
    spec: "JUST-IN-TIME DELIVERY",
    description: "Multi-axle heavy trailers dispatched with DOT permits and pilot escorts, timed to match your jobsite crane hook sequence to eliminate site congestion.",
    icon: Truck,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="w-full section-warm-concrete section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Milestone Execution"
          specCode="PROJECT TIMELINE"
          title="From Blueprint Takeoff to Crane Hook Erection"
          description="A deterministic four-phase manufacturing and delivery workflow engineered to minimize lead times, eliminate field surprises, and hit your target dry-in date."
          centered
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {INDUSTRIAL_PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="bg-[#EAEEF3] text-[#0A2540] px-4 py-2.5 flex items-center justify-between text-xs font-mono-spec border-b border-[#CBD5E1]">
                    <span className="text-[#C8101E] font-bold">[{step.step}]</span>
                    <span className="text-[#64748B] text-[10px] font-bold">{step.spec}</span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="w-11 h-11 bg-[#F4F6F9] border border-[#CBD5E1] text-[#0A2540] rounded-lg flex items-center justify-center mb-3.5 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0A2540] tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#F8FAFC] border-t border-[#CBD5E1] font-mono-spec text-[10px] text-[#64748B] text-center font-bold">
                  CRITICAL PATH ALIGNED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
