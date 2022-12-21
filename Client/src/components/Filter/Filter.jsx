import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";

const Filter = ({
  size,
  order,
  HandleBySize,
  HandleByOrder,
  productNumber,
}) => {
  return (
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter-title"> Filter </h2>
        <div className="num-of-products">
          Number of Products {productNumber}
        </div>
        <div className="filter-by-size">
          <span>Filter</span>
          <select
            className="filter-select"
            value={size}
            onChange={HandleBySize}
          >
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
          <select
            className="filter-select"
            value={order}
            onChange={HandleByOrder}
          >
            <option value="latest">Latest</option>
            <option value="lowest">lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
    </Flip>
  );
};

export default Filter;
