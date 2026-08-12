import Image from "next/image";
import Link from "next/link";

import { Montage } from "@/components/dialogues/montage";

export default function DialoguesPage() {
  return (
    <main className="dialogues-page min-h-screen overflow-x-hidden bg-black text-[#f5f4ef]">
      <section className="flex min-h-[92vh] flex-col px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-16 lg:px-20">
        <div className="flex justify-center pt-2 md:pt-4">
          <Image
            src="/images/architect-outline-logo.png"
            alt="Architect"
            width={1024}
            height={267}
            priority
            className="h-auto w-[7.25rem] opacity-90 md:w-[8rem]"
          />
        </div>

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center py-24 text-center md:py-32">
          <h1 className="m-0">
            <Image
              src="/images/digital-risk-dialogues-logo.png"
              alt="Digital Risk Dialogues"
              width={940}
              height={472}
              priority
              className="mx-auto h-auto w-[min(72vw,22rem)] md:w-[min(58vw,28rem)]"
            />
          </h1>

          <p className="mt-12 max-w-xl text-sm leading-relaxed tracking-[0.24em] text-[#f5f4ef]/55 [font-family:'Courier_New',monospace] md:mt-14">
            The key to the future is the mastery of risk.
          </p>

          <div className="mt-10 space-y-1.5 text-xs uppercase tracking-[0.24em] text-[#f5f4ef]/55 [font-family:'Courier_New',monospace] md:mt-12">
            <p>20&ndash;22 July 2026</p>
            <p>Edgewood Tahoe &middot; Lake Tahoe</p>
          </div>
        </div>
      </section>

      <Montage />

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
        </div>
      </footer>
    </main>
  );
}
