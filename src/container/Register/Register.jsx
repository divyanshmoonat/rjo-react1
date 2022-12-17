import React from "react";
import axios from "axios";

import "./Register.scss";
import { CONSTANTS } from "../../utils/contsnts";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
      errors: {
        hasErrors: true,
        errorMsgs: {},
      },
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  validateRegistrationForm = (data) => {
    const errors = {};
    // let hasErrors = false;
    let hasErrors = this.state.errors.hasErrors;
    if (data.fullName.length === 0 || data.fullName.length > 20) {
      errors.fullName = "Full name  should be between 1 to 20 characters";
    }
    if (data.password.length < 8) {
      errors.password = "Password should contain minimum 8 character";
    }
    hasErrors = Object.keys(errors).length > 0 ? true : false;
    this.setState({
      errors: {
        hasErrors: hasErrors,
        errorMsgs: errors,
      },
    });
    return hasErrors;
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // Custom validations
    // If validations pass, call the API else show errors
    const hasErrors = this.validateRegistrationForm(this.state);
    if (!hasErrors) {
      const registrationData = this.state;
      axios
        .post(CONSTANTS.API_BASE_URL + "users", registrationData)
        .then((response) => {
          console.log(response.data);
          this.setState({
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
      console.log("Form submiited", this.state);
    }
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ fullName: "XYZ" });
    // }, 10000);
  }

  render() {
    return (
      <div className="registration-container">
        <h2>Register Here</h2>
        <form onSubmit={this.onFormSubmit} className="registration-form">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              value={this.state.fullName}
              onChange={this.onInputChange}
              id="fullName"
              type="text"
            />
          </div>
          {this.state.errors.errorMsgs.fullName && (
            <span className="error-span">
              {this.state.errors.errorMsgs.fullName}
            </span>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.onInputChange}
              id="email"
              type="email"
            />
          </div>

          <div>
            <label htmlFor="dob">DOB</label>
            <input
              value={this.state.dob}
              onChange={this.onInputChange}
              id="dob"
              type="date"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.onInputChange}
              id="password"
              type="password"
            />
            {this.state.errors.errorMsgs.password && (
              <span className="error-span">
                {this.state.errors.errorMsgs.password}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              value={this.state.confirmPassword}
              onChange={this.onInputChange}
              id="confirmPassword"
              type="password"
            />
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
