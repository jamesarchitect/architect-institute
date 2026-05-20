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
  {
    title: "Invitationals",
    text: "Invitation-only gatherings of high-agency nodes",
  },
  {
    title: "Roundtables",
    text: "Focused, practitioner-led, framework-producing",
  },
  {
    title: "Panels",
    text: "Independent judgment bodies",
  },
  {
    title: "Delegations",
    text: "Small-group listening & exchange missions",
  },
  {
    title: "Summits",
    text: "Periodic, field-level convergence",
  },
];

const selectedConvenings = [
  "LATAM Tech Leaders — Buenos Aires 2024",
  "Royal Family Exchange — Riyadh, Jeddah, Dubai, Abu Dhabi 2025",
  "Healthcare & Cryopreservation — Beijing 2025",
  "United Nations & CERN VIP Tour — Geneva 2025",
  "“Above the Grid” — Monaco 2025",
  "ARCHITECT x Emissary Partners “The Lunch” — Singapore 2025",
  "“The Andes & The Steppe” — Patagonia 2025",
  "“The Hollywood Table” — Los Angeles 2026",
];

const upcomingConvenings = [
  "The Alpine Salon — Zurich 2026",
  "Digital Risk Dialogues — Tahoe 2026",
  "Land of Kings — Rajasthan 2026",
];

