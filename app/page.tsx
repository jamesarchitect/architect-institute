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

const functions = [
  {
    title: "Convene",
    href: "/convene",
    description: "High-trust gatherings and dialogues",
  },
  {
    title: "Steward",
    href: "/steward",
    description: "Research, ideas and institutional thinking",
  },
  {
    title: "Advise",
    href: "/advise",
    description: "Strategic counsel and implementation",
  },
  {
    title: "Cultivate",
    href: "/cultivate",
    description: "Networks and future leaders",
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

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black [font-family:'Courier_New',monospace]">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-36 lg:px-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl leading-[0.95] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
            A long-horizon institute shaping the future of institutions,
            technology, governance, & society.
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

          <div className="max-w-4xl space-y-10">
            <p className="text-2xl leading-[1.25] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
              We are entering an era of extraordinary technological acceleration
              alongside deep institutional fragmentation, social atomisation,
              and declining trust.
            </p>

            <p className="text-2xl leading-[1.25] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
              We convene exceptional people and work with institutions shaping
              the future.
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

          <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2 md:gap-5 md:pt-4">
            {functions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-h-[11rem] cursor-pointer flex-col justify-between border border-black/15 bg-white p-8 transition-colors hover:border-black hover:bg-neutral-50 md:min-h-[12.5rem] md:p-10"
              >
                <div className="flex items-start justify-between gap-4">
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
                <p className="mt-8 max-w-xs text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </Link>
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

          <p className="max-w-4xl text-2xl leading-[1.3] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
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
