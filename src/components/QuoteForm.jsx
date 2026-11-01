import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, firebaseReady } from '../firebase.js';
import { SITE, waLink } from '../site.js';
import Swal from 'sweetalert2';

// SweetAlert popup that follows the current light / dark theme.
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const popup = (options) =>
  Swal.fire({ background: css('--card'), color: css('--ink'), confirmButtonColor: '#2a21b8', confirmButtonText: 'OK', ...options });
const EMPTY = { name: '', email: '', phone: '', message: '', website: '' }; // "website" is a hidden spam trap

export default function QuoteForm({
  id = 'quote',
  heading = 'Tell us about your PCB project',
  note = 'Fill in the details and send them straight to our team.',
}) {
  const [v, setV] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | invalid
  const set = (key) => (e) => setV((s) => ({ ...s, [key]: e.target.value }));

  const lines = ['Hello Swastik Electrotech Automation,', 'I would like a PCB quote.'];
  if (v.name.trim()) lines.push(`Name: ${v.name.trim()}`);
  if (v.email.trim()) lines.push(`Email: ${v.email.trim()}`);
  if (v.phone.trim()) lines.push(`Contact number: ${v.phone.trim()}`);
  if (v.message.trim()) lines.push(`Requirement: ${v.message.trim()}`);
  const wa = waLink(lines);
  async function onSubmit(e) {
    e.preventDefault();
    if (!firebaseReady) return;
    if (v.website) { setV(EMPTY); return; } // bot filled the hidden field

    const name = v.name.trim();
    const email = v.email.trim();
    const phone = v.phone.trim();
    const message = v.message.trim();
    if (!name || !message || (!email && !phone)) {
      popup({
        icon: 'warning',
        title: 'Please check the form',
        text: 'Enter your name, your message, and either an email or a phone number.',
      });
      return;
    }

    setStatus('sending');
    try {
      // Saved in Firebase console > Firestore Database > enquiries
      await addDoc(collection(db, 'enquiries'), { name, email, phone, message, createdAt: serverTimestamp() });
      setV(EMPTY);
      popup({
        icon: 'success',
        title: 'Data submitted',
        text: 'Thank you! Your message has been sent. We will get back to you soon.',
      });
    } catch (err) {
      console.error(err);
      popup({
        icon: 'error',
        title: 'Could not send',
        text: `Please try again, or call ${SITE.phones[0]} or use WhatsApp.`,
      });
    }
    setStatus('idle');
  }

  return (
    <form className="quote" id={id} onSubmit={onSubmit} autoComplete="on" noValidate>
      <h3>{heading}</h3>
      <p className="note">{note}</p>

      <div className="field">
        <label htmlFor={`${id}-name`}>Your Name</label>
        <input id={`${id}-name`} name="name" type="text" maxLength={100} placeholder="Enter your name" value={v.name} onChange={set('name')} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-email`}>Your Email</label>
        <input id={`${id}-email`} name="email" type="email" maxLength={150} placeholder="Enter your email" value={v.email} onChange={set('email')} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-phone`}>Contact Number</label>
        <input id={`${id}-phone`} name="phone" type="tel" maxLength={30} placeholder="Enter your contact number" value={v.phone} onChange={set('phone')} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-message`}>Your Message</label>
        <textarea id={`${id}-message`} name="message" maxLength={2000} placeholder="Enter your message" value={v.message} onChange={set('message')} />
      </div>

      {/* hidden spam trap: real visitors never see or fill this */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={v.website} onChange={set('website')}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

      {firebaseReady ? (
        <>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <p className="alt">or <a href={wa} target="_blank" rel="noopener noreferrer">chat on WhatsApp</a></p>
        </>
      ) : (
        <>
          <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Send Message on WhatsApp</a>
          <p className="alt">Firebase is not configured yet. See the setup steps.</p>
        </>
      )}

      <p className={`formmsg ${status}`} role="status" aria-live="polite">
        {status === 'sent' && 'Thank you! Your message has been sent. We will get back to you soon.'}
        {status === 'invalid' && 'Please enter your name, your message, and either an email or a phone number.'}
        {status === 'error' && `Sorry, the message could not be sent. Please call ${SITE.phones[0]} or use WhatsApp.`}
      </p>
      <p className={`formmsg ${status}`} role="status" aria-live="polite">
        ...
      </p>
    </form>

  );
}
