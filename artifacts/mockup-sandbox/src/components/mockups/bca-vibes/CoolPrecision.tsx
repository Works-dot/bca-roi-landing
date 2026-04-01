import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Calculator as CalculatorIcon, 
  Cog, 
  TrendingDown, 
  AlertTriangle 
} from "lucide-react";

export function CoolPrecision() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div 
      className="min-h-screen font-sans antialiased text-[var(--foreground)] bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white"
      style={{
        fontFamily: "'Dosis', sans-serif",
        '--background': '#f8fafc',
        '--foreground': '#0f172a',
        '--primary': '#2563eb',
        '--primary-hover': '#1d4ed8',
        '--primary-foreground': '#ffffff',
        '--muted': '#f1f5f9',
        '--muted-foreground': '#64748b',
        '--card': '#ffffff',
        '--card-foreground': '#0f172a',
        '--border': '#e2e8f0',
        '--accent': '#0ea5e9',
        '--accent-foreground': '#ffffff',
        '--dark-bg': '#020617',
        '--dark-foreground': '#f8fafc',
      } as React.CSSProperties}
    >
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--dark-bg)]/90 backdrop-blur-md border-b border-white/10 h-16 shadow-sm"
            : "bg-transparent border-b border-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="cursor-pointer text-white font-bold text-xl tracking-wider uppercase flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-[4px] flex items-center justify-center">
              <span className="text-white text-lg font-bold leading-none">B</span>
            </div>
            BCA Solutions
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button className="cursor-pointer text-sm font-bold tracking-wider uppercase text-white hover:text-blue-300 transition-colors">Home</button>
            <button className="cursor-pointer text-sm font-bold tracking-wider uppercase text-white hover:text-blue-300 transition-colors">Solutions</button>
            <button className="cursor-pointer text-sm font-bold tracking-wider uppercase text-white hover:text-blue-300 transition-colors">Pricing</button>
          </nav>

          <div className="flex items-center">
            <button
              className="cursor-pointer uppercase tracking-widest font-bold px-8 h-12 rounded-[4px] border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
            >
              Get Assessment
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen bg-[var(--dark-bg)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

        <div className="relative container mx-auto px-4 md:px-8 py-24 lg:py-0 flex items-center min-h-[inherit]">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center w-full">

            <div className="flex flex-col space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] uppercase tracking-wider">
                  AUTOMATION WITHOUT THE OPERATIONAL BURDEN
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-medium">
                  We deliver business process automation as a fully managed service.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "No infrastructure to build or maintain",
                  "No internal automation team needed",
                  "Fast ROI with predictable costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base md:text-lg font-medium text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  className="h-14 px-10 text-base uppercase tracking-widest font-bold rounded-[4px] bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-500"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-4 lg:pt-0">
              <div className="flex-1 lg:flex-none lg:w-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center shadow-lg">
                <Cog className="w-8 h-8 text-slate-400 mb-2 hidden lg:block" />
                <span className="font-bold text-xs lg:text-base tracking-widest text-slate-300 uppercase">Manual Process</span>
              </div>

              <div className="flex items-center justify-center px-1 lg:px-0 lg:py-1.5">
                <ArrowRight className="w-5 h-5 text-slate-500 lg:hidden" />
                <ArrowDown className="w-7 h-7 text-slate-500 hidden lg:block" />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-blue-900/40 backdrop-blur-md border border-blue-500/50 rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <Cog className="w-8 h-8 text-blue-400 mb-2 hidden lg:block animate-[spin_4s_linear_infinite]" />
                <span className="font-bold text-xs lg:text-base tracking-widest text-blue-100 uppercase relative z-10">Automated Process</span>
              </div>

              <div className="flex items-center justify-center px-1 lg:px-0 lg:py-1.5">
                <ArrowRight className="w-5 h-5 text-slate-500 lg:hidden" />
                <ArrowDown className="w-7 h-7 text-slate-500 hidden lg:block" />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center shadow-lg">
                <TrendingDown className="w-8 h-8 text-emerald-400 mb-2 hidden lg:block" />
                <span className="font-bold text-xs lg:text-base tracking-widest text-emerald-300 uppercase leading-tight">Time Saved, Costs Reduced</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ServiceExplanation */}
      <section id="service" className="py-24 bg-[var(--card)] border-b border-[var(--border)] relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 origin-top-right -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[var(--primary)] mb-4 uppercase">
                MANAGED INTELLIGENT AUTOMATION
              </h2>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight border-l-4 border-[var(--primary)] pl-6 md:pl-10 uppercase tracking-wider">
                You run the business. <span className="font-bold text-[var(--primary)]">We run the automation.</span>
              </blockquote>
            </div>
            
            <div className="space-y-8 text-lg text-[var(--muted-foreground)] font-medium">
              <p className="text-2xl text-[var(--foreground)] font-semibold">
                Managed Automation delivers business process automation as a fully managed service.
              </p>
              
              <ul className="space-y-6 mt-8">
                {[
                  "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.",
                  "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.",
                  "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-[4px] bg-[var(--muted)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[var(--primary)] shrink-0 mt-0.5" />
                    <p className="text-[var(--foreground)]">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* ValuePillars */}
      <section className="py-24 bg-[var(--muted)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] uppercase tracking-wider">
                WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layers, title: "Lower Complexity", description: "No platform to manage" },
                { icon: ShieldCheck, title: "Lower Risk", description: "Start small, No commitment" },
                { icon: Clock, title: "Fast Time-to-Value", description: "Live in weeks, not months" },
                { icon: CalculatorIcon, title: "Predictable Cost", description: "Transparent, scalable pricing" }
              ].map((pillar, i) => (
                <div key={i} className="bg-[var(--card)] rounded-[4px] border border-[var(--border)] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-[var(--primary)]/50 group">
                  <div className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-[var(--muted)] group-hover:bg-blue-50 border border-[var(--border)] group-hover:border-blue-100 flex items-center justify-center rounded-[4px] mb-2 transition-colors">
                      <pillar.icon className="w-8 h-8 text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] tracking-wider uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-24 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] uppercase tracking-wider">
                ESTIMATE YOUR AUTOMATION ROI
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 space-y-6 bg-[var(--background)] p-8 border border-[var(--border)] rounded-[4px] shadow-inner relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]" />
                  
                  <div className="space-y-3">
                    <label className="text-base uppercase font-bold tracking-wider text-[var(--foreground)] flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-[var(--primary)] rounded-full"></div>
                      Process Complexity
                    </label>
                    <select className="h-12 w-full bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--muted-foreground)] appearance-none">
                      <option value="">Select size...</option>
                      <option value="S">S - 1 application, 5-10 steps</option>
                      <option value="M">M - 2 applications, 10-20 steps</option>
                      <option value="L">L - 2-3 applications, 20-40 steps</option>
                      <option value="XL">XL - 3-4 applications, 40+ steps</option>
                      <option value="XXL">XXL - Complex, end-to-end processes</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-base uppercase font-bold tracking-wider text-[var(--foreground)] flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-[var(--primary)] rounded-full"></div>
                        Hours per month
                      </label>
                      <input 
                        type="number" 
                        defaultValue="120"
                        className="h-12 w-full bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--foreground)]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-base uppercase font-bold tracking-wider text-[var(--foreground)] flex items-center gap-2">
                        <div className="w-1.5 h-4 bg-[var(--primary)] rounded-full"></div>
                        EUR / hour
                      </label>
                      <input 
                        type="number" 
                        defaultValue="35"
                        className="h-12 w-full bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--foreground)]"
                      />
                    </div>
                  </div>

                  <button 
                    disabled
                    className="w-full h-14 text-lg font-bold tracking-widest uppercase rounded-[4px] mt-4 bg-[var(--primary)] text-white opacity-90 cursor-not-allowed border border-[var(--primary-hover)] shadow-sm"
                  >
                    Calculate
                  </button>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="border border-[var(--border)] rounded-[4px] flex-1 flex flex-col justify-center bg-[var(--muted)] relative overflow-hidden min-h-[420px] shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-bl-full border-l border-b border-[var(--primary)]/10" />
                  <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10 h-full items-center justify-center">
                    
                    <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
                      <div className="w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                        <CalculatorIcon className="w-10 h-10 text-[var(--muted-foreground)]" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-[var(--foreground)] uppercase tracking-wider">Your ROI Estimate</h3>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-[250px]">
                          Enter your process details and click Calculate to see your estimated automation savings.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mt-4 leading-relaxed border-l-2 border-[var(--border)] pl-3">
                  Indicative calculation based on standard managed automation pricing and an assumed 90% automation ratio. Final pricing depends on process complexity and business environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ExampleROI */}
      <section className="py-24 bg-[var(--dark-bg)] text-[var(--dark-foreground)] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white">
                TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-slate-700 p-8 flex flex-col gap-6 relative rounded-[4px] shadow-lg">
                <h3 className="text-xl font-bold text-slate-300 tracking-widest uppercase flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                  Manual process
                </h3>
                <ul className="space-y-4 text-lg font-medium text-slate-400">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>~2 hours/day</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>€40/hour</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-slate-200 text-xl font-mono">€16,800 annual cost</span>
                  </li>
                </ul>
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-slate-800 border border-slate-600 w-12 h-12 rounded-full items-center justify-center shadow-lg">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                </div>
              </div>

              <div className="bg-blue-950/40 border border-blue-800/50 p-8 flex flex-col gap-6 relative rounded-[4px] shadow-[0_0_20px_rgba(37,99,235,0.05)] backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-400 tracking-widest uppercase flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  Automation
                </h3>
                <ul className="space-y-4 text-lg font-medium text-blue-200/70">
                  <li className="flex justify-between border-b border-blue-900/50 pb-2">
                    <span>€10,000 setup</span>
                  </li>
                  <li className="flex justify-between border-b border-blue-900/50 pb-2">
                    <span>€5,000 annual service</span>
                  </li>
                </ul>
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-blue-900 border border-blue-700 w-12 h-12 rounded-full items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(37,99,235,0.2)] rounded-[4px] border border-blue-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
                <h3 className="text-xl font-bold tracking-widest uppercase relative z-10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  Business impact
                </h3>
                <ul className="space-y-4 text-lg font-medium relative z-10">
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~€12,000 savings</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~10-month payback</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-3xl text-emerald-300">~100% ROI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center border-t border-slate-800 pt-10">
              <p className="text-3xl md:text-4xl font-light italic text-slate-300 uppercase tracking-wider">
                "Small processes. <span className="font-bold text-blue-400 not-italic">Big impact.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[var(--background)] relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] uppercase tracking-wider">
                AUTOMATION ENGAGEMENT MODEL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-[var(--border)] shadow-sm rounded-[4px] bg-[var(--card)] hover:border-[var(--primary)]/30 transition-colors">
                <div className="text-center pb-6 pt-8 border-b border-[var(--border)] bg-[var(--muted)]">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[var(--foreground)]">Starter</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2">1 process</p>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider">Setup</span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€10,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-[var(--primary)] shadow-[0_10px_30px_rgba(37,99,235,0.1)] rounded-[4px] bg-[var(--card)] relative transform md:-translate-y-4 flex flex-col">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[var(--primary)]"></div>
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Popular</div>
                <div className="text-center pb-6 pt-8 border-b border-[var(--border)] bg-blue-50/50">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[var(--primary)]">Growth</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2">2–10 processes</p>
                </div>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider">Setup</span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€9,500</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></div>
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€4,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] shadow-sm rounded-[4px] bg-[var(--card)] hover:border-[var(--primary)]/30 transition-colors">
                <div className="text-center pb-6 pt-8 border-b border-[var(--border)] bg-[var(--muted)]">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[var(--foreground)]">Scale</h3>
                  <p className="text-[var(--muted-foreground)] font-medium mt-2">10+ processes</p>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider">Setup</span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€9,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--foreground)] uppercase text-sm tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                        Annual
                      </span>
                      <span className="text-2xl font-bold text-[var(--foreground)] font-mono">€4,000</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12 bg-[var(--muted)]/50 py-4 rounded-[4px] border border-[var(--border)] inline-block px-8 mx-auto flex w-max">
              <p className="text-[var(--muted-foreground)] font-medium text-sm uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[var(--primary)]" />
                * Setup fee depends on process complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FinalCTA */}
      <section id="assessment" className="py-24 bg-[var(--dark-bg)] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight tracking-wider">
                START WITH ONE PROCESS
              </h2>
              <p className="text-xl md:text-2xl font-medium text-slate-300">
                Validate ROI quickly and scale automation.
              </p>
              
              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="font-bold font-mono">01</span>
                  </div>
                  <span className="text-lg uppercase tracking-wider font-bold">Discover</span>
                </div>
                <div className="w-0.5 h-6 bg-slate-700 ml-5"></div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="font-bold font-mono">02</span>
                  </div>
                  <span className="text-lg uppercase tracking-wider font-bold">Assess</span>
                </div>
                <div className="w-0.5 h-6 bg-slate-700 ml-5"></div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <span className="font-bold font-mono">03</span>
                  </div>
                  <span className="text-lg uppercase tracking-wider font-bold text-white">Automate</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-slate-900 p-8 border border-slate-700 shadow-2xl rounded-[4px] relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-slate-300 font-bold uppercase tracking-wider text-sm">Name</label>
                  <input 
                    placeholder="John Doe" 
                    className="w-full h-12 rounded-[4px] border border-slate-700 bg-slate-800/50 text-white px-3 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-slate-300 font-bold uppercase tracking-wider text-sm">Email</label>
                  <input 
                    placeholder="john@company.com" 
                    type="email" 
                    className="w-full h-12 rounded-[4px] border border-slate-700 bg-slate-800/50 text-white px-3 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-slate-300 font-bold uppercase tracking-wider text-sm">Company</label>
                  <input 
                    placeholder="Acme Corp" 
                    className="w-full h-12 rounded-[4px] border border-slate-700 bg-slate-800/50 text-white px-3 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-colors" 
                  />
                </div>
                
                <button 
                  type="button" 
                  className="w-full h-14 text-base font-bold uppercase tracking-widest rounded-[4px] mt-4 bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)] border border-blue-500"
                >
                  Request Detailed Assessment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2 text-slate-300">
            <div className="w-6 h-6 bg-slate-800 border border-slate-700 rounded-[2px] flex items-center justify-center">
              <span className="text-slate-400 text-sm font-bold leading-none">B</span>
            </div>
            BCA Solutions
          </div>
          <div className="text-slate-500 font-medium text-sm tracking-wider uppercase">
            &copy; {new Date().getFullYear()} BCA Solutions. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
