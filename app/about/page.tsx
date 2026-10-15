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
              Company History &amp; Engineering Standards
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Engineered Precast Concrete Infrastructure
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Founded on precision casting, 5,000+ PSI certified concrete, and dedicated partnership with civil contractors and municipal agencies.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Decades of Civil Precast Manufacturing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Astro Precast was built on a singular conviction: critical underground infrastructure requires factory-controlled precision that cast-in-place methods cannot match. By engineering and casting monolithic precast structures in our automated Deer Park facility, we eliminate weather delays, reduce jobsite excavation times, and guarantee superior concrete durability.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Today, we manufacture certified stormwater catch basins, leaching galleys, watertight septic systems, and heavy-duty utility chambers for public works authorities, commercial developers, and civil contractors throughout Long Island and the New York metropolitan region.
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div>
                <div className="text-2xl font-black text-brand-primary">5,000+ PSI</div>
                <div className="text-xs text-gray-600 font-medium">AASHTO HS-20 &amp; ASTM Certified</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-primary">Deer Park, NY</div>
                <div className="text-xs text-gray-600 font-medium">Automated Plant Production</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/images/manufacturing.jpg"
              alt="Astro Precast manufacturing plant and casting yard in Deer Park NY"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Leadership & Engineering Principles */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
            Our Core Operating Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Structural Integrity &amp; Precision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every mix design is batched to exceed 5,000 PSI compressive strength with ASTM-certified aggregates. Formwork dimensions and knockout locations are verified before every pour to guarantee exact field fitment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Contractor Partnership</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                From initial bid takeoffs and PE-stamped submittal drawings to crane-synchronized jobsite deliveries, we work as an extension of your field operations to keep your projects on schedule.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-brand-primary flex items-center justify-center font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aquifer &amp; Environmental Protection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our advanced wastewater vessels, grease interceptors, and high-percolation leaching galleys protect regional aquifers and comply with the most stringent municipal environmental standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
