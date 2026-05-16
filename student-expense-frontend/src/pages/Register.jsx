import { useState } from "react";
import API from "../api/api";
import loginImage from "../assets/login-image.jpg";

function Register({ setShowRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", formData);

      setMessage("Register successful. Now login.");

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    } catch (err) {
      setMessage("Register failed");
      console.log(err);
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="register-card">
          <h1>Create Account</h1>

          <p className="register-subtitle">
            Register to start tracking your expenses and monthly budgets.
          </p>

          <form onSubmit={registerUser}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button className="register-btn" type="submit">
              Register
            </button>
          </form>

          <p className="message">{message}</p>

          <button
            className="back-login-btn"
            onClick={() => setShowRegister(false)}
          >
            Go to Login
          </button>
        </div>
      </div>

      <div className="register-right">
        <img src={loginImage} alt="Expense Tracker" />

        <div className="image-overlay">
          <h2>Start Smart Saving</h2>
          <p>
            Create your account, track daily expenses, and manage your student
            budget easily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;