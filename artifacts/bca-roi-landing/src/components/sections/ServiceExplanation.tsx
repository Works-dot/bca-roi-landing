import { CheckCircle2 } from "lucide-react";
import { useContent } from "@/lib/cms-context";

export default function ServiceExplanation() {
  const label = useContent("service.label", "MANAGED INTELLIGENT AUTOMATION");
  const quote = useContent("service.quote", "YOU RUN <b>THE BUSINESS.</b><br>WE RUN <b>THE AUTOMATION.</b>");
  const intro = useContent("service.intro", "Managed Automation delivers business process automation as a fully managed service.");
  const bullet1 = useContent("service.bullet.1", "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.");
  const bullet2 = useContent("service.bullet.2", "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.");
  const bullet3 = useContent("service.bullet.3", "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business.");

  return (
    <section id="service" className="py-16 md:py-24 bg-[#130707] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 md:mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-white/60 mb-4">
              {label}
            </h2>
            <blockquote
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight border-l-4 border-white/30 pl-6 md:pl-10 uppercase [&_b]:font-extrabold"
              dangerouslySetInnerHTML={{ __html: quote }}
            />
          </div>
          
          <div className="space-y-8 text-lg text-white/70 font-medium">
            <p className="text-2xl text-white font-semibold">
              {intro}
            </p>
            
            <ul className="space-y-6 mt-8">
              {[bullet1, bullet2, bullet3].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white/60 shrink-0 mt-1" />
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
