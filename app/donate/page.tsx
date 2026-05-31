import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Donate — Galavant Multisport",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 pt-20 sm:pt-28">
        <div className="max-w-2xl mx-auto py-16 sm:py-20">
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4 text-center">
            Donate
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-8 text-center">
            Support Galavant Multisport
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
            Every donation supports our mission: funding charitable
            organizations and community initiatives that promote health,
            wellness, environmental conservation, and community engagement —
            including the events and causes we carry forward in memory of
            Timothy J. Chant.
          </p>

          {/* Givebutter widget mounts into this container */}
          <div
            className="givebutter-widget-container"
            dangerouslySetInnerHTML={{
              __html:
                '<givebutter-widget id="pQqaJO"></givebutter-widget>',
            }}
          />

          <p className="text-zinc-400 text-xs tracking-wide text-center leading-relaxed mt-12">
            Galavant Multisport is a registered 501(c)(3) charitable
            organization. EIN: 41-2993622. Donations are tax-deductible to the
            extent allowed by law.
          </p>
        </div>
      </main>

      <Footer />

      <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=h37Pioo3zwBPCrJs&p=other"
        strategy="afterInteractive"
      />
    </div>
  );
}
