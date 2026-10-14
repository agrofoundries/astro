import Link from "next/link";
import { Download, FileText, Layers, ShieldCheck, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

const SPEC_DOWNLOADS = [
  {
    title: "Precast Concrete Insulated Wall Panel Guide Specification",
    section: "CSI MasterFormat 03 45 00",
    format: "DOCX / PDF (1.2 MB)",
    desc: "Complete editable 3-part specification for precast insulated sandwich wall panels with thermal performance metrics.",
  },
  {
    title: "Structural Prestressed Concrete Beam & Girder Guide",
    section: "CSI MasterFormat 03 41 00",
    format: "PDF (3.4 MB)",
    desc: "Design criteria, fabrication standards, deflection limits, and bearing pad tolerances for prestressed beams.",
  },
  {
    title: "Precast Concrete Utility Structures & Manholes Spec",
    section: "CSI MasterFormat 33 05 13",
    format: "PDF (2.1 MB)",
    desc: "ASTM C478 precast manhole, inlet, and vault specifications including resilient boot connector standards.",
  },
  {
    title: "Precast Box Culvert Standard Engineering Details",
    section: "CSI MasterFormat 33 42 13",
    format: "DWG / PDF (8.6 MB)",
    desc: "Full CAD drawing package showing standard tongue-and-groove joint details, wingwalls, and bedding requirements.",
  },
];

const WHITEPAPERS = [
  {
    title: "Embodied Carbon Reduction in High-Strength Precast Mixes",
    author: "PRECASTPRO Engineering Division",
    date: "2024 Research Report",
    desc: "An experimental study examining 30-40% supplementary cementitious material replacement in 8,500 PSI mix designs.",
  },
  {
    title: "Accelerating Erection Cycles in Dense Urban Corridors",
    author: "Logistics & Site Operations Team",
    date: "Field Operations Brief",
    desc: "Best practices for street closure permitting, nighttime crane hook rigging, and tandem trailer staging in downtown sites.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Engineering & Technical Center
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              CSI Specifications, CAD Details & Whitepapers
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Equip your specifiers, architects, and structural engineers with verified precast design documents, MasterFormat 3-part CSI specs, and CAD details.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24 space-y-20">
        {/* CSI Specifications */}
        <div id="downloads">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Downloadable Spec Sheets
            </span>
            <h2 className="text-2xl font-black text-gray-900 mt-1">
              CSI MasterFormat™ 3-Part Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPEC_DOWNLOADS.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 hover:border-brand-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 rounded bg-sky-100 text-brand-primary font-bold">
                      {doc.section}
                    </span>
                    <span className="text-gray-400 font-medium">{doc.format}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {doc.desc}
                  </p>
                </div>

                <a
                  href="#download"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-primary-dark pt-4 border-t border-gray-200"
                >
                  <Download className="w-4 h-4" />
                  Download Complete Specification Package
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Whitepapers & Technical Guides */}
        <div>
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Peer-Reviewed Research
            </span>
            <h2 className="text-2xl font-black text-gray-900 mt-1">
              Engineering Whitepapers & Industry Reports
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHITEPAPERS.map((paper, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs text-gray-400 mb-2">
                  {paper.author} • {paper.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {paper.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {paper.desc}
                </p>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-primary-dark"
                >
                  Read Whitepaper
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
