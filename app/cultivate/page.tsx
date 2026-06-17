import Link from "next/link";
import { Users } from "lucide-react";

export default function CultivatePage() {
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
            <Users className="h-5 w-5" />

            <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
              Cultivate
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
            Future leadership for an era of systemic transition.
          </p>
        </div>

        <div className="mt-24">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Selected Work
          </h2>

          <div className="border border-neutral-900/10 p-8">
            <p className="text-lg font-bold leading-8">
              [Coming Soon] Digital Public Economies Fellowship
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">
              A curated cohort of sovereign operators & system builders shaping
              digital public infrastructure.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}