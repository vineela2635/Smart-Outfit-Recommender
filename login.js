import React from "react";
import "./login.css"; // we’ll move your CSS here

function Login() {
  return (
    <div className="container">
      <div className="image-side"></div>
      <div className="form-side">
        <h2>Welcome Back!</h2>
        <h3>Log In to Your Account</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
        <a href="/signup">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
