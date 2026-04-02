import './_group.css';
import { ArrowRight } from 'lucide-react';

export function TexturedDepth() {
  return (
    <div style={{ fontFamily: "'Dosis', sans-serif" }}>
      <section className="py-24 relative overflow-hidden" style={{ background: 'hsl(240 10% 15%)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsla(240,10%,10%,0.5) 0%, transparent 15%, transparent 85%, hsla(240,10%,10%,0.5) 100%)' }} />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '150px 150px' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsla(359,69%,27%,0.4), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsla(359,69%,27%,0.3), transparent)' }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/20 p-8 flex flex-col gap-6 relative rounded-[4px]">
                <h3 className="text-xl font-bold text-white tracking-widest uppercase">Manual process</h3>
                <ul className="space-y-4 text-lg font-medium text-white/80">
                  <li className="border-b border-white/10 pb-2"><span className="text-white">~2 hours/day</span></li>
                  <li className="border-b border-white/10 pb-2"><span className="text-white">&euro;40/hour</span></li>
                  <li className="font-bold pt-2"><span className="text-white text-xl">&euro;16,800 annual cost</span></li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full" style={{ background: 'hsl(240 10% 15%)' }}>
                  <ArrowRight className="w-8 h-8" style={{ color: 'hsl(359 69% 27%)' }} />
                </div>
              </div>
              <div className="border p-8 flex flex-col gap-6 relative rounded-[4px]" style={{ borderColor: 'hsl(359 69% 27%)', background: 'hsla(359, 69%, 27%, 0.1)' }}>
                <h3 className="text-xl font-bold tracking-widest uppercase" style={{ color: 'hsl(359 69% 27%)' }}>Automation</h3>
                <ul className="space-y-4 text-lg font-medium text-white/80">
                  <li className="border-b border-white/10 pb-2"><span className="text-white">&euro;10,000 setup</span></li>
                  <li className="border-b border-white/10 pb-2"><span className="text-white">&euro;5,000 annual service</span></li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full" style={{ background: 'hsl(240 10% 15%)' }}>
                  <ArrowRight className="w-8 h-8" style={{ color: 'hsl(359 69% 27%)' }} />
                </div>
              </div>
              <div className="p-8 flex flex-col gap-6 shadow-2xl rounded-[4px]" style={{ background: 'hsl(359 69% 27%)', color: 'white' }}>
                <h3 className="text-xl font-bold tracking-widest uppercase">Business impact</h3>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="border-b border-white/20 pb-2"><span className="font-bold">~&euro;12,000 savings</span></li>
                  <li className="border-b border-white/20 pb-2"><span className="font-bold">~10-month payback</span></li>
                  <li className="font-bold pt-2"><span className="text-2xl">~100% ROI</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-3xl md:text-4xl font-light italic text-white">
                "Small processes. <span className="font-bold not-italic" style={{ color: 'hsl(359 69% 27%)' }}>Big impact.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'hsl(359 69% 27%)' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsla(359,69%,20%,0.4) 0%, transparent 20%, transparent 80%, hsla(359,69%,20%,0.4) 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent 10%, hsla(0,0%,100%,0.2) 50%, transparent 90%)' }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight text-white">START WITH ONE PROCESS</h2>
              <p className="text-xl md:text-2xl font-medium text-white/90">Validate ROI quickly and scale automation.</p>
            </div>
            <div className="flex-1 w-full max-w-md bg-white p-8 border-t-4 shadow-2xl" style={{ borderTopColor: 'hsl(240 10% 15%)' }}>
              <div className="space-y-6">
                <div><label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'hsl(240 10% 15%)' }}>Name</label><input placeholder="John Doe" className="w-full h-12 rounded-[4px] border px-3" style={{ borderColor: 'hsl(40 20% 90%)' }} /></div>
                <div><label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'hsl(240 10% 15%)' }}>Email</label><input placeholder="john@company.com" className="w-full h-12 rounded-[4px] border px-3" style={{ borderColor: 'hsl(40 20% 90%)' }} /></div>
                <div><label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'hsl(240 10% 15%)' }}>Company</label><input placeholder="Acme Corp" className="w-full h-12 rounded-[4px] border px-3" style={{ borderColor: 'hsl(40 20% 90%)' }} /></div>
                <button className="w-full h-14 text-base font-bold uppercase tracking-widest rounded-[4px] mt-4 text-white" style={{ background: 'hsl(359 69% 27%)' }}>Request Detailed Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
