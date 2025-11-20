export default function CTA() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* glow background ring */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-[#00cc5c]/6 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-black text-white tracking-tight">Ready to simplify contractor management?</h3>
        <p className="mt-3 text-white/80">See how GreenLight.ai helps you onboard, organize, and pay talent in days, not months.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-[#00cc5c] text-white font-medium shadow-[0_15px_40px_rgba(0,204,92,0.35)] hover:brightness-95 transition glow-green" href="#">
            Book a demo
          </a>
          <a className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15 transition" href="#pricing">
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
