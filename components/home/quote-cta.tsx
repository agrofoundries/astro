import Link from "next/link";
import { ArrowRight, Phone, FileText, ShieldCheck, Clock, HardHat } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function QuoteCTA() {
  return (
    <section id="quote-cta" className="w-full bg-[#F4F6F9] py-16 lg:py-20 border-t border-b border-slate-200">
      <div className="section-container-wide">
        <div className="bg-white rounded-xl p-8 sm:p-12 border-2 border-red-100 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs text-[#D71920] uppercase font-bold mb-3.5 bg-red-50 border border-red-200 px-3 py-1.5 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                ESTIMATING &amp; BID TAKE-OFF DESK
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2545] tracking-tight leading-tight uppercase mb-4">
                Submit Your Drawings for Precast Engineering &amp; Bid Takeoff
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mb-8">
                Send us your architectural IFC models, structural contract sheets, or tender packages. Our licensed structural engineers and precast estimators perform piece-count takeoffs, preliminary connection feasibility, and PE stamped proposals within 24 to 48 business hours to empower your precast bids.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 bg-[#F0F5FA] border border-blue-100 rounded-lg flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span className="text-[#0B2545] font-bold">24–48 Hr Turnaround</span>
                </div>
                <div className="p-3.5 bg-[#F0F5FA] border border-blue-100 rounded-lg flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span className="text-[#0B2545] font-bold">PCI MNL-116 Certified</span>
                </div>
                <div className="p-3.5 bg-[#F0F5FA] border border-blue-100 rounded-lg flex items-center gap-2.5">
                  <HardHat className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span className="text-[#0B2545] font-bold">Value Engineering Review</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/quote"
                className="btn-construction py-4 px-6 rounded text-sm font-black w-full justify-center flex items-center gap-2 shadow-lg"
                id="cta-bid-portal"
              >
                <FileText className="w-4 h-4" />
                <span>Open Project Bid Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="p-4 bg-[#0B2545] text-white rounded-xl flex items-center justify-between border border-[#06182E]">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    DIRECT ESTIMATING HOTLINE
                  </div>
                  <a
                    href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                    className="text-base font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <span className="text-[10px] text-white bg-[#D71920] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                  Call Direct
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
