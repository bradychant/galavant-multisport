import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impact — Galavant Multisport",
  description:
    "The programs and organizations Galavant Multisport supports, plus the Timothy J. Chant Memorial Scholarship at Westwood High School.",
};

const FEATURED = [
  {
    name: "A Walk On Water",
    description:
      "A nonprofit delivering life-changing surf therapy to children with special needs and their families. Since 2012, AWOW has served over 1,000 families through guided surf events that combine ocean therapy with yoga, art, music, and community.",
    href: "https://awalkonwater.org",
    image: "/photos/slideshow/walkonwaterspringlake.JPG",
  },
  {
    name: "The Summit Squad",
    description:
      "A hiking program Timmy started in Westwood, MA. Each June, The Summit Squad brings a group of seniors on a hiking trip in New England.",
    href: null,
    image: null,
  },
  {
    name: "F.O.R.E.S.T. Program",
    description:
      "Run by Vermont Huts & Trails, F.O.R.E.S.T. (Fostering Outdoor Recreation, Education, Sustainability, and Teamwork) provides free backcountry retreats to underserved youth and marginalized communities — including transportation, gear, and meals.",
    href: "https://vermonthuts.org/forest-program/",
    image: null,
  },
];

const SCHOLARSHIP_RECIPIENTS = [{ year: "2026", name: "Dante Dionisi" }];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-28">
        {/* Page header — image background */}
        <div className="relative bg-zinc-900 border-b border-zinc-100 overflow-hidden">
          <Image
            src="/photos/slideshow/IMG_0871.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />

          {/* Content */}
          <div className="relative px-6 py-24 sm:py-32 lg:py-40 text-center">
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Impact
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl mx-auto drop-shadow-lg">
              Check out Galavant&apos;s impact!
            </h1>
          </div>
        </div>

        {/* Featured Causes */}
        <section className="bg-white px-6 py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
              Featured
            </p>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-black leading-tight mb-12 text-center">
              Supported Programs & Organizations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {FEATURED.map((org, i) => {
                const body = (
                  <>
                    {org.image && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-zinc-100">
                        <Image
                          src={org.image}
                          alt={org.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover object-center"
                        />
                      </div>
                    )}
                    <h3 className="text-zinc-900 text-xl font-black mb-3">
                      {org.name}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {org.description}
                    </p>
                    {org.href && (
                      <div className="mt-5 flex items-center gap-2 text-zinc-400 text-xs font-bold tracking-wide uppercase group-hover:text-zinc-700 transition-colors">
                        Learn more
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                );

                return org.href ? (
                  <a
                    key={i}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-zinc-200 bg-white p-7 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-300"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="rounded-2xl border border-zinc-200 bg-white p-7"
                  >
                    {body}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Memorial Scholarship */}
        <section className="bg-zinc-50 border-t border-zinc-100 px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Portrait of Tim */}
            <div className="relative aspect-[3/5] max-w-sm mx-auto rounded-2xl overflow-hidden mb-12 bg-zinc-200">
              <Image
                src="/photos/slideshow/IMG_9230.jpeg"
                alt="Timothy J. Chant"
                fill
                sizes="(min-width: 640px) 384px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Eyebrow + heading */}
            <p className="text-[#dc2626] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
              Memorial Scholarship
            </p>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-black leading-tight mb-10 text-center">
              Timothy J. Chant Memorial Scholarship
            </h2>

            {/* Body — verbatim copy provided */}
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6">
              The Timothy J. Chant Memorial Scholarship honors the life and
              spirit of Tim Chant by recognizing a graduating student from
              Westwood High School who demonstrates a strong commitment to
              their education & community.
            </p>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              This scholarship is awarded to a student who embodies Tim&apos;s
              spirit and not only participates in, but actively promotes a
              positive approach to physical and mental well-being within the
              school environment—particularly through physical education,
              health classes, athletics, or related activities.
            </p>

            {/* Recipients — subtle */}
            <div className="mt-10 pt-6 border-t border-zinc-200 text-center">
              <p className="text-zinc-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Recipients
              </p>
              <ul className="text-zinc-500 text-sm">
                {SCHOLARSHIP_RECIPIENTS.map((r) => (
                  <li key={r.year}>
                    {r.year} — {r.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
