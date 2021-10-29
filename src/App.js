import React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import { createEvent } from './views/Event/create-event';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container maxidth='lg'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/createEvent" exact component={createEvent}/>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
