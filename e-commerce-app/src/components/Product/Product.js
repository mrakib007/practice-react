import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,quantity,seller,price,img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;