import React from "react";
import { useState, useEffect } from "react";
import "./SignUpForm.css";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("The page has mounted");
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) {
      setError("You must enter a username and password, please try again");
      return;
    } else if (username.length < 4 || password < 4) {
      setError("Username and Password needs to be more than 4 characters");
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();
      console.log(result);
      setToken(result.token);
      setError(null);

      alert("Open up console log to see if sign up was successful");
    } catch (error) {
      setError(error.message);
    }
  } //last curly to handelSubmit

  //to reset the form
  function resetForm() {
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <div className="myForm">
        <h2>Sign Up For Coupons</h2>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Username: {""}
            <input
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password: {""}
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* // className="passwordInput"  */}
          </label>

          <div className="myButtons">
            <button className="submitButton">Submit</button>
            <input
              type="reset"
              value="Reset Form"
              className="resetForm"
              onClick={resetForm}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
