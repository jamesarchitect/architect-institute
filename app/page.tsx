"use client";

import Link from "next/link";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-20 h-px w-full bg-neutral-900/10" />;
}

const functions = [
  {
    title: "Convene",
    href: "/convene",
    description: "Closed, high-trust rooms for alignment & shared direction",
  },
  {
    title: "Steward",
    href: "/steward",
    description:
      "Long-arc signal work — strategic intelligence, research, policy shaping, & blueprint development",
  },
  {
    title: "Advise",
    href: "/advise",
    description:
      "Applied sovereign & strategic deployment embedded in live systems",
  },
  {
    title: "Cultivate",
    href: "/cultivate",
    description: "Future leadership for an era of systemic transition",
  },
];

const people = [
  {
    name: "James Tunningley",
    role: "Executive Director",
    href: "https://www.linkedin.com/in/james-tunningley/",
  },
  {
    name: "Ruben Amenyogbo",
    role: "Director",
    href: "https://www.linkedin.com/in/rgjamenyogbo/",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#111] [font-family:'Courier_New',monospace]">
      <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-[#f8f7f2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="text-xs uppercase tracking-[0.22em]">
            The Architect Institute
          </div>

          <nav className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-neutral-500 md:flex">
            <a href="#thesis">Thesis</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#capital">Capital</a>
            <Link href="/people">People</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-20">
        <div className="max-w-6xl">
          <h1 className="text-5xl leading-[0.95] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
            A long-horizon institute shaping the future of institutions,
            technology, governance, & society.
          </h1>
        </div>
      </section>

      <section
        id="thesis"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Core Thesis</SectionLabel>

          <div className="max-w-5xl space-y-10">
            <p className="text-3xl leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
              We are entering an era of extraordinary technological acceleration
              alongside deep institutional fragmentation, social atomisation,
              and declining trust.
            </p>

            <p className="text-3xl leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
              The Architect Institute convenes exceptional people, advises
              consequential organisations, and cultivates long-term networks
              shaping the future of leadership, governance, technology, capital,
              and society.
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>What We Do</SectionLabel>

          <div className="space-y-16">
            {functions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block border-b border-neutral-900/10 pb-12"
              >
                <h2 className="inline-block text-4xl tracking-[-0.04em] underline underline-offset-8 decoration-neutral-400 transition-colors group-hover:decoration-black [font-family:ui-sans-serif,system-ui,sans-serif] md:text-6xl">
                  {item.title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.24em] text-neutral-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="capital"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Capital</SectionLabel>

          <div>
            <p className="max-w-5xl text-3xl leading-[1.25] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif]">
              ARCHITECT deploys patient, long-horizon capital via{" "}
              <a
                href="https://architect.systems/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Architect Systems Capital Management
              </a>
              , a Swiss-regulated investment manager focused on frontier
              technologies.
            </p>
          </div>
        </div>
      </section>

      <section
        id="people"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>People</SectionLabel>

          <div className="space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              {people.map((person) => (
                <a
                  key={person.name}
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-neutral-900/10 p-6"
                >
                  <p className="font-bold underline underline-offset-4">
                    {person.name}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {person.role}
                  </p>
                </a>
              ))}
            </div>

            <p className="text-sm leading-7 text-neutral-600">
              Our{" "}
              <Link
                href="/people"
                className="font-bold underline underline-offset-4"
              >
                Advisors
              </Link>{" "}
              are outstanding leaders in their respective fields.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <div />

          <p className="max-w-6xl text-5xl leading-[1.02] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
            A trusted global node for coordination during a period of
            civilizational transition.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl justify-between border-t border-neutral-900/10 px-6 py-8 text-xs uppercase tracking-[0.22em] text-neutral-500 md:px-12 lg:px-20">
        <span>© The Architect Institute 2026</span>
      </footer>
    </main>
  );
}