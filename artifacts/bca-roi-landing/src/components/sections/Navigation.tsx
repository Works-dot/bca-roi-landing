import { useState, useEffect } from "react";
import logo from "@assets/logo_1775027614637.png";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111] border-b border-white/10 h-16"
          : "bg-transparent border-b border-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="BCA Solutions" className="h-8 lg:h-10" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer text-sm font-semibold tracking-wider uppercase text-white hover:text-white/70 transition-colors">Home</button>
          <button onClick={() => scrollTo("service")} className="cursor-pointer text-sm font-semibold tracking-wider uppercase text-white hover:text-white/70 transition-colors">Solutions</button>
          <button onClick={() => scrollTo("pricing")} className="cursor-pointer text-sm font-semibold tracking-wider uppercase text-white hover:text-white/70 transition-colors">Pricing</button>
        </nav>

        <div className="flex items-center">
          <button
            className="cursor-pointer uppercase tracking-widest font-bold px-8 h-12 rounded-none border-2 border-white text-white bg-transparent hover:bg-white/10 transition-colors text-sm"
            onClick={() => scrollTo("assessment")}
            data-testid="btn-nav-assessment"
          >
            Get Assessment
          </button>
        </div>
      </div>
    </header>
  );
}
