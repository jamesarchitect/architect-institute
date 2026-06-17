import Link from "next/link";
import { Shield } from "lucide-react";

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
      "Private education series helping family offices understand digital assets, market structure, custody, risk, and institutional adoption.",
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
            <Shield className="h-5 w-5" />

            <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
              Steward
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
            Long-arc signal work — strategic intelligence, research, policy
            shaping, and blueprint development.
          </p>
        </div>

        <div className="mt-24">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Signal Work
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {signals.map((item) => (
              <div
                key={item}
                className="border border-neutral-900/10 p-8"
              >
                <p className="text-base font-semibold tracking-[0.02em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Selected Work
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {work.map((item) => (
              <div
                key={item.title}
                className="border border-neutral-900/10 p-8"
              >
                <p className="text-lg font-bold">
                  {item.title}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {item.year}
                </p>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}