import React from 'react';

//layout dos produtos
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton, CardActionArea } from '@material-ui/core';

//carrinho
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({product}) => {
  return( 
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography vaeiant='h5' gutterBottom>
                    {product.price}
                </Typography>
            </div>
            <Typography vaeiant='h2' color='textSecondary'>{product.description}
                    {product.price}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconBotton Aria-label="Add to Cart">
                <AddShoppingCart />
            </IconBotton>
        </CardActions>
    </Card>
  );
}

export default Product;
