import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Index", end: true },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar" data-testid="navbar">
      <div className="container-x">
        <div className="navbar-inner">
          <Link to="/" className="brand" data-testid="brand-logo" onClick={() => setOpen(false)}>
            <span className="brand-mark" />
            AXIOM
          </Link>

          <nav className="nav-links" data-testid="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn-primary nav-cta" data-testid="nav-cta-btn">
            Book Demo <ArrowUpRight size={14} />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            data-testid="menu-toggle-btn"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" data-testid="mobile-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            data-testid="mobile-nav-cta-btn"
          >
            Book Demo <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
