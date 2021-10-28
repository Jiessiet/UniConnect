import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';

import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
    height: '100vh',
    fontFamily: 'Nunito',
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
    color: '#d4e09b',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
  },
}));

export default function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
   <div className={classes.root}>
    <AppBar className ={classes.appbar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}> 
      <h1 className={classes.appbarTitle}>UniConnect</h1>
      <IconButton>
      </IconButton>
      </Toolbar>
    </AppBar>

    <Collapse in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
      <div className={classes.container}>
        <h1 className={classes.title}> 
        Welcome to <br /> <span className={classes.colorText}>UniConnect</span>
        </h1>
        <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
      </div>
    </Collapse>

  </div>
  );
}