import { SectionLabel } from "./use-cases";

const STEPS = [
  {
    step: "01",
    title: "Choose your team",
    desc: "Select from a library of pre-built agent archetypes or define custom roles from scratch. Each agent is scoped to a specific function.",
  },
  {
    step: "02",
    title: "Customize roles and workflows",
    desc: "Define the tasks, data sources, tools, and decision logic each agent operates with. Everything is configurable — no hard-coded behavior.",
  },
  {
    step: "03",
    title: "Deploy in your workspace",
    desc: "Your team spins up in a private, isolated workspace. Managed cloud or dedicated instance — you choose the deployment model.",
  },
  {
    step: "04",
    title: "Scale with support",
    desc: "Add new agents, expand workflows, and get ongoing optimization from our team. We stay involved beyond go-live.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          From zero to deployed in four steps.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed text-pretty">
          We handle the infrastructure. You define the team.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border"
          />

          {STEPS.map((item) => (
            <div key={item.step} className="relative flex flex-col gap-4">
              {/* Step number bubble */}
              <div className="relative z-10 h-14 w-14 rounded-full border border-border bg-surface flex items-center justify-center shrink-0">
                <span className="text-sm font-mono font-semibold text-brand">{item.step}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
