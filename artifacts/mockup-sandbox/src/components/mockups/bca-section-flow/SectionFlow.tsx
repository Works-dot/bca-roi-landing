import { CheckCircle2, Layers, ShieldCheck, Clock, Calculator, ArrowRight, ArrowDown, Facebook, Linkedin, Instagram } from "lucide-react";

function CurvedDividerBottom({ darkColor }: { darkColor: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[50px] md:h-[70px]">
        <path d="M0,0 Q720,80 1440,0" fill="none" stroke="url(#glowB)" strokeWidth="2" />
        <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill={darkColor} />
        <defs>
          <linearGradient id="glowB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CurvedDividerTop({ darkColor }: { darkColor: string }) {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[50px] md:h-[70px]">
        <path d="M0,80 Q720,0 1440,80 L1440,0 L0,0 Z" fill={darkColor} />
        <path d="M0,80 Q720,0 1440,80" fill="none" stroke="url(#glowT)" strokeWidth="2" />
        <defs>
          <linearGradient id="glowT" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center bg-[#311111] overflow-hidden pb-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }} />
      <div className="absolute inset-0 bg-[#130707]/80" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          AUTOMATION WITHOUT THE OPERATIONAL BURDEN
        </h1>
        <p className="text-xl text-white/80 font-medium mb-8">
          We deliver business process automation as a fully managed service.
        </p>
        <ul className="space-y-3 text-white/90 font-medium mb-8 inline-block text-left">
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/60" /> No infrastructure to build or maintain</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/60" /> No internal automation team needed</li>
          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/60" /> Fast ROI with predictable costs</li>
        </ul>
        <div>
          <button className="bg-[#faf8f5] text-[#311111] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
            Calculate Your ROI
          </button>
        </div>
      </div>
      <CurvedDividerBottom darkColor="#130707" />
    </section>
  );
}

function ServiceSection() {
  return (
    <section className="relative pb-16 pt-16 md:pb-24 md:pt-24 bg-[#130707]">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1a0a0a]" />
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-10">
          <h2 className="text-sm font-bold tracking-[0.3em] text-white/60 mb-4">MANAGED INTELLIGENT AUTOMATION</h2>
          <blockquote className="text-3xl md:text-4xl font-normal text-white leading-tight border-l-4 border-white/30 pl-6 uppercase">
            YOU RUN <b className="font-extrabold">THE BUSINESS.</b><br />
            WE RUN <b className="font-extrabold">THE AUTOMATION.</b>
          </blockquote>
        </div>
        <div className="space-y-8 text-lg text-white/70 font-medium">
          <p className="text-2xl text-white font-semibold">
            Managed Automation delivers business process automation as a fully managed service.
          </p>
          <ul className="space-y-6">
            {[
              "Instead of building an automation platform and internal team, organizations can simply automate their processes through our service.",
              "BCA designs, develops, and operates the automations end-to-end, removing the operational complexity from our clients.",
              "This enables organizations to achieve fast and measurable ROI, benefit from predictable service costs, and scale automation across the business.",
            ].map((t, i) => (
              <li key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-white/60 shrink-0 mt-1" />
                <p>{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ValuePillarsSection() {
  const pillars = [
    { icon: Layers, title: "Lower Complexity", desc: "No platform to manage" },
    { icon: ShieldCheck, title: "Lower Risk", desc: "Start small, No commitment" },
    { icon: Clock, title: "Fast Time-to-Value", desc: "Live in weeks, not months" },
    { icon: Calculator, title: "Predictable Cost", desc: "Transparent, scalable pricing" },
  ];
  return (
    <section className="relative py-16 md:py-24 bg-[#1a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#130707] to-transparent" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          WHY ORGANIZATIONS CHOOSE MANAGED AUTOMATION
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="border border-white/10 rounded-2xl bg-white/[0.04] p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
                <p.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="text-white/60 font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleROISection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#1a0a0a] text-white">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#130707]" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
        </h2>
        <div className="flex items-stretch gap-0">
          <div className="flex-1 border border-white/20 p-6 rounded-2xl bg-white/[0.03]">
            <h3 className="text-xl font-bold mb-4">Manual process</h3>
            <ul className="space-y-3 text-lg font-medium text-white/80">
              <li className="border-b border-white/10 pb-2">~2 hours/day</li>
              <li className="border-b border-white/10 pb-2">€40/hour</li>
              <li className="font-bold text-xl pt-2">€16,800 annual cost</li>
            </ul>
          </div>
          <div className="flex items-center px-3"><ArrowRight className="w-8 h-8 text-white/70" /></div>
          <div className="flex-1 border border-white/15 bg-white/[0.05] p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Automation</h3>
            <ul className="space-y-3 text-lg font-medium text-white/80">
              <li className="border-b border-white/10 pb-2">€10,000 setup</li>
              <li>€5,000 annual service</li>
            </ul>
          </div>
          <div className="flex items-center px-3"><ArrowRight className="w-8 h-8 text-white/70" /></div>
          <div className="flex-1 bg-[#311111]/60 border border-[#311111] p-6 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Business impact</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="border-b border-white/20 pb-2 font-bold">~€12,000 savings</li>
              <li className="border-b border-white/20 pb-2 font-bold">~10-month payback</li>
              <li className="text-2xl font-bold pt-2">~100% ROI</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-2xl md:text-3xl font-light italic">
          "Small processes. <span className="font-bold not-italic">Big impact.</span>"
        </p>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#130707]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a0a0a] to-transparent" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">ESTIMATE YOUR AUTOMATION ROI</h2>
          <p className="mt-4 text-base text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
            Use this calculator to get a quick estimate of how much time and cost your organization could save by automating a specific business process.
          </p>
        </div>
        <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-white/70">Process Complexity</label>
              <div className="h-11 bg-white/10 border border-white/15 rounded-xl flex items-center px-3 text-sm text-white/60">Select size...</div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-white/70">Monthly Time</label>
              <div className="h-11 bg-white/10 border border-white/15 rounded-xl flex items-center px-3 text-sm text-white">120 <span className="ml-auto text-xs text-white/60">hours</span></div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-white/70">Hourly Cost</label>
              <div className="h-11 bg-white/10 border border-white/15 rounded-xl flex items-center px-3 text-sm text-white">€ 35</div>
            </div>
            <button className="h-11 text-sm font-bold rounded-full bg-white text-[#311111] flex items-center justify-center gap-2">
              Calculate <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 pt-24 md:pt-32 text-white overflow-hidden">
      <CurvedDividerTop darkColor="#130707" />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }} />
      <div className="absolute inset-0 bg-[#311111]/90" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, #311111 100%)' }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 pt-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">START WITH ONE PROCESS</h2>
            <p className="text-xl md:text-2xl font-medium text-white/90">Validate ROI quickly and scale automation.</p>
          </div>
          <div className="flex-1 w-full max-w-md bg-[#faf8f5] p-8 shadow-2xl rounded-2xl">
            <div className="space-y-5">
              {["Name", "Email", "Company"].map((label) => (
                <div key={label} className="space-y-1.5">
                  <label className="text-[#1a1a1a] font-bold text-sm">{label}</label>
                  <div className="h-12 rounded-xl border border-[#e8e0d8] bg-white" />
                </div>
              ))}
              <button className="w-full h-14 text-base font-bold rounded-full mt-4 bg-[#311111] text-white">
                Request Detailed Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative bg-[#311111] text-white pt-20 md:pt-24">
      <CurvedDividerTop darkColor="#311111" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 pb-10">
          <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold">BCA</div>
          <h3 className="text-xl md:text-2xl font-bold">Experts In Technology, Partners In Business</h3>
          <p className="text-sm text-white/70 font-medium">Empowering Your Digital Journey since 2007</p>
          <div className="flex items-center gap-8 pt-2">
            {[{ icon: Facebook, label: "Facebook" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Instagram, label: "Instagram" }].map((s) => (
              <span key={s.label} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                <s.icon className="w-4 h-4" /> {s.label}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-white/15 py-6 flex items-center justify-center gap-6 text-sm text-white/60">
          <span>© 2026 BCA Solutions. All rights reserved.</span>
          <span className="font-bold text-white/80">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export function SectionFlow() {
  return (
    <div className="min-h-screen bg-[#130707] text-white" style={{ fontFamily: "'Prompt', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <div className="sticky top-0 z-50 bg-[#311111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">BCA Solutions</span>
          <nav className="flex items-center gap-8">
            <span className="text-sm font-semibold text-white/90">Home</span>
            <span className="text-sm font-semibold text-white/90">Solutions</span>
          </nav>
          <button className="border border-white/40 px-5 py-2 rounded-full text-sm font-semibold text-white">Get Assessment</button>
        </div>
      </div>

      <HeroSection />
      <ServiceSection />
      <ValuePillarsSection />
      <ExampleROISection />
      <CalculatorSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
