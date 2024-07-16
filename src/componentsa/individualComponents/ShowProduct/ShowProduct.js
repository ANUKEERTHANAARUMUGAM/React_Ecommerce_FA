import React from "react";
import find from "lodash/find";

//find method from lodash package ->takes 2 params
//1.object
//2.condition
//returns first matching object
import productDetails from "../../Data/ProductDetails";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './index.css'
import AddToCart from "../../AddToCart";

const ShowProduct = () => {
  /*     const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
   */
  const { id } = useParams();
  const productId = parseInt(id);
  console.log(productId);

  console.log(parseInt(id));
  const selectedProduct = find(productDetails, ["id", productId]);
  console.log(selectedProduct);
  return (
    <div className="show-product">
      <div className="product-wrapper">
        <div className="item-image">
          <img
            className="product-image"
            src={selectedProduct.img}
            alt="product"
          />
        </div>
        <div className="item-name">
          <div className="product-info">
            <h3 id="product-name">{selectedProduct.name}</h3>
          </div>
          <div className="product-bio">
            <p id="product-description">{selectedProduct.description}</p>
            <p id="product-price">${selectedProduct.price}</p>
          </div>
          <FaShoppingCart className="shopping-cart-icon" onClick={()=>AddToCart(product.id)}/>{" "}

</div>
          <div className="similar-products">
           <center><h2>You might also like</h2></center> 
            {productDetails.map((product) => {
              if (
                product.gender === selectedProduct.gender &&
                product.type === selectedProduct.type &&
                product.name !== selectedProduct.name
              ) {
                return (
                  <Link to={`/products/${product.id}`}>
                    <div key={product.id} className="item">
                      <Link to={`/products/${product.id}`}>
                        <div className="product-img">
                          <img alt={product.name} src={product.img} />
                        </div>
                        <div className="product-details">
                          <h1 id="product-name">{product.name}</h1>
                          <h4 id="product-description">
                            {product.description}
                          </h4>
                        </div>

                      </Link>
                      <div className="price-add">
                        <h5 id="product-price">${product.price}</h5>
                        <FaShoppingCart className="shopping-cart-icon" onClick={()=>AddToCart(product.id)}/>{" "}
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
        </div>

        {/* <div className="product-review">
          <div className="stars">
            <Icon small id="add-icon">star</Icon>
            <Icon small id="add-icon">star</Icon>
            <Icon small id="add-icon">star</Icon>
            <Icon small id="add-icon">star</Icon>
            <Icon small id="add-icon">star_half</Icon>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ShowProduct;
