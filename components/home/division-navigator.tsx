import Link from "next/link";
import { Factory, Compass, ArrowRight, ShieldCheck, CheckCircle2, Box, Layers, Cpu, Ruler } from "lucide-react";

export function DivisionNavigator() {
  return (
    <section aria-label="Dual Division Selector" className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] py-8 sm:py-10">
      <div className="section-container-wide">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-1.5 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7030F]" />
              <span>INTEGRATED PRECAST CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#01255F] tracking-tight uppercase">
              Two Dedicated Divisions. <span className="text-[#D7030F]">One Engineering Standard.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 font-medium max-w-2xl">
              Whether you need direct plant fabrication of heavy concrete products or licensed structural calculations and 3D Tekla BIM detailing, our specialized divisions deliver end-to-end precision.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] font-bold text-[#01255F] bg-white border border-[#DCE5F0] px-3.5 py-2 rounded-lg shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>DIRECT PLANT + CONSULTING DESK ACTIVE</span>
          </div>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Division 01 Manufacturing */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#D7030F] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D7030F]" />
            <div>
              {/* Pill & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2F2] border border-red-200 text-[#D7030F] text-[11px] font-black uppercase tracking-wider font-mono">
                  <span>DIVISION 01</span>
                  <span>·</span>
                  <span>PLANT CASTING &amp; SUPPLY</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF2F2] border border-red-200 text-[#D7030F] flex items-center justify-center shrink-0 group-hover:bg-[#D7030F] group-hover:text-white transition-colors">
                  <Factory className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight mb-2">
                Precast Concrete Manufacturing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                High-capacity climate-controlled casting beds, computerized twin-shaft planetary batching, and turnkey fabrication of heavy civil, utility, and highway infrastructure.
              </p>

              {/* Specs & Highlights */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                  <span><strong>Plant Infrastructure:</strong> 125,000 sq. ft. covered facility with 60-Ton tandem cranes</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                  <span><strong>Heavy Civil Line:</strong> ASTM C1577 Box Culverts, 3-Sided Bridges, and DOT Headwalls</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                  <span><strong>Utility &amp; Drainage:</strong> Catch Basins, Manholes, Leaching Galleys, and Septic Tanks</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
                  <span><strong>Quality Assurance:</strong> In-house ACI/PCI Certified testing lab for daily cylinder breaks</span>
                </div>
              </div>
            </div>

            {/* Quick Links Footer */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#D7030F] hover:bg-[#B31217] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-colors"
              >
                <span>Browse Products Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#manufacturing"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F4F8FD] hover:bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                <span>Plant Capabilities</span>
              </Link>
              <Link
                href="/#quality"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[#64748B] hover:text-[#01255F] text-xs font-bold transition-colors ml-auto"
              >
                <span>Testing Lab &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Division 02 Engineering */}
          <div className="bg-white border-2 border-[#DCE5F0] hover:border-[#01255F] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#01255F]" />
            <div>
              {/* Pill & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] text-[11px] font-black uppercase tracking-wider font-mono">
                  <span>DIVISION 02</span>
                  <span>·</span>
                  <span>STRUCTURAL &amp; 3D BIM</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] flex items-center justify-center shrink-0 group-hover:bg-[#01255F] group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6 text-[#D7030F] group-hover:text-white" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-black text-[#01255F] uppercase tracking-tight mb-2">
                Structural Engineering &amp; BIM
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Specialized in-house precast structural engineers, 50-state PE stamped calculations, Tekla LOD 400 virtual design, and clash-free production shop drawings.
              </p>

              {/* Specs & Highlights */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#01255F] shrink-0 mt-0.5" />
                  <span><strong>Licensing &amp; Compliance:</strong> Licensed Professional Engineers (PE / SE) in 50 states</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#01255F] shrink-0 mt-0.5" />
                  <span><strong>Tekla LOD 400 BIM:</strong> Full 3D model detailing of rebar cages, embeds, and crane picks</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#01255F] shrink-0 mt-0.5" />
                  <span><strong>Precast Detailing:</strong> Production piece tickets, bar bending schedules, and erection plans</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#01255F] shrink-0 mt-0.5" />
                  <span><strong>Connection Engineering:</strong> High-moment bearing seats, embed plates, and seismic joints</span>
                </div>
              </div>
            </div>

            {/* Quick Links Footer */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <Link
                href="/#engineering"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#01255F] hover:bg-[#06182E] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-colors"
              >
                <span>8 Engineering Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D7030F]" />
              </Link>
              <Link
                href="/#software"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F4F8FD] hover:bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                <span>BIM &amp; Software</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[#64748B] hover:text-[#01255F] text-xs font-bold transition-colors ml-auto"
              >
                <span>Request Takeoff &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
