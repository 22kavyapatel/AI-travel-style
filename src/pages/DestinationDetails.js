import React from "react";
import { useParams, Link } from "react-router-dom";
// Ensure you have installed lucide-react first
import { CloudSun, Shirt, Briefcase, Palette, MapPin, ArrowLeft, Info, Wind } from "lucide-react";
import "./DestinationDetails.css";

const destinationData = {
  kedarnath: {
    name: "Kedarnath",
    location: "Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1698574996391-73f103113f60?auto=format&fit=crop&w=1200&q=80",
    temperature: "12°C",
    condition: "Chilly / Clear",
    outfits: ["Heavy Woolens", "Trekking Boots", "Thermal Wear", "Gloves"],
    colors: ["#FFFFFF", "#3498DB", "#95A5A6"],
    packing: ["Raincoat", "Power bank", "First Aid Kit", "Flashlight", "Warm Cap"],
    tips: "Visit the temple during the early morning 'Aarti' for a spiritual experience. Oxygen levels are lower, so stay hydrated and climb at a steady pace."
  },
  goa: {
    name: "Goa",
    location: "Konkan Coast, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    temperature: "30°C",
    condition: "Sunny / Humid",
    outfits: ["Cotton Shirts", "Shorts", "Sunglasses", "Flip flops", "Breezy Dresses"],
    colors: ["#F1C40F", "#E67E22", "#2ECC71", "#00CEC9"],
    packing: ["Sunscreen", "Swimwear", "Wide-brimmed Hat", "Waterproof pouch", "Mosquito Repellent"],
    tips: "South Goa is perfect for quiet beaches, while North Goa is great for nightlife. Rent a scooter to explore the hidden Portuguese architecture."
  },
  kerala: {
  name: "Kerala Escape",
  location: "God's Own Country, India",
  image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  temperature: "28°C",
  condition: "Warm / Humid",
  outfits: ["Linen Shirts", "Cotton Sarees", "Comfort Sandals", "Light Jackets"],
  colors: ["#2ECC71", "#27AE60", "#16A085", "#F5F5DC"],
  packing: ["Umbrella", "Mosquito Repellent", "Comfort Footwear", "Sunscreen", "Reusable Water Bottle"],
  tips: "Houseboat stays in Alleppey are best booked in advance. Early mornings are ideal for backwater photography and peaceful nature walks."
},

ladakh: {
  name: "Ladakh Adventure",
  location: "Union Territory of Ladakh, India",
  image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  temperature: "8°C",
  condition: "Cold / Windy",
  outfits: ["Down Jackets", "Thermal Wear", "Woolen Caps", "Snow Boots"],
  colors: ["#34495E", "#95A5A6", "#ECF0F1"],
  packing: ["Sunglasses", "Lip Balm", "Moisturizer", "Power Bank", "Basic Medicines"],
  tips: "Acclimatize properly to avoid altitude sickness. Keep yourself hydrated and avoid heavy physical activity on the first day."
},

jaipur: {
  name: "Jaipur Royal Tour",
  location: "Rajasthan, India",
  image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
  temperature: "35°C",
  condition: "Hot / Dry",
  outfits: ["Cotton Kurtas", "Palazzo Pants", "Ethnic Dresses", "Comfortable Mojris"],
  colors: ["#E74C3C", "#F39C12", "#D35400", "#FAD7A0"],
  packing: ["Sunscreen", "Scarf", "Sunglasses", "Comfort Footwear", "Camera"],
  tips: "Visit forts early morning or evening to avoid heat. City Palace and Hawa Mahal are must-visits for architecture lovers."
}

};

export default function DestinationDetails() {
  const { id } = useParams();
  // Fallback to Kedarnath if ID is not found
  const data = destinationData[id] || destinationData.kedarnath;

  return (
    <div className="details-container">
      {/* Hero Header Section */}
      <div className="details-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${data.image})` }}>
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back to Explore</Link>
        <div className="hero-content">
          <span className="location-tag"><MapPin size={14} /> {data.location}</span>
          <h1>{data.name}</h1>
          <p className="hero-subtext">AI-Optimized Travel Essentials</p>
        </div>
      </div>

      <div className="details-main-grid">
        {/* Weather & Vibe Card */}
        <div className="info-card weather-card glass">
          <div className="card-header">
            <CloudSun className="icon blue" />
            <h3>Current Vibe</h3>
          </div>
          <div className="weather-stats">
            <div className="stat-group">
              <span className="temp">{data.temperature}</span>
              <span className="condition">{data.condition}</span>
            </div>
            <Wind className="decoration-icon" />
          </div>
        </div>

        {/* Packing List Card */}
        <div className="info-card checklist-card glass">
          <div className="card-header">
            <Briefcase className="icon orange" />
            <h3>Essential Packing</h3>
          </div>
          <div className="scrollable-list">
            {data.packing.map((item, i) => (
              <label key={i} className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-box"></span>
                <span className="label-text">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Style & Outfits Card */}
        <div className="info-card outfit-card glass">
          <div className="card-header">
            <Shirt className="icon green" />
            <h3>OOTD Inspiration</h3>
          </div>
          <div className="tag-cloud">
            {data.outfits.map((item, i) => (
              <span key={i} className="style-tag">{item}</span>
            ))}
          </div>
          <div className="palette-section">
            <p className="mini-label"><Palette size={12} /> Color Palette</p>
            <div className="color-circles">
              {data.colors.map((c, i) => (
                <div key={i} className="swatch" style={{ backgroundColor: c }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Travel Tips */}
        <div className="info-card tips-card glass wide-card">
          <div className="card-header">
            <Info className="icon purple" />
            <h3>AI Smart Tips</h3>
          </div>
          <p className="tips-content">{data.tips}</p>
        </div>
      </div>
    </div>
  );
}