import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const ARTICLES = [
  {
    code: "WP-01",
    title: "Comparing Precast vs. Cast-in-Place for Logistics Enclosures",
    category: "Schedule & Cost Economics",
    date: "February 2024",
    readTime: "6 min read",
    snippet: "A quantitative analysis of crane cycle economics, site congestion trade-offs, and cold-weather curing risks across commercial industrial warehouses.",
  },
  {
    code: "WP-02",
    title: "Seismic & High-Wind Shear Wall Connection Methodologies",
    category: "Structural Engineering",
    date: "January 2024",
    readTime: "8 min read",
    snippet: "Design procedures for wet and dry precast connection details complying with IBC 2024, ACI 318-19, and PCI MNL-120 standards.",
  },
  {
    code: "WP-03",
    title: "Low-Carbon Concrete: Achieving 35% SCM Replacement",
    category: "Materials & Sustainability",
    date: "November 2023",
    readTime: "5 min read",
    snippet: "How supplementary cementitious materials (slag and fly ash) lower embodied carbon without compromising high-early 16-hour stripping strengths.",
  },
];

export function ResourceCenter() {
  return (
    <section id="resource-center" className="w-full section-steel section-padding">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <SectionHeading
              eyebrow="Industry Insights"
              specCode="ENGINEERING BRIEFS"
              title="Precast Engineering Papers &amp; Field Studies"
              description="Stay ahead with technical whitepapers, connection detailing guides, and structural case analyses authored by our engineering division."
            />
          </div>
          <Link
            href="/resources"
            className="btn btn-usa-outline-blue mb-4 md:mb-8 inline-flex self-start md:self-auto"
          >
            Visit Knowledge Hub
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ARTICLES.map((article) => (
            <article
              key={article.code}
              className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="bg-[#EAEEF3] text-[#0A2540] px-4 py-2.5 flex items-center justify-between text-xs font-mono-spec border-b border-[#CBD5E1]">
                  <span className="text-[#C8101E] font-bold">[{article.code}]</span>
                  <span className="text-[#64748B] text-[10px] font-bold">{article.category}</span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-mono-spec text-[#64748B] mb-2 font-semibold">
                    {article.date} • {article.readTime}
                  </div>

                  <h3 className="text-base font-bold text-[#0A2540] tracking-tight mb-2 group-hover:text-[#C8101E] transition-colors leading-snug">
                    <Link href="/resources" className="flex items-start justify-between gap-2">
                      {article.title}
                      <ArrowUpRight className="w-4 h-4 text-[#64748B] shrink-0 mt-1" />
                    </Link>
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-normal mb-5">
                    {article.snippet}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border-t border-[#CBD5E1]">
                <Link
                  href="/resources"
                  className="flex items-center justify-between text-xs font-bold text-[#0A2540] group-hover:text-[#C8101E] uppercase tracking-wider"
                >
                  <span>Read Full Technical Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
