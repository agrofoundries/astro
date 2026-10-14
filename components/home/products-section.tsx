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
  ShieldCheck,
  Truck,
  Anchor,
  Clock,
  Droplet,
  Box,
  FileText,
  Layers,
  Scale,
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
  category: string;
  categoryBadge: string;
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  variables: ProductVariable[];
}

// ─── PRODUCT FAMILIES DATA (14 OFFICIAL CATALOG CATEGORIES) ─────────────────

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    "id": "catch-basins",
    "name": "Precast Concrete Catch Basins",
    "category": "drainage",
    "categoryBadge": "PAGES 4\u201317 \u00b7 DOT DRAINAGE",
    "categoryLabel": "STORM & HIGHWAY DRAINAGE",
    "summary": "8 Models \u00b7 12\"\u00d712\" to 84\"\u00d784\" Monolithic Basins",
    "description": "Manufactured to Suffolk & Nassau County DOT specifications with certified 5,000+ PSI concrete, AASHTO HS20-44 highway traffic loading, and ASTM A1064 welded wire reinforcement centered in 6\" walls with 1.5\" minimum clear cover.",
    "image": "/images/products_3d/card_catch-basin-3d.png",
    "variables": [
      {
        "id": "cb-3048",
        "name": "30\" \u00d7 48\" Catch Basin (Model AR 3048 CB)",
        "shortName": "30\"\u00d748\" AR-3048",
        "badge": "AASHTO HS20-44 SPEC",
        "categoryLabel": "HIGHWAY & MUNICIPAL DRAINAGE",
        "description": "Catalog flagship model AR 3048 CB weighing 1,800 lbs with 4\" walls, 2'8\"\u00d73' solid cover, and WWF 6\"\u00d712\" ASTM A1064 reinforcement.",
        "features": [
          "1,800 Lbs Unit Weight",
          "5,000+ PSI Min 28-Day",
          "ASTM A-615 Grade 60",
          "Suffolk & Nassau Approved"
        ],
        "specCapacity": {
          "label": "STRUCTURAL RATING",
          "value": "AASHTO HS20-44",
          "sub": "Heavy Highway"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "30\" \u00d7 48\" Basin",
          "sub": "4\" Wall \u00b7 1.5\" Cover"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A1064 / A185",
          "sub": "All Island Tested"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-1212",
        "name": "12\" \u00d7 12\" Precast Catch Basin",
        "shortName": "12\"\u00d712\" Compact",
        "badge": "CURB & WALKWAY INLET",
        "categoryLabel": "COMMERCIAL DRAINAGE",
        "description": "Compact monolithic drainage basin for light commercial runoff, sidewalk transitions, and residential landscape drainage.",
        "features": [
          "Monolithic Cast Box",
          "Cast-Iron Grate Fit",
          "Knockout Pipe Hubs",
          "Easy Crane Lift"
        ],
        "specCapacity": {
          "label": "DISCHARGE FIT",
          "value": "Up to 6\" Pipe",
          "sub": "Gravity Drainage"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "12\" \u00d7 12\" Chamber",
          "sub": "Standard Depths"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM C478 Spec",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-2424",
        "name": "24\" \u00d7 24\" Precast Catch Basin",
        "shortName": "24\"\u00d724\" Commercial",
        "badge": "PARKING LOT & ROADWAY",
        "categoryLabel": "COMMERCIAL & SITE DRAINAGE",
        "description": "Standard 2-foot square catch basin engineered for commercial parking plazas, driveway gutters, and regional stormwater lines.",
        "features": [
          "HS-20 Traffic Rated",
          "Dual Pipe Knockouts",
          "Cast Iron Seat Rim",
          "Reinforced Rebar Cage"
        ],
        "specCapacity": {
          "label": "SUMP PROFILE",
          "value": "Sediment Trap",
          "sub": "18\" Sump Depth"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "24\" \u00d7 24\" Square",
          "sub": "3' to 5' Depths"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "DOT Highway Spec"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-3636",
        "name": "36\" \u00d7 36\" Precast Catch Basin",
        "shortName": "36\"\u00d736\" Municipal",
        "badge": "HEAVY CIVIL STANDARD",
        "categoryLabel": "MUNICIPAL INFRASTRUCTURE",
        "description": "Heavy municipal stormwater collection chamber designed for high flow arterial roadway gutters and interchange drainage.",
        "features": [
          "Heavy Truck Load",
          "Curb Throat Adapter",
          "Multiple Sump Sizes",
          "Watertight Seal Joint"
        ],
        "specCapacity": {
          "label": "FLOW CAPACITY",
          "value": "High Volume Inflow",
          "sub": "Street Runoff"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "36\" \u00d7 36\" Chamber",
          "sub": "4' to 6' Depths"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM C478 / A1064",
          "sub": "Suffolk County DOT"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-6060",
        "name": "60\" \u00d7 60\" Heavy Precast Catch Basin",
        "shortName": "60\"\u00d760\" Junction",
        "badge": "LARGE ARTERIAL JUNCTION",
        "categoryLabel": "HEAVY CIVIL INFRASTRUCTURE",
        "description": "Expansive 5-foot square stormwater junction vault receiving large diameter reinforced concrete pipes from highway trunk lines.",
        "features": [
          "Trunk Line Junction",
          "Dual Access Risers",
          "Engineered Rebar Mat",
          "High-Shear Wall"
        ],
        "specCapacity": {
          "label": "PIPE CAPACITY",
          "value": "Up to 36\" RCP",
          "sub": "Core Knockouts"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "60\" \u00d7 60\" Box",
          "sub": "Heavy Highway Wall"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "State Highway Spec"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-7272",
        "name": "72\" \u00d7 72\" High-Capacity Catch Basin",
        "shortName": "72\"\u00d772\" Regional",
        "badge": "REGIONAL STORMWATER",
        "categoryLabel": "HEAVY CIVIL INFRASTRUCTURE",
        "description": "6-foot square heavy precast drainage vault designed for airport aprons, shipping container terminals, and highway interchanges.",
        "features": [
          "Massive Retention",
          "Crane Pick Anchors",
          "Custom Knockout Map",
          "HS25 Heavy Surcharge"
        ],
        "specCapacity": {
          "label": "CAPACITY",
          "value": "High Inflow Storage",
          "sub": "Storm Retention"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "72\" \u00d7 72\" Box",
          "sub": "6\" to 8\" Walls"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A-615 Grade 60",
          "sub": "AASHTO HS20-44"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cb-8484",
        "name": "84\" \u00d7 84\" Master Drainage Vault",
        "shortName": "84\"\u00d784\" Master Box",
        "badge": "MASTER COLLECTOR",
        "categoryLabel": "HEAVY CIVIL INFRASTRUCTURE",
        "description": "7-foot square master junction box providing critical consolidation point for primary municipal storm collector trunk lines.",
        "features": [
          "Master Collector",
          "Multi-Pipe Receiver",
          "Full Erection Rigging",
          "Long Island Production"
        ],
        "specCapacity": {
          "label": "MAX PIPE SIZE",
          "value": "48\" Diameter RCP",
          "sub": "Reinforced Knockouts"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "84\" \u00d7 84\" Outer",
          "sub": "Heavy-Duty Wall"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Civil",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_catch-basin-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "septic-tanks",
    "name": "Precast Concrete Septic Tanks",
    "category": "tanks",
    "categoryBadge": "PAGES 18\u201328 \u00b7 SANITARY CODE",
    "categoryLabel": "WATERTIGHT WASTEWATER TANKS",
    "summary": "9 Variables \u00b7 1,000G to 2,500G Standard & Monolithic Single-Pour",
    "description": "Monolithic single-pour and two-piece certified watertight septic tanks engineered for residential, commercial, and municipal sanitary wastewater systems per Suffolk & Nassau County Health Department codes.",
    "image": "/images/products_3d/card_septic-tank-3d.png",
    "variables": [
      {
        "id": "st-1000",
        "name": "1,000 Gallon Precast Septic Tank",
        "shortName": "1,000 Gal Tank",
        "badge": "RESIDENTIAL SANITARY",
        "categoryLabel": "SANITARY WASTEWATER",
        "description": "Standard 1,000 gallon two-compartment precast septic tank with pre-cast sanitary baffles and sealed cleanout access risers.",
        "features": [
          "Dual Compartment",
          "PVC Sanitary Baffles",
          "Watertight Joints",
          "5,000+ PSI Mix"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "1,000 Gallons",
          "sub": "Sanitary Working Cap"
        },
        "specDimensions": {
          "label": "CONFIGURATION",
          "value": "Standard 2-Piece",
          "sub": "Mastic Seal Joint"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk County DOH",
          "sub": "Sanitary Code Compliant"
        },
        "image": "/images/products_3d/card_septic-tank-3d.png",
        "href": "/#contact"
      },
      {
        "id": "st-1250-mono",
        "name": "1,250 Gallon Monolithic Septic Tank",
        "shortName": "1,250 Gal Monolith",
        "badge": "MONOLITHIC SINGLE-POUR",
        "categoryLabel": "WATERTIGHT MONOLITH",
        "description": "Seamless single-pour monolithic tank floor and side walls, guaranteeing zero joint leaks below the liquid operating level.",
        "features": [
          "100% Monolithic Base",
          "Zero Seam Infiltration",
          "Factory Water-Tested",
          "HS-20 Traffic Capable"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "1,250 Gallons",
          "sub": "Monolithic Liquid Level"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Cast",
          "sub": "Integrated Floor & Walls"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Nassau & Suffolk DOH",
          "sub": "ASTM C1227 Watertight"
        },
        "image": "/images/products_3d/card_septic-tank-3d.png",
        "href": "/#contact"
      },
      {
        "id": "st-1500-mono",
        "name": "1,500 Gallon Monolithic Septic Tank",
        "shortName": "1,500 Gal Monolith",
        "badge": "COMMERCIAL SPECIFICATION",
        "categoryLabel": "COMMERCIAL SANITARY",
        "description": "High-capacity 1,500 gallon monolithic single-pour septic tank specified for large custom residences and multi-unit commercial buildings.",
        "features": [
          "Single-Pour Bottom",
          "Twin Inspection Manholes",
          "Baffle Flow Retainers",
          "Direct Delivery Rigging"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "1,500 Gallons",
          "sub": "Heavy Commercial"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Base",
          "sub": "Heavy Reinforced Lid"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "5,000+ PSI Compressive"
        },
        "image": "/images/products_3d/card_septic-tank-3d.png",
        "href": "/#contact"
      },
      {
        "id": "st-2000-mono",
        "name": "2,000 Gallon Monolithic Septic Tank",
        "shortName": "2,000 Gal Monolith",
        "badge": "MUNICIPAL & COMMERCIAL",
        "categoryLabel": "HEAVY COMMERCIAL SANITARY",
        "description": "High volume 2,000 gallon monolithic precast vessel designed for restaurants, corporate offices, and institutional wastewater demands.",
        "features": [
          "Dual Chamber Divider",
          "Heavy Gas-Tight Covers",
          "Heavy Loading Walls",
          "Engineered Pick Loops"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "2,000 Gallons",
          "sub": "Commercial Retention"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Chamber",
          "sub": "Extra Heavy Slabs"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk Health Standard",
          "sub": "Grade 60 Steel Mesh"
        },
        "image": "/images/products_3d/card_septic-tank-3d.png",
        "href": "/#contact"
      },
      {
        "id": "st-2500-mono",
        "name": "2,500 Gallon Monolithic Septic Tank",
        "shortName": "2,500 Gal Monolith",
        "badge": "MAX CAPACITY MONOLITH",
        "categoryLabel": "HEAVY COMMERCIAL SANITARY",
        "description": "Flagship 2,500 gallon monolithic wastewater tank offering the highest single-unit capacity in the Astro 2026 product line.",
        "features": [
          "2,500 Gal Max Volume",
          "Monolithic Integrity",
          "Dual Settling Zones",
          "Full Flatbed Delivery"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "2,500 Gallons",
          "sub": "Max Capacity"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Unit",
          "sub": "High Structural Depth"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Suffolk & Nassau Code"
        },
        "image": "/images/products_3d/card_septic-tank-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "grease-traps",
    "name": "Precast Concrete Grease Traps",
    "category": "tanks",
    "categoryBadge": "PAGES 29\u201339 \u00b7 RESTAURANT SPEC",
    "categoryLabel": "FAT, OIL & GREASE INTERCEPTORS",
    "summary": "1,000G to 2,500G Commercial Kitchen Grease Interceptors",
    "description": "Engineered commercial restaurant and food service grease interceptors featuring internal PVC flow-control tees, sampling ports, and acid-resistant 5,000+ PSI concrete.",
    "image": "/images/products_3d/card_grease-trap-3d.png",
    "variables": [
      {
        "id": "gt-1000",
        "name": "1,000 Gallon Commercial Grease Trap",
        "shortName": "1,000 Gal Trap",
        "badge": "RESTAURANT CODE SPEC",
        "categoryLabel": "COMMERCIAL KITCHEN DRAINAGE",
        "description": "Commercial kitchen interceptor engineered to capture fats, oils, and grease before kitchen wastewater enters the municipal sewer.",
        "features": [
          "Internal PVC Drop Tees",
          "Gas-Tight Sealed Lid",
          "Acid-Resistant Mix",
          "Easy Pump-Out Access"
        ],
        "specCapacity": {
          "label": "RETENTION VOLUME",
          "value": "1,000 Gallons",
          "sub": "Kitchen FOG Flow"
        },
        "specDimensions": {
          "label": "CHAMBERS",
          "value": "Dual Chamber Split",
          "sub": "Retention Baffles"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "NYS Plumbing Code",
          "sub": "Suffolk Health Specs"
        },
        "image": "/images/products_3d/card_grease-trap-3d.png",
        "href": "/#contact"
      },
      {
        "id": "gt-1500-mono",
        "name": "1,500 Gallon Monolithic Grease Trap",
        "shortName": "1,500 Gal Monolith",
        "badge": "MONOLITHIC LEAKPROOF",
        "categoryLabel": "COMMERCIAL FOOD SERVICE",
        "description": "Seamless monolithic grease interceptor for high-temperature commercial dishwasher effluent and commercial kitchen sculleries.",
        "features": [
          "Single-Pour Bottom",
          "Thermal Stress Ready",
          "Cast-Iron Traffic Cover",
          "Zero Ground Leaks"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "1,500 Gallons",
          "sub": "High FOG Load"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Cast",
          "sub": "Watertight Integrity"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20 Loading",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_grease-trap-3d.png",
        "href": "/#contact"
      },
      {
        "id": "gt-2000-mono",
        "name": "2,000 Gallon Monolithic Grease Trap",
        "shortName": "2,000 Gal Monolith",
        "badge": "HIGH-VOLUME FOOD COURT",
        "categoryLabel": "INSTITUTIONAL GREASE SYSTEM",
        "description": "Heavy-duty 2,000 gallon grease interceptor for shopping centers, hotel kitchens, hospitals, and high-volume commercial food courts.",
        "features": [
          "Large Volume Hold",
          "Dual Access Manholes",
          "High Detention Time",
          "Crane Rigged Delivery"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "2,000 Gallons",
          "sub": "Large Kitchen Load"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Vessel",
          "sub": "Heavy Surcharge Lid"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A1064 Rebar",
          "sub": "Municipal Food Code"
        },
        "image": "/images/products_3d/card_grease-trap-3d.png",
        "href": "/#contact"
      },
      {
        "id": "gt-2500-mono",
        "name": "2,500 Gallon Monolithic Grease Trap",
        "shortName": "2,500 Gal Monolith",
        "badge": "MAX CAPACITY INTERCEPTOR",
        "categoryLabel": "INDUSTRIAL FOOD PROCESSING",
        "description": "Maximum capacity precast grease interceptor for food processing plants and commercial bakeries requiring extended cooling times.",
        "features": [
          "2,500 Gal Detention",
          "Monolithic Basin",
          "Sampling Well Built-In",
          "Direct Plant Ship"
        ],
        "specCapacity": {
          "label": "VOLUME",
          "value": "2,500 Gallons",
          "sub": "Max Food Volume"
        },
        "specDimensions": {
          "label": "STRUCTURE",
          "value": "Monolithic Cast",
          "sub": "Heavy Traffic Ready"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOH",
          "sub": "5,000+ PSI Mix"
        },
        "image": "/images/products_3d/card_grease-trap-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "distribution-boxes",
    "name": "Precast Concrete Distribution Boxes",
    "category": "utility",
    "categoryBadge": "PAGES 40\u201341 \u00b7 D-BOXES",
    "categoryLabel": "SANITARY FLOW EQUALIZATION",
    "summary": "Multi-Port Sanitary Distribution Boxes with Leveling Flow Hubs",
    "description": "Engineered distribution boxes with preformed pipe knockouts designed to balance gravity flow effluent equally across subsurface leaching lines and drain fields.",
    "image": "/images/products_3d/card_distribution-box-3d.png",
    "variables": [
      {
        "id": "dbox-standard",
        "name": "Standard 4-Hole Septic Distribution Box",
        "shortName": "4-Hole D-Box",
        "badge": "RESIDENTIAL & COMMERCIAL",
        "categoryLabel": "SANITARY EFFLUENT DISTRIBUTION",
        "description": "Compact precast box with 1 inlet knockout and 3-4 outlet knockouts fitted with leveling flow restrictors.",
        "features": [
          "Pre-Cast Knockouts",
          "Gasketed Access Lid",
          "Leveling Flow Collars",
          "Dense 5,000+ PSI Mix"
        ],
        "specCapacity": {
          "label": "PIPE SIZE",
          "value": "4\" & 6\" SDR-35/PVC",
          "sub": "Sanitary Pipes"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "Standard D-Box",
          "sub": "Compact Footprint"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk County DOH",
          "sub": "Gravity Flow Spec"
        },
        "image": "/images/products_3d/card_distribution-box-3d.png",
        "href": "/#contact"
      },
      {
        "id": "dbox-traffic",
        "name": "Heavy Traffic Rated Distribution Box",
        "shortName": "Traffic D-Box",
        "badge": "AASHTO HS-20 RATED",
        "categoryLabel": "PARKING LOT SANITARY",
        "description": "Reinforced distribution box designed for shallow installations beneath parking lots, access roads, and vehicle driveways.",
        "features": [
          "AASHTO HS20 Cover",
          "Cast-Iron Seat",
          "Reinforced Walls",
          "Chemical Resistance"
        ],
        "specCapacity": {
          "label": "LOADING",
          "value": "Heavy Traffic Loading",
          "sub": "HS20 Wheel Loads"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "Reinforced Box",
          "sub": "Thick Traffic Lid"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Suffolk & Nassau Spec"
        },
        "image": "/images/products_3d/card_distribution-box-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "leaching-galleys",
    "name": "Precast Concrete Leaching Galleys",
    "category": "drainage",
    "categoryBadge": "PAGES 42\u201347 \u00b7 RECHARGE",
    "categoryLabel": "SUBSURFACE STORMWATER INFILTRATION",
    "summary": "1', 2', 3', and 4' Depth Infiltration Chambers",
    "description": "High-void open-bottom precast infiltration chambers with engineered side weep louvers designed to maximize stormwater groundwater recharge while saving valuable site excavation space.",
    "image": "/images/products_3d/card_leaching-galley-3d.png",
    "variables": [
      {
        "id": "lg-1ft",
        "name": "1' Depth Precast Leaching Galley",
        "shortName": "1' Galley",
        "badge": "SHALLOW WATER TABLE",
        "categoryLabel": "STORMWATER INFILTRATION",
        "description": "Low-profile 1-foot high leaching chamber designed for sites with shallow groundwater tables and restrictive bedrock depths.",
        "features": [
          "Low-Profile Height",
          "Open-Bottom Flow",
          "Side Weep Slots",
          "Interlocking Ends"
        ],
        "specCapacity": {
          "label": "PROFILE",
          "value": "1' Low Infiltration",
          "sub": "Shallow Water Table"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "12\" Chamber Height",
          "sub": "Modular Lengths"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "NYS DEC Stormwater",
          "sub": "AASHTO HS20 Rated"
        },
        "image": "/images/products_3d/card_leaching-galley-3d.png",
        "href": "/#contact"
      },
      {
        "id": "lg-2ft",
        "name": "2' Depth Precast Leaching Galley",
        "shortName": "2' Galley",
        "badge": "COMMERCIAL PARKING RECHARGE",
        "categoryLabel": "STORMWATER INFILTRATION",
        "description": "2-foot precast leaching chamber installed under commercial parking lots for underground detention and gravel-bed percolation.",
        "features": [
          "High Storage Volume",
          "Highway Load Support",
          "Engineered Louvers",
          "Modular Trench Fit"
        ],
        "specCapacity": {
          "label": "PERCOLATION",
          "value": "High Void Volume",
          "sub": "Subsurface Recharge"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "24\" Chamber Height",
          "sub": "Standard Trench Line"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Suffolk Civil Spec"
        },
        "image": "/images/products_3d/card_leaching-galley-3d.png",
        "href": "/#contact"
      },
      {
        "id": "lg-3ft",
        "name": "3' Depth Precast Leaching Galley",
        "shortName": "3' Galley",
        "badge": "HIGH-CAPACITY RUNOFF",
        "categoryLabel": "STORMWATER INFILTRATION",
        "description": "3-foot high leaching galley offering substantial chamber storage for large commercial roofs, retail plazas, and industrial yards.",
        "features": [
          "Deep Trench Profile",
          "Massive Infiltration",
          "Heavy Surcharge Lid",
          "Rapid Dry Bed Return"
        ],
        "specCapacity": {
          "label": "RETENTION",
          "value": "Deep Chamber Surge",
          "sub": "Storm Detention"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "36\" Chamber Height",
          "sub": "Deep Infiltration"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "5,000+ PSI Concrete",
          "sub": "All Island Tested"
        },
        "image": "/images/products_3d/card_leaching-galley-3d.png",
        "href": "/#contact"
      },
      {
        "id": "lg-4ft",
        "name": "4' Depth Precast Leaching Galley",
        "shortName": "4' Galley",
        "badge": "MAX CAPACITY RECHARGE",
        "categoryLabel": "STORMWATER INFILTRATION",
        "description": "Maximum 4-foot deep precast infiltration galley delivering the highest water volume recharge per linear foot of trenching.",
        "features": [
          "48\" Maximum Depth",
          "Huge Void Ratio",
          "Direct Gravel Contact",
          "Long Island Standard"
        ],
        "specCapacity": {
          "label": "STORAGE",
          "value": "Max Volume Storage",
          "sub": "Heavy Rainfall Events"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "48\" Chamber Height",
          "sub": "Deep Trench"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Suffolk & Nassau DOH"
        },
        "image": "/images/products_3d/card_leaching-galley-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "low-domes",
    "name": "Precast Concrete Low Domes",
    "category": "infrastructure",
    "categoryBadge": "PAGES 48\u201353 \u00b7 LOW DOMES",
    "categoryLabel": "TAPERED MANHOLE & DRYWELL CAPS",
    "summary": "6', 8', 10', and 12' Diameters Tapered to 24\" Access Opening",
    "description": "Circular tapered low-profile domes designed to smoothly reduce diameter from large ring stacks (6' to 12') to standard 24\" or 30\" roadway access manhole covers.",
    "image": "/images/products_3d/card_low-dome-3d.png",
    "variables": [
      {
        "id": "ld-6ft",
        "name": "6' Diameter Low Dome",
        "shortName": "6' Low Dome",
        "badge": "6FT STACK REDUCER",
        "categoryLabel": "TAPERED PRECAST CAP",
        "description": "Conical transition cap reducing a 6-foot drywell or sanitary ring stack down to a standard 24\" access collar.",
        "features": [
          "Smooth Taper Profile",
          "Centrally Cast 24\" Hole",
          "Heavy Radial Rebar",
          "Tongue & Groove Base"
        ],
        "specCapacity": {
          "label": "FIT DIAMETER",
          "value": "6' Ring Stacks",
          "sub": "Sanitary & Storm"
        },
        "specDimensions": {
          "label": "OPENING",
          "value": "24\" Cleanout Opening",
          "sub": "Standard Manhole"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "5,000+ PSI Compressive"
        },
        "image": "/images/products_3d/card_low-dome-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ld-8ft",
        "name": "8' Diameter Low Dome",
        "shortName": "8' Low Dome",
        "badge": "8FT STANDARD REDUCER",
        "categoryLabel": "TAPERED PRECAST CAP",
        "description": "The standard Long Island drywell transition dome for 8-foot ring stacks, engineered for traffic and non-traffic depths.",
        "features": [
          "8-Foot Ring Mating",
          "Low Rise Geometry",
          "Crane Eye Embeds",
          "Suffolk County Spec"
        ],
        "specCapacity": {
          "label": "FIT DIAMETER",
          "value": "8' Ring Stacks",
          "sub": "Drywells & Manholes"
        },
        "specDimensions": {
          "label": "OPENING",
          "value": "24\" Access Hole",
          "sub": "Conical Slope"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A1064 Rebar",
          "sub": "Suffolk & Nassau Civil"
        },
        "image": "/images/products_3d/card_low-dome-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ld-10ft",
        "name": "10' Diameter Low Dome",
        "shortName": "10' Low Dome",
        "badge": "10FT HEAVY REDUCER",
        "categoryLabel": "TAPERED PRECAST CAP",
        "description": "Large-span 10-foot low dome designed for large municipal drywells and stormwater recharge shafts.",
        "features": [
          "10-Foot Ring Cap",
          "Heavy Load Transition",
          "Grade 60 Steel Mat",
          "Dense Watertight Mix"
        ],
        "specCapacity": {
          "label": "FIT DIAMETER",
          "value": "10' Ring Stacks",
          "sub": "Municipal Drywells"
        },
        "specDimensions": {
          "label": "OPENING",
          "value": "24\" or 30\" Access",
          "sub": "Low Dome Height"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "All Island Tested"
        },
        "image": "/images/products_3d/card_low-dome-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ld-12ft",
        "name": "12' Diameter Low Dome",
        "shortName": "12' Low Dome",
        "badge": "12FT MAX SPAN DOME",
        "categoryLabel": "TAPERED PRECAST CAP",
        "description": "Massive 12-foot diameter low dome engineered to support deep earth backfill and highway surcharge over regional recharge pools.",
        "features": [
          "12-Foot Base Ring Span",
          "Dual Crane Hook Points",
          "Engineered Rebar Web",
          "Factory Steam Cured"
        ],
        "specCapacity": {
          "label": "FIT DIAMETER",
          "value": "12' Ring Stacks",
          "sub": "Regional Storm Drywells"
        },
        "specDimensions": {
          "label": "OPENING",
          "value": "24\" Access Opening",
          "sub": "Reinforced Rim"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOT",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_low-dome-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "high-domes",
    "name": "Precast Concrete High Domes",
    "category": "infrastructure",
    "categoryBadge": "PAGES 54\u201358 \u00b7 HIGH DOMES",
    "categoryLabel": "DEEP UTILITY CONICAL RISERS",
    "summary": "6', 8', and 10' Diameters Deep Vertical-Rise Conical Caps",
    "description": "Steep-slope conical precast domes designed for deep utility vaults, accelerating the height transition to grade while providing extreme compression load resistance.",
    "image": "/images/products_3d/card_high-dome-3d.png",
    "variables": [
      {
        "id": "hd-6ft",
        "name": "6' Diameter High Dome",
        "shortName": "6' High Dome",
        "badge": "DEEP VAULT RISE",
        "categoryLabel": "CONICAL DEEP RISER",
        "description": "Steep vertical pitch dome for 6-foot ring stacks, maximizing internal headroom and vertical rise to roadway subgrade.",
        "features": [
          "Steep Vertical Pitch",
          "Maximum Headroom",
          "Internal Step Ready",
          "Heavy Grade 60 Rebar"
        ],
        "specCapacity": {
          "label": "DEPTH RATING",
          "value": "Deep Burial Rated",
          "sub": "Heavy Earth Pressure"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "6' Base Diameter",
          "sub": "24\" Top Collar"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM C478 Spec",
          "sub": "AASHTO HS20-44"
        },
        "image": "/images/products_3d/card_high-dome-3d.png",
        "href": "/#contact"
      },
      {
        "id": "hd-8ft",
        "name": "8' Diameter High Dome",
        "shortName": "8' High Dome",
        "badge": "8FT DEEP CONICAL",
        "categoryLabel": "CONICAL DEEP RISER",
        "description": "High-rise 8-foot dome frequently specified on municipal deep sanitary sewer manholes across Long Island.",
        "features": [
          "8-Foot Base Ring Fit",
          "Deep Burial Strength",
          "Calibrated Opening",
          "Suffolk Sanitary Standard"
        ],
        "specCapacity": {
          "label": "DEPTH RATING",
          "value": "High Surcharge",
          "sub": "Traffic & Soil Pressure"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Base Diameter",
          "sub": "Steep Cone Profile"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk County DOH",
          "sub": "5,000+ PSI Mix"
        },
        "image": "/images/products_3d/card_high-dome-3d.png",
        "href": "/#contact"
      },
      {
        "id": "hd-10ft",
        "name": "10' Diameter High Dome",
        "shortName": "10' High Dome",
        "badge": "10FT MASTER CONICAL",
        "categoryLabel": "CONICAL DEEP RISER",
        "description": "10-foot conical reducer designed for massive stormwater shafts and pump station wet wells requiring deep access.",
        "features": [
          "Heavy Concrete Wall",
          "High Hoop Tension Rebar",
          "Overhead Crane Rigging",
          "Engineered Tolerances"
        ],
        "specCapacity": {
          "label": "DEPTH RATING",
          "value": "Deep Highway Burial",
          "sub": "Heavy Surcharge"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "10' Base Diameter",
          "sub": "Deep Riser"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "ASTM A-615 Steel"
        },
        "image": "/images/products_3d/card_high-dome-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "curb-stops",
    "name": "Precast Concrete Curb Stops",
    "category": "utility",
    "categoryBadge": "PAGES 59\u201362 \u00b7 PARKING",
    "categoryLabel": "COMMERCIAL PARKING WHEEL STOPS",
    "summary": "6' \u00d7 4\" & 6' \u00d7 5.5\" Commercial Parking Bumpers",
    "description": "Reinforced 6-foot precast concrete parking bumpers with beveled edges and pre-molded steel pin holes, protecting storefronts, sidewalks, and landscaped islands.",
    "image": "/images/products_3d/card_curb-stop-3d.png",
    "variables": [
      {
        "id": "cs-6x4",
        "name": "6' \u00d7 4\" Precast Curb Stop",
        "shortName": "6'\u00d74\" Standard",
        "badge": "COMMERCIAL PARKING",
        "categoryLabel": "PARKING LOT ACCESSORIES",
        "description": "Standard 6-foot parking bumper with pre-formed anchor pin holes for quick jobsite asphalt pinning.",
        "features": [
          "Pre-Formed Pin Holes",
          "Smooth Beveled Corners",
          "Continuous Rebar Rod",
          "Weather-Resistant Mix"
        ],
        "specCapacity": {
          "label": "VEHICLE FIT",
          "value": "Passenger Cars & SUVs",
          "sub": "Standard Parking"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "6' Long \u00d7 4\" High",
          "sub": "Beveled Profile"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Commercial Spec",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_curb-stop-3d.png",
        "href": "/#contact"
      },
      {
        "id": "cs-6x55",
        "name": "6' \u00d7 5.5\" Heavy Truck Curb Stop",
        "shortName": "6'\u00d75.5\" Heavy",
        "badge": "HEAVY TRUCK RATED",
        "categoryLabel": "COMMERCIAL PARKING",
        "description": "Taller 5.5\" height curb stop engineered for commercial delivery bays, truck parking areas, and heavy SUV stalls.",
        "features": [
          "Extra 5.5\" Height",
          "Heavy Vehicle Stop",
          "Heavy Steel Reinforcement",
          "Freeze-Thaw Durable"
        ],
        "specCapacity": {
          "label": "VEHICLE FIT",
          "value": "Commercial Trucks/SUVs",
          "sub": "Delivery Bays"
        },
        "specDimensions": {
          "label": "DIMENSIONS",
          "value": "6' Long \u00d7 5.5\" High",
          "sub": "Heavy Profile"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Heavy Commercial Spec",
          "sub": "Deer Park NY Plant"
        },
        "image": "/images/products_3d/card_curb-stop-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "precast-slabs",
    "name": "Precast Concrete Slabs",
    "category": "infrastructure",
    "categoryBadge": "PAGES 63\u201384 \u00b7 TRAFFIC SLABS",
    "categoryLabel": "CIRCULAR SOLID & HS20 TRAFFIC SLABS",
    "summary": "6' to 12' Diameters Solid & Offset 24\" / 24\"\u00d748\" Cleanout Slabs",
    "description": "Heavy structural cover slabs manufactured in solid circular formats and with AASHTO HS20-44 vehicle traffic rated 24\" offset or 24\"\u00d748\" grate openings per Suffolk & Nassau County standards.",
    "image": "/images/products_3d/card_precast-slab-3d.png",
    "variables": [
      {
        "id": "slab-8ft-solid",
        "name": "8' \u00d7 8\" Circular Solid Slab",
        "shortName": "8'\u00d78\" Solid Slab",
        "badge": "SOLID COVER SLAB",
        "categoryLabel": "HEAVY STRUCTURAL SLABS",
        "description": "Heavy 8-foot circular precast concrete cover slab (8\" thickness) engineered with two-way ASTM A-615 Grade 60 rebar mat.",
        "features": [
          "Two-Way Rebar Mat",
          "Tongue & Groove Ring Fit",
          "8\" Structural Depth",
          "High Compressive Load"
        ],
        "specCapacity": {
          "label": "LOADING",
          "value": "Heavy Surcharge",
          "sub": "Soil & Pavement"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Circular Slab",
          "sub": "8\" Solid Depth"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A-615 Grade 60",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_precast-slab-3d.png",
        "href": "/#contact"
      },
      {
        "id": "slab-8ft-traffic-24",
        "name": "8' \u00d7 8\" Traffic Slab with 24\" Offset Opening",
        "shortName": "8' HS20 with 24\" Hole",
        "badge": "AASHTO HS20-44 RATED",
        "categoryLabel": "HIGHWAY TRAFFIC SLAB",
        "description": "Direct vehicle traffic rated 8-foot slab with standard 24\" offset opening for cast-iron manhole frame and cover installation.",
        "features": [
          "AASHTO HS20-44 Rated",
          "24\" Cast-Iron Seat",
          "Offset Access Position",
          "Suffolk DOT Highway"
        ],
        "specCapacity": {
          "label": "TRAFFIC RATING",
          "value": "AASHTO HS20-44",
          "sub": "Semi-Truck Wheel Load"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Diameter \u00d7 8\" Thick",
          "sub": "24\" Offset Hole"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Highway",
          "sub": "All Island Tested"
        },
        "image": "/images/products_3d/card_precast-slab-3d.png",
        "href": "/#contact"
      },
      {
        "id": "slab-8ft-traffic-2448",
        "name": "8' \u00d7 8\" Traffic Slab with 24\" \u00d7 48\" Opening",
        "shortName": "8' HS20 24\"\u00d748\" Inset",
        "badge": "RECTANGULAR GRATE FIT",
        "categoryLabel": "STORM DRAINAGE SLAB",
        "description": "Heavy traffic slab precast with 24\"\u00d748\" rectangular opening to seat state DOT curb inlets and large catch basin grates.",
        "features": [
          "24\"\u00d748\" Rectangular Seat",
          "Highway Wheel Loading",
          "Extra Rebar Perimeter",
          "Direct Road Placement"
        ],
        "specCapacity": {
          "label": "INLET PROFILE",
          "value": "24\"\u00d748\" Grate Seat",
          "sub": "High Storm Inflow"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Diameter \u00d7 8\" Thick",
          "sub": "24\"\u00d748\" Access"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "ASTM A1064 Rebar"
        },
        "image": "/images/products_3d/card_precast-slab-3d.png",
        "href": "/#contact"
      },
      {
        "id": "slab-10ft-traffic",
        "name": "10' \u00d7 10\" Traffic Slab with 24\" Opening",
        "shortName": "10'\u00d710\" HS20 Slab",
        "badge": "10FT HEAVY TRAFFIC",
        "categoryLabel": "HEAVY STRUCTURAL SLABS",
        "description": "10-foot wide, 10\" thick heavy structural highway slab built to cover large drywell chambers under active parking or road surfaces.",
        "features": [
          "10\" Extra Thick Concrete",
          "Double Steel Mat",
          "24\" Manhole Opening",
          "AASHTO HS20 Certified"
        ],
        "specCapacity": {
          "label": "TRAFFIC RATING",
          "value": "AASHTO HS20-44",
          "sub": "Extreme Highway Load"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "10' Diameter \u00d7 10\" Thick",
          "sub": "24\" Offset Access"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Civil",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_precast-slab-3d.png",
        "href": "/#contact"
      },
      {
        "id": "slab-12ft-traffic",
        "name": "12' \u00d7 10\" Traffic Slab with 24\" Opening",
        "shortName": "12'\u00d710\" HS20 Slab",
        "badge": "12FT MAX SPAN SLAB",
        "categoryLabel": "HEAVY STRUCTURAL SLABS",
        "description": "Massive 12-foot diameter heavy traffic slab engineered to bridge full municipal storm detention pools and deep vaults.",
        "features": [
          "12' Span Coverage",
          "Heavy Rigged Crane Picks",
          "Extreme Bending Strength",
          "Factory Cast in Deer Park"
        ],
        "specCapacity": {
          "label": "LOAD CAPACITY",
          "value": "AASHTO HS20-44",
          "sub": "Max Span Loading"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "12' Diameter \u00d7 10\" Thick",
          "sub": "24\" Opening"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A-615 Grade 60",
          "sub": "All Island Verified"
        },
        "image": "/images/products_3d/card_precast-slab-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "solid-rings",
    "name": "Precast Concrete Solid Rings",
    "category": "infrastructure",
    "categoryBadge": "PAGES 85\u2013102 \u00b7 SOLID RINGS",
    "categoryLabel": "MODULAR SOLID WALL UTILITY RINGS",
    "summary": "4' to 12' Diameters, 2' to 5' Modular Heights",
    "description": "Solid non-perforated modular precast rings with interlocking tongue-and-groove joint profiles engineered for building watertight utility vaults, pump stations, and manholes.",
    "image": "/images/products_3d/card_solid-ring-3d.png",
    "variables": [
      {
        "id": "sr-4ft",
        "name": "4' Diameter Solid Ring (2' & 4' Heights)",
        "shortName": "4' Solid Ring",
        "badge": "4FT MODULAR STACK",
        "categoryLabel": "UTILITY & MANHOLE RINGS",
        "description": "Standard 4-foot inside diameter solid concrete ring for municipal sanitary and storm manhole construction.",
        "features": [
          "Tongue & Groove Joint",
          "Watertight Mastic Seal",
          "Circular Rebar Cage",
          "5,000+ PSI Mix"
        ],
        "specCapacity": {
          "label": "DIAMETER",
          "value": "4' Inside Diameter",
          "sub": "Solid Wall"
        },
        "specDimensions": {
          "label": "HEIGHTS",
          "value": "2' and 4' Heights",
          "sub": "Modular Stacking"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM C478 Spec",
          "sub": "Suffolk County DOH"
        },
        "image": "/images/products_3d/card_solid-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "sr-8ft",
        "name": "8' Diameter Solid Ring (2', 3', 3.5', 4', 5' Heights)",
        "shortName": "8' Solid Ring",
        "badge": "8FT STANDARD STACK",
        "categoryLabel": "UTILITY & MANHOLE RINGS",
        "description": "The workhorse 8-foot solid precast ring available in 5 heights for precision elevation matching on commercial site utility vaults.",
        "features": [
          "5 Modular Heights",
          "Heavy Wall Thickness",
          "Double Lifting Anchors",
          "Long Island Production"
        ],
        "specCapacity": {
          "label": "DIAMETER",
          "value": "8' Inside Diameter",
          "sub": "Solid Chamber"
        },
        "specDimensions": {
          "label": "HEIGHTS",
          "value": "2', 3', 3.5', 4', 5' Heights",
          "sub": "Flexible Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Grade 60 Rebar"
        },
        "image": "/images/products_3d/card_solid-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "sr-10ft",
        "name": "10' Diameter Solid Ring (3', 4', 5' Heights)",
        "shortName": "10' Solid Ring",
        "badge": "10FT HEAVY VAULT",
        "categoryLabel": "UTILITY & MANHOLE RINGS",
        "description": "Large 10-foot diameter solid ring for high-volume storm retention, electrical transformer vaults, and sewer pump station wet wells.",
        "features": [
          "Large Internal Area",
          "Heavy Soil Surcharge",
          "Mastic Sealed Joints",
          "Flatbed Jobsite Delivery"
        ],
        "specCapacity": {
          "label": "DIAMETER",
          "value": "10' Inside Diameter",
          "sub": "Large Utility Vault"
        },
        "specDimensions": {
          "label": "HEIGHTS",
          "value": "3', 4', 5' Heights",
          "sub": "Deep Stacking"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM C478 Standard",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_solid-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "sr-12ft",
        "name": "12' Diameter Solid Ring (2', 3', 4' Heights)",
        "shortName": "12' Solid Ring",
        "badge": "12FT MAX DIAMETER",
        "categoryLabel": "UTILITY & MANHOLE RINGS",
        "description": "Maximum 12-foot diameter solid ring delivering massive retention volume for regional municipal civil infrastructure projects.",
        "features": [
          "12' Huge Diameter",
          "Overhead Crane Demolded",
          "Engineered Rebar Mat",
          "Deer Park Plant"
        ],
        "specCapacity": {
          "label": "DIAMETER",
          "value": "12' Inside Diameter",
          "sub": "Max Capacity Vault"
        },
        "specDimensions": {
          "label": "HEIGHTS",
          "value": "2', 3', 4' Heights",
          "sub": "Heavy Stacks"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOT",
          "sub": "AASHTO HS20-44"
        },
        "image": "/images/products_3d/card_solid-ring-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "sanitary-rings",
    "name": "Precast Concrete Sanitary Rings",
    "category": "infrastructure",
    "categoryBadge": "PAGES 103\u2013115 \u00b7 SANITARY",
    "categoryLabel": "PERFORATED SANITARY LEACHING RINGS",
    "summary": "4' to 10' Diameters Perforated Leaching Rings",
    "description": "Modular rings engineered with calibrated seepage apertures for sanitary leaching pools and wastewater drainage beds meeting Suffolk County Department of Health Services standards.",
    "image": "/images/products_3d/card_sanitary-ring-3d.png",
    "variables": [
      {
        "id": "san-8ft",
        "name": "8' Diameter Sanitary Ring (2', 3', 3.5', 4' Heights)",
        "shortName": "8' Sanitary Ring",
        "badge": "SUFFOLK DOH STANDARD",
        "categoryLabel": "SANITARY LEACHING POOLS",
        "description": "The primary sanitary leaching ring specified throughout Suffolk County for residential and commercial septic absorption pools.",
        "features": [
          "Calibrated Seepage Holes",
          "Soil Sand Percolation",
          "Interlocking Tongue & Groove",
          "5,000+ PSI Compressive"
        ],
        "specCapacity": {
          "label": "APPLICATION",
          "value": "Sanitary Leaching Pool",
          "sub": "Effluent Infiltration"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Inside Diameter",
          "sub": "2', 3', 3.5', 4' Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk County DOH",
          "sub": "Sanitary Leaching Code"
        },
        "image": "/images/products_3d/card_sanitary-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "san-10ft",
        "name": "10' Diameter Sanitary Ring (3', 4', 5' Heights)",
        "shortName": "10' Sanitary Ring",
        "badge": "COMMERCIAL LEACHING",
        "categoryLabel": "SANITARY LEACHING POOLS",
        "description": "High-volume 10-foot sanitary leaching ring for commercial office parks, multi-family developments, and restaurant septic systems.",
        "features": [
          "High Area Infiltration",
          "Perforated Wall Design",
          "ASTM A-615 Steel",
          "Heavy Earth Loading"
        ],
        "specCapacity": {
          "label": "PERCOLATION",
          "value": "High Absorption Area",
          "sub": "Commercial Septic"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "10' Inside Diameter",
          "sub": "3', 4', 5' Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOH",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_sanitary-ring-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "storm-rings",
    "name": "Precast Concrete Storm Rings",
    "category": "drainage",
    "categoryBadge": "PAGES 116\u2013127 \u00b7 STORM DRYWELL",
    "categoryLabel": "STORMWATER DRYWELL & DETENTION RINGS",
    "summary": "8' to 12' Diameters Storm Drainage Drywell Rings",
    "description": "Heavy civil perforated drywell rings designed with open intake flow apertures to rapidly capture, store, and recharge massive stormwater volumes into Long Island's sandy aquifers.",
    "image": "/images/products_3d/card_storm-ring-3d.png",
    "variables": [
      {
        "id": "stm-8ft",
        "name": "8' Diameter Storm Drywell Ring",
        "shortName": "8' Storm Ring",
        "badge": "STORM DRYWELL SPEC",
        "categoryLabel": "STORMWATER RECHARGE",
        "description": "Standard 8-foot drywell ring for road drainage runoff, parking lot catch basin recharge, and residential stormwater control.",
        "features": [
          "Engineered Seepage Holes",
          "Rapid Aquifer Recharge",
          "ASTM A1064 Rebar Web",
          "Highway Loading Capable"
        ],
        "specCapacity": {
          "label": "PERCOLATION",
          "value": "Rapid Storm Infiltration",
          "sub": "Long Island Sandy Soils"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Inside Diameter",
          "sub": "3', 3.5', 4' Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Highway",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_storm-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "stm-10ft",
        "name": "10' Diameter Storm Drywell Ring",
        "shortName": "10' Storm Ring",
        "badge": "MUNICIPAL STORM RUNOFF",
        "categoryLabel": "STORMWATER RECHARGE",
        "description": "10-foot diameter storm drywell ring handling large stormwater volumes from municipal street gutters and highway collectors.",
        "features": [
          "Large Volume Inflow",
          "Deep Trench Stacking",
          "Heavy Wall Strength",
          "All Island Tested"
        ],
        "specCapacity": {
          "label": "RETENTION",
          "value": "Municipal Drywell",
          "sub": "Heavy Rainfall Detention"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "10' Inside Diameter",
          "sub": "3', 4', 5' Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20-44",
          "sub": "Town & County Spec"
        },
        "image": "/images/products_3d/card_storm-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "stm-12ft",
        "name": "12' Diameter Storm Drywell Ring",
        "shortName": "12' Storm Ring",
        "badge": "MAX CAPACITY DRYWELL",
        "categoryLabel": "STORMWATER RECHARGE",
        "description": "Maximum 12-foot diameter precast storm drywell ring delivering the highest volume underground stormwater recharge chamber.",
        "features": [
          "12-Foot Huge Basin",
          "Massive Storage Area",
          "Overhead Crane Demolded",
          "AASHTO HS20 Surcharge"
        ],
        "specCapacity": {
          "label": "STORAGE",
          "value": "Maximum Infiltration",
          "sub": "Regional Stormwater"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "12' Inside Diameter",
          "sub": "2', 3', 4', 5' Heights"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Civil",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_storm-ring-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "footings",
    "name": "Precast Concrete Footing Rings",
    "category": "infrastructure",
    "categoryBadge": "PAGES 128\u2013134 \u00b7 FOOTINGS",
    "categoryLabel": "PRECAST FOUNDATION BEARING RINGS",
    "summary": "4' to 12' Diameters Base Footing Foundation Rings",
    "description": "Precast base foundation rings that provide a wide, stable bearing surface beneath solid and leaching ring stacks, preventing differential settlement in sandy soils.",
    "image": "/images/products_3d/card_footing-ring-3d.png",
    "variables": [
      {
        "id": "ft-4ft",
        "name": "4' Diameter Concrete Footing Ring",
        "shortName": "4' Footing",
        "badge": "4FT BASE FOOTING",
        "categoryLabel": "FOUNDATION BEARING RINGS",
        "description": "Foundation base ring providing stable bearing for 4-foot manholes and solid utility ring stacks.",
        "features": [
          "Wide Bearing Flange",
          "Prevents Settlement",
          "Circumferential Rebar",
          "5,000+ PSI Mix"
        ],
        "specCapacity": {
          "label": "BEARING CAPACITY",
          "value": "High Soil Bearing",
          "sub": "Settlement Prevention"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "4' Base Ring Fit",
          "sub": "Flanged Profile"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A-615 Steel",
          "sub": "Suffolk County Spec"
        },
        "image": "/images/products_3d/card_footing-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ft-8ft",
        "name": "8' Diameter Concrete Footing Ring",
        "shortName": "8' Footing",
        "badge": "8FT BASE FOOTING",
        "categoryLabel": "FOUNDATION BEARING RINGS",
        "description": "Standard foundation ring for 8-foot drywell and sanitary leaching stacks across Long Island commercial and residential sites.",
        "features": [
          "Stable Ring Support",
          "Heavy Radial Concrete",
          "Crane Lifting Holes",
          "Deer Park Plant"
        ],
        "specCapacity": {
          "label": "BEARING",
          "value": "Heavy Ring Stack Load",
          "sub": "Soil Load Spread"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "8' Base Ring Fit",
          "sub": "Flanged Footing"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau Civil",
          "sub": "5,000+ PSI Mix"
        },
        "image": "/images/products_3d/card_footing-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ft-10ft",
        "name": "10' Diameter Concrete Footing Ring",
        "shortName": "10' Footing",
        "badge": "10FT BASE FOOTING",
        "categoryLabel": "FOUNDATION BEARING RINGS",
        "description": "Heavy footing ring for 10-foot municipal drywell stacks and deep pump station structures.",
        "features": [
          "Wide Load Distribution",
          "Heavy Steel Rebar Web",
          "Precision Formwork",
          "Fast Flatbed Offload"
        ],
        "specCapacity": {
          "label": "BEARING",
          "value": "Deep Stack Support",
          "sub": "High Load Bearing"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "10' Base Ring Fit",
          "sub": "Heavy Flange"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "AASHTO HS20 Support",
          "sub": "Grade 60 Steel"
        },
        "image": "/images/products_3d/card_footing-ring-3d.png",
        "href": "/#contact"
      },
      {
        "id": "ft-12ft",
        "name": "12' Diameter Concrete Footing Ring",
        "shortName": "12' Footing",
        "badge": "12FT BASE FOOTING",
        "categoryLabel": "FOUNDATION BEARING RINGS",
        "description": "Maximum 12-foot foundation footing ring providing extreme structural support for massive 12-foot ring assemblies.",
        "features": [
          "12' Max Base Span",
          "Extreme Load Spread",
          "Dual Hook Crane Picks",
          "Factory Quality Assurance"
        ],
        "specCapacity": {
          "label": "BEARING",
          "value": "Maximum Base Load",
          "sub": "Sandy Soil Stability"
        },
        "specDimensions": {
          "label": "DIAMETER",
          "value": "12' Base Ring Fit",
          "sub": "Heavy Footing Base"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOT",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_footing-ring-3d.png",
        "href": "/#contact"
      }
    ]
  },
  {
    "id": "high-collars",
    "name": "Precast Concrete High Collars",
    "category": "utility",
    "categoryBadge": "PAGES 135\u2013140 \u00b7 GRADE RISERS",
    "categoryLabel": "GRADE ADJUSTMENT RISERS & COLLARS",
    "summary": "6\", 12\", 18\", and 24\" Grade Adjustment Collars",
    "description": "Modular precast grade adjustment collars used to precisely elevate catch basin grates, manhole covers, and inspection cleanouts to finished road or parking asphalt grades.",
    "image": "/images/products_3d/card_high-collar-3d.png",
    "variables": [
      {
        "id": "hc-6in",
        "name": "6\" High Collar Riser",
        "shortName": "6\" Collar",
        "badge": "6\" GRADE RISER",
        "categoryLabel": "ROAD GRADE ADJUSTMENT",
        "description": "6-inch height adjustment collar to bring catch basin or manhole rims up to finished paving surface.",
        "features": [
          "Exact 6\" Rise",
          "HS20 Wheel Impact",
          "Mastic Seat Ring",
          "Reinforced Concrete"
        ],
        "specCapacity": {
          "label": "IMPACT RATING",
          "value": "AASHTO HS20-44",
          "sub": "Pavement Wheel Impact"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "6\" Rise",
          "sub": "Standard Manhole Fit"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk Highway Dept",
          "sub": "5,000+ PSI Mix"
        },
        "image": "/images/products_3d/card_high-collar-3d.png",
        "href": "/#contact"
      },
      {
        "id": "hc-12in",
        "name": "12\" High Collar Riser",
        "shortName": "12\" Collar",
        "badge": "12\" GRADE RISER",
        "categoryLabel": "ROAD GRADE ADJUSTMENT",
        "description": "12-inch modular collar for 1-foot vertical adjustments to match road elevation changes.",
        "features": [
          "12\" Vertical Height",
          "Cast Iron Seat Ready",
          "Double Steel Wire",
          "Direct Plant Stock"
        ],
        "specCapacity": {
          "label": "IMPACT RATING",
          "value": "Heavy Traffic Load",
          "sub": "HS20-44 Highway"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "12\" Rise",
          "sub": "Standard Collar"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "ASTM A1064 Rebar",
          "sub": "Suffolk & Nassau DOT"
        },
        "image": "/images/products_3d/card_high-collar-3d.png",
        "href": "/#contact"
      },
      {
        "id": "hc-18in",
        "name": "18\" High Collar Riser",
        "shortName": "18\" Collar",
        "badge": "18\" GRADE RISER",
        "categoryLabel": "ROAD GRADE ADJUSTMENT",
        "description": "18-inch riser collar used when deep fill or thick sub-base gravel is placed above manhole domes.",
        "features": [
          "18\" Extended Height",
          "Interlocking Joints",
          "Heavy Surcharge Wall",
          "Easy Crane Lift"
        ],
        "specCapacity": {
          "label": "IMPACT RATING",
          "value": "AASHTO HS20-44",
          "sub": "Commercial Traffic"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "18\" Rise",
          "sub": "Deep Riser"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Nassau County Highway",
          "sub": "5,000+ PSI Concrete"
        },
        "image": "/images/products_3d/card_high-collar-3d.png",
        "href": "/#contact"
      },
      {
        "id": "hc-24in",
        "name": "24\" High Collar Riser",
        "shortName": "24\" Collar",
        "badge": "24\" GRADE RISER",
        "categoryLabel": "ROAD GRADE ADJUSTMENT",
        "description": "Full 24-inch (2-foot) high collar providing substantial grade elevation lift for deep utility installations.",
        "features": [
          "Full 24\" Height",
          "Eliminates Brick Risers",
          "Factory Interlock",
          "Deer Park Production"
        ],
        "specCapacity": {
          "label": "IMPACT RATING",
          "value": "Full Highway Traffic",
          "sub": "HS20 Surcharge"
        },
        "specDimensions": {
          "label": "HEIGHT",
          "value": "24\" Rise",
          "sub": "Maximum Single Collar"
        },
        "specStandards": {
          "label": "STANDARDS",
          "value": "Suffolk & Nassau DOT",
          "sub": "All Island Tested"
        },
        "image": "/images/products_3d/card_high-collar-3d.png",
        "href": "/#contact"
      }
    ]
  }
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
      className="py-16 sm:py-24 bg-white border-b border-[#D0E2F2] relative overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="section-container mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0E96E1] text-xs font-black tracking-widest uppercase mb-4 shadow-2xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#0E96E1] animate-pulse" />
            <span>ASTRO 2026 PRODUCT CATALOG · 14 DIVISIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] tracking-tight uppercase leading-tight">
            ENGINEERED PRECAST <span className="text-[#0E96E1]">PRODUCTS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#334155] leading-relaxed">
            Select any product line below to view models, dimensions, capacities, and DOT standards.
            Certified 5,000+ PSI compressive strength, AASHTO HS20-44 highway traffic rated,
            and engineered to exact Suffolk &amp; Nassau County standards from our Long Island plant.
          </p>
        </div>

        {/* 14 Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFamilyId("all")}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${activeFamilyId === "all"
                ? "bg-[#014088] text-white shadow-md scale-102"
                : "bg-[#F0F6FC] text-[#014088] border border-[#D0E2F2] hover:border-[#014088] hover:bg-white"
              }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0E96E1]" />
            <span>All Categories ({totalVariables} Models)</span>
          </button>

          {PRODUCT_FAMILIES.map((family) => {
            const isActive = activeFamilyId === family.id;
            return (
              <button
                key={family.id}
                type="button"
                onClick={() => setActiveFamilyId(family.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${isActive
                    ? "bg-[#0E96E1] text-white shadow-md scale-102"
                    : "bg-[#F0F6FC] text-[#014088] border border-[#D0E2F2] hover:border-[#0E96E1] hover:bg-white"
                  }`}
              >
                <span>{family.name.replace("Precast Concrete ", "")}</span>
                <span
                  className={`text-[10px] font-black px-1.5 py-0.5 rounded font-mono ${isActive
                      ? "bg-white text-[#0E96E1]"
                      : "bg-[#E0F2FE] text-[#014088]"
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

// ─── PER-FAMILY SLIDER COMPONENT ─────────────────────────────────────────────

interface ProductVariableSliderProps {
  family: ProductFamily;
  mounted: boolean;
}

function ProductVariableSlider({ family, mounted }: ProductVariableSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="bg-[#F8FAFC] border-2 border-[#D0E2F2] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Family Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-[#D0E2F2]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-[#014088] text-white">
              {family.categoryBadge}
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-[#0E96E1]">
              {family.categoryLabel}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#014088] uppercase tracking-tight">
            {family.name}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
            {family.description}
          </p>
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block text-[11px] font-mono font-bold text-[#64748B] mr-2">
            Model {currentSlideIndex + 1} of {family.variables.length}
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-xl border-2 border-[#D0E2F2] hover:border-[#014088] bg-white text-[#014088] hover:bg-[#F0F6FC] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Previous ${family.name} model`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-xl border-2 border-[#D0E2F2] hover:border-[#014088] bg-white text-[#014088] hover:bg-[#F0F6FC] flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label={`Next ${family.name} model`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Model Switcher Chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mr-1">
          Catalog Models:
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
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${isActive
                  ? "bg-[#014088] text-white border-[#014088] shadow-xs scale-102"
                  : "bg-white text-[#014088] border-[#D0E2F2] hover:border-[#0E96E1]"
                }`}
            >
              {variable.shortName}
            </button>
          );
        })}
      </div>

      {/* Variable Slider Stage */}
      {!mounted ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {family.variables.slice(0, 3).map((variable) => (
            <VariableCard key={variable.id} variable={variable} />
          ))}
        </div>
      ) : (
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

// ─── SINGLE VARIABLE / PRODUCT CARD COMPONENT ────────────────────────────────

interface VariableCardProps {
  variable: ProductVariable;
}

function VariableCard({ variable }: VariableCardProps) {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#D0E2F2] hover:border-[#0E96E1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* 1. HD 3D Render Image Container */}
      <div className="relative aspect-[4/3] w-full bg-[#F0F6FC] border-b border-[#D0E2F2] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={variable.image}
          alt={variable.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded bg-[#014088] text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
            {variable.badge}
          </span>
          <span className="px-2 py-0.5 rounded bg-white text-[#0E96E1] border border-sky-200 text-[10px] font-mono font-extrabold shadow-2xs">
            DEER PARK, NY
          </span>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0E96E1] mb-1.5 block font-mono">
            {variable.categoryLabel}
          </span>

          <h4 className="text-lg sm:text-xl font-black text-[#014088] group-hover:text-[#0E96E1] transition-colors leading-snug mb-2">
            {variable.name}
          </h4>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-normal min-h-[40px]">
            {variable.description}
          </p>

          {/* 3. Four Feature Badges */}
          <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-[#F0F6FC] mb-5">
            {variable.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] font-bold text-[#334155]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E96E1] shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* 4. Three-Column Technical Spec Box */}
          <div className="p-3.5 rounded-xl bg-[#F0F6FC] border border-[#D0E2F2] grid grid-cols-3 gap-2 mb-5">
            {/* Spec 1: Capacity */}
            <div className="min-w-0">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specCapacity.label}
              </span>
              <span className="text-xs font-black text-[#014088] block truncate">
                {variable.specCapacity.value}
              </span>
              {variable.specCapacity.sub && (
                <span className="text-[10px] text-[#64748B] block truncate">
                  {variable.specCapacity.sub}
                </span>
              )}
            </div>

            {/* Spec 2: Dimensions */}
            <div className="min-w-0 border-l border-[#D0E2F2] pl-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specDimensions.label}
              </span>
              <span className="text-xs font-black text-[#014088] block truncate">
                {variable.specDimensions.value}
              </span>
              {variable.specDimensions.sub && (
                <span className="text-[10px] text-[#64748B] block truncate">
                  {variable.specDimensions.sub}
                </span>
              )}
            </div>

            {/* Spec 3: Standards */}
            <div className="min-w-0 border-l border-[#D0E2F2] pl-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#64748B] block truncate font-mono">
                {variable.specStandards.label}
              </span>
              <span className="text-xs font-black text-[#014088] block truncate">
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

        {/* 5. Bottom Action Row */}
        <div className="pt-4 border-t border-[#F0F6FC] flex items-center justify-between">
          <Link
            href="/#contact"
            className="text-xs font-bold text-[#014088] hover:text-[#0E96E1] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Submittal Sheet</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/#contact"
            className="bg-[#0E96E1] hover:bg-[#0C82C4] text-white font-black py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 inline-flex items-center gap-1.5"
          >
            <span>RFQ Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
