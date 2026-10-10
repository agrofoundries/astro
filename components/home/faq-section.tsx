import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="w-full section-steel section-padding">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* FAQ Intro & Light Estimator Card */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contractor Knowledge"
              specCode="TECHNICAL FAQ"
              title="Frequently Asked Precast Engineering Questions"
              description="Learn more about plant production cycles, custom steel formwork detailing, jobsite crane logistics, and how we coordinate with your field superintendents."
            />

            <div className="p-5 sm:p-6 bg-[#EAEEF3] border-2 border-[#CBD5E1] rounded-xl shadow-sm">
              <span className="font-mono-spec text-[10px] font-bold text-[#C8101E] uppercase block mb-1">
                PROJECT-SPECIFIC INQUIRY?
              </span>
              <h4 className="text-base font-bold text-[#0A2540] tracking-tight mb-2">
                Talk Directly with a Precast Estimator
              </h4>
              <p className="text-xs text-[#475569] mb-5 leading-relaxed font-normal">
                Our sales engineering team can review your preliminary plans and provide preliminary sizing, crane pick weights, and lead-time feedback within 24 hours.
              </p>
              <Link href="/contact" className="btn btn-usa-blue btn-sm w-full">
                Contact Estimating Team
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7">
            <Accordion items={[...FAQ_ITEMS]} />
          </div>
        </div>
      </div>
    </section>
  );
}
