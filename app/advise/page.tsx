import { PageBackLink, SiteShell } from "@/components/site-shell";

const sections = [
  {
    title: "Field Building",
    items: [
      {
        name: "Protocol Labs",
        href: "https://www.plrd.org/areas/economies-governance/",
        description: "Governance & Economies",
      },
      {
        name: "Edge City",
        href: "https://www.edgecity.live/",
        description:
          "Society incubation at the frontiers of technology, science, and culture",
      },
    ],
  },
  {
    title: "Public Institutions & Special Economic Zones",
    items: [
      {
        name: "Government of Bhutan",
        href: "https://gmc.bt/",
        description: "Gelephu Mindfulness City",
      },
      {
        name: "[Redacted South American Nation]",
        href: "#",
        description: "A New Operating System for the State: DPI + AI + Crypto",
      },
      {
        name: "Crecimiento",
        href: "https://www.crecimiento.build/",
        description: "Transforming Argentina into a leading startup and AI hub",
      },
      {
        name: "Anden",
        href: "https://www.anden.tech/",
        description: "The first Digital SEZ in an emerging market",
      },
    ],
  },
  {
    title: "Technology Platforms",
    items: [
      {
        name: "Broad Listening",
        href: "https://www.broadlistening.org/",
        description: "Democratic AI for sensemaking",
      },
      {
        name: "Simocracy",
        href: "https://www.simocracy.org/",
        description: "AI digital twins at the governance table",
      },
      {
        name: "Zama",
        href: "https://www.zama.org/",
        description:
          "Institutional-grade open-source Fully Homomorphic Encryption (FHE)",
      },
      {
        name: "Cosmos",
        href: "https://cosmos.network/",
        description: "Sovereign & Central Bank Pilot",
      },
    ],
  },
];

export default function AdvisePage() {
  return (
    <SiteShell current="Advise">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Advise
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Applied sovereign and strategic deployment embedded in live systems.
        </p>
      </div>

      <div className="mb-8 mt-20 space-y-20">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
              {section.title}
            </h2>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="border border-black/15 p-7 md:p-8"
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="block text-lg font-bold underline underline-offset-4"
                  >
                    {item.name}
                  </a>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
