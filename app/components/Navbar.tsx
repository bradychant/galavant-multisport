import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-28">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Galavant Logo Transparent.png"
            alt="Galavant Multisport"
            width={340}
            height={119}
            priority
            className="object-contain"
          />
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Mission", "Events", "Causes", "Shop", "Get Involved"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-zinc-900 text-sm font-medium tracking-wide hover:text-[#2563eb] transition-colors whitespace-nowrap"
            >
              {link}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2 rounded transition-colors tracking-wide whitespace-nowrap"
          >
            Donate
          </Link>
        </div>

        {/* Mobile: Donate + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-[#dc2626] text-white text-xs font-bold px-4 py-2 rounded tracking-wide"
          >
            Donate
          </Link>
          <button className="flex flex-col gap-1.5 p-2" aria-label="Open menu">
            <span className="block w-6 h-0.5 bg-zinc-800" />
            <span className="block w-6 h-0.5 bg-zinc-800" />
            <span className="block w-6 h-0.5 bg-zinc-800" />
          </button>
        </div>
      </div>
    </nav>
  );
}
