import { ArrowRight } from "lucide-react";

export default function ExampleROI() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-background/20 p-8 flex flex-col gap-6 relative">
              <h3 className="text-xl font-bold text-primary-foreground tracking-widest uppercase">Manual Process</h3>
              <ul className="space-y-4 text-lg font-medium text-background/80">
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span>Time:</span>
                  <span className="text-background">~2 hours/day</span>
                </li>
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span>Rate:</span>
                  <span className="text-background">€40/hour</span>
                </li>
                <li className="flex justify-between font-bold pt-2">
                  <span>Annual Cost:</span>
                  <span className="text-primary-foreground text-xl">€16,800</span>
                </li>
              </ul>
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-foreground p-1 rounded-full">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="border border-primary bg-primary/10 p-8 flex flex-col gap-6 relative">
              <h3 className="text-xl font-bold text-primary tracking-widest uppercase">Automation</h3>
              <ul className="space-y-4 text-lg font-medium text-background/80">
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span>Setup:</span>
                  <span className="text-background">€10,000</span>
                </li>
                <li className="flex justify-between border-b border-background/10 pb-2">
                  <span>Annual Service:</span>
                  <span className="text-background">€5,000</span>
                </li>
                <li className="flex justify-between font-bold pt-2">
                  <span>Total Year 1:</span>
                  <span className="text-primary text-xl">€15,000</span>
                </li>
              </ul>
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-foreground p-1 rounded-full">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 flex flex-col gap-6 shadow-2xl">
              <h3 className="text-xl font-bold tracking-widest uppercase">Business Impact</h3>
              <ul className="space-y-4 text-lg font-medium">
                <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span>Savings:</span>
                  <span className="font-bold">~€12,000</span>
                </li>
                <li className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span>Payback:</span>
                  <span className="font-bold">~10-month</span>
                </li>
                <li className="flex justify-between font-bold pt-2">
                  <span>ROI:</span>
                  <span className="text-2xl">~100%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-3xl md:text-4xl font-light italic">
              "Small processes. <span className="font-bold text-primary not-italic">Big impact.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
