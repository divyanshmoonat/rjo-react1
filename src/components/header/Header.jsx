import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  // console.log(user);

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
          <div className="cart-container">
            <img
              className="cart-icon"
              src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
              alt="Cart"
            />
            <span className="cart-count">{cart.itemsCount}</span>
          </div>
          {user.isLoggedIn ? (
            <span>Welcome, {user.userData.user}</span>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
          {/* <a>Login</a> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;
