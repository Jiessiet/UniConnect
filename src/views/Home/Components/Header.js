import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Stack } from "@mui/material";
import Background from "./bg_img_simp.png"
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import { lightGreen } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import AnimatedBg from "./AnimatedBg";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  colorText: {
    color: '#4B592D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#C9D991',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#C9D991',
    fontSize: '4rem',
  },
    animatedBg: {
      color: '#FFFFFF'
  },
  button:{
    backgroundColor:'#C9D991',
    mt: '2px',
    pt: '5px',
  },
  waveBorder: {
    pb: '0px'
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Fragment>
  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
  sx={{
    // backgroundImage: `url(${Background})`,
    backgroundColor: '#F2F2F2',
    backgroundSize: 'cover',
    backgroundPosition: 'center'}}
>
    <div className={classes.root} id="header">

<Grid
  container
  // direction="row"
  justifyContent="center"
  alignItems="center"
>
      <AppBar
        elevation={0}
        position="static"
        color='transparent'
      >
        <Stack direction="row">
          <img
            className={classes.logoImage}
            src="https://cdn.discordapp.com/attachments/886450083346915328/903444358714490900/globe-removebg-preview.png"
            alt="logo"
          />
        </Stack>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={20}

        >
          <Avatar alt="Logo" src="/images/Connected-pana.png"
          sx={{ width: 400, height: 400, bgcolor: lightGreen[100]} }
          />
        </Stack>

        <Paper
          component="form"
          sx={{
            p: '2px 3px',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            margin: 2}}
        >
          <InputBase
            sx={{ ml: 1, flex: 1}}
            placeholder="Find buddies :)"
            margin='none'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px', pb: '20px' }} aria-label="search">
          <Link to="/Event">
            <SearchIcon />
          </Link>
          </IconButton>
        </Paper>

        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}>
              
            <Button variant="contained" 
            className={classes.button}
             href="/login">
                <Typography variant="button" component="div" gutterBottom
                sx={{ cursor: 'pointer'}}>
                    Login
                </Typography>
            </Button>

            <Button href="/signup" variant="contained" 
            className={classes.button}>
                <Typography variant="button" component="div" gutterBottom
                sx={{ cursor: 'pointer' }}>
                    Signup
                </Typography>

            </Button>

          </Grid>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
      </div>
      </Collapse>
      </Grid>
    </div>
    </Grid>
    <AnimatedBg
        upperColor="#F2F2F2"
        lowerColor="#C9D991"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      /> 
    </Fragment>
  );
}