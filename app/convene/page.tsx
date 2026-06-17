import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

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
];

const upcomingConvenings = [
  "The Alpine Salon — Zurich 2026",
  "Digital Risk Dialogues — Tahoe 2026",
  "Land of Kings — Rajasthan 2026",
  "The Wimbledon Invitational — London 2026",
];

export default function ConvenePage() {
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
          <h1 className="text-5xl tracking-[-0.05em] [font-family:ui-sans-serif,system-ui,sans-serif] md:text-7xl">
            Convene
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700">
            Closed, high-trust rooms for alignment, exchange, coordination, &
            shared direction.
          </p>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {conveneFormats.map((item) => (
            <div
              key={item.title}
              className="border border-neutral-900/10 p-8"
            >
              <h2 className="mb-4 text-lg font-bold">{item.title}</h2>

              <p className="text-sm leading-7 text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-28 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
              Selected Convenings
            </h2>

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
            <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
              Upcoming Convenings
            </h2>

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
            priority
            className="w-full border border-neutral-900/10"
          />
        </section>

        <section className="mt-28">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Rooms & Salons
          </h2>

          <Image
            src="/convene-photos.png"
            alt="Architect rooms and salons"
            width={1800}
            height={1000}
            className="w-full border border-neutral-900/10"
          />
        </section>
      </div>
    </main>
  );
}