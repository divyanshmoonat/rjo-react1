import React from "react";

import "./Register.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // Call User Registraion REST API
    console.log("Form submiited");
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ fullName: "XYZ" });
    }, 10000);
  }

  render() {
    return (
      <div>
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

          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.onInputChange} id="email" type="email" />
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
              onChange={this.onInputChange}
              id="password"
              type="password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
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
