import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What photographers and creatives say about working with Tyshawn Allison.",
};

const testimonials = [
  {
    quote:
      "Having to work with Tyshawn as a model was a fun time! Definitely passionate about what he does. Tyshawn is easy to work with. I definitely would recommend him to other photographers 10/10.",
    name: "oscarm.photography_",
  },
  {
    quote:
      "I've known Tyshawn for a long time and he has shown that he is consistent and reliable when it comes to work. He takes modeling very seriously and would be a great candidate for any brand that needs a model. He's determined and love to connect with new people!",
    name: "films_by_isaac",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16 bg-[linear-gradient(to_bottom,#0a0a0a_0%,#100e0c_40%,#0a0a0a_100%)]">
      <ScrollReveal>
        <header className="mb-12">
          <span className="block text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent mb-3">
            Testimonials
          </span>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-heading uppercase tracking-[0.04em]">
            What They Say
          </h1>
        </header>
      </ScrollReveal>

      <div className="max-w-[640px]">
        <ScrollReveal delay={100}>
          <p className="text-base leading-relaxed text-text mb-10">
            Feedback from photographers and creatives I&apos;ve had the pleasure
            of working with.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={200 + i * 100}>
              <div className="bg-bg-elevated border border-border p-8 md:p-10">
                <p className="font-serif text-lg md:text-xl text-heading leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent">
                  {t.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
