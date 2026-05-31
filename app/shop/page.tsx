import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Shop — Galavant Multisport",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-20 sm:pt-28">
        <div className="text-center max-w-md py-20">
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Shop
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-5xl font-black leading-tight mb-6">
            Coming Soon
          </h1>
          <p className="text-zinc-500 text-base leading-relaxed">
            Gear up for the journey. Galavant apparel and accessories are on their way.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
