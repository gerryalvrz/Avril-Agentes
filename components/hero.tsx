import { ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedAiChat } from "./ui/animated-ai-chat";
import { HeroGridDots } from "./hero-grid-dots";
import TrueFocus from "./TrueFocus";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.22 0 0 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.22 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Moving dots along grid lines (Pac-Man style) */}
      <HeroGridDots />
      {/* Radial fade overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.62 0.14 210 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              The Vibe Founder's Operating System
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-heading lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.05]">
            Vibe to Ignition → <br className="hidden sm:block" />
            <TrueFocus
              sentence="live agent orchestration"
              manualMode
              blurAmount={0}
              borderColor="#0099af"
              glowColor="rgba(0, 153, 175, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
              className="text-brand"
            />
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            The orchestration layer for the modern vibe founder. Convert agent briefs into live OpenClaw instances with 3-swarm guardrails. From Avril interview to Convex architecture, powered by Human.tech identity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="https://app.avril.life"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold text-base px-10 py-4 hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_oklch(0.62_0.14_210_/_0.3)] hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_30px_oklch(0.62_0.14_210_/_0.4)]"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          {/* Glow beneath the mockup */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-20 top-10 -bottom-10 opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.62 0.14 210 / 0.25) 0%, transparent 70%)",
            }}
          />
          <div className="relative rounded-xl border border-border/70 overflow-hidden shadow-2xl">
            <AnimatedAiChat />
          </div>
        </div>
      </div>
    </section>
  );
}
