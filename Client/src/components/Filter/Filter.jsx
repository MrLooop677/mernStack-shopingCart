import React from "react";
import "../../css/Filter/Filter.css";
const Filter = ({ size, order, HandleBySize, HandleByOrder }) => {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="num-of-products">Number of Products 5</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select" onChange={HandleBySize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select" onChange={HandleByOrder}>
          <option value="latest">Latest</option>
          <option value="lowest">lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
