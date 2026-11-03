import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const API_BASE_URL = "http://localhost:8000";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email: formData.username,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ STORE USER PROPERLY
        localStorage.setItem("currentUser", JSON.stringify(data));

        window.location.href = "/MainForm";
      } else {
        setError(data.detail || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="login-wrapper">

      <div className="login-left">
        <div className="brand">✈️ TravelAI</div>
        <h1>Plan Smart Travel with Style</h1>
      </div>

      <div className="login-right">
        <div className="login-card">

          <h2>Welcome Back</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              onChange={handleChange}
              required
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <label>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>

            <button type="submit">LOGIN</button>

          </form>

          <p>
            Don't have account? <Link to="/register">Sign up</Link>
          </p>

        </div>
      </div>
    </div>
  );
}