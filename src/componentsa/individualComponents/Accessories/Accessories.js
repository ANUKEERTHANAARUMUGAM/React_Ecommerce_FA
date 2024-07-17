import React, { useEffect, useState } from "react";
//import productDetails from "../../Data/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";
import AddToCart from "../../AddToCart";
import {AccessoryProducts,BASEURL} from '../../URL'
import axios from "axios";


/* 
import {AccessoryProducts,BASEURL} from '../../URL'

 const [productDetails,setProductDetails]=useState([]);
  useEffect(()=>{
    axios.get(BASEURL+AccessoryProducts)
    .then((res)=>{
      setProductDetails(res.data);
      console.log(res.data);
    })
    .catch((err)=>console.log(err));
  },[]);
 */
/*         <FaShoppingCart className="shopping-cart-icon" className="shopping-cart-icon" /> */
const Accessories = () => {
  const [productDetails,setProductDetails]=useState([]);
  useEffect(()=>{
    axios.get(BASEURL+AccessoryProducts)
    .then((res)=>{
      setProductDetails(res.data);
      console.log(res.data);
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <div className="accessories">
      <div className="accessories-title">
        <h4>Accessories</h4>
      </div>
      <div className="items">
        {" "}
        {productDetails.map((product) => {
          if (product.category === "accessories") {
            return (
              <div key={product.id} className="item">
                <Link to={`/products/${product.id}`}>
                  {" "}
                  <div className="product-img">
                    <img alt={product.name} src={product.image} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                  </div>
                </Link>{" "}
                <div className="price-add">
                  <h5 id="product-price">${product.price}</h5>
                  <FaShoppingCart className="shopping-cart-icon" onClick={()=>AddToCart(product.id)}/>{" "}
                  </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Accessories;
