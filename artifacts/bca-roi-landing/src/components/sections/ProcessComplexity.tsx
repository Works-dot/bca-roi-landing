import { useContent } from "@/lib/cms-context";

export default function ProcessComplexity() {
  const headline = useContent("complexity.headline", "Find Your Process in Seconds");
  const subline = useContent("complexity.subline", "From simple repetitive tasks to complex, end-to-end workflows");

  const levels = [
    {
      name: useContent("complexity.small.name", "Small"),
      systems: useContent("complexity.small.systems", "1 system · simple, repetitive tasks"),
      bullets: [
        useContent("complexity.small.bullet.1", "Data entry in business systems"),
        useContent("complexity.small.bullet.2", "Standard report generation"),
        useContent("complexity.small.bullet.3", "Email-based updates"),
      ],
    },
    {
      name: useContent("complexity.medium.name", "Medium"),
      systems: useContent("complexity.medium.systems", "2 systems · structured workflows"),
      bullets: [
        useContent("complexity.medium.bullet.1", "Invoice processing from structured input"),
        useContent("complexity.medium.bullet.2", "Data transfer between systems"),
        useContent("complexity.medium.bullet.3", "Multi-source reporting"),
      ],
    },
    {
      name: useContent("complexity.large.name", "Large"),
      systems: useContent("complexity.large.systems", "2–3 systems · multi-step processes"),
      bullets: [
        useContent("complexity.large.bullet.1", "Approval workflows with multiple steps"),
        useContent("complexity.large.bullet.2", "Customer or partner data validation"),
        useContent("complexity.large.bullet.3", "Document handling across systems"),
      ],
    },
    {
      name: useContent("complexity.complex.name", "Complex"),
      systems: useContent("complexity.complex.systems", "3+ systems · end-to-end automation"),
      bullets: [
        useContent("complexity.complex.bullet.1", "End-to-end finance processes"),
        useContent("complexity.complex.bullet.2", "Cross-system operations"),
        useContent("complexity.complex.bullet.3", "Complex calculation and reconciliation"),
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#130707]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {headline}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/60 font-medium max-w-2xl mx-auto">
              {subline}
            </p>
          </div>

          <div className="hidden md:block border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-white/10">
                  {levels.map((level, i) => (
                    <th
                      key={i}
                      className={`px-6 py-5 text-left align-top ${i < levels.length - 1 ? "border-r border-white/10" : ""}`}
                    >
                      <span className="text-lg font-bold text-white block">{level.name}</span>
                      <span className="text-sm text-white/50 font-medium mt-1 block">{level.systems}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {levels.map((level, i) => (
                    <td
                      key={i}
                      className={`px-6 py-5 align-top ${i < levels.length - 1 ? "border-r border-white/10" : ""}`}
                    >
                      <ul className="space-y-3">
                        {level.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/70 font-medium leading-relaxed">
                            <span className="text-white/30 mt-1.5 shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-0 border border-white/10 rounded-2xl overflow-hidden">
            {levels.map((level, i) => (
              <div
                key={i}
                className={`px-5 py-5 ${i < levels.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="mb-3">
                  <span className="text-lg font-bold text-white">{level.name}</span>
                  <span className="text-sm text-white/50 font-medium ml-3">{level.systems}</span>
                </div>
                <ul className="space-y-2">
                  {level.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/70 font-medium leading-relaxed">
                      <span className="text-white/30 mt-0.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
