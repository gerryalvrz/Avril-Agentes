import { ShieldCheck, Sparkles, Command } from "lucide-react";

export function ThreePillars() {
  const PILLARS = [
    {
      title: "Vibe Founding",
      icon: <Sparkles size={20} className="text-emerald-400" />,
      features: ["Ideation to Ignition", "Folder brief generation", "Venice integration", "One-tap founder handoff"],
    },
    {
      title: "Architecture",
      icon: <Command size={20} className="text-sky-400" />,
      features: ["OpenClaw orchestration", "3-swarm guardrails", "Agent Office setup", "Bridge connectivity"],
    },
    {
      title: "Founder Identity",
      icon: <ShieldCheck size={20} className="text-amber-400" />,
      features: ["Human.tech authentication", "Optional Passport binding", "ERC-8004 on Celo", "Proof of Personhood"],
    },
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-surface/50 backdrop-blur-md border border-border hover:bg-surface-raised transition-colors flex flex-col gap-4 overflow-hidden group"
            >
              {/* Glass subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="h-10 w-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand/50 inline-block" />
                       {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
