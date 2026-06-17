"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt: string }[];
}

export function Lightbox({ images }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, next, prev]);

  // Swipe support for mobile
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
      touchStartX.current = null;
    },
    [next, prev]
  );

  const open = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  return {
    open,
    element: isOpen ? (
      <div
        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center animate-[fadeIn_0.3s_ease]"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="dialog"
        aria-label="Image viewer"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl md:text-4xl bg-transparent border-none cursor-pointer hover:opacity-50 transition-opacity p-3 z-10"
          aria-label="Close"
        >
          &times;
        </button>

        <button
          onClick={prev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white bg-transparent border-none cursor-pointer hover:opacity-50 transition-opacity p-3"
          aria-label="Previous image"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white bg-transparent border-none cursor-pointer hover:opacity-50 transition-opacity p-3"
          aria-label="Next image"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="relative max-w-[90vw] max-h-[88vh] w-full h-full flex items-center justify-center">
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1200}
            height={1600}
            className="max-w-full max-h-[88vh] w-auto h-auto object-contain animate-[scaleIn_0.3s_ease]"
            sizes="90vw"
            preload
          />
        </div>

        <span className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.15em] text-white/50">
          {activeIndex + 1} / {images.length}
        </span>
      </div>
    ) : null,
  };
}

// Wrapper to use as a component with render prop pattern
export function LightboxGallery({
  images,
  children,
}: {
  images: { src: string; alt: string }[];
  children: (open: (index: number) => void) => React.ReactNode;
}) {
  const lightbox = Lightbox({ images });
  return (
    <>
      {children(lightbox.open)}
      {lightbox.element}
    </>
  );
}
