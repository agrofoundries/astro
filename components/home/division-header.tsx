import { Factory, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

interface DivisionHeaderProps {
  id: string;
  divisionNumber: "01" | "02";
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  theme: "manufacturing" | "engineering";
}

export function DivisionHeader({
  id,
  divisionNumber,
  title,
  subtitle,
  badge,
  description,
  primaryLink,
  secondaryLink,
  theme,
}: DivisionHeaderProps) {
  const isMfg = theme === "manufacturing";

  return (
    <div id={id} className={`w-full py-10 sm:py-12 border-y border-[#DCE5F0] ${isMfg ? "bg-[#FFF9F9]" : "bg-[#F4F8FD]"}`}>
      <div className="section-container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Division Pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 rounded text-[11px] font-black uppercase tracking-wider font-mono ${
                isMfg ? "bg-[#D7030F] text-white" : "bg-[#01255F] text-white"
              }`}>
                DIVISION {divisionNumber}
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-[#64748B] font-mono">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#01255F] tracking-tight uppercase leading-tight">
              {title}
            </h2>
            <div className="flex items-center gap-2 mt-1 mb-3">
              <span className={`w-6 h-1 rounded-full ${isMfg ? "bg-[#D7030F]" : "bg-[#01255F]"}`} />
              <span className="text-xs sm:text-sm font-bold text-[#D7030F] uppercase tracking-wider">
                {subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={primaryLink.href}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-black uppercase tracking-wider shadow-sm transition-all ${
                isMfg
                  ? "bg-[#D7030F] hover:bg-[#B31217] text-white"
                  : "bg-[#01255F] hover:bg-[#06182E] text-white"
              }`}
            >
              {isMfg ? <Factory className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
              <span>{primaryLink.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {secondaryLink && (
              <Link
                href={secondaryLink.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-[#DCE5F0] bg-white hover:bg-slate-50 text-[#01255F] text-xs font-black uppercase tracking-wider transition-colors"
              >
                <span>{secondaryLink.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
