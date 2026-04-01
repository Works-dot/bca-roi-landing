import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContent } from "@/lib/cms-context";

export default function Pricing() {
  const title = useContent("pricing.title", "AUTOMATION ENGAGEMENT MODEL");
  const starterName = useContent("pricing.starter.name", "Starter");
  const starterDesc = useContent("pricing.starter.description", "1 process");
  const starterSetup = useContent("pricing.starter.setup", "\u20AC10,000");
  const starterAnnual = useContent("pricing.starter.annual", "\u20AC5,000");
  const growthName = useContent("pricing.growth.name", "Growth");
  const growthDesc = useContent("pricing.growth.description", "2\u201310 processes");
  const growthSetup = useContent("pricing.growth.setup", "\u20AC9,500");
  const growthAnnual = useContent("pricing.growth.annual", "\u20AC4,500");
  const scaleName = useContent("pricing.scale.name", "Scale");
  const scaleDesc = useContent("pricing.scale.description", "10+ processes");
  const scaleSetup = useContent("pricing.scale.setup", "\u20AC9,000");
  const scaleAnnual = useContent("pricing.scale.annual", "\u20AC4,000");
  const note = useContent("pricing.note", "* Setup fee depends on process complexity.");

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="border-none shadow-md rounded-none bg-card">
              <CardHeader className="text-center pb-2 border-b border-border bg-muted/30">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest">{starterName}</CardTitle>
                <p className="text-muted-foreground font-medium">{starterDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">{starterSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">{starterAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl rounded-none bg-card relative transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              <CardHeader className="text-center pb-2 border-b border-border bg-primary/5">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest text-primary">{growthName}</CardTitle>
                <p className="text-muted-foreground font-medium">{growthDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">{growthSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">{growthAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md rounded-none bg-card">
              <CardHeader className="text-center pb-2 border-b border-border bg-muted/30">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest">{scaleName}</CardTitle>
                <p className="text-muted-foreground font-medium">{scaleDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">{scaleSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">{scaleAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground font-medium text-lg">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
