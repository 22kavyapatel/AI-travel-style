import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const metrics = [
    { label: "Style Score", val: "94", trend: "+2%", icon: "✨" },
    { label: "Destinations Visited", val: "23", trend: "+3 this month", icon: "🌍" },
    { label: "Outfits Created", val: "156", trend: "+99%", icon: "🧥" },
    { label: "Styling Matches", val: "89%", trend: "+5%", icon: "🎯" }
  ];

  const styleProfile = [
    { name: "Minimalist", pct: 85 },
    { name: "Bohemian", pct: 62 },
    { name: "Classic", pct: 78 },
    { name: "Sporty", pct: 45 }
  ];

  const recentActivity = [
    { type: "Saved outfit", desc: "Summer Elegance collection", time: "2 hours ago", icon: "💎" },
    { type: "AI Recommendation", desc: "New styles based on your profile", time: "5 hours ago", icon: "✨" },
    { type: "Added destination", desc: "Barcelona, Spain", time: "1 day ago", icon: "📍" },
    { type: "Outfit purchased", desc: "Parisian Chic essentials", time: "2 days ago", icon: "🛍️" }
  ];

  const itinerary = [
    { 
      city: "Bali, Indonesia", 
      date: "June 15-22", 
      outfits: "8 outfits", 
      status: "UPCOMING", 
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300",
      desc: "A comprehensive tropical paradise exploration featuring curated beach-ready linen sets for Uluwatu sunsets and sophisticated evening resort wear for Seminyak. This trip focuses on breathable organic fabrics, neutral palettes, and versatile accessories designed to transition seamlessly from coastal relaxation to upscale island dining." 
    },
    { 
      city: "Milan, Italy", 
      date: "July 8-14", 
      outfits: "12 outfits", 
      status: "PLANNING", 
      img: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=300",
      desc: "A high-fashion city break requiring a blend of sharp, sophisticated tailoring and modern street-style layers. The wardrobe includes structured blazers for gallery visits in Brera and sleek, monochromatic ensembles for evenings at the Duomo. Prioritizing Italian-inspired elegance with a focus on premium textiles and minimalist silhouettes."
    },
    { 
      city: "Dubai, UAE", 
      date: "Aug 20-27", 
      outfits: "6 outfits", 
      status: "EXPLORING", 
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300",
      desc: "A luxury desert oasis escape centered around dramatic, lightweight silks and glamorous evening ensembles for skyline dining. Featuring bold metallic accents and airy kaftans, the styling balances modern architectural aesthetics with traditional desert comfort. Every piece is selected to reflect the opulence and heat of a high-summer metropolitan retreat."
    }
  ];

  return (
    <div className="voyageur-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>travelstyle</h1>
          <p>Travel Fashion AI</p>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">AI Stylist</div>
          <div className="nav-item">Destinations</div>
          <div className="nav-item">Analytics</div>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Settings</div>
        </nav>
        <div className="sidebar-footer">
          <div className="avatar">JD</div>
          <div className="user-info">
            <p className="user-name">Jane Doe</p>
            <p className="user-email">jane@example.com</p>
          </div>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <main className="main-content">
        <header className="top-nav">
          <div className="search-bar">
            <span>🔍</span>
            <input type="text" placeholder="Search destinations, styles, outfits..." />
          </div>
        </header>

        <div className="dashboard-body">
          {/* METRICS ROW */}
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="card metric-card">
                <div className="m-header">
                  <span className="m-icon">{m.icon}</span>
                  <span className="m-trend">{m.trend}</span>
                </div>
                <h2>{m.val}</h2>
                <p>{m.label}</p>
              </div>
            ))}
          </div>

          <div className="layout-grid">
            {/* LEFT COLUMN */}
            <div className="content-left">
              <section className="section-block">
                <h3>AI-Curated Outfits</h3>
                <div className="outfits-display">
                  <div className="outfit-card" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1541336318489-083c7d277b8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMkJ0cmF2ZWx8ZW58MHx8MHx8fDA%3D")'}}>
                    <div className="outfit-info"><strong>Parisian Chic</strong><span>Paris, France</span><button>Try On</button></div>
                  </div>
                  <div className="outfit-card" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1712810240026-2c68af066efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMkJ0cmF2ZWx8ZW58MHx8MHx8fDA%3D")'}}>
                    <div className="outfit-info"><strong>Tokyo Street</strong><span>Tokyo, Japan</span><button>Try On</button></div>
                  </div>
                  <div className="outfit-card" style={{backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1756166329893-a8279a777bb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMkJ0cmF2ZWx8ZW58MHx8MHx8fDA%3D")'}}>
                    <div className="outfit-info"><strong>Med Breeze</strong><span>Santorini, Greece</span><button>Try On</button></div>
                  </div>
                </div>
              </section>

              {/* UPDATED ITINERARY SECTION */}
              <section className="section-block itinerary-card-full">
                <div className="itinerary-header">
                  <h3>Travel Itinerary</h3>
                  <p>Your fashion-ready destinations</p>
                </div>
                <div className="itinerary-list">
                  {itinerary.map((trip, i) => (
                    <div key={i} className="trip-row">
                      <div className="trip-image-group">
                        <img src={trip.img} alt={trip.city} className="trip-image" />
                        <div className="trip-meta">
                          <strong>{trip.city}</strong>
                          <span>{trip.date} • {trip.outfits}</span>
                        </div>
                      </div>
                      <div className="trip-description-box">
                        <p>{trip.desc}</p>
                      </div>
                      <div className="trip-status-box">
                        <span className={`status-tag ${trip.status.toLowerCase()}`}>{trip.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="content-right">
              <div className="card side-panel">
                <h4>Style Profile</h4>
                {styleProfile.map((s, i) => (
                  <div key={i} className="progress-group">
                    <div className="label-row"><span>{s.name}</span><span>{s.pct}%</span></div>
                    <div className="progress-track"><div className="progress-fill" style={{width: `${s.pct}%`}}></div></div>
                  </div>
                ))}
              </div>

              <div className="card side-panel">
                <h4>Recent Activity</h4>
                <div className="activity-feed">
                  {recentActivity.map((act, i) => (
                    <div key={i} className="feed-item">
                      <div className="feed-icon">{act.icon}</div>
                      <div className="feed-text">
                        <strong>{act.type}</strong>
                        <p>{act.desc}</p>
                        <span>{act.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;