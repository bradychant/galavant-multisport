"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GIVEBUTTER_URL } from "../constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Mission", href: "/mission" },
  { name: "Impact", href: "/impact" },
  { name: "Events", href: "/events" },
  { name: "Merch", href: "/merch" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-28">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
          <Image
            src="/galavant-logo.png"
            alt="Galavant Multisport"
            width={600}
            height={230}
            priority
            className="object-contain h-14 sm:h-20 lg:h-24 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-900 text-sm font-medium tracking-wide hover:text-[#2563eb] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={GIVEBUTTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold px-5 py-2 rounded transition-colors tracking-wide"
          >
            Donate
          </a>
        </div>

        {/* Mobile: Donate + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={GIVEBUTTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dc2626] text-white text-xs font-bold px-4 py-2 rounded tracking-wide"
          >
            Donate
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2"
          >
            {open ? (
              <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden border-t border-zinc-100 bg-white">
          <div className="flex flex-col px-4 py-3 gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-900 text-base font-medium py-3.5 px-2 border-b border-zinc-50 hover:text-[#2563eb] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-3">
              <a
                href={GIVEBUTTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3.5 rounded text-sm tracking-wide transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
