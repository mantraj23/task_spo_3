import React from "react";
import "./auth.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        userId,
        password,
      });
      console.log(response.data);
      setUserId("");
      setPassword("");
      alert("Login successful");
    } catch (error) {
      console.error(error.response.data);
      alert("Error: " + error.response.data.error);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
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
          <button type="submit">Login</button>
          <Link className="linkButtons" to="/">
            <button type="btn">New user? Click to register</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
