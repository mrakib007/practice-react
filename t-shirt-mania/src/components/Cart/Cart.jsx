import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Add Some Products</p>;
    }else{
        message = <div>Thanks for purchasing from us.</div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span className='purple'>Buy More...</span> : <span>Check out some products.</span>}
            {message}
            <p className={`bold bordered ${cart.length === 2 ?'yellow' : 'purple'}`}>Something</p>
            {
                cart.map(tshirt => <p
                     key={tshirt._id}
                     >{tshirt.name} <button
                      onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length !== 3 || <h3>Third one or not?
                </h3>
            }
        </div>
    );
};

export default Cart;

/**
 * 1. Use if else to set a variable that will contain an element, components.
 * 2. Ternary : Condition ? 'for true' : 'for false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS CLASSES
 * 1. Use Ternary.
 * 2. Ternary inside template string.
 */