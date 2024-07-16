import React from "react";
import productDetails from "../../Data/ProductDetails";
import "./index.css";
import { Link } from "react-router-dom";


const Cart = () => {
  return (
    <div className="items-wrapper">
      <div className="items-title">
        <h4>Cart Items</h4>
      </div>
      <div className="items">
        {productDetails.map((product) => {
          if (product.inCart === true) {
            return (
              <div key={product.id} className="item">
                <Link to={`/products/${product.id}`}>
                  <div className="product-img">
                    <img alt={product.name} src={product.img} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                  </div>
                </Link>
                <div className="price-add">
                  <h5 id="product-price">${product.price}</h5>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
