import React from 'react';
import useStyles from './styles';
import CreateEventModal from '../../../components/Modals/createEventModal'
import AddCourse from '../../../components/Modals/addCourseModal';
import AddFriend from '../../../components/Modals/addFriendModal';
import AddTags from '../../../components/Modals/addTagsModal';
import { Modal } from '@mui/material'
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
import Avatar from '@mui/material/Avatar';
import Event from './Event';
import { events } from '../../../constant/Events';

import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

import { useUser } from './../../../Contexts/UserContext'
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const { currentUser } = useUser()

  const [openEvent, setOpenEvent] = React.useState(false);
  const [tags, setTags] = React.useState([])

  const handleOpenEvent = () => {
    axios({
      method: 'get',
      url: '/api/tag',
    }).then(response => {
      const arr = []
        response.data.forEach(element => {
          arr.push(element.name) 
        })
        console.log(arr)
        setTags(response.data)
        setOpenEvent(true)
    }).catch(function (error) {
      console.log(error)
    })}

  const [openCourse, setOpenCourse] = React.useState(false);
  const handleOpenCourse = () => setOpenCourse(true);

  const [openTags, setOpenTags] = React.useState(false);
  const handleOpenTags = () => setOpenTags(true);

  const [openFriend, setOpenFriend] = React.useState(false);
  const handleOpenFriend = () => setOpenFriend(true);
  

  const handleCloseEvent = () => setOpenEvent(false);
  const handleCloseCourse = () => setOpenCourse(false);
  const handleCloseTags = () => setOpenTags(false);
  const handleCloseFriend = () => setOpenFriend(false);

  const classes = useStyles();
  return (
    <Grow in>
      <Container className={classes.container} maxWidth='md'>
        <Grid container justify='space-between' alignItems='stretch' spacing={0}>
          <Grid item xs={12} sm={3} >
            <Card className={classes.card}>

            <Avatar alt='Friend' sx={{ width: 150, height: 150 }}
            src = {currentUser.profilePhoto}>
            </Avatar>
              {/* <CardMedia
                component='img'
                height='150'
                image=
              /> */}
              <CardContent style={{ padding: 0, marginTop: 5 }}>
                <Typography variant='h5' component='div'>
                  {currentUser.username}
                </Typography>
                <Grid className={classes.icons}>
                  <Grid container direction='row' alignItems='center' style={{ marginRight: 10 }}>
                    <Typography>Friends: </Typography>
                  </Grid>
                  <Grid container direction='row' alignItems='center'>
                    <Grid item>
                      <PersonIcon fontSize='large' />
                    </Grid>
                    <Grid item>
                      <Typography>
                        {currentUser.friends.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions justifyContent='center' className={classes.action}>
                <Button size='large' variant='contained' style={{ backgroundColor: '#099441', color: 'white' }}
                href='/EditUserProfile'>
                  Edit Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: 220 }}>
                  <Button fullWidth onClick={handleOpenTags} style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                    Add tags
                  </Button>
                  <Modal
                    open={openTags}
                    onClose={handleCloseTags}
                  >
                    <AddTags handleClose={handleCloseTags} />
                  </Modal>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: '100%' }}>
                  <Button fullWidth onClick={handleOpenEvent} style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                    Create Events
                  </Button>
                  <Modal
                    open={openEvent}
                    onClose={handleCloseEvent}
                  >
                    <CreateEventModal handleClose={handleCloseEvent} tags={tags}/>
                  </Modal>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper style={{ height: '100%' }}>
                  <Button component={Link} to="/past-events" fullWidth style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                    Past Events
                  </Button>
                </Paper>
              </Grid>
            </Grid>

            <Grid item container className={classes.buttons} spacing={3} >
              <Grid item xs={12} sm={4}>
                <Button variant='outlined' className={classes.button} component={Link} to="/interestFinder" fullWidth>
                  <Typography>Edit Interests</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button onClick={handleOpenCourse} variant='outlined' className={classes.button} fullWidth>
                  <Typography>Add a Course</Typography>
                </Button>
                <Modal
                  open={openCourse}
                  onClose={handleCloseCourse}
                >
                  <AddCourse handleClose={handleCloseCourse} />
                </Modal>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button onClick={handleOpenFriend} variant='outlined' className={classes.button} fullWidth>
                  <Typography>Find Friend</Typography>
                </Button>
                <Modal
                  open={openFriend}
                  onClose={handleCloseFriend}
                >
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
          <Grid item container xs={12} sm={12} className={classes.events}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={6} >
                <Event key={events[0].id} {...events[0]} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Event key={events[1].id} {...events[1]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Dashboard;


//testing