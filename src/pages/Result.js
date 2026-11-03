"use client"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./Result.css"

const Result = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const data = location.state?.data

  const text =
    data?.answer ||
    data?.response ||
    data?.output ||
    "No data found"

  // 🔥 Split by Day
  const days = text.split(/Day \d+:/).filter(Boolean)

  // ✅ SINGLE CLEAN FUNCTION
  const getSection = (text, key) => {
    const regex = new RegExp(`${key}:\\s*(.*)`, "i")
    const match = text.match(regex)
    return match ? match[1].trim() : "Not provided"
  }

  return (
    <div className="result-wrapper">

      {/* HEADER */}
      <div className="result-hero">
        <div>
          <h1>Your Trip ✈️</h1>
          <p>AI Generated Plan</p>
        </div>

        <button className="back-btn" onClick={() => navigate("/MainForm")}>
          Plan Again
        </button>
      </div>

      {/* DAYS */}
      <div className="result-container">

        {days.map((day, index) => {
          const lines = day.split("\n").filter(l => l.trim() !== "")

          return (
            <div key={index} className="day-card">

              {/* HEADER */}
              <div className="day-header">
                <div>
                  <span>Day {index + 1}</span>
                  <h2>{lines[0]}</h2>
                </div>
              </div>

              {/* ACTIVITIES */}
              <div className="timeline">
                {lines.slice(1, 5).map((line, i) => (
                  <div key={i} className="timeline-item">
                    <p>{line}</p>
                  </div>
                ))}
              </div>

              {/* BOTTOM CARDS */}
              <div className="day-bottom">

                <div className="info-card food">
                  <h4>🍽 Food</h4>
                  <p>{getSection(day, "Food")}</p>
                </div>

                <div className="info-card wear">
                  <h4>👕 Outfit</h4>
                  <p>{getSection(day, "Outfit")}</p>
                </div>

                <div className="info-card caption">
                  <h4>📸 Caption</h4>
                  <p>{getSection(day, "Caption")}</p>
                </div>

              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Result