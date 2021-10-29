import React from 'react';
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container maxidth='lg'>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/timeline" exact component={Timeline} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;