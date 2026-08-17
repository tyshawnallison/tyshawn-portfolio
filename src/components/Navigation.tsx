"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [pastHeroName, setPastHeroName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Use IntersectionObserver to detect exactly when hero name
  // scrolls behind the nav bar (rootMargin accounts for nav height)
  useEffect(() => {
    if (!isHome) return;
    const heroName = document.getElementById("hero-name");
    if (!heroName) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHeroName(!entry.isIntersecting);
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroName);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "py-5"
        }`}
        style={{
          background: "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between px-6 lg:grid lg:grid-cols-3 lg:px-10" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
          {/* Left links — desktop only */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/" label="Work" active={pathname === "/"} />
            <NavLink
              href="/collabs"
              label="Collabs"
              active={pathname === "/collabs"}
            />
            <NavLink
              href="/testimonials"
              label="Testimonials"
              active={pathname === "/testimonials"}
            />
            <NavLink
              href="/contact"
              label="Contact"
              active={pathname === "/contact"}
            />
          </div>

          {/* Center — name */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-serif text-lg lg:text-xl font-normal text-heading uppercase tracking-[0.08em] text-center hover:opacity-60 transition-opacity duration-75 whitespace-nowrap bg-transparent border-none cursor-pointer ${
              isHome && !pastHeroName
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            Tyshawn Allison
          </button>

          {/* Right — empty for grid centering */}
          <div className="hidden lg:block" />

          {/* Mobile hamburger — hidden when menu open (X button is inside overlay) */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none ${
              menuOpen ? "opacity-0 pointer-events-none" : ""
            }`}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px] bg-heading" />
            <span className="block w-6 h-[1.5px] bg-heading" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay — outside nav to avoid stacking context / iOS fixed-in-fixed bugs */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(10, 10, 10, 0.98)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-6 p-2 bg-transparent border-none"
          aria-label="Close menu"
          style={{ top: "calc(1.25rem + env(safe-area-inset-top, 0px))" }}
        >
          <span className="block w-6 h-[1.5px] bg-heading translate-y-[0.75px] rotate-45" />
          <span className="block w-6 h-[1.5px] bg-heading -translate-y-[0.75px] -rotate-45" />
        </button>

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Work
        </Link>
        <Link
          href="/collabs"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Collabs
        </Link>
        <Link
          href="/testimonials"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Testimonials
        </Link>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Contact
        </Link>
      </div>
    </>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative text-xs font-normal tracking-[0.14em] uppercase transition-colors group ${
        active ? "text-heading" : "text-text hover:text-heading"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-heading transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

