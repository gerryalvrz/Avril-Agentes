import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FooterCTA() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-border relative overflow-hidden"
    >
      {/* Subtle grid background (same as hero) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.22 0 0 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.22 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, oklch(0.62 0.14 210 / 0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="text-xs text-muted-foreground font-medium">Available now · Onboarding in days, not months</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance leading-tight">
          Deploy your AI team.
        </h2>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-pretty">
          Talk to our team about your workflow, your goals, and the agents that
          make sense for your operation. No pressure, no demo theater.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:hello@agentbase.ai"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground font-medium text-sm px-8 py-3.5 hover:bg-primary/90 transition-colors"
          >
            Book a Demo
            <ArrowRight size={15} />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface text-foreground font-medium text-sm px-8 py-3.5 hover:bg-surface-raised transition-colors"
          >
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Use Cases", href: "#use-cases" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Agents", href: "#agents" },
      { label: "Deployment", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark />
              <span className="text-sm font-semibold text-foreground">Agentic Business OS</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Customizable AI agent teams for businesses and professionals. Deploy, scale, operate.
            </p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <div className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                {group.title}
              </div>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Agentic Business OS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built for operators who execute.</p>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <Image
      src="/Avril.png"
      alt="Avril logo"
      width={88}
      height={55}
      className="h-9 w-auto object-contain"
    />
  );
}
