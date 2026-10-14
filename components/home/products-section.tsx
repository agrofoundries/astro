"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  Search,
  ChevronDown,
  SlidersHorizontal,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Truck,
} from "lucide-react";

export interface ProductVariant {
  name: string;
  sku: string;
  dimensions: string;
  specStandard: string;
  loadRating: string;
}

export interface EcommerceProduct {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  drawingPdf: string;
  drawingFilename: string;
  variants: ProductVariant[];
}

const ECOMMERCE_PRODUCTS: EcommerceProduct[] = [
  {
    id: "catch-basins",
    category: "Catch Basins",
    title: "Precast Catch Basin System",
    description:
      "Monolithic concrete storm drainage catch basin with reinforced walls, custom pipe knockouts, and heavy highway traffic rating.",
    image: "/products-image-web/catch-basins.png",
    drawingPdf: "/downloads/drawings/Astro-Catch-Basins-Drawings.pdf",
    drawingFilename: "Astro-Catch-Basins-Drawings.pdf",
    variants: [
      {
        name: "18\" Diameter Round",
        sku: "ASTRO-CB-18",
        dimensions: "18\" ID × 36\" Depth",
        specStandard: "Suffolk & Nassau Approved",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "24\" Diameter Round",
        sku: "ASTRO-CB-24",
        dimensions: "24\" ID × 48\" Depth",
        specStandard: "Suffolk & Nassau Approved",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "30\" × 48\" Hexagon",
        sku: "ASTRO-CB-3048",
        dimensions: "30\" ID × 48\" Depth",
        specStandard: "Suffolk County DPW",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "36\" Diameter Round",
        sku: "ASTRO-CB-36",
        dimensions: "36\" ID × 48\" Depth",
        specStandard: "Heavy Highway Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "48\" (4 FT) Catch Basin",
        sku: "ASTRO-CB-48",
        dimensions: "48\" ID × 60\" Depth",
        specStandard: "Municipal Stormwater",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "60\" (5 FT) Catch Basin",
        sku: "ASTRO-CB-60",
        dimensions: "60\" ID × 72\" Depth",
        specStandard: "High-Volume Intake",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "septic-tanks",
    category: "Septic Tanks",
    title: "Precast Septic Tank (Monolithic)",
    description:
      "Heavy-duty precast residential and commercial septic tank engineered for watertight wastewater containment with cast-in baffles.",
    image: "/products-image-web/septic-tanks.png",
    drawingPdf: "/downloads/drawings/Astro-Septic-Tanks-Drawings.pdf",
    drawingFilename: "Astro-Septic-Tanks-Drawings.pdf",
    variants: [
      {
        name: "1,000 Gallon Monolithic",
        sku: "ASTRO-ST-1000",
        dimensions: "1,000 Gal · 4\" Wall Monolithic",
        specStandard: "ASTM C1227 Watertight",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "1,250 Gallon Monolithic",
        sku: "ASTRO-ST-1250",
        dimensions: "1,250 Gal · 4\" Wall Monolithic",
        specStandard: "ASTM C1227 Watertight",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "1,500 Gallon Monolithic",
        sku: "ASTRO-ST-1500",
        dimensions: "1,500 Gal · 4\" Wall Monolithic",
        specStandard: "Suffolk Health Dept Approved",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "2,000 Gallon Commercial",
        sku: "ASTRO-ST-2000",
        dimensions: "2,000 Gal · Dual Chamber",
        specStandard: "Commercial Sanitary Spec",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "2,500 Gallon High-Capacity",
        sku: "ASTRO-ST-2500",
        dimensions: "2,500 Gal · Heavy Monolithic",
        specStandard: "Commercial Sanitary Spec",
        loadRating: "H-20 Traffic Rated",
      },
    ],
  },
  {
    id: "leaching-galleys",
    category: "Leaching Galleys",
    title: "Precast Leaching Galley (High-Flow)",
    description:
      "Perforated precast stormwater infiltration galley designed for maximum soil percolation and groundwater recharge across Long Island.",
    image: "/products-image-web/leaching-galleys.png",
    drawingPdf: "/downloads/drawings/Astro-Leaching-Galleys-Drawings.pdf",
    drawingFilename: "Astro-Leaching-Galleys-Drawings.pdf",
    variants: [
      {
        name: "1 FT Galley Height",
        sku: "ASTRO-LG-1FT",
        dimensions: "4' Width × 8' Length × 1' Height",
        specStandard: "Suffolk DPW Approved",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "2 FT Galley Height",
        sku: "ASTRO-LG-2FT",
        dimensions: "4' Width × 8' Length × 2' Height",
        specStandard: "Suffolk DPW Approved",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "3 FT Galley Height",
        sku: "ASTRO-LG-3FT",
        dimensions: "4' Width × 8' Length × 3' Height",
        specStandard: "Suffolk DPW Approved",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "4 FT Standard Galley",
        sku: "ASTRO-LG-4FT",
        dimensions: "4' Width × 8' Length × 4' Height",
        specStandard: "Groundwater Recharge Spec",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "circular-slabs",
    category: "Circular Slabs",
    title: "Circular Traffic Slab",
    description:
      "Reinforced circular precast cover slab designed to withstand extreme highway wheel loads over subterranean drainage chambers.",
    image: "/products-image-web/circular-slabs.png",
    drawingPdf: "/downloads/drawings/Astro-Slabs-Drawings.pdf",
    drawingFilename: "Astro-Slabs-Drawings.pdf",
    variants: [
      {
        name: "4 FT Circular Solid Slab",
        sku: "ASTRO-SLAB-4FT",
        dimensions: "4' Diameter × 6\" Thickness",
        specStandard: "ASTM C478 & C39",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "6 FT Circular Solid Slab",
        sku: "ASTRO-SLAB-6FT",
        dimensions: "6' Diameter × 8\" Thickness",
        specStandard: "ASTM C478 & C39",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "8 FT Circular Solid Slab",
        sku: "ASTRO-SLAB-8FT",
        dimensions: "8' Diameter × 8\" Thickness",
        specStandard: "Highway Traffic Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "10 FT Circular Solid Slab",
        sku: "ASTRO-SLAB-10FT",
        dimensions: "10' Diameter × 10\" Thickness",
        specStandard: "Heavy Interstate Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "12 FT Circular Solid Slab",
        sku: "ASTRO-SLAB-12FT",
        dimensions: "12' Diameter × 12\" Thickness",
        specStandard: "Heavy Interstate Spec",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "grease-traps",
    category: "Grease Traps",
    title: "Precast Commercial Grease Interceptor",
    description:
      "Commercial kitchen FOG interceptor built with acid-resistant concrete mix and sanitary inspection manholes.",
    image: "/products-image-web/grease-traps.png",
    drawingPdf: "/downloads/drawings/Astro-Grease-Traps-Drawings.pdf",
    drawingFilename: "Astro-Grease-Traps-Drawings.pdf",
    variants: [
      {
        name: "1,000 Gallon Grease Trap",
        sku: "ASTRO-GT-1000",
        dimensions: "1,000 Gal FOG Capacity",
        specStandard: "Suffolk County Health Dept",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "1,250 Gallon Grease Trap",
        sku: "ASTRO-GT-1250",
        dimensions: "1,250 Gal FOG Capacity",
        specStandard: "Commercial Kitchen Spec",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "1,500 Gallon Grease Trap",
        sku: "ASTRO-GT-1500",
        dimensions: "1,500 Gal FOG Capacity",
        specStandard: "Restaurant & Food Service",
        loadRating: "H-20 Traffic Rated",
      },
      {
        name: "2,000 Gallon Grease Trap",
        sku: "ASTRO-GT-2000",
        dimensions: "2,000 Gal High FOG Volume",
        specStandard: "Industrial Pre-Treatment",
        loadRating: "H-20 Traffic Rated",
      },
    ],
  },
  {
    id: "d-boxes",
    category: "Distribution Boxes",
    title: "Precast Distribution Box",
    description:
      "Flow distribution box with multiple knockout ports and pipe seals for balanced effluent discharge to absorption fields.",
    image: "/products-image-web/d-boxes.png",
    drawingPdf: "/downloads/drawings/Astro-Distribution-Boxes-Drawings.pdf",
    drawingFilename: "Astro-Distribution-Boxes-Drawings.pdf",
    variants: [
      {
        name: "6-Hole Standard Distribution",
        sku: "ASTRO-DBOX-06",
        dimensions: "6 Knockout Ports (4\" PVC)",
        specStandard: "Monolithic Watertight",
        loadRating: "Pedestrian / H-20",
      },
      {
        name: "8-Hole High Capacity",
        sku: "ASTRO-DBOX-08",
        dimensions: "8 Knockout Ports (4\" PVC)",
        specStandard: "Flow Equalizer Levelers",
        loadRating: "Pedestrian / H-20",
      },
    ],
  },
  {
    id: "solid-rings",
    category: "Solid Rings",
    title: "Precast Solid Riser Ring",
    description:
      "Solid concrete grade ring for precise height adjustment of manholes, catch basins, and utility vaults to road grade.",
    image: "/products-image-web/solid-rings.png",
    drawingPdf: "/downloads/drawings/Astro-Solid-Rings-Drawings.pdf",
    drawingFilename: "Astro-Solid-Rings-Drawings.pdf",
    variants: [
      {
        name: "4 FT Diameter Solid Ring",
        sku: "ASTRO-RNG-4",
        dimensions: "4' ID × 4\" to 12\" Heights",
        specStandard: "ASTM C478 Grade",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "6 FT Diameter Solid Ring",
        sku: "ASTRO-RNG-6",
        dimensions: "6' ID × 4\" to 12\" Heights",
        specStandard: "ASTM C478 Grade",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "8 FT Diameter Solid Ring",
        sku: "ASTRO-RNG-8",
        dimensions: "8' ID × 4\" to 12\" Heights",
        specStandard: "ASTM C478 Grade",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "10 FT Diameter Solid Ring",
        sku: "ASTRO-RNG-10",
        dimensions: "10' ID × 4\" to 12\" Heights",
        specStandard: "5,000+ PSI Concrete",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "12 FT Diameter Solid Ring",
        sku: "ASTRO-RNG-12",
        dimensions: "12' ID × 4\" to 12\" Heights",
        specStandard: "5,000+ PSI Concrete",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "sanitary-rings",
    category: "Sanitary Rings",
    title: "Precast Sanitary Riser Ring",
    description:
      "Interlocking tongue-and-groove sanitary riser section with gasketed joint for municipal sanitary sewer manholes.",
    image: "/products-image-web/sanitary-rings.png",
    drawingPdf: "/downloads/drawings/Astro-Sanitary-Rings-Drawings.pdf",
    drawingFilename: "Astro-Sanitary-Rings-Drawings.pdf",
    variants: [
      {
        name: "4 FT Sanitary Interlock",
        sku: "ASTRO-SAN-4",
        dimensions: "4' ID Interlocking Section",
        specStandard: "Watertight Rubber O-Ring",
        loadRating: "ASTM C39 Certified",
      },
      {
        name: "6 FT Sanitary Interlock",
        sku: "ASTRO-SAN-6",
        dimensions: "6' ID Interlocking Section",
        specStandard: "Watertight Rubber O-Ring",
        loadRating: "ASTM C39 Certified",
      },
      {
        name: "8 FT Sanitary Interlock",
        sku: "ASTRO-SAN-8",
        dimensions: "8' ID Interlocking Section",
        specStandard: "Municipal Sewer Spec",
        loadRating: "ASTM C39 Certified",
      },
      {
        name: "10 FT Sanitary Interlock",
        sku: "ASTRO-SAN-10",
        dimensions: "10' ID Interlocking Section",
        specStandard: "Municipal Sewer Spec",
        loadRating: "ASTM C39 Certified",
      },
    ],
  },
  {
    id: "storm-rings",
    category: "Storm Rings",
    title: "Precast Storm Drainage Ring",
    description:
      "Heavy-wall round concrete storm section engineered for deep vertical storm sewer drywell installations.",
    image: "/products-image-web/storm-rings.png",
    drawingPdf: "/downloads/drawings/Astro-Storm-Rings-Drawings.pdf",
    drawingFilename: "Astro-Storm-Rings-Drawings.pdf",
    variants: [
      {
        name: "8 FT Storm Section",
        sku: "ASTRO-STRM-8",
        dimensions: "8' ID × 2' to 4' Heights",
        specStandard: "Highway Storm Drainage",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "10 FT Storm Section",
        sku: "ASTRO-STRM-10",
        dimensions: "10' ID × 3' to 5' Heights",
        specStandard: "Drywell Stormwater Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "12 FT Storm Section",
        sku: "ASTRO-STRM-12",
        dimensions: "12' ID × 2' to 5' Heights",
        specStandard: "High Retention Volume",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "footing-rings",
    category: "Footing Rings",
    title: "Precast Base Footing Ring",
    description:
      "Flanged base footing collar providing broad load distribution and foundational stability in sandy or wet soils.",
    image: "/products-image-web/footing-rings.png",
    drawingPdf: "/downloads/drawings/Astro-Footings-Drawings.pdf",
    drawingFilename: "Astro-Footings-Drawings.pdf",
    variants: [
      {
        name: "4 FT Footing Collar",
        sku: "ASTRO-FOOT-4",
        dimensions: "4' ID Wide Base Collar",
        specStandard: "5,000+ PSI Mix",
        loadRating: "High Soil Bearing",
      },
      {
        name: "6 FT Footing Collar",
        sku: "ASTRO-FOOT-6",
        dimensions: "6' ID Wide Base Collar",
        specStandard: "5,000+ PSI Mix",
        loadRating: "High Soil Bearing",
      },
      {
        name: "8 FT Footing Collar",
        sku: "ASTRO-FOOT-8",
        dimensions: "8' ID Wide Base Collar",
        specStandard: "5,000+ PSI Mix",
        loadRating: "High Soil Bearing",
      },
      {
        name: "10 FT Footing Collar",
        sku: "ASTRO-FOOT-10",
        dimensions: "10' ID Wide Base Collar",
        specStandard: "Sandy Soil Stabilization",
        loadRating: "High Soil Bearing",
      },
      {
        name: "12 FT Footing Collar",
        sku: "ASTRO-FOOT-12",
        dimensions: "12' ID Wide Base Collar",
        specStandard: "Heavy Foundation Spec",
        loadRating: "High Soil Bearing",
      },
    ],
  },
  {
    id: "high-domes",
    category: "High Domes",
    title: "Precast High Dome Cone Top",
    description:
      "Tapered conical dome top transitioning large drywell or cesspool diameters to standard 24\" or 30\" street access frames.",
    image: "/products-image-web/high-domes.png",
    drawingPdf: "/downloads/drawings/Astro-High-Domes-Drawings.pdf",
    drawingFilename: "Astro-High-Domes-Drawings.pdf",
    variants: [
      {
        name: "6 FT High Dome Cone",
        sku: "ASTRO-DOME-H6",
        dimensions: "6' Base to 30\" Opening",
        specStandard: "Suffolk County DPW",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "8 FT High Dome Cone",
        sku: "ASTRO-DOME-H8",
        dimensions: "8' Base to 30\" Opening",
        specStandard: "Suffolk County DPW",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "10 FT High Dome Cone",
        sku: "ASTRO-DOME-H10",
        dimensions: "10' Base to 30\" Opening",
        specStandard: "Heavy Conical Transfer",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "low-domes",
    category: "Low Domes",
    title: "Precast Low Dome Top",
    description:
      "Low-profile transition top engineered for shallow subgrade depths where vertical overhead clearance is constrained.",
    image: "/products-image-web/low-domes.png",
    drawingPdf: "/downloads/drawings/Astro-Low-Domes-Drawings.pdf",
    drawingFilename: "Astro-Low-Domes-Drawings.pdf",
    variants: [
      {
        name: "6 FT Low Dome Top",
        sku: "ASTRO-DOME-L6",
        dimensions: "6' Low Shallow Profile",
        specStandard: "Shallow Clearance Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "8 FT Low Dome Top",
        sku: "ASTRO-DOME-L8",
        dimensions: "8' Low Shallow Profile",
        specStandard: "Shallow Clearance Spec",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "10 FT Low Dome Top",
        sku: "ASTRO-DOME-L10",
        dimensions: "10' Low Shallow Profile",
        specStandard: "Constrained Subgrade",
        loadRating: "AASHTO HS20-44",
      },
      {
        name: "12 FT Low Dome Top",
        sku: "ASTRO-DOME-L12",
        dimensions: "12' Low Shallow Profile",
        specStandard: "Constrained Subgrade",
        loadRating: "AASHTO HS20-44",
      },
    ],
  },
  {
    id: "high-collars",
    category: "High Collars",
    title: "Precast High Collar Section",
    description:
      "Tall cylindrical collar section providing vertical clearance and easy access riser height above precast tanks.",
    image: "/products-image-web/high-collars.png",
    drawingPdf: "/downloads/drawings/Astro-High-Collars-Drawings.pdf",
    drawingFilename: "Astro-High-Collars-Drawings.pdf",
    variants: [
      {
        name: "6\" High Collar Extension",
        sku: "ASTRO-COL-06",
        dimensions: "6\" Vertical Extension",
        specStandard: "ASTM C478 Spec",
        loadRating: "Heavy Highway Spec",
      },
      {
        name: "12\" High Collar Extension",
        sku: "ASTRO-COL-12",
        dimensions: "12\" Vertical Extension",
        specStandard: "ASTM C478 Spec",
        loadRating: "Heavy Highway Spec",
      },
      {
        name: "18\" High Collar Extension",
        sku: "ASTRO-COL-18",
        dimensions: "18\" Vertical Extension",
        specStandard: "ASTM C478 Spec",
        loadRating: "Heavy Highway Spec",
      },
      {
        name: "24\" High Collar Extension",
        sku: "ASTRO-COL-24",
        dimensions: "24\" Vertical Extension",
        specStandard: "Deep Subgrade Access",
        loadRating: "Heavy Highway Spec",
      },
    ],
  },
  {
    id: "curb-stops",
    category: "Curb Stops",
    title: "Precast Concrete Curb Stop",
    description:
      "Heavy-duty commercial parking bumper with cast-in anchor holes and beveled edges to protect vehicular tires.",
    image: "/products-image-web/curb-stops.png",
    drawingPdf: "/downloads/drawings/Astro-Curb-Stops-Drawings.pdf",
    drawingFilename: "Astro-Curb-Stops-Drawings.pdf",
    variants: [
      {
        name: "4.5 FT Curb Stop",
        sku: "ASTRO-CURB-45",
        dimensions: "4.5 FT × 5\" H × 7\" Base",
        specStandard: "High-Strength Mix",
        loadRating: "Commercial Parking",
      },
      {
        name: "5.5 FT Curb Stop",
        sku: "ASTRO-CURB-55",
        dimensions: "5.5 FT × 5\" H × 7\" Base",
        specStandard: "High-Strength Mix",
        loadRating: "Commercial Parking",
      },
    ],
  },
  {
    id: "gravity-blocks",
    category: "Gravity Blocks",
    title: "Precast Gravity Retaining Block",
    description:
      "Interlocking high-mass concrete block designed for earth retention, soil stabilization, and material bulk storage bays.",
    image: "/products-image-web/gravity-blocks.png",
    drawingPdf: "/downloads/drawings/Astro-Catch-Basins-Drawings.pdf",
    drawingFilename: "Astro-Catch-Basins-Drawings.pdf",
    variants: [
      {
        name: "Modular Interlock Block",
        sku: "ASTRO-GRAV-STD",
        dimensions: "2' × 2' × 4' Block Unit",
        specStandard: "5,000+ PSI Concrete",
        loadRating: "Earth Retention Spec",
      },
      {
        name: "Half-Size End Unit",
        sku: "ASTRO-GRAV-HALF",
        dimensions: "2' × 2' × 2' Block Unit",
        specStandard: "5,000+ PSI Concrete",
        loadRating: "Finished End Cap",
      },
    ],
  },
  {
    id: "trench-grates",
    category: "Trench Grates",
    title: "Precast Linear Trench Grate Section",
    description:
      "Continuous linear drainage channel with heavy cast-iron grating frame for rapid surface runoff along roadways and loading docks.",
    image: "/products-image-web/trench-grates.png",
    drawingPdf: "/downloads/drawings/Astro-Catch-Basins-Drawings.pdf",
    drawingFilename: "Astro-Catch-Basins-Drawings.pdf",
    variants: [
      {
        name: "4 FT Trench Channel",
        sku: "ASTRO-TR-04",
        dimensions: "4' Channel × Heavy Grating",
        specStandard: "Cast-Iron Grate Frame",
        loadRating: "Heavy Industrial Traffic",
      },
      {
        name: "8 FT Trench Channel",
        sku: "ASTRO-TR-08",
        dimensions: "8' Channel × Heavy Grating",
        specStandard: "Cast-Iron Grate Frame",
        loadRating: "Heavy Industrial Traffic",
      },
      {
        name: "12 FT Interlocking Section",
        sku: "ASTRO-TR-12",
        dimensions: "12' Channel × Heavy Grating",
        specStandard: "Cast-Iron Grate Frame",
        loadRating: "Heavy Industrial Traffic",
      },
    ],
  },
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});

  const filteredProducts = useMemo(() => {
    return ECOMMERCE_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.title.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.variants.some(
          (v) =>
            v.name.toLowerCase().includes(q) ||
            v.sku.toLowerCase().includes(q) ||
            v.dimensions.toLowerCase().includes(q)
        );

      const matchesRating =
        selectedRating === "all" ||
        product.variants.some((v) =>
          v.loadRating.toLowerCase().includes(selectedRating.toLowerCase()) ||
          v.specStandard.toLowerCase().includes(selectedRating.toLowerCase())
        );

      return matchesCategory && matchesSearch && matchesRating;
    });
  }, [selectedCategory, selectedRating, searchQuery]);

  return (
    <section
      id="products"
      className="w-full bg-[#EEF6FF] border-y-2 border-[#93C5FD] py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="section-container-wide">
        {/* Section Header: Centered, Eye-Catching & Highly Presentable */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014088] text-white text-xs sm:text-[13px] font-mono font-black uppercase tracking-wider mb-4 shadow-sm border border-[#0E96E1]/30">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0088E0]" />
            <span>DEER PARK PRODUCTION PLANT · 16 CERTIFIED CATEGORIES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black text-[#014088] uppercase leading-[1.08] tracking-wide">
            ENGINEERED PRECAST <span className="text-[#0088E0]">PRODUCTS</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-800 mt-4 font-medium leading-relaxed max-w-3xl mx-auto">
            Select category and dimensions below to review real-time model specifications, highway load ratings, and download stamped CAD drawings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 font-mono text-[11px] sm:text-xs font-bold text-[#014088]">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0088E0]" />
              5,000+ PSI COMPRESSIVE STRENGTH
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0088E0]" />
              AASHTO HS20-44 TRAFFIC RATED
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0088E0]" />
              SUFFOLK &amp; NASSAU APPROVED
            </span>
          </div>
        </div>

        {/* E-COMMERCE SIMPLE SELECT BOX FILTER BAR - BRIGHT HIGH CONTRAST */}
        <div className="bg-white rounded-2xl border-2 border-[#93C5FD] p-5 sm:p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* 1. Category Select Box */}
            <div>
              <label className="block text-xs font-mono font-black text-[#014088] uppercase tracking-wider mb-2">
                Product Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#0088E0] focus:border-[#014088] text-xs font-black text-[#014088] cursor-pointer appearance-none transition-colors shadow-2xs"
                >
                  <option value="all">All Categories (16 Systems)</option>
                  <option value="Catch Basins">Catch Basins (18"–60")</option>
                  <option value="Septic Tanks">Septic Tanks (1,000G–2,500G)</option>
                  <option value="Leaching Galleys">Leaching Galleys (1'–4' H)</option>
                  <option value="Circular Slabs">Circular Slabs (4'–12' Dia)</option>
                  <option value="Grease Traps">Grease Traps (1,000G–2,000G)</option>
                  <option value="Distribution Boxes">Distribution Boxes</option>
                  <option value="Solid Rings">Solid Rings (4'–12')</option>
                  <option value="Sanitary Rings">Sanitary Rings (Gasketed)</option>
                  <option value="Storm Rings">Storm Rings (8'–12')</option>
                  <option value="Footing Rings">Footing Rings (4'–12')</option>
                  <option value="High Domes">High Domes (6'–10')</option>
                  <option value="Low Domes">Low Domes (6'–12')</option>
                  <option value="High Collars">High Collars (6"–24")</option>
                  <option value="Curb Stops">Curb Stops (4.5' &amp; 5.5')</option>
                  <option value="Gravity Blocks">Gravity Retaining Blocks</option>
                  <option value="Trench Grates">Linear Trench Grates</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#014088] pointer-events-none" />
              </div>
            </div>

            {/* 2. Specification Rating Select Box */}
            <div>
              <label className="block text-xs font-mono font-black text-[#014088] uppercase tracking-wider mb-2">
                Load &amp; DOT Specification
              </label>
              <div className="relative">
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#0088E0] focus:border-[#014088] text-xs font-black text-[#014088] cursor-pointer appearance-none transition-colors shadow-2xs"
                >
                  <option value="all">All Standards &amp; Ratings</option>
                  <option value="AASHTO HS20-44">AASHTO HS20-44 Highway Traffic</option>
                  <option value="H-20 Traffic Rated">H-20 Heavy Traffic Load</option>
                  <option value="ASTM C1227">ASTM C1227 Watertight Spec</option>
                  <option value="Suffolk">Suffolk County DPW / Health Dept</option>
                  <option value="5,000+ PSI">5,000+ PSI Concrete Mix</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#014088] pointer-events-none" />
              </div>
            </div>

            {/* 3. Search Input Box */}
            <div>
              <label className="block text-xs font-mono font-black text-[#014088] uppercase tracking-wider mb-2">
                Search Model or Size
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="E.g. 1500 gal, 30-48, slab..."
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border-2 border-[#93C5FD] focus:border-[#0088E0] text-xs font-bold text-slate-900 placeholder-slate-500 focus:outline-none transition-colors shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 4. Active Filters Reset & Count */}
            <div>
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#EFF6FF] border-2 border-[#93C5FD] text-xs font-mono font-black text-[#014088]">
                <span>
                  Showing <strong>{filteredProducts.length}</strong> / 16 Categories
                </span>
                {(selectedCategory !== "all" || selectedRating !== "all" || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedRating("all");
                      setSearchQuery("");
                    }}
                    className="text-xs font-black text-[#0088E0] hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 PRODUCTS PER ROW E-COMMERCE GRID */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-dashed border-[#93C5FD] p-12 text-center my-6">
            <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#014088] uppercase tracking-wide">
              No matching products found
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed font-medium">
              Try clearing your search query or choosing another category from the select box.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedRating("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-[#014088] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => {
              const activeIndex = selectedVariants[product.id] ?? 0;
              const currentVariant = product.variants[activeIndex] || product.variants[0];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border-2 border-[#93C5FD] hover:border-[#0088E0] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* 1. Cropped 3D Product Image with Bright Sky Stage */}
                  <div>
                    <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#EBF5FF] via-[#E1EFFF] to-[#CBE4FC] border-b-2 border-[#93C5FD] flex items-center justify-center p-4 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Badge top-right */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[10.5px] font-black uppercase tracking-wider bg-[#014088] text-white shadow-sm font-mono border border-white/20">
                          {currentVariant.loadRating}
                        </span>
                      </div>

                      {/* Category pill bottom-left */}
                      <div className="absolute bottom-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[10.5px] font-black uppercase tracking-wider bg-white text-[#014088] border-2 border-[#93C5FD] font-mono shadow-xs">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* 2. Title, SKU and Description - High Contrast Black & Navy */}
                    <div className="p-4 sm:p-5">
                      <div className="font-mono text-xs font-black text-[#0088E0] tracking-wider mb-1.5 uppercase">
                        SKU: {currentVariant.sku}
                      </div>

                      <h3 className="text-base font-black text-[#014088] uppercase tracking-wide group-hover:text-[#0088E0] transition-colors leading-[1.3] line-clamp-2 mb-2">
                        {product.title}
                      </h3>

                      <p className="text-[13px] text-slate-800 line-clamp-2 leading-relaxed mb-3.5 font-medium">
                        {product.description}
                      </p>

                      {/* E-Commerce Professional Size Select Box */}
                      <div className="mb-3.5">
                        <label className="block text-[11px] font-mono font-black text-[#014088] uppercase tracking-wider mb-1">
                          Select Size / Dimension:
                        </label>
                        <div className="relative">
                          <select
                            value={activeIndex}
                            onChange={(e) =>
                              setSelectedVariants({
                                ...selectedVariants,
                                [product.id]: Number(e.target.value),
                              })
                            }
                            className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#0088E0] focus:border-[#014088] text-xs font-black font-mono text-[#014088] cursor-pointer appearance-none transition-colors shadow-2xs"
                          >
                            {product.variants.map((v, idx) => (
                              <option key={idx} value={idx}>
                                {v.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#014088] pointer-events-none" />
                        </div>
                      </div>

                      {/* Dynamic Specs Box - High Contrast */}
                      <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#E1EDF8] space-y-1.5 text-xs font-mono text-slate-900 leading-normal">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 font-sans text-xs font-bold">Specs:</span>
                          <span className="font-black text-[#014088]">{currentVariant.dimensions}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 font-sans text-xs font-bold">Standard:</span>
                          <span className="font-black text-[#0088E0]">{currentVariant.specStandard}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. E-Commerce Actions (Download Drawing + Request Quote) */}
                  <div className="p-4 sm:p-5 pt-0 space-y-2.5">
                    {/* Download Drawing Button */}
                    <a
                      href={product.drawingPdf}
                      download={product.drawingFilename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0088E0] hover:bg-[#0077CC] text-white text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
                      title={`Download ${product.title} CAD Drawings`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download CAD Drawing</span>
                    </a>

                    {/* Request Quote Button */}
                    <Link
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#014088] hover:bg-[#012D5E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
                    >
                      <span>Request Contractor Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
