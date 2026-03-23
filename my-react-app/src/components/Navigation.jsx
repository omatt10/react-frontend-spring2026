import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        className={"nav-toggle" + (isOpen ? " open" : "")}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="main-nav" className={isOpen ? "open" : ""}>
        <Link to="/" className={isActive("/")} onClick={close}>
          Home
        </Link>
        <Link
          to="/calculator"
          className={isActive("/calculator")}
          onClick={close}
        >
          Calculator
        </Link>
        <Link to="/exercise" className={isActive("/exercise")} onClick={close}>
          Exercise
        </Link>
        <Link
          to="/nutrition"
          className={isActive("/nutrition")}
          onClick={close}
        >
          Nutrition
        </Link>
        <Link to="/contact" className={isActive("/contact")} onClick={close}>
          Contact
        </Link>
        <Link to="/about" className={isActive("/about")} onClick={close}>
          About Us
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
