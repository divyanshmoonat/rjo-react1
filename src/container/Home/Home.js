import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import ProductCard from "../../components/ProductCard/ProductCard";
import LoaderImage from "../../assets/images/loader.gif";
import { CONSTANTS } from "../../utils/contsnts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

const Home = () => {
  const [state, setState] = useState({
    currentProductIndex: 0,
    productsList: [],
    productLlistCopy: [],
    cartItems: 0,
    showLoader: false,
  });

  const [temp, setTemp] = useState(false);

  // const p = new Promise((res, rej) => {
  //   setTimeout(res, 5000);
  // });

  // async function test() {
  //   try {
  //     const res = await p;
  //     const res2 = await q;
  //     const res3 = await r;

  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function test() {
  //   p.then((res) => {
  //     Q.then((res) => {
  //       r.then((res) => {
  //         console.log(res);
  //       }).then((err) => console.log(err));
  //     }).then((err) => console.log(err));
  //   }).catch((err) => console.log(err));
  // }

  useEffect(() => {
    // console.log("From use effect");
    setState({ ...state, showLoader: true });
    axios
      .get(CONSTANTS.API_BASE_URL + "products")
      .then((response) => {
        // console.log(response.data);
        setState({
          ...state,
          productsList: response.data,
          productLlistCopy: response.data,
          showLoader: false,
        });
        setTimeout(() => {
          setTemp(true);
        }, 10000);
      })
      .catch((error) => {
        setState({ ...state, showLoader: false });
        console.log(error);
        // alert(error.message);
      });
    // return () => {
    //   console.log("Home component unmounted");
    // };
  }, []);

  // useEffect(() => {
  //   console.log("Use effect without dependency array");
  // });

  // useEffect(() => {
  //   console.log("The value of temp variable has changed");
  // }, [temp]);

  const onSearchValueChange = (e) => {
    const searchKey = e.target.value;
    if (searchKey == "") {
      setState({ ...state, productsList: state.productLlistCopy });
      return;
    }
    const filteredList = state.productsList.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setState({ ...state, productsList: filteredList });
  };

  const onPreviousClick = () => {
    setState({
      ...state,
      currentProductIndex: state.currentProductIndex - 1,
    });
  };

  const onNextClick = () => {
    setState({ ...state, currentProductIndex: state.currentProductIndex + 1 });
  };

  const onQtyUpdate = (operation) => {
    if (operation === "INC") {
      setState({ ...state, cartItems: state.cartItems + 1 });
    } else if (operation === "DEC") {
      setState({ ...state, cartItems: state.cartItems - 1 });
    }
  };

  return (
    <main className="home">
      <section className="carousel-container"></section>
      {/* <section className="cart">Items in Cart : {state.cartItems}</section> */}
      <div>
        <input
          onChange={onSearchValueChange}
          placeholder="Search with item name.."
          className="search-box"
          type="text"
        />
      </div>
      <section>
        <h2>Stationary</h2>
        <button onClick={onPreviousClick}>Previous</button>
        <button onClick={onNextClick}>Next</button>
        <div className="products-container">
          {state.showLoader && <img src={LoaderImage} alt="Loader" />}

          {state.productsList.map((product) => {
            return (
              <ProductCard
                key={product.title}
                product={product}
                onQtyUpdate={onQtyUpdate}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Electronics</h2>
      </section>
    </main>
  );
};

export default Home;
