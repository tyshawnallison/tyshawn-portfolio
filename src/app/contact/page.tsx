import type { Metadata } from "next";
import { measurements } from "@/lib/portfolio-data";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tyshawn Allison for bookings, collaborations, and creative projects.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16">
      <ScrollReveal>
        <header className="mb-12">
          <span className="block text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent mb-3">
            Contact
          </span>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-heading">
            Get In Touch
          </h1>
        </header>
      </ScrollReveal>

      <div className="max-w-[640px]">
        <ScrollReveal delay={100}>
          <p className="text-base leading-relaxed text-text mb-10">
            Open to collaborations, bookings, and creative projects. For
            inquiries — reach out below.
          </p>
        </ScrollReveal>

        {/* Measurements */}
        <ScrollReveal delay={200}>
          <div className="mb-12 pb-12 border-b border-border">
            <h2 className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-accent mb-5">
              Measurements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-4">
              {measurements.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[0.65rem] font-medium tracking-[0.12em] uppercase text-muted">
                    {m.label}
                  </span>
                  <span className="font-serif text-lg text-heading">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={300}>
          <ContactForm />
        </ScrollReveal>

        {/* Instagram */}
        <ScrollReveal delay={400}>
          <div className="mt-12 pt-12 border-t border-border">
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
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <span className="font-serif text-lg text-heading group-hover:text-accent transition-colors">
                @tyshawn.allison
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
