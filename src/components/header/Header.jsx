import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// class Header extends React.Component {
// 	constructor() {
// 		super();
//     // Code to initalize our component
//   }

//   render() {
//     return (
//       <header>
//         <nav className="nav-bar">
//           <div>
//             {/* CLIENT SIDE REACT ROUTING */}
//             <Link to="/">Home</Link>
//             <Link to="/contact-us">Contact Us</Link>
//             <Link to="/about-us">About Us</Link>

//             {/* BELOW IS DEFAULT HTML ROUTNIG */}
//             {/* <a href="/">Home</a>
//             <a href="/contact-us">Contact Us</a>
//             <a href="/about-us">About Us</a> */}
//           </div>
//           <div>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//             {/* <a>Login</a> */}
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }

const Header = () => {
  return (
    <header>
        <nav className="nav-bar">
          <div>
            {/* CLIENT SIDE REACT ROUTING */}
            <Link to="/">Home</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/about-us">About Us</Link>

            {/* BELOW IS DEFAULT HTML ROUTNIG */}
            {/* <a href="/">Home</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/about-us">About Us</a> */}
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            {/* <a>Login</a> */}
          </div>
        </nav>
      </header>
  );
};
export default Header;
