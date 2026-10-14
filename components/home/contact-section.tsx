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
  Sparkles,
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
  requirements: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    categoryKey: "catch-basins",
    requirements: "",
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const selectedCategoryDrawing = CATEGORY_DRAWINGS[formData.categoryKey] || CATEGORY_DRAWINGS["catch-basins"];

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!formData.company.trim()) {
      errs.company = "Company name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address.";
    }

    if (!formData.requirements.trim()) {
      errs.requirements = "Please describe your project requirements or piece quantities.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      categoryKey: "catch-basins",
      requirements: "",
    });
    setAttachedFile(null);
    setErrors({});
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
    <section id="contact" className="w-full bg-white border-b border-[#DCE5F0] py-16 sm:py-24">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0E96E1] mb-2 font-mono">
            <span className="w-3 h-0.5 bg-[#0E96E1]" />
            <span>DIRECT PLANT &amp; ENGINEERING DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] uppercase tracking-tight">
            Contact Astro <span className="text-[#0E96E1]">Precast Engineers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-2 leading-relaxed font-medium">
            Send us your project drawings, piece schedules, or RFQ details. We provide certified 5,000+ PSI precast submittals, PE-stamped calculations, and fast delivery quotes from our Deer Park, NY production plant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: Interactive Contact & RFQ Form with Drawing Attachment */}
          <div className="lg:col-span-7 bg-[#F4F8FD] border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#E0F2FE] border-2 border-[#BAE6FD] text-[#0E96E1] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#0E96E1]" />
                </div>
                <h3 className="text-2xl font-black text-[#014088] uppercase">
                  Quote Request &amp; Drawings Received
                </h3>
                <p className="text-sm text-slate-800 max-w-md mx-auto font-medium">
                  Thank you, <strong className="text-[#014088]">{formData.name}</strong> from{" "}
                  <strong className="text-[#014088]">{formData.company}</strong>. Our precast technical desk has received your request
                  {attachedFile ? (
                    <> with attached drawing file <strong className="font-mono text-[#014088]">({attachedFile.name})</strong></>
                  ) : null}
                  . An Astro engineer will follow up with pricing, lead times, and submittal sheets.
                </p>

                <div className="pt-2">
                  <a
                    href={selectedCategoryDrawing.pdf}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#014088] text-white text-xs font-black uppercase tracking-wider hover:bg-[#0C82C4] transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4 text-[#0E96E1]" />
                    <span>Download {selectedCategoryDrawing.label} CAD Drawing</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg border-2 border-[#014088] text-[#014088] bg-white text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Submit Another Quote Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* 1. Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                      Full Name <span className="text-[#0E96E1]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                    />
                    {errors.name && <p className="text-[11px] text-[#0E96E1] font-bold mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                      Company / General Contractor <span className="text-[#0E96E1]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Northeast Civil Contractors"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                    />
                    {errors.company && <p className="text-[11px] text-[#0E96E1] font-bold mt-1">{errors.company}</p>}
                  </div>
                </div>

                {/* 2. Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                      Work Email <span className="text-[#0E96E1]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jmiller@contractor.com"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                    />
                    {errors.email && <p className="text-[11px] text-[#0E96E1] font-bold mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (631) 667-3300"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* 3. Product Category Selector with Dynamic CAD Drawing Download */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider font-mono">
                      Select Product Category For Drawing &amp; Quote
                    </label>
                    <span className="text-[11px] font-mono font-bold text-[#0E96E1]">
                      {selectedCategoryDrawing.pages}
                    </span>
                  </div>

                  <select
                    value={formData.categoryKey}
                    onChange={(e) => setFormData({ ...formData, categoryKey: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm font-bold text-[#014088] focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all shadow-2xs cursor-pointer"
                  >
                    {Object.entries(CATEGORY_DRAWINGS).map(([key, cat]) => (
                      <option key={key} value={key}>
                        {cat.label} ({cat.pages})
                      </option>
                    ))}
                  </select>

                  {/* Dynamic Category Drawing Download Bar */}
                  <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#DCE5F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-[#0E96E1]" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#014088]">
                          {selectedCategoryDrawing.label}
                        </div>
                        <div className="text-[10.5px] text-slate-600 font-mono">
                          Official CAD Drawing · {selectedCategoryDrawing.pages} · {selectedCategoryDrawing.size}
                        </div>
                      </div>
                    </div>

                    <a
                      href={selectedCategoryDrawing.pdf}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors shrink-0 self-start sm:self-auto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Drawing</span>
                    </a>
                  </div>
                </div>

                {/* 4. Requirements & Specs */}
                <div>
                  <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                    Project Requirements, Quantities &amp; Job Location <span className="text-[#0E96E1]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Provide details about required piece quantities, standard numbers (e.g. Suffolk & Nassau County DPW, NY State DOT), traffic loading (HS-20 / HS-25), job site delivery location, or timeline..."
                    className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-slate-800 font-medium focus:outline-none focus:border-[#014088] focus:ring-1 focus:ring-[#014088] transition-all resize-none shadow-2xs"
                  />
                  {errors.requirements && <p className="text-[11px] text-[#0E96E1] font-bold mt-1">{errors.requirements}</p>}
                </div>

                {/* 5. Interactive Drawing Attachment Dropzone (User can attach project drawings) */}
                <div>
                  <label className="block text-xs font-bold text-[#014088] uppercase tracking-wider mb-1.5 font-mono">
                    Attach Your Project Drawing (CAD .DWG, .DXF, .PDF, .ZIP)
                  </label>

                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all ${
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
                            <p className="text-[11px] text-slate-500 font-mono">
                              {(attachedFile.size / (1024 * 1024)).toFixed(2)} MB · Drawing Ready to Submit
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
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <FileUp className="w-6 h-6 text-[#0E96E1]" />
                        <p className="text-xs font-bold text-[#014088]">
                          Click to browse or drag &amp; drop project drawings here
                        </p>
                        <p className="text-[11px] text-slate-500 font-mono">
                          Accepts DWG, DXF, PDF, ZIP up to 25 MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#0E96E1] hover:bg-[#0C82C4] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending Project Details..." : "Submit Quote & Drawings"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Drawing Domain Download Center */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Official Drawing Domain Download Card */}
            <div className="bg-[#014088] text-white rounded-2xl p-6 sm:p-7 border-2 border-[#1662B0] shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E96E1] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#0E96E1]" />
                <span>OFFICIAL DRAWING DOMAIN</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  Astro 2026 CAD Drawings Library
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed font-medium">
                  Direct access to Astro Masonry &amp; Precast licensed CAD engineering submittal sheets. Connected directly to the official catalog and drawing domain.
                </p>
              </div>

              {/* Master 146-Page PDF Download Button */}
              <div className="pt-2">
                <a
                  href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                  download="Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0E96E1] hover:bg-[#0C82C4] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-between group active:scale-98"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Master Catalog (146-Page PDF)</span>
                  </span>
                  <span className="font-mono text-[11px] bg-white/20 px-2 py-0.5 rounded">
                    88.6 MB
                  </span>
                </a>
              </div>

              {/* Drawing Domain Link */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono text-[11px]">Domain Mirror:</span>
                <a
                  href="https://www.astromasonry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0E96E1] font-mono font-bold flex items-center gap-1 transition-colors"
                >
                  <span>www.astromasonry.com</span>
                  <ExternalLink className="w-3 h-3 text-[#0E96E1]" />
                </a>
              </div>
            </div>

            {/* 2. Direct Channels Card */}
            <div className="bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h4 className="text-sm font-black text-[#014088] uppercase tracking-wide">
                Direct Engineering &amp; Sales Channels
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#014088] uppercase text-[10px] font-mono">
                      Email Drawings &amp; Specs
                    </div>
                    <a
                      href="mailto:sales@astromasonry.com"
                      className="text-sm font-bold text-[#014088] hover:text-[#0E96E1] font-mono transition-colors"
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
                    <div className="font-bold text-[#014088] uppercase text-[10px] font-mono">
                      Direct Plant Desk
                    </div>
                    <a
                      href="tel:6316673300"
                      className="text-sm font-bold text-[#014088] hover:text-[#0E96E1] font-mono transition-colors"
                    >
                      631-667 3300
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#014088] uppercase text-[10px] font-mono">
                      Operating Hours
                    </div>
                    <div className="text-slate-800 font-semibold">{COMPANY.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#014088]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#014088] uppercase text-[10px] font-mono">
                      Plant &amp; Casting Yard
                    </div>
                    <div className="text-slate-800 font-semibold">928 Long Island Avenue, Deer Park, NY 11729</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. PE Guarantee Badge */}
            <div className="bg-[#EBF7FF] border border-[#BAE6FD] rounded-xl p-4 flex items-center gap-3 text-xs text-[#014088]">
              <ShieldCheck className="w-6 h-6 text-[#0E96E1] shrink-0" />
              <div>
                <span className="font-black uppercase tracking-wider block">5,000+ PSI Certified</span>
                <span className="text-slate-700 text-[11.5px] font-medium">
                  All pieces manufactured with WWF ASTM A1064 reinforcement per Suffolk &amp; Nassau County DOT specifications.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
