const AGENTS = [
  {
    name: "Growth Agent",
    role: "Marketing & GTM",
    status: "active",
    tasks: 12,
    color: "bg-sky-500",
    initials: "GA",
  },
  {
    name: "Research Agent",
    role: "Analysis & Insights",
    status: "active",
    tasks: 8,
    color: "bg-emerald-500",
    initials: "RA",
  },
  {
    name: "Ops Agent",
    role: "Internal Operations",
    status: "idle",
    tasks: 3,
    color: "bg-amber-500",
    initials: "OA",
  },
  {
    name: "Content Agent",
    role: "Copy & Publishing",
    status: "active",
    tasks: 21,
    color: "bg-rose-500",
    initials: "CA",
  },
];

const ACTIVITY = [
  { agent: "Growth Agent", action: "Drafted Q2 campaign brief", time: "2m ago" },
  { agent: "Research Agent", action: "Completed competitor analysis", time: "11m ago" },
  { agent: "Content Agent", action: "Published 3 LinkedIn posts", time: "24m ago" },
  { agent: "Ops Agent", action: "Updated CRM pipeline records", time: "1h ago" },
];

export function DashboardMockup() {
  return (
    <div className="bg-surface font-sans text-foreground select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-surface-raised border border-border px-3 py-1">
          <span className="text-xs text-muted-foreground font-mono">workspace / acme-corp</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-muted-foreground">Team: 4 active agents</div>
          <div className="h-6 w-6 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
            <span className="text-[9px] text-brand font-semibold">AC</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[420px]">
        {/* Sidebar */}
        <aside className="col-span-2 border-r border-border px-3 py-4 flex flex-col gap-1 hidden sm:flex">
          {[
            { icon: "⬡", label: "Overview", active: true },
            { icon: "◈", label: "Agents", active: false },
            { icon: "⊞", label: "Workflows", active: false },
            { icon: "⊡", label: "Logs", active: false },
            { icon: "◇", label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs cursor-pointer ${
                item.active
                  ? "bg-surface-overlay text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-[10px]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="col-span-12 sm:col-span-10 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-sm font-semibold text-foreground">Agent Overview</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Acme Corp workspace · 4 agents deployed</p>
            </div>
            <button className="text-xs bg-primary text-primary-foreground rounded-md px-3 py-1.5 font-medium hover:bg-primary/90 transition-colors">
              + Add Agent
            </button>
          </div>

          {/* Agent cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {AGENTS.map((agent) => (
              <div
                key={agent.name}
                className="rounded-lg border border-border bg-surface-raised p-3 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`h-7 w-7 rounded-md ${agent.color} flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {agent.initials}
                  </div>
                  <span
                    className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                      agent.status === "active"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-border text-muted-foreground"
                    }`}
                  >
                    {agent.status}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground leading-tight">{agent.name}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{agent.role}</div>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  <span className="text-foreground font-medium">{agent.tasks}</span> tasks this week
                </div>
              </div>
            ))}
          </div>

          {/* Activity feed */}
          <div className="rounded-lg border border-border bg-surface-raised p-3">
            <div className="text-xs font-medium text-foreground mb-3">Recent Activity</div>
            <div className="flex flex-col gap-2">
              {ACTIVITY.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-muted-foreground">
                      <span className="text-foreground font-medium">{item.agent}</span>{" "}
                      — {item.action}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
