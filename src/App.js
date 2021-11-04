import React from 'react';
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Event from './views/Event/Event';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Event" exact component={Event} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;