import { ArrowRight, ChevronRight } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";
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
              Platform-as-a-Service · Managed Deployment
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.05]">
            Deploy your own <br className="hidden sm:block" />
            <TrueFocus
              sentence="AI team."
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
            Build a fully customized roster of AI agents — each with a dedicated
            role, specialized workflow, and private workspace. Built for businesses,
            founders, agencies, and independent professionals who operate at scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground font-medium text-sm px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Book a Demo
              <ArrowRight size={15} />
            </a>
            <a
              href="#use-cases"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface text-foreground font-medium text-sm px-6 py-3 hover:bg-surface-raised transition-colors"
            >
              Explore Use Cases
              <ChevronRight size={15} className="text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 relative mx-auto max-w-5xl">
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
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
