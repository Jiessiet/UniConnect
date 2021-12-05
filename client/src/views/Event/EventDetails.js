import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  AvatarGroup,
  Modal
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';
import axios from '../../api';

const EventDetails = () => {
  const [open, setOpen] = useState(false);
  const [creator, setCreator] = useState({});
  const history = useHistory();
  const location = useLocation();
  const { currentUser } = useUser();
  const event = location.state.event.event;
  const creatorId = event.creator;
  const attendeeNames = [];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(async () => {
    const getCreatorUrl = `/api/users/${creatorId}`;
    const getCreator = () => {
      return axios
        .get(getCreatorUrl)
        .then((res) => {
          console.log('res.data: ', res.data);
          setCreator(res.data);
          console.log('creator: ', creator);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getAttendees = (attendeeId) => {
      const getAttendeeUrl = `/api/users/${attendeeId}`;
      return axios
        .get(getAttendeeUrl)
        .then((res) => {
          attendeeNames.push(res.data.name);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCreator(url);
    event.attendees.map((attendee) => {
        getAttendees(attendee)
    });
  }, []);

  const checkAttending = () => {
    let result = false;

    try {
      currentUser.attendingEvents.forEach((attendingEvent) => {
        if (attendingEvent === event._id) {
          result = true;
        }
      });
    } catch {
      history.push('/login');
    }

    return result;
  };

  return (
    <Grid container alignItems='center' justifyContent='center' spacing={8} pt={15} direction='row'>
      <Grid item direction='column' xs={5}>
        <Grid item>
          <CardMedia component='img' height='400' image={event.photo} style={{ padding: 10 }} />
        </Grid>

        <Grid item container direction='column'>
          <CardContent>
            <Typography mt={1} variant='h3'>
              {event.name}
            </Typography>
            <Typography mt={1} variant='h5'>
              {event.location}
            </Typography>
            <Typography mt={1}>{event.description}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid item xs={3} container spacing={5} direction='column'>
        <Grid item>
          <Paper textAlign='center' style={{ padding: 20 }}>
            <Typography variant='h6'>host: {creator.name}</Typography>
            <Typography variant='h6'>Attendee Limit: {event.attendeeLimit}</Typography>
            <Typography variant='h6'>Attending : {event.attendees.length}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            {...(currentUser.userType && 'component={Button}')}
            fullWidth
            textAlign='center'
            style={{
              padding: 20,
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={handleOpen}
          >
            <Typography variant='h6' mb={1}>
              Attendees
            </Typography>
            <AvatarGroup total={event.attendees.length} max={5}>
              {event.attendees.length == 0 ? (
                <Typography>No attendees yet. Be the first one!</Typography>
              ) : (
                event.attendees.map((attendees) => {
                  <Avatar>
                    <PersonIcon />
                  </Avatar>;
                })
              )}
            </AvatarGroup>
          </Paper>
          <Modal open={open} onClose={handleClose}>
            <Box
              position='absolute'
              top='50%'
              left='50%'
              transfrom='translate(-50%, -50%)'
              backgroundColor='white'
              boxShadow='24'
              p={4}
            >
              <Typography mb={2} variant='h6' component='h2'>
                Attendees
              </Typography>
              <Grid container spacing={3}>
                {/* {event.attendees.map((attendees) => {
                <Avatar>
                  <PersonIcon />
                </Avatar>;
              })} */}
                <Grid item>
                  <Avatar size='large'>
                    <PersonIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Grid>
        <Grid item>
          {checkAttending() ? (
            <Button variant='contained' fullWidth size='large' disabled='true'>
              Attending
            </Button>
          ) : (
            <Button variant='contained' fullWidth size='large'>
              Attend
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventDetails;
