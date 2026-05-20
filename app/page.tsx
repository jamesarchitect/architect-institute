"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle, Compass, Network, Landmark, Radio, Sprout, Coins, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    title: "Trusted Environments",
    label: "Councils & Convenings",
    icon: Network,
    text: "Private retreats, strategic councils, leadership circles, closed salons, frontier forums, and annual summits designed for trust, alignment, and institutional coordination.",
    items: ["Digital Risk Dialogues", "Sovereign Retreats", "Leadership Circles", "Closed Salons", "Frontier Councils"],
  },
  {
    title: "Consequential Projects",
    label: "Advisory & Deployment",
    icon: Landmark,
    text: "Selective work with sovereigns, frontier organizations, ecosystems, and institutional actors navigating transition, legitimacy, and complexity.",
    items: ["Strategic architecture", "Ecosystem design", "Sovereign engagement", "Coalition formation", "Deployment support"],
  },
  {
    title: "Strategic Signals",
    label: "Intelligence & Media",
    icon: Radio,
    text: "Essays, private memos, briefings, thematic reports, interviews, and strategic narratives that help consequential actors understand what is emerging and why it matters.",
    items: ["Essays", "Private intelligence", "Briefings", "Thematic reports", "Strategic narratives"],
  },
  {
    title: "The Long Arc",
    label: "Fellowships & Residencies",
    icon: Sprout,
    text: "Cultivating future leaders, operators, researchers, artists, diplomats, and builders capable of navigating systemic transition with wisdom, trust, and coherence.",
    items: ["Sovereign Fellows", "Frontier Governance Fellows", "Residencies", "Leadership Programs", "Operator Networks"],
  },
  {
    title: "Aligned Capital",
    label: "Capital & Coordination",
    icon: Coins,
    text: "Strategic LP circles, catalytic financing, co-investment networks, ecosystem financing, and selective SPVs designed to support healthy long-term systems.",
    items: ["Strategic LP circles", "Catalytic financing", "Co-investment networks", "Ecosystem financing", "Strategic SPVs"],
  },
];

const exampleProjects = [
  "Advise Protocol Labs on institutional legitimacy and sovereign engagement.",
  "Advise Argentina on frontier innovation ecosystems and digital infrastructure positioning.",
  "Advise Bhutan on digital sovereignty, regenerative systems, and strategic partnerships.",
  "Advise Edge City on institutional architecture and ecosystem growth.",
  "Advise Helena-style organizations on strategic initiatives and coordination.",
  "Support Renaissance-style philanthropy organizations on field-building and deployment pathways.",
];

const dna = [
  ["Hakluyt", "strategic intelligence"],
  ["Helena", "project-oriented coordination"],
  ["Aspen", "leadership and convening"],
  ["Monocle", "aesthetic and cultural sophistication"],
  ["Renaissance Philanthropy", "catalytic field-building"],
  ["Architect", "ecosystem architecture and frontier systems"],
];

