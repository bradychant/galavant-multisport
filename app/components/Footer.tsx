export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-sm">
          <p className="text-zinc-400 tracking-wide text-center sm:text-left">
            &copy; {year} Galavant Multisport
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="https://instagram.com/galavantmultisport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium tracking-wide"
            >
              Instagram
            </a>
            <span className="text-zinc-200">·</span>
            <a
              href="https://strava.app.link/VI9kkFjZy1b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium tracking-wide"
            >
              Strava
            </a>
            <span className="text-zinc-200">·</span>
            <a
              href="mailto:galavantms@gmail.com"
              className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium tracking-wide"
            >
              Contact
            </a>
            <span className="text-zinc-200">·</span>
            <a
              href="/donate"
              className="text-[#dc2626] hover:text-[#b91c1c] transition-colors font-bold tracking-wide"
            >
              Donate
            </a>
          </div>

          <p className="text-zinc-400 italic tracking-wide text-center sm:text-right">
            Go Far. Enjoy the View.
          </p>
        </div>

        {/* Bottom row — legal */}
        <div className="border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400 tracking-wide leading-relaxed">
          Galavant Multisport is a registered 501(c)(3) charitable organization.
          EIN: 41-2993622. Donations are tax-deductible to the extent allowed
          by law.
        </div>
      </div>
    </footer>
  );
}
