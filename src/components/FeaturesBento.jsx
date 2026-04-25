import {
  Layers,
  Workflow,
  GitBranch,
  Sparkles,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const items = [
  {
    icon: <Workflow size={24} strokeWidth={1.5} />,
    tag: "01 / Canvas",
    title: "Infinite canvas, zero ceremony",
    desc: "Plot specs, tickets and threads on a single living surface. Drag, draw, decide.",
    span: "span-4",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    tag: "02 / Intelligence",
    title: "Forecast Mode (beta)",
    desc: "AXIOM proposes the next move from your team's actual cadence — not generic templates.",
    span: "span-2",
  },
  {
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    tag: "03 / Branches",
    title: "Branch a project like code",
    desc: "Test alternate plans without breaking the source-of-truth.",
    span: "span-3",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    tag: "04 / Provenance",
    title: "Receipts on every decision",
    desc: "Auto-stamped audit trails. SOC 2 Type II out of the box.",
    span: "span-3",
  },
  {
    icon: <LineChart size={24} strokeWidth={1.5} />,
    tag: "05 / Signals",
    title: "Velocity without the vanity",
    desc: "Real signal: time-to-decision, rework ratio, blocker half-life.",
    span: "span-2",
  },
  {
    icon: <Layers size={24} strokeWidth={1.5} />,
    tag: "06 / Integrations",
    title: "Plays well with the stack",
    desc: "Native pipes to Linear, Notion, Figma, Slack, GitHub, Vercel.",
    span: "span-4",
  },
];

const FeaturesBento = () => {
  return (
    <div className="bento" data-testid="features-bento">
      {items.map((it, i) => (
        <div
          className={`bento-cell ${it.span} reveal`}
          key={i}
          data-testid={`feature-cell-${i}`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div>
            <span className="bento-icon">{it.icon}</span>
          </div>
          <div>
            <span className="bento-tag">{it.tag}</span>
            <h3 className="bento-title">{it.title}</h3>
            <p className="bento-desc">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesBento;
