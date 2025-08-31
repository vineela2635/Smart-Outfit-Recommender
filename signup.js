import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.imageSide}></div>
        <div style={styles.formSide}>
          <h2 style={styles.title}>Smart Outfit Recommender</h2>
          <h3 style={styles.subtitle}>Create an Account</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <a href="/login" style={styles.link}>
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #e6ccff, #ffccf2)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    width: "900px",
    height: "550px",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)"
  },
  imageSide: {
    flex: 1,
    background: "url('https://hips.hearstapps.com/hmg-prod/images/hbx110120inspoindex-020-6720ea86593ad.jpg?crop=0.9998047256395236xw:1xh;center,top&resize=980:*') center/cover no-repeat"
  },
  formSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px",
    color: "#333"
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    color: "#6a0572"
  },
  subtitle: {
    marginBottom: "15px",
    fontSize: "20px",
    color: "#6a0572"
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    background: "rgba(255,255,255,0.8)",
    fontSize: "16px",
    width: "100%"
  },
  button: {
    padding: "12px",
    background: "#d94bc9",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s ease"
  },
  link: {
    textDecoration: "none",
    color: "#6a0572",
    fontWeight: "bold",
    fontSize: "14px",
    display: "block",
    marginTop: "15px"
  }
};
