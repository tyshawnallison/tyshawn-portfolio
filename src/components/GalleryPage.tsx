"use client";

import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/portfolio-data";
import { getOtherCategories } from "@/lib/portfolio-data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LightboxGallery } from "@/components/Lightbox";

function PairedGallery({
  images,
  open,
}: {
  images: { src: string; alt: string }[];
  open: (index: number) => void;
}) {
  // First image = single wide, then pairs of 2
  const rows: { src: string; alt: string; index: number }[][] = [];
  let i = 0;

  // First row: single wide image
  if (images.length > 0) {
    rows.push([{ ...images[0], index: 0 }]);
    i = 1;
  }

  // Remaining: pairs of 2
  while (i < images.length) {
    const row: { src: string; alt: string; index: number }[] = [];
    row.push({ ...images[i], index: i });
    if (i + 1 < images.length) {
      row.push({ ...images[i + 1], index: i + 1 });
    }
    rows.push(row);
    i += 2;
  }

  return (
    <div className="flex flex-col gap-6">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={
            row.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {row.map((img) => (
            <ScrollReveal key={img.src} delay={img.index * 60}>
              <button
                onClick={() => open(img.index)}
                className="block w-full cursor-pointer overflow-hidden bg-transparent border-none p-0 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={row.length === 1 ? 800 : 500}
                  height={row.length === 1 ? 600 : 625}
                  className="w-full h-auto transition-opacity duration-400 group-hover:opacity-92"
                  sizes={
                    row.length === 1
                      ? "(max-width: 800px) 100vw, 800px"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  loading={img.index === 0 ? "eager" : "lazy"}
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      ))}
    </div>
  );
}

export function GalleryPage({ category }: { category: Category }) {
  const others = getOtherCategories(category.slug);

  return (
    <>
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16">
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-heading uppercase tracking-[0.04em] mb-12">
          {category.title}
        </h1>

        <LightboxGallery images={category.images}>
          {(open) => (
            <>
              {/* Video (if present) */}
              {category.video && (
                <ScrollReveal className="mb-6">
                  <div className="w-full">
                    <video
                      className="w-full rounded-sm bg-black"
                      controls
                      autoPlay
                      muted
                      playsInline
                      loop
                      preload="metadata"
                    >
                      <source src={category.video.src} type="video/mp4" />
                    </video>
                  </div>
                </ScrollReveal>
              )}

              {/* Gallery */}
              {category.layout === "paired" ? (
                <PairedGallery images={category.images} open={open} />
              ) : (
                <div
                  className={
                    category.layout === "grid-2col"
                      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                      : "flex flex-col gap-6"
                  }
                >
                  {category.images.map((img, i) => (
                    <ScrollReveal key={img.src} delay={i * 60}>
                      <button
                        onClick={() => open(i)}
                        className="block w-full cursor-pointer overflow-hidden bg-transparent border-none p-0 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1000}
                          height={category.layout === "grid-2col" ? 1250 : 700}
                          className={`w-full h-auto transition-opacity duration-400 group-hover:opacity-92 ${
                            category.layout === "grid-2col"
                              ? "aspect-[4/5] object-cover"
                              : ""
                          }`}
                          sizes={
                            category.layout === "grid-2col"
                              ? "(max-width: 768px) 100vw, 50vw"
                              : "(max-width: 1000px) 100vw, 1000px"
                          }
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </>
          )}
        </LightboxGallery>
      </div>

      {/* You May Also Like */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 border-t border-border">
        <h2 className="font-serif text-xl font-normal text-heading mb-8">
          You may also like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {others.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 80}>
              <Link href={`/${cat.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={cat.coverImage}
                    alt={cat.coverAlt}
                    fill
                    className="object-cover transition-opacity duration-400 group-hover:opacity-85"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <span className="font-serif text-base font-normal text-heading mt-3 block group-hover:text-accent transition-colors">
                  {cat.title}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
