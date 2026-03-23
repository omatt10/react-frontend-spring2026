import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Core Metrics</span>
          <p>Track progress. See change.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/exercise">Exercise</Link>
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <p className="footer-copy">
          &copy; 2025 Core Metrics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
