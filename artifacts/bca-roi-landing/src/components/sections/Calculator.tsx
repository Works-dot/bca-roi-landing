import { useState } from "react";
import { CheckCircle2, AlertTriangle, Calculator as CalculatorIcon, ArrowRight } from "lucide-react";
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

const PRICING: Record<string, { setup: number; service: number }> = {
  S: { setup: 5000, service: 3000 },
  M: { setup: 10000, service: 5000 },
  L: { setup: 17500, service: 7000 },
};

const AUTOMATION_RATIO = 0.9;
const REMAINING_RATIO = 1 - AUTOMATION_RATIO;
const WORKING_HOURS_PER_MONTH = 144;

interface CalculationResult {
  annualSavings: number;
  paybackMonths: number;
  roi: number;
  fte: number;
}

function formatCurrency(value: number): string {
  return "€" + Math.round(value).toLocaleString("en-US");
}

function getInsightLabel(paybackMonths: number): string {
  if (paybackMonths < 6) return "Excellent candidate";
  if (paybackMonths < 12) return "Strong candidate";
  if (paybackMonths < 24) return "Moderate candidate";
  return "Low ROI candidate";
}

export default function Calculator() {
  const [complexity, setComplexity] = useState<string>("");
  const [hours, setHours] = useState("120");
  const [rate, setRate] = useState("35");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [customAssessment, setCustomAssessment] = useState(false);
  const [negativeBusiness, setNegativeBusiness] = useState(false);

  const complexityDetails: Record<string, string> = {
    "": "Select process size to see complexity details",
    "S": "1 application, 5-10 steps",
    "M": "2 applications, 10-20 steps",
    "L": "2-3 applications, 20-40 steps",
    "XL": "3-4 applications, 40+ steps",
    "XXL": "Complex, end-to-end processes"
  };

  const handleCalculate = () => {
    if (complexity === "XL" || complexity === "XXL") {
      setCustomAssessment(true);
      setResult(null);
      setNegativeBusiness(false);
      return;
    }

    setCustomAssessment(false);

    const monthlyHours = parseFloat(hours) || 0;
    const hourlyCost = parseFloat(rate) || 0;
    const pricing = PRICING[complexity];

    if (!pricing || monthlyHours <= 0 || hourlyCost <= 0) {
      setResult(null);
      setNegativeBusiness(false);
      return;
    }

    const annualManualCost = monthlyHours * hourlyCost * 12;
    const remainingManualCost = annualManualCost * REMAINING_RATIO;
    const annualAutomationCost = pricing.service + remainingManualCost;
    const annualSavings = annualManualCost - annualAutomationCost;
    const monthlySavings = annualSavings / 12;
    const paybackMonths = monthlySavings > 0 ? pricing.setup / monthlySavings : Infinity;
    const roi = annualSavings > 0 ? (annualSavings / pricing.setup) * 100 : 0;
    const fte = monthlyHours / WORKING_HOURS_PER_MONTH;

    if (annualSavings <= 0) {
      setNegativeBusiness(true);
      setResult(null);
      return;
    }

    setNegativeBusiness(false);
    setResult({ annualSavings, paybackMonths, roi, fte });
  };

  const renderResultsContent = () => {
    if (customAssessment) {
      return (
        <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
          <AlertTriangle className="w-12 h-12 text-primary" />
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">Custom Assessment Required</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This process likely requires a custom assessment. For XL and XXL complexity, we provide indicative pricing only after a detailed review.
            </p>
          </div>
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold text-sm tracking-widest uppercase cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Request Custom Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      );
    }

    if (negativeBusiness) {
      return (
        <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
          <AlertTriangle className="w-12 h-12 text-muted-foreground" />
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">Review Recommended</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This process may not be a strong candidate for managed automation based on the current inputs.
            </p>
          </div>
        </div>
      );
    }

    if (result) {
      return (
        <>
          <div className="space-y-2">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Annual Savings</h3>
            <div className="text-5xl md:text-6xl font-extrabold text-primary">
              {formatCurrency(result.annualSavings)}
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Payback Period</h3>
              <div className="text-2xl font-bold text-foreground">
                {result.paybackMonths.toFixed(1)} months
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">ROI</h3>
              <div className="text-2xl font-bold text-foreground">
                {Math.round(result.roi)}%
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="space-y-2">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">FTE Equivalent</h3>
            <div className="text-2xl font-bold text-foreground">
              {result.fte.toFixed(2)} FTE
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary px-5 py-4 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="font-bold text-sm tracking-wider text-primary uppercase">
              {getInsightLabel(result.paybackMonths)}
            </span>
          </div>
        </>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
        <CalculatorIcon className="w-12 h-12 text-muted-foreground/40" />
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">Your ROI Estimate</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enter your process details and click Calculate to see your estimated automation savings.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="calculator" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ESTIMATE YOUR AUTOMATION ROI
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6 bg-muted/50 p-8 border border-border">
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

            <div className="lg:col-span-5 flex flex-col">
              <Card className="border-2 border-primary rounded-none shadow-xl flex-1 flex flex-col justify-center bg-card relative overflow-hidden min-h-[420px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                <CardContent className="p-8 md:p-10 flex flex-col gap-6 relative z-10">
                  {renderResultsContent()}
                </CardContent>
              </Card>
              {(result || negativeBusiness) && (
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Indicative calculation based on standard managed automation pricing and an assumed 90% automation ratio. Final pricing depends on process complexity and business environment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
