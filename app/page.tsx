import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialCTA from "./components/SocialCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        {/* Read Timmy's story link */}
        <section className="bg-white py-16 sm:py-20 px-6 text-center">
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Our Mission
          </p>
          <a
            href="/mission"
            className="inline-flex items-center gap-2 text-[#dc2626] font-bold text-base sm:text-lg tracking-wide hover:gap-4 transition-all duration-200 border-b-2 border-[#dc2626] pb-1"
          >
            Read Timmy&apos;s story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </section>

        {/* Impact teaser card */}
        <section className="bg-white px-4 sm:px-6 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/impact"
              className="group block rounded-2xl border border-zinc-200 bg-white hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-300 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-2">
                    Impact
                  </p>
                  <h3 className="text-zinc-900 text-base sm:text-lg font-black leading-tight">
                    The organizations we support and the initiatives that get
                    people outside in nature.
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold tracking-wide uppercase group-hover:text-zinc-700 transition-colors shrink-0">
                  See our impact
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
              </div>
            </Link>
          </div>
        </section>

        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
}
