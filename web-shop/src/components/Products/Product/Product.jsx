import React from 'react';

//layout dos produtos
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';

//carrinho
import { AddShoppingCart } from '@material-ui/icons';

const Product = () => {
  return <div className={classes.root}>
    <CardMedia className={classes.media} image='' title={product.name}/>
    <CardContent>
        <div className={classes.cardContent}>
            <Typography vaeiant='h5' gutterBottom>
                {product.name}
            </Typography>
            <Typography vaeiant='h5' gutterBottom>
                {product.price}
            </Typography>
        </div>
    </CardContent>

  </div>;
};

export default Product;
