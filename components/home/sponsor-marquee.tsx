"use client";

import Image from "next/image";

const SPONSORS = [
  { id: "nepca", name: "NEPCA", src: "/assets/sponsor/NEPCA.JPG", cardWidth: "w-44 sm:w-56 md:w-64" },
  { id: "njpca", name: "NJPCA", src: "/assets/sponsor/njpca.jpg", cardWidth: "w-20 sm:w-28 md:w-32" },
  { id: "pcany", name: "PCANY", src: "/assets/sponsor/pcany.jpg", cardWidth: "w-36 sm:w-48 md:w-52" },
  { id: "pcav", name: "PCAV", src: "/assets/sponsor/pcav.jpg", cardWidth: "w-32 sm:w-44 md:w-48" },
  { id: "pcma", name: "PCMA", src: "/assets/sponsor/pcma.png", cardWidth: "w-32 sm:w-44 md:w-48" },
  { id: "ppa", name: "PPA", src: "/assets/sponsor/ppa.JPG", cardWidth: "w-36 sm:w-48 md:w-52" },
];

export function SponsorMarquee() {
  // Repeated sequence for smooth continuous infinite marquee
  const allSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="w-full bg-[#FAFCFF] border-b border-[#DCE5F0] py-4 sm:py-5">
      <div className="section-container-wide">
        {/* Title: Our Associates (Enlarged & Prominent) */}
        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#D7030F] rounded-full" />
          <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wider text-[#01255F]">
            Our Associates &amp; Industry Affiliations
          </h3>
          <span className="w-8 sm:w-12 h-0.5 sm:h-1 bg-[#D7030F] rounded-full" />
        </div>

        {/* Marquee viewport */}
        <div className="relative w-full overflow-hidden flex items-center h-20 sm:h-24 md:h-28">
          {/* Subtle edge fade gradients */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFCFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFCFF] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track: Tight gap to eliminate unwanted dead space */}
          <div className="flex items-center w-max gap-3 sm:gap-4 whitespace-nowrap animate-marquee">
            {allSponsors.map((sponsor, idx) => (
              <div
                key={`${sponsor.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-1"
              >
                {/* Snug fit card tailored to each logo's cropped aspect ratio */}
                <div
                  className={`relative h-18 sm:h-22 md:h-24 ${sponsor.cardWidth} flex items-center justify-center bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#01255F] hover:shadow-md transition-all duration-200`}
                >
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} Associate Logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 160px, 240px"
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
