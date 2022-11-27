import React from "react";
import Page404 from "../../assets/images/404page.jpg";

class NotFound extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Oops!! The page you are looking for does not exists</h1>
        <img src={Page404} alt="Not Found" />
      </div>
    );
  }
}

export default NotFound;
