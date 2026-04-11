import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/portfolio-data";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Tyshawn Allison — cornrow hairstyle, staircase, warm golden tones"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-[900px]">
          <h1 id="hero-name" className="font-serif text-[clamp(3rem,8vw,7rem)] font-bold text-white leading-[0.95] tracking-[0.02em] uppercase">
            Tyshawn
            <br />
            Allison
          </h1>
          <p className="mt-4 font-serif text-[clamp(1.5rem,4vw,3.5rem)] font-light text-white/80 uppercase tracking-[0.06em]">
            Chicago
          </p>
          <p className="mt-3 text-sm text-white/50 font-sans tracking-wide">
            Editorial. Commercial. Lifestyle.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-block bg-accent text-black px-10 py-4
              text-[0.7rem] tracking-[0.25em] uppercase font-medium
              hover:opacity-85 transition-opacity duration-300"
          >
            See Work
          </a>
        </div>
      </section>

      {/* Category Grid */}
      <section id="portfolio" className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 px-0 pt-0 bg-bg">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.slug} delay={i * 80}>
            <Link href={`/${cat.slug}`} className="group block relative overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src={cat.coverImage}
                  alt={cat.coverAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-400 max-md:opacity-85">
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <h2 className="font-serif text-xl md:text-2xl font-normal text-white drop-shadow-lg">
                      {cat.title}
                    </h2>
                    <p className="text-[0.7rem] tracking-[0.12em] uppercase text-white/60 mt-1">
                      {cat.year}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      {/* Brief intro */}
      <section className="max-w-[900px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center bg-[linear-gradient(to_bottom,#0a0a0a,#0f0f0f)]">
        <ScrollReveal>
          <p className="font-serif text-2xl md:text-3xl font-light text-heading leading-relaxed">
            Chicago-based model. Featured in MALVIE Magazine.
          </p>
          <p className="mt-6 text-base text-text leading-relaxed max-w-[560px] mx-auto">
            Open to collaborations, editorial work, brand partnerships, and
            creative projects.
          </p>
        </ScrollReveal>
      </section>

      {/* Instagram strip */}
      <section className="border-t border-b border-border py-12 md:py-16 bg-[linear-gradient(to_bottom,#0f0f0f,#0a0a0a)]">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent">
              Follow Along
            </span>
            <a
              href="https://www.instagram.com/tyshawn.allison/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-text group-hover:text-heading transition-colors"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span className="font-serif text-lg text-heading group-hover:text-accent transition-colors">
                @tyshawn.allison
              </span>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
