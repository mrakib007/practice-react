import React from 'react';
import './TShirt.css';

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" srcSet="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;