import React from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard/ProductCard";
import LoaderImage from "../../assets/images/loader.gif";
import { CONSTANTS } from "../../utils/contsnts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Home.scss";

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
};
class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentProductIndex: 0,
      productsList: [],
      productLlistCopy: [],
      cartItems: 0,
      showLoader: false,
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({ showLoader: true });
    // fetch("https://fakestoreapi.com/products", { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios
      .get(CONSTANTS.API_BASE_URL + "products")
      .then((response) => {
        console.log(response.data);
        this.setState({
          productsList: response.data,
          productLlistCopy: response.data,
          showLoader: false,
        });
      })
      .catch((error) => {
        this.setState({ showLoader: false });
        console.log(error);
        // alert(error.message);
      });
    // setTimeout(() => {
    //   console.log("Updating state value now");
    //   this.setState({ cartItems: 0 });
    // }, 10000);
  }

  onPreviousClick = () => {
    this.setState({ currentProductIndex: this.state.currentProductIndex - 1 });
  };

  onNextClick = () => {
    this.setState({ currentProductIndex: this.state.currentProductIndex + 1 });
  };

  onQtyUpdate = (operation) => {
    if (operation === "INC") {
      this.setState({ cartItems: this.state.cartItems + 1 });
    } else if (operation === "DEC") {
      this.setState({ cartItems: this.state.cartItems - 1 });
    }
  };

  onSearchValueChange = (e) => {
    const searchKey = e.target.value;
    if (searchKey == "") {
      this.setState({ productsList: this.state.productLlistCopy });
      return;
    }
    const filteredList = this.state.productsList.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    this.setState({ productsList: filteredList });
  };

  render() {
    console.log("Hello from render method");
    const productsList = this.state.productsList;
    return (
      <main className="home">
        <section className="carousel-container">
          {/* <Slider {...carouselSettings}>
            {productsList.map((product) => {
              return (
                <ProductCard
                  key={product.title}
                  product={product}
                  onQtyUpdate={this.onQtyUpdate}
                />
              );
            })}
            {productsList.map((product) => {
              return (
                <ProductCard
                  key={product.title}
                  product={product}
                  onQtyUpdate={this.onQtyUpdate}
                />
              );
            })}
          </Slider> */}
        </section>
        <section className="cart">
          Items in Cart : {this.state.cartItems}
        </section>
        <div>
          <input
            onChange={this.onSearchValueChange}
            placeholder="Search with item name.."
            className="search-box"
            type="text"
          />
        </div>
        <section>
          <h2>Stationary</h2>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
          <div className="products-container">
            {/* <ProductCard
              product={productsList[this.state.currentProductIndex]}
            /> */}
            {this.state.showLoader && <img src={LoaderImage} alt="Loader" />}

            {productsList.map((product) => {
              return (
                <ProductCard
                  key={product.title}
                  product={product}
                  onQtyUpdate={this.onQtyUpdate}
                />
              );
            })}
          </div>
        </section>

        <section>
          <h2>Electronics</h2>
          {/* <ProductCard /> */}
        </section>
      </main>
    );
  }
}

export default Home;
