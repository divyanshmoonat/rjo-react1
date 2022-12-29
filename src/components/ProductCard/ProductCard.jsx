import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.tags}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
