"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface LocationItem {
  id: string;
  region: string;
  country: string;
  role: "Headquarters" | "Regional Office" | "Engineering Centre" | "Support Hub";
  address: string;
  phone: string;
  email: string;
  timezone: string;
  image: string;
  mapQuery: string;
  capabilities: string[];
}

const LOCATIONS: LocationItem[] = [
  {
    id: "northeast",
    region: "Northeast",
    country: "United States",
    role: "Headquarters",
    address: "105 Maxess Road, Melville, NY 11747",
    phone: COMPANY.phone,
    email: COMPANY.email,
    timezone: "ET · UTC−5",
    image: "/images/commercial-building.jpg",
    mapQuery: "105 Maxess Road, Melville, NY 11747",
    capabilities: [
      "Engineering Design",
      "Shop Drawings",
      "Standards & Approvals",
      "Quote Desk",
      "Project Management",
      "Plant Workshops",
    ],
  },
  {
    id: "south",
    region: "South",
    country: "United States",
    role: "Regional Office",
    address: "3340 Peachtree Road NE, Atlanta, GA 30326",
    phone: COMPANY.phone,
    email: "south@precastengineers.com",
    timezone: "ET · UTC−5",
    image: "/images/infrastructure.jpg",
    mapQuery: "3340 Peachtree Road NE, Atlanta, GA 30326",
    capabilities: [
      "DOT Submittals",
      "Civil Drainage",
      "PE Calculations",
      "Takeoff Desk",
      "On-Site Audits",
    ],
  },
  {
    id: "midwest",
    region: "Midwest",
    country: "United States",
    role: "Engineering Centre",
    address: "111 S Wacker Drive, Chicago, IL 60606",
    phone: COMPANY.phone,
    email: "midwest@precastengineers.com",
    timezone: "CT · UTC−6",
    image: "/images/engineering-team.jpg",
    mapQuery: "111 S Wacker Drive, Chicago, IL 60606",
    capabilities: [
      "Tekla 3D BIM",
      "Structural Detailing",
      "Rebar Schedules",
      "Connection Modeling",
      "QC Support",
    ],
  },
  {
    id: "westcoast",
    region: "Westcoast",
    country: "Canada",
    role: "Engineering Centre",
    address: "1055 W Georgia St, Vancouver, BC V6E 3P3",
    phone: COMPANY.phone,
    email: "westcoast@precastengineers.com",
    timezone: "PT · UTC−8",
    image: "/images/hero-bridge.jpg",
    mapQuery: "1055 W Georgia St, Vancouver, BC V6E 3P3",
    capabilities: [
      "Seismic Analysis",
      "Precast Bridges",
      "BIM Coordination",
      "Culvert Engineering",
    ],
  },
  {
    id: "canada-east",
    region: "Canada — East",
    country: "Canada",
    role: "Regional Office",
    address: "100 King St W, Toronto, ON M5X 1A9",
    phone: COMPANY.phone,
    email: "canada.east@precastengineers.com",
    timezone: "ET · UTC−5",
    image: "/images/commercial-building.jpg",
    mapQuery: "100 King St W, Toronto, ON M5X 1A9",
    capabilities: [
      "Precast Infiltration",
      "Municipal Drainage",
      "Structural Review",
      "Estimation",
    ],
  },
  {
    id: "canada-west",
    region: "Canada — West",
    country: "Canada",
    role: "Regional Office",
    address: "400 3 Ave SW, Calgary, AB T2P 4H2",
    phone: COMPANY.phone,
    email: "canada.west@precastengineers.com",
    timezone: "MT · UTC−7",
    image: "/images/infrastructure.jpg",
    mapQuery: "400 3 Ave SW, Calgary, AB T2P 4H2",
    capabilities: [
      "Cold Climate Detailing",
      "Precast Foundations",
      "Heavy Haul Rigging",
      "Piece Tickets",
    ],
  },
  {
    id: "caribbean",
    region: "Caribbean / Latin America",
    country: "Bahamas",
    role: "Support Hub",
    address: "Bay Street Financial Centre, Nassau, Bahamas",
    phone: COMPANY.phone,
    email: "caribbean@precastengineers.com",
    timezone: "ET · UTC−5",
    image: "/images/engineering-team.jpg",
    mapQuery: "Bay Street, Nassau, Bahamas",
    capabilities: [
      "Coastal Infrastructure",
      "Marine Precast",
      "Stormwater Drainage",
      "Technical Support",
    ],
  },
  {
    id: "brazil",
    region: "Belo Horizonte",
    country: "Brazil",
    role: "Regional Office",
    address: "Av. Afonso Pena, Belo Horizonte, MG, Brazil",
    phone: COMPANY.phone,
    email: "brazil@precastengineers.com",
    timezone: "BRT · UTC−3",
    image: "/images/quality-inspection.jpg",
    mapQuery: "Av. Afonso Pena, Belo Horizonte, Brazil",
    capabilities: [
      "Tekla LOD 400 Detailing",
      "Rebar Fabrication Drawings",
      "Engineering Support",
      "CAD Modeling",
    ],
  },
];

