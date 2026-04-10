import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/portfolio-data";
import { GalleryPage } from "@/components/GalleryPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Publication",
  description: "Tyshawn Allison — MALVIE Magazine editorial spread, publication work.",
};

export default function PublicationPage() {
  const category = getCategoryBySlug("publication");
  if (!category) notFound();
  return <GalleryPage category={category} />;
}
