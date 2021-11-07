import React, { Fragment, useState } from "react";
import Container from '@mui/material/Container';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Timeline from './views/Timeline';
import Event from './views/Event/Event'
import EventDetails from './views/Event/EventDetails'
import { createEvent } from './views/Event/create-event';
import AccountSetup from './views/AccountSetup/AccountSetup'
import AddFriend from './views/AddFriend/AddFriend'
import { createCourse } from './views/Course/create-course';
import AnimatedBg from './views/Home/Components/AnimatedBg';
import InterestFinder from './views/InterestFinder';
import { useUser } from "./Contexts/UserContext";
import DashboardRouter from "./views/Dashboard/DashboardRouter";
import LoginRouter from "./views/Login/LoginRouter";
import SignupRouter from "./views/Signup/SignupRouter";

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
            <Route path="/login" exact component={LoginRouter} />
            <Route path="/signup" exact component={SignupRouter} />
            <Route path="/Event" exact element> <Event eventId={eventId} setEventId={setEventId} /> </Route>
            <Route path="/EventDetails" exact component={EventDetails} />
            <Route path="/createEvent" exact component={createEvent}/>
            <Route path="/AccountSetup" exact component={AccountSetup}/>
            <Route path="/dashboard" exact component={DashboardRouter}/>
            <Route path="/AddFriend" exact component={AddFriend}/>
            <Route path="/createCourse" exact component={createCourse}/>
            <Route path="/AnimatedBg" exact component={AnimatedBg}/>
            <Route path="/interestFinder" exact component={InterestFinder}/>
            </div>
          </Switch>
        </React.StrictMode>     
    </div>
  </ThemeProvider>
  );
}

export default App;