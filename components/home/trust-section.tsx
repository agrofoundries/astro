import { ShieldCheck, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    quote: "PRECASTPRO delivered 350 wall panels across 14 consecutive days during our highway expansion shutdown. Not a single panel arrived out of tolerance, and their dispatch team stayed in constant radio sync with our crane rigger.",
    author: "Marcus Vance",
    role: "Senior Project Manager",
    company: "Apex Heavy Civil Construction",
    rating: 5,
    projectRef: "I-35 EXPANSION",
  },
  {
    quote: "Their engineering division caught three critical clashes in the structural steel interface prior to casting. That value engineering review saved our client over $180,000 and two weeks in field modification downtime.",
    author: "Elena Rostova, PE",
    role: "Principal Structural Engineer",
    company: "Vanguard Design Group",
    rating: 5,
    projectRef: "HORIZON TOWER",
  },
  {
    quote: "When erecting in dense urban corridors with 4-hour night street permits, you need a precast partner who understands just-in-time delivery. PRECASTPRO has been our sole precast supplier for three regional distribution hubs.",
    author: "Darren Holt",
    role: "VP of Construction",
    company: "Summit Logistics Development",
    rating: 5,
    projectRef: "APEX GATEWAY",
  },
];

const TRUST_BADGES = [
  "PCI PLANT CERTIFIED (MNL-116)",
  "ACI CORPORATE MEMBER",
  "AASHTO APPROVED PRECASTER",
  "ISNETWORLD SAFETY RATED (GRADE A)",
  "STATE DOT REGISTERED",
];

export function TrustSection() {
  return (
    <section id="trust" className="w-full section-concrete section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Contractor Confidence"
          specCode="FIELD VERIFIED"
          title="Trusted by General Contractors, Structural Engineers &amp; DOT Agencies"
          description="Heavy civil developers and commercial general contractors rely on PRECASTPRO for structural compliance, dimensional precision, and uncompromising jobsite safety."
          centered
        />

        {/* Industrial Certification Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#CBD5E1] font-mono-spec text-[11px] font-bold text-[#0A2540] rounded-lg shadow-2xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8101E] shrink-0" />
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
                  <span className="text-[#C8101E] font-bold">[{item.projectRef}]</span>
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
                <div className="text-[11px] font-mono-spec text-[#C8101E] font-bold">{item.role}</div>
                <div className="text-[11px] text-[#64748B] font-normal">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
