import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { toast, Toaster } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed. Welcome to the inbox cult.");
    setEmail("");
  };

  return (
    <footer className="cta-shout" data-testid="footer">
      <Toaster position="bottom-right" richColors />
      <div className="container-x">
        <div className="overline" style={{ color: "#999" }} />
        <p className="cta-headline">
          LET'S<br />
          BUILD<br />
          <span className="ital">something</span><br />
          REAL.
        </p>

        <div className="cta-row">
          <div className="col col-6">
            <h4>Newsletter — Field Notes</h4>
            <form className="newsletter" onSubmit={submit} data-testid="newsletter-form">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="newsletter-email-input"
              />
              <button type="submit" data-testid="newsletter-submit-btn">
                Subscribe <ArrowUpRight size={12} style={{ marginLeft: 6, verticalAlign: "middle" }} />
              </button>
            </form>
            <p style={{ color: "#999", fontSize: 13, marginTop: 18, lineHeight: 1.5, maxWidth: 380 }}>
              One letter, every two weeks. System design, decision logs, and the occasional rant. No fluff.
            </p>
          </div>

          <div className="col col-3">
            <h4>Product</h4>
            <Link to="/features" data-testid="footer-link-features">Features</Link>
            <Link to="/pricing" data-testid="footer-link-pricing">Pricing</Link>
            <a href="#changelog" data-testid="footer-link-changelog">Changelog</a>
            <a href="#status" data-testid="footer-link-status">Status</a>
          </div>

          <div className="col col-3">
            <h4>Studio</h4>
            <Link to="/about" data-testid="footer-link-about">About</Link>
            <Link to="/contact" data-testid="footer-link-contact">Contact</Link>
            <a href="#careers" data-testid="footer-link-careers">Careers</a>
            <a href="#press" data-testid="footer-link-press">Press</a>
          </div>
        </div>

        <div className="cta-base">
          <span>© 2026 AXIOM Systems Inc. — Made in India(Joelin)</span>
          <span>v 4.2 — Build</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
