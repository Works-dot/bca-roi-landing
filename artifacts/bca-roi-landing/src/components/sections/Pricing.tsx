import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              AUTOMATION ENGAGEMENT MODEL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="border-none shadow-md rounded-none bg-card">
              <CardHeader className="text-center pb-2 border-b border-border bg-muted/30">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest">Starter</CardTitle>
                <p className="text-muted-foreground font-medium">1 process</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">€10,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">€5,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl rounded-none bg-card relative transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              <CardHeader className="text-center pb-2 border-b border-border bg-primary/5">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest text-primary">Growth</CardTitle>
                <p className="text-muted-foreground font-medium">2–10 processes</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">€9,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">€4,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md rounded-none bg-card">
              <CardHeader className="text-center pb-2 border-b border-border bg-muted/30">
                <CardTitle className="text-2xl font-bold uppercase tracking-widest">Scale</CardTitle>
                <p className="text-muted-foreground font-medium">10+ processes</p>
              </CardHeader>
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Setup</span>
                    <span className="text-2xl font-bold text-foreground">€9,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-foreground uppercase text-sm tracking-wider">Annual</span>
                    <span className="text-2xl font-bold text-foreground">€4,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground font-medium text-lg">
              * Setup fee depends on process complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
