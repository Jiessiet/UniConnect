import React from 'react'
import TimelineEventCard from '../../components/TimelineEventCard/TimelineEventCard'
import { events } from '../../constant/Events'
import { Grid, Container, Typography } from '@mui/material'

const UpcomingEvents = () => {

    const eventRender = (event) => {
        return (
            <Grid item xs={12} sm={6}>
                <TimelineEventCard key={event.id} {...event}/>
            </Grid>
        );
      };
    
    const eventsRender = (events) => {
        const eventsArray = [];
        events.forEach((event) => {
            if (event.id %2 == 1) {
                eventsArray.push(eventRender(event));
            }
        });
    return eventsArray;
    };

    return (
        <Grid
        justifyContent='center'
        sx={{background: 'linear-gradient(120deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
        backgroundSize: 'cover'}}
        >
            <Container>
                <Typography style={{marginTop: 80, paddingTop: 20}} variant='h2'>Upcoming Events</Typography>
                <Grid container spacing={3} mt={12}>
                {eventsRender(events)}
                </Grid>
            </Container>
        </Grid>
    )}

export default UpcomingEvents
