import React from "react";
import './Register.css'
function Register() {
  return (
    <>
      <div className="container front">
        <div className="top">
          <span>Thunder Coding</span>
        </div>
        <div className="form">
          <form>
            <div className="inputBox inputBoxFront">
              <label>
                <i className="fa-solid fa-user" />
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input"
                required=""
              />
            </div>
            <div className="inputBox inputBoxFront">
              <label>
                <i className="fa-solid fa-lock" />
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              Log in
            </button>
            <div className="user">
              New user? <span className="newUser">Sign Up</span>
            </div>
          </form>
        </div>
      </div>
      {/* --------------------------- back ---------------------------------- */}
      <div className="container back">
        <div className="top topBack">
          <span>Thunder Coding</span>
        </div>
        <div className="form formBack">
          <form>
            <div className="inputBox inputBoxBack">
              <label>
                <i className="fa-solid fa-t" />
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input"
                required=""
              />
            </div>
            <div className="inputBox inputBoxBack">
              <label>
                <i className="fa-solid fa-envelope" />
              </label>
              <input
                type="email"
                placeholder="Email id"
                className="input"
                required=""
              />
            </div>
            <div className="inputBox inputBoxBack">
              <label>
                <i className="fa-solid fa-user" />
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input"
                required=""
              />
            </div>
            <div className="inputBox inputBoxback">
              <label>
                <i className="fa-solid fa-lock" />
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input"
                required=""
              />
            </div>
            <button type="submit" className="btn btnBack">
              Sign Up
            </button>
            <div className="user userBack">
              Existing user? <span className="existingUser">log In</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
