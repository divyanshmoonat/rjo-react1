import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addItemsToCart, removeItemsFromCart } from "../../actions/cartActions";

import "./ProductCard.scss";

const ProductCard = (props) => {
  // const [qty, setQty] = useState(0);
  // const [availableQty, setAvailableQty] = useState(5);
  // const [isOutOfStock, setOutOfStock] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    qty: 0,
    availableQty: 10,
    isOutOfStock: false,
    isItemInWishlist: false,
  });

  const product = props.product;

  const onQtyChange = (type) => {
    let newQty = state.qty;
    let newAvailableQty = state.availableQty;
    if (type === "INC") {
      newQty++;
      newAvailableQty--;
      dispatch(addItemsToCart());
    } else if (type === "DEC") {
      newQty--;
      newAvailableQty++;
      dispatch(removeItemsFromCart());
    }
    setState({
      ...state,
      qty: newQty,
      availableQty: newAvailableQty,
      isOutOfStock: newAvailableQty === 0,
    });
    props.onQtyUpdate(type);
  };

  const onProductClick = () => {
    // console.log("Product clicked", props.product.id);
    // navigate("/product-details/" + props.product.id);
    // navigate(-1);
    navigate("/product-details?productId=" + props.product.id, {
      state: props.product,
    });
  };

  const isOutOfStock = useMemo(() => {
    // for (let i = 0; i < 1000000000; i++) {}
    // console.log("Determining the stock");
    return state.availableQty === 0;
  }, [state.availableQty]);

  const onWishlistClick = () => {
    setState({ ...state, isItemInWishlist: !state.isItemInWishlist });
  };

  return (
    <div className="product-card">
      <div onClick={onProductClick}>
        {/* <Link to={"/product-details/" + props.product.id}> */}
        <img src={product.image} alt="Product Img" />
        {/* </Link> */}
        <div className="product-info">
          <h5 className="title">{product.title}</h5>
          <p className="price">Price Rs {product.price}</p>
          <p className="category">{product.tags}</p>
        </div>
      </div>

      <div className="cta">
        <button disabled={state.qty === 0} onClick={() => onQtyChange("DEC")}>
          -
        </button>
        {state.qty}
        <button
          disabled={state.isOutOfStock}
          onClick={() => onQtyChange("INC")}
        >
          +
        </button>
      </div>
      {isOutOfStock && <span className="ooo">Out of Stock</span>}

      <button onClick={onWishlistClick}>
        {state.isItemInWishlist ? "Remove" : "Add"} to whishlist
      </button>
      <br />
      {state.isItemInWishlist && <span>Item added to wishlist</span>}
    </div>
  );
};

export default ProductCard;
