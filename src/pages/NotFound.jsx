import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useDocumentTitle } from '../useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Page not found | Swastik Electrotech Automation');
  return (
    <section className="band notfound">
      <div className="wrap">
        <span className="kicker">Error 404</span>
        <h1>This page is not on the board</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <div className="hero-cta">
          <Link className="btn btn-primary" to="/">Back to Home <Icon name="arrow" /></Link>
          <Link className="btn btn-outline" to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
