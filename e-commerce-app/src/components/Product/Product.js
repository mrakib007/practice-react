import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, rating, seller, price, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" srcset="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rate: {rating} stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
