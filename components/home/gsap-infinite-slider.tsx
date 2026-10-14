"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Layers,
  ShieldCheck,
  Maximize2,
  X,
  Gauge,
  SlidersHorizontal,
} from "lucide-react";
import gsap from "gsap";

interface GSAPCardItem {
  id: string;
  title: string;
  category: string;
  specs: string;
  image: string;
  video?: string;
  badge: string;
  description: string;
  loadRating: string;
  dotApproval: string;
}

const GSAP_CARDS: GSAPCardItem[] = [
  {
    id: "gsap-1",
    title: "AASHTO Type IV Prestressed Bridge Girders",
    category: "Highway & Civil Infrastructure",
    specs: "140 FT Span • 8,500 PSI High-Early",
    image: "/images/infrastructure.jpg",
    badge: "State DOT & FHWA",
    description: "Multi-stage strand tensioning with predictive camber modeling and custom heavy transport lifting bails.",
    loadRating: "HL-93 Truck & Tandem",
    dotApproval: "Caltrans & TxDOT Approved",
  },
  {
    id: "gsap-2",
    title: "Field Crane Erection & Precast Placement",
    category: "Site Rigging & Logistics",
    specs: "4K Motion • 100-Ton Crane Hook",
    image: "/images/hero-precast.jpg",
    video: "/videos/gemini_generated_video_7403079d.mp4",
    badge: "PCI Field Qualified",
    description: "Accelerated nighttime highway closure erection sequence with zero rail corridor interruption.",
    loadRating: "100-Ton Erection Capacity",
    dotApproval: "Class A Rigging Plan",
  },
  {
    id: "gsap-3",
    title: "Continuous Insulated Composite Wall Panels",
    category: "Thermal Envelopes & Cladding",
    specs: "R-24 Continuous • 10-Inch Composite",
    image: "/images/wall-panels.jpg",
    badge: "ASHRAE 90.1 Compliant",
    description: "Non-conductive carbon fiber shear ties preventing thermal bridging across industrial cold-storage envelopes.",
    loadRating: "45 PSF Lateral Wind Load",
    dotApproval: "Miami-Dade Impact Rated",
  },
  {
    id: "gsap-4",
    title: "Tekla LOD 400 Digital Detailing Fabrication",
    category: "CAD & Digital Detailing",
    specs: "LOD 400 • Automated CAM / PXML",
    image: "/images/engineering-team.jpg",
    badge: "PCI Certified",
    description: "Millimeter-accurate automated bar bending schedules directly linking 3D structural models to casting beds.",
    loadRating: "Zero Hardware Clashes",
    dotApproval: "PCI QA Procedure Manual",
  },
  {
    id: "gsap-5",
    title: "Grand Canyon Rail Viaduct Box Girders",
    category: "Railway Bridges & Transit",
    specs: "Cooper E-80 • Post-Tensioned",
    image: "/images/slider-revolution/viabg.jpg",
    badge: "AREMA Rail Standard",
    description: "Segmental cantilever erection over 220-foot gorge with internal grouted post-tensioned tendon anchorages.",
    loadRating: "Cooper E-80 Live Train Loading",
    dotApproval: "Federal Railroad Admin (FRA)",
  },
  {
    id: "gsap-6",
    title: "Mountain Pass High-Speed Tunnel Rings",
    category: "Tunnels & Substructures",
    specs: "5.0 Bar Seal • Steel-Fiber C60",
    image: "/images/slider-revolution/tunnelssss.jpg",
    badge: "ITA-AITES Standard",
    description: "Gasketed precast liner rings engineered for extreme hydrostatic head pressures and tectonic shear resistance.",
    loadRating: "5.0 Bar Hydrostatic Head",
    dotApproval: "US DOT Subsurface Spec",
  },
  {
    id: "gsap-7",
    title: "Spillway Heavy Scour Precast Deflectors",
    category: "Heavy Hydraulic & Energy",
    specs: "65 FPS Velocity • Silica Fume Matrix",
    image: "/images/slider-revolution/damdam.jpg",
    badge: "USACE Dam Safety",
    description: "High-density micro-silica concrete precast armor units resisting extreme cavitation scour on hydro spillways.",
    loadRating: "65 FT/SEC Fluid Discharge",
    dotApproval: "Army Corps of Engineers",
  },
  {
    id: "gsap-8",
    title: "Commercial Double Tees & Diaphragm Beams",
    category: "Parking Structures & Floors",
    specs: "60 FT Clear Bays • 150 PCF Density",
    image: "/images/commercial-building.jpg",
    badge: "PCI MNL-120 Standard",
    description: "Long-span precast double tees with cast-in-place composite topping slab and flange connector weld plates.",
    loadRating: "IBC 2024 Garage Live Load",
    dotApproval: "50-State PE Stamped",
  },
];

