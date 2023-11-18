import { useState } from "react";
import "./index.css";
import Label from "./Label.js";
import InputField from "./InputField.js";
import Button from "./Button.js";
// import ProfileDashboard from "./ProfileDashboard.js";

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
      <div className="bg-lightyGray p-3.5 sm:p-10 md:p-16 lg:p-16 shadow-lg">
        <div className="text-center font-serif text-frog">
          Don't Have An Account?
        </div>
        <br />
        {isSignedUp ? (
          <div>
            <div className="text-center font-serif text-frog p-12">
              Let's start shopping!
            </div>
            <br />
            <Button>
              <a href="#" onClick={() => setShowCredentials(true)}>
                Show Credentials
              </a>
            </Button>
            {showCredentials && (
              <div className="py-0 text-center">
                <p>Username: {username}</p>
                <p>Password: {password}</p>
              </div>
            )}
          </div>
        ) : flag ? (
          <div className="flex justify-center ">
            <form onSubmit={submitHandler}>
              <Label>{"Enter your username"}</Label>
              <InputField
                state={username}
                setState={setUsername}
                type={"username"}
              />
              <Label>{"Enter your Password"}</Label>
              <InputField state={password} setState={setPassword} />
              <br />
              <Button>{"Sign Up"}</Button>
              <br />
            </form>
          </div>
        ) : (
          <div className="flex justify-center">
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
