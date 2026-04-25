import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" data-testid="hero-section">
      <div className="container-x">
        <div className="hero-grid">
          <div className="hero-meta">
            <span className="tag" data-testid="hero-tag">
              <span className="tag-dot" />
              v4.2 — Now with Forecast Mode
            </span>
            <span className="overline" style={{ color: "var(--ink-soft)" }}>
              [01 / Operating system for ambitious teams]
            </span>
          </div>

          <h1 className="hero-title" data-testid="hero-title">
            Run the<br />
            <span className="accent">unscalable</span><br />
            <span className="underline-mark">part of work.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-lede" data-testid="hero-lede">
              AXIOM is the workflow OS for design, ops & engineering teams that
              treat their work like a craft. One canvas. Zero ceremony. Receipts on every call.
            </p>

            <div className="hero-cta">
              <Link to="/pricing" className="btn btn-primary" data-testid="hero-primary-cta">
                Start free trial <ArrowUpRight size={14} />
              </Link>
              <a href="#demo" className="btn" data-testid="hero-secondary-cta">
                <Play size={12} fill="currentColor" /> Watch the 90s tour
              </a>
            </div>

            <div className="hero-stat" data-testid="hero-stat">
              <div className="num">12.4k</div>
              <div className="lbl">Teams shipping<br />on AXIOM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
