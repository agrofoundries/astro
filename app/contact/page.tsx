"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "", department: "General Inquiries" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Contact PRECASTPRO
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Reach out to our engineering, estimating, plant operations, or dispatch teams directly.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Plant & Corporate Headquarters</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visitors, freight carriers, and client inspection teams are welcome during standard plant hours. Please check in with security at Gate 1.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">Physical Address</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {COMPANY.address.street}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                <Phone className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">Estimating & Office Phone</div>
                  <a href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`} className="text-xs text-gray-600 hover:text-brand-primary block mt-1">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">Electronic Mail</div>
                  <a href={`mailto:${COMPANY.email}`} className="text-xs text-gray-600 hover:text-brand-primary block mt-1">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-gray-900">Operating Hours</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Plant Production: 5:00 AM – 6:00 PM (Mon–Fri)<br />
                    Engineering Office: 7:30 AM – 5:00 PM (Mon–Fri)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFF5F5] border border-red-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Looking for a Project Proposal?</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                For drawing reviews, material takeoffs, and formal bidding, please utilize our dedicated estimating portal.
              </p>
              <Link href="/quote" className="btn-primary text-xs w-full justify-center">
                Go to Quote Estimating Portal
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#FAFAFB] p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            {formSent ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Delivered</h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. A representative from our {data.department} will follow up with you shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="btn-secondary text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
                <p className="text-xs text-gray-600 mb-8">
                  Direct your question to the relevant team member below and we will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">
                      Department
                    </label>
                    <select
                      value={data.department}
                      onChange={(e) => setData({ ...data, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:border-brand-primary outline-none"
                    >
                      <option>General Inquiries</option>
                      <option>Estimating & Bid Submissions</option>
                      <option>Engineering & Submittals</option>
                      <option>Dispatch & Logistics</option>
                      <option>Quality Assurance & Testing</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        placeholder="sjenkins@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Your Message</label>
                    <textarea
                      rows={5}
                      required
                      value={data.message}
                      onChange={(e) => setData({ ...data, message: e.target.value })}
                      placeholder="How can our precast team assist you today?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:border-brand-primary outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3 text-sm"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
