import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DEFAULT_WA, SITE } from '../site.js';

/* Replace the three social URLs with your real pages. */
const SOCIAL = {
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/',
};

const ICONS = {
  whatsapp:
    'M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.02L4 29l8.14-1.56a12.03 12.03 0 0 0 3.9.64h.01C22.68 28.08 28 22.68 28 16.05 28 9.4 22.68 3 16.04 3Zm0 22.03h-.01c-1.18 0-2.34-.32-3.35-.92l-.24-.14-4.83.93.96-4.71-.16-.25a9.93 9.93 0 0 1-1.52-5.3c0-5.5 4.47-9.97 9.98-9.97 5.5 0 9.97 4.47 9.97 9.98 0 5.5-4.47 9.98-9.97 9.98Zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z',
  instagram:
    'M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9ZM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  linkedin:
    'M5.2 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.6 8.8h3.2V20H3.6V8.8Zm5.2 0h3v1.5h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V20h-3.2v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H8.8V8.8Z',
  facebook:
    'M13.5 21v-7.8h2.6l.4-3.1h-3V8.2c0-.9.3-1.5 1.5-1.5h1.6V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.8v3.1h2.6V21h3.1Z',
  mail: 'M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l7 4.7 7-4.7V7H5Zm14 10V9.9l-7 4.7-7-4.7V17h14Z',
  phone: 'M6.6 3h3l1.5 4-2 1.3a10 10 0 0 0 5.6 5.6l1.3-2 4 1.5v3A2.6 2.6 0 0 1 17.4 19C10 19 5 14 5 6.6A2.6 2.6 0 0 1 6.6 3Z',
  close: 'M6 6l12 12M18 6L6 18',
  chat: 'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
};

function Svg({ name, stroke }) {
  return (
    <svg viewBox="0 0 32 32" className="fc2-svg" aria-hidden="true" focusable="false">
      {name === 'whatsapp' ? (
        <path d={ICONS.whatsapp} />
      ) : (
        <g transform="translate(4 4)">
          {stroke ? <path d={ICONS[name]} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /> : <path d={ICONS[name]} />}
        </g>
      )}
    </svg>
  );
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onDown = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const ext = { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <div className={`fc2${open ? ' open' : ''}`} ref={box}>
      <div className="fc2-panel" id="fc2-panel" role="dialog" aria-label="Contact options" hidden={!open}>
        <div className="fc2-head">
          <b>Connect with us</b>
          <span>We usually reply the same day</span>
        </div>
        <ul>
          <li><a href={DEFAULT_WA} {...ext} className="c-wa"><i><Svg name="whatsapp" /></i>WhatsApp</a></li>
          <li><a href={SOCIAL.instagram} {...ext} className="c-ig"><i><Svg name="instagram" /></i>Instagram</a></li>
          <li><a href={SOCIAL.linkedin} {...ext} className="c-in"><i><Svg name="linkedin" /></i>LinkedIn</a></li>
          <li><a href={SOCIAL.facebook} {...ext} className="c-fb"><i><Svg name="facebook" /></i>Facebook</a></li>
          <li><a href={`mailto:${SITE.email}`} className="c-ml"><i><Svg name="mail" /></i>Email us</a></li>
          <li><a href={`tel:+91${SITE.phones[0]}`} className="c-ph"><i><Svg name="phone" /></i>Call {SITE.phones[0]}</a></li>
        </ul>
        <Link to="/contact" className="fc2-cta" onClick={() => setOpen(false)}>Open Contact page</Link>
      </div>

      <button
        type="button"
        className="fc2-btn"
        aria-expanded={open}
        aria-controls="fc2-panel"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="fc2-ic fc2-chat"><Svg name="chat" stroke /></span>
        <span className="fc2-ic fc2-x"><Svg name="close" stroke /></span>
        {!open && <span className="fc2-ping" aria-hidden="true" />}
      </button>
    </div>
  );
}
