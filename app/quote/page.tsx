"use client";

import { useState, useRef } from "react";
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
  AlertCircle,
  Loader2,
  Paperclip,
  X
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

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [resultNotice, setResultNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all required contact fields (Name, Email, Phone).");
      return;
    }

    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("fullName", formData.fullName.trim());
      data.append("company", formData.company.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("projectType", formData.projectType);
      data.append("location", formData.location.trim());
      data.append("timeline", formData.timeline);
      data.append("productCategories", JSON.stringify(formData.productCategories));
      data.append("specNotes", formData.specNotes.trim());
      data.append("formSource", "Detailed Quote Page");
      if (attachedFile) {
        data.append("file", attachedFile);
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit quote request.");
      }

      setResultNotice(json.message || "Quote request received.");
      setSubmitted(true);
    } catch (err: any) {
      console.error("Quote submit error:", err);
      setErrorMsg(err?.message || "There was an error submitting your request. Please try again or call (631) 667-3300.");
    } finally {
      setSubmitting(false);
    }
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
                <p className="text-base text-gray-600 max-w-lg mx-auto mb-4">
                  Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. An engineering estimator has been assigned to your project scope and will follow up within 24–48 business hours.
                </p>
                {resultNotice && (
                  <div className="inline-block px-4 py-2 mb-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold">
                    {resultNotice}
                  </div>
                )}
                <div className="p-4 bg-gray-50 rounded-xl max-w-md mx-auto text-left text-xs text-gray-600 mb-8 border border-gray-200">
                  <div className="font-bold text-gray-800 mb-1">Confirmation Summary:</div>
                  <div>Company: {formData.company || "N/A"}</div>
                  <div>Project: {formData.projectType} ({formData.location || "Location pending"})</div>
                  <div>Target Schedule: {formData.timeline}</div>
                  {attachedFile && <div>Attached: {attachedFile.name} ({(attachedFile.size / (1024 * 1024)).toFixed(2)} MB)</div>}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setAttachedFile(null);
                    setResultNotice(null);
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
                  <div className="mb-6 p-4 rounded-xl bg-sky-50 border border-sky-200 text-[#0369A1] text-xs flex items-center gap-2">
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
                        placeholder="David R. Henderson, P.E."
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
                        placeholder="Tri-State Infrastructure Partners LLC"
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
                        placeholder="d.henderson@tristateinfra.com"
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
                        placeholder="(516) 482-1900"
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
                        placeholder="e.g. Hauppauge Industrial Corridor, Hauppauge, NY 11788"
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
                      placeholder="e.g. Need (12) custom precast drainage vaults with AASHTO HS-20 traffic rating, stamped PE calculation package for Suffolk County DPW approval, and coordinated crane delivery to job site..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                    />
                  </div>

                  {/* File Upload Box */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition ${
                      attachedFile 
                        ? "border-emerald-500 bg-emerald-50/40" 
                        : "border-gray-300 bg-gray-50 hover:bg-white"
                    }`}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setAttachedFile(e.target.files[0]);
                        }
                      }}
                      className="hidden" 
                      accept=".dwg,.dxf,.pdf,.zip,.png,.jpg,.jpeg" 
                    />
                    {attachedFile ? (
                      <div className="flex items-center justify-between gap-3 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Paperclip className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900">{attachedFile.name}</div>
                            <div className="text-[11px] text-gray-500">{(attachedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; File attached ready to dispatch</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAttachedFile(null);
                          }}
                          className="p-1 text-gray-400 hover:text-rose-600 rounded"
                          aria-label="Remove attached file"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <div className="text-xs font-bold text-gray-800">
                          Upload Architectural / Structural Plans (PDF, DWG, ZIP)
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Max file size: 50MB. Multi-file packages accepted.
                        </p>
                      </>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center py-4 text-base cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
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
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-brand-primary font-bold flex items-center justify-center shrink-0">1</span>
                  <span><strong>Scope Review:</strong> Our estimating engineers inspect your drawings for structural feasibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-brand-primary font-bold flex items-center justify-center shrink-0">2</span>
                  <span><strong>Value Engineering:</strong> We identify opportunities to optimize casting repetitions and freight.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-brand-primary font-bold flex items-center justify-center shrink-0">3</span>
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
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-sky-50 text-gray-900 hover:text-brand-primary font-semibold transition"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-sky-50 text-gray-900 hover:text-brand-primary font-semibold transition"
                >
                  <Mail className="w-4 h-4 text-brand-primary" />
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="bg-[#FFF5F5] p-6 rounded-2xl border border-sky-200">
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
