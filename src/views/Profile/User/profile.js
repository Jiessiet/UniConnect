import React from 'react';
import useStyles from './styles';
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
import Event from './Event';

import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Profile = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container className={classes.container} maxWidth='md'>
        <Grid container justify='space-between' alignItems='stretch' spacing={0}>
          <Grid item xs={12} sm={3} >
            <Card className={classes.card}>
              <CardMedia
                component='img'
                height='150'
                image='https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png'
              />
              <CardContent style={{padding: 0, marginTop: 5}}>
                <Typography variant='h5' component='div'>
                  Mona Lisa
                </Typography>
                <Grid className={classes.icons}>
                  <Grid container direction='row' alignItems='center' style={{marginRight: 10}}>
                    <FavoriteOutlined fontSize='large'/>
                    <Typography>10</Typography>
                  </Grid>
                  <Grid container direction='row' alignItems='center'>
                    <Grid item>
                      <PersonIcon fontSize='large'/>
                    </Grid>
                    <Grid item>
                      <Typography>10</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions justifyContent='center' className={classes.action}>
                <Button size='large' variant='contained' style={{backgroundColor: '#099441', color:'white'}}>
                  Edit Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={4}>
              <Paper style={{ height: 220 }}>
              <Button fullWidth style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                  Add tags
              </Button>
            </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Paper style={{ height: '100%' }}>
              <Button fullWidth style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                  Create Events
              </Button>
            </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Paper style={{ height: '100%' }}>
              <Button fullWidth style={{ fontSize: 15, color: '#099441', height: '100%', backgroundColor: '#eff5eb' }} variant='contained'>
                  Past Events
              </Button>
            </Paper>
              </Grid>
            </Grid>

            <Grid item container className={classes.buttons} spacing={3} >
              <Grid item xs={12} sm={4}>
                <Button variant='outlined' className={classes.button} fullWidth>
                  <Typography>Edit Interests</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button component={Link} to='/createCourse' variant='outlined' className={classes.button} fullWidth>
                  <Typography>Add a Course</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button component={Link} to='/AddFriend' variant='outlined' className={classes.button} fullWidth>
                  <Typography>Add Friend</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={3}>
          <Typography variant='h6'>Upcoming Events...</Typography>
          </Box>
          <Grid item container xs={12} sm={12} className={classes.events}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={3}>
              <Event />
              </Grid>
              <Grid item xs={12} sm={3}>
              <Event />
              </Grid>
              <Grid item xs={12} sm={3}>
              <Event />
              </Grid>
              <Grid item xs={12} sm={3}>
              <Event />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Profile;


//testing