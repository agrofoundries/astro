"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  Play,
  Pause,
  Download,
  ArrowRight,
  ShieldCheck,
  FileText,
  Zap,
  CheckCircle2,
  Maximize2,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

export function LiveMockupShowcase() {
  const [activeTab, setActiveTab] = useState<"desktop" | "ipad" | "mobile" | "all">("desktop");
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(true);
  const [isIpadPlaying, setIsIpadPlaying] = useState(true);
  const [isMobilePlaying, setIsMobilePlaying] = useState(true);
  const [isDesktopMuted, setIsDesktopMuted] = useState(true);

  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const ipadVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const toggleDesktopPlay = () => {
    if (desktopVideoRef.current) {
      if (desktopVideoRef.current.paused) {
        desktopVideoRef.current.play();
        setIsDesktopPlaying(true);
      } else {
        desktopVideoRef.current.pause();
        setIsDesktopPlaying(false);
      }
    }
  };

  const toggleDesktopMute = () => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = !desktopVideoRef.current.muted;
      setIsDesktopMuted(desktopVideoRef.current.muted);
    }
  };

  const handleDesktopFullscreen = () => {
    if (desktopVideoRef.current) {
      if (desktopVideoRef.current.requestFullscreen) {
        desktopVideoRef.current.requestFullscreen();
      }
    }
  };

  const toggleIpadPlay = () => {
    if (ipadVideoRef.current) {
      if (ipadVideoRef.current.paused) {
        ipadVideoRef.current.play();
        setIsIpadPlaying(true);
      } else {
        ipadVideoRef.current.pause();
        setIsIpadPlaying(false);
      }
    }
  };

  const toggleMobilePlay = () => {
    if (mobileVideoRef.current) {
      if (mobileVideoRef.current.paused) {
        mobileVideoRef.current.play();
        setIsMobilePlaying(true);
      } else {
        mobileVideoRef.current.pause();
        setIsMobilePlaying(false);
      }
    }
  };

  return (
    <section
      id="live-mockup"
      className="w-full bg-[#F4F8FD] border-y-2 border-[#DCE5F0] py-14 sm:py-20 overflow-hidden relative"
    >
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] text-xs font-mono font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1] animate-pulse" />
            <span>CROSS-PLATFORM CIVIL CONTRACTOR DEMO &bull; REAL-TIME EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#014088] tracking-tight uppercase leading-[1.15]">
            Engineering &amp; Submittals <span className="text-[#0E96E1]">On Any Screen</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Explore certified precast stormwater basins, AASHTO HS-20 traffic slabs, and leaching galleys. Access PE-stamped CAD drawings and request jobsite takeoffs seamlessly on Desktop, iPad, or Smartphone.
          </p>

          {/* Interactive Device View Selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center p-1.5 rounded-xl bg-white border-2 border-[#DCE5F0] shadow-2xs">
              {/* Desktop Button */}
              <button
                type="button"
                onClick={() => setActiveTab("desktop")}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "desktop"
                    ? "bg-[#014088] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#014088] hover:bg-slate-50"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop Portal</span>
              </button>

              {/* iPad Button */}
              <button
                type="button"
                onClick={() => setActiveTab("ipad")}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "ipad"
                    ? "bg-[#014088] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#014088] hover:bg-slate-50"
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>iPad / Tablet</span>
              </button>

              {/* Mobile Button */}
              <button
                type="button"
                onClick={() => setActiveTab("mobile")}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "mobile"
                    ? "bg-[#014088] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#014088] hover:bg-slate-50"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Phone</span>
              </button>

              {/* All Devices (Trio) */}
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#014088] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#014088] hover:bg-slate-50"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Devices (Trio)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. DESKTOP WORKSTATION MOCKUP — FULL VIDEO IN FRAME     */}
        {/* ======================================================== */}
        {(activeTab === "desktop" || activeTab === "all") && (
          <div className="mb-10 max-w-6xl mx-auto transition-all duration-300">
            <div className="bg-white rounded-3xl p-3 sm:p-5 border-2 border-[#DCE5F0] shadow-xl relative overflow-hidden group">
              {/* Header Bar Above Desktop Video */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1] animate-pulse" />
                  <span className="font-mono font-bold text-[#014088] uppercase text-[11px] tracking-wider">
                    Astro Desktop Live Mockup &bull; Full Studio Display
                  </span>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-[10px] font-mono text-slate-500 font-medium">
                    1920&times;1080 HD &bull; 60 FPS
                  </span>

                  <button
                    type="button"
                    onClick={toggleDesktopMute}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    title={isDesktopMuted ? "Unmute" : "Mute"}
                  >
                    {isDesktopMuted ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-[#0E96E1]" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleDesktopPlay}
                    className="p-1.5 rounded-lg bg-[#014088] hover:bg-[#002752] text-white transition-colors cursor-pointer"
                    title={isDesktopPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isDesktopPlaying ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDesktopFullscreen}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Full Desktop Video Screen Container — 100% UNCLIPPED & IN FRAME */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200 shadow-inner aspect-video flex items-center justify-center">
                <video
                  ref={desktopVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                  className="w-full h-full object-contain"
                  onPlay={() => setIsDesktopPlaying(true)}
                  onPause={() => setIsDesktopPlaying(false)}
                >
                  <source src="/mockup/Asreo%20Desktop%20Live%20Mockups.mp4" type="video/mp4" />
                  <source src="/mockup/Asreo Desktop Live Mockups.mp4" type="video/mp4" />
                  <source src="/mockup/desktop-mockup.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Desktop Bottom Status Bar */}
              <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2 border-t border-slate-100 mt-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-semibold text-[#014088]">
                    Full iMac Workstation Experience &bull; Tekla LOD 400 Digital Detailing
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  Astro Desktop Engineering Portal &bull; Complete Video In-Frame
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. TABLET & MOBILE STAGES (GRID OR FOCUSED)              */}
        {/* ======================================================== */}
        {(activeTab === "ipad" || activeTab === "mobile" || activeTab === "all") && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* iPad Landscape Mockup Stage — FULL VIDEO IN FRAME */}
            {(activeTab === "all" || activeTab === "ipad") && (
              <div
                className={`transition-all duration-300 ${
                  activeTab === "ipad"
                    ? "lg:col-span-12 max-w-5xl mx-auto"
                    : "lg:col-span-7"
                }`}
              >
                <div className="bg-white rounded-3xl p-3 sm:p-5 border-2 border-[#DCE5F0] shadow-xl relative overflow-hidden group">
                  {/* Tablet Top Details */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0E96E1]" />
                      <span className="font-bold text-[#014088] uppercase text-[11px] tracking-wider">
                        Astro iPad Live Mockup
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-[10px] text-slate-500">
                        1920&times;1080 HD &bull; 60 FPS
                      </span>
                      <button
                        type="button"
                        onClick={toggleIpadPlay}
                        className="p-1.5 rounded-lg bg-[#014088] hover:bg-[#002752] text-white transition-colors cursor-pointer"
                        title={isIpadPlaying ? "Pause Video" : "Play Video"}
                      >
                        {isIpadPlaying ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Tablet Screen Container — FULL VIDEO IN FRAME */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200 aspect-video flex items-center justify-center">
                    <video
                      ref={ipadVideoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="auto"
                      className="w-full h-full object-contain"
                      onPlay={() => setIsIpadPlaying(true)}
                      onPause={() => setIsIpadPlaying(false)}
                    >
                      <source src="/mockup/Asreo%20I-Pad%20Live%20Mockup.mp4" type="video/mp4" />
                      <source src="/mockup/Asreo I-Pad Live Mockup.mp4" type="video/mp4" />
                      <source src="/mockup/ipad-mockup.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Tablet Bottom Bar */}
                  <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 mt-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[11px] font-semibold text-[#014088]">
                        Tablet Catalog &amp; 3D Spec Explorer
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      Complete iPad Frame
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Smartphone Mockup Stage — FULL VIDEO IN FRAME */}
            {(activeTab === "all" || activeTab === "mobile") && (
              <div
                className={`transition-all duration-300 ${
                  activeTab === "mobile"
                    ? "lg:col-span-12 max-w-xl mx-auto"
                    : "lg:col-span-5 flex justify-center"
                }`}
              >
                <div className="w-full max-w-[480px] bg-white rounded-3xl p-3.5 sm:p-5 border-2 border-[#DCE5F0] shadow-xl relative overflow-hidden group">
                  {/* Smartphone Header */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-3 text-xs">
                    <span className="text-[10px] font-mono font-bold text-[#014088] uppercase tracking-wider">
                      ASTRO MOBILE
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleMobilePlay}
                        className="p-1.5 rounded-lg bg-[#014088] hover:bg-[#002752] text-white transition-colors cursor-pointer"
                        title={isMobilePlaying ? "Pause Video" : "Play Video"}
                      >
                        {isMobilePlaying ? (
                          <Pause className="w-3 h-3" />
                        ) : (
                          <Play className="w-3 h-3 fill-current" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mobile Screen Container — FULL VIDEO IN FRAME (1300x1080) */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200 aspect-[1300/1080] flex items-center justify-center">
                    <video
                      ref={mobileVideoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="auto"
                      className="w-full h-full object-contain"
                      onPlay={() => setIsMobilePlaying(true)}
                      onPause={() => setIsMobilePlaying(false)}
                    >
                      <source src="/mockup/Mobile-Mockup.mp4" type="video/mp4" />
                      <source src="/mockup/mobile-mockup.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Mobile Bottom Bar */}
                  <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 mt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-semibold text-[#014088]">On-Site Field Mode</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">iPhone 16 Pro Frame</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Feature Pillars Strip Below Mockups */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-white rounded-2xl border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#0E96E1]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1">
                Instant CAD &amp; Drawing Access
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Download verified engineering PDFs and DWG cut sheets directly on your desktop or tablet right inside the job trailer.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-2xl border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0E96E1]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1">
                Jobsite Trench Verification
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Check pipe knockout diameters, wall thickness tolerances, and AASHTO HS-20 traffic load ratings on your phone.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-white rounded-2xl border-2 border-[#DCE5F0] hover:border-[#0E96E1] transition-all shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] text-[#014088] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#0E96E1]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#014088] uppercase tracking-tight mb-1">
                Direct-to-Plant Dispatch RFQ
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Upload project civil plans, invert schedules, and site photos directly to our Deer Park estimating group.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 p-4 sm:p-6 bg-[#014088] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight">
              Ready to Review Precast Drawings or Request a Contractor Quote?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Available 24/7 on desktop, tablet, and smartphone with instant catalog downloads.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/downloads/Astro-2026-Precast-Engineering-Catalog-Drawings.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#0E96E1]" />
              <span>Catalog PDF</span>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E96E1] hover:bg-[#0C82C4] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
