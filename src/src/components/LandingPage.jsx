import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="nav">
        <h1 className="logo">Cash-Blueprint</h1>
        <div>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn-outline">Sign Up</Link>
        </div>
      </header>

      <main className="hero">
        <h2>Smart money made simple.</h2>
        <p>Design your future with effortless budgeting tools.</p>
        <Link to="/app" className="btn-large">Launch App</Link>
      </main>

      <footer>
        <p>© 2025 Cash-Blueprint | Built by Tlotlang Lepeli</p>
      </footer>
    </div>
  );
}
