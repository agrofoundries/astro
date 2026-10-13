import Link from "next/link";
import { ArrowRight, Layers, Factory, CheckCircle2, ShieldCheck, ArrowRightCircle } from "lucide-react";

export function DivisionBridge() {
  return (
    <section aria-label="Dual Division Integration Bridge" className="w-full bg-[#01255F] text-white py-12 sm:py-16 border-y-4 border-[#D7030F] relative overflow-hidden">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="section-container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
            <span>SEAMLESS WORKFLOW INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            From 3D BIM Model Directly to the <span className="text-[#D7030F]">Plant Casting Bed</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-3xl mx-auto">
            Our dual-division model bridges the traditional gap between structural design consultants and precast concrete fabricators. Our engineers detail every rebar cage and embed plate specifically for our casting beds, eliminating jobsite clashes and RFIs before concrete is ever poured.
          </p>
        </div>

        {/* 3 Step Integration Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-[#06182E]/90 border border-white/15 rounded-xl p-6 relative group hover:border-[#D7030F] transition-colors">
            <div className="font-mono text-xs font-extrabold text-[#D7030F] mb-2 uppercase">
              PHASE 01 · ENGINEERING
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">
              Tekla LOD 400 &amp; PE Stamp
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Our licensed structural engineers generate stamped calculations and clash-free 3D models with every weld plate, lifting loop, and rebar tolerance.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero field interferences</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#06182E]/90 border border-white/15 rounded-xl p-6 relative group hover:border-[#D7030F] transition-colors">
            <div className="font-mono text-xs font-extrabold text-[#D7030F] mb-2 uppercase">
              PHASE 02 · MANUFACTURING
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">
              Plant Casting &amp; QC Breaks
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Automated planetary batching delivers 6,000+ PSI mixes into laser-aligned steel beds. In-house ACI/PCI testing verifies stripping strengths.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>PCI MNL-116 compliant</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#06182E]/90 border border-white/15 rounded-xl p-6 relative group hover:border-[#D7030F] transition-colors">
            <div className="font-mono text-xs font-extrabold text-[#D7030F] mb-2 uppercase">
              PHASE 03 · JOB-SITE
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">
              Timed Delivery &amp; Rigging
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Flatbed trailers arrive sequentially synchronized to crane pick charts, enabling single-shift setting for box culverts and bridge spans.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>4:1 OSHA lifting factor</span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span>Engage Both Divisions on Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:8007732278"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Call (800) PRECAST Direct Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
