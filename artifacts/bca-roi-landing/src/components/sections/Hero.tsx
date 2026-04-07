import { CheckCircle2, ArrowDown, Rocket, Cog, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/cms-context";
import { CurvedDividerBottom } from "@/components/CurvedDividers";

export default function Hero() {
  const headline = useContent("hero.headline", "Automation Without the Operational Burden");
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
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[800px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#130707]/95 via-[#130707]/88 to-[#130707]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#130707]/50 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-8 pt-28 pb-16 lg:py-0 flex items-center justify-center min-h-[inherit]">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center w-full">

          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                {headline}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-medium">
                {subheadline}
              </p>
            </div>

            <ul className="space-y-2 lg:space-y-3">
              {[check1, check2, check3].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg font-medium text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 lg:pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full bg-white text-[#311111] hover:bg-white/90 shadow-lg"
                onClick={scrollToCalculator}
                data-testid="btn-hero-cta"
              >
                {cta}
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-2 lg:pt-0">
            <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center flex flex-col items-center">
              <Cog className="w-6 h-6 lg:w-8 lg:h-8 text-white/80 mb-1.5 lg:mb-2" />
              <span className="font-bold text-xs lg:text-base text-white">Manual Process</span>
            </div>

            <div className="flex items-center justify-center py-1 lg:py-1.5">
              <ArrowDown className="w-5 h-5 lg:w-7 lg:h-7 text-white/80" />
            </div>

            <div className="w-full bg-[#311111]/80 backdrop-blur-sm border border-[#311111] rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center shadow-lg shadow-[#311111]/20 flex flex-col items-center">
              <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-white mb-1.5 lg:mb-2" />
              <span className="font-bold text-xs lg:text-base text-white">Automated Process</span>
            </div>

            <div className="flex items-center justify-center py-1 lg:py-1.5">
              <ArrowDown className="w-5 h-5 lg:w-7 lg:h-7 text-white/80" />
            </div>

            <div className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center flex flex-col items-center">
              <TrendingDown className="w-6 h-6 lg:w-8 lg:h-8 text-white/80 mb-1.5 lg:mb-2" />
              <span className="font-bold text-xs lg:text-base text-white leading-tight">Time Saved, Costs Reduced</span>
            </div>
          </div>

        </div>
      </div>

      <CurvedDividerBottom darkColor="#130707" />
    </section>
  );
}
