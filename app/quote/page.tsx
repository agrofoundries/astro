"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  FileUp, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Commercial Building",
    location: "",
    timeline: "1-3 Months",
    productCategories: [] as string[],
    specNotes: "",
    filesAttached: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheckbox = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.productCategories.includes(cat);
      if (exists) {
        return { ...prev, productCategories: prev.productCategories.filter((c) => c !== cat) };
      } else {
        return { ...prev, productCategories: [...prev.productCategories, cat] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all required contact fields (Name, Email, Phone).");
      return;
    }

    setSubmitting(true);
    // Simulate processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#F4F4F6] min-h-screen py-12 md:py-16">
      <div className="section-container-wide">
        {/* Breadcrumb / Top label */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Request a Quote</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                  Quote Request Received!
                </h2>
                <p className="text-base text-gray-600 max-w-lg mx-auto mb-6">
                  Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. An engineering estimator has been assigned to your project scope and will follow up within 24–48 business hours.
                </p>
                <div className="p-4 bg-gray-50 rounded-xl max-w-md mx-auto text-left text-xs text-gray-600 mb-8 border border-gray-200">
                  <div className="font-bold text-gray-800 mb-1">Confirmation Summary:</div>
                  <div>Company: {formData.company || "N/A"}</div>
                  <div>Project: {formData.projectType} ({formData.location || "Location pending"})</div>
                  <div>Target Schedule: {formData.timeline}</div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      company: "",
                      email: "",
                      phone: "",
                      projectType: "Commercial Building",
                      location: "",
                      timeline: "1-3 Months",
                      productCategories: [],
                      specNotes: "",
                      filesAttached: false,
                    });
                  }}
                  className="btn-secondary"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <div>
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Fast Estimating Service
                  </span>
                  <h1 className="text-3xl font-black text-gray-900 tracking-tight mt-1">
                    Request an Engineered Precast Quote
                  </h1>
                  <p className="text-sm text-gray-600 mt-2">
                    Fill out our bidding form below or upload your architectural and structural drawings. We review plans promptly and provide complete material takeoffs.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Full Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Company / General Contractor
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Construction Inc."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Work Email Address <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdoe@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Phone Number <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Project Sector
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:border-brand-primary outline-none"
                      >
                        <option>Commercial Building</option>
                        <option>Industrial Logistics</option>
                        <option>Highway / Bridge / Civil</option>
                        <option>Water / Wastewater Utility</option>
                        <option>Parking Structure</option>
                        <option>Custom Architectural</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Jobsite Location (City, State)
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Austin, TX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Target Production Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:border-brand-primary outline-none"
                      >
                        <option>Immediate (Under 30 Days)</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>6+ Months / Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Precast Products Needed */}
                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-xs font-bold text-gray-800 mb-3">
                      Required Precast Components (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      {[
                        "Insulated Wall Panels",
                        "Structural Beams & Columns",
                        "Double Tees / Hollow-Core",
                        "Utility Vaults & Manholes",
                        "Box Culverts & Drainage",
                        "Architectural Custom Cladding",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition"
                        >
                          <input
                            type="checkbox"
                            checked={formData.productCategories.includes(item)}
                            onChange={() => handleCheckbox(item)}
                            className="rounded text-brand-primary focus:ring-brand-primary h-4 w-4"
                          />
                          <span className="font-medium text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Drawing upload & notes */}
                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Project Notes / Scope Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.specNotes}
                      onChange={(e) => setFormData({ ...formData, specNotes: e.target.value })}
                      placeholder="Include dimensions, square footage, design loads, or any specialized finish requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                    />
                  </div>

                  {/* File Upload Box */}
                  <div className="p-6 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-white text-center cursor-pointer transition">
                    <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-gray-800">
                      Upload Architectural / Structural Plans (PDF, DWG, ZIP)
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Max file size: 50MB. Multi-file packages accepted.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    {submitting ? "Submitting Request..." : "Submit Quote Request"}
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Support & Trust */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                What Happens After You Submit?
              </h3>
              <ol className="space-y-4 text-xs text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-brand-primary font-bold flex items-center justify-center shrink-0">1</span>
                  <span><strong>Scope Review:</strong> Our estimating engineers inspect your drawings for structural feasibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-brand-primary font-bold flex items-center justify-center shrink-0">2</span>
                  <span><strong>Value Engineering:</strong> We identify opportunities to optimize casting repetitions and freight.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-brand-primary font-bold flex items-center justify-center shrink-0">3</span>
                  <span><strong>Comprehensive Proposal:</strong> You receive an itemized bid with clear delivery schedules and freight allowances.</span>
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-2">Need Immediate Assistance?</h3>
              <p className="text-xs text-gray-600 mb-4">
                Speak directly with an application engineer about critical bid deadlines.
              </p>
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-900 hover:text-brand-primary font-semibold transition"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-900 hover:text-brand-primary font-semibold transition"
                >
                  <Mail className="w-4 h-4 text-brand-primary" />
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="bg-[#FFF5F5] p-6 rounded-2xl border border-red-200">
              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Guaranteed Confidentiality
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                All uploaded blueprints and bid packages are protected under strict commercial confidentiality and NDA guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