/**
 * GSAP horizontalLoop helper function from GreenSock Demo Hub (demos.gsap.com)
 */
function horizontalLoop(items: HTMLElement[], config: {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: boolean | number | ((value: number) => number);
  paddingRight?: number | string;
  reversed?: boolean;
}) {
  const elements = gsap.utils.toArray(items) as HTMLElement[];
  config = config || {};
  const tl = gsap.timeline({
    repeat: config.repeat ?? -1,
    paused: config.paused ?? false,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });
  const length = elements.length;
  const startX = elements[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(typeof config.snap === "number" ? config.snap : 1);
  let totalWidth: number;
  let curX: number;
  let distanceToStart: number;
  let distanceToLoop: number;
  let item: HTMLElement;
  let i: number;

  gsap.set(elements, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          (gsap.getProperty(el, "xPercent") as number)
      );
      return xPercents[i];
    },
  });
  gsap.set(elements, { x: 0 });

  totalWidth =
    elements[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    elements[length - 1].offsetWidth *
      (parseFloat(gsap.getProperty(elements[length - 1], "scaleX") as string) || 1) +
    (parseFloat(String(config.paddingRight)) || 0);

  for (i = 0; i < length; i++) {
    item = elements[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (parseFloat(gsap.getProperty(item, "scaleX") as string) || 1);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
        },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars?: gsap.TweenVars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  let curIndex = 0;
  tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }
  return tl;
}

