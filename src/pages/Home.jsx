import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import HeroViz from '../components/HeroViz.jsx';
import { CtaBand, Markets, Numbers, ProcessSection, TeamSection, WhySection } from '../components/Sections.jsx';
import { SITE } from '../site.js';
import { useDocumentTitle } from '../useDocumentTitle.js';

const FEATURES = [
  { icon: 'design', title: 'PCB Design', text: 'An expert, dynamic design team.', on: true },
  { icon: 'chip', title: 'PCB Assembling', text: 'SMD and Through-Hole, first-time-right.' },
  { icon: 'grid', title: 'Stencil Manufacturing', text: 'Stencils made to suit your boards.' },
  { icon: 'box', title: 'Box-Build', text: 'End-to-end assembly and integration.' },
];

export default function Home() {
  useDocumentTitle('Swastik Electrotech Automation | Electronic Manufacturing Services in Pune, India');

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div>
            <p className="pill"><i></i>Leading Electronic Manufacturing Services in India</p>
            <h1>Quality Assembling. <span>Speedy Delivery.</span></h1>
            <p className="sub">We specialize in manufacturing and assembling all types of PCBs as per client requirements.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/contact#quote">Get a Quote <Icon name="arrow" /></Link>
              <a className="btn btn-outline" href={`tel:+91${SITE.phones[0]}`}><Icon name="phone" />Call {SITE.phones[0]}</a>
            </div>
            <ul className="ticks">
              <li><Icon name="check" />ISO 9001:2015 certified</li>
              <li><Icon name="check" />SMD + Through-Hole</li>
              <li><Icon name="check" />Serving clients since 2013</li>
            </ul>
          </div>
          <HeroViz />
        </div>
      </section>

      <section className="frow" aria-label="Core services">
        <div className="wrap">
          <ul>
            {FEATURES.map((f) => (
              <li key={f.title}>
                <Link className={`fcard${f.on ? ' on' : ''}`} to="/#services">
                  <span className="tile"><Icon name={f.icon} /></span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <span className="go"><Icon name="arrow" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Numbers />
      <WhySection />

      <section className="band soft" id="services">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">What we do</span>
            <h2>Everything your board needs, under one roof</h2>
            <p className="lead">Our entire product and service collection, as per your requirement.</p>
          </div>
          <div className="bento">
            <article className="b s3 dark">
              <span className="tile"><Icon name="chip" /></span>
              <h3>PCB Assembling</h3>
              <p>Our core strength. World-class processes in both SMD and Through-Hole technologies, so you receive top-quality, first-time-right products.</p>
              <div className="tags"><em>SMD</em><em>Through-Hole</em><em>5,000-8,000 / day</em></div>
            </article>
            <article className="b s3">
              <span className="tile"><Icon name="design" /></span>
              <h3>PCB Design</h3>
              <p>An expert and dynamic design team that uses advanced techniques to turn your requirement into a board ready to build.</p>
            </article>
            <article className="b s2">
              <span className="tile"><Icon name="layers" /></span>
              <h3>Printed Circuit Boards</h3>
              <p>PCB circuits manufactured, supplied and traded to your specification.</p>
            </article>
            <article className="b s2">
              <span className="tile"><Icon name="grid" /></span>
              <h3>PCB Stencil Manufacturing</h3>
              <p>Stencils for your assembly runs, made to suit your board.</p>
            </article>
            <article className="b s2">
              <span className="tile"><Icon name="box" /></span>
              <h3>Box-Build Integration</h3>
              <p>Comprehensive end-to-end PCB assembly and box-build integration for your finished product.</p>
            </article>
            <article className="b s6 wide">
              <div className="lhs">
                <span className="tile"><Icon name="wrench" /></span>
                <div>
                  <h3>PCB Assembly Job Work and more</h3>
                  <p>No task is too big or too small. PCB reverse work and many more services are available as per your requirement.</p>
                </div>
              </div>
              <Link className="btn btn-primary" to="/contact#quote">Talk to our experts <Icon name="arrow" /></Link>
            </article>
          </div>
        </div>
      </section>

      <ProcessSection />
      <Markets />
      <TeamSection />
      <CtaBand />
    </>
  );
}
