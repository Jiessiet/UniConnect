import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Signup from './views/Signup/signup'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container maxidth='lg'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
