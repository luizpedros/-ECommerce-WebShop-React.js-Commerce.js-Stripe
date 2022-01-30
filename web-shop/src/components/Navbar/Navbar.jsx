//Barra de navegação responsiva
import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, ManuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

//logo tipo
import logo from '../../assets/shop-icon.png'
//estilos
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();


  return( 
  <div>
      <AppBar position='fixed' className={classes.AppBar} color="inherit"> 
        <Toolbar>
            <Typography variant='h6' className={classes.title} color='inherit'>
                <img src={logo} about='client' height='25px' className={classes.image} />
                Comercil
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.button}>
                <IconButton aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>

        </Toolbar>
      </AppBar>

  </div>
  )
}

export default Navbar;

