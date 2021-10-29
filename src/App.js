import React from 'react';
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import Login from './views/Login/login.js'
import Signup from './views/Signup/signup'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container maxidth='lg'>
          <Switch>
            <Route path="/" exact component={Home} />
            <div>
            <Navbar />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            </div>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;