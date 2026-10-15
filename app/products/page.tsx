import type { Metadata } from "next";
import Link from "next/link";
import { Tablet, ArrowRight } from "lucide-react";
import { ProductExplorer } from "@/components/home/product-explorer";

export const metadata: Metadata = {
  title: "Interactive Precast Product Catalog & Explorer | Astro Precast Engineering",
  description:
    "Explore certified precast concrete products, ASTM/AASHTO specifications, compressive strengths, and download CAD submittals. Compare up to 3 precast structural elements side-by-side.",
};

export default function ProductsPage() {
  return (
    <main className="w-full bg-[#F8F9FB]">
      <ProductExplorer />

      {/* Field Experience & Mockup Banner */}
      <section className="border-t-2 border-[#DCE5F0] bg-white py-12">
        <div className="section-container-wide">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F8FD] border-2 border-[#DCE5F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0E96E1] animate-pulse" />
                <span>FIELD DIGITAL TOOLS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#014088] uppercase tracking-tight">
                Review Specifications on iPad &amp; Mobile On-Site
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal">
                Need to access pipe knockout schedules, traffic load ratings, or CAD cut sheets right in the excavation trench? Check out our live device simulator.
              </p>
            </div>

            <Link
              href="/mockup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#014088] hover:bg-[#002752] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md"
            >
              <Tablet className="w-4 h-4 text-[#0E96E1]" />
              <span>Launch Live Mockup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
