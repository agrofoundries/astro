import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Precast Engineers",
  description: "Privacy policy and client data protection standards at Precast Engineers.",
};

const SECTIONS = [
  {
    icon: ShieldCheck,
    title: "1. Information We Collect",
    summary: "Plain English: We only collect drawings, project specs, and contact details that you directly provide to us.",
    legal:
      "Precast Engineers collects information provided directly by clients, structural designers, precasters, and website visitors when submitting RFPs, requesting PE calculations, downloading technical details, or transmitting project files.",
  },
  {
    icon: FileText,
    title: "2. Use of Construction & Project Data",
    summary: "Plain English: Your drawings and BIM models are used strictly for engineering analysis and takeoffs. We never sell or share your data.",
    legal:
      "Blueprints, CAD/BIM models, structural specifications, and contact records uploaded to our engineering desk are utilized strictly for estimating, feasibility analysis, connection detailing, and PE calculations. We do not sell, rent, or commercialize proprietary client data.",
  },
  {
    icon: Lock,
    title: "3. Non-Disclosure & Security Standards",
    summary: "Plain English: Commercial-grade encryption and standard NDA agreements protect your files before review.",
    legal:
      "We maintain industry-standard physical, digital, and managerial safeguards to protect client project drawings against unauthorized access or disclosure. Formal Non-Disclosure Agreements (NDAs) are routinely executed prior to reviewing sensitive proprietary fabrication files.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white py-14">
      <div className="section-container max-w-4xl">
        {/* Visual Header */}
        <div className="border-b border-[#DCE5F0] pb-6 mb-10">
          <span className="badge-tag mb-2">Legal &amp; Data Security</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#032356] mt-2">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-xs text-[#64748B] mt-2">
            Effective Date: January 1, 2026 • Precast Engineers
          </p>
        </div>

        {/* Graphical Section Cards */}
        <div className="space-y-6">
          {SECTIONS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#F2F7FF] border border-[#DCE5F0] rounded-xl p-6 space-y-4 hover:border-[#032356] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#DCE5F0] flex items-center justify-center text-[#D4030C]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-[#032356]">
                    {sec.title}
                  </h2>
                </div>

                {/* Plain English Highlight Card */}
                <div className="bg-white border border-[#DCE5F0] rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-[#032356] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D4030C] shrink-0 mt-0.5" />
                  <p>{sec.summary}</p>
                </div>

                {/* Legal Clause */}
                <p className="text-xs text-[#475569] leading-relaxed">
                  {sec.legal}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-10 p-6 bg-white border border-[#DCE5F0] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#032356]">
              Questions regarding privacy or NDAs?
            </h3>
            <p className="text-xs text-[#475569]">
              Contact our engineering administration at {COMPANY.email}.
            </p>
          </div>
          <Link href="/#contact" className="btn-navy text-xs px-4 py-2 rounded shrink-0">
            Contact Engineering Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
