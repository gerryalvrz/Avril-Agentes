import {
  UserCog,
  Lock,
  Cloud,
  Waypoints,
  Plug,
  UserRoundCheck,
  ShieldCheck,
  Layers,
  Headphones,
} from "lucide-react";
import { SectionLabel } from "@/components/use-cases";

const FEATURES: {
  icon: typeof UserCog;
  title: string;
  description: string;
}[] = [
  {
    icon: UserCog,
    title: "Role-scoped agents",
    description: "Each unit owns a job, tools, and permissions—no generic chatbot sprawl.",
  },
  {
    icon: Lock,
    title: "Private workspaces",
    description: "Isolated environments so your data and prompts stay in your boundary.",
  },
  {
    icon: Cloud,
    title: "Managed deployment",
    description: "We ship updates, monitor uptime, and keep your stack production-ready.",
  },
  {
    icon: Waypoints,
    title: "Configurable workflows",
    description: "Define steps, handoffs, and guardrails that match how you actually operate.",
  },
  {
    icon: Plug,
    title: "Tool integrations",
    description: "Connect CRM, Slack, Notion, email, and the systems your team already uses.",
  },
  {
    icon: UserRoundCheck,
    title: "Human in the loop",
    description: "Pause for review, escalate, or require sign-off before high-impact actions.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first posture",
    description: "Tenant isolation, scoped access, and operational practices built for real workloads.",
  },
  {
    icon: Layers,
    title: "Multi-agent orchestration",
    description: "Compose specialists into a roster that hands work off cleanly end to end.",
  },
  {
    icon: Headphones,
    title: "Guided onboarding",
    description: "Launch with support from our team—not a self-serve ticket black hole.",
  },
];

export function FeatureMatrix() {
  return (
    <section
      id="capabilities"
      className="border-t border-border bg-background py-24"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Platform</SectionLabel>
          <h2
            id="capabilities-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl"
          >
            Everything your operators need—at a glance.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Nine capabilities that cover deployment, control, and execution. Scan fast, dig
            deeper in the sections below.
          </p>
        </div>

        <ul className="mt-14 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border/80 hover:bg-surface-raised md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-raised">
                    <Icon className="h-[18px] w-[18px] text-brand" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
