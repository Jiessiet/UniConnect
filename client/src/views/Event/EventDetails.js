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
import { Box, ThemeProvider, createTheme, positions } from '@mui/system';
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
  width: '40rem',
  height: '10rem',
  border: 1,

};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export class EventDetails extends React.Component {

  render() {
    return (

      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        padding='0px'
        padding-left='0px'
        style={{ minHeight: '100vh', minWidth: '100vw' }}
        sx={{
          borderRadius: '16px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          background: 'linear-gradient(141deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          component={Paper}
          elevation={6}
          borderRadius={16}
          padding='0px'
          xs={9.5}
          sx={{ mt: 10 }}
        >
          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ maxWidth: 500 }}>
                <Img alt="Event Picture" src="/images/Connected-pana.png" />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} sm container>

              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Typography variant="h1" component="div" gutterBottom>
                    Event Name
                  </Typography>

                  <Grid item xs
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    padding='0px'
                  >
                    <Typography variant="subtitle1" component="div" gutterBottom>
                      Host name
                    </Typography>
                  </Grid>

                  <Box sx={{ flexGrow: 1, display: 'flex', borderRadius: '50%' }}
                    item xs="auto">

                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={{ xs: 1, md: 2 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      sx={{ maxWidth: '600px' }}
                    >

                      {Array.from(Array(10)).map((_, index) => (
                        <Button variant="outlined"
                          sx={{ m: 1 }}>
                          {/* <Item> */}
                          <Typography variant="button" component="div" gutterBottom
                            sx={{ cursor: 'pointer' }}>
                            Tag
                          </Typography>
                          {/* </Item> */}
                        </Button>
                      ))}

                    </Grid>
                  </Box>

                  <Grid item xs
                    container
                    direction="row"
                    justifyContent="space-between"
                  //  alignItems="baseline"
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
                        Time and Location
                      </Typography>
                    </IconButton>

                    <Typography variant="subtitle1" component="div"
                    // gutterBottom
                    >
                      Attendee Limit
                    </Typography>

                  </Grid>


                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px' }}>
                      <Typography paragraph variant="body2" color="text.secondary"
                        sx={{ p: 2, marginleft: '1', maxWidth: 500, flexGrow: 1 }}>
                        Description
                        Description
                        Description
                        Description
                      </Typography>
                    </Box>
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
                    component={Link} to='/Event'
                    sx={{ mt: 3, minWidth: 100, maxWidth: '100px', mb: 3 }}>
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


    );

  }
}
export default EventDetails;