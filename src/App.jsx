import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* global grain for texture */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-[#2d2d2d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#00cc5c] flex items-center justify-center">
              <span className="text-white font-black text-sm">G</span>
            </div>
            <span className="text-sm text-[#2d2d2d]/70">© {new Date().getFullYear()} GreenLight.ai</span>
          </div>
          <div className="text-sm text-[#2d2d2d]/60">
            Made for modern People Ops teams
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
