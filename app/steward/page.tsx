import { PageBackLink, SiteShell } from "@/components/site-shell";

const work = [
  {
    title: "Advanced Independent Risk Panel (AIRP)",
    year: "2025",
    description:
      "Independent judgment infrastructure for frontier risk, governance, and institutional decision-making.",
  },
  {
    title: "Family Office Digital Asset Education Series (DAES)",
    year: "2026",
    description:
      "Private education series for family offices on digital assets, market structure, custody, and risk.",
  },
];

const signals = [
  "Strategic Intelligence",
  "Research",
  "Policy Shaping",
  "Blueprint Development",
  "Statements, Letters, & Op-Eds",
];

export default function StewardPage() {
  return (
    <SiteShell current="Steward">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Steward
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Long-arc signal work — strategic intelligence, research, policy
          shaping, and blueprint development.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Signal Work
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {signals.map((item) => (
            <div key={item} className="border border-black/15 p-7 md:p-8">
              <p className="text-base tracking-[0.02em]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 mb-8">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Selected Work
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {work.map((item) => (
            <div key={item.title} className="border border-black/15 p-7 md:p-8">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
                {item.year}
              </p>
              <p className="mt-5 text-sm leading-7 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
