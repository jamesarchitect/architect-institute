"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, Landmark, Users, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const whatWeDo = [
  {
    title: "Convene",
    icon: Globe,
    text: "Closed, high-trust rooms for alignment & shared direction",
  },
  {
    title: "Steward",
    icon: Shield,
    text: "Long-arc signal work — strategic intelligence, research, policy shaping, & blueprint development",
  },
  {
    title: "Advise",
    icon: Landmark,
    text: "Applied sovereign & strategic deployment embedded in live systems",
  },
  {
    title: "Cultivate",
    icon: Users,
    text: "Future leadership for an era of systemic transition",
  },
];

const conveneFormats = [
  "Invitationals — invitation-only gatherings of high-agency nodes",
  "Roundtables — focused, practitioner-led, framework-producing",
  "Panels — independent judgment bodies",
  "Delegations — small-group listening & exchange missions",
  "Summits — periodic, field-level convergence",
];

const selectedConvenings = [
  "[Delegation] Tech Leaders — Buenos Aires 2024",
  "[Delegation] Royal Family Visit — Riyadh, Jeddah, Dubai, Abu Dhabi 2025",
  "[Delegation] Healthcare — Beijing 2025",
  "[Delegation] United Nations & CERN — Geneva 2025",
  "[Invitational] “Above the Grid” — Monaco 2025",
  "[Invitational] ARCHITECT x Emissary Partners “The Lunch” — Singapore 2025",
  "[Summit] “The Andes & The Steppe” — Patagonia 2025",
  "[Invitational] “The Hollywood Table” — Los Angeles 2026",
];

const upcomingConvenings = [
  "[Invitational] The Alpine Salon — Zurich 2026",
  "[Summit] Digital Risk Dialogues — Tahoe 2026",
  "[Delegation] Land of Kings — Rajasthan 2026",
];

const stewardWork = [
  "Research, education, policy briefs & guidance artefacts",
  "Signal-focused Statements, Letters, & Op-Eds",
];

const selectedStewardWork = [
  "Advanced Independent Risk Panel (AIRP) [2025]",
  "Family Office Digital Asset Education Series (DAES) [2026]",
];

const adviseWork = [
  {
    category: "Field Stewardship",
    items: [
      {
        name: "Protocol Labs",
        href: "https://www.plresearch.org/areas/economies-governance",
        text: "Field-Building — Governance & Economies",
      },
      {
        name: "Edge City",
        href: "https://www.edgecity.live/",
        text: "Real-world experimentation at the frontiers of technology, science, & culture",
      },
    ],
  },
  {
    category: "Multilaterals & IFIs",
    items: [
      {
        name: "UNDP AltFinLab",
        href: "https://innovation.eurasia.undp.org/altfinlab/",
        text: "Pilot-to-deployment engine",
      },
    ],
  },
  {
    category: "Governments, Zones, Movements",
    items: [
      {
        name: "Crecimiento",
        href: "https://www.crecimiento.build/",
        text: "Transforming Argentina",
      },
      {
        name: "Anden",
        href: "https://www.anden.tech/",
        text: "The first Digital SEZ in an emerging market",
      },
      {
        name: "Government of Bhutan",
        href: "#",
        text: "Strategic advisory",
      },
    ],
  },
  {
    category: "Protocol-Institution Interfaces",
    items: [
      {
        name: "Funding the Commons / Commons Labs",
        href: "https://commonslab.ai/",
        text: "Kenya Builder Residency",
      },
      {
        name: "Zama",
        href: "#",
        text: "Fully Homomorphic Encryption",
      },
      {
        name: "Cosmos Labs",
        href: "#",
        text: "Sovereign Engagement",
      },
    ],
  },
];

const cultivateWork = [
  "Digital Public Economies Fellowship — a curated cohort of sovereign operators & system builders shaping digital public economies [Coming Soon]",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-16 h-px w-full bg-neutral-900/10" />;
}

