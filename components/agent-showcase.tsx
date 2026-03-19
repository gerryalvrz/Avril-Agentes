import {
  TrendingUp,
  Search,
  Globe,
  Settings2,
  Users,
  FileText,
  MessageSquare,
} from "lucide-react";
import { SectionLabel } from "./use-cases";
import MagicBentoCard from "./MagicBentoCard";

const AGENTS = [
  {
    name: "Growth Agent",
    role: "Marketing & GTM",
    icon: TrendingUp,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    capabilities: [
      "Campaign strategy & briefs",
      "Audience research & targeting",
      "Performance reporting",
      "Ad copy generation",
    ],
    badge: "Most deployed",
  },
  {
    name: "Research Agent",
    role: "Analysis & Intelligence",
    icon: Search,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    capabilities: [
      "Market & competitor analysis",
      "Trend monitoring",
      "Source synthesis",
      "Structured report delivery",
    ],
    badge: null,
  },
  {
    name: "Website Agent",
    role: "Web Presence & Pages",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    capabilities: [
      "Landing page creation",
      "SEO audits & optimization",
      "Content updates",
      "CRO recommendations",
    ],
    badge: null,
  },
  {
    name: "Ops Agent",
    role: "Internal Operations",
    icon: Settings2,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    capabilities: [
      "Process documentation",
      "CRM & data hygiene",
      "Task routing",
      "Internal knowledge queries",
    ],
    badge: null,
  },
  {
    name: "Client Intake Agent",
    role: "Lead & Client Ops",
    icon: Users,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    capabilities: [
      "Lead qualification",
      "Intake form processing",
      "First-touch follow-up",
      "Pipeline updates",
    ],
    badge: null,
  },
  {
    name: "Content Agent",
    role: "Copy & Publishing",
    icon: FileText,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    capabilities: [
      "Blog & article drafting",
      "Social media content",
      "Email sequences",
      "Brand voice adherence",
    ],
    badge: null,
  },
  {
    name: "Client Success Agent",
    role: "Retention & Comms",
    icon: MessageSquare,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    capabilities: [
      "Onboarding workflows",
      "NPS & feedback capture",
      "Renewal outreach",
      "Escalation routing",
    ],
    badge: null,
  },
];

export function AgentShowcase() {
  return (
    <section id="agents" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Agent Roster</SectionLabel>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
              Build your team. <br className="hidden sm:block" />
              Deploy any combination.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed text-pretty">
              Every agent is a specialized unit. Mix, match, and configure your own roster. New archetypes ship regularly.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 self-start md:self-auto shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-muted-foreground">Fully customizable roles</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {AGENTS.map((agent) => {
            const Icon = agent.icon;
            return (
              <MagicBentoCard
                key={agent.name}
                glowColorRgb="0, 153, 175"
                glowRadiusPx={260}
                enableStars={false}
                className="relative group rounded-xl border border-border bg-surface hover:bg-surface-raised transition-all duration-200 p-5 flex flex-col gap-4"
              >
                {agent.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-medium bg-brand/15 text-brand border border-brand/20 rounded-full px-2 py-0.5">
                    {agent.badge}
                  </span>
                )}
                <div className={`h-10 w-10 rounded-lg ${agent.bg} border ${agent.border} flex items-center justify-center`}>
                  <Icon size={18} className={agent.color} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{agent.role}</p>
                </div>
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {agent.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-border shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </MagicBentoCard>
            );
          })}

          {/* Add agent card */}
          <div className="rounded-xl border border-dashed border-border bg-transparent hover:bg-surface transition-colors p-5 flex flex-col items-center justify-center gap-3 cursor-pointer min-h-[200px]">
            <div className="h-10 w-10 rounded-full border border-dashed border-border flex items-center justify-center">
              <span className="text-xl text-muted-foreground leading-none">+</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Request a custom agent for your specific workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
