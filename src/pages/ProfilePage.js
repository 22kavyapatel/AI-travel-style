import React, { useEffect, useState } from "react";
import "./Profile.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    const allPlans = JSON.parse(localStorage.getItem("plans")) || [];

    if (storedUser) {
      setUser(storedUser);

      const userPlans = allPlans.filter(
        (p) => p.userId === storedUser.id
      );

      setPlans(userPlans);
    }
  }, []);

  if (!user) return <h2>No user found</h2>;

  return (
    <div className="profile-container">

      <h2>👤 {user.full_name}</h2>
      <p>{user.email}</p>

      <h3>Your Plans</h3>

      {plans.length === 0 ? (
        <p>No plans yet</p>
      ) : (
        plans.map((plan, index) => (
          <div key={index} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
            <p><b>Date:</b> {plan.date}</p>
            <pre>{plan.result.answer}</pre>
          </div>
        ))
      )}

    </div>
  );
};

export default ProfilePage;