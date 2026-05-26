import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Collabs",
  description: "Creative partnerships, brand work, and projects Tyshawn Allison has been part of.",
};

export default function CollabsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16 bg-[linear-gradient(to_bottom,#0a0a0a_0%,#100e0c_40%,#0a0a0a_100%)]">
      <ScrollReveal>
        <header className="mb-12">
          <span className="block text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent mb-3">
            Collabs
          </span>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-heading uppercase tracking-[0.04em]">
            Creative partnerships, brand work, and projects I&apos;ve been part of.
          </h1>
        </header>
      </ScrollReveal>

      <div className="max-w-[640px]">
        <ScrollReveal delay={100}>
          <div className="bg-bg-elevated border border-border p-8 md:p-10">
            <p className="font-serif text-lg md:text-xl text-heading leading-relaxed">
              Coming soon — this section will feature selected collaborations,
              brand work, photoshoots, and creative projects.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
