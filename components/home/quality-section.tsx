import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const QA_PILLARS = [
  {
    code: "ASTM C39",
    title: "Hydraulic Compressive Breaks",
    desc: "1-day strip breaks, 7-day intermediate strength, and 28-day compliance breaks tested in our calibrated testing frame.",
  },
  {
    code: "PCI MNL-116",
    title: "Audited Plant Quality Standards",
    desc: "Rigorous daily batching inspections, rebar placement clear covers, and pre-pour mold release verification.",
  },
  {
    code: "LASER METROLOGY",
    title: "Dimensional Tolerance Verification",
    desc: "Laser distance meters verify length, camber, squareness, and insert embedment locations to ±1/16\" before yard release.",
  },
  {
    code: "MTR TRACEABILITY",
    title: "100% Domestic Mill Test Reports",
    desc: "Complete heat number tracking on Grade 60 rebar, 270k low-relaxation prestressing strand, and ASTM C150 Type III cement.",
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="w-full section-concrete section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Quality Image with Clean Light Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl aspect-[4/3] bg-white">
              <Image
                src="/images/quality-inspection.jpg"
                alt="Quality assurance technician performing tolerance and compressive break verification"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Light High-Contrast Metric Readout */}
            <div className="mt-3 p-3.5 bg-white border border-[#CBD5E1] rounded-lg shadow-sm grid grid-cols-2 gap-3 text-center font-mono-spec">
              <div className="p-2">
                <span className="text-[#64748B] text-xs font-bold block uppercase">BREAK CAPACITY</span>
                <span className="text-[#0A2540] font-black text-lg">10,000+ PSI</span>
              </div>
              <div className="p-2 border-l border-[#CBD5E1]">
                <span className="text-[#64748B] text-xs font-bold block uppercase">AUDIT STANDARD</span>
                <span className="text-[#0E96E1] font-black text-lg">PCI MNL-116</span>
              </div>
            </div>
          </div>

          {/* Quality Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Quality Assurance & Verification"
              specCode="ACI / PCI / ASTM"
              title="Rigorous Materials Testing from Aggregate to Finished Component"
              description="Quality is engineered into every mix design and verified on every pour. Our in-house materials laboratory verifies slump, entrained air, and compressive break curves so every component arrives on site with full documentation."
            />

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {QA_PILLARS.map((pillar) => (
                <div
                  key={pillar.code}
                  className="p-4 sm:p-5 bg-white border border-[#CBD5E1] border-l-4 border-l-[#0A2540] rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-mono-spec text-[10px] font-bold text-[#0E96E1] mb-1">
                    [{pillar.code}]
                  </div>
                  <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-tight mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/capabilities#quality" className="btn btn-usa-blue">
                Download QA Manual &amp; Test Procedures
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <span className="font-mono-spec text-xs font-bold text-[#0A2540] bg-white border border-[#CBD5E1] px-3.5 py-2 rounded-lg shadow-2xs">
                PCI • ACI • AASHTO • ASTM COMPLIANT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
