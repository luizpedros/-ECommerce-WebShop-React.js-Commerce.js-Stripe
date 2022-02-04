//criar componete funcional usando "rafce" que nos permite criar com facilidade componetes funcionais
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import{Products, Navbar} from './components';
import { useSearchParams } from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    //gancho
    useEffect(() => {
        fetchProducts();
    }, [])

    return(
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App; 