import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 items-center bg-cyan-800">
      <h2 className="text-xl font-bold">Neeraj____</h2>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contect">Contect</Link>
        <Link to="/product">Product</Link>
        <Link to="*">NotFounf</Link>

        
      </div>
    </div>
  );
};

export default Navbar;
