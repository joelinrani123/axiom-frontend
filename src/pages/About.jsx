import StatsSection from "@/components/StatsSection";

const values = [
  {
    num: "01",
    title: "Receipts over rhetoric",
    desc: "Every claim we make has a number behind it. Every decision in AXIOM has a stamp.",
  },
  {
    num: "02",
    title: "Boring tech, sharp design",
    desc: "Postgres, Go, plain HTML. Reserve the wild swings for the typography.",
  },
  {
    num: "03",
    title: "Async by default",
    desc: "Meetings are a tax. We try to pay as little of it as possible.",
  },
];

const About = () => {
  return (
    <div data-testid="about-page">
      <section className="page-header">
        <div className="container-x">
          <span className="overline">[04 / Studio — small, opinionated, here for years]</span>
          <h1 className="page-title">
            We build<br />
            <span className="ital">tools</span> for<br />
            craft.
          </h1>
          <p className="page-sub">
            AXIOM Systems is a 19-person studio in Brooklyn. We've been
            shipping software for ambitious teams since 2021. We don't take
            VC money, we don't sell ads, and we don't believe in dashboards
            for the sake of dashboards.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="about-grid">
            <p className="about-text reveal">
              We started AXIOM after running design ops at a 400-person studio
              and watching the same five problems eat 30% of the calendar:
              status meetings, ticket archeology, decision drift, tool sprawl,
              and the slow death of receipts. We built the tool we wanted —
              one canvas, one source of truth, one set of receipts — and
              shipped it to friends. They told friends. Here we are.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-cell reveal" key={i} data-testid={`value-${i}`}>
                <div className="value-num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="section-head reveal">
            <div className="label">
              <span className="label-num">[05]</span>
              <span className="overline" style={{ color: "var(--ink-soft)" }}>
                Numbers
              </span>
            </div>
            <h2>The state of<br />the studio.</h2>
            <p className="desc">Public dashboard, updated quarterly.</p>
          </div>
          <StatsSection />
        </div>
      </section>
    </div>
  );
};

export default About;
