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

        {/* Mission + Impact links */}
        <section className="bg-white py-16 sm:py-20 px-6 text-center">
          <div className="flex flex-col items-center gap-5">
            <a
              href="/mission"
              className="inline-flex items-center gap-2 text-[#2563eb] font-bold text-base sm:text-lg tracking-wide hover:gap-4 transition-all duration-200 border-b-2 border-[#2563eb] pb-1"
            >
              Read Timmy&apos;s story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/impact"
              className="inline-flex items-center gap-2 text-[#dc2626] font-bold text-base sm:text-lg tracking-wide hover:gap-4 transition-all duration-200 border-b-2 border-[#dc2626] pb-1"
            >
              Check out Galavant&apos;s impact!
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
}
