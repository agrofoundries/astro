import { ExternalLink, ShieldAlert } from "lucide-react";

interface StandardItem {
  code: string;
  name: string;
  edition: string;
  publisher: string;
  url: string;
  scope: string;
}

const STANDARDS: StandardItem[] = [
  {
    code: "ACI 318",
    name: "Building Code Requirements for Structural Concrete",
    edition: "ACI 318-19 (2019 / 2022 Commentary)",
    publisher: "American Concrete Institute (ACI)",
    url: "https://www.concrete.org",
    scope: "Defines minimum requirements for materials, design, and construction of structural concrete elements, including precast and prestressed members.",
  },
  {
    code: "PCI Design Handbook",
    name: "Precast and Prestressed Concrete Design Handbook",
    edition: "8th Edition (MNL-120-17)",
    publisher: "Precast/Prestressed Concrete Institute (PCI)",
    url: "https://www.pci.org",
    scope: "Primary U.S. design manual covering load tables, connection design, component handling, tolerance criteria, and thermal envelope calculations.",
  },
  {
    code: "ASTM Standards",
    name: "Standard Specifications for Concrete & Reinforcement",
    edition: "ASTM C150, C33, C39, A615, A416",
    publisher: "ASTM International",
    url: "https://www.astm.org",
    scope: "Standard specifications governing Portland cement, concrete aggregates, compressive strength testing, steel reinforcing bars, and 7-wire prestressing strands.",
  },
  {
    code: "IBC",
    name: "International Building Code",
    edition: "IBC 2021 / 2024 Edition",
    publisher: "International Code Council (ICC)",
    url: "https://www.iccsafe.org",
    scope: "Adopted model building code regulating structural design, occupancy safety, fire resistance ratings, and precast inspection requirements across U.S. jurisdictions.",
  },
  {
    code: "ASCE / SEI 7",
    name: "Minimum Design Loads and Associated Criteria for Buildings",
    edition: "ASCE 7-22 (2022)",
    publisher: "American Society of Civil Engineers (ASCE)",
    url: "https://www.asce.org",
    scope: "Specifies dead, live, wind, seismic, snow, and thermal loads used in structural calculations for precast concrete structures.",
  },
  {
    code: "OSHA 1926",
    name: "Safety and Health Regulations for Construction",
    edition: "29 CFR 1926 Subpart M (Fall) & Subpart Q (Concrete)",
    publisher: "Occupational Safety and Health Administration (OSHA)",
    url: "https://www.osha.gov",
    scope: "Federal safety requirements for concrete forms, precast lifting hardware verification, erection bracing safety, and jobsite fall protection.",
  },
];

export function CodesStandards() {
  return (
    <section id="codes" className="bg-[#F4F8FD] border-b border-[#DCE5F0] py-16 sm:py-20">
      <div className="section-container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4030C] mb-2">
            <span className="w-3 h-0.5 bg-[#D4030C]" />
            <span>REGULATORY REFERENCES &amp; JURISDICTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#032356] uppercase tracking-tight">
            U.S. Codes &amp; Infrastructure Standards
          </h2>
          <p className="text-sm sm:text-base text-[#334155] mt-2">
            Key governing codes, design handbooks, material standards, and DOT safety specifications referenced in precast concrete structural engineering.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#DCE5F0] rounded-xl p-6 flex flex-col justify-between hover:border-[#032356] hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-white bg-[#032356] px-2.5 py-1 rounded font-mono uppercase tracking-wider">
                    {std.code}
                  </span>
                  <span className="text-[11px] text-[#64748B] font-mono font-bold">
                    {std.edition}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#032356] mb-1.5 leading-snug">
                  {std.name}
                </h3>

                <p className="text-[11px] text-[#D4030C] font-bold uppercase tracking-wider mb-3">
                  Publisher: {std.publisher}
                </p>

                <p className="text-xs text-[#475569] leading-relaxed mb-6 font-normal">
                  {std.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F7FF]">
                <a
                  href={std.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#032356] hover:text-[#D4030C] transition-colors"
                >
                  <span>Visit Official Publisher</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4030C]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Caution Notice */}
        <div className="mt-8 bg-white border border-[#DCE5F0] rounded-xl p-5 flex items-start gap-3 text-xs text-[#475569] shadow-xs">
          <ShieldAlert className="w-5 h-5 text-[#D4030C] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#032356] font-bold">Notice:</strong> These references are listed for technical compliance and engineering submittal verification. Project calculations must adhere to specific state DOT criteria (e.g. Maine DOT, NH DOT, MassDOT) and local municipal amendments adopted by the authority having jurisdiction (AHJ).
          </p>
        </div>
      </div>
    </section>
  );
}
