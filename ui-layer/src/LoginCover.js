import React from "react";
import "./index.css";
import LoginForms from "./LoginForms.js";
import { useState } from "react";

const LoginCover = () => {
  const [users, setUsers] = useState([]);
  const addUser = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };
  return (
    <div >
      <div className="flex items-center justify-between">
        <LoginForms onAddUser={addUser} key={new Date().getUTCMinutes} />
      </div>
    </div>
  );
};
export default LoginCover;
