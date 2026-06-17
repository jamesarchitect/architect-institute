import Link from "next/link";
import { Landmark } from "lucide-react";

const sections = [
  {
    title: "Field Stewardship",
    items: [
      {
        name: "Protocol Labs",
        href: "https://www.plresearch.org/areas/economies-governance",
        description: "Field-Building: Governance & Economies",
      },
      {
        name: "Edge City",
        href: "https://www.edgecity.live/",
        description:
          "Society incubation at the frontiers of technology, science, & culture",
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
        description:
          "A New Operating System for the State: DPI + AI + Crypto",
      },
      {
        name: "Crecimiento",
        href: "https://www.crecimiento.build/",
        description:
          "Transforming Argentina into a leading startup & AI hub",
      },
      {
        name: "Anden",
        href: "https://www.anden.tech/",
        description:
          "The first Digital SEZ in an emerging market",
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
        description:
          "Sovereign & Central Bank Pilot",
      },
    ],
  },
];

export default function AdvisePage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#111] [font-family:'Courier_New',monospace]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.22em] text-neutral-500"
        >
          ← The Architect Institute
        </Link>

        <div className="mt-20">
          <div className="flex items-center gap-4">
            <Landmark className="h-5 w-5" />

            <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
              Advise
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
            Applied sovereign & strategic deployment embedded in live systems.
          </p>
        </div>

        <div className="mt-24 space-y-24">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
                {section.title}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="border border-neutral-900/10 p-8"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}