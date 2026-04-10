import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <span className="font-serif text-base text-heading">
          Tyshawn Allison
        </span>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors"
          >
            Work
          </Link>
          <a
            href="https://www.instagram.com/tyshawn.allison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors"
          >
            Instagram
          </a>
          <Link
            href="/contact"
            className="text-[0.7rem] tracking-[0.12em] uppercase text-muted hover:text-heading transition-colors"
          >
            Contact
          </Link>
        </div>
        <span className="text-[0.7rem] text-muted">&copy; 2026</span>
      </div>
    </footer>
  );
}
