import { CheckCircle2 } from "lucide-react";

export default function ServiceExplanation() {
  return (
    <section id="service" className="py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4">
              BCA | MANAGED INTELLIGENT AUTOMATION
            </h2>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight border-l-4 border-primary pl-6 md:pl-10">
              You run the business. <span className="font-bold text-primary">We run the automation.</span>
            </blockquote>
          </div>
          
          <div className="space-y-8 text-lg text-foreground/80 font-medium">
            <p className="text-2xl text-foreground font-semibold">
              Managed Automation delivers business process automation as a fully managed service.
            </p>
            
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p>This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business.</p>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
