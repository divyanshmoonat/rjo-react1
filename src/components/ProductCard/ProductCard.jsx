import React from "react";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  constructor(props) {
    // console.log("I'm contructor, I'll be called only once upon intiliaziaion (Mounting Phase)")
    super();
    this.state = {
      qty: 0,
      availableQty: 5,
      isOutOfStock: false,
    };
    this.interval = null;
    // this.qty = 0;
  }

  onQtyChange = (type) => {
    let qty = this.state.qty;
    let availableQty = this.state.availableQty;
    if (type === "INC") {
      qty++;
      availableQty--;
    } else if (type === "DEC") {
      qty--;
      availableQty++;
    }

    this.setState({ qty: qty, availableQty: availableQty }, () => {
      this.setState((prevState) => ({
        isOutOfStock: prevState.availableQty === 0,
      }));
    });
    this.props.onQtyUpdate(type);
  };

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   if (this.state.qty < 6) {
    //     this.setState({ qty: this.state.qty + 1 });
    //   } else {
    //     // console.log("Clear interval else part");
    //     clearInterval(this.interval);
    //   }
    //   console.log("I'm timer", this.interval);
    // }, 1000);
    // setTimeout(() => {
    //   this.setState({ qty: 5 });
    // }, 3000);
    // console.log(
    //   "I'm componentDidMount and I'll be called only once in Mounting Phase"
    // );
  }

  // componentDidUpdate() {
  //   if (this.state.qty !== 10) {
  //     this.setState({ qty: 10 });
  //   }
  //   console.log(
  //     "I'm componentDidUpdate and I'll be called on every state change (Updating Phase)"
  //   );
  // }

  // componentWillUnmount() {
  //   console.log("I'm componentWillUnmount, and I'll be called only when the component is removed fromt the screen i.e (Unmounting Phase)");
  // }

  // static getDerivedStateFromProps() {
  //   console.log("I'm get derivedstateFromProps method");
  //   return null;
  // }

  // shouldComponentUpdate() {
  //   console.log("I'm shouldComonentUpdate method and I'll be called on every change (Updating Phase)");
  //   return true;
  //   // return false;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("I'm getSnapshotBeforeUpdate and I'll be called on every change (Updating Phase)");
  //   return null;
  // }

  render() {
    // console.log("I'm render method, I'll be triggered on every change")
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
          <button
            disabled={this.state.qty === 0}
            onClick={() => this.onQtyChange("DEC")}
          >
            -
          </button>
          {this.state.qty}
          <button
            disabled={this.state.isOutOfStock}
            onClick={() => this.onQtyChange("INC")}
          >
            +
          </button>
        </div>
        {/* <span
          style={{ display: this.state.isOutOfStock ? "inline-block" : "none" }}
          className="ooo"
        >
          Out of Stock
        </span> */}
        {this.state.isOutOfStock && <span className="ooo">Out of Stock</span>}
        {/* {this.state.isOutOfStock ? (
          <span className="ooo">Out of Stock</span>
        ) : null} */}
      </div>
    );
  }
}

export default ProductCard;
