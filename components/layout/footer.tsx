import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

const FOOTER_PRODUCTS = [
  { label: "Insulated Wall Panels", href: "/products#wall-panels" },
  { label: "Prestressed Double Tees", href: "/products#structural" },
  { label: "Underground Utility Structures", href: "/products#utility" },
  { label: "Civil Box Culverts & Bridges", href: "/products#infrastructure" },
  { label: "Architectural Precast Facades", href: "/products#architectural" },
  { label: "Custom Engineered Components", href: "/products#custom" },
];

const FOOTER_COMPANY = [
  { label: "About PRECAST ENGINEERS", href: "/about" },
  { label: "Manufacturing Capabilities", href: "/capabilities" },
  { label: "Quality Assurance & Testing", href: "/capabilities#quality" },
  { label: "Project Case Studies", href: "/projects" },
  { label: "Technical Resources & CAD", href: "/resources" },
  { label: "Contact Estimating", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#06182E] text-slate-300 border-t-4 border-[#D71920]" role="contentinfo">
      {/* Precast Certification Bar in Deep Navy */}
      <div className="bg-[#0B2545] border-b border-slate-800 py-3.5 text-xs text-slate-300">
        <div className="section-container-wide flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
            <span className="text-white font-bold tracking-wide">PCI MNL-116 CERTIFIED FABRICATION PLANT</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">ACI CORPORATE MEMBER</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>AASHTO APPROVED FABRICATOR</span>
            <span className="text-slate-600">|</span>
            <span className="text-red-400 font-bold">STATE DOT APPROVED IN 48 STATES</span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="section-container-wide py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Company Profile & Contacts */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" aria-label="PRECAST ENGINEERS Home" className="inline-block py-1">
              <Image
                src="/images/logo-light.png"
                alt="PRECAST ENGINEERS - Empowering Precasters...."
                width={240}
                height={65}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering precasters and general contractors with high-performance precast &amp; prestressed concrete structural elements, certified plant fabrication, and Tekla LOD 400 BIM engineering.
            </p>

            <div className="space-y-3 text-xs">
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2.5 text-white hover:text-red-400 font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>{COMPANY.phone} (Direct Estimating)</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D71920] shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/quote" className="btn-construction px-5 py-2.5 rounded text-xs font-black inline-flex items-center gap-2">
                <span>Request Project Takeoff</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Product Lines */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Precast Products
            </h3>
            <ul className="space-y-2 text-xs">
              {FOOTER_PRODUCTS.map((prod) => (
                <li key={prod.href}>
                  <Link
                    href={prod.href}
                    className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D71920] font-bold">›</span>
                    <span>{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Corporate &amp; Plant
            </h3>
            <ul className="space-y-2 text-xs">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D71920] font-bold">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Plant Working Hours & Dispatch */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Operating Schedule
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Fabrication &amp; Estimating:</div>
                  <div className="text-slate-300">{COMPANY.hours}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Yard Dispatch:</div>
                  <div className="text-slate-300">{COMPANY.dispatchHours}</div>
                </div>
              </div>
              <div className="p-3 bg-[#0B2545] rounded border border-slate-800 text-[11px] text-slate-300">
                <span className="text-red-400 font-bold block mb-1">EMERGENCY RIGGING DESK:</span>
                24/7 on-site crane hook delivery coordination available for active highway contracts.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Sub-Footer */}
      <div className="bg-[#040E1B] border-t border-slate-900 py-5 text-xs text-slate-400">
        <div className="section-container-wide flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            &copy; 2026 PRECAST ENGINEERS™. All rights reserved. Empowering Precasters....
          </div>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Plant Audit Records
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
