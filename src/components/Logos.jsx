const logos = [
  "Acme Co.",
  "Globex",
  "Initech",
  "Starkworks",
  "Umbrella",
  "Wonka Labs",
  "Acme Co.",
  "Globex",
  "Initech",
  "Starkworks",
  "Umbrella",
  "Wonka Labs",
];

export default function Logos() {
  return (
    <section className="py-10 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white/60 mb-6">Trusted by modern teams</p>
        {/* marquee row */}
        <div className="relative">
          <div className="marquee-track gap-6" aria-hidden="true">
            {logos.map((name, i) => (
              <div key={name + i} className="mx-3 inline-flex h-10 min-w-[140px] rounded-md bg-white/10 text-white/70 items-center justify-center text-sm font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
