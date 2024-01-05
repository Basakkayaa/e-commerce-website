// import Header from "./companents/Header";
// import Main from "./companents/Main"
// import Footer from "./companents/Footer"
// import Dowland from "./companents/Dowland";
import About from "./companents/About";
import "./assets/css/style.css";
import { Routes,Route } from "react-router-dom";
import Home from "./companents/Home";
import Product from "./companents/Product";
import Category from "./companents/Category";
// import { Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
  
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path="/Product" Component={Product}/>
          <Route path="/Category" Component={Category}/>
      </Routes>
    </div>
  );
}

export default App;
