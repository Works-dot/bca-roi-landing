import { Layers, ShieldCheck, Clock, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/lib/cms-context";

export default function ValuePillars() {
  const title = useContent("pillars.title", "WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION");
  const icons = [Layers, ShieldCheck, Clock, Calculator];
  const pillars = [1, 2, 3, 4].map((n, i) => ({
    icon: icons[i],
    title: useContent(`pillars.${n}.title`, ""),
    description: useContent(`pillars.${n}.description`, ""),
  }));

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow rounded-none bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mb-2">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
