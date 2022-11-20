import React from "react";
import "./Header.css";

class Header extends React.Component {
	constructor() {
		super();
    // Code to initalize our component
  }

  render() {
    return (
      <header>
        <nav className="nav-bar">
          <div>
            <a>Home</a>
            <a>Contact Us</a>
            <a>About Us</a>
          </div>
          <div>
            <a>Login</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