export function LocationsSection() {
  const [activeId, setActiveId] = useState<string>("northeast");

  const activeLoc = LOCATIONS.find((loc) => loc.id === activeId) || LOCATIONS[0];

  return (
    <section
      id="locations"
      className="relative isolate bg-[#06182E] bg-gradient-to-b from-[#06182E] via-[#0B2545] to-[#041224] text-white py-20 md:py-28 border-b border-[#01255F]"
    >
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#D7030F]" aria-hidden="true" />
            <p className="text-xs font-black uppercase tracking-widest text-[#D7030F]">
              Global Presence
            </p>
            <span className="h-0.5 w-10 bg-[#D7030F]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Eight Offices, <span className="text-[#D7030F]">One Delivery Standard</span>
          </h2>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Engineering centres and regional offices across the United States, Canada, and the Caribbean, with support coverage spanning every working hour.
          </p>
        </div>

        {/* Interactive Locations Two-Column Grid */}
        <div className="mt-12 md:mt-16 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 items-start">
          {/* Left Column: Office Selector List */}
          <ul className="flex flex-col gap-2.5">
            {LOCATIONS.map((loc) => {
              const isSelected = loc.id === activeId;

              return (
                <li key={loc.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(loc.id)}
                    aria-pressed={isSelected}
                    className={`relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-[#D7030F] bg-[#01255F] shadow-lg shadow-red-950/30"
                        : "border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.08]"
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    {isSelected && (
                      <span
                        className="absolute inset-y-3 left-0 w-1.5 rounded-r-full bg-[#D7030F]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Location Pin Icon */}
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isSelected
                          ? "bg-[#D7030F] text-white shadow-md shadow-red-600/30"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      <MapPin className="h-5 w-5" />
                    </span>

                    {/* Text Details */}
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[15px] font-bold tracking-tight text-white">
                          {loc.region}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          {loc.country}
                        </span>
                      </span>

                      <span
                        className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                          isSelected
                            ? "bg-[#D7030F] text-white"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {loc.role}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Column: Active Office Detail Card */}
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#031326] p-7 md:p-9 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,20rem)] lg:items-start">
              {/* Office Contact Info */}
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#D7030F]">
                  {activeLoc.role}
                </p>

                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {activeLoc.region}
                  <span className="ml-2.5 text-base font-medium text-slate-300">
                    {activeLoc.country}
                  </span>
                </h3>

                <ul className="mt-6 flex flex-col gap-4">
                  {/* Address */}
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7030F] text-white shadow-xs">
                      <Building2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-200 font-medium">
                      {activeLoc.address}
                    </span>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7030F] text-white shadow-xs">
                      <Phone className="h-4 w-4" />
                    </span>
                    <a
                      href={`tel:${activeLoc.phone.replace(/[^0-9]/g, "")}`}
                      className="text-sm font-bold text-white hover:text-[#D7030F] transition-colors"
                    >
                      {activeLoc.phone}
                    </a>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7030F] text-white shadow-xs">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a
                      href={`mailto:${activeLoc.email}`}
                      className="text-sm font-semibold text-white hover:text-[#D7030F] transition-colors break-all"
                    >
                      {activeLoc.email}
                    </a>
                  </li>

                  {/* Timezone */}
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D7030F] text-white shadow-xs">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-mono text-slate-300">
                      {activeLoc.timezone}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Photo & Interactive Google Map Preview */}
              <div className="flex flex-col gap-4">
                {/* Office Photo Card */}
                <figure className="group/photo relative m-0 aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-md">
                  <Image
                    src={activeLoc.image}
                    alt={`${activeLoc.region} office at ${activeLoc.address}`}
                    fill
                    sizes="(min-width: 1024px) 20rem, 100vw"
                    className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-[#06182E]/90 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 text-xs font-semibold text-white">
                    <Building2 className="h-3.5 w-3.5 text-[#D7030F]" />
                    <span>{activeLoc.region} Office</span>
                  </figcaption>
                </figure>

                {/* Google Map Embedded Frame */}
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        activeLoc.mapQuery
                      )}&z=14&output=embed`}
                      title={`Map showing ${activeLoc.region} office`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                </div>

                {/* Open Google Map External Link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeLoc.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/gmap inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white transition-colors hover:text-[#D7030F]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/gmap:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Capabilities on site pills */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Capabilities On Site
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {activeLoc.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-slate-200 font-medium hover:border-[#D7030F] hover:text-white transition-colors"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Metrics Bar */}
            <dl className="mt-7 grid grid-cols-3 gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
              <div>
                <dt className="text-xl sm:text-2xl font-black text-white">24/7</dt>
                <dd className="mt-0.5 text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  Support Window
                </dd>
              </div>
              <div className="border-x border-white/10">
                <dt className="text-xl sm:text-2xl font-black text-[#D7030F]">&lt; 2 hr</dt>
                <dd className="mt-0.5 text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  First Response
                </dd>
              </div>
              <div>
                <dt className="text-xl sm:text-2xl font-black text-white">50 States</dt>
                <dd className="mt-0.5 text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  PE Coverage
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
