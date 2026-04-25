import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Solo",
    monthly: 0,
    yearly: 0,
    blurb: "For founders & one-person studios.",
    cta: "Start free",
    features: [
      "1 workspace, unlimited canvases",
      "3 integrations",
      "Decision receipts (last 30 days)",
      "Community support",
    ],
  },
  {
    name: "Studio",
    monthly: 29,
    yearly: 24,
    blurb: "Most teams pick this. So should you.",
    featured: true,
    cta: "Start 14-day trial",
    features: [
      "Unlimited workspaces & canvases",
      "All integrations + API",
      "Forecast Mode (beta)",
      "Unlimited decision receipts",
      "Priority support, 4-hour SLA",
      "SOC 2 Type II",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    blurb: "For 100+ seats. Self-host on your VPC.",
    cta: "Talk to us",
    features: [
      "Everything in Studio",
      "SSO / SAML / SCIM",
      "Self-hosted (AWS / GCP / on-prem)",
      "Dedicated success engineer",
      "Custom DPA & MSA",
      "99.99% uptime SLA",
    ],
  },
];

const PricingTable = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <div data-testid="pricing-table">
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div className="pricing-toggle">
          <button
            className={!yearly ? "active" : ""}
            onClick={() => setYearly(false)}
            data-testid="pricing-monthly-btn"
          >
            Monthly
          </button>
          <button
            className={yearly ? "active" : ""}
            onClick={() => setYearly(true)}
            data-testid="pricing-yearly-btn"
          >
            Yearly · −20%
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => {
          const price = yearly ? p.yearly : p.monthly;
          return (
            <div
              className={`price-card ${p.featured ? "featured" : ""}`}
              key={i}
              data-testid={`pricing-card-${p.name.toLowerCase()}`}
            >
              {p.featured && <span className="price-badge">Most picked</span>}
              <div className="price-name">{p.name}</div>
              <p style={{ margin: 0, opacity: 0.75, fontSize: 14, lineHeight: 1.5 }}>{p.blurb}</p>

              <div className="price-amount">
                {price === null ? (
                  <>
                    <span className="num">Custom</span>
                  </>
                ) : (
                  <>
                    <span className="num">${price}</span>
                    <span className="per">/ seat / mo</span>
                  </>
                )}
              </div>

              <Link
                to="/contact"
                className={`btn ${p.featured ? "btn-primary" : "btn-dark"}`}
                data-testid={`pricing-cta-${p.name.toLowerCase()}`}
              >
                {p.cta} <ArrowUpRight size={14} />
              </Link>

              <ul className="price-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <span className="check">
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTable;
