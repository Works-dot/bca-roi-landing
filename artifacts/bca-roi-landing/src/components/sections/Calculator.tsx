import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Calculator() {
  const [complexity, setComplexity] = useState<string>("");
  const [hours, setHours] = useState("120");
  const [rate, setRate] = useState("35");
  const [calculated, setCalculated] = useState(false);

  const complexityDetails: Record<string, string> = {
    "": "Select process size to see complexity details",
    "S": "1 application, 5-10 steps",
    "M": "2 applications, 10-20 steps",
    "L": "2-3 applications, 20-40 steps",
    "XL": "3-4 applications, 40+ steps",
    "XXL": "Complex, end-to-end processes"
  };

  const handleCalculate = () => {
    setCalculated(true);
  };

  return (
    <section id="calculator" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ESTIMATE YOUR AUTOMATION ROI
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 bg-muted/50 p-8 border border-border">
                <div className="space-y-3">
                  <Label className="text-base uppercase font-bold tracking-wider text-foreground">Process Complexity</Label>
                  <Select onValueChange={setComplexity} value={complexity}>
                    <SelectTrigger className="h-12 bg-background border-border rounded-none text-lg">
                      <SelectValue placeholder="Select size..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm font-medium text-primary h-5">
                    {complexityDetails[complexity] || complexityDetails[""]}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base uppercase font-bold tracking-wider text-foreground">Hours per month</Label>
                    <Input 
                      type="number" 
                      value={hours} 
                      onChange={(e) => setHours(e.target.value)}
                      className="h-12 bg-background border-border rounded-none text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-base uppercase font-bold tracking-wider text-foreground">EUR / hour</Label>
                    <Input 
                      type="number" 
                      value={rate} 
                      onChange={(e) => setRate(e.target.value)}
                      className="h-12 bg-background border-border rounded-none text-lg"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full h-14 text-lg font-bold tracking-widest uppercase rounded-none mt-4"
                  data-testid="btn-calculate"
                >
                  Calculate
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="border-2 border-primary rounded-none shadow-xl h-full flex flex-col justify-center bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                <CardContent className="p-8 md:p-10 flex flex-col gap-8 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Annual Savings</h3>
                    <div className="text-5xl md:text-6xl font-extrabold text-primary">
                      €32,400
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-border"></div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Payback Period</h3>
                    <div className="text-3xl font-bold text-foreground">
                      9.2 months
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 font-medium">
                    This process is a strong automation candidate.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
