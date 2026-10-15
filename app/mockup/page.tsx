import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  ArrowRight,
  Download,
  ShieldCheck,
  FileText,
  Zap,
  HardHat,
  Compass,
  CheckCircle2,
  Phone,
  Clock,
  Sparkles,
} from "lucide-react";
import { LiveMockupShowcase } from "@/components/home/live-mockup-showcase";

export const metadata: Metadata = {
  title: "Live Interactive Mockups & Field Digital Platform | Astro Precast Engineering",
  description:
    "Test Astro's interactive Desktop, iPad, and Mobile platform. Access certified CAD drawings, verify AASHTO HS-20 load ratings, check invert dimensions, and submit jobsite RFQs directly from excavation trenches.",
};

export default function MockupPage() {
  return (
    <main className="w-full bg-white">
      {/* Top Banner / Breadcrumb Header */}
      <div className="bg-[#F4F8FD] border-b-2 border-[#DCE5F0] py-12 sm:py-16">
        <div className="section-container-wide">
          <nav className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#014088] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#014088] font-bold">Live Mockup</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1] animate-pulse" />
              <span>CROSS-PLATFORM CIVIL CONTRACTOR DEMO &bull; REAL-TIME EXPERIENCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] tracking-tight uppercase leading-[1.12]">
              Live Precast Platform <span className="text-[#0E96E1]">Device Mockups</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Experience Astro&apos;s real-time digital precast catalog and field tool across Desktop Workstations, iPad Tablets, and Mobile Smartphones. Built for general contractors, civil engineers, and excavation crews across New York and the Tri-State area.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#live-mockup"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#014088] hover:bg-[#002752] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <Layers className="w-4 h-4 text-[#0E96E1]" />
                <span>Jump to Interactive Demo</span>
              </a>

              <a
                href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border-2 border-[#DCE5F0] text-[#014088] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Download className="w-4 h-4 text-[#0E96E1]" />
                <span>Download Engineering Submittals (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Mockup Showcase Component */}
      <LiveMockupShowcase />

      {/* In-Depth Specifications & Field Capabilities Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="section-container-wide">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-black uppercase tracking-wider text-[#0E96E1] mb-2">
              ENGINEERED FOR CIVIL ESTIMATORS, EXCAVATORS &amp; SUPERINTENDENTS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#014088] uppercase tracking-tight">
              A Complete Multi-Device Engineering Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              From large-format desktop plan takeoffs in the estimating department to immediate invert checks in a 14-foot trench, our platform keeps projects moving without delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {/* Card 0: Desktop Workstation */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Monitor className="w-6 h-6 text-[#0E96E1]" />
              </div>
              <h3 className="text-base font-bold text-[#014088] uppercase tracking-tight mb-2">
                Desktop Workstation Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                Full-screen 4K Tekla LOD 400 detailing, multi-sheet CAD plan reviews, and high-volume project takeoffs for civil estimators and project managers.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>High-resolution 3D BIM models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct batch quote submittals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comprehensive engineering logs</span>
                </li>
              </ul>
            </div>
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Tablet className="w-6 h-6 text-[#0E96E1]" />
              </div>
              <h3 className="text-base font-bold text-[#014088] uppercase tracking-tight mb-2">
                Tablet Specification Viewer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                Explore high-resolution dimensional diagrams, AASHTO HS-20 traffic rating stamps, compressive strength curves (5,000+ PSI), and pipe cored-hole layouts in high-definition landscape.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>3D CAD model rotation &amp; knockout inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Side-by-side product comparisons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct PDF cut sheet generation</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6 text-[#0E96E1]" />
              </div>
              <h3 className="text-base font-bold text-[#014088] uppercase tracking-tight mb-2">
                Smartphone Trench Utility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                Optimized for one-handed operation on dirty job sites. Access quick weight calculations, boom crane rigging capacities, and plant dispatch ETA updates while standing directly beside the excavator.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>One-tap civil plan camera upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Direct hotline to Deer Park estimating desk</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Instant invert depth verification</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-[#0E96E1]" />
              </div>
              <h3 className="text-base font-bold text-[#014088] uppercase tracking-tight mb-2">
                PE Stamped Detailing on Demand
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                Need state-licensed engineer submittals for county inspectors? Request certified shop drawings with hydrostatic buoyancy analysis and soil bearing calculations straight from the app.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>NYS &amp; NJ licensed PE engineering seals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Suffolk &amp; Nassau DPW approval compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tekla LOD 400 detailing compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Dispatch & Quote Callout */}
      <section className="bg-[#002752] text-white py-12 border-t-2 border-[#0E96E1]">
        <div className="section-container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0E96E1] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>SAME-DAY ENGINEERING &bull; DEER PARK ESTIMATING</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              Ready to Quote Precast or Request Digital Drawings?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-normal">
              Connect with our licensed engineers and production coordinators. Same-day turnaround on civil takeoffs and precast drainage submittals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:6316673300"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>(631) 667-3300</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <span>Request Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
