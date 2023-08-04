import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        // cart.push(product); this can't be done cause props are immutable
        let newCart = [];
        // const newCart = [...cart,product];
        //if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1

        //this is the hard way.
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product];
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id);
      }

      useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1 : get Id
        for(const id in storedCart){
            // step 2 : Get the product by using id
            const addedProduct = products.find(product =>
                 product.id === id);
            if(addedProduct){
                // step 3 : get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4 : add the addedProduct to the saved cart.
                savedCart.push(addedProduct);
            }
        }
        //step 5 : set the cart.
        setCart(savedCart);
      },[products])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;