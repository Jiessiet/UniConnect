import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.appbar} position='static' color='transparent'>
      <div>
      <Link to="/">
        <img className={classes.logoImage}
          src='https://cdn.discordapp.com/attachments/886450083346915328/903444358714490900/globe-removebg-preview.png'
          alt='logo'
        />
        </Link>
        {/* <Typography variant='h5' component={Link} to='/' className={classes.logo}>
          UniConnect
        </Typography> */}
      </div>
      <Toolbar className={classes.toolbar}>
        <Button component={Link} to='/login' color='inherit'>Login</Button>
        <Button component={Link} to='/signup' color='inherit'>Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
