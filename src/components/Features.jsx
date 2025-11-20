import { CheckCircle2, Shield, Globe, Banknote, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Automated Compliance",
    desc: "Built-in worker classification, contracts, and document workflows for every country.",
    color: "#00cc5c",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    desc: "Hire and manage contractors in 150+ countries with localized guidance.",
    color: "#5897f4",
  },
  {
    icon: Banknote,
    title: "Fast, Reliable Payouts",
    desc: "Pay in local currencies with transparent fees and automated tax forms.",
    color: "#00cc5c",
  },
  {
    icon: Clock,
    title: "Time & Expenses",
    desc: "Timesheets, approvals, and expense tracking streamlined for busy teams.",
    color: "#5897f4",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* soft spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7f9fc] to-white" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-r from-[#00cc5c]/10 via-transparent to-[#5897f4]/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 ring-1 ring-[#2d2d2d]/10 text-xs text-[#2d2d2d]">
            <Sparkles size={14} className="text-[#00cc5c]" /> New in v3
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#2d2d2d] tracking-tight">Everything you need to manage contractors</h2>
          <p className="mt-3 text-[#2d2d2d]/80">All the building blocks to scale a flexible workforce without the chaos.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white border border-[#2d2d2d]/10 shadow-[0_15px_50px_rgba(45,45,45,0.07)] hover:shadow-[0_25px_80px_rgba(45,45,45,0.18)] transition-shadow gradient-border tilt">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-md flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
                  <Icon className="text-[#2d2d2d]" size={18} />
                </div>
                <h3 className="font-semibold text-[#2d2d2d]">{title}</h3>
              </div>
              <p className="text-sm text-[#2d2d2d]/75">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#2d2d2d]">
                <CheckCircle2 size={16} className="text-[#00cc5c]" />
                Included
              </div>
              <div className="mt-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${color} 0%, ${color}66 100%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
