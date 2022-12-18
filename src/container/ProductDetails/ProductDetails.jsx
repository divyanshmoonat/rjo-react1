import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

import { CONSTANTS } from "../../utils/contsnts";

import "./ProductDetails.css";

const ProductDetails = () => {
  const [state, setState] = useState({
    productDetails: {},
  });

  // const params = useParams();
  // console.log(params)
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setState({ ...state, productDetails: location.state });
  }, []);

  const searchParams = new URLSearchParams(location.search);

  // useEffect(() => {
  //   // const productId = params.id;
  //   const productId = searchParams.get('productId');
  //   axios
  //     .get(CONSTANTS.API_BASE_URL + "products/" + productId)
  //     .then((response) => {
  //       console.log(response.data);
  //       setState({ ...state, productDetails: response.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(path[2]);
  // }, []);

  return (
    <div className="product-details-container">
      <img src={state.productDetails.image} alt="Prodcut Image" />
      <div className="info">
        <h1>{state.productDetails.title}</h1>
        <h3>{state.productDetails.category}</h3>
        <p>{state.productDetails.description}</p>
        {state.productDetails.rating && (
          <div>
            <span>Ratigs : {state.productDetails.rating.rate}/5</span>
            <br />
            <span>Rated By : {state.productDetails.rating.count} users</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
