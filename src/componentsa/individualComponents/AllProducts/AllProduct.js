import React from "react";
import productDetails from "../../Data/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
/*     <div className="items-wrapper">
    <div className="items-title">
      <h4>All Items</h4>
    </div>
    <div className="items"> */
const AllProduct = () => {
  return (
    <div className="items-wrapper">
    <div className="items-title">
      <h4>All Items</h4>
    </div>
    <div className="items">

    {
      productDetails.map((product)=>{
        
        return(
        <div key={product.id} className="item">
{/*         <Link to={`/products/${product.id}`}>
 */}        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
        </div>
{/*         </Link>
 */}        <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          <FaShoppingCart/>
        </div>
      </div>)
      })
    }</div>
  </div>
);
};

export default AllProduct;
