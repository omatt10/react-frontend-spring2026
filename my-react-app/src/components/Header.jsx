import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import "../css/Header.css";

const Header = () => {
  return (
    <header id="main-header">
      <Link to="/" className="logo">
        <img src="images/logo.png" alt="Logo" />
        <span>Core Metrics</span>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
