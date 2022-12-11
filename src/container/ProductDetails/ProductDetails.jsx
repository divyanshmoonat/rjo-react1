import axios from 'axios';
import React from 'react';

import { CONSTANTS } from '../../utils/contsnts';

import './ProductDetails.css';

class ProductDetails extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      productDetails: {}
    };
  }

  componentDidMount() {
    let path = window.location.pathname;
    path = path.split('/');
    const productId = path[2];
    axios.get(CONSTANTS.API_BASE_URL + 'products/' + productId)
      .then(response => {
        console.log(response.data)
        this.setState({ productDetails: response.data });
      })
      .catch(err => {
        console.log(err);
      })
    // console.log(path[2]);
  }

  render() {
    const productDetails = this.state.productDetails;
    return (
      <div className='product-details-container'>
        <img src={productDetails.image} alt='Prodcut Image' />
        <div className='info'>
          <h1>{productDetails.title}</h1>
          <h3>{productDetails.category}</h3>
          <p>{productDetails.description}</p>
          {
            productDetails.rating && (
              <div>
                <span>Ratigs : {productDetails.rating.rate}/5</span>
                <br />
                <span>Rated By : {productDetails.rating.count} users</span>
              </div>
            )
          }

        </div>
      </div>
    )
  }
}

export default ProductDetails;