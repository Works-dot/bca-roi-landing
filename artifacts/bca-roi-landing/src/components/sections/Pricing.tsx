import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContent } from "@/lib/cms-context";

export default function Pricing() {
  const title = useContent("pricing.title", "Automation Engagement Model");
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
    <section id="pricing" className="py-16 md:py-24 bg-[#130707]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="border border-white/10 shadow-md rounded-2xl bg-white/[0.04]">
              <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.03]">
                <CardTitle className="text-2xl font-bold text-white">{starterName}</CardTitle>
                <p className="text-white/70 font-medium">{starterDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold text-white/70 text-sm">Setup</span>
                    <span className="text-2xl font-bold text-white">{starterSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-white/70 text-sm">Annual</span>
                    <span className="text-2xl font-bold text-white">{starterAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/30 shadow-xl rounded-2xl bg-white/[0.08] relative transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-white/40" />
              <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.05]">
                <CardTitle className="text-2xl font-bold text-white">{growthName}</CardTitle>
                <p className="text-white/70 font-medium">{growthDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold text-white/70 text-sm">Setup</span>
                    <span className="text-2xl font-bold text-white">{growthSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-white/70 text-sm">Annual</span>
                    <span className="text-2xl font-bold text-white">{growthAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 shadow-md rounded-2xl bg-white/[0.04]">
              <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.03]">
                <CardTitle className="text-2xl font-bold text-white">{scaleName}</CardTitle>
                <p className="text-white/70 font-medium">{scaleDesc}</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold text-white/70 text-sm">Setup</span>
                    <span className="text-2xl font-bold text-white">{scaleSetup}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-white/70 text-sm">Annual</span>
                    <span className="text-2xl font-bold text-white">{scaleAnnual}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <p className="text-white/70 font-medium text-lg">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
