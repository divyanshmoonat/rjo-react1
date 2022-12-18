import React, { useState, useRef } from "react";
import axios from "axios";

import "./Register.scss";
import { CONSTANTS } from "../../utils/contsnts";

const Register = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    errors: {
      hasErrors: true,
      errorMsgs: {},
    },
  });

  const fullNameRef = useRef(null);

  const onInputChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const validateRegistrationForm = (data) => {
    const errors = {};
    // let hasErrors = false;
    let hasErrors = state.errors.hasErrors;
    if (data.fullName.length === 0 || data.fullName.length > 20) {
      errors.fullName = "Full name  should be between 1 to 20 characters";
    }
    if (data.password.length < 8) {
      errors.password = "Password should contain minimum 8 character";
    }
    hasErrors = Object.keys(errors).length > 0 ? true : false;
    setState({
      ...state,
      errors: {
        hasErrors: hasErrors,
        errorMsgs: errors,
      },
    });
    return hasErrors;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(fullNameRef.current.value);
    // Custom validations
    // If validations pass, call the API else show errors
    const hasErrors = validateRegistrationForm(state);
    if (!hasErrors) {
      const registrationData = state;
      axios
        .post(CONSTANTS.API_BASE_URL + "users", registrationData)
        .then((response) => {
          console.log(response.data);
          setState({
            ...state,
            fullName: "",
            email: "",
            dob: "",
            password: "",
            confirmPassword: "",
          });
          alert("Regiration completed successfully, please login to continue");
        })
        .catch((err) => console.log(err));
      // Call User Registraion REST API
      console.log("Form submiited", state);
    }
  };

  return (
    <div className="registration-container">
      <h2>Register Here</h2>
      <form onSubmit={onFormSubmit} className="registration-form">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            ref={fullNameRef}
            // value={state.fullName}
            // onChange={onInputChange}
            id="fullName"
            type="text"
          />
        </div>
        {state.errors.errorMsgs.fullName && (
          <span className="error-span">{state.errors.errorMsgs.fullName}</span>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={state.email}
            onChange={onInputChange}
            id="email"
            type="email"
          />
        </div>

        <div>
          <label htmlFor="dob">DOB</label>
          <input
            value={state.dob}
            onChange={onInputChange}
            id="dob"
            type="date"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            value={state.password}
            onChange={onInputChange}
            id="password"
            type="password"
          />
          {state.errors.errorMsgs.password && (
            <span className="error-span">
              {state.errors.errorMsgs.password}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={state.confirmPassword}
            onChange={onInputChange}
            id="confirmPassword"
            type="password"
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
