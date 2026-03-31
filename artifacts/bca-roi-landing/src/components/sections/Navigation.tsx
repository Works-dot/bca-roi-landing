import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Settings className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold tracking-widest text-foreground uppercase">BCA Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollTo("service")} className="text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors">Solutions</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors">Pricing</button>
        </nav>
        
        <div className="flex items-center">
          <Button 
            className="uppercase tracking-widest font-bold px-8 h-12 rounded-none"
            onClick={() => scrollTo("assessment")}
            data-testid="btn-nav-assessment"
          >
            Get Assessment
          </Button>
        </div>
      </div>
    </header>
  );
}
