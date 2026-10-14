import { Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  title: string;
  category: string;
  date: string;
  source: string;
  summary: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    title: "ACI 318-24 Development Updates for Structural Concrete",
    category: "Code & Standards Updates",
    date: "August 2024",
    source: "American Concrete Institute (concrete.org)",
    summary: "Committee updates focus on low-carbon concrete formulations, revised shear strength equations, and updated diaphragm design provisions.",
  },
  {
    title: "PCI Design Handbook 9th Edition Preparation Progress",
    category: "Precast Concrete Technology",
    date: "June 2024",
    source: "Precast/Prestressed Concrete Institute (pci.org)",
    summary: "Technical committees review updated load tables, modern insulated wall panel connections, and enhanced seismic ductility criteria.",
  },
  {
    title: "Advancements in Low-Carbon Supplementary Cementitious Materials (SCMs)",
    category: "Manufacturing Innovation",
    date: "April 2024",
    source: "Federal Highway Administration (FHWA)",
    summary: "U.S. transportation departments expand approvals for Portland-Limestone Cement (Type IL) and ground glass pozzolan in precast elements.",
  },
  {
    title: "Digital Fabrication and OpenBIM Interoperability for Precast Plants",
    category: "Industry Developments",
    date: "January 2024",
    source: "buildingSMART International",
    summary: "Refined IFC 4.3 standards improve interoperability between structural BIM models, automated rebar benders, and fabrication scheduling software.",
  },
];

export function IndustryNews() {
  return (
    <section id="news" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Industry Briefings</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#014088] tracking-tight">
            Industry News and Updates
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Verified updates on U.S. building codes, material technology developments, and precast manufacturing innovations.
          </p>
        </div>

        {/* 4 News Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="card-clean p-6 flex flex-col justify-between hover:border-[#014088] transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
                  <span className="font-bold text-[#0E96E1] uppercase tracking-wider bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD] text-[10px]">
                    {item.category}
                  </span>
                  <span className="text-[#64748B] flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#014088]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#014088] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F7FF] flex items-center justify-between text-xs">
                <span className="text-[#64748B] text-[11px]">Source: {item.source}</span>
                <span className="font-semibold text-[#014088] hover:text-[#0E96E1] inline-flex items-center gap-1 cursor-pointer">
                  <span>Industry Link</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
