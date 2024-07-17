import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
//import productDetails from "../../Data/ProductDetails";
import AddToCart from "../../AddToCart";
import axios from "axios";

import {BASEURL,WomenProduct} from '../../URL';
const WomenProducts = () => {
  const [productDetails,setProductDetails]=useState([]);
  useEffect(()=>{
    axios.get(BASEURL+WomenProduct)
    .then((res)=>{
      setProductDetails(res.data);
      console.log(res.data);
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <div className="items-wrapper">
    <div className="items-title">
      <h4>Women Products</h4>
    </div>
    <div className="items">       {productDetails.map((product)=>{
                                        if(product.gender==="women")
                                        {
                                            return(<div key={product.id} className="item">
                                                {/*         <Link to={`/products/${product.id}`}>
                                                 */}        <div className="product-img">
                                                          <img alt={product.name} src={product.image} />
                                                        </div>
                                                        <div className="product-details">
                                                          <h1 id="product-name">{product.name}</h1>
                                                          <h4 id="product-description">{product.description}</h4>
                                                        </div>
                                                {/*         </Link>
                                                 */}        <div className="price-add">
                                                          <h5 id="product-price">${product.price}</h5>
                                                          <FaShoppingCart className="shopping-cart-icon" onClick={()=>{AddToCart(product.id)}}/>
                                                        </div>
                                                      </div>);

                                        }
                                            
                                        })}
    </div></div>
  );
};

export default WomenProducts;

/*  */
