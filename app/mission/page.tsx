import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mission — Galavant Multisport",
  description: "Galavant Multisport exists to inspire movement, and appreciate nature's beauty every day.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-28">
        {/* Page header — image background */}
        <div className="relative bg-zinc-900 border-b border-zinc-100 overflow-hidden">
          <Image
            src="/photos/slideshow/IMG_4036.jpeg"
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
            <p className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-8">
              Our Mission
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-lg">
              Galavant Multisport exists to inspire movement, and appreciate
              nature&apos;s beauty every day.
            </h1>
          </div>
        </div>

        {/* About Us */}
        <section className="px-6 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              About Us
            </p>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6">
              Galavant Multisport started as a passion project for Timmy —
              a place where he could share his love for the outdoors with others
              through his Instagram page{" "}
              <a
                href="https://instagram.com/galavantmultisport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] font-semibold hover:underline"
              >
                @galavantmultisport
              </a>
              .
            </p>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6">
              After Timmy&apos;s passing in 2024, there was an outpouring of
              support from the many communities his energy and passion had
              impacted over the course of his lifetime. Our family decided to
              carry on his impact through this organization.
            </p>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              Over 2024 and 2025, several of those communities took initiative
              to host events in memory of Timmy — sparking our family to
              formalize Galavant as an established charitable organization.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-zinc-100" />
        </div>

        {/* Who Timmy Was */}
        <section className="px-6 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#dc2626] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Who Timmy Was
            </p>
            <h2 className="text-zinc-900 text-2xl sm:text-3xl font-black leading-tight mb-8">
              Truly one of a kind.
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6">
              Timmy had a unique ability to make everyone around him feel
              special. He spent his life as an athlete, coach, personal
              trainer, and educator — all domains where he could share his
              core values around movement with others.
            </p>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              His impact spread far and wide, and it continues through every
              paddle stroke, footfall, or pedal stroke you take.
            </p>
          </div>
        </section>

        {/* CTA bar */}
        <div className="bg-zinc-50 border-t border-zinc-100 px-6 py-12 text-center">
          <p className="text-zinc-500 text-sm mb-6 tracking-wide">
            Join us in carrying Timmy&apos;s spirit forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/events"
              className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded text-sm tracking-wide transition-colors"
            >
              See Events
            </a>
            <a
              href="/donate"
              className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded text-sm tracking-wide transition-colors"
            >
              Donate
            </a>
          </div>
          <p className="text-zinc-400 text-xs tracking-wide max-w-md mx-auto leading-relaxed">
            Galavant Multisport is a registered 501(c)(3) charitable
            organization. EIN: 41-2993622. Donations are tax-deductible to the
            extent allowed by law.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
