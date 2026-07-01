import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Events — Galavant Multisport",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-28">
        {/* Page header */}
        <div className="bg-white border-b border-zinc-100 px-6 py-10 sm:py-12 text-center">
          <h1 className="text-zinc-900 text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            Events
          </h1>
        </div>

        {/* Tim's Ride */}
        <section className="px-6 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
              {/* Image */}
              <div className="aspect-[16/9] relative bg-zinc-100">
                <Image
                  src="/photos/slideshow/IMG_1933.jpeg"
                  alt="Tim's Ride — the 2nd annual bike ride"
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Card body */}
              <div className="p-7 sm:p-10">
                <p className="text-[#dc2626] text-xs font-bold tracking-[0.4em] uppercase mb-3">
                  2nd Annual — June 2026
                </p>
                <h2 className="text-zinc-900 text-3xl sm:text-4xl font-black leading-tight mb-6">
                  Tim&apos;s Ride
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  The 2nd annual Tim&apos;s Ride took place this June — a
                  40-mile ride starting in North Kingstown, heading to Point
                  Judith and back. Thank you to everyone who came out to
                  ride and support Timmy&apos;s memory.
                </p>

                {/* CTA */}
                <div className="bg-zinc-50 -mx-7 sm:-mx-10 -mb-7 sm:-mb-10 px-7 sm:px-10 py-6 sm:py-8 border-t border-zinc-100 mt-8">
                  <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                    More information about the 2027 ride will be shared
                    here as it gets closer. In the meantime, reach out to
                    Brady at{" "}
                    <a
                      href="tel:+14016490179"
                      className="text-[#2563eb] font-bold hover:underline whitespace-nowrap"
                    >
                      401-649-0179
                    </a>{" "}
                    with any questions.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
