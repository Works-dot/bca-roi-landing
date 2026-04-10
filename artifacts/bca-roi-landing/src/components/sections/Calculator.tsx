import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
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
import { useContent, useConstants } from "@/lib/cms-context";
import { trackCalculatorUse } from "@/lib/api";

interface CalculationResult {
  annualSavings: number;
  paybackMonths: number;
  roi: number;
  fte: number;
}

function formatCurrency(value: number): string {
  return "\u20AC" + Math.round(value).toLocaleString("en-US");
}

function getInsightInfo(paybackMonths: number): { label: string; description: string; buttonText: string } {
  if (paybackMonths < 1) return {
    label: "Excellent candidate",
    description: "Results indicate very high automation potential. We recommend reviewing your inputs or requesting a detailed assessment to validate the estimate.",
    buttonText: "Review inputs or request assessment",
  };
  if (paybackMonths < 6) return {
    label: "Excellent candidate",
    description: "Strong ROI potential with fast return. This process is an ideal candidate for automation.",
    buttonText: "Start with this process",
  };
  if (paybackMonths < 12) return {
    label: "Strong candidate",
    description: "Clear business value with predictable ROI. A strong starting point for automation.",
    buttonText: "Start with this process",
  };
  if (paybackMonths < 24) return {
    label: "Moderate candidate",
    description: "Potential value, depending on scale and optimization. May benefit from further assessment.",
    buttonText: "Review scope and optimize",
  };
  return {
    label: "Review recommended",
    description: "This process may not be an ideal starting point based on the current inputs.",
    buttonText: "Review scope and optimize",
  };
}

