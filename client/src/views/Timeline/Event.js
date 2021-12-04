import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, createTheme, Stack, Button } from '@mui/material';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useUser } from '../../Contexts/UserContext';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  const { currentUser } = useUser();

  return (
    <Card style={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CardMedia component='img' height='250' image={event.photo} style={{ padding: 10 }} />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent style={{ paddingBottom: 16 }}>
            <Typography gutterBottom variant='h5' component='div'>
              {event.name}
              {console.log("event: ", event)}
            </Typography>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              {event.description}
            </Typography>
            <Stack direction='row' mt={3} mb={0}>
              <LocationOnSharpIcon />
              <Typography variant='overline' display='block' color='textSecondary'>
                {event.location}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1} ml={1}>
              <Typography variant='body1' display='block' color='textSecondary'>
                {event.attendees.length} / {event.attendeeLimit}
              </Typography>
              <PeopleAltIcon />
            </Stack>
            <Typography variant='body1' display='block' color='textSecondary'>
              <Button
                // to={

                // }
                component={Link}
              >
                Learn More
              </Button>
            </Typography>
            {(currentUser && currentUser.userType) && (
              <>
                <Button>Delete The Post</Button>
              </>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Event;
