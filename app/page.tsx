"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const whatWeDo = [
  ["I. CONVENE", "Closed, high-trust rooms for alignment & shared direction"],
  [
    "II. STEWARD",
    "Long-arc signal work — strategic intelligence, research, policy shaping, & blueprint development",
  ],
  [
    "III. ADVISE",
    "Applied sovereign & strategic deployment embedded in live systems",
  ],
  ["IV. CULTIVATE", "Future leadership for an era of systemic transition"],
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
  "Research, education, policy briefs and guidance artefacts",
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
      "Protocol Labs — Field-Building, Governance & Economies",
      "Edge City — Real-world experimentation at the frontiers of technology, science, and culture",
    ],
  },
  {
    category: "Multilaterals / IFIs",
    items: ["UNDP AltFinLab — Pilot-to-deployment engine"],
  },
  {
    category: "Governments, Zones, Movements",
    items: [
      "Crecimiento — Transforming Argentina",
      "Anden — The first Digital SEZ in an emerging market",
      "Government of Bhutan — Strategic advisory",
    ],
  },
  {
    category: "Protocol-Institution Interfaces",
    items: [
      "Funding the Commons / Commons Labs — Kenya Builder Residency",
      "Zama — Fully Homomorphic Encryption",
      "Cosmos Labs — Sovereign Engagement",
    ],
  },
];

const cultivateWork = [
  "Digital Public Economies Fellowship — a curated cohort of sovereign operators & system builders shaping digital public economies [Coming Soon]",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-16 h-px w-full bg-neutral-900/10" />;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-6 py-8 text-[#111] md:px-12 lg:px-20">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-neutral-900/10 pb-6 font-mono text-xs uppercase tracking-[0.22em]">
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
          <a href="mailto:contact@architect.markets" className="hover:text-neutral-900">
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
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.34em] text-neutral-500">
            Quiet Authority
          </p>

          <h1 className="max-w-6xl text-5xl font-normal leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
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
            <p className="text-2xl leading-[1.35] tracking-[-0.03em] md:text-4xl">
              We are entering an era of extraordinary technological acceleration
              alongside deep institutional fragmentation and loss of trust.
            </p>

            <p className="max-w-3xl text-lg leading-8 text-neutral-700 md:text-xl md:leading-9">
              The Architect Institute convenes exceptional people, advises
              consequential organisations, and cultivates long-term networks
              shaping the future of leadership, governance, technology, capital,
              and society.
            </p>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>What We Do</SectionLabel>

          <div className="grid gap-10">
            {whatWeDo.map(([title, text]) => (
              <div
                key={title}
                className="grid gap-4 border-b border-neutral-900/10 pb-10 md:grid-cols-[0.3fr_1fr]"
              >
                <h2 className="font-mono text-sm uppercase tracking-[0.22em]">
                  {title}
                </h2>
                <p className="max-w-2xl text-2xl leading-[1.25] tracking-[-0.03em] md:text-3xl">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-work" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>Our Work</SectionLabel>

          <div className="space-y-24">
            <div>
              <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.24em]">
                I. Convene
              </h2>

              <div className="mb-12 grid gap-4">
                {conveneFormats.map((item) => (
                  <p key={item} className="border-b border-neutral-900/10 pb-4 text-lg">
                    {item}
                  </p>
                ))}
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Selected Convenings
                  </h3>
                  <div className="space-y-4">
                    {selectedConvenings.map((item) => (
                      <p key={item} className="text-sm leading-6 text-neutral-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Upcoming Convenings
                  </h3>
                  <div className="space-y-4">
                    {upcomingConvenings.map((item) => (
                      <p key={item} className="text-sm leading-6 text-neutral-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.24em]">
                II. Steward
              </h2>

              <div className="mb-12 grid gap-4">
                {stewardWork.map((item) => (
                  <p key={item} className="border-b border-neutral-900/10 pb-4 text-lg">
                    {item}
                  </p>
                ))}
              </div>

              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
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
              <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.24em]">
                III. Advise
              </h2>

              <div className="space-y-12">
                {adviseWork.map((group) => (
                  <div
                    key={group.category}
                    className="grid gap-6 border-b border-neutral-900/10 pb-10 md:grid-cols-[0.32fr_1fr]"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                      {group.category}
                    </h3>
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <p key={item} className="text-lg leading-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.24em]">
                IV. Cultivate
              </h2>

              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
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
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl">
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">
          <SectionLabel>Begin</SectionLabel>

          <div>
            <p className="max-w-5xl text-4xl leading-[1.05] tracking-[-0.05em] md:text-6xl">
              A trusted global node for coordination between leadership,
              technology, governance, capital, and culture during a period of
              civilizational transition.
            </p>

            <a
              href="mailto:contact@architect.markets"
              className="mt-12 inline-block font-mono text-xs uppercase tracking-[0.24em] text-neutral-600 hover:text-neutral-950"
            >
              contact@architect.markets
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-24 flex max-w-7xl justify-between border-t border-neutral-900/10 py-8 font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
        <span>© The Architect Institute</span>
        <span>Quiet Authority</span>
      </footer>
    </main>
  );
}