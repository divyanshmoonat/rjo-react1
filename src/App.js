import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./container/Home/Home";
import ContactUs from "./container/ContactUs/ContactUs";
import AboutUs from "./container/AboutUs/AboutUs";
import NotFound from "./container/NotFound/NotFound";
import Register from "./container/Register/Register";
import ProductDetails from "./container/ProductDetails/ProductDetails";

const history = createBrowserHistory();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact-us",
//     element: <ContactUs />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
// ]);

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/product-details/:id" element={<ProductDetails />} /> */}
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
