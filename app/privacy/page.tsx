import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="section-container max-w-4xl">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: January 1, 2026</p>
        </div>

        <div className="prose max-w-none text-xs text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">1. Information We Collect</h2>
            <p>
              PRECASTPRO collects information provided directly by clients, general contractors, engineers, and site visitors when submitting project bids, requesting technical documentation, contacting our estimating team, or uploading architectural drawings.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">2. Use of Construction & Project Data</h2>
            <p>
              Architectural blueprints, CAD/BIM models, structural specifications, and contact records uploaded through our quote portal are utilized strictly for estimating, engineering feasibility review, and bid preparation. We do not sell or monetize client proprietary data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">3. Non-Disclosure & Security</h2>
            <p>
              We maintain commercial-grade physical, digital, and managerial safeguards to protect client project documents against unauthorized access, loss, or disclosure. Confidentiality agreements (NDAs) are executed prior to reviewing sensitive proprietary drawings.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">4. Contact Inquiries</h2>
            <p>
              If you have inquiries regarding our data handling or wish to request removal of project drawings from our bidding database, please contact our administrative team at info@precastpro.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
