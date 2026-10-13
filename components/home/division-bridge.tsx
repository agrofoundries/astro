import Link from "next/link";
import { ArrowRight, Layers, Factory, CheckCircle2, ShieldCheck, ArrowRightCircle } from "lucide-react";

export function DivisionBridge() {
  return (
    <section aria-label="How We Work" className="w-full bg-[#F4F8FD] text-[#032356] py-12 sm:py-16 border-y border-[#DCE5F0]">
      <div className="section-container-wide">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] text-[#032356] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032356] tracking-tight uppercase">
            From 3D Design to <span className="text-[#D4030C]">Your Job Site</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            We combine structural engineering design with precast plant manufacturing, so your concrete pieces fit right the first time without job site delays.
          </p>
        </div>

        {/* 5 Step Integration Process Cards - Light White Cards (No Dark Black) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-black text-[#D4030C] mb-2 uppercase">
                STEP 01 · REVIEW
              </div>
              <h3 className="text-base font-black text-[#032356] mb-2 uppercase">
                Plan Review &amp; Quote
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                We review your architectural plans and project requirements to provide clear pricing and dependable production timelines.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pt-3 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Clear, upfront pricing</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-black text-[#D4030C] mb-2 uppercase">
                STEP 02 · DESIGN
              </div>
              <h3 className="text-base font-black text-[#032356] mb-2 uppercase">
                3D Models &amp; Drawings
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                Our licensed engineers prepare stamped calculations and 3D shop drawings showing exact rebar and embed placement.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pt-3 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Checked before pouring</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-black text-[#D4030C] mb-2 uppercase">
                STEP 03 · CASTING
              </div>
              <h3 className="text-base font-black text-[#032356] mb-2 uppercase">
                Plant Concrete Casting
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                High-strength concrete is mixed and cast into precision steel beds inside our weather-protected manufacturing bays.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pt-3 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Laser-aligned formwork</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-black text-[#D4030C] mb-2 uppercase">
                STEP 04 · TESTING
              </div>
              <h3 className="text-base font-black text-[#032356] mb-2 uppercase">
                Quality &amp; Strength Checks
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                We test concrete cylinders for compressive strength and verify piece dimensions before release for shipment.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pt-3 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tested to ASTM standards</span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-black text-[#D4030C] mb-2 uppercase">
                STEP 05 · DELIVERY
              </div>
              <h3 className="text-base font-black text-[#032356] mb-2 uppercase">
                Job Site Delivery
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                Precast pieces arrive on flatbed trailers labeled in erection sequence, ready for direct crane unloading and setting.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 pt-3 border-t border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ready for crane setting</span>
            </div>
          </div>
        </div>

        {/* Action Row in Simple Words */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D4030C] hover:bg-[#B50209] text-white font-black text-xs uppercase tracking-wider shadow-md transition-transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:8007732278"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border-2 border-[#DCE5F0] text-[#032356] font-bold text-xs uppercase tracking-wider transition-colors shadow-xs active:scale-95"
          >
            <span>Call (800) PRECAST</span>
          </a>
        </div>
      </div>
    </section>
  );
}
