// Import link components from react-router-dom for navigation
import { Link, NavLink } from "react-router-dom";
// Importing the logo image for the Navbar
import logo from "../assets/logo.svg";

// Component for the navigation bar that includes links to different sections of the portfolio
export default function Navbar() {
  return (
    <header className="navbar">
      {/* Brand logo and name that links to the home page */}
      <Link to="/" className="brand">
        <img src={logo} alt="Custom Portfolio Logo" className="logo" width="34" height="34" />
        <span className="brand-name">Kyle Ellis</span>
      </Link>

      {/* Navigation links to different pages of the portfolio */}
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}