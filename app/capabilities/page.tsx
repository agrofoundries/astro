import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Cog, ShieldCheck, Cpu, HardHat, CheckCircle2 } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Facility & Plant Specifications
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Manufacturing & Engineering Capabilities
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Operating 125,000 sq. ft. of climate-controlled casting beds, computerized batch plants, and a dedicated in-house BIM engineering division.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24 space-y-20">
        {/* Plant Specs Table */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Plant Metrics & Capacity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="text-3xl font-extrabold text-brand-primary">125,000</div>
              <div className="text-xs font-bold text-gray-900 mt-1">Sq. Ft. Enclosed Facility</div>
              <p className="text-xs text-gray-500 mt-2">Zero weather-related casting delays with 100% covered bay space.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="text-3xl font-extrabold text-brand-primary">450+ Cu. Yd.</div>
              <div className="text-xs font-bold text-gray-900 mt-1">Daily Mix Output</div>
              <p className="text-xs text-gray-500 mt-2">Automated twin-shaft planetary batch plant with microwave moisture probes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="text-3xl font-extrabold text-brand-primary">60 Tons</div>
              <div className="text-xs font-bold text-gray-900 mt-1">Overhead Crane Capacity</div>
              <p className="text-xs text-gray-500 mt-2">Tandem overhead bridge cranes capable of handling massive bridge spans.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="text-3xl font-extrabold text-brand-primary">±1/16&quot;</div>
              <div className="text-xs font-bold text-gray-900 mt-1">Dimensional Tolerance</div>
              <p className="text-xs text-gray-500 mt-2">Laser-guided precision form alignment verified before every pour.</p>
            </div>
          </div>
        </div>

        {/* BIM & Engineering */}
        <div id="engineering" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Virtual Design & Detailing</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">LOD 400 BIM & Tekla Coordination</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Our engineering team does not just take prints and cast. We model every piece in 3D, detailing rebar placement, embeds, lifting points, and hardware connections. This virtual prototype enables instant clash detection with structural steel and MEP trades before a single drop of concrete is placed.
            </p>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                Tekla Structures & Revit 3D Erection Sequencing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                In-house Licensed PE Stamped Calculations (48 states)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                Electronic Submittal & Rapid RFI Coordination Hub
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-lg">
              <Image
                src="/images/engineering-team.jpg"
                alt="Precast engineering team using Tekla and Revit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Lab */}
        <div id="quality" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-lg">
              <Image
                src="/images/quality-inspection.jpg"
                alt="Precast concrete quality control testing"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Testing & Verification</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">In-House Materials Testing Laboratory</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Our facility houses an ACI and PCI certified materials testing laboratory. We test raw aggregate gradation, cement fineness, concrete cylinder compression breaks (1-day, 7-day, 28-day), entrained air, and slump flow for every production batch.
            </p>
            <Link href="/contact" className="btn-primary text-xs">
              Request Lab Quality Audit Reports
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
