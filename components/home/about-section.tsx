import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Target, HeartHandshake, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
  {
    icon: Shield,
    title: "Structural Rigor",
    desc: "Uncompromising engineering compliance in mix designs, rebar cage clear covers, and steam hydration cycles.",
  },
  {
    icon: Target,
    title: "Crane Schedule Respect",
    desc: "We align manufacturing runs with erection critical paths, eliminating costly crane downtime.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Takeoffs",
    desc: "Clear unit itemization, realistic lead-time projections, and proactive field engineering support.",
  },
  {
    icon: Users,
    title: "Zero-Harm Safety",
    desc: "PCI & ISNetworld Grade-A certified safety culture across casting bays and interstate freight rigging.",
  },
];

export function AboutSection() {
  return (
    <section id="about-preview" className="w-full section-warm-concrete section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Company Heritage"
              specCode="EST. 1999"
              title="American Industrial Precast Manufacturing"
              description="Founded on the principles of precision manufacturing, unbending structural safety, and true trade partnership with general contractors and civil developers."
            />

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mt-3">
              Our 125,000 sq. ft. enclosed precast fabrication facility combines automated planetary batching technology with seasoned American craftsmen. From preliminary schematic modeling through final erection coordination, we take pride in being the structural backbone of critical infrastructure across the Southern and Central United States.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-3.5 bg-[#F8FAFC] border-2 border-[#CBD5E1] border-l-4 border-l-[#0A2540] rounded-xl shadow-2xs">
                    <div className="flex items-center gap-2 mb-1 text-[#0A2540]">
                      <Icon className="w-4 h-4 text-[#C8101E] shrink-0" />
                      <h4 className="text-xs font-bold uppercase tracking-tight">{val.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-relaxed font-normal">{val.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link href="/about" className="btn btn-usa-blue">
                Explore Our Heritage &amp; Plant Equipment
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="p-3 bg-[#EAEEF3] border-2 border-[#CBD5E1] rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#CBD5E1]">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="PRECASTPRO facility floor"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 text-[#0A2540] font-mono-spec text-[9px] font-bold px-2 py-0.5 rounded border border-[#CBD5E1]">
                    PLANT CASTING BAY
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-[#0A2540] text-white flex flex-col justify-center rounded-xl shadow-sm">
                  <div className="font-mono-spec text-3xl sm:text-4xl font-black text-white">25+</div>
                  <div className="font-mono-spec text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-1">
                    YEARS DOMESTIC CASTING
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-white border border-[#CBD5E1] text-[#0A2540] flex flex-col justify-center rounded-xl shadow-sm">
                  <div className="font-mono-spec text-3xl sm:text-4xl font-black text-[#C8101E]">1.2M+</div>
                  <div className="font-mono-spec text-[10px] font-bold uppercase tracking-wider text-[#64748B] mt-1">
                    SQ. FT. PRECAST ERECTED
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#CBD5E1]">
                  <Image
                    src="/images/commercial-building.jpg"
                    alt="Erected precast commercial building"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 text-[#0A2540] font-mono-spec text-[9px] font-bold px-2 py-0.5 rounded border border-[#CBD5E1]">
                    COMPLETED ERECTION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
