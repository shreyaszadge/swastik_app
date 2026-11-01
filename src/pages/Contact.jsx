import Icon from '../components/Icon.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { PageHero } from '../components/Sections.jsx';
import { DEFAULT_WA, SITE, mapsEmbedUrl, mapsOpenUrl } from '../site.js';
import { useDocumentTitle } from '../useDocumentTitle.js';

const FAQ = [
  {
    q: 'What is your daily assembly capacity?',
    a: 'We work at a capacity of 5,000-8,000 assemblies per day, and we are equipped to take your product from prototype to full-scale production.',
  },
  {
    q: 'Which assembly technologies do you offer?',
    a: 'We specialize in both SMD and Through-Hole technologies, using advanced techniques and world-class processes.',
  },
  {
    q: 'Are you ISO certified?',
    a: 'Yes. Swastik Electrotech Automation is an ISO 9001:2015 certified EMS company, and we strictly adhere to the highest standards in Quality Management Systems (QMS).',
  },
  {
    q: 'Do you design PCBs as well as assemble them?',
    a: 'Yes. Our services include PCB Design, PCB Assembling, PCB Board, Printed Circuit Board, PCB stencil manufacturing and box-build integration, as per your requirement.',
  },
  {
    q: 'How do I get a quotation?',
    a: 'Send us your requirement using the form on this page, by WhatsApp, email or phone. We provide featured rate quotations suiting the needs of each client.',
  },
  {
    q: 'Where are you located?',
    a: 'Our facility is at Narhe Industrial Area, Narhe, Pune 411041, Maharashtra. Near Canara Bank.',
  },
];

export default function Contact() {
  useDocumentTitle('Contact Us | Swastik Electrotech Automation');

  return (
    <>
      <PageHero
        crumb="Contact"
        kicker="Contact Us"
        title="Let's build your next board together"
        lead="Have a question or need a custom PCB solution? Reach out to our experts. We're here to help bring your projects to life!"
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="ccards">
            <article className="ccard">
              <span className="tile"><Icon name="phone" /></span>
              <h3>Call us</h3>
              <p>
                <a href={`tel:+91${SITE.phones[0]}`}>{SITE.phones[0]}</a>
                <br />
                <a href={`tel:+91${SITE.phones[1]}`}>{SITE.phones[1]}</a>
              </p>
            </article>
            <article className="ccard">
              <span className="tile"><Icon name="mail" /></span>
              <h3>Email us</h3>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            </article>
            <article className="ccard">
              <span className="tile"><Icon name="pin" /></span>
              <h3>Visit us</h3>
              <p>Narhe Industrial Area, Near Canara Bank, Narhe, Pune 411041</p>
            </article>
          </div>

          <div className="cgrid">
            <QuoteForm id="quote" heading="Send us your requirement" note="Tell us about your PCB project and we will get back to you with a quotation suited to your needs." />

            <div className="cside">
              <div className="mapbox">
                <iframe
                  title="Swastik Electrotech Automation on Google Maps"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="addr">
                <h3>SWASTIK ELECTROTECH AUTOMATION</h3>
                <p>{SITE.address}</p>
                <p className="gst">GSTIN: {SITE.gstin}</p>
                <div className="addr-actions">
                  <a className="btn btn-outline" href={mapsOpenUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps <Icon name="external" />
                  </a>
                  <a className="btn btn-primary" href={DEFAULT_WA} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft" id="faq">
        <div className="wrap faqwrap">
          <div className="sec-head">
            <span className="kicker">Questions</span>
            <h2>Frequently asked questions</h2>
            <p className="lead">Quick answers about capacity, technology and how to get started.</p>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <Icon name="chevron" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="cta slim">
            <div>
              <h2>Want to grow your business? Connect with us here</h2>
            </div>
            <div className="slim-actions">
              <a className="btn btn-white" href={DEFAULT_WA} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <a className="btn btn-line" href={`tel:+91${SITE.phones[0]}`}>Call {SITE.phones[0]}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
