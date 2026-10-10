import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "PRECAST ENGINEERS™ | Structural Precast Engineering & 3D BIM Detailing",
    template: "%s | PRECAST ENGINEERS™",
  },
  description:
    "PRECAST ENGINEERS™ delivers licensed PE-stamped structural engineering, Tekla LOD 400 BIM shop detailing, connection design, and precast bid takeoffs — Empowering Precasters nationwide.",
  keywords: [
    "precast engineers",
    "precast structural engineering",
    "tekla lod 400 precast detailing",
    "precast connection design",
    "precast shop drawings",
    "pe stamped precast calculations",
    "precast bid takeoffs",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PRECAST ENGINEERS™",
    title: "PRECAST ENGINEERS™ | Empowering Precasters",
    description:
      "Licensed structural engineering calculations, 3D Tekla BIM detailing, and connection design for precast concrete fabricators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
