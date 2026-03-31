import { CheckCircle2, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,15,10,0.92)] via-[rgba(30,20,15,0.82)] to-[rgba(40,25,15,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,15,10,0.4)] to-transparent" />

      <div className="relative container mx-auto px-4 md:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          <div className="flex flex-col space-y-8 max-w-2xl">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1]">
                AUTOMATION WITHOUT THE OPERATIONAL BURDEN
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-medium max-w-xl">
                We deliver business process automation as a fully managed service.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "No infrastructure to build or maintain",
                "No internal automation team needed",
                "Fast ROI with predictable costs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg font-medium text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
                Calculate Your ROI
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-0 w-[220px]">
            <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-4 text-center">
              <span className="font-bold text-sm tracking-widest text-white uppercase">Manual Process</span>
            </div>

            <div className="flex justify-center py-1.5">
              <ArrowDown className="w-5 h-5 text-primary" />
            </div>

            <div className="w-full bg-primary/80 backdrop-blur-sm border border-primary rounded-lg px-5 py-4 text-center shadow-lg shadow-primary/20">
              <span className="font-bold text-sm tracking-widest text-white uppercase">Automated Process</span>
            </div>

            <div className="flex justify-center py-1.5">
              <ArrowDown className="w-5 h-5 text-primary" />
            </div>

            <div className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg px-5 py-4 text-center">
              <span className="font-bold text-sm tracking-widest text-white uppercase">Time Saved,<br />Costs Reduced</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
