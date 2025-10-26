import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h2>Create an Account</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn">Register</button>
      <button className="btn-outline">Sign up with Google</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
