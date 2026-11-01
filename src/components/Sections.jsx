import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import QuoteForm from './QuoteForm.jsx';
import { SITE } from '../site.js';
import teamImg from '../assets/team.jpg';
import autoImg from '../assets/auto.jpg';
import instrImg from '../assets/instr.jpg';
import consImg from '../assets/cons.jpg';

export function PageHero({ crumb, kicker, title, lead }) {
  return (
    <section className="phero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function Numbers() {
  return (
    <section className="nums" aria-label="Swastik in numbers">
      <div className="wrap">
        <p className="cap">Swastik by the numbers</p>
        <ul>
          <li><b>2013</b><span>Established in Pune</span></li>
          <li><b>10,000+</b><span>Projects completed</span></li>
          <li><b>5,000-8,000</b><span>Assemblies per day</span></li>
          <li><b>ISO 9001:2015</b><span>Certified EMS company</span></li>
        </ul>
      </div>
    </section>
  );
}

export function WhySection({ withHead = true }) {
  return (
    <section className="band" id="why">
      <div className="wrap">
        {withHead && (
          <div className="sec-head center">
            <span className="kicker">Company at a glance</span>
            <h2>Why manufacturers choose Swastik</h2>
            <p className="lead">
              A contractual electronic manufacturing services company in Pune. We assemble all kinds of PCBs as per
              vendor's requirement, with experienced employees and well-equipped, upgraded machinery.
            </p>
          </div>
        )}
        <div className="why3">
          <article className="wcard">
            <span className="tile"><Icon name="shield" /></span>
            <h3>Quality Assembling Processing</h3>
            <p>Experienced employees, upgraded machinery and strict adherence to the highest standards in Quality Management Systems.</p>
          </article>
          <article className="wcard">
            <span className="tile"><Icon name="bolt" /></span>
            <h3>Speedy Delivery</h3>
            <p>We focus on bulk quantity output in the minimum possible duration, so you can move rapidly and reach the market sooner.</p>
          </article>
          <article className="wcard">
            <span className="tile"><Icon name="trend" /></span>
            <h3>Affordable Pricing</h3>
            <p>Competitive pricing tailored to the specific needs of each client, with quotations suited to your project.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="band" id="process">
      <div className="wrap split">
        <div>
          <div className="tracker" role="group" aria-label="Example of an order moving through production">
            <header><b>Your order, step by step</b><em>Example</em></header>
            <ol>
              <li className="done"><span className="dot"><Icon name="check" /></span><strong>Requirement received</strong><span className="st">Done</span></li>
              <li className="done"><span className="dot"><Icon name="check" /></span><strong>Quotation sent</strong><span className="st">Done</span></li>
              <li className="done"><span className="dot"><Icon name="check" /></span><strong>Prototype approved</strong><span className="st">Done</span></li>
              <li className="cur"><span className="dot now"></span><strong>Production run</strong><span className="st">In progress</span></li>
              <li><span className="dot next"></span><strong>Speedy delivery</strong><span className="st">Next</span></li>
            </ol>
            <div className="badge"><Icon name="rocket" />Prototype to full-scale</div>
          </div>
        </div>
        <div>
          <span className="kicker">Expertise you can trust</span>
          <h2>From a model to a regular production run</h2>
          <div className="rows">
            <div className="row"><span className="tile"><Icon name="rocket" /></span><div><h3>Prototype to full-scale</h3><p>With the right workforce, advanced equipment and extensive expertise, we transition your product from prototype to full-scale production.</p></div></div>
            <div className="row"><span className="tile"><Icon name="chip" /></span><div><h3>No job too big or too small</h3><p>We work at a capacity of 5,000-8,000 assemblies per day.</p></div></div>
            <div className="row"><span className="tile"><Icon name="shield" /></span><div><h3>ISO 9001:2015 certified</h3><p>As an ISO 9001:2015 certified EMS company, we hold to the highest standards of Quality Management Systems.</p></div></div>
            <div className="row"><span className="tile"><Icon name="check" /></span><div><h3>Non-IP holding company</h3><p>We do not produce proprietary products. Our focus is your product.</p></div></div>
          </div>
          <Link className="btn btn-primary" to="/contact#quote">Request a Quote <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}

export function Markets() {
  const items = [
    { name: 'Automobile', img: autoImg, alt: 'Automotive electronics', w: 698 },
    { name: 'Instrumentation', img: instrImg, alt: 'Instrumentation circuit board', w: 700 },
    { name: 'Consumer Electronics', img: consImg, alt: 'Consumer electronics assembly line', w: 702 },
  ];
  return (
    <section className="band soft" id="markets">
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">Markets served</span>
          <h2>Integrated design and manufacturing for your industry</h2>
          <p className="lead">
            Swastik Electrotech Automation brings extensive expertise in providing integrated design and manufacturing
            solutions tailored to a diverse range of industries.
          </p>
        </div>
        <div className="markets">
          {items.map((m) => (
            <figure className="mk" key={m.name}>
              <img src={m.img} alt={m.alt} width={m.w} height="278" loading="lazy" />
              <figcaption>{m.name}<i><Icon name="arrow" /></i></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection({ id = 'team' }) {
  return (
    <section className="band" id={id}>
      <div className="wrap team">
        <figure>
          <img src={teamImg} alt="Swastik Electrotech team members working on PCB assembly" width="506" height="378" loading="lazy" />
          <span className="chip">Young. Passionate. Experienced.</span>
        </figure>
        <div>
          <span className="kicker">The people behind our success</span>
          <h2>Success through excellence</h2>
          <p className="lead">
            We are a rapidly growing Electronics Design and Manufacturing Services company, with significant expansion
            in both the domestic and export markets.
          </p>
          <p className="lead">
            Our belief in the power of great people is the foundation of how we operate every day. Our team has
            expertise in every phase of product development, backed by years of collective experience in the
            electronics industry.
          </p>
          <div className="three">
            <div><b>Expert Team Members</b><span>Every employee plays a crucial role.</span></div>
            <div><b>Solution For Business</b><span>Cost-effective, client-focused solutions.</span></div>
            <div><b>World Class EMS Provider</b><span>Business development and strategic advisory.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ id = 'contact', formId = 'quote' }) {
  return (
    <section id={id}>
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Want to grow your business? Connect with us here</h2>
            <p className="lead">
              Have a question or need a custom PCB solution? Reach out to our experts. We're here to help bring your
              projects to life!
            </p>
            <ul>
              <li><span className="tile"><Icon name="phone" /></span><span className="sel">{SITE.phones.join(' | ')}</span></li>
              <li><span className="tile"><Icon name="mail" /></span><span className="sel">{SITE.email}</span></li>
              <li><span className="tile"><Icon name="pin" /></span><span>Survey No. 36 1/2/4 Narhe Industrial Area, Near Canara Bank, Narhe, Pune 411041, Maharashtra, India</span></li>
            </ul>
          </div>
          <QuoteForm id={formId} />
        </div>
      </div>
    </section>
  );
}
