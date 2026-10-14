import { ContactSection } from "@/components/home/contact-section";

export const metadata = {
  title: "Contact Precast Engineers",
  description: "Get in touch with Precast Engineers for structural calculations, BIM detailing, and precast engineering support.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-12">
        <div className="section-container">
          <span className="badge-tag mb-2">Precast Engineering Consultation</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#014088] mt-2">
            Contact Precast Engineers
          </h1>
          <p className="text-sm text-[#475569] mt-2">
            Connect with our engineering desk for structural analysis, Tekla modeling, or production detailing inquiries.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
