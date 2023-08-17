import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    
    const handleAddToCart = tshirt =>{
        console.log(tshirt)
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}/>)
            }
            </div>
            <div className='cart-container'>
                <Cart/>
            </div>
        </div>
    );
};

export default Home;