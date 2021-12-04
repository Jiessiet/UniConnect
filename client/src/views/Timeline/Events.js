import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Event from './Event';
import axios from '../../api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    axios
      .get('/api/events')
      .then((res) => {
        console.log('res.data: ', res.data);
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid
      justifyContent='center'
      sx={{
        background: 'linear-gradient(120deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
        backgroundSize: 'cover',
        paddingBottom: 5
      }}
    >
      <Container>
        <Grid container spacing={3} mt={12}>
          {events.map((event) => {
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
export default Events;
