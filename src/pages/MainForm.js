"use client"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './FormPage.css';

const Form = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [personIndex, setPersonIndex] = useState(0); 
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    city: '',
    country: '',
    budget: '',
    persons: 1,
    startDate: '',
    endDate: '',

    peopleDetails: [
      { 
        gender: 'Male', 
        bodyType: 'Average', 
        skinTone: 'Medium',
        style: 'Casual',
        colors: '',
        additionalPref: '' 
      }
    ]
  });

  // ---------------- HANDLERS ----------------

  const handleTripChange = (e) => {
    const { name, value } = e.target;

    const val = name === 'persons' 
      ? Math.max(1, parseInt(value) || 1) 
      : value;

    setFormData(prev => {
      let newPeople = [...prev.peopleDetails];

      if (name === 'persons') {
        if (val > prev.peopleDetails.length) {
          for (let i = prev.peopleDetails.length; i < val; i++) {
            newPeople.push({ 
              gender: 'Male',
              bodyType: 'Average',
              skinTone: 'Medium',
              style: 'Casual',
              colors: '',
              additionalPref: '' 
            });
          }
        } else {
          newPeople = newPeople.slice(0, val);
        }
      }

      return { ...prev, [name]: val, peopleDetails: newPeople };
    });
  };

  const handlePersonChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...formData.peopleDetails];
    updated[index][name] = value;

    setFormData(prev => ({
      ...prev,
      peopleDetails: updated
    }));
  };

  const handleNext = () => {
    if (currentStep === 2 || currentStep === 3) {
      if (personIndex < formData.persons - 1) {
        setPersonIndex(personIndex + 1);
      } else {
        setPersonIndex(0);
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if ((currentStep === 2 || currentStep === 3) && personIndex > 0) {
      setPersonIndex(personIndex - 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setFormData({
      city: '',
      country: '',
      budget: '',
      persons: 1,
      startDate: '',
      endDate: '',
      peopleDetails: [{
        gender: 'Male',
        bodyType: 'Average',
        skinTone: 'Medium',
        style: 'Casual',
        colors: '',
        additionalPref: ''
      }]
    });
    setPersonIndex(0);
    setCurrentStep(1);
  };

  // ---------------- SUBMIT ----------------
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  const savedPlans = JSON.parse(localStorage.getItem("plans")) || [];

  savedPlans.push({
    userId: currentUser.id,
    date: new Date().toLocaleString(),
    input: formData,
    result: result
  });

  localStorage.setItem("plans", JSON.stringify(savedPlans));
}
  const handleSubmit = async () => {
    setIsLoading(true);

    const people = formData.peopleDetails.map((p, i) => `
Person ${i + 1}:
Gender: ${p.gender}
Body Type: ${p.bodyType}
Skin Tone: ${p.skinTone}
Style: ${p.style}
Preferred Colors: ${p.colors}
Additional Preference: ${p.additionalPref || "None"}
`).join("\n");

    const query = `
Hello Gemini,
You are my travel and style adviser.

Destination:
City: ${formData.city}
Country: ${formData.country}
Budget: ${formData.budget}
Persons: ${formData.persons}
Start Date: ${formData.startDate}
End Date: ${formData.endDate}

Personal Details:
${people}

Rules:
- Provide day-by-day itinerary with expenses
- Suggest things to carry
- Give Instagram-style outfit suggestions
- Keep answer short
`.trim();

    try {
      // ✅ TIMEOUT FIX (VERY IMPORTANT)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });

      clearTimeout(timeoutId);

      const result = await response.json();

      // ✅ SAVE PLAN (PROFILE FEATURE)
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (currentUser) {
        const savedPlans = JSON.parse(localStorage.getItem("plans")) || [];

        savedPlans.push({
          userId: currentUser.id,
          date: new Date().toLocaleString(),
          input: formData,
          result: result
        });

        localStorage.setItem("plans", JSON.stringify(savedPlans));
      }

      navigate("/result", { state: { data: result } });

    } catch (error) {
      console.error(error);
      alert("Server slow or not running!");
    } finally {
      setIsLoading(false);
    }
  };

  // ---------------- UI ----------------

  return (
    <div className="form-viewport">
      <div className="form-card-container">

        {/* SIDEBAR */}
        <aside className="form-sidebar">
          <div className="brand-logo">StyleIQ</div>

          {[1,2,3,4].map((s) => (
            <div key={s} className={`step-row ${currentStep >= s ? 'active' : ''}`}>
              <div className="step-circle">{currentStep > s ? '✔' : s}</div>
              <span className="step-text">
                {["Destination","Personal Details","Outfit Option","Result"][s-1]}
              </span>
              {s < 4 && <div className="step-connector"></div>}
            </div>
          ))}
        </aside>

        {/* MAIN */}
        <main className="form-body-area">
          <div className="content-wrapper">

            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="step-content fade-in">
                <span className="group-label">TRIP INFORMATION</span>

                <div className="input-row">
                  <div className="input-field">
                    <label>City</label>
                    <input name="city" value={formData.city} onChange={handleTripChange} />
                  </div>

                  <div className="input-field">
                    <label>Country</label>
                    <input name="country" value={formData.country} onChange={handleTripChange} />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-field">
                    <label>Budget</label>
                    <input name="budget" value={formData.budget} onChange={handleTripChange} />
                  </div>

                  <div className="input-field">
                    <label>Persons</label>
                    <input type="number" name="persons" value={formData.persons} onChange={handleTripChange} />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-field">
                    <label>Start Date</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleTripChange} />
                  </div>

                  <div className="input-field">
                    <label>End Date</label>
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleTripChange} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="step-content fade-in">
                <div className="person-badge">Person {personIndex + 1}</div>

                <div className="input-row">
                  <div className="input-field">
                    <label>Gender</label>
                    <select name="gender" onChange={(e)=>handlePersonChange(e,personIndex)}>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label>Body Type</label>
                    <select name="bodyType" onChange={(e)=>handlePersonChange(e,personIndex)}>
                      <option>Lean</option>
                      <option>Average</option>
                      <option>Athletic</option>
                      <option>Curvy</option>
                      <option>Plus Size</option>
                    </select>
                  </div>
                </div>

                <div className="input-field">
                  <label>Skin Tone</label>
                  <select name="skinTone" onChange={(e)=>handlePersonChange(e,personIndex)}>
                    <option>Fair</option>
                    <option>Medium</option>
                    <option>Dark</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="step-content fade-in">

                <div className="input-field">
                  <label>Style</label>
                  <select name="style" onChange={(e)=>handlePersonChange(e,personIndex)}>
                    <option>Casual</option>
                    <option>Streetwear</option>
                    <option>Formal</option>
                    <option>Party</option>
                    <option>Beachwear</option>
                    <option>Traditional</option>
                    <option>Sporty</option>
                    <option>Minimal</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Preferred Colors</label>
                  <input 
                    name="colors"
                    value={formData.peopleDetails[personIndex].colors}
                    onChange={(e)=>handlePersonChange(e,personIndex)}
                  />
                </div>

                <div className="input-field">
                  <label>Additional Preferences</label>
                  <input 
                    name="additionalPref"
                    value={formData.peopleDetails[personIndex].additionalPref}
                    onChange={(e)=>handlePersonChange(e,personIndex)}
                  />
                </div>

              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="step-content result-screen fade-in">
                <div className="completion-icon">✔</div>
                <h3>All Set!</h3>

                <div className="result-button-group">
                  <button className="btn-result-primary" onClick={handleSubmit}>
                    {isLoading ? "Generating..." : "View Recommendations"}
                  </button>

                  <button className="btn-result-secondary" onClick={handleRestart}>
                    Plan New Trip
                  </button>
                </div>
              </div>
            )}

          </div>

          <footer className="form-footer">
            {currentStep > 1 && <button className="btn-back-red" onClick={handleBack}>Back</button>}
            {currentStep < 4 && <button className="btn-next" onClick={handleNext}>Next</button>}
          </footer>

        </main>
      </div>
    </div>
  );
};

export default Form;