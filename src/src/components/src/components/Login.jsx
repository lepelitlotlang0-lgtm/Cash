import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h2>Login to Cash-Blueprint</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn">Login</button>
      <button className="btn-outline">Sign in with Google</button>
      <p>Don’t have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}
