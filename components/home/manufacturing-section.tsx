import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Cog, CheckCircle2, Shield, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const CAPABILITIES_LIST = [
  {
    tag: "SYS-01",
    title: "Computerized Twin-Shaft Planetary Batching",
    description: "Automated aggregate moisture sensors and precision load cells guarantee exact water-cement ratios and consistent slump flow across every batch.",
  },
  {
    tag: "SYS-02",
    title: "Continuous Machined Steel Casting Beds",
    description: "Laser-aligned long-line prestressing beds equipped with bulkheads engineered for 2,000 kips of prestressing strand tensioning force.",
  },
  {
    tag: "SYS-03",
    title: "Enclosed Hydration & Accelerated Steam Curing",
    description: "Thermal insulated curing enclosures with automated steam hydration cycles deliver stripping strengths of 4,000+ PSI within 16 hours.",
  },
  {
    tag: "SYS-04",
    title: "Tandem 60-Ton Overhead Bridge Cranes",
    description: "Synchronized dual-hook crane rigging systems designed for smooth, damage-free demolding, turnover, and flatbed trailer loading.",
  },
];

export function ManufacturingSection() {
  return (
    <section id="manufacturing" className="w-full section-concrete section-padding">
      <div className="section-container-wide">
        <SectionHeading
          eyebrow="Fabrication Infrastructure"
          specCode="FACILITY SPEC 03 40"
          title="Heavy-Duty Manufacturing &amp; Casting Capacity"
          description="Operating 125,000 sq. ft. of climate-controlled casting bays designed to fabricate massive structural bridge components, high-load foundation vaults, and precision architectural wall panels."
        />

        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Facility Imagery with Light Clean Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#CBD5E1] shadow-lg aspect-[4/3] bg-white">
              <Image
                src="/images/manufacturing.jpg"
                alt="PRECASTPRO automated manufacturing facility with precision casting beds"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Light High-Contrast Metric Readout */}
            <div className="mt-3 p-3.5 bg-white border border-[#CBD5E1] rounded-lg shadow-sm grid grid-cols-2 gap-3 text-center font-mono-spec">
              <div className="p-2">
                <span className="text-[#64748B] text-xs font-bold block uppercase">LIFTING INFRASTRUCTURE</span>
                <span className="text-[#0A2540] font-black text-lg">60-TON TANDEM</span>
              </div>
              <div className="p-2 border-l border-[#CBD5E1]">
                <span className="text-[#64748B] text-xs font-bold block uppercase">TENSIONING BED FORCE</span>
                <span className="text-[#C8101E] font-black text-lg">2,000 KIPS</span>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-3.5">
              {CAPABILITIES_LIST.map((item) => (
                <div
                  key={item.tag}
                  className="p-4 bg-white border border-[#CBD5E1] border-l-4 border-l-[#0A2540] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono-spec text-[10px] font-bold text-[#C8101E]">[{item.tag}]</span>
                    <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal pl-6">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/capabilities" className="btn btn-usa-blue">
                Review Plant Tooling &amp; Equipment
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Schedule Plant Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
