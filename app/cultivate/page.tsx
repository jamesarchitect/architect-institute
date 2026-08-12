import { PageBackLink, SiteShell } from "@/components/site-shell";

export default function CultivatePage() {
  return (
    <SiteShell current="Cultivate">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Cultivate
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Networks and future leaders.
        </p>
      </div>

      <section className="mb-8 mt-20">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Selected Work
        </h2>

        <div className="border border-black/15 p-7 md:p-8">
          <p className="text-lg font-bold leading-8">
            Digital Public Economies Fellowship
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
            Coming Soon
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">
            A curated cohort of sovereign operators and system builders shaping
            digital public infrastructure.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
