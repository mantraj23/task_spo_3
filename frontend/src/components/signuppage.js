import React from "react";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/signup", {
        userId,
        password,
      });
      console.log(response.data);
      setUserId("");
      setPassword("");
      alert("User created successfully");
    } catch (error) {
      console.error(error.response.data);
      alert("Error: " + error.response.data.error);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <Link className="linkButtons" to="/login">
            <button type="btn">Already have an account? Login here.</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
