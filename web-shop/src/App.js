//criar componete funcional usando "rafce" que nos permite criar com facilidade componetes funcionais
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import{Products, Navbar} from './components';
import { useSearchParams } from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    //gancho
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    console.log(cart)

    return(
        <div>
            <Navbar />
            <Products products={products}  onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App; 