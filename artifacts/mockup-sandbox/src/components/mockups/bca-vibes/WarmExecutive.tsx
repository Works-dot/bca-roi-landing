import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Calculator, 
  Cog, 
  TrendingDown, 
  AlertTriangle 
} from "lucide-react";

export function WarmExecutive() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div 
      className="min-h-screen font-sans"
      style={{ 
        fontFamily: "'Dosis', sans-serif",
        '--bg': '#fcf9f2',
        '--fg': '#2b2320',
        '--primary': '#731517',
        '--primary-fg': '#ffffff',
        '--accent': '#c79c4a',
        '--accent-fg': '#1a1412',
        '--muted': '#f3eee6',
        '--muted-fg': '#7a6a61',
        '--border': '#e6dcce',
        '--card': '#ffffff',
        '--card-fg': '#2b2320',
        backgroundColor: 'var(--bg)',
        color: 'var(--fg)',
      } as React.CSSProperties}
    >
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#2b2320]/95 backdrop-blur-md border-b border-white/10 h-16 shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-[#2b2320]/80 to-transparent border-b border-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 rounded-[4px] bg-[var(--primary)] flex items-center justify-center text-[var(--primary-fg)] font-bold text-xl tracking-[0.1em]">
              BCA
            </div>
            <span className="font-bold text-white tracking-[0.1em] uppercase text-xl">Solutions</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button className="cursor-pointer text-sm font-bold tracking-[0.1em] uppercase text-white hover:text-[var(--accent)] transition-colors">Home</button>
            <button className="cursor-pointer text-sm font-bold tracking-[0.1em] uppercase text-white hover:text-[var(--accent)] transition-colors">Solutions</button>
            <button className="cursor-pointer text-sm font-bold tracking-[0.1em] uppercase text-white hover:text-[var(--accent)] transition-colors">Pricing</button>
          </nav>

          <div className="flex items-center">
            <button
              className="cursor-pointer uppercase tracking-[0.1em] font-bold px-8 h-12 rounded-[4px] border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] transition-all duration-300 text-sm shadow-[0_0_15px_rgba(199,156,74,0.3)]"
            >
              Get Assessment
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }}
        />
        {/* Warm mahogany/amber gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b2320] via-[#3a2922]/90 to-[#4d2f22]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2320]/80 to-transparent" />

        <div className="relative container mx-auto px-4 md:px-8 py-24 lg:py-0 flex items-center min-h-[inherit] z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center w-full">

            <div className="flex flex-col space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] uppercase tracking-[0.1em]">
                  AUTOMATION WITHOUT THE OPERATIONAL BURDEN
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-[var(--accent)] font-medium">
                  We deliver business process automation as a fully managed service.
                </p>
              </div>

              <ul className="space-y-4">
                {["No infrastructure to build or maintain", "No internal automation team needed", "Fast ROI with predictable costs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-lg font-medium text-white/90">
                    <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <button
                  className="h-14 px-10 text-base uppercase tracking-[0.1em] font-bold rounded-[4px] bg-[var(--primary)] text-[var(--primary-fg)] shadow-[0_8px_30px_rgba(115,21,23,0.5)] hover:bg-[#8a1a1c] transition-all border border-[#942022]"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col items-center justify-center gap-0 w-full lg:max-w-[550px] lg:ml-auto pt-4 lg:pt-0">
              <div className="flex-1 lg:flex-none lg:w-full bg-[#3a2922]/80 backdrop-blur-md border border-[var(--accent)]/30 rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <Cog className="w-8 h-8 text-[var(--accent)] mb-2 hidden lg:block" />
                <span className="font-bold text-xs lg:text-base tracking-[0.1em] text-white uppercase">Manual Process</span>
              </div>

              <div className="flex items-center justify-center px-1 lg:px-0 lg:py-2">
                <ArrowRight className="w-5 h-5 text-[var(--accent)] lg:hidden" />
                <ArrowDown className="w-7 h-7 text-[var(--accent)] hidden lg:block" />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-[var(--primary)]/90 backdrop-blur-md border border-[var(--accent)] rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center shadow-[0_10px_40px_rgba(115,21,23,0.6)] flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                <Cog className="w-8 h-8 text-[var(--accent)] mb-2 hidden lg:block" />
                <span className="font-bold text-xs lg:text-base tracking-[0.1em] text-white uppercase relative z-10">Automated Process</span>
              </div>

              <div className="flex items-center justify-center px-1 lg:px-0 lg:py-2">
                <ArrowRight className="w-5 h-5 text-[var(--accent)] lg:hidden" />
                <ArrowDown className="w-7 h-7 text-[var(--accent)] hidden lg:block" />
              </div>

              <div className="flex-1 lg:flex-none lg:w-full bg-[#3a2922]/80 backdrop-blur-md border border-[var(--accent)]/30 rounded-[4px] px-3 py-3 lg:px-6 lg:py-7 text-center flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <TrendingDown className="w-8 h-8 text-[var(--accent)] mb-2 hidden lg:block" />
                <span className="font-bold text-xs lg:text-base tracking-[0.1em] text-[var(--accent)] uppercase leading-tight">Time Saved, Costs Reduced</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ServiceExplanation */}
      <section id="service" className="py-24 bg-[var(--card)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[var(--primary)] mb-4 uppercase">
                MANAGED INTELLIGENT AUTOMATION
              </h2>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--fg)] leading-tight border-l-4 border-[var(--primary)] pl-6 md:pl-10">
                You run the business. <span className="font-bold text-[var(--primary)]">We run the automation.</span>
              </blockquote>
            </div>
            
            <div className="space-y-8 text-lg text-[var(--muted-fg)] font-medium">
              <p className="text-2xl text-[var(--fg)] font-semibold">
                Managed Automation delivers business process automation as a fully managed service.
              </p>
              
              <ul className="space-y-6 mt-8">
                {[
                  "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.",
                  "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.",
                  "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" />
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* ValuePillars */}
      <section className="py-24 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] uppercase tracking-[0.1em]">
                WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layers, title: "Lower Complexity", description: "No platform to manage" },
                { icon: ShieldCheck, title: "Lower Risk", description: "Start small, No commitment" },
                { icon: Clock, title: "Fast Time-to-Value", description: "Live in weeks, not months" },
                { icon: Calculator, title: "Predictable Cost", description: "Transparent, scalable pricing" }
              ].map((pillar, i) => (
                <div key={i} className="bg-[var(--card)] rounded-[4px] p-8 flex flex-col items-center text-center space-y-4 shadow-[0_8px_24px_rgba(43,35,32,0.05)] border border-[var(--border)] transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 bg-[#f7f3ec] border border-[var(--border)] flex items-center justify-center rounded-[4px] mb-2 shadow-inner">
                    <pillar.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--fg)] tracking-[0.1em] uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--muted-fg)] font-medium">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-24 bg-[var(--card)] relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] uppercase tracking-[0.1em]">
                ESTIMATE YOUR AUTOMATION ROI
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 space-y-6 bg-[var(--muted)] p-8 border border-[var(--border)] rounded-[4px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="space-y-3">
                    <label className="text-base uppercase font-bold tracking-[0.1em] text-[var(--fg)]">Process Complexity</label>
                    <select className="w-full h-12 bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--muted-fg)] shadow-sm appearance-none">
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
                      <label className="text-base uppercase font-bold tracking-[0.1em] text-[var(--fg)]">Hours per month</label>
                      <input type="number" defaultValue="120" className="w-full h-12 bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--fg)] shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-base uppercase font-bold tracking-[0.1em] text-[var(--fg)]">EUR / hour</label>
                      <input type="number" defaultValue="35" className="w-full h-12 bg-[var(--card)] border border-[var(--border)] rounded-[4px] text-lg px-3 text-[var(--fg)] shadow-sm" />
                    </div>
                  </div>

                  <button 
                    className="w-full h-14 text-lg font-bold tracking-[0.1em] uppercase rounded-[4px] mt-4 bg-[#2b2320] text-white hover:bg-[#1a1513] transition-colors shadow-[0_4px_15px_rgba(43,35,32,0.3)] border border-[#1a1513]"
                  >
                    Calculate
                  </button>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="border-t-4 border-[var(--primary)] rounded-[4px] shadow-[0_15px_40px_rgba(43,35,32,0.1)] flex-1 flex flex-col justify-center bg-[var(--card)] relative overflow-hidden min-h-[420px]">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/5 rounded-bl-full" />
                  <div className="p-8 md:p-10 flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center gap-6 py-4">
                      <Calculator className="w-12 h-12 text-[var(--primary)]/40" />
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-[var(--fg)] uppercase tracking-[0.1em]">Your ROI Estimate</h3>
                        <p className="text-sm text-[var(--muted-fg)] leading-relaxed">
                          Enter your process details and click Calculate to see your estimated automation savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ExampleROI */}
      <section className="py-24 bg-[#2b2320] text-[#fcf9f2] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2320] to-[#1a1513]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.1em] text-[var(--accent)]">
                TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/10 bg-[#3a2922]/50 p-8 flex flex-col gap-6 relative rounded-[4px] shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[#fcf9f2] tracking-[0.1em] uppercase">Manual process</h3>
                <ul className="space-y-4 text-lg font-medium text-white/70">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#fcf9f2]">~2 hours/day</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#fcf9f2]">€40/hour</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-white text-xl">€16,800 annual cost</span>
                  </li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#2b2320] p-1 rounded-full border border-white/10 shadow-xl">
                  <ArrowRight className="w-8 h-8 text-[var(--accent)]" />
                </div>
              </div>

              <div className="border border-[var(--primary)] bg-[var(--primary)]/20 p-8 flex flex-col gap-6 relative rounded-[4px] shadow-[0_0_30px_rgba(115,21,23,0.3)] backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[var(--accent)] tracking-[0.1em] uppercase">Automation</h3>
                <ul className="space-y-4 text-lg font-medium text-white/70">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#fcf9f2]">€10,000 setup</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#fcf9f2]">€5,000 annual service</span>
                  </li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#2b2320] p-1 rounded-full border border-[var(--primary)] shadow-xl">
                  <ArrowRight className="w-8 h-8 text-[var(--accent)]" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[var(--primary)] to-[#4d0e0f] text-white p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[4px] border border-[#942022]">
                <h3 className="text-xl font-bold tracking-[0.1em] uppercase text-[var(--accent)]">Business impact</h3>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~€12,000 savings</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-bold">~10-month payback</span>
                  </li>
                  <li className="flex justify-between font-bold pt-2">
                    <span className="text-2xl text-white">~100% ROI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-3xl md:text-4xl font-light italic text-white/80">
                "Small processes. <span className="font-bold text-[var(--accent)] not-italic">Big impact.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[var(--muted)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] uppercase tracking-[0.1em]">
                AUTOMATION ENGAGEMENT MODEL
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-[var(--border)] shadow-[0_8px_24px_rgba(43,35,32,0.05)] rounded-[4px] bg-[var(--card)]">
                <div className="text-center p-6 border-b border-[var(--border)] bg-[#f7f3ec]">
                  <h3 className="text-2xl font-bold uppercase tracking-[0.1em] text-[var(--fg)]">Starter</h3>
                  <p className="text-[var(--muted-fg)] font-medium mt-2">1 process</p>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Setup</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€10,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Annual</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€5,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-[var(--primary)] shadow-[0_20px_40px_rgba(115,21,23,0.15)] rounded-[4px] bg-[var(--card)] relative transform md:-translate-y-4">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[var(--primary)]"></div>
                <div className="text-center p-6 border-b border-[var(--border)] bg-[var(--primary)]/5">
                  <h3 className="text-2xl font-bold uppercase tracking-[0.1em] text-[var(--primary)]">Growth</h3>
                  <p className="text-[var(--muted-fg)] font-medium mt-2">2–10 processes</p>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Setup</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€9,500</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Annual</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€4,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] shadow-[0_8px_24px_rgba(43,35,32,0.05)] rounded-[4px] bg-[var(--card)]">
                <div className="text-center p-6 border-b border-[var(--border)] bg-[#f7f3ec]">
                  <h3 className="text-2xl font-bold uppercase tracking-[0.1em] text-[var(--fg)]">Scale</h3>
                  <p className="text-[var(--muted-fg)] font-medium mt-2">10+ processes</p>
                </div>
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[var(--border)] pb-4">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Setup</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€9,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-bold text-[var(--fg)] uppercase text-sm tracking-[0.1em]">Annual</span>
                      <span className="text-2xl font-bold text-[var(--primary)]">€4,000</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <p className="text-[var(--muted-fg)] font-medium text-lg italic">
                * Setup fee depends on process complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FinalCTA */}
      <section id="assessment" className="py-24 bg-[var(--primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#731517] via-[#5c1112] to-[#3d0b0c]"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight tracking-[0.1em] text-[var(--accent)] drop-shadow-md">
                START WITH ONE PROCESS
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                Validate ROI quickly and scale automation.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-[var(--card)] p-8 border-t-4 border-[var(--accent)] shadow-[0_25px_50px_rgba(0,0,0,0.5)] rounded-[4px]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[var(--fg)] font-bold uppercase tracking-[0.1em] text-sm">Name</label>
                  <input 
                    placeholder="John Doe" 
                    className="w-full h-12 rounded-[4px] border border-[var(--border)] bg-[#fcf9f2] text-[var(--fg)] px-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[var(--fg)] font-bold uppercase tracking-[0.1em] text-sm">Email</label>
                  <input 
                    placeholder="john@company.com" 
                    type="email" 
                    className="w-full h-12 rounded-[4px] border border-[var(--border)] bg-[#fcf9f2] text-[var(--fg)] px-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[var(--fg)] font-bold uppercase tracking-[0.1em] text-sm">Company</label>
                  <input 
                    placeholder="Acme Corp" 
                    className="w-full h-12 rounded-[4px] border border-[var(--border)] bg-[#fcf9f2] text-[var(--fg)] px-3 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]" 
                  />
                </div>
                
                <button 
                  type="button" 
                  className="w-full h-14 text-base font-bold uppercase tracking-[0.1em] rounded-[4px] mt-4 bg-[var(--primary)] hover:bg-[#5c1112] text-white transition-colors shadow-[0_8px_20px_rgba(115,21,23,0.3)] border border-[#4d0e0f]"
                >
                  Request Detailed Assessment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1513] text-[#fcf9f2] py-12 border-t border-black/20 relative">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-2xl font-bold tracking-[0.1em] uppercase flex items-center gap-3">
            <div className="w-6 h-6 rounded-[2px] bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xs tracking-wider">
              BCA
            </div>
            <span className="text-white/90">BCA Solutions</span>
          </div>
          <div className="text-white/50 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} BCA Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
