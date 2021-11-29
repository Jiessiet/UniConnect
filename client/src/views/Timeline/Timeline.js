import React from "react";
import TimelineEventCard from "../../components/TimelineEventCard/TimelineEventCard";
import { Grid, createTheme } from "@mui/material";
import { Container } from "@material-ui/core";
import { events } from '../../constant/Events';

const Timeline = () => {

  const eventRender = (event) => {
    return (
      <Grid item xs={12} sm={6}>
        <TimelineEventCard key={event.id} {...event} />
      </Grid>
    );
  };

  const eventsRender = (events) => {
    console.log("hello")
    const eventsArray = [];
    events.forEach((event) => {
      eventsArray.push(eventRender(event));
    });
    return eventsArray;
  };

  return (
    <Grid
      justifyContent='center'
      sx={{
        background: 'linear-gradient(120deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
        backgroundSize: 'cover', paddingBottom: 5
      }}
    >
      <Container
      // sx={{mt: 12}}
      >
        <Grid container spacing={3} mt={12}>
          {eventsRender(events)}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Timeline;
