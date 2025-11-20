import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00cc5c]/20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#5897f4]/20 blur-3xl animate-float" />
        {/* diagonal accent gradient */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#00cc5c]/20 via-transparent to-[#5897f4]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00cc5c]/15 text-[#00cc5c] px-3 py-1 text-xs font-medium mb-4 ring-1 ring-inset ring-[#00cc5c]/40">
              HRIS for the global contractor workforce
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Making it easy to hire, organize, and pay contractors -anywhere.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              GreenLight.ai centralizes onboarding, compliance, timesheets, and payments so your team can scale contractors confidently in 150+ countries.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-[#00cc5c] text-white font-medium shadow-[0_15px_40px_rgba(0,204,92,0.45)] hover:brightness-95 transition glow-green">
                Book a demo
              </a>
              <a href="#learn" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">
                Learn more
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
                <div className="text-3xl font-black text-[#00cc5c]">150+</div>
                <div className="text-xs text-white/70">Countries supported</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
                <div className="text-3xl font-black text-[#00cc5c]">48h</div>
                <div className="text-xs text-white/70">Average onboarding</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur">
                <div className="text-3xl font-black text-[#00cc5c]">99.8%</div>
                <div className="text-xs text-white/70">On-time payouts</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative">
            <div className="relative bg-white/5 rounded-2xl border border-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] gradient-border">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#00cc5c]/20 via-transparent to-[#5897f4]/25 border border-white/10" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-xl bg-[#5897f4] shadow-[0_20px_60px_rgba(88,151,244,0.5)] animate-float" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-[#00cc5c] shadow-[0_20px_60px_rgba(0,204,92,0.5)] animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
