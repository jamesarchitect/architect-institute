import Image from "next/image";
import Link from "next/link";

import { PageBackLink, SiteShell } from "@/components/site-shell";

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
  "Above the Grid — Monaco 2025",
  "ARCHITECT x Emissary Partners The Lunch — Singapore 2025",
  "The Andes & The Steppe — Patagonia 2025",
  "The Hollywood Table — Los Angeles 2026",
  "The Manhattan Assembly — New York 2026",
  "The Alpine Salon — Zurich 2026",
  "The Wimbledon Invitational — London 2026",
];

const laterThisYear = [
  "Singapore — 2026",
  "Land of Kings — Rajasthan 2026",
  "Abu Dhabi — 2026",
];

export default function ConvenePage() {
  return (
    <SiteShell current="Convene">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Convene
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Closed, high-trust rooms for alignment, exchange, coordination, and
          shared direction.
        </p>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5">
        {conveneFormats.map((item) => (
          <div key={item.title} className="border border-black/15 p-7 md:p-8">
            <h2 className="text-base font-bold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-28">
        <h2 className="mb-10 text-xs uppercase tracking-[0.24em] text-neutral-500">
          2026
        </h2>

        <Link href="/dialogues" className="group block">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                Digital Risk Dialogues
              </p>
              <p className="mt-2 text-sm text-neutral-600">Tahoe · 2026</p>
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 transition-colors group-hover:text-black">
              View Dialogues →
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/images/digital-risk-dialogues/08.jpg"
              alt="Digital Risk Dialogues at Lake Tahoe"
              width={2048}
              height={1365}
              className="h-auto w-full"
              priority
            />
            <Image
              src="/images/digital-risk-dialogues-logo.png"
              alt=""
              width={231}
              height={114}
              className="pointer-events-none absolute bottom-4 left-4 h-auto w-[7.5rem] md:bottom-6 md:left-6 md:w-[9rem]"
            />
          </div>
        </Link>

        <div className="mt-10 space-y-4 text-sm leading-7">
          <p>The Alpine Salon — Zurich 2026</p>
          <p>The Wimbledon Invitational — London 2026</p>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Later this year
        </h2>
        <div className="space-y-4 text-sm leading-7">
          {laterThisYear.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Selected Convenings
        </h2>
        <div className="space-y-4 text-sm leading-7 text-neutral-700">
          {selectedConvenings.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Convening Portfolio
        </h2>
        <Image
          src="/convene-posters.png"
          alt="Architect convening portfolio"
          width={1800}
          height={1000}
          className="w-full"
        />
      </section>

      <section className="mt-20 mb-8">
        <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Rooms & Salons
        </h2>
        <Image
          src="/convene-photos.png"
          alt="Architect rooms and salons"
          width={1800}
          height={1000}
          className="w-full"
        />
      </section>
    </SiteShell>
  );
}
