const stats = [
  { num: "12.4", unit: "k", label: "Teams using AXIOM\nin 47 countries" },
  { num: "94", unit: "%", label: "Reduction in\nstatus meetings" },
  { num: "3.2", unit: "x", label: "Faster time-to-decision\nvs. legacy tools" },
  { num: "412", unit: "M", label: "Tasks shipped\nin the last 12 months" },
];

const StatsSection = () => {
  return (
    <div className="stats reveal" data-testid="stats-section">
      {stats.map((s, i) => (
        <div className="stat-cell" key={i} data-testid={`stat-${i}`}>
          <div className="stat-num">
            {s.num}
            <span className="unit">{s.unit}</span>
          </div>
          <div className="stat-label" style={{ whiteSpace: "pre-line" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
