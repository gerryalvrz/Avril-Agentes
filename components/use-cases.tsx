import { Building2, Megaphone, BriefcaseBusiness, UserCheck, Stethoscope } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import LightRays from "./LightRays";

const CASES = [
  {
    icon: Building2,
    label: "Startups",
    title: "Move faster than your headcount.",
    desc: "Deploy research, content, and ops agents on day one. Ship without hiring. Scale without chaos.",
    tags: ["Growth", "Research", "Ops"],
  },
  {
    icon: Megaphone,
    label: "Agencies",
    title: "Deliver more. Retain more.",
    desc: "Spin up a dedicated agent team per client. Customized workflows, white-labeled deployments, consistent output.",
    tags: ["Content", "Client Intake", "Reporting"],
  },
  {
    icon: BriefcaseBusiness,
    label: "Operators & Founders",
    title: "Your own executive support layer.",
    desc: "From lead qualification to internal knowledge management — your agents execute while you focus on strategy.",
    tags: ["Lead Ops", "Knowledge Base", "Workflows"],
  },
  {
    icon: UserCheck,
    label: "Professional Services",
    title: "Intelligence behind every engagement.",
    desc: "Consultants, advisors, and independent professionals get a private AI team without managing infrastructure.",
    tags: ["Research", "Proposals", "Client Comms"],
  },
  {
    icon: Stethoscope,
    label: "Private Practices",
    title: "Private, compliant, and configurable.",
    desc: "Psychologists and health professionals get secure, role-scoped agents for intake, notes, and admin — without consumer AI risk.",
    tags: ["Intake", "Documentation", "Scheduling"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#0099af"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionLabel>Use Cases</SectionLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          Built for every type of operator.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed text-pretty">
          Whether you run a startup, an agency, or a solo practice — Agentic Business OS adapts to your model, not the other way around.
        </p>

        <div className="mt-14 h-[540px] overflow-hidden flex items-center justify-center relative">
          <CardSwap width={520} height={420} cardDistance={55} verticalDistance={45} delay={5000} pauseOnHover={false}>
            {CASES.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.label}
                  customClass="group w-full h-full rounded-xl border border-border bg-surface hover:bg-surface-raised transition-colors p-6 flex flex-col gap-4 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-md border border-border bg-surface-raised flex items-center justify-center">
                      <Icon
                        size={16}
                        className="text-brand transition-colors"
                      />
                    </div>
                    <span className="text-xs text-brand bg-brand/10 border border-brand/30 rounded-full px-2.5 py-0.5">
                      {item.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-brand/10 border border-brand/30 text-brand rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-4 bg-brand" />
      <span className="text-xs font-medium text-brand uppercase tracking-widest">{children}</span>
    </div>
  );
}
