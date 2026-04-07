import { Layers, ShieldCheck, Clock, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/lib/cms-context";
import { ICON_MAP } from "@/lib/icon-map";
import { CurvedDividerBottom } from "@/components/CurvedDividers";

export default function ValuePillars() {
  const title = useContent("pillars.title", "Why Organizations Choose Managed Automation");

  const p1Title = useContent("pillars.1.title", "");
  const p1Desc = useContent("pillars.1.description", "");
  const p1Icon = useContent("pillars.1.icon", "Layers");
  const p2Title = useContent("pillars.2.title", "");
  const p2Desc = useContent("pillars.2.description", "");
  const p2Icon = useContent("pillars.2.icon", "ShieldCheck");
  const p3Title = useContent("pillars.3.title", "");
  const p3Desc = useContent("pillars.3.description", "");
  const p3Icon = useContent("pillars.3.icon", "Clock");
  const p4Title = useContent("pillars.4.title", "");
  const p4Desc = useContent("pillars.4.description", "");
  const p4Icon = useContent("pillars.4.icon", "Calculator");

  const pillars = [
    { icon: ICON_MAP[p1Icon] || Layers, title: p1Title, description: p1Desc },
    { icon: ICON_MAP[p2Icon] || ShieldCheck, title: p2Title, description: p2Desc },
    { icon: ICON_MAP[p3Icon] || Clock, title: p3Title, description: p3Desc },
    { icon: ICON_MAP[p4Icon] || Calculator, title: p4Title, description: p4Desc },
  ];

  return (
    <section className="relative py-16 md:py-24 pb-28 md:pb-36 bg-[#1a0a0a] z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#130707] to-transparent" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <Card key={i} className="border border-white/10 shadow-md hover:shadow-lg transition-shadow rounded-2xl bg-white/[0.04] backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-2">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 font-medium">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[50px] md:-bottom-[70px] left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[50px] md:h-[70px]"
        >
          <path
            d="M0,0 Q720,80 1440,0"
            fill="none"
            stroke="url(#glowBottomVP)"
            strokeWidth="2"
          />
          <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#1a0a0a" />
          <defs>
            <linearGradient id="glowBottomVP" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
