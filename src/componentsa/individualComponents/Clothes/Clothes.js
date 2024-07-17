import React, { useEffect, useState } from "react";
//import productDetails from "../../Data/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCart from "../../AddToCart";
import {BASEURL,ClothesProduct} from '../../URL';
import axios from "axios";

const Clothes = () => {

  const [productDetails,setProductDetails]=useState([]);
  useEffect(()=>{
    axios.get(BASEURL+ClothesProduct)
    .then((res)=>{
      setProductDetails(res.data);
      console.log(res.data);
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <div className="items-wrapper">
      <div className="items-title">
        <h4>Clothes</h4>
      </div>
      <div className="items">
        {" "}
        {productDetails.map((product) => {
          if (product.category === "clothes") {
            return (
              <div key={product.id} className="item">
                <Link to={`/products/${product.id}`}>
                  <div className="product-img">
                    <img alt={product.name} src={product.image} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                  </div>
                </Link>
                <div className="price-add">
                  <h5 id="product-price">${product.price}</h5>
                  <FaShoppingCart className="shopping-cart-icon" onClick={() => AddToCart(product.id)} />{" "}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Clothes;
