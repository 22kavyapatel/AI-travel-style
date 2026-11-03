import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-container">
        <div className="trust-content">
          <div className="trust-text">
            <h2>We Are A Very Trusted Style & Travel Agency, Standing Up For You All</h2>
            <div className="trust-badges">
              <span>✔ Affordable Curation</span>
              <span>✔ Prioritize Comfort</span>
            </div>
            <p>
              Our mission is to merge the world of high fashion with global exploration. 
              We believe that every journey deserves a perfectly curated wardrobe that 
              respects local culture while maintaining your personal aesthetic.
            </p>
          </div>
          <div className="trust-image">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" alt="Fashion Studio" />
          </div>
        </div>
      </section>

      {/* THREE PILLAR FEATURES */}
      <section className="features-row">
        <div className="feature-item">
          <div className="icon">📍</div>
          <h3>Style Guide</h3>
          <p>Expertly curated lookbooks tailored to your specific travel destination.</p>
        </div>
        <div className="feature-item active">
          <div className="icon">🛡</div>
          <h3>Safety First</h3>
          <p>Wardrobe choices that ensure comfort and cultural respect anywhere.</p>
        </div>
        <div className="feature-item">
          <div className="icon">🏷</div>
          <h3>Clear Pricing</h3>
          <p>Transparent subscription models for year-round styling assistance.</p>
        </div>
      </section>

      {/* GALLERY / NEWS SECTION */}
      <section className="news-gallery">
        <h2>Get Info From Insights</h2>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" alt="Beach" />
            <div className="card-info">
              <h4>The Coastal Collection</h4>
              <p>A collection of beautiful essentials for your Mediterranean escape.</p>
            </div>
          </div>
          <div className="gallery-card">
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500" alt="Mountain" />
            <div className="card-info">
              <h4>Mountain Minimalist</h4>
              <p>Stay warm and sophisticated in the highest altitudes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <div className="footer-top">
          <div className="logo-brand">VOYAGEUR</div>
          <p>123 Fashion Ave, New York, NY</p>
          <p>+1 234 567 89 | hello@voyageur.ai</p>
        </div>
        <div className="footer-bottom">
          <p>© 2026 VOYAGEUR | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default About;