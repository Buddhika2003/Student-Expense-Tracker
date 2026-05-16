import { useState } from "react";
import API from "../api/api";
import loginImage from "../assets/login-image.jpg";

function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", formData);

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful");
      setIsLoggedIn(true);
    } catch (err) {
      setMessage("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-card">
          <h1>Welcome Back</h1>
          <p className="login-subtitle">
            Login to manage your expenses and monthly budget.
          </p>
          
          <form onSubmit={handleSubmit}>
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

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>

          <p className="message">{message}</p>
        </div>
      </div>

      <div className="login-right">
        <img src={loginImage} alt="Expense Tracker" />
        <div className="image-overlay">
          <h2>Student Expense Tracker</h2>
          <p>Track expenses, control budgets, and manage money smarter.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;