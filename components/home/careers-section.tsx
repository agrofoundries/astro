import Link from "next/link";
import { ArrowRight, MapPin, Mail } from "lucide-react";

interface CareerRole {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const CAREER_ROLES: CareerRole[] = [
  {
    title: "Structural Engineer (PE / SE)",
    department: "Engineering Department",
    location: "United States (Remote / Hybrid)",
    type: "Full-Time",
    description: "Perform structural calculations, connection engineering, and PE sealing for precast and prestressed concrete projects.",
  },
  {
    title: "Precast 3D Modeler (Tekla Structures)",
    department: "Detailing Department",
    location: "United States (Remote / Hybrid)",
    type: "Full-Time",
    description: "Build LOD 400 models, generate piece tickets, and coordinate erection sequence drawings for precasters.",
  },
  {
    title: "CAD & Rebar Detailer",
    department: "Production Detailing",
    location: "United States (Remote / Hybrid)",
    type: "Full-Time",
    description: "Prepare 2D shop drawings, bar bending schedules, and embed layout drawings for plant production beds.",
  },
  {
    title: "Quality Control & Production Engineer",
    department: "Plant Technical Support",
    location: "United States (Hybrid / Travel)",
    type: "Full-Time",
    description: "Assist manufacturing plants with mix design optimization, prestressing operations, and QA documentation.",
  },
];

export function CareersSection() {
  return (
    <section id="careers" className="bg-[#F2F7FF] border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-tag mb-3">Professional Opportunities</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#014088] tracking-tight">
            Careers at Precast Engineers
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            We work with licensed structural engineers, Tekla structural detailers, and precast manufacturing specialists dedicated to technical excellence.
          </p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CAREER_ROLES.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col justify-between hover:border-[#014088] transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#014088] bg-[#E8F3FF] px-2.5 py-0.5 rounded border border-[#DCE5F0]">
                    {role.department}
                  </span>
                  <span className="text-[11px] font-semibold text-[#0E96E1]">
                    {role.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#014088] mb-1.5">
                  {role.title}
                </h3>

                <p className="text-xs text-[#64748B] flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#0E96E1]" />
                  <span>{role.location}</span>
                </p>

                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {role.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F7FF] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Precast Engineering Team</span>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#014088] hover:text-[#0E96E1] transition-colors"
                >
                  <span>Apply / Send Resume</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="bg-white border border-[#DCE5F0] rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#014088]">
              Inquire About Future Opportunities
            </h4>
            <p className="text-xs text-[#475569]">
              Don&apos;t see an exact match? We are always interested in connecting with experienced precast engineers, drafters, and detailers.
            </p>
          </div>
          <Link
            href="/#contact"
            className="btn-navy text-xs px-5 py-2.5 rounded shrink-0 inline-flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Regarding Careers</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
