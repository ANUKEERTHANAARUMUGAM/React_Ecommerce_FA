import React, { useEffect, useState } from "react";
import find from "lodash/find";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './index.css';
import AddToCart from "../../AddToCart";
import axios from "axios";
import { BASEURL, AllProducts } from '../../URL';

const ShowProduct = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const productId = parseInt(id);

  useEffect(() => {
    console.log("useEffect running");
    axios.get(BASEURL + AllProducts)
      .then((res) => {
        setProductDetails(res.data);
        console.log("Fetched data:", res.data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  const selectedProduct = find(productDetails, ["id", productId]);
  console.log("Selected product:", selectedProduct);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-product">
      <div className="product-wrapper">
        <div className="item-image">
          <img
            className="product-image"
            src={selectedProduct.image}
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
          <FaShoppingCart
            className="shopping-cart-icon"
            onClick={() => AddToCart(selectedProduct.id)}
          />
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
                  <div className="item">
                    <div className="product-img">
                      <img alt={product.name} src={product.image} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{product.name}</h1>
                      <h4 id="product-description">
                        {product.description}
                      </h4>
                    </div>
                    <div className="price-add">
                      <h5 id="product-price">${product.price}</h5>
                      <FaShoppingCart
                        className="shopping-cart-icon"
                        onClick={() => AddToCart(product.id)}
                      />
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;