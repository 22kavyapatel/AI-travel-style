"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./Register.css"

const API_BASE_URL = "http://localhost:8000"

export default function RegisterPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    phone: "",
    preferredDestination: "",
  })

  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...formData, [name]: value }
    setFormData(updated)

    setError("")

    // Password match check
    if (updated.password && updated.confirmPassword) {
      if (updated.password !== updated.confirmPassword) {
        setPasswordError("Passwords do not match")
      } else {
        setPasswordError("")
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }

    setLoading(true)
    setError("")

    const payload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      age: parseInt(formData.age),
      full_name: formData.fullName,
    }

    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        alert("✅ Registration Successful!")
        navigate("/login")
      } else {
        setError(data.detail || "Registration failed")
      }

    } catch (err) {
      setError("❌ Server not responding")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-wrapper">

      {/* LEFT SIDE */}
      <div className="register-left">
        <div className="brand">✈️ TravelAI</div>
        <h1>Create your travel style</h1>
        <p className="subtitle">Join and explore smart travel plans</p>

        <ul className="features">
          <li>✔ Smart itinerary</li>
          <li>✔ Outfit suggestions</li>
          <li>✔ Budget planning</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">
        <div className="register-card">

          <h2>Create Account</h2>
          <p className="card-subtitle">Start your journey</p>

          {error && <p className="error-text">{error}</p>}
          {passwordError && <p className="error-text">{passwordError}</p>}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input name="fullName" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input name="username" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input name="phone" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Preferred Destination</label>
              <input name="preferredDestination" onChange={handleChange} />
            </div>

            <button 
              className="register-btn" 
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

    </div>
  )
}