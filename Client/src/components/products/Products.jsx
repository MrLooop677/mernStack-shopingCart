import React, { useState } from "react";
import "../../css/products/Products.css";
import ProductModal from "./ProductModal";
export const Products = ({ productData, addToCart }) => {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = (_) => setProduct(false);
  return (
    <div className="products-wrapper">
      {productData.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button onClick={() => addToCart(product)}>Add To Cart </button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
};
