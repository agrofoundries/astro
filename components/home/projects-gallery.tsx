"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Layers,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Grid3X3,
  Sparkles,
  GalleryHorizontalEnd,
  Layers3,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Thumbs,
  FreeMode,
  Keyboard,
  A11y,
} from "swiper/modules";

interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: string;
  precastSystem: string;
  scopeOfWork: string;
  engineeringDetails: string;
  image: string;
  badge: string;
  specHighlight: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    name: "North Logistics Distribution Hub",
    location: "Dallas–Fort Worth Metroplex, TX",
    category: "Industrial Facilities",
    precastSystem: "Insulated Precast Concrete Sandwich Wall Panels",
    scopeOfWork:
      "Structural design calculations, wind load analysis, connection detailing, and fabrication piece tickets.",
    engineeringDetails:
      "9.5-inch composite panels with continuous XPS insulation layer; engineered connection plates welded to perimeter structural steel columns.",
    image: "/images/wall-panels.jpg",
    badge: "PCI MNL-120 Certified",
    specHighlight: "240,000 SF • R-24 Continuous",
  },
  {
    id: "proj-2",
    name: "Midwest Regional Medical Campus Parking Structure",
    location: "Indianapolis, IN",
    category: "Parking Garages",
    precastSystem: "Precast Prestressed Double Tees & Shear Walls",
    scopeOfWork:
      "Shop detailing, Tekla LOD 400 BIM modeling, gravity and lateral diaphragm design coordination.",
    engineeringDetails:
      "10-foot wide by 60-foot clear-span double tees with cast-in-place composite topping slab; field-welded flange connectors.",
    image: "/images/hero-precast.jpg",
    badge: "LOD 400 Tekla Twin",
    specHighlight: "60 FT Span • 8,500 PSI High-Early",
  },
  {
    id: "proj-3",
    name: "Metropolitan Corporate Center Facade",
    location: "Atlanta, GA",
    category: "Commercial Buildings",
    precastSystem: "Architectural Precast Panels with Integrated Glazing Returns",
    scopeOfWork:
      "Thermal envelope analysis, anchor bracket design, and seismic displacement engineering.",
    engineeringDetails:
      "White cement aggregate mix with acid-etched architectural finish; slotted bolted connection clips permitting thermal movement.",
    image: "/images/commercial-building.jpg",
    badge: "LEED Gold Envelope",
    specHighlight: "Acid-Etch Quartz • Seismic Drift Clips",
  },
  {
    id: "proj-4",
    name: "State Highway 14 Bridge Replacement",
    location: "Denver, CO",
    category: "Bridges & Infrastructure",
    precastSystem: "AASHTO Type IV Prestressed Concrete Bridge Girders",
    scopeOfWork:
      "Prestress loss calculations, camber control, lifting loop design, and DOT erection submittals.",
    engineeringDetails:
      "High-strength 8,500 psi concrete girders with 0.6-inch low-relaxation prestressing strands and elastomeric bearing pad design.",
    image: "/images/infrastructure.jpg",
    badge: "State DOT & AASHTO",
    specHighlight: "140 FT Girders • 0.6\" Low-Relaxation",
  },
  {
    id: "proj-5",
    name: "Grand Canyon Rail Viaduct & Overpass",
    location: "Flagstaff, AZ",
    category: "Bridges & Infrastructure",
    precastSystem: "Post-Tensioned Segmental Box Girders",
    scopeOfWork:
      "Multi-stage segmental analysis, cantilever crane erection sequencing, and dynamic train impact ratings.",
    engineeringDetails:
      "Dual post-tensioned tendon anchorages with internal grouted ducts, designed to resist Cooper E-80 rail train loading.",
    image: "/images/slider-revolution/viabg.jpg",
    badge: "AREMA Railway Standard",
    specHighlight: "Cooper E-80 • Cantilever Erection",
  },
  {
    id: "proj-6",
    name: "High-Speed Mountain Rail Tunnel Portal",
    location: "Cascade Range, WA",
    category: "Tunnels & Heavy Civil",
    precastSystem: "Segmented Precast Tunnel Liner Rings",
    scopeOfWork:
      "Hydrostatic external head pressure, geotechnical rock-socket anchorage, and rapid gasketed lock joints.",
    engineeringDetails:
      "Steel-fiber reinforced C60/75 precast segments with vulcanized EPDM gaskets engineered for 5.0 bar water ingress pressure.",
    image: "/images/slider-revolution/tunnelssss.jpg",
    badge: "ITA-AITES Compliant",
    specHighlight: "5.0 Bar Waterproof • Steel-Fiber C60",
  },
  {
    id: "proj-7",
    name: "Hydroelectric Dam Spillway Precast Decking",
    location: "Columbia River Basin, OR",
    category: "Tunnels & Heavy Civil",
    precastSystem: "Mass Precast Slabs & Heavy Scour Deflector Units",
    scopeOfWork:
      "High-velocity water scour resistance, stainless steel embedded shear keys, and heavy barge crane placement.",
    engineeringDetails:
      "Micro-silica dense matrix precast units resistant to cavitation erosion up to 65 ft/sec hydraulic discharge velocities.",
    image: "/images/slider-revolution/damdam.jpg",
    badge: "USACE Standard",
    specHighlight: "65 FPS Scour Resistant • Silica Fume",
  },
  {
    id: "proj-8",
    name: "University STEM Science Center",
    location: "Columbus, OH",
    category: "Commercial Buildings",
    precastSystem: "Precast Spandrel Beams & Architectural Cladding",
    scopeOfWork:
      "Shop drawings, connection engineering, and crane lift rigging plans with stringent deflection controls.",
    engineeringDetails:
      "Load-bearing exterior spandrels carrying precast hollow-core floor planks, designed to meet strict optical microscope vibration criteria.",
    image: "/images/manufacturing.jpg",
    badge: "AISC & PCI Combined",
    specHighlight: "VC-A Vibration Spec • Hollow-Core Ties",
  },
];

