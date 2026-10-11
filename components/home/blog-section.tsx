import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "dot-stormwater-catch-basins",
    title: "State DOT Stormwater Criteria: Specifying AASHTO HS-20 Traffic Rated Precast Catch Basins",
    category: "CIVIL INFRASTRUCTURE",
    readTime: "4 min read",
    date: "OCTOBER 2026",
    summary:
      "A technical review of monolithic sump design, mastic joint seals, and traffic-loading criteria required by state DOT highway departments for roadway drainage.",
    image: "/images/products/catch-basin-2ft.png",
  },
  {
    id: "subsurface-leaching-galleys",
    title: "Subsurface Stormwater Infiltration: Maine DOT Leaching Galleys vs Conventional Systems",
    category: "STORMWATER DESIGN",
    readTime: "5 min read",
    date: "SEPTEMBER 2026",
    summary:
      "How high-void precast leaching galleys maximize groundwater recharge rates while reducing the subsurface excavated footprint on commercial and municipal sites.",
    image: "/images/products/leaching-galley.png",
  },
  {
    id: "tekla-lod-400-detailing",
    title: "Tekla LOD 400 BIM in Precast: Eliminating Costly Casting Bed Clashes Before the Pour",
    category: "3D BIM & DETAILING",
    readTime: "6 min read",
    date: "SEPTEMBER 2026",
    summary:
      "Automating rebar piece tickets, anchor placement verification, and crane pick analysis through constructible LOD 400 modeling for precast fabricators.",
    image: "/images/engineering-team.jpg",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] py-16 sm:py-24">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D7030F] mb-2">
              <span className="w-3 h-0.5 bg-[#D7030F]" />
              <span>TECHNICAL ARTICLES &amp; GUIDES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#01255F] uppercase tracking-tight">
              Engineering <span className="text-[#D7030F]">Blog &amp; Resources</span>
            </h2>
            <p className="text-sm sm:text-base text-[#334155] mt-2 leading-relaxed">
              Helpful technical articles, DOT drainage guidelines, and 3D BIM best practices from our licensed engineering team.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#01255F] hover:text-[#D7030F] transition-colors uppercase tracking-wider group"
          >
            <span>Ask Our Engineers</span>
            <ArrowRight className="w-4 h-4 text-[#D7030F] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border-2 border-[#DCE5F0] hover:border-[#01255F] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Stage */}
              <div className="relative h-52 sm:h-56 w-full bg-[#F8FAFD] border-b border-[#EBF1F8] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#01255F] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-[#64748B] mb-3">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#D7030F]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors uppercase tracking-wider"
                  >
                    <span>Read Technical Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D7030F] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-[#D7030F] transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
