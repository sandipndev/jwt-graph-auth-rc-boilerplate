import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div>Landing Page</div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Landing;
