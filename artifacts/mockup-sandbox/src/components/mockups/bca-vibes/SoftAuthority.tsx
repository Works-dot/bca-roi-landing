import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowDown, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Calculator as CalculatorIcon, 
  Cog, 
  TrendingDown, 
  AlertTriangle 
} from "lucide-react";

export function SoftAuthority() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div 
      className="min-h-screen" 
      style={{
        fontFamily: "'Dosis', sans-serif",
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        "--background": "#FDFBF7", // Extremely light, warm off-white
        "--foreground": "#2B2A29", // Dark charcoal, soft black
        "--primary": "#7A4950", // Softened burgundy / maroon
        "--primary-foreground": "#FFFFFF",
        "--muted": "#F4F1EA", // Slightly darker warm white for alternating sections
        "--muted-foreground": "#6E6B68", // Muted charcoal
        "--card": "#FFFFFF",
        "--card-foreground": "#2B2A29",
        "--border": "#EBE8E1", // Hair-thin subtle borders
        "--input": "#EBE8E1",
      } as React.CSSProperties}
    >
      {/* NAVIGATION */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EBE8E1] h-16"
            : "bg-transparent border-b border-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="cursor-pointer font-bold tracking-widest uppercase text-lg text-[var(--foreground)]">
            BCA Solutions
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <button className="cursor-pointer text-sm font-semibold tracking-[0.1em] uppercase text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Home</button>
            <button className="cursor-pointer text-sm font-semibold tracking-[0.1em] uppercase text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Solutions</button>
            <button className="cursor-pointer text-sm font-semibold tracking-[0.1em] uppercase text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Pricing</button>
          </nav>

          <div className="flex items-center">
            <button
              className="cursor-pointer uppercase tracking-[0.1em] font-bold px-8 h-12 rounded-[4px] border border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white transition-colors text-sm"
            >
              Get Assessment
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen bg-[var(--background)]">
        {/* Soft elegant background area */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] to-[#F4F1EA]" />
        
        <div className="relative container mx-auto px-4 md:px-8 py-32 lg:py-0 flex items-center min-h-[inherit]">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

            <div className="flex flex-col space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--foreground)] leading-[1.1] uppercase tracking-[0.1em]">
                  AUTOMATION WITHOUT THE OPERATIONAL BURDEN
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-[var(--muted-foreground)] font-medium tracking-wide">
                  We deliver business process automation as a fully managed service.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "No infrastructure to build or maintain",
                  "No internal automation team needed",
                  "Fast ROI with predictable costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-lg font-medium text-[var(--foreground)]">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0" strokeWidth={1.5} />
                    <span className="tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button
                  className="h-14 px-12 text-base uppercase tracking-[0.1em] font-bold rounded-[4px] bg-[var(--primary)] text-white hover:bg-[#683e44] transition-colors border border-transparent"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-8 lg:pt-0">
              <div className="flex-1 lg:flex-none lg:w-full bg-[var(--card)] border border-[var(--border)] rounded-[4px] px-3 py-4 lg:px-8 lg:py-8 text-center flex flex-col items-center shadow-sm">
                <Cog className="w-8 h-8 text-[var(--muted-foreground)] mb-3 hidden lg:block" strokeWidth={1.5} />
                <span className="font-bold text-xs lg:text-sm tracking-[0.1em] text-[var(--muted-foreground)] uppercase">Manual Process</span>
              </div>

              <div className="flex items-center justify-center px-2 lg:px-0 lg:py-4">
                <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] lg:hidden" strokeWidth={1.5} />
                <ArrowDown className="w-6 h-6 text-[var(--muted-foreground)] hidden lg:block" strokeWidth={1.5} />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-[var(--primary)] border border-[var(--primary)] rounded-[4px] px-3 py-4 lg:px-8 lg:py-8 text-center flex flex-col items-center shadow-md">
                <Cog className="w-8 h-8 text-white mb-3 hidden lg:block animate-[spin_6s_linear_infinite]" strokeWidth={1.5} />
                <span className="font-bold text-xs lg:text-sm tracking-[0.1em] text-white uppercase">Automated Process</span>
              </div>

              <div className="flex items-center justify-center px-2 lg:px-0 lg:py-4">
                <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] lg:hidden" strokeWidth={1.5} />
                <ArrowDown className="w-6 h-6 text-[var(--muted-foreground)] hidden lg:block" strokeWidth={1.5} />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-[var(--muted)] border border-[var(--border)] rounded-[4px] px-3 py-4 lg:px-8 lg:py-8 text-center flex flex-col items-center">
                <TrendingDown className="w-8 h-8 text-[var(--foreground)] mb-3 hidden lg:block" strokeWidth={1.5} />
                <span className="font-bold text-xs lg:text-sm tracking-[0.1em] text-[var(--foreground)] uppercase leading-tight">Time Saved, Costs Reduced</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE EXPLANATION */}
      <section id="service" className="py-32 bg-[var(--muted)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-20">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--primary)] uppercase mb-6">
                MANAGED INTELLIGENT AUTOMATION
              </h2>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight border-l border-[var(--primary)] pl-8 md:pl-12 tracking-wide">
                You run the business. <span className="font-bold text-[var(--primary)]">We run the automation.</span>
              </blockquote>
            </div>
            
            <div className="space-y-10 text-lg text-[var(--muted-foreground)] font-medium tracking-wide">
              <p className="text-2xl text-[var(--foreground)] font-semibold tracking-wide">
                Managed Automation delivers business process automation as a fully managed service.
              </p>
              
              <ul className="space-y-8 mt-12">
                {[
                  "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.",
                  "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.",
                  "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business."
                ].map((text, i) => (
                  <li key={i} className="flex gap-6">
                    <CheckCircle2 className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" strokeWidth={1.5} />
                    <p className="leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="py-32 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] uppercase tracking-[0.1em]">
                WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Layers, title: "Lower Complexity", description: "No platform to manage" },
                { icon: ShieldCheck, title: "Lower Risk", description: "Start small, No commitment" },
                { icon: Clock, title: "Fast Time-to-Value", description: "Live in weeks, not months" },
                { icon: CalculatorIcon, title: "Predictable Cost", description: "Transparent, scalable pricing" },
              ].map((pillar, i) => (
                <div key={i} className="border border-[var(--border)] rounded-[4px] bg-[var(--card)] p-10 flex flex-col items-center text-center space-y-6 hover:border-[var(--primary)] transition-colors">
                  <div className="w-16 h-16 bg-[var(--muted)] flex items-center justify-center rounded-full mb-2">
                    <pillar.icon className="w-8 h-8 text-[var(--primary)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] uppercase tracking-[0.1em]">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] font-medium tracking-wide leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-32 bg-[var(--muted)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] uppercase tracking-[0.1em]">
                ESTIMATE YOUR AUTOMATION ROI
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 space-y-8 bg-[var(--background)] p-10 border border-[var(--border)] rounded-[4px] shadow-sm">
                  <div className="space-y-4">
                    <label className="block text-sm uppercase font-bold tracking-[0.1em] text-[var(--foreground)]">Process Complexity</label>
                    <div className="relative border border-[var(--border)] rounded-[4px] bg-[var(--card)]">
                      <select className="w-full h-14 px-4 bg-transparent text-lg tracking-wide appearance-none outline-none focus:ring-1 focus:ring-[var(--primary)]">
                        <option value="">Select size...</option>
                        <option value="S">S - 1 application, 5-10 steps</option>
                        <option value="M">M - 2 applications, 10-20 steps</option>
                        <option value="L">L - 2-3 applications, 20-40 steps</option>
                        <option value="XL">XL - 3-4 applications, 40+ steps</option>
                        <option value="XXL">XXL - Complex, end-to-end processes</option>
                      </select>
                      <ArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)] pointer-events-none" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block text-sm uppercase font-bold tracking-[0.1em] text-[var(--foreground)]">Hours per month</label>
                      <input 
                        type="number" 
                        placeholder="120"
                        className="w-full h-14 px-4 border border-[var(--border)] bg-[var(--card)] rounded-[4px] text-lg tracking-wide outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm uppercase font-bold tracking-[0.1em] text-[var(--foreground)]">EUR / hour</label>
                      <input 
                        type="number" 
                        placeholder="35"
                        className="w-full h-14 px-4 border border-[var(--border)] bg-[var(--card)] rounded-[4px] text-lg tracking-wide outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <button 
                    className="w-full h-14 text-sm font-bold tracking-[0.1em] uppercase rounded-[4px] mt-6 bg-[var(--foreground)] text-[var(--background)] hover:bg-[#1A1A1A] transition-colors border border-transparent"
                  >
                    Calculate
                  </button>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="border border-[var(--border)] rounded-[4px] shadow-sm flex-1 flex flex-col justify-center bg-[var(--card)] relative overflow-hidden min-h-[420px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--muted)] opacity-50 rounded-bl-full" />
                  <div className="p-10 flex flex-col items-center justify-center text-center gap-6 relative z-10">
                    <CalculatorIcon className="w-10 h-10 text-[var(--muted-foreground)] opacity-50" strokeWidth={1} />
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-[var(--foreground)] uppercase tracking-[0.1em]">Your ROI Estimate</h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed tracking-wide">
                        Enter your process details and click Calculate to see your estimated automation savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE ROI */}
      <section className="py-32 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.1em] text-[var(--background)]">
                TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-[var(--background)]/20 p-10 flex flex-col gap-8 relative rounded-[4px]">
                <h3 className="text-sm font-bold text-[var(--muted)] tracking-[0.1em] uppercase">Manual process</h3>
                <ul className="space-y-6 text-lg font-medium text-[var(--background)]/70 tracking-wide">
                  <li className="flex justify-between border-b border-[var(--background)]/10 pb-4">
                    <span className="text-[var(--background)]">~2 hours/day</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--background)]/10 pb-4">
                    <span className="text-[var(--background)]">€40/hour</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-[var(--background)] text-xl tracking-wider">€16,800 annual cost</span>
                  </li>
                </ul>
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[var(--foreground)] w-12 h-12 rounded-full items-center justify-center border border-[var(--background)]/20">
                  <ArrowRight className="w-5 h-5 text-[var(--background)]" strokeWidth={1.5} />
                </div>
              </div>

              <div className="border border-[var(--primary)] bg-[var(--primary)]/10 p-10 flex flex-col gap-8 relative rounded-[4px]">
                <h3 className="text-sm font-bold text-[var(--primary)] tracking-[0.1em] uppercase">Automation</h3>
                <ul className="space-y-6 text-lg font-medium text-[var(--background)]/70 tracking-wide">
                  <li className="flex justify-between border-b border-[var(--background)]/10 pb-4">
                    <span className="text-[var(--background)]">€10,000 setup</span>
                  </li>
                  <li className="flex justify-between border-b border-[var(--background)]/10 pb-4">
                    <span className="text-[var(--background)]">€5,000 annual service</span>
                  </li>
                </ul>
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[var(--foreground)] w-12 h-12 rounded-full items-center justify-center border border-[var(--primary)]">
                  <ArrowRight className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.5} />
                </div>
              </div>

              <div className="bg-[var(--primary)] text-white p-10 flex flex-col gap-8 shadow-sm rounded-[4px]">
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase">Business impact</h3>
                <ul className="space-y-6 text-lg font-medium tracking-wide">
                  <li className="flex justify-between border-b border-white/20 pb-4">
                    <span className="font-bold text-white">~€12,000 savings</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-4">
                    <span className="font-bold text-white">~10-month payback</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-2xl text-white tracking-wider">~100% ROI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-24 text-center">
              <p className="text-3xl md:text-4xl font-light italic text-[var(--background)] tracking-wide">
                "Small processes. <span className="font-bold text-[var(--primary)] not-italic uppercase tracking-[0.1em] text-2xl ml-2">Big impact.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] uppercase tracking-[0.1em]">
                AUTOMATION ENGAGEMENT MODEL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-[var(--border)] rounded-[4px] bg-[var(--card)] flex flex-col">
                <div className="text-center p-8 border-b border-[var(--border)] bg-[var(--muted)]/50">
                  <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-[var(--foreground)]">Starter</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2 tracking-wide">1 process</p>
                </div>
                <div className="p-10 flex flex-col gap-6 flex-1">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-6">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Setup</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€10,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Annual</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--primary)] rounded-[4px] bg-[var(--card)] flex flex-col relative shadow-md md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1 bg-[var(--primary)] rounded-t-[4px]"></div>
                <div className="text-center p-8 border-b border-[var(--border)] bg-[var(--primary)]/5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-[var(--primary)]">Growth</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2 tracking-wide">2–10 processes</p>
                </div>
                <div className="p-10 flex flex-col gap-6 flex-1">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-6">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Setup</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€9,500</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Annual</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€4,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] rounded-[4px] bg-[var(--card)] flex flex-col">
                <div className="text-center p-8 border-b border-[var(--border)] bg-[var(--muted)]/50">
                  <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-[var(--foreground)]">Scale</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2 tracking-wide">10+ processes</p>
                </div>
                <div className="p-10 flex flex-col gap-6 flex-1">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-6">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Setup</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€9,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--muted-foreground)] uppercase text-xs tracking-[0.1em]">Annual</span>
                      <span className="text-xl font-bold text-[var(--foreground)] tracking-wide">€4,000</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-16">
              <p className="text-[var(--muted-foreground)] font-medium text-sm tracking-wide">
                * Setup fee depends on process complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="assessment" className="py-32 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-[0.1em] text-[var(--background)]">
                START WITH ONE PROCESS
              </h2>
              <p className="text-xl md:text-2xl font-medium text-[var(--muted)] tracking-wide">
                Validate ROI quickly and scale automation.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-[var(--card)] p-10 border border-[var(--border)] rounded-[4px] shadow-sm">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-[var(--foreground)] font-bold uppercase tracking-[0.1em] text-xs">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-14 px-4 rounded-[4px] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] tracking-wide outline-none focus:border-[var(--primary)] transition-colors" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[var(--foreground)] font-bold uppercase tracking-[0.1em] text-xs">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full h-14 px-4 rounded-[4px] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] tracking-wide outline-none focus:border-[var(--primary)] transition-colors" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[var(--foreground)] font-bold uppercase tracking-[0.1em] text-xs">Company</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp" 
                    className="w-full h-14 px-4 rounded-[4px] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] tracking-wide outline-none focus:border-[var(--primary)] transition-colors" 
                  />
                </div>
                
                <button 
                  type="button" 
                  className="w-full h-14 text-sm font-bold uppercase tracking-[0.1em] rounded-[4px] mt-4 bg-[var(--primary)] hover:bg-[#683e44] text-white transition-colors border border-transparent"
                >
                  Request Detailed Assessment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-[var(--muted-foreground)] py-16 border-t border-[#2B2A29]">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-[0.2em] uppercase text-[var(--background)]">
            BCA Solutions
          </div>
          <div className="text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} BCA Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
