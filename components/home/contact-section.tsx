"use client";

import { useState, useRef } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  FileUp,
  Phone,
  Download,
  FileText,
  Paperclip,
  X,
  ExternalLink,
  Layers,
  Zap,
  Truck,
  Check,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const CATEGORY_DRAWINGS: Record<
  string,
  { label: string; pdf: string; pages: string; size: string }
> = {
  "catch-basins": {
    label: "Catch Basins (AR 3048 CB)",
    pdf: "/downloads/drawings/Astro-Catch-Basins-Drawings.pdf",
    pages: "Pages 4–17",
    size: "10.1 MB",
  },
  "septic-tanks": {
    label: "Watertight Septic Tanks (1,000–2,500 Gal)",
    pdf: "/downloads/drawings/Astro-Septic-Tanks-Drawings.pdf",
    pages: "Pages 18–28",
    size: "8.2 MB",
  },
  "grease-traps": {
    label: "Commercial Grease Interceptors",
    pdf: "/downloads/drawings/Astro-Grease-Traps-Drawings.pdf",
    pages: "Pages 29–39",
    size: "7.9 MB",
  },
  "distribution-boxes": {
    label: "Septic Distribution Boxes (4-Hole)",
    pdf: "/downloads/drawings/Astro-Distribution-Boxes-Drawings.pdf",
    pages: "Pages 40–41",
    size: "1.9 MB",
  },
  "leaching-galleys": {
    label: "Precast Leaching Galleys (1'–4' Depth)",
    pdf: "/downloads/drawings/Astro-Leaching-Galleys-Drawings.pdf",
    pages: "Pages 42–47",
    size: "4.7 MB",
  },
  "low-domes": {
    label: "Precast Low Conical Domes",
    pdf: "/downloads/drawings/Astro-Low-Domes-Drawings.pdf",
    pages: "Pages 48–53",
    size: "5.0 MB",
  },
  "high-domes": {
    label: "Precast High Conical Domes",
    pdf: "/downloads/drawings/Astro-High-Domes-Drawings.pdf",
    pages: "Pages 54–58",
    size: "4.5 MB",
  },
  "curb-stops": {
    label: "Commercial Parking Curb Stops",
    pdf: "/downloads/drawings/Astro-Curb-Stops-Drawings.pdf",
    pages: "Pages 59–62",
    size: "2.6 MB",
  },
  slabs: {
    label: "Precast Highway Traffic Slabs (6'–12')",
    pdf: "/downloads/drawings/Astro-Slabs-Drawings.pdf",
    pages: "Pages 63–84",
    size: "16.3 MB",
  },
  "solid-rings": {
    label: "Solid Utility Precast Rings (4'–12')",
    pdf: "/downloads/drawings/Astro-Solid-Rings-Drawings.pdf",
    pages: "Pages 85–102",
    size: "14.5 MB",
  },
  "sanitary-rings": {
    label: "Sanitary Leaching Rings (Suffolk DOH)",
    pdf: "/downloads/drawings/Astro-Sanitary-Rings-Drawings.pdf",
    pages: "Pages 103–115",
    size: "11.0 MB",
  },
  "storm-rings": {
    label: "Stormwater Drywell Rings (8'–12')",
    pdf: "/downloads/drawings/Astro-Storm-Rings-Drawings.pdf",
    pages: "Pages 116–127",
    size: "10.1 MB",
  },
  footings: {
    label: "Precast Footing Rings",
    pdf: "/downloads/drawings/Astro-Footings-Drawings.pdf",
    pages: "Pages 128–134",
    size: "5.2 MB",
  },
  "high-collars": {
    label: "Grade Adjustment High Collars",
    pdf: "/downloads/drawings/Astro-High-Collars-Drawings.pdf",
    pages: "Pages 135–140",
    size: "4.8 MB",
  },
};

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  categoryKey: string;
  deliveryTimeline: string;
  requirements: string;
}

