export function CurvedDividerBottom({ darkColor }: { darkColor: string }) {
  return (
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
}

export function CurvedDividerTop({ darkColor }: { darkColor: string }) {
  return (
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
}
