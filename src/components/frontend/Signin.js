import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Signin = ({ setuser }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();
  const [name, setName] = useState();

  function verify() {
    if (name === "ad" && auth === "ad") {
      setuser(true);
      navigate("/admin");
    } else if (name === "user@gmail.com" && auth === "user") {
      setuser(true);
      navigate("/user");
    } else {
      alert("wrong password");
    }
  }
  return (

   <>
    <Navbar/>
    <div className="signin">
      <h3>Sign In</h3>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={auth}
            onChange={(e) => setAuth(e.target.value)}
          />
        </div>

        <div>
          <button onClick={verify}>Submit</button>
        </div>
      </form>
    </div></>
  );
};

export default Signin;
