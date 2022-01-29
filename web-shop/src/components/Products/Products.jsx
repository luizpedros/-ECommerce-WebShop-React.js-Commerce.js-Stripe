import React from "react";
import { Grid } from "@material-ui/core";

//products
const products = [
    {id: 1, 
     name:'Shoes', 
     descripotion: 'Running shoes.'},
    {id: 2, 
     name:'Macbok', 
     descripotion: 'Apple macbook'}
];

//products container
const Products = () => {
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((products)=>(
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product= {product}/>    
                </Grid> 
            ))}
        </Grid>
    </main>
}

export default Products;