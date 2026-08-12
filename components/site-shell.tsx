"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const whatWeDo = [
  { href: "/convene", label: "Convene" },
  { href: "/steward", label: "Steward" },
  { href: "/advise", label: "Advise" },
  { href: "/cultivate", label: "Cultivate" },
];

export function SiteHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const whatWeDoActive = whatWeDo.some((item) => item.label === current);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-6 px-6 py-5 md:items-center md:px-12 lg:px-20">
        <Link
          href="/"
          className="shrink-0 pt-0.5 text-xs uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-60"
        >
          The Architect Institute
        </Link>

        <nav className="flex flex-col items-end gap-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500 md:flex-row md:items-center md:gap-8 md:text-xs">
          <div
            ref={rootRef}
            className="relative"
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) setOpen(true);
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover: hover)").matches) setOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={menuId}
              aria-haspopup="menu"
              onClick={() => setOpen((value) => !value)}
              className={`cursor-pointer bg-transparent p-0 transition-colors ${
                whatWeDoActive || open
                  ? "text-black"
                  : "hover:text-neutral-700"
              }`}
            >
              WHAT WE DO
            </button>

            {/* Desktop dropdown */}
            <div
              id={menuId}
              role="menu"
              className={`absolute right-0 top-full z-50 hidden min-w-[11rem] border border-black/10 bg-white py-3 md:block ${
                open
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {whatWeDo.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 normal-case tracking-[0.04em] transition-colors ${
                    current === item.label
                      ? "text-black"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile accordion */}
            {open ? (
              <div className="mt-3 space-y-2 text-right md:hidden">
                {whatWeDo.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block normal-case tracking-[0.04em] transition-colors ${
                      current === item.label
                        ? "text-black"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/people"
            className={`transition-colors ${
              current === "People" ? "text-black" : "hover:text-neutral-700"
            }`}
          >
            People
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-black/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.22em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:px-12 lg:px-20">
        <span className="shrink-0">© The Architect Institute 2026</span>
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-60 sm:text-right"
        >
          architect.institute
        </Link>
      </div>
    </footer>
  );
}

export function PageBackLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:text-neutral-700"
    >
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:-translate-x-1"
      >
        ←
      </span>
      The Architect Institute
    </Link>
  );
}

export function SiteShell({
  children,
  current,
}: {
  children: React.ReactNode;
  current?: string;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black [font-family:'Courier_New',monospace]">
      <SiteHeader current={current} />
      <div className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        {children}
      </div>
      <SiteFooter />
    </main>
  );
}
