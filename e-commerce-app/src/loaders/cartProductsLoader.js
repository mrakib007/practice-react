import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in database, you have to use async await
    const savedCart = [];
    const storedCart = getShoppingCart();
    console.log(products);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    //if needed to send more than one thing.
    // return [products,savedCart]; return as array
    // return {products,cart: savedCart} return as object
    return savedCart;
}

export default cartProductsLoader;