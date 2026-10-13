"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Heart,
  ShieldCheck,
  Truck,
  Anchor,
  Clock,
  Droplet,
  Box,
  FileText,
} from "lucide-react";

// ─── DATA INTERFACES ──────────────────────────────────────────────────────────

export interface VariableSpec {
  label: string;
  value: string;
  sub?: string;
}

export interface ProductVariable {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  categoryLabel: string;
  description: string;
  features: [string, string, string, string];
  specCapacity: VariableSpec;
  specDimensions: VariableSpec;
  specStandards: VariableSpec;
  image: string;
  href: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  category: "drainage" | "heavy" | "tanks";
  categoryBadge: string;
  categoryLabel: string;
  summary: string;
  description: string;
  variables: ProductVariable[];
}

// ─── PRODUCT FAMILIES DATA ───────────────────────────────────────────────────

export const PRODUCT_FAMILIES: ProductFamily[] = [
  // ── 1. MONOLITHIC SEPTIC TANKS ─────────────────────────────────────────────
  {
    id: "septic-tanks",
    name: "Monolithic Precast Septic Tanks",
    category: "tanks",
    categoryBadge: "WATERTIGHT PRECAST",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    summary: "3 Variables · 1000G, 1500G & 2000G Commercial Capacities",
    description:
      "Watertight single-pour precast septic tanks with integrated PVC baffles and reinforced traffic lids built for commercial and municipal wastewater projects.",
    variables: [
      {
        id: "tank-septic-2000-var",
        name: "2000G Commercial Precast Septic Tank",
        shortName: "2,000G Commercial",
        badge: "WATERTIGHT PRECAST",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Large commercial-grade wastewater tank built with thick walls to withstand heavy vehicle wheel traffic above.",
        features: [
          "Watertight Construction",
          "Vehicle Traffic Rated",
          "High-Strength Concrete",
          "Long Service Life",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "2,000 Gallons",
          sub: "(7,571 Liters)",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "8 ft (Ø) x 8 ft (H)",
          sub: "Standard Round",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C1227",
          sub: "HS-20 Traffic",
        },
        image: "/images/products/septic-tank-2000g.png",
        href: "/#contact",
      },
      {
        id: "tank-septic-1500-var",
        name: "1500G Dual-Chamber Septic Tank",
        shortName: "1,500G Dual Chamber",
        badge: "WATERTIGHT PRECAST",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Engineered two-compartment settling tank providing primary digestion and secondary clarification for high-flow facilities.",
        features: [
          "Dual Settling Rooms",
          "Vehicle Traffic Rated",
          "High-Strength Concrete",
          "Long Service Life",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "1,500 Gallons",
          sub: "(5,678 Liters)",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "10' L x 5.5' W x 5.5' H",
          sub: "Dual Chamber",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C1227",
          sub: "Heavy-Duty Top",
        },
        image: "/images/products/septic-tank-1500g.png",
        href: "/#contact",
      },
      {
        id: "tank-septic-1000-var",
        name: "1000G Monolithic Septic Tank",
        shortName: "1,000G Standard",
        badge: "WATERTIGHT PRECAST",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Seamless monolithic single-pour septic tank with sanitary PVC tees, engineered for commercial and multi-family sewage storage.",
        features: [
          "Seamless Monolith",
          "AASHTO H-20 Rated",
          "High-Strength Concrete",
          "Long Service Life",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "1,000 Gallons",
          sub: "(3,785 Liters)",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "8.5' L x 5.0' W x 5.0' H",
          sub: "Single Chamber",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C1227",
          sub: "Watertight Tested",
        },
        image: "/images/products/septic-tank-1000g.png",
        href: "/#contact",
      },
    ],
  },

  // ── 2. STORM DRAIN INLET BOXES ─────────────────────────────────────────────
  {
    id: "storm-inlets",
    name: "Storm Drain Inlet Boxes (600×900mm)",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    categoryLabel: "ROAD & STORM DRAINAGE",
    summary: "4 Variables · Curb Gutters, 1.2m Depths & Knockout Options",
    description:
      "Municipal precast stormwater inlet basins with cast knockouts and heavy-duty frame configurations engineered for roadway runoff capture.",
    variables: [
      {
        id: "storm-inlet-1-var",
        name: "1.2m Storm Drain Inlet (600×900mm) — Case 1",
        shortName: "1.2m Depth (Case 1)",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Heavy precast concrete box installed beneath street curbs to catch rushing rainwater during storms.",
        features: [
          "Precast Monolith",
          "AASHTO HS-20 Rated",
          "High-Flow Grate Fit",
          "Quick Pipe Tie-In",
        ],
        specCapacity: {
          label: "OPENING",
          value: "600 × 900 mm",
          sub: "Curb Gutter Box",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "1.2m Depth (48\")",
          sub: "Standard Wall",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "DOT Traffic Ready",
        },
        image: "/images/products/storm-drain-inlet-1.webp",
        href: "/#contact",
      },
      {
        id: "storm-inlet-2-var",
        name: "1.2m Storm Drain Inlet (600×900mm) — Case 2",
        shortName: "1.2m Depth (Case 2)",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Deep street drain inlet box with multi-direction pipe knockouts for road intersections and curb gutters.",
        features: [
          "Multi Knockout Walls",
          "Heavy Traffic Top",
          "High-Strength Concrete",
          "Corrosion Resistant",
        ],
        specCapacity: {
          label: "OPENING",
          value: "600 × 900 mm",
          sub: "Corner Intersections",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "1.2m Depth (48\")",
          sub: "Multi-Port Design",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "AASHTO HS-20",
        },
        image: "/images/products/storm-drain-inlet-2.webp",
        href: "/#contact",
      },
      {
        id: "storm-inlet-case1-var",
        name: "600×900mm Opening Storm Drain Inlet Case 1",
        shortName: "600×900mm (Case 1)",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Precast storm inlet basin engineered for high-volume roadway water collection and easy pipe hookup.",
        features: [
          "Engineered Flow",
          "Vehicle Traffic Rated",
          "High-Strength Concrete",
          "Cast-in Knockouts",
        ],
        specCapacity: {
          label: "OPENING",
          value: "600 × 900 mm",
          sub: "Top Opening",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Custom Stackable Risers",
          sub: "DOT Standard",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "DOT Ready",
        },
        image: "/images/products/storm-drain-inlet-case1-logo.webp",
        href: "/#contact",
      },
      {
        id: "storm-inlet-case2-var",
        name: "600×900mm Opening Storm Drain Inlet Case 2",
        shortName: "600×900mm (Case 2)",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Heavy-duty storm drain box with cast-in knockout walls for municipal roadway storm sewer tie-ins.",
        features: [
          "Heavy Wall Shell",
          "Semi-Truck Wheel Rated",
          "High-Strength Concrete",
          "Smooth Gasket Seats",
        ],
        specCapacity: {
          label: "OPENING",
          value: "600 × 900 mm",
          sub: "Reinforced Basin",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Heavy Traffic Profile",
          sub: "Multi-Knockout",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "Traffic Rated",
        },
        image: "/images/products/storm-drain-inlet-case2-logo.webp",
        href: "/#contact",
      },
    ],
  },

  // ── 3. PRECAST ROAD CATCH BASINS ───────────────────────────────────────────
  {
    id: "catch-basins",
    name: "Precast Road Catch Basins",
    category: "drainage",
    categoryBadge: "PRECAST EXCHANGE PRODUCT",
    categoryLabel: "ROAD & STORM DRAINAGE",
    summary: "6 Variables · Curb Inlets, Sumps & Monolithic Basins",
    description:
      "Full spectrum of highway and municipal catch basins including deep sediment sumps, curb inlets, and standard DOT road models.",
    variables: [
      {
        id: "catch-basin-b01b-var",
        name: "B-01B Precast Road Catch Basin",
        shortName: "B-01B Road Standard",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Monolithic roadside catchpit box that catches street runoff and traps gravel before water enters sewers.",
        features: [
          "Sediment Trap Sump",
          "Vehicle Traffic Rated",
          "High-Strength Concrete",
          "Preformed Knockouts",
        ],
        specCapacity: {
          label: "SIZES",
          value: "24\"×24\" to 36\"×36\"",
          sub: "DOT Standard",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "3' x 3' x 4' Depth",
          sub: "Square Footprint",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "DOT Approved",
        },
        image: "/images/products/b-01b.webp",
        href: "/#contact",
      },
      {
        id: "catch-basin-b01d-var",
        name: "B-01D Heavy Curb Catch Basin",
        shortName: "B-01D Curb Inlet",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Reinforced catch basin built to sit directly beneath street curbs and support heavy semi-truck wheel loads.",
        features: [
          "Sub-Curb Placement",
          "AASHTO HS-20 Traffic",
          "Reinforced Walls",
          "Long Service Life",
        ],
        specCapacity: {
          label: "INLET PROFILE",
          value: "Heavy Curb Throat",
          sub: "Curbside Runoff",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "3' x 3' x 5' Depth",
          sub: "12 DOT Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "AASHTO HS-20",
          sub: "Traffic Rated",
        },
        image: "/images/products/b-01d.webp",
        href: "/#contact",
      },
      {
        id: "catch-basin-b01e-var",
        name: "B-01E Deep Sump Catch Basin",
        shortName: "B-01E Deep Sump",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Catch basin with an extra deep bottom reservoir that traps sand, leaves, and street grime cleanly.",
        features: [
          "Extra Deep Reservoir",
          "Vehicle Traffic Rated",
          "Debris Separation",
          "Easy Vacuum Cleanout",
        ],
        specCapacity: {
          label: "SUMP DEPTH",
          value: "Extended 36\" Sump",
          sub: "Sediment Trap",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "3' x 3' x 7' Overall",
          sub: "Deep Chamber",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "Municipal Standard",
        },
        image: "/images/products/b-01e.webp",
        href: "/#contact",
      },
      {
        id: "catch-basin-side-inlet-var",
        name: "Catch Basin with Side Inlet Frame & Cover",
        shortName: "Side Inlet Monolith",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "All-in-one precast basin with heavy cast-iron side curb frame that swallows water rushing along street gutters.",
        features: [
          "Cast-Iron Frame Seat",
          "AASHTO HS-20 Traffic",
          "Monolithic Box",
          "Immediate Street Tie-In",
        ],
        specCapacity: {
          label: "FRAME FIT",
          value: "Side Curb Inlet",
          sub: "Cast-Iron Seat",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "4' x 4' Monolithic Box",
          sub: "Ready Stock",
        },
        specStandards: {
          label: "STANDARDS",
          value: "DOT Curb Inlet",
          sub: "Traffic Approved",
        },
        image: "/images/products/catch-basin-side-inlet.webp",
        href: "/#contact",
      },
      {
        id: "cb-6-var",
        name: "CB-6 Series Roadway Catch Basin",
        shortName: "CB-6 Series Basin",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Standard road construction catchpit basin for parking lots, business parks, and residential subdivisions.",
        features: [
          "Standard CB-6 Mold",
          "Vehicle Traffic Rated",
          "High-Strength Concrete",
          "Pre-cored Openings",
        ],
        specCapacity: {
          label: "DOT MODEL",
          value: "CB-6 Standard",
          sub: "Parking & Subdivisions",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "2.5' x 2.5' x 4' Depth",
          sub: "12 Base Sizes",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "HS-20 Traffic",
        },
        image: "/images/products/cb-6-catch-basin.webp",
        href: "/#contact",
      },
      {
        id: "catch-basin-2ft-var",
        name: "2 FT Monolithic Square Catch Basin",
        shortName: "2 FT Monolithic Box",
        badge: "PRIMARY SHOWCASE",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Square concrete basin with seamless leak-proof base and pre-cast pipe knockouts for rapid connection.",
        features: [
          "Single-Pour Floor",
          "Vehicle Traffic Rated",
          "Precision Knockouts",
          "Up to 12 ft Depths",
        ],
        specCapacity: {
          label: "SIZES",
          value: "24\"×24\" to 48\"×48\"",
          sub: "Square Footprint",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Depths Up to 12 ft",
          sub: "Stackable Extensions",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "AASHTO HS-20",
        },
        image: "/images/products/catch-basin-2ft.png",
        href: "/#contact",
      },
    ],
  },

  // ── 4. HIGHWAY HEADWALLS & ENDWALLS ────────────────────────────────────────
  {
    id: "headwalls-endwalls",
    name: "Highway Headwalls & Endwalls",
    category: "heavy",
    categoryBadge: "DOT HIGHWAY STANDARD",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    summary: "5 Variables · 12\" to 24\" Culverts, Weirs & Triple Outfalls",
    description:
      "Heavy DOT-approved pipe headwalls, custom engineered weir structures, and multi-culvert retention endwalls preventing soil erosion.",
    variables: [
      {
        id: "headwall-nh-12-var",
        name: "12\" Pipe Precast Concrete Headwalls",
        shortName: "12\" Pipe Headwall",
        badge: "DOT HIGHWAY STANDARD",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Monolithic precast culvert end wall for 12-inch drainage pipes on driveways, streets, and parking lots.",
        features: [
          "Anchors Pipe Securely",
          "Prevents Road Washouts",
          "High-Strength Concrete",
          "Fast Field Set",
        ],
        specCapacity: {
          label: "PIPE FIT",
          value: "12\" Culvert Pipes",
          sub: "Concrete/HDPE/CMP",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "5' W x 3' H x 1.5' D",
          sub: "12 Standard Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "NH DOT Standard",
          sub: "HS-20 Traffic",
        },
        image: "/images/products/headwall-nh-12.png",
        href: "/#contact",
      },
      {
        id: "headwall-nh-24-var",
        name: "24\" Pipe Highway Headwalls",
        shortName: "24\" Pipe Headwall",
        badge: "DOT HIGHWAY STANDARD",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Solid precast end block for 24-inch drainage pipes that stops road shoulder washouts and anchors the pipe.",
        features: [
          "Heavy Road Shoulder Anchor",
          "Flared Wing Guidance",
          "High-Strength Concrete",
          "Erosion Control",
        ],
        specCapacity: {
          label: "PIPE FIT",
          value: "24\" Culvert Pipes",
          sub: "Round & Arch Profiles",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "7' W x 4.5' H x 2' D",
          sub: "10 Standard Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "NH DOT Standard",
          sub: "HS-20 Rated",
        },
        image: "/images/products/headwall-nh-24.png",
        href: "/#contact",
      },
      {
        id: "headwall-custom-var",
        name: "Custom Culvert Headwalls & Weirs",
        shortName: "Custom Weir Structure",
        badge: "ENGINEERED PRECAST",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Custom-cast concrete headwalls with engineered pipe openings and water-measuring weir cutouts.",
        features: [
          "Engineered Flow Notch",
          "Civil Engineering PE Stamp",
          "High-Strength Concrete",
          "Tailored To Site Plans",
        ],
        specCapacity: {
          label: "ENGINEERED NOTCH",
          value: "V-Notch & Rectangular",
          sub: "Retention Control",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Custom To Civil Plans",
          sub: "8 Base Geometries",
        },
        specStandards: {
          label: "STANDARDS",
          value: "NH DOT Approved",
          sub: "PE Stamped Drawings",
        },
        image: "/images/products/headwall-custom.png",
        href: "/#contact",
      },
      {
        id: "endwall-dot-triple-var",
        name: "Triple-Opening Culvert End Walls",
        shortName: "Triple Culvert Endwall",
        badge: "DOT HIGHWAY STANDARD",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Wide precast concrete headwall built to receive three parallel drainage pipes cleanly at major ditch exits.",
        features: [
          "Triple Culvert Intake",
          "Massive Monolith",
          "Heavy Flow Dissipation",
          "Maine DOT Stamped",
        ],
        specCapacity: {
          label: "RECEIVES",
          value: "3 Parallel Culverts",
          sub: "Ditch Outfall Hub",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "14' W x 5' H x 3' Base",
          sub: "6 Standard Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Maine DOT",
          sub: "AASHTO HS-20",
        },
        image: "/images/products/endwall-dot-triple.png",
        href: "/#contact",
      },
      {
        id: "endwall-dot-corner-var",
        name: "Corner L-End Retaining Walls",
        shortName: "Corner L-Wall",
        badge: "DOT HIGHWAY STANDARD",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "90-degree corner concrete walls that support roadside slopes while letting storm drainage pipes pass through.",
        features: [
          "90° Wingwall Return",
          "Earth Retaining Strength",
          "High-Strength Concrete",
          "Culvert Sump Port",
        ],
        specCapacity: {
          label: "GEOMETRY",
          value: "90° L-Configuration",
          sub: "Slope Retention",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "8' x 6' Corner Footprint",
          sub: "8 Models Available",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Maine DOT Standard",
          sub: "Heavy Duty",
        },
        image: "/images/products/endwall-dot-corner.png",
        href: "/#contact",
      },
    ],
  },

  // ── 5. HEAVY BOX CULVERTS & PLANT TOOLING ──────────────────────────────────
  {
    id: "box-culverts",
    name: "Heavy Box Culverts, Bridges & Gang Molds",
    category: "heavy",
    categoryBadge: "HEAVY CIVIL INFRASTRUCTURE",
    categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
    summary: "3 Variables · Stream Crossings, Wing Walls & Multi-Cavity Steel Molds",
    description:
      "Large-scale rectangular bridge culverts, flared wing wall assemblies, and multi-cavity precision steel gang molds for precast manufacturing plants.",
    variables: [
      {
        id: "box-culvert-var",
        name: "Precast Concrete Box Culverts",
        shortName: "Heavy Box Culverts",
        badge: "HEAVY INFRASTRUCTURE",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Massive rectangular concrete tunnel blocks placed beneath highways to carry streams and storm runoff.",
        features: [
          "ASTM C1577 Engineered",
          "AASHTO HS-25 Rated",
          "High-Strength 5,000+ PSI",
          "Tongue & Groove Joint",
        ],
        specCapacity: {
          label: "SPANS",
          value: "6'×3' to 16'×12'",
          sub: "24 DOT Standard Sizes",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Custom Length Sections",
          sub: "Modular Assembly",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C1577",
          sub: "AASHTO HS-25",
        },
        image: "/images/infrastructure.jpg",
        href: "/#contact",
      },
      {
        id: "wingwall-dot-var",
        name: "Precast Bridge Wing Walls",
        shortName: "Bridge Wing Walls",
        badge: "DOT HIGHWAY STANDARD",
        categoryLabel: "HEAVY CIVIL INFRASTRUCTURE",
        description:
          "Heavy concrete retaining walls that hold back steep dirt banks and guide water smoothly into culverts.",
        features: [
          "30° & 45° Flare Angles",
          "Heavy Highway Earth Load",
          "High-Strength Concrete",
          "Tie-Back Anchors",
        ],
        specCapacity: {
          label: "HEIGHT RANGE",
          value: "4 ft to 16 ft Heights",
          sub: "Flared Wing Profile",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Matched To Culvert Span",
          sub: "DOT Highway Standard",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Maine DOT",
          sub: "AASHTO HS-20",
        },
        image: "/images/products/wingwall-dot.png",
        href: "/#contact",
      },
      {
        id: "solid-round-slab-gang-mold-var",
        name: "Solid Round Slab Gang Mold",
        shortName: "Plant Gang Mold",
        badge: "PLANT TOOLING",
        categoryLabel: "PRECAST GANG MOLDS",
        description:
          "Heavy-duty multi-cavity steel gang mold designed to cast multiple solid round concrete slabs, manhole covers, and grade rings in a single production pour.",
        features: [
          "Multi-Cavity Steel Setup",
          "High Output Single Pour",
          "Precision Tolerance",
          "Fast Strip Mechanism",
        ],
        specCapacity: {
          label: "OUTPUT",
          value: "Multiple Slabs / Pour",
          sub: "Round Slabs & Rings",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Precision Steel Bed",
          sub: "Plant Production",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Heavy Steel Fab",
          sub: "CNC Laser Cut",
        },
        image: "/images/manufacturing.jpg",
        href: "/#contact",
      },
    ],
  },

  // ── 6. COMMERCIAL GREASE TRAPS ─────────────────────────────────────────────
  {
    id: "grease-traps",
    name: "Commercial Grease Interceptors",
    category: "tanks",
    categoryBadge: "WATERTIGHT PRECAST",
    categoryLabel: "UNDERGROUND TANKS & UTILITIES",
    summary: "2 Variables · 1000G & 1500G Commercial FOG Interceptors",
    description:
      "Municipal-compliant fats, oil, and grease (FOG) separation tanks for restaurants, hotel kitchens, food manufacturing, and retail dining plazas.",
    variables: [
      {
        id: "tank-grease-1000-var",
        name: "1000 Gallon Precast Grease Trap",
        shortName: "1,000G Grease Trap",
        badge: "COMMERCIAL FOOD SERVICE",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Precast interceptor box that traps kitchen fats, oils, and grease before restaurant wastewater flows into city sewers.",
        features: [
          "Dual Internal Baffles",
          "Vehicle Traffic Rated",
          "PDI-G101 Certified",
          "Gas-Tight Lid Seals",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "1,000 Gallons",
          sub: "(3,785 Liters)",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "8' L x 4.5' W x 5' H",
          sub: "Dual Chamber FOG",
        },
        specStandards: {
          label: "STANDARDS",
          value: "PDI-G101",
          sub: "IAPMO Listed",
        },
        image: "/images/products/grease-trap-1000g.png",
        href: "/#contact",
      },
      {
        id: "tank-grease-1500-var",
        name: "1500 Gallon Commercial Grease Interceptor",
        shortName: "1,500G High Capacity",
        badge: "HIGH CAPACITY FOOD SERVICE",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Large capacity grease separator with cast-in baffles for supermarkets, hospital cafeterias, and hotel food courts.",
        features: [
          "High Flow Separation",
          "Cast-Iron Covers Included",
          "High-Strength Concrete",
          "Long Service Life",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "1,500 Gallons",
          sub: "(5,678 Liters)",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "10' L x 5.5' W x 5.5' H",
          sub: "Heavy Duty FOG",
        },
        specStandards: {
          label: "STANDARDS",
          value: "PDI-G101",
          sub: "ASTM C1227",
        },
        image: "/images/products/grease-trap-1500g.png",
        href: "/#contact",
      },
    ],
  },

  // ── 7. LEACHING GALLEYS & INFILTRATION ──────────────────────────────────────
  {
    id: "leaching-galleys",
    name: "Maine DOT Leaching Galleys",
    category: "drainage",
    categoryBadge: "DOT SPECIFICATION",
    categoryLabel: "ROAD & STORM DRAINAGE",
    summary: "2 Variables · 2 FT Modular & LC-6 High Capacity Chambers",
    description:
      "Engineered stormwater infiltration chambers allowing subsurface retention under parking lots, replacing open retention ponds.",
    variables: [
      {
        id: "leaching-galleys-dot-var",
        name: "(Maine DOT) 2 FT Leaching Galleys",
        shortName: "2 FT Modular Galley",
        badge: "DOT SPECIFICATION",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Compact underground soakaway galleries that replace surface retention ponds and save usable site land.",
        features: [
          "Perforated Soil Infiltration",
          "AASHTO H-20 Parking Load",
          "Interlocking Modules",
          "High Storage Void",
        ],
        specCapacity: {
          label: "INFILTRATION",
          value: "Modular Retention",
          sub: "Saves Surface Land",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "4' x 8' x 2' Height",
          sub: "6 Standard Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Maine DOT",
          sub: "AASHTO H-20",
        },
        image: "/images/products/leaching-galley.png",
        href: "/#contact",
      },
      {
        id: "leaching-galleys-lc6-var",
        name: "(Maine DOT) LC-6 Leaching Galleys",
        shortName: "LC-6 High Capacity",
        badge: "DOT CERTIFIED",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Underground perforated concrete chambers that naturally soak rainwater runoff into the soil beneath parking lots.",
        features: [
          "Deep Water Dissipation",
          "High Highway Wheel Load",
          "High-Strength Concrete",
          "8 DOT Size Variants",
        ],
        specCapacity: {
          label: "CAPACITY",
          value: "LC-6 High Capacity",
          sub: "Storm Infiltration",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "4' x 8' x 4' Height",
          sub: "Extended Chamber",
        },
        specStandards: {
          label: "STANDARDS",
          value: "Maine DOT",
          sub: "High Capacity",
        },
        image: "/images/products/leaching-galley-lc6.png",
        href: "/#contact",
      },
    ],
  },

  // ── 8. PRECAST MANHOLES & PUMP STATIONS ────────────────────────────────────
  {
    id: "manholes-stations",
    name: "Precast Manholes & Utility Pump Stations",
    category: "drainage",
    categoryBadge: "MUNICIPAL UTILITY",
    categoryLabel: "ROAD & STORM DRAINAGE",
    summary: "3 Variables · 1050mm Manholes & Dual Chamber Stations",
    description:
      "Circular utility access shafts, reinforced deep chambers, and turnkey dual-compartment pump basins with precast divider walls.",
    variables: [
      {
        id: "manhole-1050-var",
        name: "Catch Basin Manhole 1050mm Diameter",
        shortName: "1050mm Standard Shaft",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Deep circular concrete access shaft allowing utility workers to inspect and maintain underground pipes safely.",
        features: [
          "Precision O-Ring Joint",
          "Vehicle Traffic Rated",
          "Stackable Risers",
          "Built-in Steps Available",
        ],
        specCapacity: {
          label: "DIAMETER",
          value: "1050 mm (42\")",
          sub: "Circular Chamber",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Risers 1 ft to 6 ft",
          sub: "Modular Height",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "AASHTO HS-20",
        },
        image: "/images/products/manhole-1050mm.webp",
        href: "/#contact",
      },
      {
        id: "manhole-reinforced-var",
        name: "Precast Reinforced Catch Basin Manhole (1050mm)",
        shortName: "1050mm Reinforced",
        badge: "PRECAST EXCHANGE PRODUCT",
        categoryLabel: "ROAD & STORM DRAINAGE",
        description:
          "Heavy reinforced circular manhole chamber with pipe gaskets designed for deep utility installations.",
        features: [
          "Extra Rebar Cage",
          "Deep Soil Burial Load",
          "High-Strength Concrete",
          "Flexible Gasket Knockouts",
        ],
        specCapacity: {
          label: "REINFORCING",
          value: "Heavy Steel Cage",
          sub: "Deep Utility Depths",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "1050 mm (42\") Shell",
          sub: "8 Custom Heights",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "Heavy Duty",
        },
        image: "/images/products/precast-reinforced-manhole.webp",
        href: "/#contact",
      },
      {
        id: "catch-basin-system-var",
        name: "Multi-Component Basin & Pump Station",
        shortName: "Dual Chamber Station",
        badge: "INDUSTRIAL SYSTEM",
        categoryLabel: "UNDERGROUND TANKS & UTILITIES",
        description:
          "Dual-room concrete station: room 1 separates dirt and sediment; room 2 houses electric water pumps.",
        features: [
          "Dual Monolithic Rooms",
          "Submersible Pump Bay",
          "Sediment Pre-Separation",
          "Heavy Cast Iron Hatch",
        ],
        specCapacity: {
          label: "CONFIGURATION",
          value: "Dual Chamber Split",
          sub: "Sediment + Pump Bay",
        },
        specDimensions: {
          label: "DIMENSIONS (NOMINAL)",
          value: "Custom Monolithic Unit",
          sub: "9 Base Models",
        },
        specStandards: {
          label: "STANDARDS",
          value: "ASTM C478",
          sub: "Heavy Duty",
        },
        image: "/images/products/catch-basin-system.png",
        href: "/#contact",
      },
    ],
  },
];

