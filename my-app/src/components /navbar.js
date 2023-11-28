import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/meet-us">Meet Us</Link>
    <Link to="/book-now">Book Now</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
