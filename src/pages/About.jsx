import Icon from '../components/Icon.jsx';
import { CtaBand, Markets, Numbers, PageHero, TeamSection } from '../components/Sections.jsx';
import { SITE } from '../site.js';
import { useDocumentTitle } from '../useDocumentTitle.js';

const FACTS = [
  ['Established', '2013'],
  ['Based in', 'Narhe Industrial Area, Pune'],
  ['Certification', 'ISO 9001:2015 certified EMS company (QMS)'],
  ['Capacity', '5,000-8,000 assemblies per day'],
  ['Technology', 'SMD and Through-Hole'],
  ['Projects completed', '10,000+'],
  ['Business model', 'Non-IP holding company'],
  ['GSTIN', SITE.gstin],
];

const VALUES = [
  { icon: 'shield', title: 'Quality Assembling Processing', text: 'Our first specialty. Experienced employees and well-equipped, upgraded machinery, held to the highest standards of Quality Management Systems.' },
  { icon: 'bolt', title: 'Speedy Delivery', text: 'Our second specialty. We focus on bulk quantity output in the minimum possible duration, so idle time never costs you the opportunity.' },
  { icon: 'users', title: 'Long-term relationships', text: 'We have gained strong clients with long-term relationships of service, and we want to work with companies looking for long-term business.' },
  { icon: 'trend', title: 'Affordable pricing', text: 'We export our products to the Indian subcontinent at affordable prices, with quotations suited to the specific needs of each client.' },
];

export default function About() {
  useDocumentTitle('About Us | Swastik Electrotech Automation');

  return (
    <>
      <PageHero
        crumb="About Us"
        kicker="About Us"
        title="Built on quality assembling and speedy delivery"
        lead="Established in 2013, Swastik Electrotech Automation is a contractual electronic manufacturing services company located in Pune. The company was incorporated with the dreams of serving excellence with perfection."
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap about">
          <div>
            <span className="kicker">Company at a glance</span>
            <h2>We assemble all kinds of PCBs, as per your requirement</h2>
            <p className="lead">
              We are engaged in manufacturing, supplying and trading PCB circuits and leading electrical automation
              solutions. Our entire product and service collection includes PCB Design, PCB Assembling, PCB Board,
              Printed Circuit Board, PCB Reverse, and many more.
            </p>
            <p className="lead">
              The company has gained strong clients with long-term relationships of services. We are interested in
              dealing with all those companies who are looking for long-term business, and we are focusing on
              availing bulk quantity output in the minimum possible duration.
            </p>
            <p className="lead">
              While you are presenting another item, you want to rapidly move. You cannot stand to compromise, on the
              grounds that sitting around idly and driving up expenses to fix mistakes or defects can mean losing the
              opportunity you were attempting to seize. You will get a team that is dedicated to reducing your time to
              market.
            </p>
          </div>
          <aside className="sheet" aria-label="Company facts">
            <h3>Swastik / Company facts</h3>
            <dl>
              {FACTS.map(([k, v]) => (
                <div className="frow2" key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <Numbers />

      <section className="band">
        <div className="wrap">
          <div className="sec-head center">
            <span className="kicker">What we stand for</span>
            <h2>Our specialties and promises</h2>
          </div>
          <div className="vals">
            {VALUES.map((v) => (
              <article className="wcard" key={v.title}>
                <span className="tile"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band soft">
        <div className="wrap split">
          <div>
            <span className="kicker">Expertise you can trust</span>
            <h2>No occupation is too huge or excessively little</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              We have the labor, hardware and experience to change your item from a model to a regular creation run.
              The satisfaction of our clients with regards to the quality and cost efficiency for services is our
              supreme.
            </p>
          </div>
          <div className="rows" style={{ margin: 0 }}>
            <div className="row"><span className="tile"><Icon name="chip" /></span><div><h3>5,000-8,000 assemblies per day</h3><p>We provide the featured rate quotations suiting the needs of respective clients.</p></div></div>
            <div className="row"><span className="tile"><Icon name="shield" /></span><div><h3>ISO 9001:2015 certified EMS company</h3><p>We strictly adhere to the highest standards in Quality Management Systems (QMS).</p></div></div>
            <div className="row"><span className="tile"><Icon name="rocket" /></span><div><h3>Prototype to full-scale production</h3><p>With the right workforce, advanced equipment and extensive expertise, we transition your product from prototype to full-scale production.</p></div></div>
            <div className="row"><span className="tile"><Icon name="design" /></span><div><h3>Expert design team</h3><p>Our expert and dynamic design team leverages advanced techniques and world-class processes in both SMD and Through-Hole technologies.</p></div></div>
          </div>
        </div>
      </section>

      <TeamSection id="team" />
      <Markets />
      <CtaBand />
    </>
  );
}
