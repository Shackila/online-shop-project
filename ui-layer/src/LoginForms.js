import { useState } from "react";
import "./LoginForms.css";

const LoginForms = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(1);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false); // New state to show credentials

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation checks
    if (username.trim() === "" || password.length < 8) {
      setFlag(0); // Set flag to indicate error
    } else {
      // Reset flag, indicate sign-up success
      setFlag(1);
      setIsSignedUp(true); // Set sign-up status to true
      const newUser = {
        username,
        password,
        id: new Date().getSeconds(),
      };
      onAddUser(newUser);
    }
  };

  const tryAgainHandler = () => {
    setFlag(1); // Reset flag to allow trying again
    setUsername(""); // Clear username field
    setPassword(""); // Clear password field
    setIsSignedUp(false); // Reset sign-up status
    setShowCredentials(false); // Hide credentials on try again
  };

  return (
    <div>
      <div>
        <div>Welcome To Our Shop!</div>
        <br />
        <br />
        {isSignedUp ? (
          <div>
            <div>Let's start shopping!</div>
            <br />
            <a href="#" onClick={() => setShowCredentials(true)}>
              Show Credentials
            </a>
            {showCredentials && (
              <div>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
              </div>
            )}
          </div>
        ) : flag ? (
          <div className="form-container">
            <form onSubmit={submitHandler}>
              <label>Enter Your Username</label>
              <span className="input-group">
                <input
                  className="input"
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </span>
              <br />
              <br />
              <label>Enter Your Password</label>
              <span className="input-group">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <br />
              <button type="submit">Sign Up</button>
              <br />
            </form>
          </div>
        ) : (
          <div>
            {username.trim() === "" ? (
              <div>Username cannot be empty!</div>
            ) : (
              <div>
                <div>Password must contain at least 8 characters!</div>
                <button onClick={tryAgainHandler}>Try Again</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default LoginForms;
