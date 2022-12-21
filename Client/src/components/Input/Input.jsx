import React from "react";
import "../../css/Input/Input.css";
const Input = ({ label, type, name, onChange, placeholder }) => {
  return (
    <div>
      <label className="checkout-enail"> {label} </label>
      <input
        type={type}
        required
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
