import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./homePage.css"

const travelCards = [
  {
    id: "kedarnath",
    title: "Kedarnath Trip",
    image: "https://images.unsplash.com/photo-1593118845043-359e5f628214",
    description: "Spiritual journey with weather-based outfit guidance",
  },
  {
    id: "kerala",
    title: "Kerala Escape",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    description: "Nature travel with daily outfit & packing suggestions",
  },
  {
    id: "ladakh",
    title: "Ladakh Adventure",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    description: "Cold-weather travel with smart layering outfits",
  },
  {
    id: "goa",
    title: "Goa Vacation",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    description: "Beach travel + fashion styling for every occasion",
  },
  {
    id: "jaipur",
    title: "Jaipur Royal Tour",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "Cultural travel with traditional-fusion outfit ideas",
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="travelstyle-page">
        <p className="tagline">TRAVEL + STYLE AI</p>

        <h1 className="brand-title">
          Plan Your Journey <br />
          <span>Style Every Moment</span>
        </h1>

        <p className="brand-subtitle">
          An AI-powered platform that plans your travel, suggests outfits,
          manages packing, and styles you perfectly for every destination.
        </p>

        <div className="search-box">
          <input placeholder="Search destinations, trips, outfits, occasions..." />
          <button>Search</button>
        </div>

        <div className="card-row">
          {travelCards.map((card, index) => (
            <div
              key={card.id}
              className={`travel-card ${active === index ? "active" : ""}`}
              onClick={() => {
                setActive(index)
                navigate(`/destination/${card.id}`)
              }}
            >
              <img src={card.image} alt={card.title} />
              <div className="card-info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>Everything You Need for Stylish Travel</h2>
        <p className="features-subtitle">
          Powered by AI to make your travel planning effortless and stylish
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <span>📍</span>
            <h3>Destination Analysis</h3>
            <p>Insights about weather, culture and fashion trends.</p>
          </div>

          <div className="feature-card">
            <span>☁️</span>
            <h3>Weather-Based Suggestions</h3>
            <p>Outfit recommendations based on live forecasts.</p>
          </div>

          <div className="feature-card">
            <span>👕</span>
            <h3>Smart Outfit Planning</h3>
            <p>AI outfit combinations for each destination.</p>
          </div>

          <div className="feature-card">
            <span>📸</span>
            <h3>Instagram-Ready Looks</h3>
            <p>Curated looks for perfect travel photos.</p>
          </div>

          <div className="feature-card">
            <span>🧳</span>
            <h3>Packing Checklist</h3>
            <p>Never forget essentials while travelling.</p>
          </div>

          <div className="feature-card">
            <span>✨</span>
            <h3>Color Palette Advisor</h3>
            <p>Perfect color combinations for your trip vibe.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
