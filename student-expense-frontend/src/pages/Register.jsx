import { useState } from "react";
import API from "../api/api";

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
    <div className="auth-box">
      <h1>Register</h1>

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

        <button type="submit">Register</button>
      </form>

      <p className="message">{message}</p>

      <button onClick={() => setShowRegister(false)}>Go to Login</button>
    </div>
  );
}

export default Register;