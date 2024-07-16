import React from "react";

import PRODUCTS from "../Data/Products";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="content">
     <div className="items-wrapper">
      <div className="items-title">
        <h4>All Items</h4>
      </div>
      <div className="items">
    {PRODUCTS.map(product => {
        console.log(product)
     return (
     <div key={product.id} className="item">
        {/* <Link to={`/products/${product.id}`}> */}
          <div className="product-img">
            <img alt={product.name} src={product.img} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{product.name}</h1>
            <h4 id="product-description">{product.description}</h4>
          </div>
        {/* </Link> */}
        <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          {/*           <Icon small id="add-icon">add_shopping_cart</Icon>
           */}{" "}
        </div>
      </div>
     )
    }
)}
  </div>
    </div>
    </div>
  );
};

export default Home;
