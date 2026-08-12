import Image from "next/image";
import Link from "next/link";

import { PhotoGrid } from "@/components/dialogues/photo-grid";

export default function DialoguesPage() {
  return (
    <main className="dialogues-page min-h-screen overflow-x-hidden bg-black text-[#f5f4ef]">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 pb-28 pt-14 text-center md:px-8 md:pb-36 md:pt-20">
        <Image
          src="/images/architect-outline-logo.png"
          alt="Architect"
          width={1024}
          height={267}
          priority
          className="h-auto w-[4.75rem] opacity-90 md:w-[5.25rem]"
        />

        <h1 className="m-0 mt-20 md:mt-28">
          <Image
            src="/images/digital-risk-dialogues-logo.png"
            alt="Digital Risk Dialogues"
            width={231}
            height={114}
            priority
            className="mx-auto h-auto w-[9.5rem] md:w-[11rem]"
          />
        </h1>

        <div className="mt-16 space-y-1.5 text-xs uppercase tracking-[0.24em] text-[#f5f4ef]/55 [font-family:'Courier_New',monospace] md:mt-20">
          <p>20&ndash;22 July 2026</p>
          <p>Lake Tahoe</p>
        </div>

        <p className="mt-14 text-xs leading-relaxed tracking-[0.14em] text-[#f5f4ef]/55 [font-family:'Courier_New',monospace] md:mt-16 md:whitespace-nowrap md:text-[0.7rem] md:tracking-[0.16em]">
          The key to the future is the mastery of risk.
        </p>
      </section>

      <PhotoGrid />

      <footer className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f5f4ef]/70 [font-family:'Courier_New',monospace]">
            Digital Risk Dialogues
          </p>
          <p className="text-xs leading-7 text-[#f5f4ef]/45 [font-family:'Courier_New',monospace]">
            An initiative of The Architect Institute
          </p>
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-[0.24em] text-[#f5f4ef]/55 transition-colors hover:text-[#f5f4ef]/85 [font-family:'Courier_New',monospace]"
          >
            architect.institute
          </Link>
        </div>
      </footer>
    </main>
  );
}
