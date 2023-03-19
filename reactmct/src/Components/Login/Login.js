import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = ({ showPage, setShowPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkDetails = () => {
    let symbol1 = 0;
    let symbol2 = 0;
    if (email === "" || password === "") {
      return false;
    }
    console.log(email, password);
    for (let i = 0; i < email.length; i++) {
      let ch = email.charAt(i);
      console.log(ch, "Email");
      if (ch === ".") {
        symbol1++;
      } else if (ch === "@") {
        symbol2++;
      }
    }
    if (symbol1 !== 1 || symbol2 !== 1) {
      console.log(symbol1, symbol2);
      return false;
    }

    return true;
  };
  return (
    <div className="loginMainContainer">
      <div className="leftLoginContainer">
        <div>
          <h1>Welcome back to</h1>
          <h1>Preety Login</h1>
        </div>

        <p>Its great to have you back.</p>

        <div className="inputContainer">
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </div>

        <div className="inputContainer">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </div>

        <div className="rememberMeContainer">
          <div className="rememberMe">
            <input id="checkbox" type="checkbox" />
            <p>Remember me?</p>
          </div>
          <div className="forgotPassword">
            <p>Forgot password?</p>
          </div>
        </div>

        <div className="buttonContainer">
          <Link to={ "/home"}>
            <button
              id="login"
              onClick={() => {
                if (checkDetails()) {
                  setShowPage(true);
                  return;
                } else {
                  setShowPage(false);
                  alert("Enter Proper Credentials");
                  return;
                }
              }}
            >
              LOGIN
            </button>
          </Link>
          <button id="createAccount">CREATE ACCOUNT</button>
        </div>
        <div className="bottonContainer">
          <p>Or login with</p>
          <p id="pTag">Facebook Google</p>
        </div>
      </div>
      <div className="rightLoginContainer">
        <img
          src="https://wallpaper.dog/large/10950088.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;