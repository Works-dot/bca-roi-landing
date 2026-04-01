import { CheckCircle2, ArrowDown, ArrowRight, Cog, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/cms-context";

export default function Hero() {
  const headline = useContent("hero.headline", "AUTOMATION WITHOUT THE OPERATIONAL BURDEN");
  const subheadline = useContent("hero.subheadline", "We deliver business process automation as a fully managed service.");
  const check1 = useContent("hero.checklist.1", "No infrastructure to build or maintain");
  const check2 = useContent("hero.checklist.2", "No internal automation team needed");
  const check3 = useContent("hero.checklist.3", "Fast ROI with predictable costs");
  const cta = useContent("hero.cta", "Calculate Your ROI");

  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,15,10,0.92)] via-[rgba(30,20,15,0.82)] to-[rgba(40,25,15,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,15,10,0.4)] to-transparent" />

      <div className="relative container mx-auto px-4 md:px-8 py-24 lg:py-0 flex items-center min-h-[inherit]">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          <div className="flex flex-col space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1]">
                {headline}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-medium">
                {subheadline}
              </p>
            </div>

            <ul className="space-y-3">
              {[check1, check2, check3].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg font-medium text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="lg"
                className="h-14 px-10 text-base uppercase tracking-widest font-bold rounded-none shadow-lg shadow-primary/30"
                onClick={scrollToCalculator}
                data-testid="btn-hero-cta"
              >
                {cta}
              </Button>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-4 lg:pt-0">
            <div className="flex-1 lg:flex-none lg:w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center">
              <Cog className="w-8 h-8 text-white/80 mb-2 hidden lg:block" />
              <span className="font-bold text-xs lg:text-base tracking-widest text-white uppercase">Manual Process</span>
            </div>

            <div className="flex items-center justify-center px-1 lg:px-0 lg:py-1.5">
              <ArrowRight className="w-5 h-5 text-white/80 lg:hidden" />
              <ArrowDown className="w-7 h-7 text-white/80 hidden lg:block" />
            </div>

            <div className="flex-1 lg:flex-none lg:w-full bg-primary/80 backdrop-blur-sm border border-primary rounded-lg px-3 py-3 lg:px-6 lg:py-7 text-center shadow-lg shadow-primary/20 flex flex-col items-center">
              <Cog className="w-8 h-8 text-white mb-2 hidden lg:block animate-[spin_4s_linear_infinite]" />
              <span className="font-bold text-xs lg:text-base tracking-widest text-white uppercase">Automated Process</span>
            </div>

            <div className="flex items-center justify-center px-1 lg:px-0 lg:py-1.5">
              <ArrowRight className="w-5 h-5 text-white/80 lg:hidden" />
              <ArrowDown className="w-7 h-7 text-white/80 hidden lg:block" />
            </div>

            <div className="flex-1 lg:flex-none lg:w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center">
              <TrendingDown className="w-8 h-8 text-white/80 mb-2 hidden lg:block" />
              <span className="font-bold text-xs lg:text-base tracking-widest text-white uppercase leading-tight">Time Saved, Costs Reduced</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
