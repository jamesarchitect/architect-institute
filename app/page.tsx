"use client";

import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-20 h-px w-full bg-black/10" />;
}

const pillars = [
  {
    title: "Convene",
    href: "/convene",
    description:
      "High-trust rooms for alignment, exchange, coordination & shared direction.",
  },
  {
    title: "Steward",
    href: "/steward",
    description:
      "Research, networks, Fellows & long-arc institutional thinking.",
  },
  {
    title: "Build",
    href: "/build",
    description:
      "Strategic advice, field-building & practical institutional interventions.",
  },
];

type Programme = {
  title: string;
  status: string;
  href?: string;
  statement: string;
};

const programmes: Programme[] = [
  {
    title: "Digital Risk",
    status: "Flagship Programme",
    href: "/dialogues",
    statement:
      "Explores how institutions understand and govern systemic technological risk that moves across traditional boundaries.",
  },
  {
    title: "AI, Institutions & Democracy",
    status: "In Formation",
    statement:
      "Explores how AI is changing collective decision-making, governance and institutional legitimacy.",
  },
  {
    title: "Culture & the Human Future",
    status: "In Development",
    statement:
      "Explores how technological change is reshaping creativity, identity, meaning and the cultures we build together.",
  },
];

const people = [
  {
    name: "James Tunningley",
    role: "Co-Founder & President",
    href: "https://www.linkedin.com/in/james-tunningley/",
  },
  {
    name: "Ruben Amenyogbo",
    role: "Co-Founder",
    href: "https://www.linkedin.com/in/rgjamenyogbo/",
  },
];

function ProgrammeCard({ programme }: { programme: Programme }) {
  const body = (
    <>
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <h2 className="text-2xl tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-3xl">
          {programme.title}
        </h2>
        <p className="shrink-0 text-xs uppercase tracking-[0.22em] text-neutral-500">
          {programme.status}
        </p>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-7 text-black md:text-lg md:leading-8">
        {programme.statement}
      </p>

      {programme.href ? (
        <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-600 transition-colors group-hover:text-black">
          View programme
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      ) : null}
    </>
  );

  if (programme.href) {
    return (
      <Link
        href={programme.href}
        className="group block cursor-pointer border border-black/15 p-8 transition-colors hover:border-black hover:bg-neutral-50 md:p-10"
      >
        {body}
      </Link>
    );
  }

  return (
    <div className="border border-black/15 p-8 md:p-10">{body}</div>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black [font-family:'Courier_New',monospace]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-36 lg:px-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl leading-[0.95] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
            A long-horizon institute shaping the future of technology,
            institutions, culture, & humanity.
          </h1>
        </div>
      </section>

      <section
        id="thesis"
        className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Core Thesis</SectionLabel>

          <div className="max-w-4xl space-y-8">
            <p className="text-2xl leading-[1.25] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
              Extraordinary technological acceleration is reshaping society
              faster than many of our institutions and systems of trust can
              adapt.
            </p>

            <p className="text-xl leading-[1.3] tracking-[-0.03em] text-neutral-700 [font-family:ui-sans-serif,system-ui,sans-serif] md:text-2xl md:leading-[1.35]">
              Architect works in the space between what is changing and what
              must be rebuilt: we convene people who rarely work together,
              steward the ideas and networks that emerge, and build where
              existing institutions and mechanisms are insufficient.
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>What We Do</SectionLabel>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {pillars.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-h-[11rem] cursor-pointer flex-col border border-black/15 bg-white p-8 transition-colors hover:border-black hover:bg-neutral-50 md:min-h-[12.5rem] md:p-9"
              >
                <div className="flex h-10 items-start justify-between gap-3">
                  <h2 className="text-2xl tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-3xl">
                    {item.title}
                  </h2>
                  <span
                    aria-hidden
                    className="mt-1 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                  >
                    →
                  </span>
                </div>
                <p className="mt-6 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="programmes"
        className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Fields of Work</SectionLabel>

          <div className="space-y-8 md:space-y-10">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.title} programme={programme} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="capital"
        className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Capital</SectionLabel>

          <div className="max-w-4xl">
            <p className="text-2xl leading-[1.3] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
              ARCHITECT deploys patient, long-horizon capital via{" "}
              <a
                href="https://architect.systems/"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-55"
              >
                Architect Systems Capital Management
              </a>
            </p>
          </div>
        </div>
      </section>

      <section
        id="people"
        className="mx-auto w-full max-w-7xl px-6 pb-28 md:px-12 md:pb-36 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>People</SectionLabel>

          <div className="space-y-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {people.map((person) => (
                <a
                  key={person.name}
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block cursor-pointer border border-black/15 p-6 transition-colors hover:border-black hover:bg-neutral-50"
                >
                  <p className="font-bold transition-opacity group-hover:opacity-70">
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
                className="font-bold transition-opacity hover:opacity-55"
              >
                Advisors
              </Link>{" "}
              are outstanding leaders in their respective fields.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