// ─── MAIN PRODUCTS SECTION COMPONENT ─────────────────────────────────────────

export function ProductsSection() {
  const [activeFamilyId, setActiveFamilyId] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalVariables = PRODUCT_FAMILIES.reduce(
    (acc, family) => acc + family.variables.length,
    0
  );

  const displayedFamilies =
    activeFamilyId === "all"
      ? PRODUCT_FAMILIES
      : PRODUCT_FAMILIES.filter((f) => f.id === activeFamilyId);

  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="section-container mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2F2] border border-[#FCD2D4] text-[#D4030C] text-xs font-black tracking-widest uppercase mb-4 shadow-2xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
            <span>PRODUCT FAMILIES &amp; VARIABLE SLIDERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032356] tracking-tight uppercase leading-tight">
            ENGINEERED PRECAST <span className="text-[#D4030C]">PRODUCTS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Select any product below to browse its dedicated variable slider.
            Each variable card includes high-definition visuals, 4 core engineering features,
            capacity, dimensions, and DOT standards.
          </p>
        </div>

        {/* Product Selector Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setActiveFamilyId("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-2xs ${
              activeFamilyId === "all"
                ? "bg-[#032356] text-white shadow-md scale-102"
                : "bg-[#F8FAFD] text-[#032356] border border-[#CBD5E1] hover:border-[#032356] hover:bg-white"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4030C]" />
            <span>All Products ({totalVariables} Variables)</span>
          </button>

          {PRODUCT_FAMILIES.map((family) => {
            const isActive = activeFamilyId === family.id;
            return (
              <button
                key={family.id}
                type="button"
                onClick={() => setActiveFamilyId(family.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                  isActive
                    ? "bg-[#D4030C] text-white shadow-md scale-102"
                    : "bg-[#F8FAFD] text-[#032356] border border-[#CBD5E1] hover:border-[#D4030C] hover:bg-white"
                }`}
              >
                <span>{family.name}</span>
                <span
                  className={`text-[10px] font-black px-1.5 py-0.5 rounded font-mono ${
                    isActive
                      ? "bg-white text-[#D4030C]"
                      : "bg-[#EBF1F8] text-[#032356]"
                  }`}
                >
                  {family.variables.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PRODUCT VARIABLE SLIDERS LIST ──────────────────────────────── */}
      <div className="section-container-wide space-y-16 sm:space-y-20">
        {displayedFamilies.map((family) => (
          <ProductVariableSlider
            key={family.id}
            family={family}
            mounted={mounted}
          />
        ))}
      </div>
    </section>
  );
}

