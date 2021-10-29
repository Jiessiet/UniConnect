import React from "react";
import TimelineEventCard from "../../components/TimelineEventCard";
import { Grid, createTheme } from "@mui/material";

const Timeline = () => {
  const events = [
    {title: 'Walk on the Queen Street',
    description: 'Donec vitae eros pulvinar, congue ligula id, elementum leo. Donec scelerisque mauris et suscipit consequat. Phasellus rutrum nunc sodales enim commodo maximus.',
    picture: 'https://picsum.photos/690/400',
    location: 'Queen Street | Toronto',
    totalParticipant: 6,
    currentParticipant: 4
  }
  ]

  return (
    <Grid container spacing={3} mt={4}>
      <Grid item xs={12} sm={6}>
        <TimelineEventCard {...(events[0])}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TimelineEventCard {...(events[0])}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TimelineEventCard {...(events[0])}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TimelineEventCard {...(events[0])}/>
      </Grid>
    </Grid>
  );
};

export default Timeline;
