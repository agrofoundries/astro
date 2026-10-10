import Link from "next/link";
import { Download, Compass, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const RESOURCES = [
  {
    csi: "CSI 03 45 00",
    title: "Structural Precast Specifier's Guide",
    type: "PDF (4.2 MB)",
    desc: "48-page technical design guide including load span tables, deflection criteria, bearing seat dimensions, and thermal ties.",
    badge: "SPEC GUIDE",
  },
  {
    csi: "CAD / BIM DET-04",
    title: "Standard Connection Details (DWG / RVT)",
    type: "CAD / REVIT / PDF",
    desc: "Pre-engineered bearing seat details, weld plate embedments, column pocket bases, and slotted expansion joints.",
    badge: "CAD DETAILS",
  },
  {
    csi: "ASHRAE 90.1",
    title: "Thermal Performance & R-Value Data",
    type: "PDF (1.8 MB)",
    desc: "Continuous insulation analysis, edge boundary conditions, and continuous envelope compliance calculations.",
    badge: "THERMAL SPEC",
  },
  {
    csi: "LEED v4.1 EPD",
    title: "Mix Design & Environmental Product Declarations",
    type: "EPD / PDF (2.1 MB)",
    desc: "Third-party verified Type III Environmental Product Declarations (EPDs) for low-carbon slag and fly ash mix designs.",
    badge: "LOW-CARBON",
  },
];

export function TechnicalResources() {
  return (
    <section id="technical-resources" className="w-full section-steel section-padding">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <SectionHeading
              eyebrow="Engineering Library"
              specCode="DOCUMENTS & CAD"
              title="Technical Specifications &amp; BIM Details"
              description="Equip your architects, structural specifiers, and estimating teams with pre-certified connection details, load span calculations, and verified BIM components."
            />
          </div>
          <Link
            href="/resources"
            className="btn btn-usa-outline-blue mb-4 md:mb-8 inline-flex self-start md:self-auto"
          >
            Access Full Resource Center
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {RESOURCES.map((res, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="bg-[#EAEEF3] text-[#0A2540] px-4 py-2.5 flex items-center justify-between text-xs font-mono-spec border-b border-[#CBD5E1]">
                  <span className="text-[#C8101E] font-bold">[{res.csi}]</span>
                  <span className="text-[#64748B] text-[10px] font-bold">{res.badge}</span>
                </div>

                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-mono-spec text-[#64748B] font-bold block mb-1.5">
                    {res.type}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0A2540] tracking-tight mb-2 group-hover:text-[#C8101E] transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal mb-5">
                    {res.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-[#CBD5E1]">
                <a
                  href="/resources#downloads"
                  className="flex items-center justify-between text-xs font-bold text-[#0A2540] group-hover:text-[#C8101E] uppercase tracking-wider"
                >
                  <span className="flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-[#C8101E]" />
                    Download File
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
