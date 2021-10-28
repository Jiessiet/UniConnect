import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:'url("/images/Online-pana.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#606c38'
  }

}));

export default function App(){
  const classes = useStyles();
  return (
    // <div className='App'>
    <div className ={classes.root}>;
      <BrowserRouter>
        <Container maxidth='lg'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};
