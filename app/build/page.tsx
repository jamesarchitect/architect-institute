import { PageBackLink, SiteShell } from "@/components/site-shell";

const capabilities = [
  {
    title: "Advise",
    text: "Selective strategic counsel embedded in consequential institutions and live systems.",
  },
  {
    title: "Field-build",
    text: "Organise people, knowledge and capital around emerging fields that do not yet have sufficient institutional infrastructure.",
  },
  {
    title: "Design & Pilot",
    text: "Translate emerging ideas into frameworks, mechanisms, pilots and practical institutional experiments.",
  },
  {
    title: "Institutionalise",
    text: "Help strong interventions find adoption, durable governance, capital and institutional homes.",
  },
];

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
    title: "Public Institutions & New Institutional Models",
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
    title: "Technology & Mechanisms",
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

export default function BuildPage() {
  return (
    <SiteShell current="Build">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Build
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
          Where Architect identifies an important institutional gap, we work
          with partners to translate insight into practical systems, mechanisms
          and institutions.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          How we build
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilities.map((item) => (
            <div key={item.title}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-8 mt-24 space-y-20">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
              {section.title}
            </h2>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block cursor-pointer border border-black/15 p-7 transition-colors hover:border-black hover:bg-neutral-50 md:p-8"
                >
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
