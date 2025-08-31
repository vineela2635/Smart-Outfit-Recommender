import React from "react";
import "./landingpage2.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header */}
      <h1 className="title">SMART OUTFIT RECOMMENDER</h1>
      <p className="subtitle">OUTFIT SPOTTER</p>

      {/* 🔹 Links */}
      <div style={{ marginBottom: "30px" }}>
        <a href="/signup" style={{ marginRight: "20px", color: "blue", fontWeight: "bold" }}>Sign Up</a>
        <a href="/login" style={{ color: "blue", fontWeight: "bold" }}>Login</a>
      </div>

      {/* Outfit Grid */}
      <div className="grid">
        <div className="card">
          <img
            src="http://img.thrfun.com/img/083/078/prom_dresses_l1.jpg"
            alt="Outfit 1"
          />
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/originals/9f/a2/84/9fa284fbb848837b5b895fc9ee515494.jpg"
            alt="Outfit 2"
          />
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/originals/35/0b/3d/350b3d35ae24ec8e92e5a8fc76d078a2.jpg"
            alt="Outfit 3"
          />
        </div>
      </div>
    </div>
  );
}
