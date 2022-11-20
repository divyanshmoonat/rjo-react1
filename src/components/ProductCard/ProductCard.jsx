import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    // console.log(this.props.product);
    return (
      <div className="product-card">
        <img
          src={this.props.product.image}
          alt=""
        />
        <div className="product-info">
          <h5 className="title">{this.props.product.title}</h5>
          <p className="price">Price Rs {this.props.product.price}</p>
          <p className="category">{this.props.product.tags}</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
