const items = [
  "FIGMA",
  "LINEAR",
  "VERCEL",
  "RAYCAST",
  "RETOOL",
  "SUPABASE",
  "NOTION",
  "ARC",
  "ANTHROPIC",
  "POSTHOG",
];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="marquee" data-testid="logo-marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
