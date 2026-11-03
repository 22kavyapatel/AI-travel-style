import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#111",
      color: "#fff"
    }}>
      <h2>✈️ TravelAI</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/MainForm" style={{ color: "#fff" }}>Plan Trip</Link>

        {user ? (
          <>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile")}
            >
              👤 {user.full_name}
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "#fff" }}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;