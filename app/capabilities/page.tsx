import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Compass, ShieldCheck, Cpu, HardHat, CheckCircle2 } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F8FD] border-b border-[#DCE5F0] py-14 md:py-18">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] text-[#01255F] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
              <span>DUAL-DIVISION INFRASTRUCTURE &amp; SPECIFICATIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#01255F] tracking-tight uppercase mt-1 mb-3">
              Manufacturing &amp; Engineering Capabilities
            </h1>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Operating 125,000 sq. ft. of climate-controlled casting beds, computerized planetary batch plants, and a dedicated in-house 50-state structural engineering and Tekla LOD 400 BIM division.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-12 md:py-20 space-y-20">
        {/* ======================================================== */}
        {/* DIVISION 01: MANUFACTURING INFRASTRUCTURE               */}
        {/* ======================================================== */}
        <div id="manufacturing" className="pt-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded bg-[#D7030F] text-white font-mono text-xs font-black uppercase tracking-wider">
              DIVISION 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase">
              Precast Manufacturing &amp; Plant Capacity
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#D7030F] transition-colors shadow-xs">
              <div className="text-3xl font-black text-[#D7030F]">125,000</div>
              <div className="text-xs font-black text-[#01255F] uppercase mt-1">Sq. Ft. Enclosed Facility</div>
              <p className="text-xs text-[#64748B] mt-2">Zero weather-related casting delays with 100% covered casting bay space.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#D7030F] transition-colors shadow-xs">
              <div className="text-3xl font-black text-[#D7030F]">450+ Cu. Yd.</div>
              <div className="text-xs font-black text-[#01255F] uppercase mt-1">Daily Mix Output</div>
              <p className="text-xs text-[#64748B] mt-2">Automated twin-shaft planetary batch plant with microwave moisture probes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#D7030F] transition-colors shadow-xs">
              <div className="text-3xl font-black text-[#D7030F]">60 Tons</div>
              <div className="text-xs font-black text-[#01255F] uppercase mt-1">Overhead Crane Capacity</div>
              <p className="text-xs text-[#64748B] mt-2">Tandem overhead bridge cranes capable of handling massive bridge spans.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#D7030F] transition-colors shadow-xs">
              <div className="text-3xl font-black text-[#D7030F]">±1/16&quot;</div>
              <div className="text-xs font-black text-[#01255F] uppercase mt-1">Dimensional Tolerance</div>
              <p className="text-xs text-[#64748B] mt-2">Laser-guided precision form alignment verified before every concrete pour.</p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DIVISION 02: STRUCTURAL ENGINEERING & 3D BIM             */}
        {/* ======================================================== */}
        <div id="engineering" className="pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded bg-[#01255F] text-white font-mono text-xs font-black uppercase tracking-wider">
              DIVISION 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase">
              Structural Engineering &amp; Tekla LOD 400 BIM
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D7030F]">Virtual Design &amp; Detailing</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#01255F] mt-2 mb-4">LOD 400 BIM &amp; Tekla Coordination</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Our engineering team does not just take prints and cast. We model every piece in 3D, detailing rebar placement, embeds, lifting points, and hardware connections. This virtual prototype enables instant clash detection with structural steel and MEP trades before a single drop of concrete is placed.
              </p>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F]" />
                  Tekla Structures &amp; Revit 3D Erection Sequencing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F]" />
                  In-house Licensed PE Stamped Calculations (50 states)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F]" />
                  Electronic Submittal &amp; Rapid 2-Hour RFI Coordination Hub
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/#contact" className="btn-navy text-xs uppercase tracking-wider font-bold">
                  Request Engineering Takeoff
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#DCE5F0] shadow-lg">
                <Image
                  src="/images/engineering-team.jpg"
                  alt="Precast engineering team using Tekla and Revit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* QUALITY CONTROL & MATERIALS TESTING LAB                 */}
        {/* ======================================================== */}
        <div id="quality" className="pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded bg-[#D7030F] text-white font-mono text-xs font-black uppercase tracking-wider">
              PLANT QA LAB
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#01255F] uppercase">
              In-House Materials Testing &amp; Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-[#DCE5F0] shadow-lg">
                <Image
                  src="/images/quality-inspection.jpg"
                  alt="Precast concrete quality control testing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D7030F]">Testing &amp; Verification</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#01255F] mt-2 mb-4">In-House Materials Testing Laboratory</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Our facility houses an ACI and PCI certified materials testing laboratory. We test raw aggregate gradation, cement fineness, concrete cylinder compression breaks (1-day, 7-day, 28-day), entrained air, and slump flow for every production batch.
              </p>
              <Link href="/#contact" className="btn-navy text-xs uppercase tracking-wider font-bold">
                Request Lab Quality Audit Reports
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
