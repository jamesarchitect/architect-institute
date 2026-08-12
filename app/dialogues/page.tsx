import Link from "next/link";

import { Filmstrip } from "@/components/dialogues/filmstrip";

export default function DialoguesPage() {
  return (
    <main className="dialogues-page min-h-screen overflow-x-hidden bg-black text-[#f5f4ef]">
      <section className="flex min-h-screen flex-col px-6 pb-20 pt-8 md:px-12 md:pb-24 md:pt-10 lg:px-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#f5f4ef]/70 [font-family:'Courier_New',monospace]">
          Architect
        </p>

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-20 md:py-28">
          <h1 className="text-[clamp(2.75rem,7.5vw,5.25rem)] leading-[0.92] tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif]">
            <span className="block">Digital</span>
            <span className="block">Risk</span>
            <span className="block">Dialogues</span>
          </h1>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-[#f5f4ef]/85 [font-family:ui-sans-serif,system-ui,sans-serif] md:mt-12 md:text-lg md:leading-8">
            The key to the future is the mastery of risk.
          </p>

          <div className="mt-10 space-y-1.5 text-xs uppercase tracking-[0.24em] text-[#f5f4ef]/55 [font-family:'Courier_New',monospace] md:mt-14">
            <p>20&ndash;22 July 2026</p>
            <p>Edgewood Tahoe &middot; Lake Tahoe</p>
          </div>
        </div>
      </section>

      <Filmstrip />

      <footer className="px-6 py-28 md:px-12 md:py-36 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f5f4ef]/70 [font-family:'Courier_New',monospace]">
            Digital Risk Dialogues
          </p>
          <p className="text-xs leading-7 text-[#f5f4ef]/45 [font-family:'Courier_New',monospace]">
            An initiative of The Architect Institute
          </p>
          <Link
            href="https://architect.institute"
            className="inline-block text-xs uppercase tracking-[0.24em] text-[#f5f4ef]/55 transition-colors hover:text-[#f5f4ef]/85 [font-family:'Courier_New',monospace]"
          >
            architect.institute
          </Link>
          <p className="mx-auto max-w-md pt-4 text-xs leading-7 text-[#f5f4ef]/35 [font-family:'Courier_New',monospace]">
            Further work from the Digital Risk Dialogues will be published in
            the months ahead.
          </p>
        </div>
      </footer>
    </main>
  );
}
