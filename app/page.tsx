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
        <SocialCTA />

        {/* Simple link to the mission page */}
        <section className="bg-white border-t border-zinc-100 py-16 sm:py-20 px-6 text-center">
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
      </main>
      <Footer />
    </div>
  );
}
