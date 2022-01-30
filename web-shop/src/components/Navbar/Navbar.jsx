//Barra de navegação responsiva
import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, ManuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
  return( 
  <div>
      <AppBar position='fixed' className={classes.AppBar} color="inherit"> 
        <Toolbar>
            <Typography variant='h6' className={classes.title}>
                <img src='' about='client' height='25px' className={classes.image} />
                Commerce.js
            </Typography>
        </Toolbar>
      </AppBar>

  </div>
  )
}

export default Navbar;

