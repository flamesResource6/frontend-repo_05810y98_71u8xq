const logos = [
  "Acme Co.",
  "Globex",
  "Initech",
  "Starkworks",
  "Umbrella",
  "Wonka Labs",
];

export default function Logos() {
  return (
    <section className="py-10 bg-white border-y border-[#2d2d2d]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[#2d2d2d]/60 mb-6">Trusted by modern teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-md bg-[#2d2d2d]/5 text-[#2d2d2d]/60 flex items-center justify-center text-sm font-medium">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
