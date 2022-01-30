import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';

//products
const products = [
    {id: 1, 
     name:'Shoes', 
     descripotion: 'Running shoes.', price: 'R$5', image:'https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc='},
    {id: 2, 
     name:'Macbook', 
     descripotion: 'Apple macbook', price: 'R$10', image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000'},
];

//products container
const Products = () => {
    const classes = useStyles();


    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>

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