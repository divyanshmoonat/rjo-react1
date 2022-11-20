import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProductIndex: 0,
      productDetails: [
        {
          image:
            "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
          title: "Box of Pencils",
          price: 100,
          tags: "Pens, Notebooks & More",
        },
        {
          image:
            "https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
          title: "Cycle",
          price: 10000,
          tags: "Vehicles, bikes",
        },
        {
          image:
            "https://rukminim1.flixcart.com/image/200/200/krayqa80/book/k/b/b/guide-to-uttar-pradesh-up-nirikshak-platoon-commander-upsi-exam-original-imag54mwhwxgj6pj.jpeg?q=70",
          title: "Book",
          price: 200,
          tags: "Study, books",
        },
        {
          image:
            "https://rukminim1.flixcart.com/image/200/200/light/h/9/h/imported-bicycle-rear-light-5-led-usb-rechargeable-waterproof-original-imaeq7hj3gppgcxz.jpeg?q=70",
          title: "Cycle Lights",
          price: 500,
          tags: "Accessories, Vehicles",
        },
      ],
    };
  }

  onPreviousClick = () => {
    this.setState({ currentProductIndex: this.state.currentProductIndex - 1 });
  };

  onNextClick = () => {
    this.setState({ currentProductIndex: this.state.currentProductIndex + 1 });
  };

  render() {
    const productDetails = this.state.productDetails;
    return (
      <main>
        <section>
          <h2>Stationary</h2>
          <button onClick={this.onPreviousClick}>Previous</button>
          <button onClick={this.onNextClick}>Next</button>
          <div className="products-container">
            <ProductCard
              product={productDetails[this.state.currentProductIndex]}
            />
            {/* {productDetails.map((product) => {
              return <ProductCard key={product.title} product={product} />;
            })} */}
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
