import Link from "next/link";
import { ArrowRight, Building2, Columns3, Box, Route, Landmark, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const INDUSTRIAL_PRODUCTS = [
  {
    csi: "CSI 03 45 00",
    catalogId: "WP-SERIES",
    title: "Structural & Insulated Wall Panels",
    description: "Load-bearing insulated sandwich panels with non-conductive composite thermal ties and integrated conduit raceways.",
    specs: ["R-22 to R-32 Continuous", "Up to 48' Heights", "4-Hour Fire Rating"],
    icon: Building2,
    href: "/products#wall-panels",
  },
  {
    csi: "CSI 03 41 00",
    catalogId: "SC-SERIES",
    title: "Prestressed Girders & Double Tees",
    description: "High-capacity prestressed double tees, inverted tee beams, and heavy spandrel panels for severe clear-span load demands.",
    specs: ["Spans up to 75+ Feet", "8,500 – 10,000 PSI", "270k Low-Relax Strand"],
    icon: Columns3,
    href: "/products#structural",
  },
  {
    csi: "CSI 33 05 13",
    catalogId: "UT-SERIES",
    title: "Heavy Underground Utility Structures",
    description: "Monolithic precast storm/sanitary manholes, electrical vaults, oil-water separators, and valve vaults with watertight boots.",
    specs: ["ASTM C478 Compliant", "AASHTO HS-25 Rated", "Watertight Joints"],
    icon: Box,
    href: "/products#utility",
  },
  {
    csi: "CSI 33 42 13",
    catalogId: "CV-SERIES",
    title: "Precast Box Culverts & Civil Infrastructure",
    description: "ASTM C1577 precast culverts, headwalls, MSE retaining walls, and highway barriers engineered for rapid road reopening.",
    specs: ["Spans to 16' x 12'", "100-Year Design Life", "State DOT Approved"],
    icon: Route,
    href: "/products#infrastructure",
  },
  {
    csi: "CSI 03 45 13",
    catalogId: "AP-SERIES",
    title: "Architectural Precast Facades",
    description: "Custom-finished cladding featuring acid-etched quartz aggregate, deep formliner textures, and integrated thin-brick casting.",
    specs: ["Acoustic STC 55+", "Custom Color Matrices", "Thermal Mass Storage"],
    icon: Landmark,
    href: "/products#architectural",
  },
  {
    csi: "CSI 03 48 00",
    catalogId: "CS-SERIES",
    title: "Custom Engineered Precast Solutions",
    description: "Engineered-to-order heavy industrial precast elements, equipment foundations, crane counterweights, and specialty vaults.",
    specs: ["Tekla LOD 400 BIM", "PE Calculations", "CNC Custom Formwork"],
    icon: Wrench,
    href: "/products#custom",
  },
];

export function ProductCategories() {
  return (
    <section id="products" className="w-full section-steel section-padding">
      <div className="section-container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <SectionHeading
              eyebrow="Division 03 Product Catalog"
              specCode="MASTERFORMAT"
              title="Precast Structural &amp; Civil Components"
              description="Manufactured under certified factory conditions to eliminate jobsite weather delays and ensure dimensional precision across all trades."
            />
          </div>
          <Link
            href="/products"
            className="btn btn-usa-outline-blue mb-4 md:mb-8 inline-flex self-start md:self-auto"
          >
            Download Product Specifications (PDF)
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIAL_PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.catalogId}
                className="bg-white border-2 border-[#CBD5E1] hover:border-[#0A2540] rounded-xl transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Clean High-Contrast Header */}
                  <div className="bg-[#EAEEF3] text-[#0A2540] px-5 py-2.5 flex items-center justify-between text-xs font-mono-spec border-b border-[#CBD5E1]">
                    <span className="text-[#D4030C] font-bold">{product.csi}</span>
                    <span className="text-[#64748B] font-bold tracking-wider">{product.catalogId}</span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="w-11 h-11 bg-[#F4F6F9] border border-[#CBD5E1] text-[#0A2540] rounded-lg flex items-center justify-center mb-3.5 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0A2540] tracking-tight mb-2 group-hover:text-[#D4030C] transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed mb-5 font-normal">
                      {product.description}
                    </p>

                    {/* Technical Parameter Chips */}
                    <div className="space-y-1.5 pt-3.5 border-t border-[#CBD5E1]">
                      <div className="text-[10px] font-mono-spec font-bold text-[#64748B] uppercase">
                        Engineering Parameters:
                      </div>
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono-spec text-[#0A2540] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4030C]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F8FAFC] border-t border-[#CBD5E1]">
                  <Link
                    href={product.href}
                    className="flex items-center justify-between text-xs font-bold text-[#0A2540] group-hover:text-[#D4030C] uppercase tracking-wider"
                  >
                    <span>View Technical Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
