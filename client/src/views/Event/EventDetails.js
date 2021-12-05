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
  AvatarGroup
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider, createTheme, positions } from '@mui/system';
import { GridClassKey } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../api';

const EventDetails = () => {
  const location = useLocation();
  const event = location.state.event.event;
  const creatorId = event.creator;
  const [currentUser, setCurrentUser] = useState({});

  useEffect(async () => {
    axios
      .get('/api/users', {
        params: {
          id: creatorId
        }
      })
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <Typography variant='h6'>host: {currentUser.name}</Typography>
            <Typography variant='h6'>Attendee Limit: {event.attendeeLimit}</Typography>
            <Typography variant='h6'>Attending : {event.attendees.length}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper textAlign='center' style={{ padding: 20, alignItems: 'flex-start', display:'flex', flexDirection: 'column'}}>
            <Typography variant='h6' mb={1}>Attendees</Typography>
            <AvatarGroup total={event.attendees.length} max={4}>
              <Avatar><PersonIcon/></Avatar>
              <Avatar><PersonIcon/></Avatar>
              <Avatar><PersonIcon/></Avatar>
              <Avatar><PersonIcon/></Avatar>
            </AvatarGroup>
          </Paper>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Grid>
    // <Grid
    //   container
    //   spacing={0}
    //   direction='row'
    //   alignItems='center'
    //   justifyContent='center'
    //   padding='0px'
    //   padding-left='0px'
    //   style={{ minHeight: '100vh', minWidth: '100vw' }}
    //   sx={{
    //     borderRadius: '16px',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     background: 'linear-gradient(180deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);'
    //   }}
    // >
    //   <Grid
    //     container
    //     direction='row'
    //     alignItems='center'
    //     component={Paper}
    //     elevation={6}
    //     borderRadius={16}
    //     padding='0px'
    //     xs={10}
    //     sx={{ mt: 10 }}
    //     style={{ height: 550 }}
    //   >
    //     <Grid alignItems='center' justifyContent='center' container spacing={2}>
    //       <Grid item>
    //         <ButtonBase sx={{ maxWidth: 500, mx: 2 }}>
    //           <Img alt='Event Picture' src={event.photo} />
    //         </ButtonBase>
    //       </Grid>

    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction='column' spacing={2}>
    //           <Grid item xs sx={{ mt: 2 }}>
    //             <Typography variant='h1' component='div' gutterBottom>
    //               {event.name}
    //             </Typography>

    //             <Grid
    //               item
    //               xs
    //               container
    //               direction='row'
    //               justifyContent='flex-end'
    //               alignItems='flex-start'
    //               padding='0px'
    //             >
    //               <Typography variant='subtitle1' component='div' gutterBottom>
    //                 {event.creator.name}
    //               </Typography>
    //             </Grid>

    //             <Box sx={{ flexGrow: 1, display: 'flex', borderRadius: '50%' }} item xs='auto'>
    //               <Grid
    //                 container
    //                 direction='row'
    //                 justifyContent='flex-start'
    //                 alignItems='flex-start'
    //                 spacing={{ xs: 1, md: 2 }}
    //                 columns={{ xs: 4, sm: 8, md: 12 }}
    //                 sx={{ maxWidth: '600px' }}
    //               >
    //                 <Button variant='outlined' sx={{ m: 1 }}>
    //                   <Typography
    //                     variant='button'
    //                     component='div'
    //                     gutterBottom
    //                     sx={{ cursor: 'pointer' }}
    //                   >
    //                     {event.tags}
    //                   </Typography>
    //                 </Button>
    //               </Grid>
    //             </Box>

    //             <Grid item xs container direction='row' justifyContent='space-between'>
    //               <IconButton
    //                 type='submit'
    //                 sx={{ p: '10px' }}
    //                 disableRipple
    //                 href='https://www.google.com/maps'
    //                 target='_blank'
    //               >
    //                 {' '}
    //                 <RoomIcon fontSize='large' />
    //                 <Typography variant='subtitle1' component='div'>
    //                   {event.location}
    //                 </Typography>
    //               </IconButton>

    //               <Typography variant='subtitle1' component='div'>
    //                 Attendee Limit: {event.attendeeLimit}
    //               </Typography>
    //             </Grid>

    //             <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px' }}>
    //               <Typography
    //                 paragraph
    //                 variant='body2'
    //                 color='text.secondary'
    //                 sx={{ p: 2, marginleft: '1', maxWidth: 500, flexGrow: 1 }}
    //               >
    //                 {event.description}
    //               </Typography>
    //             </Box>
    //           </Grid>

    //           <Grid
    //             container
    //             direction='row'
    //             justifyContent='space-evenly'
    //             alignItems='center'
    //             spacing={{ xs: 1, md: 2 }}
    //             columns={{ xs: 4, sm: 8, md: 12 }}
    //           >
    //             <Button
    //               variant='contained'
    //               component={Link}
    //               to='/BloodEvent'
    //               sx={{ mt: 3, minWidth: 100, maxWidth: '100px', mb: 3 }}
    //             >
    //               <Typography
    //                 variant='button'
    //                 component='div'
    //                 gutterBottom
    //                 sx={{ cursor: 'pointer' }}
    //               >
    //                 Attend
    //               </Typography>
    //             </Button>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default EventDetails;
