import React from "react";
import "../../css/Cart/Cart.css";
const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cart.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>there is {cart.length} products in the cart</p>
        )}
      </div>
      {/* Modal */}

      <div className="cart-items">
        {cart.map((product) => {
          return (
            <div className="cart-item">
              <img src={product.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p> title: {product.title} </p>
                  <p> qty: {product.qty}</p>
                  <p> price: {product.price}</p>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(product);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Checkout Form  */}
    </div>
  );
};

export default Cart;
