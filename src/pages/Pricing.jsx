import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";

const Pricing = () => {
  return (
    <div data-testid="pricing-page">
      <section className="page-header">
        <div className="container-x">
          <span className="overline">[03 / Pricing — flat, transparent, refundable]</span>
          <h1 className="page-title">
            Pay for the<br />
            <span className="ital">work.</span>
          </h1>
          <p className="page-sub">
            No per-feature unlocks. No "contact sales" on plans under 100 seats.
            14-day full-access trial. Cancel any time, get the unused balance back.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <PricingTable />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="section-head reveal">
            <div className="label">
              <span className="label-num">[04]</span>
              <span className="overline" style={{ color: "var(--ink-soft)" }}>
                Pricing FAQ
              </span>
            </div>
            <h2>The fine print.<br />Read it.</h2>
            <p className="desc">No surprises. Promise.</p>
          </div>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
