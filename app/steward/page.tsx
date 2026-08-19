import { PageBackLink, SiteShell } from "@/components/site-shell";

const intelligence = [
  "Strategic Intelligence",
  "Research",
  "Policy Shaping",
  "Blueprint Development",
  "Statements, Letters & Op-Eds",
  "Signals / emerging-issue work",
];

const fellows = [
  {
    title: "Practitioners-in-Residence",
    description:
      "Builders and operators embedded for periods of focused inquiry and field work.",
    status: "Coming Soon",
  },
  {
    title: "Digital Public Economies Fellows",
    description:
      "A curated cohort of sovereign operators and system builders shaping digital public infrastructure.",
    status: "Coming Soon",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold tracking-[0.02em] text-black">
      {children}
    </h2>
  );
}

function SectionIntro({
  children,
  nowrapDesktop = false,
}: {
  children: React.ReactNode;
  nowrapDesktop?: boolean;
}) {
  return (
    <p
      className={`mt-3 mb-8 max-w-none text-sm leading-7 text-neutral-600 ${
        nowrapDesktop ? "md:whitespace-nowrap" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default function StewardPage() {
  return (
    <SiteShell current="Steward">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Steward
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
          Architect carries relationships, ideas and questions forward —
          developing the knowledge, networks and people required to turn moments
          of alignment into enduring fields of work.
        </p>
      </div>

      <section className="mt-24">
        <SectionHeading>I. Intelligence & Ideas</SectionHeading>
        <SectionIntro nowrapDesktop>
          Long-arc signal work that turns conversation into durable intellectual
          infrastructure.
        </SectionIntro>

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
        <SectionHeading>II. Networks & Coalitions</SectionHeading>
        <SectionIntro>
          Architect builds sustained networks around consequential questions.
        </SectionIntro>

        <div className="border border-black/15 p-7 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <p className="text-lg font-bold">Architect Council</p>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Coming Soon
            </p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
            A senior network providing judgement, challenge and institutional
            connectivity.
          </p>
        </div>
      </section>

      <section className="mb-8 mt-24">
        <SectionHeading>III. Fellows & Future Leaders</SectionHeading>
        <SectionIntro nowrapDesktop>
          Cultivating the people who will carry new institutional ideas forward.
        </SectionIntro>

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
