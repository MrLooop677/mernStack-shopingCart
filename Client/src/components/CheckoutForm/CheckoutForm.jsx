import React from "react";
import "../../css/CheckoutForm/CheckoutForm.css";
import Zoom from "react-reveal/Zoom";
const CheckoutForm = ({ setShowForm, Handlechange, setChangeValue }) => {
  console.log("checkout Form");
  return (
    <>
      <div className="checkout-form">
        <span className="close-icon" onClick={() => setShowForm(false)}>
          {" "}
          &times;{" "}
        </span>
        <Zoom bottom>
          <form onSubmit={Handlechange}>
            <div>
              <label className="checkout-name">Name</label>
              <input
                label={"text"}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) =>
                  setChangeValue((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="checkout-enail">Email</label>
              <input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) =>
                  setChangeValue((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <button type="submit"> {"Check Out"} </button>
            </div>
          </form>
        </Zoom>
      </div>
    </>
  );
};

export default CheckoutForm;
