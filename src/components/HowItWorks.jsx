import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Drop your stack",
    desc: "Connect Linear, Figma, GitHub & Notion in 90 seconds. AXIOM ingests the structure, not the noise.",
  },
  {
    num: "02",
    title: "Frame the canvas",
    desc: "Sketch the plan with your team. Branch alternates. Pin the receipts. Decide together — async by default.",
  },
  {
    num: "03",
    title: "Ship & measure",
    desc: "Push the spec to the source-of-truth. AXIOM auto-tracks decision velocity and blocker half-life.",
  },
  {
    num: "04",
    title: "Forecast the next sprint",
    desc: "Forecast Mode reads your team's cadence and proposes a realistic next move. Not a roadmap. A plan.",
  },
];

const HowItWorks = () => {
  return (
    <div className="hiw" data-testid="how-it-works">
      {steps.map((s, i) => (
        <div className="hiw-step reveal" key={i} data-testid={`hiw-step-${i}`}>
          <div className="hiw-num">{s.num}</div>
          <div className="hiw-body">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
          <div className="hiw-arrow">
            <ArrowRight size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
