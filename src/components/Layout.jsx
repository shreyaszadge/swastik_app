import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { useTheme } from '../theme.jsx';
import { DEFAULT_WA, SITE, mapsOpenUrl } from '../site.js';
import logo from '../assets/logo.png';
import FloatingContact from './FloatingContact.jsx';

function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash, key]);
  return null;
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className="tbtn"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <Icon name={dark ? 'sun' : 'moon'} />
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const cls = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="Swastik Electrotech Automation, home">
          <img src={logo} alt="Swastik Electrotech Automation" width="190" height="48" />
        </Link>
        <nav className="nav-right" aria-label="Main">
          <ul className={`menu${open ? ' open' : ''}`} id="menu">
            <li><NavLink to="/" end className={cls}>Home</NavLink></li>
            <li><NavLink to="/about" className={cls}>About Us</NavLink></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#markets">Markets</Link></li>
            <li><NavLink to="/contact" className={cls}>Contact</NavLink></li>
          </ul>
          <a className="nav-phone" href={`tel:+91${SITE.phones[0]}`}>
            <Icon name="phone" />
            {SITE.phones[0]}
          </a>
          <ThemeToggle />
          <Link className="btn btn-primary nav-cta" to="/contact#quote">Get a Quote</Link>
          <button
            type="button"
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" to="/" aria-label="Swastik Electrotech Automation, home">
              <img src={logo} alt="Swastik Electrotech Automation" width="190" height="48" />
            </Link>
            <p>
              Established in 2013, we are a contractual electronics manufacturing and services provider based in
              Pune. We specialize in assembling all types of PCBs according to vendors' requirements.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#markets">Markets</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Locate Us</h3>
            <address>
              <strong>SWASTIK ELECTROTECH AUTOMATION</strong>
              <span>{SITE.address}</span>
              <span>GSTIN: {SITE.gstin}</span>
              <span>{SITE.phones.join(' | ')}</span>
              <span>{SITE.email}</span>
              <a href={mapsOpenUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </address>
          </div>
        </div>
        <p className="copy">Copyright &copy; {new Date().getFullYear()} Swastik Electrotech Automation</p>
      </div>
    </footer>
  );
}


export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    <FloatingContact/>
    </>
  );
}
