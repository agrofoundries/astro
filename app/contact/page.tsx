import { ContactSection } from "@/components/home/contact-section";

export const metadata = {
  title: "Contact Astro Masonry & Precast Engineering | Deer Park, NY Plant",
  description: "Request 5,000+ PSI precast concrete quotes, CAD shop drawings, and PE-stamped engineering submittals from our Long Island production plant.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-12">
        <div className="section-container">
          <span className="badge-tag mb-2">Precast Engineering Consultation &amp; Drawing Desk</span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#014088] mt-2 uppercase tracking-tight">
            Contact Astro Masonry &amp; Precast
          </h1>
          <p className="text-sm sm:text-base text-slate-800 mt-2 font-medium">
            Connect directly with our Deer Park, NY engineering desk for 5,000+ PSI precast pricing, CAD submittal drawings, and job site delivery coordination.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
