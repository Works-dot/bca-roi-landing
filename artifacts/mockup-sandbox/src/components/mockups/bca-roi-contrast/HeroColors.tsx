import './_group.css';
import { ArrowRight } from 'lucide-react';

const PRIMARY = 'hsl(359 69% 27%)';

export function HeroColors() {
  return (
    <div style={{ fontFamily: "'Dosis', sans-serif" }}>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }} />
        <div className="absolute inset-0" style={{ background: 'hsla(240, 10%, 15%, 0.93)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsla(240,10%,10%,0.3) 0%, transparent 20%, transparent 80%, hsla(240,10%,10%,0.3) 100%)' }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                TYPICAL ROI FROM AUTOMATING A SINGLE PROCESS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/20 p-8 flex flex-col gap-6 relative rounded-[4px] backdrop-blur-sm bg-white/10">
                <h3 className="text-xl font-bold text-white tracking-widest uppercase">Manual process</h3>
                <ul className="space-y-4 text-lg font-medium text-white/80">
                  <li className="border-b border-white/10 pb-2"><span className="text-white">~2 hours/day</span></li>
                  <li className="border-b border-white/10 pb-2"><span className="text-white">&euro;40/hour</span></li>
                  <li className="font-bold pt-2"><span className="text-white text-xl">&euro;16,800 annual cost</span></li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-white/80" />
                </div>
              </div>
              <div className="border p-8 flex flex-col gap-6 relative rounded-[4px] backdrop-blur-sm shadow-lg" style={{ borderColor: PRIMARY, background: 'hsla(359, 69%, 27%, 0.8)', boxShadow: '0 10px 15px -3px hsla(359, 69%, 27%, 0.2)' }}>
                <h3 className="text-xl font-bold text-white tracking-widest uppercase">Automation</h3>
                <ul className="space-y-4 text-lg font-medium text-white/80">
                  <li className="border-b border-white/20 pb-2"><span className="text-white">&euro;10,000 setup</span></li>
                  <li className="border-b border-white/20 pb-2"><span className="text-white">&euro;5,000 annual service</span></li>
                </ul>
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-white/80" />
                </div>
              </div>
              <div className="p-8 flex flex-col gap-6 rounded-[4px] backdrop-blur-sm bg-white/15 border border-white/30">
                <h3 className="text-xl font-bold text-white tracking-widest uppercase">Business impact</h3>
                <ul className="space-y-4 text-lg font-medium text-white">
                  <li className="border-b border-white/20 pb-2"><span className="font-bold">~&euro;12,000 savings</span></li>
                  <li className="border-b border-white/20 pb-2"><span className="font-bold">~10-month payback</span></li>
                  <li className="font-bold pt-2"><span className="text-2xl">~100% ROI</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-3xl md:text-4xl font-light italic text-white">
                "Small processes. <span className="font-bold not-italic text-white">Big impact.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
