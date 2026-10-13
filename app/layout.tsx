import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimationProvider } from "@/components/providers/animation-provider";

export const metadata: Metadata = {
  title: {
    default: "Precast Engineers | Empowering Precasters",
    template: "%s | Precast Engineers",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Precast Engineers provides structural engineering, Tekla LOD 400 BIM detailing, technical resources, and practical solutions for the precast concrete industry across the United States.",
  keywords: [
    "precast engineers",
    "precast concrete engineering",
    "structural precast engineering",
    "prestressed concrete design",
    "precast connection design",
    "precast shop drawings",
    "tekla bim precast detailing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Precast Engineers",
    title: "Precast Engineers | Empowering Precasters",
    description:
      "Engineering solutions, technical resources, and practical guidance for the precast concrete industry.",
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
