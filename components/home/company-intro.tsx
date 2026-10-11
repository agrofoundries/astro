import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Cpu } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const CAPABILITY_POINTS = [
  "Licensed Professional Engineers (PE / SE) for DOT, highway, and civil infrastructure projects.",
  "Tekla 3D BIM modeling and accurate rebar shop drawings ready for the casting bed.",
  "Lifting, stripping, and crane handling calculations to ensure jobsite safety.",
  "Fast material takeoffs and cost estimation to help precasters win more bids.",
];

export function CompanyIntro() {
  return (
    <section id="company-intro" className="w-full bg-white py-16 lg:py-24 border-b border-[#DCE5F0]">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Engineering Drawing / BIM Model Technical Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE5F0] shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/engineering-team.jpg"
                alt="Precast Engineers technical team reviewing 3D BIM models and engineering drawings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Authoritative Technical Accreditation Bar */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#01255F] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#D7030F]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#01255F] uppercase">Licensed PE / SE</div>
                  <div className="text-[11px] text-[#64748B]">DOT &amp; Municipal Submittals</div>
                </div>
              </div>

              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#01255F] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#D7030F]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#01255F] uppercase">Tekla 3D BIM</div>
                  <div className="text-[11px] text-[#64748B]">Accurate Shop Drawings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Introduction Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-3">
              <span className="w-4 h-0.5 bg-[#D7030F]" />
              <span>ABOUT PRECAST ENGINEERS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#01255F] tracking-tight leading-tight uppercase mb-6">
              Empowering Precast Producers With Precision Engineering &amp; 3D BIM
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-normal">
              PRECAST ENGINEERS provides specialized structural engineering and 3D BIM detailing for the precast concrete industry. We work directly with precast manufacturers, civil contractors, and DOT agencies across the United States. Our team helps you prevent casting errors, speed up shop drawing approvals, and deliver reliable PE-stamped calculations on time.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {CAPABILITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D7030F] shrink-0 mt-0.5" />
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
                <ArrowRight className="w-4 h-4 text-[#D7030F]" />
              </Link>

              <Link href="/#contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border-2 border-[#D7030F] bg-white text-[#D7030F] hover:bg-[#D7030F] hover:text-white transition-colors text-xs font-black uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Request Project Takeoff</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
