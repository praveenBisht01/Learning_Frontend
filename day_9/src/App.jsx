import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import {Link} from 'react-router-dom'
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <div className="nav">
        priyanshu___
        <div>
          <Link to="/home">Home </Link>
          <Link to="/About"> About</Link>
          <Link to="/contect"> Contect</Link>
         <Link to= "/Product">Product</Link>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/product" element={<Product/>} /> 
      </Routes>
    </div>
  );
};

export default App;
