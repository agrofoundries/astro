import Image from "next/image";
import {
  Compass,
  Anchor,
  Shield,
  Wrench,
  Layers,
  Truck,
  Users2,
  FileCheck,
  AlertTriangle,
} from "lucide-react";

interface ErectionTopic {
  title: string;
  description: string;
  icon: typeof Compass;
}

const ERECTION_TOPICS: ErectionTopic[] = [
  {
    title: "Erection Planning",
    description: "Developing sequential pick plans, crane positioning layouts, component staging locations, and daily installation milestones.",
    icon: Compass,
  },
  {
    title: "Lifting and Rigging",
    description: "Sizing spreader beams, calculating sling angles, verifying lifting insert capacities, and dynamic impact factors.",
    icon: Anchor,
  },
  {
    title: "Temporary Bracing",
    description: "Engineering pipe braces, deadmen anchors, and lateral stability bracing to resist design wind loads prior to permanent connection.",
    icon: Shield,
  },
  {
    title: "Connection Installation",
    description: "Field bolting, torque verification, structural welding procedures (AWS D1.1/D1.4), and shim stack placement.",
    icon: Wrench,
  },
  {
    title: "Grouting",
    description: "Non-shrink cementitious grouting of column base plates, shear keys, bed joints, and tendon duct pumping.",
    icon: Layers,
  },
  {
    title: "Transportation Planning",
    description: "Over-the-road trucking logistics, permitted wide-load routes, trailer dunnage requirements, and travel tie-downs.",
    icon: Truck,
  },
  {
    title: "Site Coordination",
    description: "Coordinating crane path access, ground bearing pressure verification with the GC, and jobsite readiness reviews.",
    icon: Users2,
  },
  {
    title: "Installation Documentation",
    description: "Daily crane lift logs, certified rigging inspections, torque inspection records, and final precast sign-off reports.",
    icon: FileCheck,
  },
];

export function ConstructionErection() {
  return (
    <section id="erection" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Jobsite Operations</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#014088] tracking-tight">
            Construction and Erection
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Engineering considerations for crane rigging, temporary lateral bracing, site logistics, and precast field connections.
          </p>
        </div>

        {/* Feature Banner with Construction Photo */}
        <div className="mb-10 bg-white border border-[#DCE5F0] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
            <span className="text-[11px] font-bold text-[#0E96E1] uppercase tracking-wider bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
              Field Engineering &amp; Rigging
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#014088]">
              Rigging Analysis &amp; Erection Sequence Engineering
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Safe precast erection requires precise calculations for sling angles, crane pick radiuses, ground bearing pressures, and temporary wind bracing. Each pick must be engineered to prevent member cracking during lifting and rotation.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[220px]">
            <Image
              src="/images/hero-precast.jpg"
              alt="Precast concrete crane erection and rigging on construction jobsite"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 8 Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ERECTION_TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between hover:border-[#014088] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center text-[#014088] mb-4">
                    <Icon className="w-5 h-5 text-[#0E96E1]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#014088] mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Disclaimer */}
        <div className="mt-8 bg-white border border-[#DCE5F0] rounded-lg p-4 flex items-start gap-3 text-xs text-[#475569]">
          <AlertTriangle className="w-5 h-5 text-[#0E96E1] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#014088]">Safety Notice:</strong> Field erection guidelines and lifting topics provided here are informational only. They do not replace a site-specific erection plan stamped by a qualified professional engineer or OSHA compliant rigging procedures developed by a certified rigging professional.
          </p>
        </div>
      </div>
    </section>
  );
}
