import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimationProvider } from "@/components/providers/animation-provider";

export const metadata: Metadata = {
  title: {
    default: "Astro Precast Engineering | Infrastructure, Stormwater & Utility Solutions",
    template: "%s | Astro Precast Engineering",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Astro Precast Engineering manufactures high-performance precast concrete solutions for stormwater drainage, sanitary wastewater, and underground utility infrastructure. Certified 5,000+ PSI compressive strength, AASHTO HS20-44 highway traffic rated, with PE-stamped submittals built to Suffolk & Nassau County specifications in Deer Park, NY. Call (631) 667-3300.",
  keywords: [
    "Astro Precast Engineering",
    "precast concrete infrastructure",
    "stormwater catch basins",
    "monolithic septic tanks",
    "commercial grease interceptors",
    "subsurface leaching galleys",
    "AASHTO HS20 traffic slabs",
    "precast drywell rings",
    "Suffolk County precast specs",
    "Nassau County DOT drainage",
    "precast concrete manufacturer Long Island",
    "underground utility infrastructure",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Astro Precast Engineering",
    title: "Astro Precast Engineering | Infrastructure, Stormwater & Utility Solutions",
    description:
      "Engineered precast concrete solutions for civil infrastructure, municipal stormwater, and sanitary wastewater. 5,000+ PSI certified concrete, AASHTO HS20-44 traffic loading, and direct jobsite delivery from Deer Park, NY.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <AnimationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
