"use client";

import { useState } from "react";
import {
  Building2,
  Landmark,
  ShoppingCart,
  Ship,
  Home,
  Plug,
  Droplet,
} from "lucide-react";

interface MarketItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MARKETS_DATA: MarketItem[] = [
  {
    id: "civic-municipal",
    title: "Civic/Municipal",
    description:
      "Marine facilities, public safety facilities, parks, roads and parking lots, town halls",
    icon: Building2,
  },
  {
    id: "institutional",
    title: "Institutional",
    description:
      "Schools, libraries, museums, monuments, performing arts centers, medical facilities, churches and cemeteries",
    icon: Landmark,
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Resorts and hotels, retail spaces, golf courses, restaurants, offices",
    icon: ShoppingCart,
  },
  {
    id: "marine",
    title: "Marine",
    description:
      "Dredging and beach nourishment, yacht clubs and marinas, boardwalks, piers, docks and beach stairs, public access facilities and boat ramps, shorefront protection",
    icon: Ship,
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "Single-family and multi-family homes, condominiums, assisted living",
    icon: Home,
  },
  {
    id: "utilities",
    title: "Utilities",
    description: "Water, gas, electric, solar, wind",
    icon: Plug,
  },
  {
    id: "wastewater",
    title: "Wastewater",
    description:
      "Sewage disposal systems and wastewater treatment plants operation and maintenance",
    icon: Droplet,
  },
];

export function MarketsSection() {
  const [activeMarket, setActiveMarket] = useState<string>("commercial");

  return (
    <section
      id="markets"
      className="w-full bg-white border-b border-[#DCE5F0] py-14 sm:py-20 overflow-hidden"
    >
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] tracking-tight leading-tight">
            Markets
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Successful project outcome starts with clear understanding of goals,
            so we structure ourselves around our clients&apos; industries.
          </p>
        </div>

        {/* 7 Columns strictly in ONE ROW on Desktop (lg and up) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-3 xl:gap-5 items-start">
          {MARKETS_DATA.map((market) => {
            const Icon = market.icon;
            const isActive = activeMarket === market.id;

            return (
              <div
                key={market.id}
                onMouseEnter={() => setActiveMarket(market.id)}
                onClick={() => setActiveMarket(market.id)}
                className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
              >
                {/* Circular Outer Ring + Inner Badge */}
                <div className="relative flex items-center justify-center mb-4 sm:mb-5">
                  <div
                    className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "border-[#0E96E1] bg-[#E0F2FE]/60 ring-6 sm:ring-8 ring-[#E0F2FE] shadow-md scale-105"
                        : "border-slate-300 bg-white group-hover:border-[#0E96E1] group-hover:ring-4 group-hover:ring-[#E0F2FE]/70"
                    }`}
                  >
                    {/* Inner Colored Circle */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                        isActive
                          ? "bg-[#0E96E1] text-white shadow-md scale-102"
                          : "bg-[#0E96E1] text-white group-hover:bg-[#014088]"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                  </div>
                </div>

                {/* Market Title */}
                <h3
                  className={`text-sm sm:text-[15px] font-black tracking-tight mb-2 transition-colors duration-200 leading-snug ${
                    isActive
                      ? "text-[#0E96E1]"
                      : "text-[#014088] group-hover:text-[#0E96E1]"
                  }`}
                >
                  {market.title}
                </h3>

                {/* Market Description */}
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed max-w-[200px] lg:max-w-none">
                  {market.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
