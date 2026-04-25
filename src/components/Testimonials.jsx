const items = [
  {
    quote:
      "We replaced four tools with AXIOM in a week. Our weekly syncs went from 90 minutes to a 6-minute scroll.",
    name: "Maya Bertrand",
    role: "Head of Design, Northwind",
    img: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzAzMzc5M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "Forecast Mode is the first AI feature I've kept turned on for more than a week. It's eerily accurate.",
    name: "David Okafor",
    role: "Eng Director, Calyx Labs",
    img: "https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzAzMzc5M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "The receipts feature alone paid for the contract. I can prove who decided what and when, without spelunking through Slack.",
    name: "Hugo Salinas",
    role: "COO, Atlas Hardware",
    img: "https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const Testimonials = () => {
  return (
    <div className="tgrid" data-testid="testimonials">
      {items.map((t, i) => (
        <div className="tcard reveal" key={i} data-testid={`testimonial-${i}`}>
          <p className="tcard-quote">"{t.quote}"</p>
          <div className="tcard-bottom">
            <img src={t.img} alt={t.name} className="tcard-avatar" />
            <div>
              <div className="tcard-name">{t.name}</div>
              <div className="tcard-role">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
