import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Collabs",
  description:
    "Selected creative work, brand moments, and visual projects by Tyshawn Allison.",
};

const collabs = [
  {
    src: "/images/collabs/collab-01.jpg",
    alt: "Creative shoot with @ensuzyastic",
    handle: "@ensuzyastic",
    href: "https://www.instagram.com/ensuzyastic/",
    description: "Creative shoot.",
  },
  {
    src: "/images/collabs/collab-02.jpg",
    alt: "Styled visuals with @itssaralinda",
    handle: "@itssaralinda",
    href: "https://www.instagram.com/itssaralinda/",
    description: "Styled visuals.",
  },
];

export default function CollabsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16 bg-[linear-gradient(to_bottom,#0a0a0a_0%,#100e0c_40%,#0a0a0a_100%)]">
      <ScrollReveal>
        <header className="mb-16">
          <span className="block text-[0.7rem] font-medium tracking-[0.25em] uppercase text-accent mb-3">
            Collabs
          </span>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-heading uppercase tracking-[0.04em]">
            Selected creative work, brand moments, and visual projects.
          </h1>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {collabs.map((collab, i) => (
          <ScrollReveal key={collab.src} delay={i * 100}>
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={collab.src}
                  alt={collab.alt}
                  fill
                  className="object-cover transition-opacity duration-400 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="mt-5">
                <a
                  href={collab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg text-heading hover:text-accent transition-colors"
                >
                  {collab.handle}
                </a>
                <p className="mt-1 text-sm text-text leading-relaxed">
                  {collab.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal delay={300}>
        <div className="mt-20 pt-16 border-t border-border text-center">
          <p className="font-serif text-xl md:text-2xl font-light text-heading leading-relaxed">
            Interested in creating something together?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-accent text-black px-10 py-4
              text-[0.7rem] tracking-[0.25em] uppercase font-medium
              hover:opacity-85 transition-opacity duration-300"
          >
            Contact Me
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
