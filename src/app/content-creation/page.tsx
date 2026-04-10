import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/portfolio-data";
import { GalleryPage } from "@/components/GalleryPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Content Creation",
  description: "Tyshawn Allison — Commercial and creative content creation.",
};

export default function ContentCreationPage() {
  const category = getCategoryBySlug("content-creation");
  if (!category) notFound();
  return <GalleryPage category={category} />;
}