export function ContactSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    categoryKey: "catch-basins",
    deliveryTimeline: "Next 1–2 Weeks (Active Site)",
    requirements: "",
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resultNotice, setResultNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectedCategoryDrawing = CATEGORY_DRAWINGS[formData.categoryKey] || CATEGORY_DRAWINGS["catch-basins"];

  const validateStep1 = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.company.trim()) errs.company = "Company / Contractor name is required.";
    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.requirements.trim()) {
      errs.requirements = "Please describe your project requirements or piece quantities.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextFromStep1 = () => {
    if (validateStep1()) {
      setErrors({});
      setSubmitError(null);
      setCurrentStep(2);
    }
  };

  const handleNextFromStep2 = () => {
    setErrors({});
    setSubmitError(null);
    setCurrentStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep3()) {
      setCurrentStep(3);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("company", formData.company.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("categoryKey", formData.categoryKey);
      data.append("category", selectedCategoryDrawing.label);
      data.append("deliveryTimeline", formData.deliveryTimeline);
      data.append("requirements", formData.requirements.trim());
      data.append("formSource", "Home Page 3-Step Wizard");

      if (attachedFile) {
        data.append("file", attachedFile);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to process quote request. Please try again.");
      }

      setResultNotice(json.message || "Quote request received and dispatched to engineering.");
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("RFQ submission failed:", err);
      setSubmitError(
        err?.message || "There was a problem sending your request. Please try again or email sales@astromasonry.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      categoryKey: "catch-basins",
      deliveryTimeline: "Next 1–2 Weeks (Active Site)",
      requirements: "",
    });
    setAttachedFile(null);
    setErrors({});
    setSubmitError(null);
    setResultNotice(null);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#F8FAFD] border-b border-[#DCE5F0] py-14 sm:py-18">
      <div className="section-container-wide">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] text-xs font-semibold tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E96E1]" />
            <span>Direct Plant &amp; Engineering Desk &bull; Deer Park, NY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#014088] tracking-tight leading-[1.2] mb-3">
            Contact Astro <span className="text-[#0E96E1]">Precast Engineers</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Submit your civil plans, utility profiles, or itemized RFQ. Our engineering group delivers comprehensive submittal packages, PE-sealed calculations, and competitive direct-from-plant contractor pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left Column: Estimating Form & Drawing Attachment */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white border border-[#DCE5F0] rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm flex-1 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 bg-[#E0F2FE] border-2 border-[#BAE6FD] text-[#0E96E1] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#0E96E1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#014088]">
                    Quote Request &amp; Drawings Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#014088]">{formData.name}</strong> from{" "}
                    <strong className="text-[#014088]">{formData.company}</strong>. Our precast technical desk has received your request
                    {attachedFile ? (
                      <> with attached drawing file <strong className="text-[#014088]">({attachedFile.name})</strong></>
                    ) : null}
                    . An Astro engineer will follow up with pricing, lead times, and submittal sheets.
                  </p>

                  {resultNotice && (
                    <div className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold">
                      {resultNotice}
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href={selectedCategoryDrawing.pdf}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#014088] text-white text-xs font-semibold hover:bg-[#0C82C4] transition-colors shadow-sm"
                    >
                      <Download className="w-4 h-4 text-[#7DD3FC]" />
                      <span>Download {selectedCategoryDrawing.label} CAD Drawing</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-[#014088] text-[#014088] bg-white text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Submit Another Quote Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Step Progress Header */}
                  <div className="pb-5 border-b border-slate-100">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { step: 1, label: "01 Contact", sub: "Contractor Info" },
                        { step: 2, label: "02 Products", sub: "Category & CAD" },
                        { step: 3, label: "03 Specs", sub: "Upload & Quote" },
                      ].map((item) => {
                        const isDone = currentStep > item.step;
                        const isCurrent = currentStep === item.step;
                        return (
                          <button
                            key={item.step}
                            type="button"
                            onClick={() => {
                              if (item.step < currentStep) setCurrentStep(item.step as 1 | 2 | 3);
                            }}
                            disabled={item.step > currentStep}
                            className={`text-left p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-[#E0F2FE] border border-[#BAE6FD]"
                                : isDone
                                ? "bg-slate-50 hover:bg-slate-100 border border-slate-200"
                                : "opacity-45 cursor-not-allowed border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-bold ${
                                  isCurrent
                                    ? "bg-[#014088] text-white"
                                    : isDone
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-200 text-slate-600"
                                }`}
                              >
                                {isDone ? <Check className="w-3 h-3" /> : item.step}
                              </span>
                              <span
                                className={`text-xs font-bold truncate ${
                                  isCurrent ? "text-[#014088]" : isDone ? "text-slate-800" : "text-slate-500"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>
                            <span className="hidden sm:block text-[11px] text-slate-500 truncate mt-1 pl-7">
                              {item.sub}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 1: Contractor & Contact Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-sm font-bold text-[#014088]">
                          Step 1 of 3 &bull; Contractor &amp; Estimator Information
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Tell us who to send the certified precast pricing and stamped submittal calculations to.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Full Name <span className="text-[#0E96E1]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Michael Callahan"
                            className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                          />
                          {errors.name && <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Company / Contractor <span className="text-[#0E96E1]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Suffolk Civil Contractors LLC"
                            className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                          />
                          {errors.company && <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.company}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Work Email <span className="text-[#0E96E1]">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. mcallahan@suffolkcivil.com"
                            className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                          />
                          {errors.email && <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. (631) 589-4200"
                            className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextFromStep1}
                          className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#014088] hover:bg-[#0C82C4] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                        >
                          <span>Next: Select Precast Category</span>
                          <ArrowRight className="w-4 h-4 text-[#7DD3FC]" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Precast System & CAD Drawing */}
                  {currentStep === 2 && (
                    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-sm font-bold text-[#014088]">
                          Step 2 of 3 &bull; Select Precast System &amp; CAD Submittal
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Choose the certified precast infrastructure category and preview official stamped CAD drawings.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-semibold text-slate-700">
                            Precast Product Category
                          </label>
                          <span className="text-xs font-semibold text-[#0E96E1]">
                            {selectedCategoryDrawing.pages}
                          </span>
                        </div>

                        <select
                          value={formData.categoryKey}
                          onChange={(e) => setFormData({ ...formData, categoryKey: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm font-semibold text-[#014088] focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs cursor-pointer"
                        >
                          {Object.entries(CATEGORY_DRAWINGS).map(([key, cat]) => (
                            <option key={key} value={key}>
                              {cat.label} ({cat.pages})
                            </option>
                          ))}
                        </select>

                        {/* Dynamic Category Drawing Download Bar */}
                        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-[#DCE5F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5 text-[#0E96E1]" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#014088]">
                                {selectedCategoryDrawing.label}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Official CAD Drawing &bull; {selectedCategoryDrawing.pages} &bull; {selectedCategoryDrawing.size}
                              </div>
                            </div>
                          </div>

                          <a
                            href={selectedCategoryDrawing.pdf}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-semibold shadow-xs transition-colors shrink-0 self-start sm:self-auto"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download CAD Drawing</span>
                          </a>
                        </div>
                      </div>

                      {/* Project Timeline Selector */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Estimated Delivery / Bid Schedule
                        </label>
                        <select
                          value={formData.deliveryTimeline}
                          onChange={(e) => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs cursor-pointer"
                        >
                          <option value="Urgent: Bid Closes This Week">Urgent: Bid Closes This Week (Priority Takeoff)</option>
                          <option value="Next 1–2 Weeks (Active Site)">Next 1–2 Weeks (Active Site Construction)</option>
                          <option value="Next 3–6 Weeks (Upcoming Phase)">Next 3–6 Weeks (Upcoming Phase)</option>
                          <option value="Future Project (Budgetary Pricing)">Future Project (Budgetary / Planning)</option>
                        </select>
                      </div>

                      <div className="pt-2 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#014088] text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back to Contact</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNextFromStep2}
                          className="px-7 py-3 rounded-xl bg-[#014088] hover:bg-[#0C82C4] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                        >
                          <span>Next: Project Specs &amp; Upload</span>
                          <ArrowRight className="w-4 h-4 text-[#7DD3FC]" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Requirements & File Upload */}
                  {currentStep === 3 && (
                    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-sm font-bold text-[#014088]">
                          Step 3 of 3 &bull; Project Specs, Drawing Upload &amp; Review
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Specify dimensions, knockout positions, or attach your project CAD drawing file.
                        </p>
                      </div>

                      {/* Brief Recap Chip */}
                      <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#BFDBFE] flex items-center justify-between text-xs text-[#014088]">
                        <span className="truncate">
                          <strong>Contractor:</strong> {formData.name || "Contractor"} ({formData.company || "Company"}) &bull; {selectedCategoryDrawing.label}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-[11px] text-[#0E96E1] hover:underline font-bold shrink-0 ml-2"
                        >
                          Edit
                        </button>
                      </div>

                      {/* Requirements */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Project Requirements, Quantities &amp; Job Location <span className="text-[#0E96E1]">*</span>
                        </label>
                        <textarea
                          rows={3}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          placeholder="e.g. Route 110 Drainage Upgrade (Phase 2), Melville, NY — Need (16) Model AR 3048 Catch Basins, (8) 1,500 Gal Monolithic Septic Tanks, and AASHTO HS20-44 traffic slabs meeting Suffolk County DPW standards. Crane offload required at job site week of Nov 12..."
                          className="w-full px-4 py-2.5 bg-white border border-[#DCE5F0] rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all resize-none shadow-2xs leading-relaxed"
                        />
                        {errors.requirements && <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.requirements}</p>}
                      </div>

                      {/* Interactive Drawing Attachment Dropzone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Attach Project Drawing (CAD .DWG, .DXF, .PDF, .ZIP)
                        </label>

                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-3.5 sm:p-4 text-center cursor-pointer transition-all ${
                            isDragging
                              ? "border-[#0E96E1] bg-[#E0F2FE]/50"
                              : attachedFile
                              ? "border-emerald-500 bg-emerald-50/50"
                              : "border-[#CBD5E1] bg-white hover:border-[#014088] hover:bg-slate-50"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".dwg,.dxf,.pdf,.zip,.png,.jpg,.jpeg"
                            onChange={handleFileChange}
                            className="hidden"
                          />

                          {attachedFile ? (
                            <div className="flex items-center justify-between gap-3 text-left">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                  <Paperclip className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-slate-900 truncate">
                                    {attachedFile.name}
                                  </p>
                                  <p className="text-[11px] text-slate-500">
                                    {(attachedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Drawing Ready to Submit
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setAttachedFile(null);
                                }}
                                className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                                aria-label="Remove attached file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <FileUp className="w-5 h-5 text-[#0E96E1] shrink-0" />
                              <div className="text-left">
                                <p className="text-xs font-semibold text-[#014088]">
                                  Click to browse or drag &amp; drop project drawings here
                                </p>
                                <p className="text-[11px] text-slate-500">
                                  Accepts DWG, DXF, PDF, ZIP up to 25 MB
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Error Alert if Submission Fails */}
                      {submitError && (
                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <p className="font-semibold">{submitError}</p>
                            <p className="text-[11px] text-rose-600">
                              Alternatively, call our plant dispatch at <strong>(631) 667-3300</strong> or email <strong>sales@astromasonry.com</strong>.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Submit / Back Action Row */}
                      <div className="pt-2 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#014088] text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back to Products</span>
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-7 py-3.5 rounded-xl bg-[#014088] hover:bg-[#0C82C4] text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 text-[#7DD3FC] animate-spin" />
                              <span>Dispatching Details...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-[#7DD3FC]" />
                              <span>Submit Quote &amp; Drawings</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Engineering Center (Fills entire height evenly) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* 1. Official Drawing Domain Download Card */}
            <div className="bg-[#014088] text-white rounded-2xl p-5 sm:p-6 border border-[#1662B0] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7DD3FC] tracking-wider uppercase">
                <FileText className="w-4 h-4 text-[#7DD3FC]" />
                <span>Official Engineering Library</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Astro 2026 CAD Drawings Catalog
                </h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed font-normal">
                  Direct access to licensed precast CAD submittal sheets, dimensional cuts, and reinforcement specs.
                </p>
              </div>

              {/* Master 146-Page PDF Download Button */}
              <div>
                <a
                  href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                  download="Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#0E96E1] hover:bg-[#0C82C4] text-white font-semibold text-xs tracking-wide shadow-xs transition-all flex items-center justify-between group active:scale-98"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Master Catalog (146-Page PDF)</span>
                  </span>
                  <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded font-medium">
                    88.6 MB
                  </span>
                </a>
              </div>

              {/* Drawing Domain Link */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-slate-300">Catalog Mirror:</span>
                <a
                  href="https://www.astromasonry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#7DD3FC] font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>www.astromasonry.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7DD3FC]" />
                </a>
              </div>
            </div>

            {/* 2. Direct Channels Card */}
            <div className="bg-white border border-[#DCE5F0] rounded-2xl p-5 sm:p-6 space-y-3.5 shadow-2xs">
              <h4 className="text-sm font-bold text-[#014088] tracking-tight">
                Direct Engineering &amp; Sales Channels
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-500 text-[11px]">
                      Email Drawings &amp; Specs
                    </div>
                    <a
                      href="mailto:sales@astromasonry.com"
                      className="text-sm font-semibold text-[#014088] hover:text-[#0E96E1] transition-colors"
                    >
                      sales@astromasonry.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-500 text-[11px]">
                      Direct Plant Desk
                    </div>
                    <a
                      href="tel:6316673300"
                      className="text-sm font-bold text-[#014088] hover:text-[#0E96E1] transition-colors"
                    >
                      (631) 667-3300
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-500 text-[11px]">
                      Operating Hours
                    </div>
                    <div className="text-slate-800 font-medium">{COMPANY.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-500 text-[11px]">
                      Plant &amp; Casting Yard
                    </div>
                    <div className="text-slate-800 font-medium">928 Long Island Avenue, Deer Park, NY 11729</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Contractor SLA & Estimating Guarantees (Balances the entire height) */}
            <div className="bg-[#F8FAFD] border border-[#DCE5F0] rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="text-xs font-bold text-[#014088] uppercase tracking-wider">
                Contractor Service Commitments
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Fast-Track Estimating:</strong> Comprehensive unit pricing, piece counts, and lead-time commitments.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">PE-Stamped Submittals:</strong> Sealed structural calculations, buoyancy checks, and submittal CAD sheets.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-[#0E96E1] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Jobsite Boom Logistics:</strong> Coordinated flatbed delivery and boom offload synced with your excavation crew.
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Quality Accreditation & Live Status Strip */}
            <div className="bg-[#EBF7FF] border border-[#BAE6FD] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#014088]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0E96E1] shrink-0" />
                <div>
                  <span className="font-bold text-[#014088] block text-xs">5,000+ PSI Certified</span>
                  <span className="text-slate-600 text-[11px]">WWF ASTM A1064 &bull; Suffolk &amp; Nassau DPW Compliant</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-[#0E96E1] bg-white px-2.5 py-1 rounded-md border border-[#BAE6FD]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Plant Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
