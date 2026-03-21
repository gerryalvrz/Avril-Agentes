"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "./use-cases";
import Beams from "./Beams";

const FAQS = [
  {
    q: "What can these agents actually do?",
    a: "Each agent is purpose-built for a specific function — marketing strategy, content creation, web management, internal ops, research, or client intake. They can execute multi-step tasks, integrate with your tools (CRM, Slack, Notion, etc.), maintain context across sessions, and deliver structured outputs. They're not chatbots — they're operational units.",
  },
  {
    q: "Are deployments private?",
    a: "Yes. Managed cloud deployments run in isolated tenant environments — your data is never shared or used to train models. Dedicated Instance and Private Deployment options give you complete environment isolation, up to and including your own cloud account or on-premise infrastructure.",
  },
  {
    q: "Can my team be customized?",
    a: "Entirely. You define each agent's role, scope, tone, tools, and data sources. Workflows are configured to match your processes, not the other way around. Our team works with you during setup to ensure every agent reflects how your organization actually operates.",
  },
  {
    q: "Do you offer dedicated instances?",
    a: "Yes. Our Dedicated and Private Deployment plans provision infrastructure exclusively for your organization. This means guaranteed compute resources, no shared tenancy, and full control over your security and compliance posture.",
  },
  {
    q: "Can this work for solo professionals?",
    a: "Absolutely. The Starter plan is designed for independent consultants, advisors, and solo operators. You can start with two or three agents and scale as your workload grows. Many solo professionals use Agentic Business OS as their own back-office team.",
  },
  {
    q: "Can humans stay in the loop?",
    a: "Yes — and we consider this a first-class feature. Agents can be configured to pause for human review, escalate decisions, or require sign-off before executing certain actions. You control exactly where human judgment remains in the chain.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 border-t border-border overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 z-0" aria-hidden>
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={i}
                className="flex items-start justify-between gap-4 py-5 text-left w-full group"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground group-hover:text-brand transition-colors">
                    {item.q}
                  </span>
                  {isOpen && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
                <div className="shrink-0 mt-0.5 text-muted-foreground">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
