import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impact — Galavant Multisport",
  description:
    "The organizations we support and the initiatives that get people outside in nature.",
};

const FEATURED = [
  {
    name: "A Walk On Water",
    description:
      "A nonprofit delivering life-changing surf therapy to children with special needs and their families. Since 2012, AWOW has served over 1,000 families through guided surf events that combine ocean therapy with yoga, art, music, and community.",
    href: "https://awalkonwater.org",
  },
  {
    name: "The Summit Squad",
    description:
      "A hiking program Timmy started in Westwood, MA. Each June, The Summit Squad brings a group of seniors on a hiking trip in New England.",
    href: null,
  },
  {
    name: "F.O.R.E.S.T. Program",
    description: "More information coming soon.",
    href: null,
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-28">
        {/* Page header */}
        <div className="bg-white border-b border-zinc-100 px-6 py-20 sm:py-28 text-center">
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Impact
          </p>
          <h1 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl mx-auto">
            The organizations we support and the initiatives that get people
            outside in nature.
          </h1>
        </div>

        {/* Featured Causes */}
        <section className="bg-white px-6 py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
              Featured
            </p>
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-black leading-tight mb-12 text-center">
              Featured Causes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {FEATURED.map((org, i) => {
                const body = (
                  <>
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
            {/* Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 bg-zinc-200">
              <Image
                src="/photos/slideshow/IMG_0897.jpeg"
                alt="Timothy J. Chant"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
