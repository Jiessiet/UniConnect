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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';

const Profile = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container maxWidth='md'>
        <Grid container justify='space-between' alignItems='stretch' spacing={0}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                component='img'
                height='200'
                image='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
              />
              <CardContent>
                <Typography variant='h5' component='div'>
                  Mona Lisa
                </Typography>
                <Grid className={classes.icons}>
                  <Grid container direction='row' alignItems='center'>
                    <FavoriteBorderIcon fontSize='large' />
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
                <Button size='large' variant='contained'>
                  Edit Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid item container className={classes.cards} spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Typography>Chats</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Typography>Create Events</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Typography>Past Events</Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid item container className={classes.buttons} spacing={3}>
              <Grid item xs={12} sm={4}>
                <Button variant='outlined' className={classes.button} fullWidth>
                  <Typography>Edit Interests</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant='outlined' className={classes.button} fullWidth>
                  <Typography>Add a Course</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant='outlined' className={classes.button} fullWidth>
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
                <Paper className={classes.event}>
                  <Typography>Event</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.event}>
                  <Typography>Event</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.event}>
                  <Typography>Event</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.event}>
                  <Typography>Event</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Profile;
