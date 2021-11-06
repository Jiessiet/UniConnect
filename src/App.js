import React, { Fragment } from "react";
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import Login from './views/Login/login.js'
import Signup from './views/Signup/signup'
import Event from './views/Event/Event'
import EventDetails from './views/Event/EventDetails'
import { createEvent } from './views/Event/create-event';
import AccountSetup from './views/AccountSetup/AccountSetup'
import profile from './views/Profile/User/profile.js'
import AddFriend from './views/AddFriend/AddFriend'
import { createCourse } from './views/Course/create-course';
import AnimatedBg from './views/Home/Components/AnimatedBg';
import InterestFinder from './views/InterestFinder';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Varela',
      'round',
    ].join(','),
  },

  palette: {
    primary: {
      main: "#A9BF5A",
    },
    secondary: {
      main: "#4B592D",
    },
  },

});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <BrowserRouter>
      <React.StrictMode>
          <Switch>
            <Route path="/" exact component={Home} />
            <div>
            <Navbar />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/Event" exact component={Event} />
            <Route path="/EventDetails" exact component={EventDetails} />
            <Route path="/createEvent" exact component={createEvent}/>
            <Route path="/AccountSetup" exact component={AccountSetup}/>
            <Route path="/profile" exact component={profile}/>
            <Route path="/AddFriend" exact component={AddFriend}/>
            <Route path="/createCourse" exact component={createCourse}/>
            <Route path="/AnimatedBg" exact component={AnimatedBg}/>
            <Route path="/interestFinder" exact component={InterestFinder}/>
            </div>
          </Switch>
          </React.StrictMode>
      </BrowserRouter>
    </div>
  </ThemeProvider>
  );
}

export default App;