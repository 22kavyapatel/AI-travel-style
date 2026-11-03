import React from "react";
import { Instagram, Twitter, Github, Mail } from "lucide-react";
import "./HeaderFooter.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>TravelAI</h3>
          <p>Smart travel planning with AI-powered fashion & essentials.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="/">Explore</a>
          <a href="/destinations">Destinations</a>
          <a href="/fashion">AI Stylist</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <Instagram />
          <Twitter />
          <Github />
          <Mail />
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} TravelAI. All rights reserved.
      </p>
    </footer>
  );
}
