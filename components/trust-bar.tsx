const PILLARS = [
  { label: "Custom AI Teams", desc: "Every agent built for your exact workflow" },
  { label: "Private Workspaces", desc: "Your data stays in your environment" },
  { label: "Managed Deployment", desc: "We handle infrastructure and updates" },
  { label: "Built for Real Operations", desc: "Execution-first, not demo-first" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {PILLARS.map((item) => (
            <div
              key={item.label}
              className="group px-6 py-6 flex flex-col gap-1 transition-colors duration-200 hover:bg-brand/10"
            >
              <span className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors duration-200">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-200">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
