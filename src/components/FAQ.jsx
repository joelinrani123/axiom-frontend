import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    q: "Who is AXIOM built for?",
    a: "Cross-functional product teams between 8 and 400 people who care about decision quality more than ticket count. Design, engineering, ops, and PM all share the same canvas.",
  },
  {
    q: "How is this different from Linear or Notion?",
    a: "Linear ships tickets. Notion stores docs. AXIOM is the connective tissue — the place where the actual decisions happen, with receipts, branches and forecasts. We integrate with both.",
  },
  {
    q: "Is my data safe?",
    a: "SOC 2 Type II, ISO 27001, GDPR + HIPAA ready. Your data is encrypted at rest with AES-256 and in transit with TLS 1.3. Self-hosting available on Enterprise.",
  },
  {
    q: "Can we self-host?",
    a: "Yes — Enterprise customers get a single-tenant deployment in AWS, GCP or your own VPC. Helm charts included.",
  },
  {
    q: "What about pricing for non-profits & students?",
    a: "Free for verified non-profits and education. Email studio@axiom.systems with your domain.",
  },
  {
    q: "How do I migrate from Jira?",
    a: "We have a one-click importer. Tickets, comments, attachments and history come over with their structure intact. White-glove migration included on Studio plans.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq" data-testid="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={i} data-testid={`faq-item-${i}`}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              data-testid={`faq-toggle-${i}`}
              aria-expanded={isOpen}
            >
              <span>
                <span style={{ color: "var(--signal)", marginRight: 16, fontFamily: "IBM Plex Mono", fontSize: 12 }}>
                  0{i + 1}
                </span>
                {it.q}
              </span>
              <span className="faq-toggle">{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
            </button>
            <div className="faq-a">{it.a}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