export default function ArchitectInstituteWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#171512]">
      <header className="sticky top-0 z-50 border-b border-[#171512]/10 bg-[#f7f3ea]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171512]/30">
              <Compass className="h-4 w-4" />
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em]">The Architect Institute</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#171512]/70 md:flex">
            <a href="#thesis" className="hover:text-[#171512]">Thesis</a>
            <a href="#work" className="hover:text-[#171512]">Work</a>
            <a href="#projects" className="hover:text-[#171512]">Projects</a>
            <a href="#contact" className="hover:text-[#171512]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#171512 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative mx-auto max-w-7xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-5xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#171512]/15 px-4 py-2 text-sm text-[#171512]/70">
                <Circle className="h-2 w-2 fill-current" />
                Human and institutional coordination in an age of fragmentation
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl lg:text-8xl">
                We convene, advise, and cultivate leaders shaping the next era of institutions, technology, and society.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-[#171512]/72 md:text-2xl md:leading-10">
                The Architect Institute is a strategic institution focused on human and institutional coordination during a period of accelerating technological, geopolitical, and societal transition.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-[#171512] px-7 py-6 text-[#f7f3ea] hover:bg-[#171512]/90">
                  Explore the work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full border-[#171512]/20 bg-transparent px-7 py-6 hover:bg-[#171512]/5">
                  Request a conversation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="thesis" className="border-y border-[#171512]/10 bg-[#171512] px-6 py-20 text-[#f7f3ea]">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f7f3ea]/55">Core thesis</p>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Extraordinary capability. Fragmented institutions. Declining trust.
              </h2>
              <p className="text-xl leading-9 text-[#f7f3ea]/76">
                We are entering an era of extraordinary technological capability alongside deep institutional fragmentation, social atomization, and loss of trust. The challenge is no longer simply technological progress, but the cultivation of healthier systems, wiser leadership, stronger communities, and more coherent forms of coordination.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {["Wiser systems", "Healthier elites", "Stronger communities"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#f7f3ea]/15 p-5 text-[#f7f3ea]/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#171512]/50">What we do</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">A trusted global node for coordination.</h2>
              <p className="mt-6 text-lg leading-8 text-[#171512]/70">
                We convene exceptional people, advise consequential organizations, produce strategic signals, and cultivate long-term networks capable of navigating systemic change with wisdom, trust, and coherence.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={pillar.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.05 }}>
                    <Card className="h-full rounded-3xl border-[#171512]/10 bg-white/55 shadow-sm backdrop-blur-sm">
                      <CardContent className="flex h-full flex-col p-6">
                        <Icon className="mb-7 h-6 w-6 text-[#171512]/70" />
                        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#171512]/45">{pillar.label}</p>
                        <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em]">{pillar.title}</h3>
                        <p className="mb-6 text-sm leading-6 text-[#171512]/65">{pillar.text}</p>
                        <div className="mt-auto space-y-2">
                          {pillar.items.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-[#171512]/70">
                              <span className="mt-2 h-1 w-1 rounded-full bg-[#171512]/40" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#eee6d8] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#171512]/50">Selective projects</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">We work selectively on consequential projects.</h2>
              <p className="mt-6 text-lg leading-8 text-[#171512]/70">
                The Institute identifies important coordination failures, convenes the right people, shapes the narrative, advises stakeholders, and helps catalyze real-world deployment.
              </p>
            </div>
            <div className="grid gap-4">
              {exampleProjects.map((project) => (
                <div key={project} className="rounded-3xl border border-[#171512]/10 bg-[#f7f3ea]/70 p-6 text-lg leading-7 text-[#171512]/78">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="rounded-[2rem] border-[#171512]/10 bg-[#171512] text-[#f7f3ea] shadow-sm">
                <CardContent className="p-8 md:p-12">
                  <Quote className="mb-8 h-8 w-8 text-[#f7f3ea]/55" />
                  <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                    Not a consultancy. Not a think tank. Not a network. An active coordination institution.
                  </h2>
                  <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f7f3ea]/72">
                    Our work is grounded in a simple belief: the next era will not be shaped by technology alone, but by the quality of coordination between leadership, governance, capital, culture, and human trust.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-[#171512]/10 bg-white/60 shadow-sm">
                <CardContent className="p-8 md:p-12">
                  <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#171512]/50">Institutional DNA</p>
                  <div className="space-y-4">
                    {dna.map(([name, role]) => (
                      <div key={name} className="flex items-center justify-between gap-6 border-b border-[#171512]/10 pb-4">
                        <span className="text-lg font-medium">{name}</span>
                        <span className="text-right text-sm text-[#171512]/55">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#171512]/10 px-6 py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#171512]/50">Begin</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">For consequential projects, trusted rooms, and long-arc leadership.</h2>
            </div>
            <Button className="rounded-full bg-[#171512] px-7 py-6 text-[#f7f3ea] hover:bg-[#171512]/90">
              Contact the Institute <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#171512]/10 px-6 py-8 text-sm text-[#171512]/50">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <span>© The Architect Institute</span>
          <span>Leadership · Technology · Governance · Capital · Culture</span>
        </div>
      </footer>
    </div>
  );
}

