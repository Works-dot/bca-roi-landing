import { CheckCircle2, ArrowRight, Cog, Zap, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted border-b border-border">
      <div className="container mx-auto px-4 md:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1]">
                AUTOMATION WITHOUT THE OPERATIONAL BURDEN
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
                We deliver business process automation as a fully managed service.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "No infrastructure to build or maintain",
                "No internal automation team needed",
                "Fast ROI with predictable costs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="h-14 px-10 text-base uppercase tracking-widest font-bold rounded-none shadow-lg shadow-primary/20"
                onClick={scrollToCalculator}
                data-testid="btn-hero-cta"
              >
                Calculate Your ROI
              </Button>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-card border border-border shadow-xl p-8 flex flex-col justify-center gap-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full -z-10" />
            
            <div className="flex flex-col items-center p-6 border-2 border-dashed border-muted-foreground/30 bg-muted/30">
              <div className="flex items-center justify-center w-12 h-12 bg-background border border-border mb-3">
                <Cog className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="font-bold text-lg tracking-wider text-center uppercase">Manual Process</span>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex flex-col items-center p-6 border-2 border-primary bg-primary/5 shadow-md shadow-primary/5 relative">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
                <Zap className="w-3 h-3" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-primary mb-3">
                <Cog className="w-6 h-6 text-primary-foreground animate-[spin_4s_linear_infinite]" />
              </div>
              <span className="font-bold text-lg tracking-wider text-center text-primary uppercase">Automated Process</span>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex flex-col items-center p-6 bg-foreground text-background">
              <div className="flex items-center justify-center w-12 h-12 border border-background/20 mb-3">
                <TrendingDown className="w-6 h-6 text-background" />
              </div>
              <span className="font-bold text-lg tracking-wider text-center uppercase">Time Saved, Costs Reduced</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