export default function Calculator() {
  const sectionTitle = useContent("calculator.title", "Estimate Your Automation ROI");
  const sectionDescription = useContent("calculator.description", "Use this calculator to get a quick estimate of how much time and cost your organization could save by automating a specific business process. Simply select the complexity of the process, enter the monthly hours currently spent on it, and your average hourly cost — then see your projected annual savings, payback period, and ROI.");
  const constants = useConstants();

  const PRICING: Record<string, { setup: number; service: number }> = (constants.pricing as Record<string, { setup: number; service: number }>) ?? {
    S: { setup: 5000, service: 3000 },
    M: { setup: 10000, service: 5000 },
    L: { setup: 17500, service: 7000 },
  };
  const AUTOMATION_RATIO = (constants.automationRatio as number) ?? 0.9;
  const WORKING_HOURS_PER_MONTH = (constants.workingHoursPerMonth as number) ?? 144;
  const REMAINING_RATIO = 1 - AUTOMATION_RATIO;

  const [complexity, setComplexity] = useState<string>("");
  const [hours, setHours] = useState("120");
  const [rate, setRate] = useState("35");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [customAssessment, setCustomAssessment] = useState(false);
  const [negativeBusiness, setNegativeBusiness] = useState(false);

  const handleCalculate = () => {
    if (complexity === "XL" || complexity === "XXL") {
      setCustomAssessment(true);
      setResult(null);
      setNegativeBusiness(false);
      trackCalculatorUse();
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
    trackCalculatorUse();
  };

  const hasResults = result || customAssessment || negativeBusiness;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#130707]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
              {sectionDescription}
            </p>
          </div>

          <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label className="text-xs font-bold tracking-wider text-white/70">Process Complexity</Label>
                <Select onValueChange={setComplexity} value={complexity}>
                  <SelectTrigger className="h-11 bg-white/10 border-white/15 rounded-xl text-sm text-white">
                    <SelectValue placeholder="Select size..." />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a0a0a] border-white/15 text-white">
                    <SelectItem value="S">S - 1 application, 5-10 steps</SelectItem>
                    <SelectItem value="M">M - 2 applications, 10-20 steps</SelectItem>
                    <SelectItem value="L">L - 2-3 applications, 20-40 steps</SelectItem>
                    <SelectItem value="XL">XL - 3-4 applications, 40+ steps</SelectItem>
                    <SelectItem value="XXL">XXL - Complex, end-to-end processes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold tracking-wider text-white/70">Monthly Time</Label>
                <div className="relative">
                  <Input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="h-11 bg-white/10 border-white/15 rounded-xl text-sm pr-14 text-white"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60 font-bold">hours</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold tracking-wider text-white/70">Hourly Cost</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/60">&euro;</span>
                  <Input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="h-11 bg-white/10 border-white/15 rounded-xl text-sm pl-7 text-white"
                  />
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                className="h-11 text-sm font-bold rounded-full bg-white text-[#311111] hover:bg-white/90"
                data-testid="btn-calculate"
              >
                Calculate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {customAssessment && (
            <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white text-center mb-5">Your estimated impact</h3>
              <div className="flex flex-col items-center text-center gap-3">
                <AlertTriangle className="w-8 h-8 text-white/60" />
                <div>
                  <h4 className="text-lg font-bold text-white">Custom assessment required</h4>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed max-w-lg mx-auto">
                    For complex, end-to-end processes, we provide tailored estimates after a detailed review.
                  </p>
                </div>
                <a
                  href="#assessment"
                  onClick={(e) => { e.preventDefault(); document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 bg-white text-[#311111] px-6 py-2.5 font-bold text-sm rounded-full cursor-pointer hover:bg-white/90 transition-colors mt-2"
                >
                  Explore alternative processes
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {negativeBusiness && (
            <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white text-center mb-5">Your estimated impact</h3>
              <div className="flex flex-col items-center text-center gap-3">
                <AlertTriangle className="w-8 h-8 text-white/40" />
                <div>
                  <h4 className="text-lg font-bold text-white">Review recommended</h4>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed max-w-lg mx-auto">
                    This process may not be an ideal starting point based on the current inputs.
                  </p>
                </div>
                <a
                  href="#assessment"
                  onClick={(e) => { e.preventDefault(); document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 bg-white text-[#311111] px-6 py-2.5 font-bold text-sm rounded-full cursor-pointer hover:bg-white/90 transition-colors mt-2"
                >
                  Review scope and optimize
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {result && (() => {
            const insight = getInsightInfo(result.paybackMonths);
            return (
              <div className="mt-8 border-2 border-white/20 rounded-2xl p-6 md:p-8 bg-white/[0.06]">
                <h3 className="text-lg font-bold text-white text-center mb-5">Your estimated impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="sm:col-span-2 lg:col-span-1">
                      <h4 className="text-xs font-bold tracking-widest text-white/60 mb-1">Annual Savings</h4>
                      <div className="text-3xl md:text-4xl font-extrabold text-white">
                        {formatCurrency(result.annualSavings)}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-white/60 mb-1">FTE Equivalent</h4>
                      <div className="text-2xl font-bold text-white">
                        {result.fte.toFixed(2)} <span className="text-base font-semibold text-white/60">FTE</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-white/60 mb-1">ROI</h4>
                      <div className="text-2xl font-bold text-white">
                        {Math.round(result.roi)}<span className="text-base font-semibold text-white/60">%</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-white/60 mb-1">Payback Period</h4>
                      <div className="text-2xl font-bold text-white">
                        {result.paybackMonths.toFixed(1)} <span className="text-base font-semibold text-white/60">months</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 mt-6 pt-6">
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-lg font-bold text-white">{insight.label}</span>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed max-w-lg mx-auto mt-1">
                        {insight.description}
                      </p>
                      <a
                        href="#assessment"
                        onClick={(e) => { e.preventDefault(); document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="inline-flex items-center gap-2 bg-white text-[#311111] px-6 py-2.5 font-bold text-sm rounded-full cursor-pointer hover:bg-white/90 transition-colors mt-4"
                      >
                        {insight.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
              </div>
            );
          })()}

          {hasResults && (
            <p className="text-xs text-white/60 mt-4 text-center leading-relaxed max-w-3xl mx-auto">
              Indicative calculation based on standard managed automation pricing and an assumed {Math.round(AUTOMATION_RATIO * 100)}% automation ratio. Final pricing depends on process complexity and business environment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
