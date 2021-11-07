import React, { Fragment, useState } from "react";
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import Login from './views/Login/login.js'
import Signup from './views/Signup/signup'

import Event from './views/Event/Event'
import ClimateChange from './views/Event/ClimateChange'
import GameEvent from './views/Event/GameEvent'
import Poetry from './views/Event/Poetry'
import Moon from './views/Event/Moon'
import BloodEvent from './views/Event/BloodEvent'
import FightEvent from './views/Event/FightEvent'
import CatsEvent from './views/Event/CatsEvent'

import EventDetails from './views/Event/EventDetails'
import ClimateChangeDetails from './views/Event/ClimateChangeDetails'
import GameEventDetails from './views/Event/GameEventDetails'
import PoetryDetails from './views/Event/PoetryDetails'
import MoonDetails from './views/Event/MoonDetails'
import BloodEventDetails from './views/Event/BloodEventDetails'
import FightEventDetails from './views/Event/FightEventDetails'
import CatsEventDetails from './views/Event/CatsEventDetails'

import { createEvent } from './views/Event/create-event';
import AccountSetup from './views/AccountSetup/AccountSetup'
import profile from './views/Profile/User/profile.js'
import Dashboard from './views/Dashboard/Admin/dashboard';
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
  const [eventId, setEventId] = useState(0);

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <BrowserRouter>
      <React.StrictMode>
          <Switch>
            <Route path="/" exact component={Home} />
            <div>
            <Navbar />
            <Route path="/timeline" exact> <Timeline eventId={eventId} setEventId={setEventId}/> </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            
            <Route exact path="/Event" exact element> <Event eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/ClimateChange" exact element> <ClimateChange eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/BloodEvent" exact element> <BloodEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/CatsEvent" exact element> <CatsEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/FightEvent" exact element> <FightEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/GameEvent" exact element> <GameEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/Moon" exact element> <Moon eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/Poetry" exact element> <Poetry eventId={eventId} setEventId={setEventId} /> </Route>

            <Route exact path="/EventDetails" exact component={EventDetails} />
            <Route path="/BloodEventDetails" exact component={BloodEventDetails} />
            <Route path="/CatsEventDetails" exact component={CatsEventDetails} />
            <Route path="/ClimateChangeDetails" exact component={ClimateChangeDetails} />
            <Route path="/FightEventDetails" exact component={FightEventDetails} />
            <Route path="/GameEventDetails" exact component={GameEventDetails} />
            <Route path="/MoonDetails" exact component={MoonDetails} />
            <Route path="/PoetryDetails" exact component={PoetryDetails} />

            <Route path="/createEvent" exact component={createEvent}/>
            <Route path="/AccountSetup" exact component={AccountSetup}/>
            <Route path="/profile" exact component={profile}/>
            <Route path="/dashboard" exact component={Dashboard}/>
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