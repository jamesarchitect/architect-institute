import { PageBackLink, SiteShell } from "@/components/site-shell";

const intelligence = [
  "Strategic Intelligence",
  "Research",
  "Policy Shaping",
  "Blueprint Development",
  "Statements, Letters & Op-Eds",
  "Signals / emerging-issue work",
];

const networks = [
  { name: "Architect Council", status: "Coming Soon" },
  { name: "Programme Councils", status: "Coming Soon" },
  { name: "Expert Circles", status: "Coming Soon" },
  { name: "Working Groups", status: "Coming Soon" },
  { name: "Institutional partnerships", status: null },
  { name: "Programme networks", status: null },
];

const fellows = [
  {
    title: "Architect Fellows",
    description:
      "Practitioners and thinkers attached to enduring questions across Architect programmes.",
    status: "Coming Soon",
  },
  {
    title: "Practitioners-in-residence",
    description:
      "Builders and operators embedded for periods of focused inquiry and field work.",
    status: "Coming Soon",
  },
  {
    title: "Digital Public Economies Fellowship",
    description:
      "A curated cohort of sovereign operators and system builders shaping digital public infrastructure.",
    status: "Coming Soon",
  },
];

export default function StewardPage() {
  return (
    <SiteShell current="Steward">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Steward
        </h1>

        <p className="mt-4 text-sm font-medium tracking-[0.02em] text-black md:text-base">
          Make the room compound.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          Architect carries relationships, ideas and questions forward —
          developing the knowledge, networks and people required to turn moments
          of alignment into enduring fields of work.
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.18em] text-neutral-500">
          Knowledge + networks + people
        </p>
      </div>

      <section className="mt-24">
        <h2 className="mb-3 text-xs uppercase tracking-[0.24em] text-neutral-500">
          I. Intelligence & Ideas
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-7 text-neutral-600">
          Long-arc signal work that turns conversation into durable intellectual
          infrastructure.
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {intelligence.map((item) => (
            <div key={item} className="border border-black/15 p-7 md:p-8">
              <p className="text-base tracking-[0.02em]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-black/15 p-7 md:p-8">
          <p className="text-lg font-bold">
            Advanced Independent Risk Panel (AIRP)
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
            2025
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">
            Independent judgment infrastructure for frontier risk, governance,
            and institutional decision-making.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-3 text-xs uppercase tracking-[0.24em] text-neutral-500">
          II. Networks
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-7 text-neutral-600">
          Architect does not simply convene people and then disperse them. We
          build sustained networks around consequential questions.
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {networks.map((item) => (
            <div key={item.name} className="border border-black/15 p-7 md:p-8">
              <p className="text-base tracking-[0.02em]">{item.name}</p>
              {item.status ? (
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {item.status}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 mt-24">
        <h2 className="mb-3 text-xs uppercase tracking-[0.24em] text-neutral-500">
          III. Fellows & Future Leaders
        </h2>
        <p className="mb-4 max-w-2xl text-base leading-7 text-black">
          Cultivating the people who will carry new institutional ideas forward.
        </p>
        <p className="mb-8 max-w-2xl text-sm leading-7 text-neutral-600">
          Researchers, builders and practitioners attached to specific
          programmes — and future leadership initiatives still taking shape.
        </p>

        <div className="space-y-4 md:space-y-5">
          {fellows.map((item) => (
            <div key={item.title} className="border border-black/15 p-7 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {item.status}
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
