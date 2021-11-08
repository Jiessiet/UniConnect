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
import { Link } from 'react-router-dom';
import { Box, ThemeProvider, createTheme, positions } from '@mui/system';
import { useUser } from '../../Contexts/UserContext';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const theme = createTheme({
  palette: {
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

const commonStyles = {
  m: 1,
  borderColor: 'text.primary',
  width: '35rem',
  height: '10rem',
  border: 1,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
}));


const Moon = () => {
  const { currentUser, setCurrentUser } = useUser();
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
        background: 'linear-gradient(180deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',
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
        xs={10}
        sx={{ mt: 10 }}
        style={{ height: 650 }}
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ maxWidth: 500, mx: 2 }}>
              <Img alt="Event Picture" src="https://picsum.photos/id/70/400/400" />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>

            <Grid item xs container direction="column" spacing={2}>

              <Grid item xs
                sx={{ mt: 2 }}>
                <Typography variant="h2" component="div" gutterBottom>
                  Full Moon Viewing - see description
                </Typography>

                <Grid item xs
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-start"
                  padding='0px'
                >
                  <Typography variant="subtitle1" component="div" gutterBottom>
                    Man Woofsman
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

                    {/* {Array.from(Array(10)).map((_, index) => ( */}
                    <Button variant="outlined"
                      sx={{ m: 1 }}>
                      <Typography variant="button" component="div" gutterBottom
                        sx={{ cursor: 'pointer' }}>
                        Moon
                      </Typography>
                    </Button>
                    <Button variant="outlined"
                      sx={{ m: 1 }}>
                      <Typography variant="button" component="div" gutterBottom
                        sx={{ cursor: 'pointer' }}>
                        Howl
                      </Typography>
                    </Button>
                    <Button variant="outlined"
                      sx={{ m: 1 }}>
                      <Typography variant="button" component="div" gutterBottom
                        sx={{ cursor: 'pointer' }}>
                        Supernatural
                      </Typography>
                    </Button>
                    {/* ))} */}

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
                    Attendee Limit: 6
                  </Typography>
                </Grid>

                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px' }}>
                    <Typography paragraph variant="body2" color="text.secondary"
                      sx={{ p: 2, marginleft: '1', maxWidth: 500, flexGrow: 1 }}>
                      The full moon is upon us.
                      To celebrate, we will be going to
                      Queens park at the stroke of
                      midnight this Saturday to lay on
                      the grass and gaze longingly at the
                      night sky.
                      Some howling experiences necessary.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item
                direction="column"
                alignItems="flex-start"
                item xs={12} sm container>

                <Link
                  style={{ textDecoration: 'none' }}
                  sx={{ cursor: 'pointer' }}
                  to='/profile'
                  variant="body2"
                >
                  Attendees
                  <AvatarGroup max={3}>
                    <Avatar alt="Sue" src="pfp" />
                    <Avatar alt="Onur" src="pfp" />
                    <Avatar alt="Jiessie" src="pfp" />
                    <Avatar alt="Mizna" src="pfp" />
                    <Avatar alt="Mizna" src="pfp" />
                  </AvatarGroup>
                </Link>

              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={{ xs: 1, md: 2, }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >

                {!(currentUser.type == "admin" || currentUser.type == "unauthorized") && (
                  <>
                    <Button
                      variant="contained"
                      sx={{ mt: 3, minWidth: 100, maxWidth: '100px', mb: 3 }}>
                      <Typography variant="button" component="div" gutterBottom
                        sx={{ cursor: 'pointer' }}>
                        Attending
                      </Typography>
                    </Button>

                    <Button
                      sx={{ mt: 3, minWidth: 100, maxWidth: '100px', mb: 3 }}
                      component={Link} to='/MoonDetails'
                      variant="contained"
                    >
                      <Typography variant="button" component="div" gutterBottom
                        sx={{ cursor: 'pointer' }}>
                        Completed
                      </Typography>
                    </Button>
                  </>
                )}

              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Moon

