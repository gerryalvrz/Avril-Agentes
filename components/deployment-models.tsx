"use client";

import { Cloud, Server, Lock, Headphones } from "lucide-react";
import { SectionLabel } from "./use-cases";
import Orb from "./Orb";

const MODELS = [
  {
    icon: Cloud,
    title: "Managed Cloud",
    desc: "Your agents run on our managed infrastructure. Zero setup, instant deployment, shared-tenant isolation. Ideal for teams moving quickly.",
    highlight: false,
  },
  {
    icon: Server,
    title: "Dedicated Instance",
    desc: "A dedicated environment provisioned exclusively for your organization. Full resource isolation, predictable performance, no noisy neighbors.",
    highlight: true,
  },
  {
    icon: Lock,
    title: "Private Deployment",
    desc: "Deploy entirely within your own cloud account or on-premises environment. Full control over data residency, security policies, and access.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "White-Glove Setup",
    desc: "Our team designs your agent architecture, configures your workflows, and runs a guided launch. Ongoing optimization included.",
    highlight: false,
  },
];

export function DeploymentModels() {
  return (
    <section className="relative py-24 border-t border-border overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 z-0 w-full h-full min-h-[600px] opacity-50" aria-hidden>
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionLabel>Deployment</SectionLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          Deploy the way your team operates.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed text-pretty">
          From instant managed cloud to fully private on-premise infrastructure — every deployment model is production-grade.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODELS.map((model) => {
            const Icon = model.icon;
            const isGlass = model.highlight;
            return isGlass ? (
              <div
                key={model.title}
                className="rounded-xl p-[1px] border-0 bg-gradient-to-br from-cyan-400/35 via-[#0099af]/20 to-violet-400/35 shadow-[0_0_20px_-5px_rgba(0,153,175,0.12),0_0_35px_-10px_rgba(139,92,246,0.08)]"
              >
                <div className="relative rounded-[11px] overflow-hidden">
                  {/* Apple-style glass: blur first, then a neutral tint so text stays readable */}
                  <div
                    className="absolute inset-0 backdrop-blur-xl"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 bg-black/25"
                    aria-hidden
                  />
                  <div
                    className="relative rounded-[11px] border p-6 flex flex-col gap-5 min-h-full"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-10 w-10 rounded-lg border bg-white/10 flex items-center justify-center backdrop-blur-sm"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{model.title}</h3>
                      <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{model.desc}</p>
                    </div>
                    <span
                      className="self-start text-[10px] font-medium mt-auto text-brand bg-brand/15 border rounded-full px-2.5 py-0.5"
                      style={{ borderColor: "color-mix(in oklch, var(--brand) 40%, transparent)" }}
                    >
                      Recommended
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={model.title}
                className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-5 transition-colors hover:bg-surface-raised"
              >
                <div className="h-10 w-10 rounded-lg border border-border bg-surface-raised flex items-center justify-center">
                  <Icon size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{model.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
