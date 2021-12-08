import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Event from '../Timeline/Event';
import axios from '../../api';
import { useUser } from '../../Contexts/UserContext';

const UpcomingEvents = () => {
  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
}
  const [events, setEvents] = useState([]);
  const { currentUser } = useUser();

  useEffect(async () => {
    const eventList = []
    const getEvent = (eventId) => {
      axios
        .get(`/api/events/${eventId}`)
        .then((res) => {
          console.log('res.data: ', res.data);
          eventList.push(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    currentUser.attendingEvents.map((event) => {
      getEvent(event);
    });

    setEvents(eventList)
  }, []);
  return (
    <Grid
      justifyContent='center'
      sx={{
        background: 'linear-gradient(120deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
        backgroundSize: 'cover',
        paddingBottom: 5,
        height: '100vh'
      }}
    >
      <Container>
        <Grid container spacing={3} mt={12}>
          {events.map((event) => {
            if (!event.completed)
              return (
                <Grid item xs={12} sm={6}>
                  <Event event={event} />
                </Grid>
              );
          })}
        </Grid>
      </Container>
    </Grid>
  );
};

export default UpcomingEvents;
