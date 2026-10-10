import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const CAPABILITY_POINTS = [
  "Licensed Professional Engineers (PE / SE) providing stamped calculations across 48 Continental States.",
  "In-house Tekla LOD 400 BIM detailing, automated rebar fabrication tickets, and clash-free piece geometry.",
  "Comprehensive lifting, handling, stripping anchor analysis, and jobsite crane hook sequencing.",
  "Precast estimating takeoffs and value engineering designed specifically to empower precasters in winning bids.",
];

export function CompanyIntro() {
  return (
    <section id="company-intro" className="w-full bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Engineering Drawing / Plant Metrology Frame with Experience Counter Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border-4 border-slate-100 shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/engineering-team.jpg"
                alt="PRECAST ENGINEERS structural engineering team reviewing Tekla 3D BIM models and precast connection calculations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Experience Counter Badge in USA Navy & Red */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#0B2545] text-white p-5 sm:p-6 rounded-lg shadow-2xl border-t-4 border-[#D71920] max-w-[240px]">
              <div className="text-3xl sm:text-4xl font-black text-[#D71920] leading-none mb-1">
                30+
              </div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-200 mb-1">
                Years of Engineering
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Empowering precast fabricators with PE-stamped structural solutions nationwide.
              </p>
            </div>
          </div>

          {/* Company Introduction Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D71920] mb-3">
              <span className="w-4 h-0.5 bg-[#D71920]" />
              <span>About PRECAST ENGINEERS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2545] tracking-tight leading-tight uppercase mb-6">
              Empowering Precast Fabricators With Precision Engineering &amp; 3D BIM
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              PRECAST ENGINEERS is an industry-leading structural consulting and BIM detailing firm dedicated exclusively to the precast concrete sector. We partner directly with precast manufacturers, general contractors, and developers to eliminate casting bed errors, resolve complex connection geometries, and deliver stamped packages that sail through engineer-of-record review.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {CAPABILITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D71920] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Action & Contact Strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/capabilities" className="btn-dark px-6 py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span>Explore Engineering Services</span>
                <ArrowRight className="w-4 h-4 text-[#D71920]" />
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#D71920]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Engineering Desk Hotline</div>
                  <a href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`} className="text-sm font-black text-[#0B2545] hover:text-[#D71920] transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