const CATEGORIES = [
  "All Projects",
  "Commercial Buildings",
  "Industrial Facilities",
  "Parking Garages",
  "Bridges & Infrastructure",
  "Tunnels & Heavy Civil",
];

type SliderEffect = "carousel" | "coverflow" | "thumbs";
type ViewMode = "slider" | "grid";

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [sliderEffect, setSliderEffect] = useState<SliderEffect>("carousel");
  const [viewMode, setViewMode] = useState<ViewMode>("slider");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Swiper Thumbs reference
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const mainSwiperRef = useRef<SwiperClass | null>(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const toggleAutoplay = () => {
    if (!mainSwiperRef.current) return;
    if (isPlaying) {
      mainSwiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      mainSwiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <section id="projects" className="bg-[#FAFBFD] border-b border-[#DCE5F0] py-16 lg:py-24 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F3FF] border border-[#DCE5F0] rounded-full text-xs font-semibold text-[#01255F] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D7030F]" />
              <span>Interactive Precast Showcase</span>
              <span className="text-[#64748B] text-[10px]">Powered by SwiperJS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#01255F] tracking-tight">
              Projects and Structural Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2">
              Explore engineered prestressed girders, architectural facades, and heavy infrastructure delivered to exact DOT and PCI standards.
            </p>
          </div>

          {/* Master View Toggles & Swiper Mode Selector */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {/* View Mode: Slider vs Grid */}
            <div className="inline-flex bg-white p-1 rounded-lg border border-[#DCE5F0] shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("slider")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  viewMode === "slider"
                    ? "bg-[#01255F] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#01255F]"
                }`}
                title="Swiper Slider View"
              >
                <GalleryHorizontalEnd className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#01255F] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#01255F]"
                }`}
                title="Grid View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Slider Effects Options (Visible when in Slider Mode) */}
            {viewMode === "slider" && (
              <div className="inline-flex bg-white p-1 rounded-lg border border-[#DCE5F0] shadow-xs">
                <button
                  type="button"
                  onClick={() => setSliderEffect("carousel")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    sliderEffect === "carousel"
                      ? "bg-[#F2F7FF] text-[#01255F] font-bold border border-[#DCE5F0]"
                      : "text-[#64748B] hover:text-[#01255F]"
                  }`}
                >
                  Carousel
                </button>
                <button
                  type="button"
                  onClick={() => setSliderEffect("coverflow")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                    sliderEffect === "coverflow"
                      ? "bg-[#F2F7FF] text-[#01255F] font-bold border border-[#DCE5F0]"
                      : "text-[#64748B] hover:text-[#01255F]"
                  }`}
                >
                  <Layers3 className="w-3 h-3 text-[#D7030F]" />
                  <span>3D Coverflow</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSliderEffect("thumbs")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    sliderEffect === "thumbs"
                      ? "bg-[#F2F7FF] text-[#01255F] font-bold border border-[#DCE5F0]"
                      : "text-[#64748B] hover:text-[#01255F]"
                  }`}
                >
                  Thumb Gallery
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Categories Bar & Swiper Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#DCE5F0]">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? "bg-[#01255F] text-white border-[#01255F] font-semibold shadow-xs"
                    : "bg-white text-[#334155] border-[#DCE5F0] hover:bg-[#F2F7FF] hover:border-[#01255F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Slider Navigation & Autoplay Controls */}
          {viewMode === "slider" && (
            <div className="flex items-center gap-3 self-end md:self-auto">
              {/* Autoplay Play/Pause */}
              <button
                type="button"
                onClick={toggleAutoplay}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCE5F0] bg-white text-xs font-semibold text-[#01255F] hover:bg-[#F2F7FF] transition-colors"
                title={isPlaying ? "Pause automatic sliding" : "Start automatic sliding"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#D7030F]" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#01255F]" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>

              {/* Slide Counter */}
              <div className="text-xs font-mono font-bold text-[#64748B] px-2 py-1 bg-white rounded border border-[#DCE5F0]">
                <span className="text-[#01255F]">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                <span>{String(filteredProjects.length).padStart(2, "0")}</span>
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  id="swiper-prev-btn"
                  className="w-8 h-8 rounded-full border border-[#DCE5F0] bg-white flex items-center justify-center text-[#01255F] hover:bg-[#01255F] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="swiper-next-btn"
                  className="w-8 h-8 rounded-full border border-[#DCE5F0] bg-white flex items-center justify-center text-[#01255F] hover:bg-[#01255F] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* VIEW 1: SWIPER SLIDER (Carousel, 3D Coverflow, or Thumbs) */}
        {/* ======================================================== */}
        {viewMode === "slider" && isMounted && (
          <div className="relative">
            {/* 1A: MULTI-SLIDE CAROUSEL OR 3D COVERFLOW */}
            {sliderEffect !== "thumbs" ? (
              <Swiper
                key={`${sliderEffect}-${selectedCategory}`}
                modules={[
                  Navigation,
                  Pagination,
                  Autoplay,
                  EffectCoverflow,
                  Keyboard,
                  A11y,
                ]}
                onSwiper={(swiper) => {
                  mainSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setCurrentIndex(swiper.realIndex);
                }}
                navigation={{
                  prevEl: "#swiper-prev-btn",
                  nextEl: "#swiper-next-btn",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                keyboard={{ enabled: true }}
                grabCursor={true}
                loop={filteredProjects.length > 2}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={
                  sliderEffect === "coverflow"
                    ? {
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        1024: { slidesPerView: 2.2, spaceBetween: 30 },
                      }
                    : {
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                      }
                }
                effect={sliderEffect === "coverflow" ? "coverflow" : "slide"}
                coverflowEffect={
                  sliderEffect === "coverflow"
                    ? {
                        rotate: 20,
                        stretch: 0,
                        depth: 180,
                        modifier: 1,
                        slideShadows: false,
                      }
                    : undefined
                }
                className="pb-14 pt-2"
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id} className="h-auto">
                    <div className="card-clean h-full overflow-hidden flex flex-col justify-between group hover:border-[#01255F] transition-all duration-300 shadow-sm hover:shadow-md bg-white">
                      <div>
                        {/* Image Frame */}
                        <div className="relative h-56 w-full bg-[#E8F3FF] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="text-[10px] font-bold text-[#01255F] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-[#DCE5F0]">
                              {project.category}
                            </span>
                          </div>

                          {/* Engineering Standard Badge */}
                          <div className="absolute top-3 right-3 z-10">
                            <span className="text-[10px] font-bold text-[#D7030F] bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded shadow-xs border border-[#FCD2D4]">
                              {project.badge}
                            </span>
                          </div>

                          {/* Quick Spec Bottom Strip on Image */}
                          <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white font-mono font-medium drop-shadow-md">
                            <span>{project.specHighlight}</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 space-y-3">
                          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                            <MapPin className="w-3.5 h-3.5 text-[#D7030F] shrink-0" />
                            <span>{project.location}</span>
                          </div>

                          <h3 className="text-base font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug">
                            {project.name}
                          </h3>

                          <div className="space-y-1.5 text-xs">
                            <p className="text-[#01255F] font-semibold flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                              <span className="line-clamp-1">{project.precastSystem}</span>
                            </p>
                            <p className="text-[#475569] text-[11px] line-clamp-2 leading-relaxed">
                              {project.scopeOfWork}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="p-5 pt-0">
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="w-full btn-outline-navy text-xs py-2 rounded flex items-center justify-center gap-1.5 group-hover:bg-[#01255F] group-hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Engineering Details</span>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* 1B: SYNCHRONIZED THUMBNAIL GALLERY SLIDER */
              <div className="space-y-4 pb-8">
                {/* Main Large Showcase Slide */}
                <Swiper
                  key={`main-thumbs-${selectedCategory}`}
                  modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    Thumbs,
                    Keyboard,
                    A11y,
                  ]}
                  onSwiper={(swiper) => {
                    mainSwiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex);
                  }}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  navigation={{
                    prevEl: "#swiper-prev-btn",
                    nextEl: "#swiper-next-btn",
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  keyboard={{ enabled: true }}
                  grabCursor={true}
                  spaceBetween={10}
                  className="rounded-xl overflow-hidden border border-[#DCE5F0] shadow-md bg-white"
                >
                  {filteredProjects.map((project) => (
                    <SwiperSlide key={project.id}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] lg:min-h-[480px]">
                        {/* Image Showcase */}
                        <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px] bg-slate-900">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            priority
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="text-xs font-bold text-[#01255F] bg-white/95 px-3 py-1 rounded shadow-xs border border-[#DCE5F0]">
                              {project.category}
                            </span>
                            <span className="text-xs font-bold text-[#D7030F] bg-white/95 px-3 py-1 rounded shadow-xs border border-[#FCD2D4]">
                              {project.badge}
                            </span>
                          </div>
                        </div>

                        {/* Specs & Engineering Breakdown */}
                        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-white">
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
                                <MapPin className="w-3.5 h-3.5 text-[#D7030F]" />
                                <span>{project.location}</span>
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-[#01255F] leading-tight">
                                {project.name}
                              </h3>
                            </div>

                            <div className="p-3 bg-[#F2F7FF] rounded-lg border border-[#DCE5F0] text-xs">
                              <p className="font-bold text-[#01255F] mb-0.5">Precast Structural System</p>
                              <p className="text-[#334155]">{project.precastSystem}</p>
                            </div>

                            <div className="space-y-1 text-xs">
                              <p className="font-bold text-[#01255F]">Engineering Scope & Detailing:</p>
                              <p className="text-[#475569] leading-relaxed">
                                {project.scopeOfWork}
                              </p>
                            </div>

                            <div className="text-xs font-mono bg-[#FAFBFD] p-2.5 rounded border border-[#DCE5F0] text-[#01255F] flex items-center justify-between">
                              <span className="text-[#64748B]">Specification:</span>
                              <span className="font-bold">{project.specHighlight}</span>
                            </div>
                          </div>

                          <div className="pt-6">
                            <button
                              type="button"
                              onClick={() => setActiveProject(project)}
                              className="w-full btn-navy text-xs py-2.5 rounded flex items-center justify-center gap-2 shadow-xs"
                            >
                              <Eye className="w-4 h-4" />
                              <span>Inspect Structural Specifications</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Sub-Track Thumbs Slider */}
                <Swiper
                  key={`thumbs-track-${selectedCategory}`}
                  onSwiper={setThumbsSwiper}
                  modules={[FreeMode, Thumbs]}
                  watchSlidesProgress={true}
                  freeMode={true}
                  spaceBetween={12}
                  slidesPerView={3}
                  breakpoints={{
                    640: { slidesPerView: 4, spaceBetween: 12 },
                    1024: { slidesPerView: 6, spaceBetween: 14 },
                  }}
                  className="py-2"
                >
                  {filteredProjects.map((project, idx) => (
                    <SwiperSlide key={`thumb-${project.id}`} className="cursor-pointer">
                      <div
                        className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentIndex
                            ? "border-[#D7030F] ring-2 ring-[#D7030F]/20 scale-102"
                            : "border-[#DCE5F0] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-white bg-black/60 px-1 rounded line-clamp-1">
                          {project.name.split(" ")[0]}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: CLASSIC GRID VIEW (Or SSR Static Snapshot)       */}
        {/* ======================================================== */}
        {(viewMode === "grid" || !isMounted) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card-clean overflow-hidden flex flex-col justify-between hover:border-[#01255F] group bg-white shadow-xs"
              >
                <div>
                  <div className="relative h-48 w-full bg-[#E8F3FF] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold text-[#01255F] bg-white/95 px-2.5 py-1 rounded shadow-xs border border-[#DCE5F0]">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold text-[#D7030F] bg-white/95 px-2 py-0.5 rounded shadow-xs border border-[#FCD2D4]">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                      <MapPin className="w-3.5 h-3.5 text-[#D7030F] shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#01255F] group-hover:text-[#D7030F] transition-colors leading-snug">
                      {project.name}
                    </h3>

                    <div className="space-y-1 text-xs">
                      <p className="text-[#01255F] font-semibold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>{project.precastSystem}</span>
                      </p>
                      <p className="text-[#475569] text-[11px] line-clamp-2">
                        {project.scopeOfWork}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="w-full btn-outline-navy text-xs py-2 rounded flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border border-[#DCE5F0] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-1.5 text-[#64748B] hover:text-[#01255F] rounded border border-[#DCE5F0] bg-white hover:bg-[#F2F7FF] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#D7030F] uppercase tracking-wider bg-[#FFF2F2] px-2.5 py-0.5 rounded border border-[#FCD2D4]">
                      {activeProject.category}
                    </span>
                    <span className="text-[11px] font-bold text-[#01255F] bg-[#E8F3FF] px-2.5 py-0.5 rounded border border-[#DCE5F0]">
                      {activeProject.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01255F]">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs text-[#64748B] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D7030F]" />
                    <span>{activeProject.location}</span>
                  </p>
                </div>

                <div className="relative h-64 w-full rounded-lg overflow-hidden border border-[#DCE5F0]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-xs px-3 py-1 rounded font-mono">
                    {activeProject.specHighlight}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                  <div className="bg-[#F2F7FF] p-3.5 rounded-lg border border-[#DCE5F0]">
                    <p className="font-bold text-[#01255F] mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#D7030F]" />
                      Precast System Used
                    </p>
                    <p className="text-[#334155] leading-relaxed">{activeProject.precastSystem}</p>
                  </div>
                  <div className="bg-[#F2F7FF] p-3.5 rounded-lg border border-[#DCE5F0]">
                    <p className="font-bold text-[#01255F] mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#01255F]" />
                      Scope of Engineering Work
                    </p>
                    <p className="text-[#334155] leading-relaxed">{activeProject.scopeOfWork}</p>
                  </div>
                </div>

                <div className="bg-[#FAFBFD] p-4 rounded-lg border border-[#DCE5F0] text-xs">
                  <p className="font-bold text-[#01255F] mb-1.5">Relevant Structural Details & Compliance</p>
                  <p className="text-[#475569] leading-relaxed">
                    {activeProject.engineeringDetails}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#DCE5F0]">
                  <span className="text-[11px] text-[#64748B] font-mono">
                    ID: {activeProject.id}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="btn-navy text-xs px-5 py-2 rounded shadow-xs"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
