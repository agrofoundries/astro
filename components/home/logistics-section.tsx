import Link from "next/link";
import { Truck, MapPin, Clock, ShieldAlert, ArrowRight, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const LOGISTICS_POINTS = [
  {
    code: "LOG-01",
    title: "Multi-Axle & Extendable Heavy Haul Fleet",
    desc: "Lowboys, stretch trailers, and steerable dollies capable of hauling oversized 110-foot bridge girders and 14-foot wide architectural panels.",
  },
  {
    code: "LOG-02",
    title: "Synchronized Crane Hook Staging",
    desc: "Trailers arrive sequentially indexed to your field erection schedule, allowing direct offloading from bed to structure with zero yard double-handling.",
  },
  {
    code: "LOG-03",
    title: "DOT Oversize Permitting & Escort Management",
    desc: "Complete state and municipal route surveying, oversize/overweight permit acquisition, and certified law enforcement escorts handled in-house.",
  },
  {
    code: "LOG-04",
    title: "Damage-Free Rigging & Transport Dunnage",
    desc: "Engineered nylon transport saddles, corner protectors, and resilient timber dunnage that prevent hairline spalling or finish marring.",
  },
];

export function LogisticsSection() {
  return (
    <section id="logistics" className="w-full section-slate section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Transport & Site Staging"
              specCode="JIT DISPATCH"
              title="Jobsite Delivery Synchronized Directly with Your Crane Hook"
              description="Precast components delivered precisely when your erection crew is rigged and ready. We manage interstate route clearances, state permits, and sequential trailer staging so your jobsite runs without crane idle time."
            />

            <div className="space-y-3 mt-4 sm:mt-6">
              {LOGISTICS_POINTS.map((pt) => (
                <div
                  key={pt.code}
                  className="p-4 bg-[#F8FAFC] border-2 border-[#CBD5E1] border-l-4 border-l-[#0A2540] rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono-spec text-[10px] font-bold text-[#0E96E1]">[{pt.code}]</span>
                    <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-tight">{pt.title}</h4>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal pl-6">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#EAEEF3] p-6 sm:p-8 border-2 border-[#CBD5E1] rounded-xl shadow-md">
            <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3.5 mb-5">
              <span className="font-mono-spec text-xs font-bold text-[#0E96E1] uppercase">
                REGIONAL CORRIDOR COVERAGE
              </span>
              <span className="font-mono-spec text-xs font-bold bg-white text-[#0A2540] px-2.5 py-1 rounded border border-[#CBD5E1] shadow-2xs">
                500-MILE RADIUS
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight mb-3">
              Direct Heavy Haul Dispatch Across Central &amp; Southern Interstate Corridors
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mb-5">
              Strategic plant location with rapid access to I-10, I-45, and I-35 freight corridors. Our logistics division handles regular daytime transit as well as restricted night-shift deliveries for dense urban core construction.
            </p>

            <div className="grid grid-cols-2 gap-3 p-3.5 bg-white border border-[#CBD5E1] rounded-lg mb-5 font-mono-spec shadow-sm">
              <div>
                <div className="text-2xl font-black text-[#0A2540]">99.4%</div>
                <div className="text-[10px] text-[#64748B] uppercase font-bold">On-Time Crane Hook Arrival</div>
              </div>
              <div className="border-l border-[#CBD5E1] pl-3.5">
                <div className="text-2xl font-black text-[#0E96E1]">12,000+</div>
                <div className="text-[10px] text-[#64748B] uppercase font-bold">Heavy Loads Dispatched</div>
              </div>
            </div>

            <Link href="/contact" className="btn btn-usa-blue w-full justify-center">
              Verify Freight Schedule to Your Jobsite
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
