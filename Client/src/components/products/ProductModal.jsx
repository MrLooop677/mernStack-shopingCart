import React from "react";
import Modal from "react-modal";

const ProductModal = ({ closeModal, product }) => {
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <div className="product-info">
        <div className="close-icon" onClick={closeModal}>
          &times;
        </div>
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
