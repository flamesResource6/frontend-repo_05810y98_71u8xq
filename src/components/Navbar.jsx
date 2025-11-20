import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/10 border-b border-white/10">
      <div className="relative">
        {/* subtle gradient line */}
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#00cc5c]/50 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00cc5c] shadow-[0_10px_30px_rgba(0,204,92,0.35)] flex items-center justify-center">
              <span className="text-white font-black">G</span>
            </div>
            <span className="font-semibold text-white tracking-tight">GreenLight.ai</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="h-9 px-3 rounded-md border border-white/10 text-white hover:bg-white/10 transition">Sign in</button>
            <button className="h-9 px-4 rounded-md bg-[#00cc5c] text-white font-medium shadow-[0_10px_30px_rgba(0,204,92,0.45)] hover:brightness-95 transition glow-green">Get a demo</button>
          </div>

          <button className="md:hidden p-2 text-white" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
