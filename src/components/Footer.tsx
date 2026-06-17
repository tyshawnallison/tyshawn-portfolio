import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-10 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <span className="font-serif text-base text-heading">
          Tyshawn Allison
        </span>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <Link
            href="/"
            className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors py-1"
          >
            Work
          </Link>
          <Link
            href="/collabs"
            className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors py-1"
          >
            Collabs
          </Link>
          <Link
            href="/testimonials"
            className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors py-1"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors py-1"
          >
            Contact
          </Link>
          <a
            href="https://www.instagram.com/tyshawn.allison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors py-1"
          >
            Instagram
          </a>
        </div>
        <span className="text-[0.75rem] text-muted">&copy; 2026</span>
      </div>
    </footer>
  );
}
