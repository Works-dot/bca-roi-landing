import React, { useState } from "react";
import { CheckCircle2, Layers, ShieldCheck, Clock, Calculator, ArrowRight, ArrowDown, Cog, Rocket, TrendingDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Landing() {
  const [complexity, setComplexity] = useState("M");
  const [monthlyHours, setMonthlyHours] = useState(100);
  const [hourlyCost, setHourlyCost] = useState(40);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    setShowResults(true);
  };

  // Mock calculation logic for display
  const annualCost = monthlyHours * hourlyCost * 12;
  const estimatedSavings = annualCost * 0.7; // assuming 70% savings
  const paybackPeriod = 10; // static for mockup
  const roiPercent = 120; // static for mockup
  const fteEquivalent = (monthlyHours / 160).toFixed(1);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-['Prompt'] selection:bg-[#311111] selection:text-[#faf8f5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#130707]/90 backdrop-blur-md border-b border-white/10 text-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8a3333] to-[#311111] flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg leading-none">B</span>
            </div>
            <span className="font-medium text-xl tracking-tight">BCA Solutions</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#e8a3a3] transition-colors">Home</a>
            <a href="#" className="hover:text-[#e8a3a3] transition-colors">Solutions</a>
            <a href="#" className="hover:text-[#e8a3a3] transition-colors">Pricing</a>
            <Button className="rounded-full bg-[#faf8f5] text-[#130707] hover:bg-[#e8a3a3] hover:text-[#130707] transition-all">
              Get Assessment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#130707] text-[#faf8f5] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <img src="/__mockup/images/hero-bca.png" alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130707] via-[#130707]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6 text-white">
              Automation Without the Operational Burden
            </h1>
            <p className="text-xl text-[#d4c5c5] mb-8 leading-relaxed">
              We deliver business process automation as a fully managed service.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "No infrastructure to build or maintain",
                "No internal automation team needed",
                "Fast ROI with predictable costs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#a74646]" />
                  <span className="text-lg text-[#e6dcdc]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 text-lg bg-[#a74646] hover:bg-[#8a3333] text-white transition-all shadow-lg shadow-[#a74646]/20">
                Calculate Your ROI <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#311111] to-transparent rounded-3xl opacity-50 blur-2xl"></div>
            <img 
              src="/__mockup/images/office-bca.png" 
              alt="Premium office" 
              className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
            />
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,30.3,150.3,55.8,227.1,65.7c31.1,4,62.6,6.3,94.29,6.5Z" fill="#faf8f5"></path>
          </svg>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8a3a3]/20 text-[#8a3333] font-medium text-sm mb-6">
              Managed Intelligent Automation
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-[#130707] mb-8">
              "You run the business. We run the automation."
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stop worrying about servers, licenses, and break-fixes. Our fully managed approach means you get the benefits of automation without the headache of managing it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-xl shadow-[#311111]/5 rounded-3xl p-6 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#faf8f5] flex items-center justify-center mb-6 text-[#8a3333]">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-[#130707] mb-3">End-to-End Service</h3>
              <p className="text-slate-600">From initial assessment and development to ongoing maintenance and optimization, we handle everything.</p>
            </Card>
            <Card className="bg-white border-none shadow-xl shadow-[#311111]/5 rounded-3xl p-6 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#faf8f5] flex items-center justify-center mb-6 text-[#8a3333]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-[#130707] mb-3">Enterprise Grade</h3>
              <p className="text-slate-600">Built on robust infrastructure with comprehensive security, compliance, and disaster recovery built in.</p>
            </Card>
            <Card className="bg-white border-none shadow-xl shadow-[#311111]/5 rounded-3xl p-6 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#faf8f5] flex items-center justify-center mb-6 text-[#8a3333]">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-[#130707] mb-3">Continuous Optimization</h3>
              <p className="text-slate-600">We proactively monitor and improve your automated processes to ensure maximum performance and ROI.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Pillars - Dark Section */}
      <section className="relative py-24 bg-[#311111] text-[#faf8f5]">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,30.3,150.3,55.8,227.1,65.7c31.1,4,62.6,6.3,94.29,6.5Z" fill="#faf8f5"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#130707]/40 border-white/10 text-[#faf8f5] rounded-3xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-[#e8a3a3]" />
              </div>
              <h4 className="text-lg font-medium mb-2">Zero Infrastructure</h4>
              <p className="text-[#d4c5c5] text-sm">No servers to provision, no software to install, no licenses to manage.</p>
            </Card>
            <Card className="bg-[#130707]/40 border-white/10 text-[#faf8f5] rounded-3xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#e8a3a3]" />
              </div>
              <h4 className="text-lg font-medium mb-2">Compliance & Reliability</h4>
              <p className="text-[#d4c5c5] text-sm">Bank-grade security and guaranteed SLAs for your critical processes.</p>
            </Card>
            <Card className="bg-[#130707]/40 border-white/10 text-[#faf8f5] rounded-3xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#e8a3a3]" />
              </div>
              <h4 className="text-lg font-medium mb-2">Fast Deployment</h4>
              <p className="text-[#d4c5c5] text-sm">From assessment to production in weeks, not months. Rapid time to value.</p>
            </Card>
            <Card className="bg-[#130707]/40 border-white/10 text-[#faf8f5] rounded-3xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-[#e8a3a3]" />
              </div>
              <h4 className="text-lg font-medium mb-2">Predictable Costs</h4>
              <p className="text-[#d4c5c5] text-sm">Flat monthly fee per process. No hidden costs or surprise upgrades.</p>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,30.3,150.3,55.8,227.1,65.7c31.1,4,62.6,6.3,94.29,6.5Z" fill="#faf8f5"></path>
          </svg>
        </div>
      </section>

      {/* ROI Calculator & Example */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-[#130707] mb-6">Quantify Your Impact</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how much time and money you can save by migrating manual processes to our managed automation platform.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Form */}
            <Card className="bg-white border-none shadow-xl shadow-[#311111]/5 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-[#8a3333]" />
                <h3 className="text-2xl font-medium text-[#130707]">ROI Calculator</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base text-slate-700">Process Complexity</Label>
                  <Select value={complexity} onValueChange={setComplexity}>
                    <SelectTrigger className="rounded-xl border-slate-200 h-12">
                      <SelectValue placeholder="Select complexity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">Small (Simple data entry)</SelectItem>
                      <SelectItem value="M">Medium (Rule-based, multiple apps)</SelectItem>
                      <SelectItem value="L">Large (Complex logic, exception handling)</SelectItem>
                      <SelectItem value="XL">Extra Large (OCR, basic AI)</SelectItem>
                      <SelectItem value="XXL">XXL (Advanced cognitive automation)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base text-slate-700">Manual Hours per Month</Label>
                  <Input 
                    type="number" 
                    value={monthlyHours}
                    onChange={(e) => setMonthlyHours(Number(e.target.value))}
                    className="rounded-xl border-slate-200 h-12" 
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base text-slate-700">Fully Loaded Hourly Cost (€)</Label>
                  <Input 
                    type="number" 
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Number(e.target.value))}
                    className="rounded-xl border-slate-200 h-12" 
                  />
                </div>

                <Button 
                  onClick={calculateROI}
                  className="w-full rounded-full py-6 text-lg bg-[#311111] hover:bg-[#130707] text-white transition-all mt-4"
                >
                  Calculate Results
                </Button>

                {showResults && (
                  <div className="mt-8 p-6 bg-[#faf8f5] rounded-2xl border border-[#e8a3a3]/30 animate-in fade-in slide-in-from-bottom-4">
                    <h4 className="text-lg font-medium text-[#130707] mb-4">Estimated Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Annual Savings</p>
                        <p className="text-2xl font-semibold text-[#8a3333]">€{estimatedSavings.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">ROI</p>
                        <p className="text-2xl font-semibold text-[#8a3333]">~{roiPercent}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Payback Period</p>
                        <p className="text-lg font-medium text-slate-800">{paybackPeriod} months</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">FTE Equivalent</p>
                        <p className="text-lg font-medium text-slate-800">{fteEquivalent} FTE</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Example Comparison */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#311111]/5">
                <h3 className="text-2xl font-medium text-[#130707] mb-6">Real World Example</h3>
                <p className="text-slate-600 mb-8">Medium complexity invoice processing task performed 35 hours per month.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-medium text-[#130707]">Manual Process</p>
                        <p className="text-sm text-slate-500">Inefficient, error-prone</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#130707]">€16,800</p>
                      <p className="text-xs text-slate-500">annual cost</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-slate-300" />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#311111] text-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-[#e8a3a3]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Managed Automation</p>
                        <p className="text-sm text-[#d4c5c5]">€10,000 setup + €5k/yr</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#e8a3a3]">~€12,000</p>
                      <p className="text-xs text-[#d4c5c5]">annual savings</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-sm text-slate-500">Payback Period</p>
                      <p className="font-medium text-[#130707]">~10 months</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Return on Investment</p>
                      <p className="font-medium text-[#130707]">~100% ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#130707] text-[#faf8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#311111]/40 via-[#130707] to-[#130707]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Automation Engagement Model</h2>
            <p className="text-xl text-[#d4c5c5] max-w-2xl mx-auto">Transparent, predictable pricing. No hidden fees or surprise license renewals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="bg-[#1a0c0c] border-white/10 text-white rounded-3xl overflow-hidden flex flex-col">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-medium mb-2">Starter</CardTitle>
                <CardDescription className="text-[#d4c5c5]">Perfect for proving value</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-semibold">€5,000</span>
                  <span className="text-[#d4c5c5]">/yr</span>
                </div>
                <p className="text-sm text-[#d4c5c5] mt-2">+ €10,000 one-time setup</p>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">1 Automated Process</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">Standard SLA</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">Quarterly Review</span></li>
                </ul>
                <Button className="w-full rounded-full bg-white/10 hover:bg-white/20 text-white border-none">Get Started</Button>
              </CardContent>
            </Card>

            {/* Growth (Featured) */}
            <Card className="bg-gradient-to-b from-[#311111] to-[#1a0c0c] border-[#8a3333] border-2 text-white rounded-3xl overflow-hidden flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#8a3333]/20">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e8a3a3] to-transparent"></div>
              <CardHeader className="p-8 pb-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#8a3333] text-white text-xs font-medium mb-4 w-fit">Most Popular</div>
                <CardTitle className="text-2xl font-medium mb-2">Growth</CardTitle>
                <CardDescription className="text-[#e8a3a3]">Scale your automation</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-semibold">€4,500</span>
                  <span className="text-[#d4c5c5]">/yr per process</span>
                </div>
                <p className="text-sm text-[#d4c5c5] mt-2">+ €9,500 setup per process</p>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#e8a3a3]" /><span className="text-sm">2-10 Automated Processes</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#e8a3a3]" /><span className="text-sm">Priority SLA</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#e8a3a3]" /><span className="text-sm">Monthly Review & Optimization</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#e8a3a3]" /><span className="text-sm">Dedicated Success Manager</span></li>
                </ul>
                <Button className="w-full rounded-full bg-[#e8a3a3] hover:bg-white text-[#130707] font-medium border-none">Start Scaling</Button>
              </CardContent>
            </Card>

            {/* Scale */}
            <Card className="bg-[#1a0c0c] border-white/10 text-white rounded-3xl overflow-hidden flex flex-col">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-medium mb-2">Scale</CardTitle>
                <CardDescription className="text-[#d4c5c5]">Enterprise transformation</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-semibold">€4,000</span>
                  <span className="text-[#d4c5c5]">/yr per process</span>
                </div>
                <p className="text-sm text-[#d4c5c5] mt-2">+ €9,000 setup per process</p>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">10+ Automated Processes</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">Custom SLA</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">Continuous Optimization</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8a3333]" /><span className="text-sm">Strategic Roadmap Planning</span></li>
                </ul>
                <Button className="w-full rounded-full bg-white/10 hover:bg-white/20 text-white border-none">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-[#faf8f5] to-white">
        <div className="max-w-3xl mx-auto px-6">
          <Card className="bg-white border-none shadow-2xl shadow-[#311111]/5 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-medium text-[#130707] mb-4">Ready to Automate?</h2>
                <p className="text-slate-600">Get a free, detailed assessment of your automation potential.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-xl border-slate-200 h-12 bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-700">Company</Label>
                    <Input id="company" placeholder="Acme Corp" className="rounded-xl border-slate-200 h-12 bg-slate-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="rounded-xl border-slate-200 h-12 bg-slate-50" />
                </div>
                <Button className="w-full rounded-full py-6 text-lg bg-[#311111] hover:bg-[#130707] text-white mt-4">
                  Request Detailed Assessment
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#130707] border-t border-white/10 py-12 text-center text-[#d4c5c5]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#8a3333] to-[#311111] flex items-center justify-center">
            <span className="font-bold text-xs text-white leading-none">B</span>
          </div>
          <span className="font-medium text-lg text-white">BCA Solutions</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} BCA Solutions. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
