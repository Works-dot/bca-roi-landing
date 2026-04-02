import { ArrowRight } from "lucide-react";
import { useContent } from "@/lib/cms-context";

export default function ExampleROI() {
  const title = useContent("example.title", "TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS");
  const manualTitle = useContent("example.manual.title", "Manual process");
  const manualHours = useContent("example.manual.hours", "~2 hours/day");
  const manualRate = useContent("example.manual.rate", "\u20AC40/hour");
  const manualCost = useContent("example.manual.cost", "\u20AC16,800 annual cost");
  const autoTitle = useContent("example.automation.title", "Automation");
  const autoSetup = useContent("example.automation.setup", "\u20AC10,000 setup");
  const autoService = useContent("example.automation.service", "\u20AC5,000 annual service");
  const impactTitle = useContent("example.impact.title", "Business impact");
  const impactSavings = useContent("example.impact.savings", "~\u20AC12,000 savings");
  const impactPayback = useContent("example.impact.payback", "~10-month payback");
  const impactRoi = useContent("example.impact.roi", "~100% ROI");
  const footer = useContent("example.footer", "Small processes. Big impact.");

  const footerParts = footer.split(". ");
  const footerFirst = footerParts[0] + ".";
  const footerBold = footerParts.length > 1 ? footerParts.slice(1).join(". ") : "";

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }} />
      <div className="absolute inset-0 bg-foreground/[0.93]" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsla(240,10%,10%,0.3) 0%, transparent 20%, transparent 80%, hsla(240,10%,10%,0.3) 100%)' }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
            <div className="flex-1 border border-background/20 p-8 flex flex-col gap-6 rounded backdrop-blur-sm bg-background/[0.03]">
              <h3 className="text-xl font-bold text-primary-foreground tracking-widest uppercase">{manualTitle}</h3>
              <ul className="space-y-4 text-lg font-medium text-background/80">
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span className="text-background">{manualHours}</span>
                </li>
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span className="text-background">{manualRate}</span>
                </li>
                <li className="flex justify-between font-bold pt-2">
                  <span className="text-primary-foreground text-xl">{manualCost}</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center justify-center px-3">
              <ArrowRight className="w-8 h-8 text-primary-foreground/70" />
            </div>

            <div className="flex-1 border border-primary bg-primary/[0.12] p-8 flex flex-col gap-6 rounded backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary-foreground tracking-widest uppercase">{autoTitle}</h3>
              <ul className="space-y-4 text-lg font-medium text-background/80">
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span className="text-background">{autoSetup}</span>
                </li>
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span className="text-background">{autoService}</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center justify-center px-3">
              <ArrowRight className="w-8 h-8 text-primary-foreground/70" />
            </div>

            <div className="flex-1 bg-primary text-primary-foreground p-8 flex flex-col gap-6 shadow-2xl rounded">
              <h3 className="text-xl font-bold tracking-widest uppercase">{impactTitle}</h3>
              <ul className="space-y-4 text-lg font-medium">
                <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="font-bold">{impactSavings}</span>
                </li>
                <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="font-bold">{impactPayback}</span>
                </li>
                <li className="flex justify-between font-bold pt-2">
                  <span className="text-2xl">{impactRoi}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-3xl md:text-4xl font-light italic">
              "{footerFirst} <span className="font-bold not-italic">{footerBold}</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
