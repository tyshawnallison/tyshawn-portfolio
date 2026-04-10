import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/portfolio-data";
import { GalleryPage } from "@/components/GalleryPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Modeling",
  description: "Tyshawn Allison — Professional modeling portfolio.",
};

export default function ModelingPage() {
  const category = getCategoryBySlug("modeling");
  if (!category) notFound();
  return <GalleryPage category={category} />;
}
