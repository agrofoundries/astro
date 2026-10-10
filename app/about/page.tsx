import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Factory, Users, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Company Background
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Building the Future of Heavy Infrastructure
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Founded on the principles of precision manufacturing, unbending structural safety, and true trade partnership with general contractors.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Over Two Decades of Precast Excellence
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              PRECASTPRO was founded with a singular conviction: that modern construction schedules cannot afford the weather risks, labor shortages, and inconsistent quality inherent in traditional cast-in-place concrete.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Over the last 25 years, we have grown from a modest utility casting yard into a state-of-the-art 125,000 sq. ft. automated precast and prestressed manufacturing hub. Today, we supply critical infrastructure components to high-profile transportation corridors, major commercial developments, and municipal water authorities.
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div>
                <div className="text-2xl font-black text-brand-primary">1.2M+ SF</div>
                <div className="text-xs text-gray-600 font-medium">Panels & Components Installed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-primary">Zero</div>
                <div className="text-xs text-gray-600 font-medium">Lost-Time Safety Incidents in 2024</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/images/manufacturing.jpg"
              alt="PRECASTPRO manufacturing plant"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Leadership & Engineering Principles */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
            Our Core Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Uncompromising Precision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tolerances matter. A quarter-inch field discrepancy costs thousands in crane delay. We laser-verify every form before casting so our pieces fit seamlessly the first time.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Partnership</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe in straightforward scheduling, upfront value engineering, and immediate communication when unforeseen design changes arise.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Long-Term Environmental Stewardship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Through optimized mix designs incorporating fly ash, slag cement, and 100% recycled process wash water, we minimize the carbon footprint of structural precast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
