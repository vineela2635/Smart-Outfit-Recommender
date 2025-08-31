import React from "react";
import "./landingpage.css";

function LandingPage() {
  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <span className="side-text">LANDING PAGE</span>
        <h1 className="title">SMART OUTFIT RECOMMERNDER</h1>
        <span className="side-text">STORE</span>
      </header>

      {/* Laptop Card */}
      <div className="laptop">
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">SOR</h2>
          <ul className="menu">
            <li>Ladies</li>
            <li>Mens</li>
            <li>Kids</li>
            <li>Others</li>
          </ul>
          <div className="icons">
            <span>🔍</span>
            <span>🛒</span>
            <a href="/login">Sign In</a>
            <a href="/signup">Sign Up</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-img purple">
            <img src="https://i.pinimg.com/736x/1c/0f/34/1c0f34a06feae4707c3a1b98f986e6b4.jpg" alt="model1" />
          </div>
          <div className="hero-img blue">
            <img src="https://www.stylesofman.com/wp-content/uploads/2019/11/long-thumbnail.jpg" alt="model2" />
          </div>
          <div className="hero-img gray">
            <img src="https://i.pinimg.com/originals/0b/0a/11/0b0a11f90ae4f8bb9f2d7f0969825cf8.jpg" alt="model3" />
          </div>
          <div className="hero-img yellow">
            <img src="https://i.pinimg.com/originals/c1/c9/27/c1c9277abb73c729aec6570c14181b38.jpg" alt="model4" />
          </div>
        </div>

        {/* Overlay Text */}
        <div className="overlay-text">
          <h1>FASHION</h1>
          <p>THAT DEFINE YOU.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
