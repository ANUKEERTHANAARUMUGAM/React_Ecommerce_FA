import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <h1 id="header-title">Shop Now</h1>
    <div className="links-header">
      <p><Link activeClassName="selected" className="nav-link-header" to="/women">Women</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/men">Men</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/clothes">Clothes</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</Link></p>
    </div>
  </div>  )
     {/*  <p activeClassName="selected" className="nav-link-header" to="/women">Women</p>
      <p activeClassName="selected" className="nav-link-header" to="/men">Men</p>
      <p  activeClassName="selected" className="nav-link-header" to="/clothes">Clothes</p>
      <p activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</p> */}
 
{/*       <p><Link activeClassName="selected" className="nav-link-header" to="/women">Women</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/men">Men</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/clothes">Clothes</Link></p>
      <p><Link activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</Link></p>
 */}
{/*         <p>Women</p>
        <p>Men</p>
        <p>Clothes</p>
        <p>Accessories</p> */}

  
}

export default Header