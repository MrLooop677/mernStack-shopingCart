import React from "react";
import { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const Cart = ({ cart, removeFromCart }) => {
  const [showForm, setShowForm] = useState(false);
  const [ChangeValue, setChangeValue] = useState("");
  const Handlechange = (e) => {
    e.preventDefault();
    console.log(ChangeValue);
  };
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
      {cart.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total :
            {cart.reduce((acc, p) => {
              return (acc += p.price * p.qty);
            }, 0)}{" "}
          </div>
          <button onClick={() => setShowForm(true)}> select products </button>
        </div>
      )}
      {/* Checkout Form  */}
      {showForm && (
        <CheckoutForm
          setShowForm={setShowForm}
          Handlechange={Handlechange}
          setChangeValue={setChangeValue}
        />
      )}
    </div>
  );
};

export default Cart;
