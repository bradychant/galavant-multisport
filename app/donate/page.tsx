import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GIVEBUTTER_URL } from "../constants";

export const metadata = {
  title: "Donate — Galavant Multisport",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 pt-20 sm:pt-28">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 text-center">
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Donate
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-8">
            Support the Mission
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            Every dollar given to Galavant Multisport goes directly toward
            charitable organizations and community initiatives that share our
            mission — supporting health, wellness, environmental conservation,
            and community engagement.
          </p>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Make a one-time gift in any amount, or become a recurring{" "}
            <span className="font-semibold text-zinc-800">Field Correspondent</span>.
            All donations are fully tax-deductible.
          </p>

          <a
            href={GIVEBUTTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-10 py-5 rounded text-base tracking-wide transition-colors"
          >
            Donate on Givebutter
          </a>

          <p className="text-zinc-400 text-xs tracking-wide leading-relaxed mt-12 max-w-md mx-auto">
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
