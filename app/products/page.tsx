import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, ShieldCheck, Ruler, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const DETAILED_PRODUCTS = [
  {
    id: "wall-panels",
    title: "Precast Concrete Wall Panels",
    subtitle: "Structural & Insulated Architectural Sandwich Systems",
    image: "/images/wall-panels.jpg",
    description: "Our engineered wall panels integrate high-performance continuous insulation (up to R-32), exceptional fire resistance (up to 4-hour ratings), and structural load-bearing capacity. Designed for accelerated crane erection on distribution centers, manufacturing plants, and commercial buildings.",
    features: [
      "Customizable thickness from 6\" to 14\" solid or insulated sandwich",
      "Factory-installed electrical conduit and window opening blockouts",
      "Non-conductive composite thermal ties preventing thermal bridging",
      "Finished surfaces: smooth steel form, acid-etched, sandblasted, or thin-brick",
    ],
    specs: [
      { label: "Max Panel Height", value: "Up to 48 ft." },
      { label: "Compressive Strength", value: "6,000 – 8,500 PSI" },
      { label: "Thermal Value", value: "R-14 to R-32+" },
      { label: "Fire Rating", value: "Up to 4 Hours" },
    ],
  },
  {
    id: "structural",
    title: "Structural Precast & Prestressed Components",
    subtitle: "Beams, Columns, Girders & Double Tees",
    image: "/images/infrastructure.jpg",
    description: "Engineered to carry extreme spans and heavy vehicular or equipment loadings. Prestressed casting techniques provide unparalleled deflection resistance and structural reliability for parking structures, long-span roofs, and elevated plazas.",
    features: [
      "Prestressed double tees spanning up to 75+ feet",
      "Inverted tee beams, ledger beams, and rectangular spandrels",
      "Square and rectangular precast columns with cast-in corbels",
      "High-durability stainless or epoxy-coated reinforcement options",
    ],
    specs: [
      { label: "Max Clear Span", value: "75+ ft. (Double Tees)" },
      { label: "Concrete Strength", value: "8,000 – 10,000 PSI" },
      { label: "Strand Type", value: "0.5\" & 0.6\" Low-Relaxation" },
      { label: "Design Code", value: "ACI 318 / PCI MNL-120" },
    ],
  },
  {
    id: "utility",
    title: "Underground Utility Structures",
    subtitle: "Manholes, Vaults, Catch Basins & Interceptors",
    image: "/images/manufacturing.jpg",
    description: "Heavy-duty underground precast structures engineered to ASTM C478 and AASHTO HS-20/HS-25 traffic loadings. Monolithic bottoms and keyed tongue-and-groove joints guarantee watertight performance in high groundwater tables.",
    features: [
      "ASTM C443 / C990 compliant watertight joint gaskets and boots",
      "Integrated cast-in pipe penetrations (Kor-N-Seal or equivalent)",
      "High-capacity electric, telecom, and meter vaults with aluminum hatches",
      "Grease interceptors and water quality separator systems",
    ],
    specs: [
      { label: "Standard Diameters", value: "48\", 60\", 72\", 96\"+" },
      { label: "Traffic Rating", value: "AASHTO HS-20 & HS-25" },
      { label: "Joint Specification", value: "ASTM C443 Watertight" },
      { label: "Coating Options", value: "Coal Tar / Polyurea Liner" },
    ],
  },
  {
    id: "infrastructure",
    title: "Civil Infrastructure & Drainage",
    subtitle: "Box Culverts, Retaining Walls & Bridge Components",
    image: "/images/commercial-building.jpg",
    description: "Monolithic precast box culverts and modular retaining wall systems designed for rapid interstate and highway installation. Accelerate roadway openings with off-site precast solutions approved by state DOT agencies.",
    features: [
      "Precast concrete box culverts spanning 6'x3' up to 16'x12'",
      "MSE (Mechanically Stabilized Earth) retaining wall panels",
      "DOT-approved headwalls, wingwalls, and end sections",
      "Rapid weekend installation sequences reducing road closure times",
    ],
    specs: [
      { label: "Box Sizes", value: "Standard ASTM C1577" },
      { label: "Fill Heights", value: "0 to 30+ ft. Cover" },
      { label: "Life Expectancy", value: "100+ Year Design Life" },
      { label: "Agency Approval", value: "DOT State Approved" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-white">
      {/* Header banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Precast Concrete Product Line
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Precision-Engineered Precast Components
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Manufactured in our climate-controlled PCI-certified facility to meet the most exacting structural, thermal, and architectural specifications across North America.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary">
                Request Product Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/resources" className="btn-secondary">
                Download Technical Data Sheets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="section-container-wide py-16 md:py-24 space-y-24">
        {DETAILED_PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            id={product.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                {product.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-4">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                {product.specs.map((spec, i) => (
                  <div key={i}>
                    <div className="text-[11px] text-gray-500 font-semibold">{spec.label}</div>
                    <div className="text-xs font-bold text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/quote?product=${product.id}`}
                  className="btn-primary text-xs"
                >
                  Configure & Request Quote
                </Link>
                <Link
                  href="/resources"
                  className="btn-secondary text-xs inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  CAD / Specs
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
