import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
  constructor(props) {
    console.log("I'm contructor, I'll be called only once upon intiliaziaion (Mounting Phase)")
    super();
    this.state = {
      qty: 0,
    };
    // this.qty = 0;
  }

  onQtyDecrease = () => {
    // this.qty = this.qty - 1;
    // this.forceUpdate();
    // this.state.qty = this.state.qty - 1; // Wrong update
    this.setState({ qty: this.state.qty - 1 });
    // console.log("Quantity decreased");
  };

  onQtyIncrease = () => {
    // this.qty = this.qty + 1;
    // this.state.qty = this.state.qty + 1;// Wrong update
    this.setState({ qty: this.state.qty + 1 });
    // console.log("Quantity Increased");
  };

  componentDidMount() {
    console.log("I'm componentDidMount and I'll be called only once in Mounting Phase")
  }

  componentDidUpdate() {
    console.log("I'm componentDidUpdate and I'll be called on every state change (Updating Phase)");
  }

  componentWillUnmount() {
    console.log("I'm componentWillUnmount, and I'll be called only when the component is removed fromt the screen i.e (Unmounting Phase)");
  }

  static getDerivedStateFromProps() {
    console.log("I'm get derivedstateFromProps method");
    return null;
  }

  shouldComponentUpdate() {
    console.log("I'm shouldComonentUpdate method and I'll be called on every change (Updating Phase)");
    return true;
    // return false;
  }

  getSnapshotBeforeUpdate() {
    console.log("I'm getSnapshotBeforeUpdate and I'll be called on every change (Updating Phase)");
    return null;
  }

  render() {
    console.log("I'm render method, I'll be triggered on every change")
    const product = this.props.product;
    // console.log(this.props.product);
    return (
      <div className="product-card">
        <img src={product.image} alt="" />
        <div className="product-info">
          <h5 className="title">{product.title}</h5>
          <p className="price">Price Rs {product.price}</p>
          <p className="category">{product.tags}</p>
        </div>
        <div className="cta">
          <button onClick={this.onQtyDecrease}>-</button>
          {this.state.qty}
          <button onClick={this.onQtyIncrease}>+</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