function WorkTitle({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <Icon className="h-4 w-4 text-black" />
      <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-black">
        {title}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-6 py-8 text-[#111] [font-family:'Courier_New',monospace] md:px-12 lg:px-20">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-neutral-900/10 pb-6 text-xs uppercase tracking-[0.22em]">
        <div>The Architect Institute</div>

        <nav className="hidden gap-8 text-neutral-500 md:flex">
          <a href="#thesis" className="hover:text-neutral-900">
            Thesis
          </a>
          <a href="#what-we-do" className="hover:text-neutral-900">
            What We Do
          </a>
          <a href="#our-work" className="hover:text-neutral-900">
            Our Work
          </a>
          <a
            href="mailto:contact@architect.markets"
            className="hover:text-neutral-900"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-7xl py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="max-w-5xl"
        >
          <p className="mb-8 text-xs uppercase tracking-[0.34em] text-neutral-500">
            Quiet Authority
          </p>

          <h1 className="max-w-6xl text-5xl font-normal leading-[0.95] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
            A long-horizon institute shaping the future of institutions,
            technology, governance, & society.
          </h1>
        </motion.div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>Core Thesis</SectionLabel>

          <div className="max-w-4xl space-y-8">
            <p className="text-2xl leading-[1.35] tracking-[-0.03em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-4xl">
              We are entering an era of extraordinary technological acceleration
              alongside deep institutional fragmentation & loss of trust.
            </p>

            <p className="max-w-3xl text-lg leading-8 text-neutral-700 md:text-xl md:leading-9">
              The Architect Institute convenes exceptional people, advises
              consequential organisations, & cultivates long-term networks
              shaping the future of leadership, governance, technology, capital,
              & society.
            </p>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>What We Do</SectionLabel>

          <div className="grid gap-10">
            {whatWeDo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid gap-4 border-b border-neutral-900/10 pb-10 md:grid-cols-[0.3fr_1fr]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-black" />
                    <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-black">
                      {item.title}
                    </h2>
                  </div>

                  <p className="max-w-2xl text-2xl leading-[1.25] tracking-[-0.03em] md:text-3xl">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="our-work" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>Our Work</SectionLabel>

          <div className="space-y-24">
            <div>
              <WorkTitle title="Convene" icon={Globe} />

              <div className="mb-12 grid gap-4">
                {conveneFormats.map((item) => (
                  <p key={item} className="text-lg leading-7">
                    {item}
                  </p>
                ))}
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Selected Convenings
                  </h3>

                  <div className="space-y-4">
                    {selectedConvenings.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-neutral-700"
                      >
                        <MapPin className="mt-1 h-3 w-3 shrink-0 text-neutral-400" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Upcoming Convenings
                  </h3>

                  <div className="space-y-4">
                    {upcomingConvenings.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-neutral-700"
                      >
                        <MapPin className="mt-1 h-3 w-3 shrink-0 text-neutral-400" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <WorkTitle title="Steward" icon={Shield} />

              <div className="mb-12 grid gap-4">
                {stewardWork.map((item) => (
                  <p key={item} className="text-lg leading-7">
                    {item}
                  </p>
                ))}
              </div>

              <h3 className="mb-6 text-xs uppercase tracking-[0.24em] text-neutral-500">
                Selected Work
              </h3>

              <div className="space-y-4">
                {selectedStewardWork.map((item) => (
                  <p key={item} className="text-sm leading-6 text-neutral-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <WorkTitle title="Advise" icon={Landmark} />

              <div className="space-y-12">
                {adviseWork.map((group) => (
                  <div
                    key={group.category}
                    className="grid gap-6 border-b border-neutral-900/10 pb-10 md:grid-cols-[0.32fr_1fr]"
                  >
                    <h3 className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                      {group.category}
                    </h3>

                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <p key={item.name} className="text-lg leading-7">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold text-black underline underline-offset-4"
                          >
                            {item.name}
                          </a>{" "}
                          — {item.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <WorkTitle title="Cultivate" icon={Users} />

              <h3 className="mb-6 text-xs uppercase tracking-[0.24em] text-neutral-500">
                Selected Work
              </h3>

              <div className="space-y-4">
                {cultivateWork.map((item) => (
                  <p key={item} className="max-w-3xl text-lg leading-8">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.24em] text-black">
                Capital
              </h2>

              <p className="max-w-4xl text-2xl leading-[1.3] tracking-[-0.03em]">
                We deploy patient, long-horizon capital in service of Human
                Progress through our sister investment company,{" "}
                <a
                  href="https://architect.systems/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-black underline underline-offset-4"
                >
                  ARCHITECT
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <div />

          <div className="space-y-16">
            <p className="max-w-5xl text-4xl leading-[1.05] tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-6xl">
              A trusted global node for coordination between leadership,
              technology, governance, capital, & culture during a period of
              civilizational transition.
            </p>

            <a
              href="mailto:contact@architect.markets"
              className="inline-block text-sm text-neutral-600 hover:text-black"
            >
              contact@architect.markets
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-24 flex max-w-7xl justify-between border-t border-neutral-900/10 py-8 text-xs uppercase tracking-[0.22em] text-neutral-500">
        <span>© The Architect Institute</span>
        <span>Quiet Authority</span>
      </footer>
    </main>
  );
}