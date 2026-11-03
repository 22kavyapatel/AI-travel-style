import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="fullscreen-contact">
      {/* HERO SECTION - Background image now starts from the very top */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664461662768-189c6cbbcf79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8')`
        }}
      >
        <div className="overlay-content">
          <h1>Get in Touch with StyleIQ</h1>
          <p>Your journey to intelligent fashion begins here.</p>
        </div>
      </div>

      {/* PROJECT SHOWCASE SECTION */}
      <section className="project-showcase">
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1575939238474-c8ada13b2724?w=600&auto=format&fit=crop&q=60"
            alt="AI Project"
          />
          <div className="project-info">
            <h2>AI Fashion Style Advisor</h2>
            <p>
              Our AI analyzes your wardrobe, recommends outfits, and ensures
              your style is always on point—powered by data and trend insights.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section">
        <div className="form-wrapper">
          <h2>Drop Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Type your message here..." rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="info-wrapper">
          <h3>Contact Details</h3>
          <p>☎️ +123 456 7890</p>
          <p>📧 hello@styleiq.ai</p>
          <p>📍 Fashion Ave, New York, USA</p>
          <div className="map-placeholder">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617543015488!2d-73.9878531!3d40.7510257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134bb3f75e1a365!2sFashion%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 TravelStyle AI | Designed for the fashion-forward</p>
      </footer>
    </div>
  );
}