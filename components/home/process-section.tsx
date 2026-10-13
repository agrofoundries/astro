import { ClipboardCheck, PencilRuler, UsersRound, FileCheck } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Understand Project Requirements",
    description: "Review architectural drawings, structural specifications, site criteria, loads, and client fabrication parameters.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Design and Detail",
    description: "Perform structural calculations, design connections, model 3D components, and prepare detailed shop drawings.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Review and Coordinate",
    description: "Collaborate with project teams, general contractors, and plant personnel to resolve clashes and verify details.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Deliver Engineering Documents",
    description: "Provide PE-stamped calculation packages, approved erection plans, and final fabrication piece tickets for production.",
    icon: FileCheck,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Engineering Workflow</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#032356] tracking-tight">
            Our Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            A structured four-step approach guiding precast engineering projects from initial drawings through final document delivery.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between relative hover:border-[#032356] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#D4030C]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center text-[#032356]">
                      <Icon className="w-4 h-4 text-[#032356]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#032356] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2F7FF] text-[11px] text-[#64748B]">
                  Step {index + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Note */}
        <p className="mt-8 text-xs text-[#64748B] text-center max-w-2xl mx-auto italic">
          Note: This represents a standard engineering workflow. Project-specific sequences are tailored to match each precast manufacturer&apos;s contractual and plant schedules.
        </p>
      </div>
    </section>
  );
}
