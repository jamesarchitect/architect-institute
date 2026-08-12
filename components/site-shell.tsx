import Link from "next/link";

const nav = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/convene", label: "Convene" },
  { href: "/steward", label: "Steward" },
  { href: "/advise", label: "Advise" },
  { href: "/cultivate", label: "Cultivate" },
  { href: "/people", label: "People" },
];

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-12 lg:px-20">
        <Link
          href="/"
          className="shrink-0 text-xs uppercase tracking-[0.22em] text-black"
        >
          The Architect Institute
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500 md:justify-end md:gap-x-6 md:text-xs">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                current === item.label
                  ? "text-black"
                  : "transition-colors hover:text-black"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto flex max-w-7xl justify-between border-t border-black/10 px-6 py-8 text-xs uppercase tracking-[0.22em] text-neutral-500 md:px-12 lg:px-20">
      <span>© The Architect Institute 2026</span>
      <Link href="/" className="transition-colors hover:text-black">
        architect.institute
      </Link>
    </footer>
  );
}

export function PageBackLink() {
  return (
    <Link
      href="/"
      className="text-xs uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:text-black"
    >
      ← The Architect Institute
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
