import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import IconButton from '@mui/material/IconButton';
import {Box, ThemeProvider, createTheme, positions} from '@mui/system';
import { GridClassKey } from '@material-ui/core';
import { Link } from 'react-router-dom';




const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const theme = createTheme({
  palette: {
    background: {
      paper: '#ddbea9',
    },
  },
});

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '35rem',
  height: '10rem',
  border: 1,

};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const BloodEventDetails = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      padding = '0px'
      padding-left='0px'
      style={{ minHeight: '100vh', minWidth: '100vw'}}
      sx={{
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'linear-gradient(180deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',}}
    >
      <Grid 
      container 
      direction="row" 
      alignItems="center" 
      component={Paper} 
      elevation={6}
      borderRadius= {16}
      padding= '0px'
      xs={10}
      sx={{mt: 10}}
      style={{height: 550}}
      >
        <Grid 
        alignItems="center"
        justifyContent="center" 
        container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ maxWidth: 500, mx: 2 }}>
            <Img alt="Event Picture" src="https://picsum.photos/id/40/400/400" />
            </ButtonBase>
          </Grid>
  
          <Grid item xs={12} sm container>
  
            <Grid item xs container direction="column" spacing={2}>
              
              <Grid item xs
              sx={{mt: 2}}>
                <Typography variant="h1" component="div" gutterBottom>
                Blood Drive
                </Typography>
  
                <Grid item xs
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start" 
                padding= '0px'
                >
                  <Typography variant="subtitle1" component="div" gutterBottom>
                    Batty McBatface
                  </Typography>
                </Grid>
  
                <Box sx={{ flexGrow: 1, display: 'flex', borderRadius: '50%'}}
                item xs="auto">
                  
                  <Grid 
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={{ xs: 1, md: 2 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{maxWidth: '600px'}}
                  >
                      <Button variant="outlined"
                      sx={{m: 1}}>
                          <Typography variant="button" component="div" gutterBottom 
                          sx={{ cursor: 'pointer' }}>
                              Good Soup
                          </Typography>
                      </Button>
  
                  </Grid>
                </Box>
  
                <Grid item xs
                 container
                 direction="row"
                 justifyContent="space-between"
                >
                  <IconButton 
                  type="submit" 
                  sx={{ p: '10px' }} 
                  disableRipple
                  href='https://www.google.com/maps'
                  target="_blank"
                  > <RoomIcon 
                  fontSize='large'
                  />                  
                    <Typography variant="subtitle1" component="div" 
                    >
                      Queens Park
                    </Typography>
                  </IconButton>
  
                  <Typography variant="subtitle1" component="div" 
                  >
                    Attendee Limit: 5
                  </Typography>
                </Grid>
                
                  <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px'}}>
                    <Typography paragraph variant="body2" color="text.secondary"
                    sx={{ p: 2, marginleft: '1', maxWidth: 500, flexGrow: 1}}>
                        Are you a fan of plasma? Do you get an insatiable hunger 
                        every time you are in the presence 
                        of fresh blood? 
                        Are you a type A, B, AB, O, 
                        or other? If so, you may qualify 
                        for receiving up to one liter of 
                        fresh plasma. We will have a 
                        temporary blood truck at Queens 
                        Park this Saturday at Midnight, 
                        the best time of day. 
                        Feel free to hang around after.
                    </Typography>
                  </Box> 
              </Grid>
  
                <Grid 
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={{ xs: 1, md: 2, }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Button 
                    variant="contained"
                    component={Link} to='/BloodEvent'                 
                    sx={{mt: 3, minWidth: 100, maxWidth: '100px', mb: 3}}>
                        <Typography variant="button" component="div" gutterBottom 
                        sx={{ cursor: 'pointer' }}>
                            Attend
                        </Typography>
                    </Button>
                </Grid>
  
            </Grid>
  
          </Grid>
        </Grid>
      </Grid>
    </Grid> 
  )
}

export default BloodEventDetails