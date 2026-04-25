import FeaturesBento from "@/components/FeaturesBento";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";

const Features = () => {
  return (
    <div data-testid="features-page">
      <section className="page-header">
        <div className="container-x">
          <span className="overline">[02 / Capabilities — every primitive in the system]</span>
          <h1 className="page-title">
            The <span className="ital">whole</span><br />
            kit.
          </h1>
          <p className="page-sub">
            AXIOM ships eleven primitives, six core surfaces and a small army of
            integrations. Below is the short version. The long version is a
            14-page PDF — email us if you want it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <FeaturesBento />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="section-head reveal">
            <div className="label">
              <span className="label-num">[03]</span>
              <span className="overline" style={{ color: "var(--ink-soft)" }}>
                Workflow
              </span>
            </div>
            <h2>How it slots in.</h2>
            <p className="desc">Drop AXIOM in on a Monday. Decommission three tools by Friday.</p>
          </div>
          <HowItWorks />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="section-head reveal">
            <div className="label">
              <span className="label-num">[04]</span>
              <span className="overline" style={{ color: "var(--ink-soft)" }}>
                Impact
              </span>
            </div>
            <h2>What it does to the metrics.</h2>
            <p className="desc">Aggregated impact across 12k+ teams.</p>
          </div>
          <StatsSection />
        </div>
      </section>
    </div>
  );
};

export default Features;
