import { useState } from "react";
import {
  CheckCircle2,
  Layers,
  ShieldCheck,
  Clock,
  Calculator,
  ArrowRight,
  ArrowDown,
  Cog,
  Rocket,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CurvedDividerBottom = ({ darkColor }: { darkColor: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block w-full h-[50px] md:h-[70px]"
    >
      <path
        d="M0,0 Q720,80 1440,0"
        fill="none"
        stroke="url(#glowBottom)"
        strokeWidth="2"
      />
      <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill={darkColor} />
      <defs>
        <linearGradient id="glowBottom" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const CurvedDividerTop = ({ darkColor }: { darkColor: string }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block w-full h-[50px] md:h-[70px]"
    >
      <path d="M0,80 Q720,0 1440,80 L1440,0 L0,0 Z" fill={darkColor} />
      <path
        d="M0,80 Q720,0 1440,80"
        fill="none"
        stroke="url(#glowTop)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="glowTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function Landing() {
  const [complexity, setComplexity] = useState<string>("");
  const [hours, setHours] = useState("120");
  const [rate, setRate] = useState("35");
  const [showResult, setShowResult] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showNegative, setShowNegative] = useState(false);

  const handleCalculate = () => {
    if (complexity === "XL" || complexity === "XXL") {
      setShowCustom(true);
      setShowResult(false);
      setShowNegative(false);
      return;
    }
    setShowCustom(false);
    const monthlyHours = parseFloat(hours) || 0;
    const hourlyCost = parseFloat(rate) || 0;
    const pricing: Record<string, { setup: number; service: number }> = {
      S: { setup: 5000, service: 3000 },
      M: { setup: 10000, service: 5000 },
      L: { setup: 17500, service: 7000 },
    };
    const p = pricing[complexity];
    if (!p || monthlyHours <= 0 || hourlyCost <= 0) return;
    const annualManual = monthlyHours * hourlyCost * 12;
    const remaining = annualManual * 0.1;
    const annualAuto = p.service + remaining;
    const savings = annualManual - annualAuto;
    if (savings <= 0) {
      setShowNegative(true);
      setShowResult(false);
      return;
    }
    setShowNegative(false);
    setShowResult(true);
  };

  const monthlyHours = parseFloat(hours) || 0;
  const hourlyCost = parseFloat(rate) || 0;
  const pricing: Record<string, { setup: number; service: number }> = {
    S: { setup: 5000, service: 3000 },
    M: { setup: 10000, service: 5000 },
    L: { setup: 17500, service: 7000 },
  };
  const p = pricing[complexity] || { setup: 10000, service: 5000 };
  const annualManual = monthlyHours * hourlyCost * 12;
  const remaining = annualManual * 0.1;
  const annualAuto = p.service + remaining;
  const savings = annualManual - annualAuto;
  const monthlySavings = savings / 12;
  const payback = monthlySavings > 0 ? p.setup / monthlySavings : 0;
  const roi = savings > 0 ? (savings / p.setup) * 100 : 0;
  const fte = monthlyHours / 144;

  function getInsight(pb: number) {
    if (pb < 6) return "Excellent candidate";
    if (pb < 12) return "Strong candidate";
    if (pb < 24) return "Moderate candidate";
    return "Low ROI candidate";
  }

  return (
    <div className="min-h-screen font-['Prompt'] bg-[#130707] text-white">

      {/* ========== NAVIGATION ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#130707]/95 backdrop-blur-sm border-b border-white/10 h-20 transition-all">
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="cursor-pointer font-bold text-xl text-white tracking-tight">
            BCA Solutions
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-sm font-semibold text-white/90 hover:text-white transition-colors">
              Home
            </button>
            <button className="text-sm font-semibold text-white/90 hover:text-white transition-colors">
              Solutions
            </button>
            <button className="text-sm font-semibold text-white/90 hover:text-white transition-colors">
              Pricing
            </button>
          </nav>
          <Button
            variant="outline"
            className="rounded-full border-2 border-white text-white bg-transparent hover:bg-white/10 px-6 h-11 text-sm font-bold"
          >
            Get Assessment
          </Button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[800px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#130707]/95 via-[#130707]/88 to-[#130707]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130707]/50 to-transparent" />

        <div className="relative container mx-auto px-4 md:px-8 pt-28 pb-16 lg:py-0 flex items-center justify-center min-h-[inherit]">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center w-full">
            <div className="flex flex-col space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                  Automation Without the Operational Burden
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-medium">
                  We deliver business process automation as a fully managed
                  service.
                </p>
              </div>

              <ul className="space-y-2 lg:space-y-3">
                {[
                  "No infrastructure to build or maintain",
                  "No internal automation team needed",
                  "Fast ROI with predictable costs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-base md:text-lg font-medium text-white/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-1 lg:pt-2">
                <Button className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full bg-white text-[#311111] hover:bg-white/90 shadow-lg">
                  Calculate Your ROI
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-2 lg:pt-0">
              <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center flex flex-col items-center">
                <Cog className="w-6 h-6 lg:w-8 lg:h-8 text-white/80 mb-1.5 lg:mb-2" />
                <span className="font-bold text-xs lg:text-base text-white">
                  Manual Process
                </span>
              </div>

              <div className="flex items-center justify-center py-1 lg:py-1.5">
                <ArrowDown className="w-5 h-5 lg:w-7 lg:h-7 text-white/80" />
              </div>

              <div className="w-full bg-[#311111]/80 backdrop-blur-sm border border-[#311111] rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center shadow-lg shadow-[#311111]/20 flex flex-col items-center">
                <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-white mb-1.5 lg:mb-2" />
                <span className="font-bold text-xs lg:text-base text-white">
                  Automated Process
                </span>
              </div>

              <div className="flex items-center justify-center py-1 lg:py-1.5">
                <ArrowDown className="w-5 h-5 lg:w-7 lg:h-7 text-white/80" />
              </div>

              <div className="w-full bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-4 lg:px-6 lg:py-7 text-center flex flex-col items-center">
                <TrendingDown className="w-6 h-6 lg:w-8 lg:h-8 text-white/80 mb-1.5 lg:mb-2" />
                <span className="font-bold text-xs lg:text-base text-white leading-tight">
                  Time Saved, Costs Reduced
                </span>
              </div>
            </div>
          </div>
        </div>

        <CurvedDividerBottom darkColor="#130707" />
      </section>

      {/* ========== SERVICE EXPLANATION ========== */}
      <section className="py-16 md:py-24 bg-[#130707] relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-sm font-bold tracking-[0.3em] text-white/50 mb-4">
                MANAGED INTELLIGENT AUTOMATION
              </h2>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight border-l-4 border-white/30 pl-6 md:pl-10">
                You run the business.{" "}
                <span className="font-bold text-white">
                  We run the automation.
                </span>
              </blockquote>
            </div>

            <div className="space-y-8 text-lg text-white/70 font-medium">
              <p className="text-2xl text-white font-semibold">
                Managed Automation delivers business process automation as a
                fully managed service.
              </p>

              <ul className="space-y-6 mt-8">
                {[
                  "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.",
                  "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.",
                  "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white/50 shrink-0 mt-1" />
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUE PILLARS ========== */}
      <section className="relative py-16 md:py-24 pb-28 md:pb-36 bg-[#1a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#130707] to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Organizations Choose Managed Automation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Zero Infrastructure",
                  desc: "No servers to provision, no software to install, no licenses to manage.",
                },
                {
                  icon: ShieldCheck,
                  title: "Compliance & Reliability",
                  desc: "Bank-grade security and guaranteed SLAs for your critical processes.",
                },
                {
                  icon: Clock,
                  title: "Fast Deployment",
                  desc: "From assessment to production in weeks, not months. Rapid time to value.",
                },
                {
                  icon: Calculator,
                  title: "Predictable Costs",
                  desc: "Flat monthly fee per process. No hidden costs or surprise upgrades.",
                },
              ].map((pillar, i) => (
                <Card
                  key={i}
                  className="border border-white/10 shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-white/[0.04] backdrop-blur-sm"
                >
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-2">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 font-medium">{pillar.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <CurvedDividerBottom darkColor="#130707" />
      </section>

      {/* ========== CALCULATOR ========== */}
      <section className="py-16 md:py-24 bg-[#130707] relative pt-24 md:pt-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Estimate Your Automation ROI
              </h2>
            </div>

            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wider text-white/50">
                    Process Complexity
                  </Label>
                  <Select onValueChange={setComplexity} value={complexity}>
                    <SelectTrigger className="h-11 bg-white/10 border-white/15 rounded-xl text-sm text-white">
                      <SelectValue placeholder="Select size..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a0a0a] border-white/15 text-white">
                      <SelectItem value="S">
                        S - 1 application, 5-10 steps
                      </SelectItem>
                      <SelectItem value="M">
                        M - 2 applications, 10-20 steps
                      </SelectItem>
                      <SelectItem value="L">
                        L - 2-3 applications, 20-40 steps
                      </SelectItem>
                      <SelectItem value="XL">
                        XL - 3-4 applications, 40+ steps
                      </SelectItem>
                      <SelectItem value="XXL">
                        XXL - Complex, end-to-end processes
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wider text-white/50">
                    Monthly Time
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="h-11 bg-white/10 border-white/15 rounded-xl text-sm pr-14 text-white"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 font-bold">
                      hours
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold tracking-wider text-white/50">
                    Hourly Cost
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/40">
                      &euro;
                    </span>
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
                >
                  Calculate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {showCustom && (
              <div className="mt-6 bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <AlertTriangle className="w-8 h-8 text-white/60 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white">
                      Custom Assessment Required
                    </h3>
                    <p className="text-sm text-white/50 mt-1">
                      For XL and XXL complexity, we provide indicative pricing
                      only after a detailed review.
                    </p>
                  </div>
                  <Button className="rounded-full bg-white text-[#311111] hover:bg-white/90 px-5 h-10 text-xs font-bold flex-shrink-0">
                    Request Assessment
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {showNegative && (
              <div className="mt-6 bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <AlertTriangle className="w-8 h-8 text-white/40 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Review Recommended
                    </h3>
                    <p className="text-sm text-white/50 mt-1">
                      This process may not be a strong candidate for managed
                      automation based on the current inputs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showResult && (
              <div className="mt-6 border-2 border-white/20 rounded-2xl p-6 md:p-8 bg-white/[0.06]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <h3 className="text-xs font-bold tracking-widest text-white/40 mb-1">
                      Annual Savings
                    </h3>
                    <div className="text-3xl md:text-4xl font-extrabold text-white">
                      &euro;{Math.round(savings).toLocaleString("en-US")}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-white/40 mb-1">
                      Payback Period
                    </h3>
                    <div className="text-2xl font-bold text-white">
                      {payback.toFixed(1)}{" "}
                      <span className="text-base font-semibold text-white/40">
                        months
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-white/40 mb-1">
                      ROI
                    </h3>
                    <div className="text-2xl font-bold text-white">
                      {Math.round(roi)}
                      <span className="text-base font-semibold text-white/40">
                        %
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-white/40 mb-1">
                      FTE Equivalent
                    </h3>
                    <div className="text-2xl font-bold text-white">
                      {fte.toFixed(2)}{" "}
                      <span className="text-base font-semibold text-white/40">
                        FTE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center gap-3 bg-white/10 border-l-4 border-white/30 px-4 py-3">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="font-bold text-sm text-white">
                      {getInsight(payback)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {(showResult || showCustom || showNegative) && (
              <p className="text-xs text-white/40 mt-4 text-center leading-relaxed max-w-3xl mx-auto">
                Indicative calculation based on standard managed automation
                pricing and an assumed 90% automation ratio. Final pricing
                depends on process complexity and business environment.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ========== EXAMPLE ROI ========== */}
      <section className="relative py-16 md:py-24 pb-28 md:pb-36 bg-[#1a0a0a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-[#130707]/[0.93]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(19,7,7,0.6) 0%, transparent 15%, transparent 85%, rgba(19,7,7,0.4) 100%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Typical ROI From Automating a Single Process
              </h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch gap-0">
              <div className="flex-1 border border-white/20 p-6 md:p-8 flex flex-col gap-4 md:gap-6 rounded-2xl backdrop-blur-sm bg-white/[0.03]">
                <h3 className="text-xl font-bold text-white">
                  Manual process
                </h3>
                <ul className="space-y-3 md:space-y-4 text-lg font-medium text-white/80">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">~2 hours/day</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">&euro;40/hour</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-white text-xl">
                      &euro;16,800 annual cost
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0 md:px-3">
                <ArrowDown className="w-6 h-6 text-white/70 md:hidden" />
                <ArrowRight className="w-8 h-8 text-white/70 hidden md:block" />
              </div>

              <div className="flex-1 border border-white/15 bg-white/[0.05] p-6 md:p-8 flex flex-col gap-4 md:gap-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">Automation</h3>
                <ul className="space-y-3 md:space-y-4 text-lg font-medium text-white/80">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white">&euro;10,000 setup</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white">
                      &euro;5,000 annual service
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0 md:px-3">
                <ArrowDown className="w-6 h-6 text-white/70 md:hidden" />
                <ArrowRight className="w-8 h-8 text-white/70 hidden md:block" />
              </div>

              <div className="flex-1 bg-[#311111]/60 border border-[#311111] text-white p-6 md:p-8 flex flex-col gap-4 md:gap-6 shadow-2xl rounded-2xl">
                <h3 className="text-xl font-bold">Business impact</h3>
                <ul className="space-y-3 md:space-y-4 text-lg font-medium">
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~&euro;12,000 savings</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~10-month payback</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-2xl">~100% ROI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 md:mt-16 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light italic">
                "Small processes.{" "}
                <span className="font-bold not-italic">Big impact.</span>"
              </p>
            </div>
          </div>
        </div>

        <CurvedDividerBottom darkColor="#130707" />
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-16 md:py-24 bg-[#130707] relative pt-24 md:pt-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Automation Engagement Model
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-white/10 shadow-md rounded-2xl bg-white/[0.04]">
                <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.03]">
                  <CardTitle className="text-2xl font-bold text-white">Starter</CardTitle>
                  <p className="text-white/50 font-medium">1 process</p>
                </CardHeader>
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-bold text-white/70 text-sm">
                        Setup
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;10,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-white/70 text-sm">
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;5,000
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/30 shadow-xl rounded-2xl bg-white/[0.08] relative transform md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1 bg-white/40" />
                <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.05]">
                  <CardTitle className="text-2xl font-bold text-white">
                    Growth
                  </CardTitle>
                  <p className="text-white/50 font-medium">
                    2&ndash;10 processes
                  </p>
                </CardHeader>
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-bold text-white/70 text-sm">
                        Setup
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;9,500
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-white/70 text-sm">
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;4,500
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-white/10 shadow-md rounded-2xl bg-white/[0.04]">
                <CardHeader className="text-center pb-2 border-b border-white/10 bg-white/[0.03]">
                  <CardTitle className="text-2xl font-bold text-white">Scale</CardTitle>
                  <p className="text-white/50 font-medium">
                    10+ processes
                  </p>
                </CardHeader>
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-bold text-white/70 text-sm">
                        Setup
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;9,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-white/70 text-sm">
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-white">
                        &euro;4,000
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-white/50 font-medium text-lg">
                * Setup fee depends on process complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA / CONTACT FORM ========== */}
      <section className="relative py-16 md:py-24 bg-[#1a0a0a] text-white overflow-hidden pt-24 md:pt-32">
        <CurvedDividerTop darkColor="#130707" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')",
          }}
        />
        <div className="absolute inset-0 bg-[#311111]/90" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Start With One Process
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                Validate ROI quickly and scale automation.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md bg-[#faf8f5] p-8 shadow-2xl rounded-2xl">
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label className="text-[#1a1a1a] font-bold">Name</Label>
                  <Input
                    placeholder="John Doe"
                    className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#1a1a1a] font-bold">Email</Label>
                  <Input
                    placeholder="john@company.com"
                    type="email"
                    className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#1a1a1a] font-bold">Company</Label>
                  <Input
                    placeholder="Acme Corp"
                    className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]"
                  />
                </div>

                <Button className="w-full h-14 text-base font-bold rounded-full mt-4 bg-[#311111] hover:bg-[#130707] text-white">
                  Request Detailed Assessment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0d0404] text-white py-8 md:py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold">BCA Solutions</div>
          <div className="text-white/50 font-medium">
            &copy; {new Date().getFullYear()} BCA Solutions. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}