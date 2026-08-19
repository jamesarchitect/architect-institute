import Image from "next/image";
import Link from "next/link";

import { PageBackLink, SiteShell } from "@/components/site-shell";

const conveneFormats = [
  {
    title: "Invitationals",
    text: "Invitation-only gatherings of high-agency people.",
  },
  {
    title: "Roundtables",
    text: "Focused, practitioner-led, framework-producing.",
  },
  {
    title: "Delegations",
    text: "Small-group listening & exchange missions.",
  },
  {
    title: "Dialogues",
    text: "Sustained, field-level communities organised around consequential questions.",
  },
];

const selectedConvenings = [
  { name: "The Wimbledon Invitational", place: "London · 2026" },
  { name: "The Alpine Salon", place: "Zurich · 2026" },
  { name: "The Manhattan Assembly", place: "New York · 2026" },
  { name: "The Hollywood Table", place: "Los Angeles · 2026" },
  { name: "The Andes & The Steppe", place: "Patagonia · 2025" },
  {
    name: "ARCHITECT x Emissary Partners The Lunch",
    place: "Singapore · 2025",
  },
  { name: "Above the Grid", place: "Monaco · 2025" },
  { name: "United Nations & CERN VIP Tour", place: "Geneva · 2025" },
  { name: "Healthcare & Cryopreservation", place: "Beijing · 2025" },
  {
    name: "Royal Family Exchange",
    place: "Riyadh, Jeddah, Dubai, Abu Dhabi · 2025",
  },
  { name: "LATAM Tech Leaders", place: "Buenos Aires · 2024" },
];

const upcomingConvenings = [
  { name: "Singapore", place: "2026" },
  { name: "Land of Kings", place: "Rajasthan · 2026" },
  { name: "Abu Dhabi", place: "2026" },
];

export default function ConvenePage() {
  return (
    <SiteShell current="Convene">
      <PageBackLink />

      <div className="mt-16 md:mt-20">
        <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
          Convene
        </h1>

        <p className="mt-4 text-sm font-medium tracking-[0.02em] text-black md:text-base">
          Create the conditions.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Closed, high-trust rooms for alignment, exchange, coordination &amp;
          shared direction.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {conveneFormats.map((item) => (
          <div key={item.title}>
            <h2 className="text-xs uppercase tracking-[0.22em] text-black">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 max-w-2xl text-sm leading-7 text-neutral-600 md:mt-20">
        Architect convenes not simply to exchange ideas, but to create the trust
        and alignment from which longer-term work can emerge. The value of a
        room is what survives it.
      </p>

      <section className="mt-28 md:mt-36">
        <Link href="/dialogues" className="group block">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-black">
              Digital Risk Dialogues
            </p>
            <p className="mt-2 text-sm text-neutral-600">Lake Tahoe · 2026</p>
          </div>

          <Image
            src="/images/digital-risk-dialogues/03.jpg"
            alt="Digital Risk Dialogues roundtable at Lake Tahoe"
            width={2048}
            height={1365}
            className="h-auto w-full"
            priority
          />

          <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-600 transition-colors group-hover:text-black">
            View Dialogues
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        </Link>
      </section>

      <section className="mt-28 md:mt-36">
        <h2 className="mb-10 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Selected Convenings
        </h2>

        <div>
          {selectedConvenings.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 border-t border-black/10 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <p className="text-sm leading-6 text-black md:text-[0.95rem]">
                {item.name}
              </p>
              <p className="shrink-0 text-sm text-neutral-500 md:text-right">
                {item.place}
              </p>
            </div>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </section>

      <section className="mb-8 mt-24 md:mt-28">
        <h2 className="mb-10 text-xs uppercase tracking-[0.24em] text-neutral-500">
          Upcoming Convenings
        </h2>

        <div>
          {upcomingConvenings.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 border-t border-black/10 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <p className="text-sm leading-6 text-black md:text-[0.95rem]">
                {item.name}
              </p>
              <p className="shrink-0 text-sm text-neutral-500 md:text-right">
                {item.place}
              </p>
            </div>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </section>
    </SiteShell>
  );
}
