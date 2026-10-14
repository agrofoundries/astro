import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, FileCode2, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const ENGINEERING_FEATURES = [
  {
    code: "ENG-01",
    title: "LOD 400 CAD & Tekla Detailing",
    description: "Every rebar cage, embed plate, lifting insert, and architectural reveal is modeled in full 3D to eliminate field clashes with MEP and structural steel.",
  },
  {
    code: "ENG-02",
    title: "Licensed Professional Engineers (PE / SE)",
    description: "In-house structural engineering group providing stamped calculation packages for submittals across municipal and DOT jurisdictions.",
  },
  {
    code: "ENG-03",
    title: "Custom Connection & Embed Design",
    description: "Engineered bearing seats, weld plates, expansion joints, and slotted seismic connections designed for accelerated field erection.",
  },
  {
    code: "ENG-04",
    title: "Pre-Pour Value Engineering Review",
    description: "We optimize panel dimensions, pick weights, and casting line repetitions to minimize crane mobilization time and shipping costs.",
  },
];

export function EngineeringSection() {
  return (
    <section id="engineering-overview" className="w-full bg-white border-b border-[#DCE5F0] py-12 sm:py-16">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Engineering Text & Technical Specs */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Virtual Design & Detailing"
              specCode="CAD / LOD 400"
              title="In-House Precast Structural Engineering &amp; CAD Detailing"
              description="Our specialized structural engineers turn complex architectural blueprints into constructible, high-performance precast systems. We detail every connection and verify tolerances before a single yard of concrete is cast."
            />

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ENGINEERING_FEATURES.map((item) => (
                <div
                  key={item.code}
                  className="p-4 sm:p-5 bg-[#F8FAFC] border-2 border-[#DCE5F0] border-l-4 border-l-[#014088] hover:border-l-[#0E96E1] rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <div className="font-mono text-[10px] font-bold text-[#0E96E1] mb-1">
                    [{item.code}]
                  </div>
                  <h3 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link href="/capabilities#engineering" className="btn-navy text-xs uppercase tracking-wider font-bold">
                Explore Structural &amp; PE Capabilities
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <div className="font-mono text-xs font-bold text-[#014088] bg-[#EEF3F8] border border-[#DCE5F0] px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#014088]" />
                LICENSED PE STAMPED CALCULATIONS
              </div>
            </div>
          </div>

          {/* Official Astro Precast CAD Shop Drawing Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE5F0] hover:border-[#014088] shadow-xl aspect-[4/3] bg-[#F8FAFC] transition-all group">
              <Image
                src="/images/astro-cad-engineering-showcase.png"
                alt="Official Astro Precast Catch Basin CAD Engineering Shop Drawing"
                fill
                className="object-contain p-3 group-hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Technical Drawing Blueprint Overlay Badge */}
              <div className="absolute top-3 left-3 bg-[#014088]/95 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[10.5px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-[#0E96E1]" />
                <span>OFFICIAL CAD SHOP TICKET</span>
              </div>

              {/* Bottom Information Card */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 border border-[#DCE5F0] rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[#0E96E1] text-[11px] font-mono font-black uppercase tracking-wider">
                    ASTRO SPEC: AR-3048-CB
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    AASHTO HS20-44
                  </span>
                </div>
                <p className="text-slate-800 text-xs leading-relaxed font-semibold">
                  Precast catch basin fabrication sheet with WWF mesh reinforcement, wall thickness dimensions, and municipal approval notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
