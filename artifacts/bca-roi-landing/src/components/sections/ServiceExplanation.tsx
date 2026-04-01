import { CheckCircle2 } from "lucide-react";
import { useContent } from "@/lib/cms-context";

export default function ServiceExplanation() {
  const label = useContent("service.label", "MANAGED INTELLIGENT AUTOMATION");
  const quote = useContent("service.quote", "You run the business. We run the automation.");
  const intro = useContent("service.intro", "Managed Automation delivers business process automation as a fully managed service.");
  const bullet1 = useContent("service.bullet.1", "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.");
  const bullet2 = useContent("service.bullet.2", "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.");
  const bullet3 = useContent("service.bullet.3", "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business.");

  const quoteParts = quote.split(". ");
  const firstPart = quoteParts[0] + ".";
  const secondPart = quoteParts.length > 1 ? quoteParts.slice(1).join(". ") : "";

  return (
    <section id="service" className="py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4">
              {label}
            </h2>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight border-l-4 border-primary pl-6 md:pl-10">
              {firstPart} {secondPart && <span className="font-bold text-primary">{secondPart}</span>}
            </blockquote>
          </div>
          
          <div className="space-y-8 text-lg text-foreground/80 font-medium">
            <p className="text-2xl text-foreground font-semibold">
              {intro}
            </p>
            
            <ul className="space-y-6 mt-8">
              {[bullet1, bullet2, bullet3].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
