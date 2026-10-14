import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimationProvider } from "@/components/providers/animation-provider";

export const metadata: Metadata = {
  title: {
    default: "Astro Masonry & Precast | Advanced Precast Engineering · 2026 Catalog",
    template: "%s | Astro Masonry & Precast",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Astro Masonry & Precast is a premier manufacturer of precast concrete catch basins, monolithic septic tanks, grease traps, leaching galleys, slabs, sanitary rings, and storm drywells. AASHTO HS20-44 traffic rated, 5,000+ PSI compressive strength, meeting Suffolk & Nassau County specifications. Plant located in Deer Park, Long Island, NY. Call 631-667 3300.",
  keywords: [
    "Astro Masonry",
    "Astro Precast",
    "precast concrete catch basins",
    "monolithic septic tanks",
    "commercial grease traps",
    "precast leaching galleys",
    "Suffolk County precast specs",
    "Nassau County precast specs",
    "AASHTO HS20 traffic slabs",
    "precast sanitary rings",
    "precast storm rings",
    "precast concrete Deer Park NY",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Astro Masonry & Precast",
    title: "Astro Masonry & Precast | Advanced Precast Engineering · 2026 Catalog",
    description:
      "Direct manufacturer of precast catch basins, septic tanks, grease traps, leaching galleys, and traffic slabs built to Suffolk & Nassau County standards. Deer Park, NY.",
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
      <body className="min-h-full flex flex-col bg-white text-[#334155]">
        <AnimationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
