"use client";

import Image from "next/image";

const SPONSORS = [
  { id: "nepca", name: "NEPCA", src: "/assets/sponsor/NEPCA.JPG", cardWidth: "w-36 sm:w-44 md:w-50" },
  { id: "njpca", name: "NJPCA", src: "/assets/sponsor/njpca.jpg", cardWidth: "w-16 sm:w-22 md:w-26" },
  { id: "pcany", name: "PCANY", src: "/assets/sponsor/pcany.jpg", cardWidth: "w-28 sm:w-38 md:w-42" },
  { id: "pcav", name: "PCAV", src: "/assets/sponsor/pcav.jpg", cardWidth: "w-26 sm:w-35 md:w-38" },
  { id: "pcma", name: "PCMA", src: "/assets/sponsor/pcma.png", cardWidth: "w-26 sm:w-35 md:w-38" },
  { id: "ppa", name: "PPA", src: "/assets/sponsor/ppa.JPG", cardWidth: "w-28 sm:w-38 md:w-42" },
];

export function SponsorMarquee() {
  // Repeated sequence for smooth continuous infinite marquee
  const allSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="w-full bg-[#FAFCFF] border-b border-[#DCE5F0] py-3 sm:py-3.5">
      <div className="section-container-wide">
        {/* Title: Our Associates & Industry Affiliations (Scaled 20% smaller & refined) */}
        <div className="flex items-center justify-center gap-2.5 mb-2.5 sm:mb-3">
          <span className="w-6 sm:w-9 h-0.5 bg-[#D7030F] rounded-full" />
          <h3 className="text-xs sm:text-sm md:text-[15px] font-black uppercase tracking-wider text-[#01255F]">
            Our Associates &amp; Industry Affiliations
          </h3>
          <span className="w-6 sm:w-9 h-0.5 bg-[#D7030F] rounded-full" />
        </div>

        {/* Marquee viewport (20% smaller height: h-16 sm:h-20 md:h-22) */}
        <div className="relative w-full overflow-hidden flex items-center h-16 sm:h-20 md:h-22">
          {/* Subtle edge fade gradients */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAFCFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAFCFF] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex items-center w-max gap-2.5 sm:gap-3.5 whitespace-nowrap animate-marquee">
            {allSponsors.map((sponsor, idx) => (
              <div
                key={`${sponsor.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-1"
              >
                {/* Snug fit card scaled 20% smaller */}
                <div
                  className={`relative h-14 sm:h-17 md:h-19 ${sponsor.cardWidth} flex items-center justify-center bg-white rounded-lg border border-slate-200/80 shadow-2xs hover:border-[#01255F] hover:shadow-xs transition-all duration-200`}
                >
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} Associate Logo`}
                    fill
                    className="object-contain p-1.5 sm:p-2"
                    sizes="(max-width: 640px) 140px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
