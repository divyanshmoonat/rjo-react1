import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./container/Home/Home";

const App = (props) => {
  return (
    <div className="App">
      <Header />
        <Home />
      <Footer />
    </div>
  );
};

export default App;
