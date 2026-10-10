import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="section-container max-w-4xl">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Commercial Terms
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
            Terms of Service & Quotation Conditions
          </h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: January 1, 2026</p>
        </div>

        <div className="prose max-w-none text-xs text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">1. Scope of Quotations</h2>
            <p>
              Preliminary proposals generated via the PRECAST ENGINEERS website or estimating desk represent budgetary estimates based on submitted drawings and verbal scopes. Formal contracts require finalized shop drawing approval, stamped engineering calculations, and executed commercial agreements.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">2. Fabrication & Lead Times</h2>
            <p>
              Fabrication scheduling commences upon written return of approved shop drawings with engineer-of-record stamp. Manufacturing slots are subject to plant casting line availability and cured batch cycle compliance.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">3. Jobsite Staging & Crane Hook Coordination</h2>
            <p>
              Deliveries are coordinated F.O.B. jobsite or plant gate as stipulated in commercial purchase agreements. General contractors are responsible for adequate crane access, stable roadway surfaces, and timely crane hook offloading.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