// ─── DEDICATED SLIDER FOR ONE PRODUCT'S VARIABLES ───────────────────────────

function ProductVariableSlider({
  family,
  mounted,
}: {
  family: ProductFamily;
  mounted: boolean;
}) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="rounded-3xl p-5 sm:p-8 bg-[#F8FAFD] border border-[#E2E8F0] shadow-xs overflow-hidden">
      {/* Product Family Header: Title, Variables Count, Prev/Next Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 mb-6 border-b border-[#CBD5E1] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4030C] mb-1 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4030C]" />
            <span>
              {family.categoryBadge} · ({family.variables.length} VARIABLES IN THIS PRODUCT)
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#032356] uppercase tracking-tight">
            {family.name}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
            {family.description}
          </p>
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block text-[11px] font-mono font-bold text-[#64748B] mr-2">
            Variable {currentSlideIndex + 1} of {family.variables.length}
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-xl border-2 border-[#CBD5E1] hover:border-[#032356] bg-white text-[#032356] hover:bg-[#F0F6FF] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Previous ${family.name} variable`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-xl border-2 border-[#CBD5E1] hover:border-[#032356] bg-white text-[#032356] hover:bg-[#F0F6FF] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Next ${family.name} variable`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Variable Switcher Chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mr-1">
          Quick Jump:
        </span>
        {family.variables.map((variable, idx) => {
          const isActive = currentSlideIndex === idx;
          return (
            <button
              key={variable.id}
              type="button"
              onClick={() => {
                swiperRef.current?.slideTo(idx);
                setCurrentSlideIndex(idx);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#032356] text-white border-[#032356] shadow-xs scale-102"
                  : "bg-white text-[#032356] border-[#CBD5E1] hover:border-[#D4030C]"
              }`}
            >
              {variable.shortName}
            </button>
          );
        })}
      </div>

      {/* Variable Slider Stage */}
      {!mounted ? (
        // Clean SSR / Initial Layout before client mount (prevents Swiper SSR Date prerender errors)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {family.variables.slice(0, 3).map((variable) => (
            <VariableCard key={variable.id} variable={variable} />
          ))}
        </div>
      ) : (
        // Swiper slider when client mounted
        <div className="overflow-hidden rounded-2xl w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlideIndex(swiper.activeIndex);
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
            }}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={false}
            className="w-full pb-4"
          >
            {family.variables.map((variable) => (
              <SwiperSlide key={variable.id} className="h-auto">
                <VariableCard variable={variable} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

// ─── EXACT PREMIUM CARD DESIGN FROM USER SCREENSHOT ─────────────────────────

function VariableCard({ variable }: { variable: ProductVariable }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-[#CBD5E1] hover:border-[#032356] shadow-sm hover:shadow-2xl transition-all duration-300">
      {/* 1. Top Image Stage */}
      <div className="relative h-64 sm:h-72 w-full bg-[#F4F6F9] border-b border-[#EBF1F8] flex items-center justify-center p-6 overflow-hidden group-hover:bg-[#EDF2F8] transition-colors">
        <Image
          src={variable.image}
          alt={variable.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top-Left Red Pill Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-xs bg-[#D4030C] text-white">
            {variable.badge}
          </span>
        </div>

        {/* Top-Right Favorite / Save Button */}
        <button
          type="button"
          onClick={() => setIsSaved(!isSaved)}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
            isSaved
              ? "text-[#D4030C] bg-[#FFF2F2]"
              : "text-[#64748B] hover:text-[#D4030C]"
          }`}
          aria-label="Save product"
        >
          <Heart
            className={`w-5 h-5 ${isSaved ? "fill-[#D4030C]" : ""}`}
          />
        </button>
      </div>

      {/* 2. Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Subtitle */}
          <span className="text-xs font-black uppercase tracking-wider text-[#D4030C] block mb-2 font-mono">
            {variable.categoryLabel}
          </span>

          {/* Product Title */}
          <h4 className="text-xl sm:text-2xl font-black text-[#032356] group-hover:text-[#D4030C] transition-colors leading-tight mb-2.5">
            {variable.name}
          </h4>

          {/* Small Description */}
          <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal min-h-[48px]">
            {variable.description}
          </p>

          {/* 3. Four Feature Badges with Vertical Dividers */}
          <div className="grid grid-cols-4 divide-x divide-[#E2E8F0] pt-4 pb-5 border-t border-b border-[#F1F5F9] text-center mb-6">
            {/* Feature 1 */}
            <div className="px-1.5">
              <div className="w-9 h-9 rounded-full bg-[#F0F4FA] text-[#032356] flex items-center justify-center mx-auto mb-1.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#032356]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#334155] leading-tight block">
                {variable.features[0]}
              </span>
            </div>

            {/* Feature 2 */}
            <div className="px-1.5">
              <div className="w-9 h-9 rounded-full bg-[#F0F4FA] text-[#032356] flex items-center justify-center mx-auto mb-1.5 shadow-2xs">
                <Truck className="w-4 h-4 text-[#032356]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#334155] leading-tight block">
                {variable.features[1]}
              </span>
            </div>

            {/* Feature 3 */}
            <div className="px-1.5">
              <div className="w-9 h-9 rounded-full bg-[#F0F4FA] text-[#032356] flex items-center justify-center mx-auto mb-1.5 shadow-2xs">
                <Anchor className="w-4 h-4 text-[#032356]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#334155] leading-tight block">
                {variable.features[2]}
              </span>
            </div>

            {/* Feature 4 */}
            <div className="px-1.5">
              <div className="w-9 h-9 rounded-full bg-[#F0F4FA] text-[#032356] flex items-center justify-center mx-auto mb-1.5 shadow-2xs">
                <Clock className="w-4 h-4 text-[#032356]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#334155] leading-tight block">
                {variable.features[3]}
              </span>
            </div>
          </div>

          {/* 4. Three-Column Technical Spec Box */}
          <div className="p-4 rounded-2xl bg-[#F4F7FB] border border-[#E2E8F0] grid grid-cols-3 gap-3 mb-6">
            {/* Spec 1: Capacity / Flow / Opening */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-white text-[#032356] flex items-center justify-center shrink-0 shadow-2xs border border-[#E2E8F0]">
                <Droplet className="w-4 h-4 text-[#032356]" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                  {variable.specCapacity.label}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-[#032356] block truncate">
                  {variable.specCapacity.value}
                </span>
                {variable.specCapacity.sub && (
                  <span className="text-[10px] text-[#64748B] block truncate">
                    {variable.specCapacity.sub}
                  </span>
                )}
              </div>
            </div>

            {/* Spec 2: Dimensions */}
            <div className="flex items-center gap-2.5 min-w-0 border-l border-[#E2E8F0] pl-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#032356] flex items-center justify-center shrink-0 shadow-2xs border border-[#E2E8F0]">
                <Box className="w-4 h-4 text-[#032356]" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                  {variable.specDimensions.label}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-[#032356] block truncate">
                  {variable.specDimensions.value}
                </span>
                {variable.specDimensions.sub && (
                  <span className="text-[10px] text-[#64748B] block truncate">
                    {variable.specDimensions.sub}
                  </span>
                )}
              </div>
            </div>

            {/* Spec 3: Standards */}
            <div className="flex items-center gap-2.5 min-w-0 border-l border-[#E2E8F0] pl-3">
              <div className="w-8 h-8 rounded-full bg-white text-[#032356] flex items-center justify-center shrink-0 shadow-2xs border border-[#E2E8F0]">
                <FileText className="w-4 h-4 text-[#032356]" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                  {variable.specStandards.label}
                </span>
                <span className="text-xs sm:text-[13px] font-black text-[#032356] block truncate">
                  {variable.specStandards.value}
                </span>
                {variable.specStandards.sub && (
                  <span className="text-[10px] text-[#64748B] block truncate">
                    {variable.specStandards.sub}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Bottom Action Row: View Details Link & Solid Red Inquire Button */}
        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
          <Link
            href={variable.href}
            className="text-sm font-bold text-[#032356] hover:text-[#D4030C] transition-colors inline-flex items-center gap-1.5"
          >
            <span>View details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={variable.href}
            className="bg-[#D4030C] hover:bg-[#B3020A] text-white font-bold py-2.5 px-6 rounded-xl text-sm shadow-sm hover:shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <span>Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
