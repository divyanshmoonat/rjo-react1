import React from "react";
import "./ProductCard.css";

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

  onQtyDecrease = () => {
    // this.qty = this.qty - 1;
    // this.forceUpdate();
    // this.state.qty = this.state.qty - 1; // Wrong update
    this.setState(
      { qty: this.state.qty - 1, availableQty: this.state.availableQty + 1 },
      () => {
        const isOutOfStock = this.state.availableQty === 0 ? true : false;
        this.setState({ isOutOfStock: isOutOfStock });
      }
    );
    this.props.onQtyUpdate("DEC");
    // console.log("Quantity decreased");
  };

  onQtyIncrease = () => {
    // this.qty = this.qty + 1;
    // this.state.qty = this.state.qty + 1;// Wrong update

    this.setState(
      (prevState) => ({
        qty: prevState.qty + 1,
        availableQty: prevState.availableQty - 1,
      }),
      () => {
        this.setState((prevState) => ({
          isOutOfStock: prevState.availableQty === 0,
        }));
      }
    );

    // this.setState(
    //   {
    //     qty: this.state.qty + 1,
    //     availableQty: this.state.availableQty - 1,
    //   },
    //   () => {
    //     const isOutOfStock = this.state.availableQty === 0 ? true : false;
    //     this.setState({ isOutOfStock });
    //   }
    // );
    this.props.onQtyUpdate("INC");
    // console.log("Quantity Increased");
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
          <button disabled={this.state.qty === 0} onClick={this.onQtyDecrease}>
            -
          </button>
          {this.state.qty}
          <button
            disabled={this.state.isOutOfStock}
            onClick={this.onQtyIncrease}
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
