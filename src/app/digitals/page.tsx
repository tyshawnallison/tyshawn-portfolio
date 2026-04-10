import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/portfolio-data";
import { GalleryPage } from "@/components/GalleryPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Digitals",
  description: "Tyshawn Allison — Studio digitals and comp card shots.",
};

export default function DigitalsPage() {
  const category = getCategoryBySlug("digitals");
  if (!category) notFound();
  return <GalleryPage category={category} />;
}
