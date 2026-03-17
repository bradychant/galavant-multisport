export default function MissionSnapshot() {
  return (
    <section className="bg-white py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text side */}
        <div>
          <p className="text-[#2563eb] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-[#111] text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            Sport as a vehicle
            <br />
            for good.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-5">
            Galavant Multisport was born from the belief that endurance sport
            builds character, community, and resilience. We use the shared
            experience of going the distance—swimming, cycling, running—to raise
            funds and awareness for causes that matter.
          </p>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-10">
            Every event we organize, every mile we log together, every dollar we
            raise goes directly toward making a difference in people&apos;s lives.
          </p>
          <a
            href="/mission"
            className="inline-flex items-center gap-2 text-[#dc2626] font-bold text-sm tracking-wide hover:gap-4 transition-all duration-200 border-b-2 border-[#dc2626] pb-0.5"
          >
            Read Tim&apos;s story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Photo placeholder */}
        <div className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-[#111] via-zinc-800 to-zinc-700 overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 gap-3">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3 3h18" />
            </svg>
            <p className="text-xs tracking-widest uppercase font-medium">Photo Placeholder</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#dc2626]" />
        </div>
      </div>
    </section>
  );
}
