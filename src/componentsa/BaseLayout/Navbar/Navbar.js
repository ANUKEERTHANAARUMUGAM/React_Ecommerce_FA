import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><Link activeClassName="selected" className="nav-link" exact to="/">Home</Link></li>
        <li><Link activeClassName="selected" className="nav-link" to="/women">Women</Link></li>
        <li><Link activeClassName="selected" className="nav-link" to="/men">Men</Link></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <Link to="/cart"><FaShoppingCart/></Link>
    </div>
  </nav>);

}

export default Navbar