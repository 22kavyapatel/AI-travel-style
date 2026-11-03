import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Plane, MapPin, Shirt } from "lucide-react";
import "./HeaderFooter.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          <Plane size={22} />
          <span>TravelStyle AI</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" end>Explore</NavLink>
          <NavLink to="/About">about</NavLink>
          <NavLink to="/MainForm">TravelStyle AI form</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* CTA */}
        <Link to="/Login" className="header-btn">
          <MapPin size={16} />
          login
        </Link>
      </div>
    </header>
  );
}
