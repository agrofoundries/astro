"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Video,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination, Autoplay, FreeMode, Keyboard, A11y } from "swiper/modules";

interface VideoSlideItem {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  badge: string;
  specs: string;
  description: string;
  tag: string;
  isCustomPrecast?: boolean;
}

const VIDEO_SLIDES: VideoSlideItem[] = [
  {
    id: "gemini-precast",
    title: "Precast Concrete Plant & Erection Operations",
    category: "Civil Infrastructure & Highways",
    videoSrc: "/videos/gemini_generated_video_7403079d.mp4",
    badge: "PCI & DOT Approved",
    specs: "8,500 PSI High-Early • 140 FT Max Clear Span",
    description: "Licensed PE structural design, high-capacity prestressing bed operations, and zero-defect crane hook erection sequences.",
    tag: "FEATURED PRODUCTION",
    isCustomPrecast: true,
  },
  {
    id: "ferrari-swiper",
    title: "Ferrari Official Digital Showcase",
    category: "High-Performance Motion UI",
    videoSrc: "https://swiperjs.com/images/home/videos/ferrari.mp4",
    badge: "Official SwiperJS Showcase",
    specs: "Swiper Touch Core • 60 FPS Accelerated",
    description: "As featured on swiperjs.com — seamless hardware-accelerated transitions and touch fluid dynamics.",
    tag: "SWIPER REFERENCE",
  },
  {
    id: "hero-precast",
    title: "Heavy Precast Girder Transport & Site Placement",
    category: "Highway & Rail Bridges",
    videoSrc: "/videos/hero-precast.mp4",
    badge: "AASHTO Type IV & Bulb-Tee",
    specs: "Cooper E-80 Live Load • Night Convoy Dispatch",
    description: "Automated hydraulic detensioning, multi-axle steerable transport dollies, and precision tandem crane hook placement.",
    tag: "FIELD RIGGING",
    isCustomPrecast: true,
  },
  {
    id: "byd-swiper",
    title: "BYD Automotive Dynamic Experience",
    category: "Swiper Interactive Showcase",
    videoSrc: "https://swiperjs.com/images/home/videos/byd.mp4",
    badge: "Swiper Ultra Fluid",
    specs: "Web Components • Zero Jitter",
    description: "Demonstrating Swiper's ultra-responsive touch gestures and high-framerate video slider handling.",
    tag: "SWIPER REFERENCE",
  },
  {
    id: "precast-qa-test",
    title: "Concrete Lab Testing & Stress Analysis",
    category: "Quality Assurance & Testing",
    videoSrc: "/videos/test.mp4",
    badge: "ASTM C39 & C496 Standards",
    specs: "Hydraulic Cylinder Rupture • Laser Camber Scan",
    description: "Laboratory batch verification, continuous slump-flow monitoring, and calibrated hydraulic compression testing.",
    tag: "QA / TESTING",
    isCustomPrecast: true,
  },
  {
    id: "lambo-swiper",
    title: "Lamborghini Motion Showcase",
    category: "Swiper Motion Showcase",
    videoSrc: "https://swiperjs.com/images/home/videos/lambo.mp4",
    badge: "Swiper Core Engine",
    specs: "Hardware Layering • Smooth Inertia",
    description: "High-speed video rendering synchronized with swipe and scroll momentum across mobile and desktop viewports.",
    tag: "SWIPER REFERENCE",
  },
];

export function SwiperVideoSlider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoSlideItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleGlobalPlay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full bg-[#030F21] py-16 lg:py-24 text-white overflow-hidden border-b border-slate-800">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="section-container relative z-10">
        {/* Section Heading & Video Controls Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D7030F] animate-pulse" />
              <span>Motion Video Slider</span>
              <span className="text-slate-400">• Inspired by swiperjs.com</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Field Execution &amp; Motion Video Showcase
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Watch real-time precast concrete casting, heavy crane rigging, and precision prestressed fabrication captured live on job sites.
            </p>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Global Sound Toggle */}
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold transition-colors cursor-pointer"
              title={isMuted ? "Unmute video audio" : "Mute video audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#D7030F]" />
                  <span>Audio Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Audio Live</span>
                </>
              )}
            </button>

            {/* Autoplay Play/Pause */}
            <button
              type="button"
              onClick={toggleGlobalPlay}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold transition-colors cursor-pointer"
              title={isPlaying ? "Pause slider playback" : "Resume slider playback"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 text-[#D7030F]" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            {/* Slide Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                id="video-swiper-prev"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D7030F] border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                id="video-swiper-next"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D7030F] border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                aria-label="Next video"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SWIPER VIDEO SLIDER CAROUSEL                             */}
        {/* ======================================================== */}
        {isMounted ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay, FreeMode, Keyboard, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlideIndex(swiper.realIndex);
            }}
            navigation={{
              prevEl: "#video-swiper-prev",
              nextEl: "#video-swiper-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 24 },
              1440: { slidesPerView: 2.8, spaceBetween: 28 },
            }}
            className="pb-12 pt-2"
          >
            {VIDEO_SLIDES.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 bg-[#06182E] flex flex-col justify-between shadow-xl ${
                    item.isCustomPrecast
                      ? "border-red-500/30 hover:border-[#D7030F]"
                      : "border-slate-800 hover:border-slate-600"
                  }`}
                >
                  {/* Video Stage Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <video
                      src={item.videoSrc}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Readable Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-white">
                        {item.tag}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-md border ${
                          item.isCustomPrecast
                            ? "bg-[#D7030F]/90 text-white border-red-400/40"
                            : "bg-white/90 text-slate-900 border-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Expand Fullscreen Button */}
                    <button
                      type="button"
                      onClick={() => setActiveModalVideo(item)}
                      className="absolute bottom-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/70 hover:bg-[#D7030F] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
                      title="Inspect Video in Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Specs Overlay at Bottom of Video */}
                    <div className="absolute bottom-3.5 left-3.5 right-14 z-10 text-[11px] font-mono text-slate-300 drop-shadow truncate">
                      {item.specs}
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Video className="w-3.5 h-3.5 text-[#D7030F]" />
                        <span>{item.category}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-400">
                        HD 1080p • 60 FPS
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveModalVideo(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D7030F] hover:text-white transition-colors"
                      >
                        <span>Watch Clip</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* Static Preview before Client Mount */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {VIDEO_SLIDES.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden border border-slate-800 bg-[#06182E] aspect-video relative flex items-center justify-center"
              >
                <div className="text-slate-500 text-xs font-mono">Loading video slider...</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN VIDEO INSPECTION MODAL                         */}
      {/* ======================================================== */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl bg-[#06182E] rounded-2xl overflow-hidden border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#D7030F] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={activeModalVideo.videoSrc}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Video Info */}
            <div className="p-6 bg-[#030F21] space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold bg-[#D7030F] text-white px-2.5 py-0.5 rounded">
                  {activeModalVideo.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeModalVideo.specs}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {activeModalVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
