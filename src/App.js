import React, { Fragment, useState } from "react";
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline/Timeline';
import Event from './views/Event/Event';

import Eventcopy from './views/Event copy/Event'
import ClimateChangecopy from './views/Event copy/ClimateChange'
import GameEventcopy from './views/Event copy/GameEvent'
import Poetrycopy from './views/Event copy/Poetry'
import Mooncopy from './views/Event copy/Moon'
import BloodEventcopy from './views/Event copy/BloodEvent'
import FightEventcopy from './views/Event copy/FightEvent'
import CatsEventcopy from './views/Event copy/CatsEvent'

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
import AccountSetup from './views/AccountSetup/AccountSetup';
import AddFriend from './views/AddFriend/AddFriend';
import { createCourse } from './views/Course/create-course';
import AnimatedBg from './views/Home/Components/AnimatedBg';
import InterestFinder from './views/InterestFinder';
import { useUser } from "./Contexts/UserContext";
import DashboardRouter from "./views/Dashboard/DashboardRouter";
import LoginRouter from "./views/Login/LoginRouter";
import SignupRouter from "./views/Signup/SignupRouter";
import ResetPassword from "./views/ResetPassword/ResetPassword"
import UserProfile from "./views/Profile/UserProfile/UserProfile";
import AdminProfile from "./views/Profile/AdminProfile/AdminProfile";
import PastEvents from './views/Event/PastEvents';
import UpcomingEvents from './views/Event/UpcomingEvents';
import ProfileRouter from "./views/Profile/ProfileRouter";

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
  // const [userType, setUsertype] = useState("unauthorized");
  // //const [userType, setUsertype] = useState("user");
  const history = useHistory();
  const { currentUser, setCurrentUser} = useUser()

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <React.StrictMode>
          <Switch>
            <Route path="/" exact component={Home} />
            <div>
            <Navbar />
            <Route path="/timeline" exact> <Timeline eventId={eventId} setEventId={setEventId}/> </Route>
            
            <Route exact path="/Event" exact element> <Event eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/ClimateChange" exact element> <ClimateChange eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/BloodEvent" exact element> <BloodEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/CatsEvent" exact element> <CatsEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/FightEvent" exact element> <FightEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/GameEvent" exact element> <GameEvent eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/Moon" exact element> <Moon eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/Poetry" exact element> <Poetry eventId={eventId} setEventId={setEventId} /> </Route>

            <Route exact path="/Eventcopy" exact element> <Eventcopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/ClimateChangecopy" exact element> <ClimateChangecopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/BloodEventcopy" exact element> <BloodEventcopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/CatsEventcopy" exact element> <CatsEventcopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/FightEventcopy" exact element> <FightEventcopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/GameEventcopy" exact element> <GameEventcopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/Mooncopy" exact element> <Mooncopy eventId={eventId} setEventId={setEventId} /> </Route>
            <Route exact path="/Poetrycopy" exact element> <Poetrycopy eventId={eventId} setEventId={setEventId} /> </Route>

            <Route exact path="/EventDetails" exact component={EventDetails} />
            <Route path="/BloodEventDetails" exact component={BloodEventDetails} />
            <Route path="/CatsEventDetails" exact component={CatsEventDetails} />
            <Route path="/ClimateChangeDetails" exact component={ClimateChangeDetails} />
            <Route path="/FightEventDetails" exact component={FightEventDetails} />
            <Route path="/GameEventDetails" exact component={GameEventDetails} />
            <Route path="/MoonDetails" exact component={MoonDetails} />
            <Route path="/PoetryDetails" exact component={PoetryDetails} />

            <Route path="/login" exact component={LoginRouter} />
            <Route path="/signup" exact component={SignupRouter} />
            <Route path="/Event" exact element> <Event eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/past-events" exact component={PastEvents} />
            <Route path="/upcoming-events" exact component={UpcomingEvents} />
            <Route path="/EventDetails" exact component={EventDetails} />
            <Route path="/createEvent" exact component={createEvent}/>
            <Route path="/AccountSetup" exact component={AccountSetup}/>
            <Route path="/dashboard" exact component={DashboardRouter}/>
            <Route path="/AddFriend" exact component={AddFriend}/>
            <Route path="/createCourse" exact component={createCourse}/>
            <Route path="/AnimatedBg" exact component={AnimatedBg}/>
            <Route path="/interestFinder" exact component={InterestFinder}/>
            <Route path="/ResetPassword" exact component={ResetPassword}/>
            <Route path="/Profile" exact component={ProfileRouter}/>
            </div>
          </Switch>
        </React.StrictMode>     
    </div>
  </ThemeProvider>
  );
}

export default App;