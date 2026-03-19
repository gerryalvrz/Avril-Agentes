import { Check } from "lucide-react";
import { SectionLabel } from "./use-cases";

const PLANS = [
  {
    name: "Starter",
    price: "$490",
    period: "/mo",
    desc: "For solo professionals and small teams exploring AI-assisted operations.",
    features: [
      "Up to 3 AI agents",
      "Managed cloud deployment",
      "Standard agent library",
      "Workflow templates",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,290",
    period: "/mo",
    desc: "For growing teams that need more agents, custom workflows, and priority support.",
    features: [
      "Up to 10 AI agents",
      "Custom roles & workflows",
      "Managed cloud or dedicated instance",
      "Integrations (CRM, Slack, Notion)",
      "Priority support & onboarding",
      "Monthly optimization review",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Dedicated",
    price: "Custom",
    period: "",
    desc: "For organizations requiring private deployment, enterprise SLAs, and white-glove service.",
    features: [
      "Unlimited agents",
      "Private or on-premise deployment",
      "Custom integrations & data sources",
      "Dedicated account manager",
      "White-glove setup & training",
      "SLA with uptime guarantee",
      "Quarterly strategy reviews",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Straightforward plans. No seat fees.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed text-pretty">
            Each plan includes deployment, management, and access to the full agent library. You scale agents, not seats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border flex flex-col p-7 ${
                plan.highlight
                  ? "border-brand/40 bg-surface shadow-[0_0_40px_oklch(0.62_0.14_210_/_0.08)]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-brand text-primary-foreground rounded-full px-3 py-1">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-brand" : "text-muted-foreground"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium px-5 py-3 transition-colors ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-surface-raised border border-border text-foreground hover:bg-surface-overlay"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          All plans include a 14-day evaluation period. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
