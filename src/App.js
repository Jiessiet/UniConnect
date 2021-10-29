import React from 'react';
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import Login from './views/Login/login.js'
import Signup from './views/Signup/signup'
import Event from './views/Event/Event'
import EventDetails from './views/Event/EventDetails'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container maxidth='lg'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/event" exact component={Event} />
            <Route path="/eventdetails" exact component={EventDetails} />

          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;