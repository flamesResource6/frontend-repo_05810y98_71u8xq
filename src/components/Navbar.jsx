import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00cc5c] shadow-[0_10px_30px_rgba(0,204,92,0.35)] flex items-center justify-center">
              <span className="text-white font-black">G</span>
            </div>
            <span className="font-semibold text-[#2d2d2d] tracking-tight">GreenLight.ai</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#2d2d2d]/80">
            <a href="#features" className="hover:text-[#2d2d2d] transition-colors">Features</a>
            <a href="#compliance" className="hover:text-[#2d2d2d] transition-colors">Compliance</a>
            <a href="#pricing" className="hover:text-[#2d2d2d] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#2d2d2d] transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="h-9 px-3 rounded-md border border-[#2d2d2d]/10 text-[#2d2d2d] hover:bg-[#2d2d2d]/5 transition">Sign in</button>
            <button className="h-9 px-4 rounded-md bg-[#00cc5c] text-white font-medium shadow-[0_10px_30px_rgba(0,204,92,0.35)] hover:brightness-95 transition">Get a demo</button>
          </div>

          <button className="md:hidden p-2 text-[#2d2d2d]" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
