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

      if (isHome) {
        const heroName = document.getElementById("hero-name");
        if (heroName) {
          const rect = heroName.getBoundingClientRect();
          setPastHeroName(rect.bottom < 0);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
      <div className="flex items-center justify-between px-6 md:grid md:grid-cols-3 md:px-10">
        {/* Left links — desktop only */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/" label="Work" active={pathname === "/"} />
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
          className={`font-serif text-lg md:text-xl font-normal text-heading uppercase tracking-[0.08em] text-center hover:opacity-60 transition-all duration-500 whitespace-nowrap bg-transparent border-none cursor-pointer ${
            isHome && !pastHeroName
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          Tyshawn Allison
        </button>

        {/* Right — IG icon (desktop) */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href="https://www.instagram.com/tyshawn.allison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-heading transition-colors p-1"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none z-[51]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[1.5px] bg-heading transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.75px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-heading transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.75px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(10, 10, 10, 0.98)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Work
        </Link>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Contact
        </Link>
        <a
          href="https://www.instagram.com/tyshawn.allison/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-[0.2em] uppercase text-heading"
        >
          Instagram
        </a>
      </div>
    </nav>
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

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[18px] h-[18px]"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
