import React from "react";
import TimelineEventCard from "../../components/TimelineEventCard";
import { Grid, createTheme } from "@mui/material";
import { Container } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

const Timeline = ({eventId, setEventId}) => {
  const events = [
    {
    id: 1,
    title: 'Walk on the Queen Street',
    description: 'Breathe in the crisp fall air. Explore the beautiful autumn foliage, hear the crunch of the leaves in melodious synchrony with your steps. Join before global warming takes it away forever.',
    picture: 'https://picsum.photos/id/10/690/400',
    location: 'Queen Street | Toronto',
    totalParticipant: 6,
    currentParticipant: 4,
    eventLink: 
    <Button to="/ClimateChangeDetails" component={Link}>
    Learn More
    </Button>
  },
    {
    id: 2,
    title: 'Game Night',
    description: 'Join us for a gaming session! We will be playing Mario Kart and Super Smash Bros. Free to attend and for all skill levels. Refreshments are provided.',
    picture: 'https://picsum.photos/id/100/690/400',
    location: '226 Yonge Street | Toronto',
    totalParticipant: 12,
    currentParticipant: 6,
    eventLink: 
    <Button to="/GameEventDetails" component={Link}>
    Learn More
    </Button>
  },
    {
    id: 3,
    title: 'Slam Poetry',
    description: 'Are you looking for a way to let out all those pesky emotions? We are looking for lonely young students who have a passion for poetry. Drinks are provided.',
    picture: 'https://picsum.photos/id/200/690/400',
    location: '4492 London Street West | Toronto',
    totalParticipant: 30,
    currentParticipant: 2,
    eventLink: 
    <Button to="/PoetryDetails" component={Link}>
    Learn More
    </Button>
  },
  {
    id: 4,
    title: 'Full Moon Viewing - see description',
    description: 'The full moon is upon us. To celebrate, we will be going to Queens park at the stroke of midnight this Saturday to lay on the grass and gaze longingly at the night sky. Some howling experiences necessary.',
    picture: 'https://picsum.photos/id/70/690/400',
    location: 'Queens Park | Toronto',
    totalParticipant: 6,
    currentParticipant: 5,
    eventLink: 
    <Button to="/MoonDetails" component={Link}>
    Learn More
    </Button>
  },
  {
    id: 5,
    title: 'Blood Drive',
    description: 'Are you a fan of plasma? Do you get an insatiable hunger every time you are in the presence of fresh blood? Are you a type A, B, AB, O, or other? If so, you may qualify for receiving up to one liter of fresh plasma. We will have a temporary blood truck at Queens Park this Saturday at Midnight, the best time of day. Feel free to hang around after.',
    picture: 'https://picsum.photos/id/40/690/400',
    location: 'Queens Park | Toronto',
    totalParticipant: 5,
    currentParticipant: 3,
    eventLink: 
    <Button to="/BloodEventDetails" component={Link}>
    Learn More
    </Button>
  },
  {
    id: 6,
    title: 'Martial Arts Club',
    description: 'Join if you are looking for a chance to get to practice martial arts! Looking for those with a particular vendetta against supernatural beings. We meet at night at Queens Park',
    picture: 'https://picsum.photos/id/155/690/400',
    location: 'Queens Park | Toronto',
    totalParticipant: 10,
    currentParticipant: 2,
    eventLink: 
    <Button to="/FightEventDetails" component={Link}>
    Learn More
    </Button>
  },
  {
    id: 7,
    title: 'Movie Night',
    description: "Watch the critically acclaimed Cats 2: Electric Boogaloo in theatres with a group of cat enthusiasts. If it's anything like the first, it's sure to be a great time.",
    picture: 'https://picsum.photos/id/26/690/400',
    location: '3829 Jarvis Street East | Toronto',
    totalParticipant: 50,
    currentParticipant: 47,
    eventLink: 
    <Button to="/CatsEventDetails" component={Link}>
    Learn More
    </Button>
  }
  ]

  const eventRender = (event) => {
    return (
      <Grid item xs={12} sm={6}>
        <TimelineEventCard key={event.id} eventId={eventId} setEventId={setEventId} {...event}/>
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
    sx={{background: 'linear-gradient(120deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
    backgroundSize: 'cover'}}
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
