import React from "react";
import "../../css/products/Products.css";
export const Products = ({ productData }) => {
  return (
    <div className="products-wrapper">
      {productData.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#">
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button>Add To Cart </button>
        </div>
      ))}
    </div>
  );
};
