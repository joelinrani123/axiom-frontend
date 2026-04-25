import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@") || !form.message) {
      toast.error("Name, email, and message are required.");
      return;
    }
    toast.success("Got it. A human replies within 4 working hours.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div data-testid="contact-page">
      <Toaster position="bottom-right" richColors />
      <section className="page-header">
        <div className="container-x">
          <span className="overline">[05 / Contact — humans on the other end]</span>
          <h1 className="page-title">
            Say<br />
            <span className="ital">hi.</span>
          </h1>
          <p className="page-sub">
            Demos, questions, partnerships, weird ideas. The form below routes
            straight to a real person. Reply within 4 working hours, or your
            first month is on us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="overline" style={{ color: "var(--ink-soft)" }}>
                [Studio HQ]
              </span>
              <p
                style={{
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: 36,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  margin: "20px 0 0",
                  fontWeight: 600,
                }}
              >
                238 Berry St,<br />
                Brooklyn, NY 11211
              </p>

              <div className="contact-info-block">
                <h4>General</h4>
                <p>hello@axiom.systems</p>
              </div>
              <div className="contact-info-block">
                <h4>Sales — 100+ seats</h4>
                <p>studio@axiom.systems</p>
              </div>
              <div className="contact-info-block">
                <h4>Press</h4>
                <p>press@axiom.systems</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit} data-testid="contact-form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  data-testid="contact-name-input"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  data-testid="contact-email-input"
                />
              </div>
              <div className="field">
                <label htmlFor="company">Company (optional)</label>
                <input
                  id="company"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Northwind Studio"
                  data-testid="contact-company-input"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us what you need."
                  data-testid="contact-message-input"
                />
              </div>
              <button type="submit" className="btn btn-primary" data-testid="contact-submit-btn">
                Send message <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
