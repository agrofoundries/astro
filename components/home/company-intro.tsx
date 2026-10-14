import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Cpu } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const CAPABILITY_POINTS = [
  "Highway Catch Basins: 12\"×12\" to 84\"×84\" monolithic boxes including Flagship Model AR 3048 CB (1,800 lbs).",
  "Sanitary Wastewater: Certified monolithic single-pour septic tanks & grease interceptors from 1,000 to 2,500 gallons.",
  "Subsurface Infiltration: High-void leaching galleys (1' to 4') and heavy civil storm drywell rings (8' to 12').",
  "Heavy Traffic Slabs: AASHTO HS20-44 cover slabs (6' to 12') with 24\" offset and 24\"×48\" curb inlet seats.",
  "Engineering Standards: 5,000+ PSI compressive strength, WWF ASTM A1064 mesh, Suffolk & Nassau County approved.",
];

export function CompanyIntro() {
  return (
    <section id="company-intro" className="w-full bg-white py-8 sm:py-10 border-b border-[#DCE5F0]">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Manufacturing Plant Photo Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE5F0] shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/manufacturing.jpg"
                alt="Precast concrete manufacturing plant floor with heavy casting beds and overhead crane systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Plant Capacity Accreditation Bar */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#014088] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#0E96E1]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#014088] uppercase">AASHTO HS-20 Rated</div>
                  <div className="text-[11px] text-[#556B82]">Suffolk &amp; Nassau Approved</div>
                </div>
              </div>

              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#014088] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#0E96E1]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#014088] uppercase">5,000+ PSI Concrete</div>
                  <div className="text-[11px] text-[#556B82]">Deer Park, NY Production</div>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Focus Intro Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0E96E1] mb-3">
              <span className="w-4 h-0.5 bg-[#0E96E1]" />
              <span>ASTRO PRECAST INFRASTRUCTURE &amp; SUPPLY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] tracking-tight leading-tight uppercase mb-4">
              Advanced Precast Concrete &amp; Masonry Solutions
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-normal">
              Astro Masonry &amp; Precast specializes in direct precast concrete manufacturing for civil engineering contractors, underground utility installers, and municipal infrastructure projects. Operating high-capacity casting facilities in Deer Park, NY, our plant produces certified catch basins, leaching galleys, monolithic septic tanks, distribution boxes, and custom utility vaults.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {CAPABILITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Action & Contact Strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/#services" className="btn-navy px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span>View Engineering Services</span>
                <ArrowRight className="w-4 h-4 text-[#0E96E1]" />
              </Link>

              <Link href="/#contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border-2 border-[#0E96E1] bg-white text-[#0E96E1] hover:bg-[#0E96E1] hover:text-white transition-colors text-xs font-black uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Get a Project Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
