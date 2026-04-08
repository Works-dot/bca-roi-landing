import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@assets/bca_logo_1775555829987.png";

const NAV_LINKS = [
  { label: "Solutions", target: "service" },
  { label: "Process Guide", target: "complexity" },
  { label: "ROI Calculator", target: "calculator" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#311111] backdrop-blur-sm border-b border-white/10 h-16"
          : "bg-transparent border-b border-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }}>
          <img src={logo} alt="BCA Solutions" className="h-8 lg:h-10" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="cursor-pointer text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            className="cursor-pointer font-bold rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#311111] transition-all px-4 md:px-8 h-10 md:h-12 text-xs md:text-sm"
            onClick={() => scrollTo("assessment")}
            data-testid="btn-nav-assessment"
          >
            Get Assessment
          </button>
          <button
            className="md:hidden cursor-pointer text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 z-[-1]"
            onClick={() => setMobileOpen(false)}
          />
          <div className="md:hidden bg-[#311111] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="cursor-pointer text-left px-4 py-3 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("assessment")}
                className="cursor-pointer text-left px-4 py-3 text-sm font-bold text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Get Assessment
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
