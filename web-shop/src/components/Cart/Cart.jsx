import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles'
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();

    console.log(cart)
    const EmptyCart = () => (
        <Typography variant='subtitle1'>Você não tem itens no seu carrinho de compras, 
            <Link to='/' className={classes.link}>adicione itens para começar</Link>!
        </Typography>
    );
    
    if (!cart.line_items) return 'Loading ...';    

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal: {cart.subtotal.formatted.with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Esvaziar Carrinho</Button>
                    
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Comprar</Button>
                </div> 
            </div>
        </>
    )

    return(    
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom>Seu carrinho de compras.</Typography>
            { !cart.line_items.length ? EmptyCart()  : FilledCart()}     
        </Container> 
    )
};

export default Cart;
