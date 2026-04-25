import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturesBento from "@/components/FeaturesBento";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const SectionHead = ({ num, label, title, desc }) => (
  <div className="section-head reveal">
    <div className="label">
      <span className="label-num">{num}</span>
      <span className="overline" style={{ color: "var(--ink-soft)" }}>
        {label}
      </span>
    </div>
    <h2>{title}</h2>
    <p className="desc">{desc}</p>
  </div>
);

const Home = () => {
  return (
    <div data-testid="home-page">
      <Hero />
      <Marquee />

      <section className="section" data-testid="features-section">
        <div className="container-x">
          <SectionHead
            num="[02]"
            label="Capabilities"
            title={
              <>
                Six tools.<br />
                One <span className="text-signal" style={{ fontStyle: "italic" }}>spine.</span>
              </>
            }
            desc="No tool soup. Every feature feeds the same canvas, the same receipts, the same forecast."
          />
          <FeaturesBento />
        </div>
      </section>

      <section className="section" data-testid="how-section">
        <div className="container-x">
          <SectionHead
            num="[03]"
            label="The Flow"
            title={
              <>
                Connect. Frame.<br />
                Ship. Repeat.
              </>
            }
            desc="A four-step rhythm your team can hold for years, not weeks."
          />
          <HowItWorks />
        </div>
      </section>

      <section className="section" data-testid="stats-section-wrapper">
        <div className="container-x">
          <SectionHead
            num="[04]"
            label="Receipts"
            title={
              <>
                Numbers that<br />
                actually move.
              </>
            }
            desc="Aggregated across every team running on AXIOM, last 12 months."
          />
          <StatsSection />
        </div>
      </section>

      <section className="section" data-testid="testimonials-section">
        <div className="container-x">
          <SectionHead
            num="[05]"
            label="In the wild"
            title={
              <>
                Operators.<br />
                Not influencers.
              </>
            }
            desc="Real teams, real receipts. Click a card to read the case study."
          />
          <Testimonials />
        </div>
      </section>

      <section className="section" data-testid="faq-section">
        <div className="container-x">
          <SectionHead
            num="[06]"
            label="FAQ"
            title={
              <>
                Honest<br />
                answers.
              </>
            }
            desc="If something's missing, hit the contact page. A human replies within 4 hours."
          />
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Home;
