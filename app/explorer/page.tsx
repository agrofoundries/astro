import type { Metadata } from "next";
import { ProductExplorer } from "@/components/home/product-explorer";

export const metadata: Metadata = {
  title: "Interactive Precast Product Explorer | Astro Precast Engineering",
  description:
    "Interactive precast structural element explorer. Filter by category, application, and load rating. Compare specifications and generate submittal requests.",
};

export default function ExplorerPage() {
  return (
    <main className="w-full bg-[#F8F9FB]">
      <ProductExplorer />
    </main>
  );
}
