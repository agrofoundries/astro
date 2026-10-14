import {
  Monitor,
  Box,
  Cpu,
  FileSpreadsheet,
  Share2,
  Bot,
} from "lucide-react";

interface SoftwareTopic {
  title: string;
  category: string;
  description: string;
  applications: string;
  icon: typeof Monitor;
}

const SOFTWARE_TOPICS: SoftwareTopic[] = [
  {
    title: "CAD and Drafting",
    category: "2D Production Detailing",
    description: "Preparation of 2D engineering drawings, typical connection libraries, site layout plans, and plant dimensioning sheets.",
    applications: "AutoCAD, BricsCAD, industry drafting toolsets",
    icon: Monitor,
  },
  {
    title: "Structural 3D CAD Detailing",
    category: "LOD 400 Fabrication",
    description: "Detailed intelligent 3D models containing concrete geometry, embeds, rebar cages, lifting loops, and void penetrations.",
    applications: "Tekla Structures, Autodesk Revit, Trimble Connect",
    icon: Box,
  },
  {
    title: "Structural Analysis Software",
    category: "Finite Element & Code Checking",
    description: "Finite element modeling, plate bending analysis, shear wall diaphragm evaluation, and lateral wind/seismic load distribution.",
    applications: "RISA-3D, SAP2000, ETABS, Mathcad",
    icon: Cpu,
  },
  {
    title: "Precast Detailing Automation",
    category: "Shop Ticket Automation",
    description: "Algorithmic generation of piece tickets, automated bar bending schedules, and direct export to rebar shearlines.",
    applications: "Tekla Precast, automated CAM export plugins",
    icon: FileSpreadsheet,
  },
  {
    title: "Digital Coordination",
    category: "Clash Detection & IFC",
    description: "Multi-discipline model federation with architectural, structural steel, and MEP models to eliminate jobsite conflicts.",
    applications: "Navisworks, Autodesk Construction Cloud, open 3D IFC formats",
    icon: Share2,
  },
  {
    title: "Manufacturing Automation",
    category: "CAM & Machinery Integration",
    description: "Direct numerical control data transfer to automated rebar benders, laser formwork projectors, and mesh welding machines.",
    applications: "Unitechnik CAD-CAM interfaces, PXML formats",
    icon: Bot,
  },
];

export function SoftwareTechnology() {
  return (
    <section id="software" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Digital Workflows</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#014088] tracking-tight">
            Engineering Software and Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-medium mt-2">
            Modern digital modeling, structural analysis tools, and automated manufacturing workflows utilized in precast concrete engineering.
          </p>
        </div>

        {/* 6 Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFTWARE_TOPICS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between hover:border-[#014088] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#014088] bg-[#E8F3FF] px-2.5 py-1 rounded border border-[#DCE5F0]">
                      {tool.category}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#F2F7FF] border border-[#DCE5F0] flex items-center justify-center text-[#014088]">
                      <Icon className="w-4 h-4 text-[#0E96E1]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#014088] mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-800 leading-relaxed mb-4 font-medium">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2F7FF] text-[11px]">
                  <p className="text-slate-700 font-medium">
                    <strong className="text-[#014088] font-bold">Industry Tools:</strong> {tool.applications}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-xs text-[#64748B] text-center max-w-2xl mx-auto italic">
          Software titles and trade names are referenced strictly for technical identification and workflow description. No official vendor endorsements or affiliations are implied.
        </p>
      </div>
    </section>
  );
}
