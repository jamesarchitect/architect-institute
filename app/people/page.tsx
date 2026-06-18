import Link from "next/link";

const leadership = [
  {
    name: "James Tunningley",
    role: "Executive Director",
    href: "https://www.linkedin.com/in/james-tunningley/",
  },
  {
    name: "Ruben Amenyogbo",
    role: "Director",
    href: "https://www.linkedin.com/in/rgjamenyogbo/",
  },
  {
    name: "Milagros Santamaría",
    role: "Operations",
    href: "https://milisantamaria.legal/",
  },
];

const advisors = [
  {
    name: "Reginald H. Gilyard",
    href: "https://www.onlreit.com/about-us/board-of-directors",
  },
  {
    name: "The Hon. Shannon Corless",
    href: "https://www.insaonline.org/detail-pages/person/shannon-corless",
  },
  {
    name: "Christopher Rogers",
    href: "https://milkeninstitute.org/events/global-investors-symposium-mexico-city-2024/speakers/christopher-rogers",
  },
  {
    name: "Conrad Anker",
    href: "https://en.wikipedia.org/wiki/Conrad_Anker",
  },
];

export default function PeoplePage() {
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
            People
          </h1>
        </div>

        <section className="mt-24">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Leadership
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="border border-neutral-900/10 p-8"
              >
                <a
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold underline underline-offset-4"
                >
                  {person.name}
                </a>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-8 text-xs uppercase tracking-[0.24em] text-neutral-500">
            Advisors
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {advisors.map((person) => (
              <div
                key={person.name}
                className="border border-neutral-900/10 p-8"
              >
                <a
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold underline underline-offset-4"
                >
                  {person.name}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}