import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Box, ThemeProvider, createTheme, positions } from '@mui/system';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

const theme = createTheme({
  palette: {
    background: {
      paper: '#ddbea9'
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A'
    },
    action: {
      active: '#001E3C'
    },
    success: {
      dark: '#009688'
    }
  }
});

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '20rem',
  height: '8rem',
  border: 1
};

const AdminProfile = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
      padding='0px'
      padding-left='0px'
      style={{ minHeight: '100vh', minWidth: '100vw' }}
      sx={{
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'linear-gradient(141deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);'
      }}
    >
      <Grid
        container
        direction='row'
        alignItems='center'
        component={Paper}
        elevation={6}
        borderRadius={16}
        padding='15px'
        xs={5}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Avatar alt='Friend' sx={{ width: 100, height: 100 }}></Avatar>
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography variant='h3' component='div'>
                  Admin
                </Typography>

                <Grid item xs container direction='row'>
                  <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
                    <PersonIcon sx={{ borderRadius: 2 }} />
                    <Typography variant='subtitle1' component='div'>
                      257 members
                    </Typography>
                  </IconButton>
                </Grid>

                  <Grid
                    container
                    direction='row'
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    spacing={2}
                    pb={1}
                    pl={1}
                  >
                      <Grid item>
                    <Button variant='outlined'>
                      <Typography
                        sx={{ cursor: 'pointer' }}
                      >
                          Create tags
                      </Typography>
                    </Button>
                    </Grid>
                  </Grid>
                <Grid item xs>
                  <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px' }}>
                    <Typography
                      paragraph
                      variant='body2'
                      color='text.secondary'
                      sx={{ p: 2, marginleft: '1', maxWidth: 300, flexGrow: 1 }}
                    >
                      Description Description Description Description
                    </Typography>
                  </Box>
                  </Grid>
                <Box display='flex'>
                <Button variant='contained' component={Link} to="/past-events" style={{margin: 5}} >Past Events</Button>
                <Button variant='contained' component={Link} to="/upcoming-events" style={{margin: 5}}>Upcoming Events</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
  );
};

export default AdminProfile;
