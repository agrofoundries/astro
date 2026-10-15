import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Target, HeartHandshake, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
  {
    icon: Shield,
    title: "Structural Rigor",
    desc: "Uncompromising mix quality, continuous ASTM testing, exact rebar cover clearances, and controlled plant curing cycles.",
  },
  {
    icon: Target,
    title: "Crane Schedule Respect",
    desc: "Dedicated plant staging and synchronized jobsite deliveries keep your heavy crane and installation crews operating without downtime.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Takeoffs",
    desc: "Comprehensive itemized estimates, stamped engineering submittal packages, and proactive field engineering support from bid to backfill.",
  },
  {
    icon: Users,
    title: "Zero-Harm Safety",
    desc: "Rigorous quality control protocols, OSHA-compliant rigging, and zero-compromise safety standards across our plant and transit fleet.",
  },
];

export function AboutSection() {
  return (
    <section id="about-preview" className="w-full section-warm-concrete section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Company Background"
              specCode="ASTRO PRECAST"
              title="Astro Precast & Infrastructure Manufacturing"
              description="Built on engineering excellence, certified concrete strength, and dependable partnership with municipal agencies and civil infrastructure contractors."
            />

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mt-3">
              Operating automated precast production facilities in Deer Park, NY, Astro Precast manufactures high-performance civil infrastructure products. From licensed PE calculations and custom core drilling to direct boom-truck delivery, we supply contractors and municipalities with drainage structures, sanitary systems, and utility vaults built for multi-generational durability.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-3.5 bg-white border border-[#D0E2F2] border-l-4 border-l-[#014088] rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 mb-1 text-[#014088]">
                      <Icon className="w-4 h-4 text-[#0E96E1] shrink-0" />
                      <h4 className="text-xs font-bold uppercase tracking-tight">{val.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#556B82] leading-relaxed font-normal">{val.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link href="/about" className="btn btn-navy">
                Learn More About Astro Precast
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="p-4 bg-[#F0F6FC] border-2 border-[#D0E2F2] rounded-2xl shadow-md">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#D0E2F2]">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="Astro precast facility floor"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute bottom-2 left-2 bg-white text-[#014088] font-mono-spec text-[9px] font-bold px-2 py-0.5 rounded border border-[#D0E2F2]">
                    DEER PARK CASTING YARD
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-[#014088] text-white flex flex-col justify-center rounded-xl shadow-sm">
                  <div className="font-mono-spec text-2xl sm:text-3xl font-black text-white">5,000+</div>
                  <div className="font-mono-spec text-[10px] font-bold uppercase tracking-wider text-sky-200 mt-1">
                    PSI COMPRESSIVE STRENGTH
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-white border border-[#D0E2F2] text-[#014088] flex flex-col justify-center rounded-xl shadow-sm">
                  <div className="font-mono-spec text-2xl sm:text-3xl font-black text-[#0E96E1]">HS-20</div>
                  <div className="font-mono-spec text-[10px] font-bold uppercase tracking-wider text-[#556B82] mt-1">
                    AASHTO TRAFFIC RATED
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#D0E2F2]">
                  <Image
                    src="/images/commercial-building.jpg"
                    alt="Installed precast concrete infrastructure"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute bottom-2 left-2 bg-white text-[#014088] font-mono-spec text-[9px] font-bold px-2 py-0.5 rounded border border-[#D0E2F2]">
                    LONG ISLAND INFRASTRUCTURE
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
