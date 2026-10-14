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
    <section className="w-full bg-[#FAFCFF] border-b border-[#DCE5F0] py-5 sm:py-7">
      <div className="section-container-wide">
        {/* Title: Our Associates & Industry Affiliations (Bigger, Bolder, Prominent) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <span className="w-8 sm:w-14 h-1 bg-[#0E96E1] rounded-full" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-wider text-[#014088] text-center">
            Our Associates &amp; Industry Affiliations
          </h2>
          <span className="w-8 sm:w-14 h-1 bg-[#0E96E1] rounded-full" />
        </div>

        {/* Marquee viewport */}
        <div className="relative w-full overflow-hidden flex items-center h-20 sm:h-24 md:h-26">

          {/* Marquee Track */}
          <div className="flex items-center w-max gap-3 sm:gap-4 whitespace-nowrap animate-marquee">
            {allSponsors.map((sponsor, idx) => (
              <div
                key={`${sponsor.id}-${idx}`}
                className="shrink-0 flex items-center justify-center px-1"
              >
                {/* Generous clean card */}
                <div
                  className={`relative h-16 sm:h-20 md:h-22 ${sponsor.cardWidth} flex items-center justify-center bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-[#014088] hover:shadow-md transition-all duration-300 hover-lift`}
                >
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} Associate Logo`}
                    fill
                    className="object-contain p-2 sm:p-2.5 img-zoom"
                    sizes="(max-width: 640px) 160px, 220px"
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