export function GSAPInfiniteSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [selectedCard, setSelectedCard] = useState<GSAPCardItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize GSAP horizontalLoop animation
  useEffect(() => {
    if (!isMounted || !trackRef.current) return;

    const cards = Array.from(trackRef.current.children) as HTMLElement[];
    if (cards.length === 0) return;

    // Build the infinite horizontal loop
    const loop = horizontalLoop(cards, {
      repeat: -1,
      paused: false,
      speed: speed,
      paddingRight: 24,
    });

    loopRef.current = loop;

    return () => {
      loop.kill();
    };
  }, [isMounted, speed]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!loopRef.current) return;
    if (isPlaying) {
      loopRef.current.pause();
      setIsPlaying(false);
    } else {
      loopRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (!loopRef.current) return;
    loopRef.current.next({ duration: 0.6, ease: "power2.out" });
  };

  const handlePrev = () => {
    if (!loopRef.current) return;
    loopRef.current.previous({ duration: 0.6, ease: "power2.out" });
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (loopRef.current) {
      loopRef.current.timeScale(newSpeed);
    }
  };

  // 3D Perspective Tilt on Mouse Move (from GSAP demo: cursor-driven-perspective-tilt)
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
    });

    // Animate specular reflection sheen
    const sheen = card.querySelector(".card-sheen") as HTMLElement;
    if (sheen) {
      const sheenX = (x / rect.width) * 100;
      const sheenY = (y / rect.height) * 100;
      gsap.to(sheen, {
        background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 65%)`,
        opacity: 1,
        duration: 0.2,
      });
    }
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });

    const sheen = card.querySelector(".card-sheen") as HTMLElement;
    if (sheen) {
      gsap.to(sheen, {
        opacity: 0,
        duration: 0.4,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030B17] py-20 lg:py-28 overflow-hidden border-b border-slate-800 select-none text-white"
    >
      {/* Background Ambience & Engineering Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0E96E1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Heading & Interactive GSAP Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white mb-3">
              <Layers className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>GSAP Demo Hub Showcase</span>
              <span className="text-slate-400">• demos.gsap.com/explore</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Infinite 3D Card Slider &amp; Perspective Tilt
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Powered by GSAP’s seamless <code className="text-sky-400 font-mono text-xs px-1.5 py-0.5 bg-white/5 rounded">horizontalLoop()</code> algorithm with 60fps cursor-driven 3D rotational dynamics.
            </p>
          </div>

          {/* Interactive GSAP Slider Toolbar */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            {/* Speed Selector */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg p-1 text-xs">
              <span className="px-2 text-slate-400 font-mono text-[11px] flex items-center gap-1">
                <Gauge className="w-3 h-3 text-[#0E96E1]" />
                Speed:
              </span>
              {[0.5, 1, 1.8].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSpeedChange(s)}
                  className={`px-2.5 py-1 rounded font-mono font-bold transition-all ${
                    speed === s
                      ? "bg-[#0E96E1] text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause GSAP loop" : "Resume GSAP loop"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#0E96E1]" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            {/* Stepping Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0E96E1] border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                aria-label="Previous card step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0E96E1] border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                aria-label="Next card step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GSAP INFINITE HORIZONTAL LOOP CARDS CONTAINER             */}
        {/* ======================================================== */}
        <div
          className="relative w-full overflow-hidden py-6"
          onMouseEnter={() => {
            if (loopRef.current && isPlaying) loopRef.current.pause();
          }}
          onMouseLeave={() => {
            if (loopRef.current && isPlaying) loopRef.current.play();
          }}
        >
          {/* Continuous Track */}
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 w-max cursor-grab active:cursor-grabbing"
            style={{ perspective: 1200 }}
          >
            {GSAP_CARDS.map((item) => (
              <div
                key={item.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setSelectedCard(item)}
                className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl overflow-hidden bg-[#07172E] border border-white/15 shadow-xl transition-shadow hover:shadow-2xl hover:border-sky-500/40 relative group cursor-pointer flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Specular Glare / Reflection Layer */}
                <div
                  className="card-sheen absolute inset-0 pointer-events-none opacity-0 z-30 transition-opacity"
                  style={{ mixBlendMode: "overlay" }}
                />

                {/* Card Media Header */}
                <div className="relative h-52 w-full overflow-hidden bg-black/60">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Solid Media Dimmer */}
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-white">
                      {item.category.split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0E96E1] text-white shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Specs Bottom Banner */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-300 drop-shadow">
                    <span>{item.specs}</span>
                    <span className="text-white/60 text-[10px]">3D TILT</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-sky-400 block tracking-wide uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Engineering Metadata Strip */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] font-mono">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">Live Load:</span>
                      <span className="text-white font-medium">{item.loadRating}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">Approval:</span>
                      <span className="text-emerald-400 font-medium">{item.dotApproval}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-[#0E96E1] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect 3D Specifications</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Hint Bar */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive 3D Physics Active — Hover to pause &amp; move cursor to tilt</span>
          </div>
          <div className="text-slate-500">
            GreenSock Animation Platform v3 • GSAP Demo Hub Pattern
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3D INSPECTION MODAL                                       */}
      {/* ======================================================== */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-3xl bg-[#06182E] rounded-2xl overflow-hidden border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#0E96E1] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Container */}
            <div className="relative h-72 sm:h-80 w-full bg-black">
              {selectedCard.video ? (
                <video
                  src={selectedCard.video}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-bold bg-[#0E96E1] text-white px-3 py-1 rounded shadow-xs">
                  {selectedCard.badge}
                </span>
                <span className="text-xs font-mono bg-black/70 text-white px-2.5 py-1 rounded border border-white/20">
                  {selectedCard.specs}
                </span>
              </div>
            </div>

            {/* Spec Breakdown Details */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  {selectedCard.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedCard.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedCard.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-400 block mb-0.5">Structural Load Rating:</span>
                  <span className="text-white font-bold">{selectedCard.loadRating}</span>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-400 block mb-0.5">Agency Certification:</span>
                  <span className="text-emerald-400 font-bold">{selectedCard.dotApproval}</span>
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="btn-navy text-xs px-5 py-2.5 rounded shadow-xs"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
