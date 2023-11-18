import React from "react";
import "./LoginCover.css";
import LoginForms from "./LoginForms.js";
import { useState } from "react";

const LoginCover = () => {
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };
  return (
    <div className="box">
      <div className="login-cover">
        <LoginForms onAddUser={addUser} key={new Date().getUTCMinutes} />
      </div>
    </div>
  );
};
export default LoginCover;
