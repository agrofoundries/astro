import { ShieldCheck, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    quote: "Astro Precast delivered 120 custom storm catch basins and heavy slabs across 10 consecutive days during our arterial drainage modernization. Every unit matched our invert elevation sheets, and their boom dispatch kept our excavation crews completely on schedule.",
    author: "Marcus Vance",
    role: "Senior Civil Project Manager",
    company: "Apex Civil Construction LLC",
    rating: 5,
    projectRef: "SUFFOLK HWY CORRIDOR",
  },
  {
    quote: "Astro's precast engineering team caught two invert conflicts with existing underground utilities before casting our vault sections. That pre-pour review saved our project tens of thousands in delays and earned immediate municipal sign-off.",
    author: "Elena Rostova, PE",
    role: "Principal Infrastructure Engineer",
    company: "Vanguard Civil Design Group",
    rating: 5,
    projectRef: "ROUTE 110 UTILITY VAULT",
  },
  {
    quote: "Operating in constrained municipal utility corridors requires absolute scheduling reliability. Astro Precast has been our go-to manufacturer for watertight septic vessels, leaching fields, and heavy highway slabs across Nassau and Suffolk.",
    author: "Darren Holt",
    role: "VP of Field Operations",
    company: "Tri-State Infrastructure Developers",
    rating: 5,
    projectRef: "REGIONAL DRAINAGE",
  },
];

const TRUST_BADGES = [
  "5,000+ PSI COMPRESSIVE STRENGTH",
  "AASHTO HS20-44 TRAFFIC RATED",
  "SUFFOLK COUNTY DPW APPROVED",
  "NASSAU COUNTY HEALTH COMPLIANT",
  "ASTM C1227 & C478 CERTIFIED",
];

export function TrustSection() {
  return (
    <section id="trust" className="w-full section-concrete section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Contractor Confidence"
          specCode="FIELD VERIFIED"
          title="Trusted by General Contractors, Structural Engineers &amp; DOT Agencies"
          description="Civil infrastructure contractors, municipal public works authorities, and utility engineers rely on Astro Precast for certified 5,000+ PSI strength, precise invert dimensions, and on-time jobsite staging."
          centered
        />

        {/* Industrial Certification Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#CBD5E1] font-mono-spec text-[11px] font-bold text-[#0A2540] rounded-lg shadow-2xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0E96E1] shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="bg-[#EAEEF3] text-[#0A2540] px-4 py-2.5 flex items-center justify-between text-xs font-mono-spec border-b border-[#CBD5E1]">
                  <span className="text-[#0E96E1] font-bold">[{item.projectRef}]</span>
                  <div className="flex text-amber-500 text-xs">
                    ★★★★★
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <Quote className="w-6 h-6 text-[#CBD5E1] mb-2.5" />
                  <p className="text-xs sm:text-sm text-[#0A2540] leading-relaxed font-normal italic mb-5">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-[#CBD5E1]">
                <div className="font-bold text-[#0A2540] text-xs uppercase tracking-tight">{item.author}</div>
                <div className="text-[11px] font-mono-spec text-[#0E96E1] font-bold">{item.role}</div>
                <div className="text-[11px] text-[#64748B] font-normal">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