const stewardWork = [
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
        text: "Field-Building: Governance & Economies",
      },
      {
        name: "Edge City",
        href: "https://www.edgecity.live/",
        text: "Society incubation at the frontiers of technology, science, & culture",
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
    category: "Governments, Zones, & Movements",
    items: [
      {
        name: "Crecimiento",
        href: "https://www.crecimiento.build/",
        text: "Transforming Argentina into a leading startup & AI hub",
      },
      {
        name: "Anden",
        href: "https://www.anden.tech/",
        text: "The first Digital SEZ in an emerging market",
      },
    ],
  },
  {
    category: "Protocol-Institution Interfaces",
    items: [
      {
        name: "Commons Labs",
        href: "https://commonslab.ai/",
        text: "Kenya Builder Residency Program",
      },
      {
        name: "Zama",
        href: "#",
        text: "Institutional-grade Fully Homomorphic Encryption (FHE)",
      },
      {
        name: "Cosmos Labs",
        href: "#",
        text: "Sovereign & Central Bank Piloting",
      },
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-20 h-px w-full bg-neutral-900/10" />;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#111] [font-family:'Courier_New',monospace]">
      <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-[#f8f7f2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="text-xs uppercase tracking-[0.22em]">
            The Architect Institute
          </div>

          <nav className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-neutral-500 md:flex">
            <a href="#thesis" className="hover:text-black">
              Thesis
            </a>
            <a href="#what-we-do" className="hover:text-black">
              What We Do
            </a>
            <a href="#our-work" className="hover:text-black">
              Our Work
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-36 lg:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="max-w-6xl"
        >
          <p className="mb-8 text-xs uppercase tracking-[0.34em] text-neutral-500">
            Quiet Authority
          </p>

          <h1 className="max-w-6xl text-5xl font-normal leading-[0.95] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
            A long-horizon institute shaping the future of institutions,
            technology, governance, & society.
          </h1>

          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-neutral-500">
            Curated by{" "}
            <a
              href="https://architect.systems/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              ARCHITECT
            </a>
          </p>
        </motion.div>
      </section>

      <section
        id="thesis"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Core Thesis</SectionLabel>

          <div className="max-w-5xl space-y-10">
            <p className="text-3xl leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
              We are entering an era of extraordinary technological acceleration
              alongside deep institutional fragmentation, social atomisation, &
              declining trust.
            </p>

            <p className="text-3xl leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
              The Architect Institute convenes exceptional people, advises
              consequential organisations, & cultivates long-term networks
              shaping the future of leadership, governance, technology, capital,
              & society.
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>What We Do</SectionLabel>

          <div className="grid gap-12 md:grid-cols-2">
            {whatWeDo.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-black" />

                    <h2 className="text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                      {item.title}
                    </h2>
                  </div>

                  <p className="max-w-xl text-xs uppercase leading-6 tracking-[0.28em] text-neutral-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="our-work"
        className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <SectionLabel>Our Work</SectionLabel>

          <div className="space-y-32">
            <div>
              <div className="mb-12 flex items-center gap-4">
                <Globe className="h-4 w-4 text-black" />

                <h2 className="text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                  Convene
                </h2>
              </div>

              <div className="mb-16 grid gap-6 md:grid-cols-2">
                {conveneFormats.map((item) => (
                  <div
                    key={item.title}
                    className="border border-neutral-900/10 p-6"
                  >
                    <p className="mb-3 text-lg font-bold">{item.title}</p>
                    <p className="text-sm italic leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-16 md:grid-cols-2">
                <div>
                  <h3 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Selected Convenings
                  </h3>

                  <div className="space-y-5">
                    {selectedConvenings.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6"
                      >
                        <MapPin className="mt-1 h-3 w-3 shrink-0 text-neutral-400" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
                    Upcoming Convenings
                  </h3>

                  <div className="space-y-5">
                    {upcomingConvenings.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6"
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
              <div className="mb-12 flex items-center gap-4">
                <Shield className="h-4 w-4 text-black" />

                <h2 className="text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                  Steward
                </h2>
              </div>

              <div className="space-y-6">
                {stewardWork.map((item) => (
                  <p key={item} className="text-lg font-bold leading-8">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-12 flex items-center gap-4">
                <Landmark className="h-4 w-4 text-black" />

                <h2 className="text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                  Advise
                </h2>
              </div>

              <div className="space-y-20">
                {adviseWork.map((group) => (
                  <div
                    key={group.category}
                    className="grid gap-8 md:grid-cols-[0.3fr_1fr]"
                  >
                    <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                      {group.category}
                    </h3>

                    <div className="grid gap-8 md:grid-cols-2">
                      {group.items.map((item) => (
                        <div key={item.name} className="space-y-2">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-lg font-bold underline underline-offset-4"
                          >
                            {item.name}
                          </a>

                          <p className="text-sm italic leading-7 text-neutral-600">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-12 flex items-center gap-4">
                <Users className="h-4 w-4 text-black" />

                <h2 className="text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                  Cultivate
                </h2>
              </div>

              <div className="max-w-4xl space-y-3">
                <p className="text-lg font-bold leading-8">
                  [Coming Soon] Digital Public Economies Fellowship
                </p>

                <p className="text-sm italic leading-7 text-neutral-600">
                  A curated cohort of sovereign operators & system builders
                  shaping digital public infrastructure
                </p>
              </div>
            </div>

            <div className="border border-neutral-900/10 p-10 md:p-14">
              <h2 className="mb-10 text-3xl font-normal leading-[1.2] tracking-[-0.04em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-5xl">
                Capital
              </h2>

              <p className="max-w-5xl text-2xl leading-[1.3] tracking-[-0.03em]">
                We deploy patient, long-horizon capital in service of Human
                Progress through our sister investment company,{" "}
                <a
                  href="https://architect.systems/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  ARCHITECT
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-20"
      >
        <Divider />

        <div className="grid gap-12 md:grid-cols-[0.25fr_1fr]">
          <div />

          <div className="space-y-24">
            <p className="max-w-6xl text-5xl leading-[1.02] tracking-[-0.06em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl lg:text-8xl">
              A trusted global node for coordination between leadership,
              technology, governance, capital, & culture during a period of
              civilizational transition.
            </p>

            <a
              href="mailto:contact@architect.markets"
              className="inline-block text-sm text-neutral-500 hover:text-black"
            >
              contact@architect.markets
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl justify-between border-t border-neutral-900/10 px-6 py-8 text-xs uppercase tracking-[0.22em] text-neutral-500 md:px-12 lg:px-20">
        <span>(c) The Architect Institute 2026</span>
        <span>Quiet Authority</span>
      </footer>
    </main>
  );
}