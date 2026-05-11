import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [showRegister, setShowRegister] = useState(false);

  if (isLoggedIn) {
    return <Dashboard setIsLoggedIn={setIsLoggedIn} />;
  }

  if (showRegister) {
    return <Register setShowRegister={setShowRegister} />;
  }

  return (
    <div>
      <Login setIsLoggedIn={setIsLoggedIn} />
      <div className="switch-box">
        <p>Don&apos;t have an account?</p>
        <button onClick={() => setShowRegister(true)}>Create Account</button>
      </div>
    </div>
  );
}

export default App;