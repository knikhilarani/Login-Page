

import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '50%', backgroundColor: 'pink', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold' }}>Welcome to RIZE</div>
      </div>
      <div style={{ width: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'green', padding: '20px', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            style={{ padding: '10px 20px', marginTop: '10px', border: 'none', borderRadius: '5px' }}
            onClick={(e) => {
              e.preventDefault();
              if (!username || !password) {
                setErrorMessage("Please enter both username and password");
                return;
              }
             
            }}
          >
            Login
          </button>
          <div style={{ color: errorMessage ? "red" : "black" }}>
            {errorMessage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
