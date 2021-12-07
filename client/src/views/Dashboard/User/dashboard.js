import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import CreateEventModal from '../../../components/Modals/createEventModal';
import FriendListModal from '../../../components/Modals/friendListModal';
import AddFriend from '../../../components/Modals/addFriendModal';
import AddTags from '../../../components/Modals/addTagsModal';
import { Modal } from '@mui/material';
import axios from '../../../api';
import {
  Grow,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Paper,
  Container,
  Box,
  Button
} from '@material-ui/core';

import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import Event from '../../Timeline/Event';
import { useUser } from '../../../Contexts/UserContext';

const Dashboard = () => {
  const [openEvent, setOpenEvent] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const [categoryList, setCategories] = React.useState([]);
  const [events, setEvents] = useState([]);
  const { currentUser } = useUser();
  const [friends, setFriends] = useState([]);

  const [openFriendsList, setOpenFriendsList] = React.useState(false);

  const [openTags, setOpenTags] = React.useState(false);

  const [openFriend, setOpenFriend] = React.useState(false);
  const handleOpenFriend = () => setOpenFriend(true);

  const handleCloseEvent = () => setOpenEvent(false);
  const handleCloseFriendsList = () => setOpenFriendsList(false);
  const handleCloseTags = () => setOpenTags(false);
  const handleCloseFriend = () => setOpenFriend(false);

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

    const friendsList = [];
    const getFriend = (friendId) => {
      axios
        .get(`/api/users/${friendId}`)
        .then((res) => {
          console.log('res.data: ', res.data);
          friendsList.push(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    currentUser.friends.map((friend) => {
      getFriend(friend);
    });
    setFriends(friendsList)

  }, []);

  const handleOpenEvent = () => {
    axios({
      method: 'get',
      url: '/api/tag'
    })
      .then((response) => {
        const arr = [];
        response.data.forEach((element) => {
          arr.push(element.name);
        });
        console.log(arr);
        setTags(response.data);
        setOpenEvent(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOpenTags = () => {
    axios({
      method: 'get',
      url: '/api/categories'
    })
      .then((response) => {
        const arr = [];
        response.data.forEach((element) => {
          arr.push(element.name);
        });
        setCategories(arr);
        setOpenTags(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOpenFriendsList = () => {
    setOpenFriendsList(true)
  };



  

  const classes = useStyles();
  return (
    <Grow in>
      <Container className={classes.container} maxWidth='md'>
        <Grid container justify='space-between' alignItems='stretch' spacing={0}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                component='img'
                height='150'
                image='https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png'
              />
              <CardContent style={{ padding: 0, marginTop: 5 }}>
                <Typography variant='h5' component='div'>
                  Mona Lisa
                </Typography>
                <Grid className={classes.icons}>
                  <Grid container direction='row' alignItems='center' style={{ marginRight: 10 }}>
                    <FavoriteOutlined fontSize='large' />
                    <Typography>10</Typography>
                  </Grid>
                  <Grid container direction='row' alignItems='center'>
                    <Grid item>
                      <PersonIcon fontSize='large' />
                    </Grid>
                    <Grid item>
                      <Typography>10</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions justifyContent='center' className={classes.action}>
                <Button
                  size='large'
                  variant='contained'
                  style={{ backgroundColor: '#099441', color: 'white' }}
                  href='/Profile'
                >
                  Edit Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: 220 }}>
                  <Button
                    fullWidth
                    onClick={handleOpenTags}
                    style={{
                      fontSize: 15,
                      color: '#099441',
                      height: '100%',
                      backgroundColor: '#eff5eb'
                    }}
                    variant='contained'
                  >
                    Add tags
                  </Button>
                  <Modal open={openTags} onClose={handleCloseTags}>
                    <AddTags handleClose={handleCloseTags} categories={categoryList} />
                  </Modal>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    fullWidth
                    onClick={handleOpenEvent}
                    style={{
                      fontSize: 15,
                      color: '#099441',
                      height: '100%',
                      backgroundColor: '#eff5eb'
                    }}
                    variant='contained'
                  >
                    Create Events
                  </Button>
                  <Modal open={openEvent} onClose={handleCloseEvent}>
                    <CreateEventModal handleClose={handleCloseEvent} tags={tags} />
                  </Modal>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    component={Link}
                    to='/past-events'
                    fullWidth
                    style={{
                      fontSize: 15,
                      color: '#099441',
                      height: '100%',
                      backgroundColor: '#eff5eb'
                    }}
                    variant='contained'
                  >
                    Past Events
                  </Button>
                </Paper>
              </Grid>
            </Grid>

            <Grid item container className={classes.buttons} spacing={3}>
              <Grid item xs={12} sm={4}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  component={Link}
                  to='/interestFinder'
                  fullWidth
                >
                  <Typography>Edit Interests</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  onClick={handleOpenFriendsList}
                  variant='outlined'
                  className={classes.button}
                  fullWidth
                >
                  <Typography>Friends List</Typography>
                </Button>
                <Modal open={openFriendsList} onClose={handleCloseFriendsList}>
                  <FriendListModal handleClose={handleCloseFriendsList} friends={friends} />
                </Modal>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  onClick={handleOpenFriend}
                  variant='outlined'
                  className={classes.button}
                  fullWidth
                >
                  <Typography>Find Friend</Typography>
                </Button>
                <Modal open={openFriend} onClose={handleCloseFriend}>
                  <AddFriend handleClose={handleCloseFriend} />
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Typography variant='h6'>Upcoming Events...</Typography>
            {/* These events will be taken from the user's event list from the database. 
          Currently these are hardcoded in */}
          </Box>
          <Grid
            justifyContent='center'
            sx={{
              paddingBottom: 5,
            }}
          >
              <Grid container spacing={3} mt={12}>
                {events.map((event) => {
                  event.description = ''
                  if (!event.completed)
                    return (
                      <Grid item xs={12} sm={6} style={{marginBottom: 20, marginTop: 10}}>
                        <Event event={event} />
                      </Grid>
                    );
                })}
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Dashboard;

//testing
