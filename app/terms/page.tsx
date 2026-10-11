import Link from "next/link";
import { Scale, AlertCircle, FileCheck, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Terms of Use & Technical Disclaimer | Precast Engineers",
  description: "Terms of service, engineering disclaimer, and scope of preliminary tools at Precast Engineers.",
};

const TERMS_SECTIONS = [
  {
    icon: Scale,
    title: "1. Scope of Quotations & Engineering Proposals",
    summary: "Plain English: Website estimates and online tool outputs are for preliminary planning. Final projects require approved drawings and licensed PE stamps.",
    legal:
      "Preliminary estimates generated via the Precast Engineers website or preliminary engineering calculators represent budgetary planning figures based on submitted parameters. Formal construction engagements require finalized shop drawings, stamped calculations by a licensed PE/SE, and executed commercial agreements.",
  },
  {
    icon: AlertCircle,
    title: "2. Technical & Calculator Disclaimer",
    summary: "Plain English: Online calculators and technical guides are educational resources and do not replace formal review by a qualified structural engineer.",
    legal:
      "All engineering calculation tools, volume estimators, and technical references on this website are provided for reference and preliminary sizing only. They do not substitute for project-specific structural analysis or code compliance verification by an authorized Professional Engineer in the project jurisdiction.",
  },
  {
    icon: FileCheck,
    title: "3. Intellectual Property & Governing Codes",
    summary: "Plain English: Brand assets are owned by Precast Engineers. Industry standard codes (ACI, PCI, ASTM) remain property of their respective institutes.",
    legal:
      "Brand trademarks, website graphics, proprietary calculator algorithms, and detailing libraries belong to Precast Engineers. Code references such as ACI 318, PCI MNL-120, ASTM, and IBC are cited strictly for educational identification and standard practice reference.",
  },
];

export default function TermsPage() {
  return (
    <div className="w-full bg-white py-14">
      <div className="section-container max-w-4xl">
        {/* Visual Header */}
        <div className="border-b border-[#DCE5F0] pb-6 mb-10">
          <span className="badge-tag mb-2">Legal &amp; Engineering Terms</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#01255F] mt-2">
            Terms of Use &amp; Technical Disclaimer
          </h1>
          <p className="text-xs text-[#64748B] mt-2">
            Effective Date: January 1, 2026 • Precast Engineers
          </p>
        </div>

        {/* Graphical Section Cards */}
        <div className="space-y-6">
          {TERMS_SECTIONS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#F2F7FF] border border-[#DCE5F0] rounded-xl p-6 space-y-4 hover:border-[#01255F] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#DCE5F0] flex items-center justify-center text-[#D7030F]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-[#01255F]">
                    {sec.title}
                  </h2>
                </div>

                {/* Plain English Highlight Card */}
                <div className="bg-white border border-[#DCE5F0] rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-[#01255F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D7030F] shrink-0 mt-0.5" />
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

        {/* Return Button */}
        <div className="mt-10 p-6 bg-white border border-[#DCE5F0] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#01255F]">
              Have questions regarding terms or project specifications?
            </h3>
            <p className="text-xs text-[#475569]">
              Reach our engineering desk at {COMPANY.email}.
            </p>
          </div>
          <Link href="/" className="btn-navy text-xs px-4 py-2 rounded shrink-0">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
