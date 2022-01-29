import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

//products
const products = [
    {id: 1, 
     name:'Shoes', 
     descripotion: 'Running shoes.', price: 'R$5'},
    {id: 2, 
     name:'Macbook', 
     descripotion: 'Apple macbook', price: 'R$10'},
];

//products container
const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product= {product}/>    
                </Grid> 
            ))}
        </Grid>
    </main>
    )
}    

export default Products;