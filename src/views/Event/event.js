import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Box, ThemeProvider, createTheme, positions} from '@mui/system';

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
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '40rem',
  height: '10rem',
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export class Event extends React.Component {

  render() {
  return (

  <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    padding = '0px'
    padding-left='0px'
    style={{ minHeight: '100vh', minWidth: '100vw'}}
    sx={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#ddbea9'}}
  >
    <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1}}
    elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 500 }}>
          <Img alt="Event Picture" src="/images/Connected-pana.png" />
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>

          <Grid item xs container direction="column" spacing={2}>
            
            <Grid item xs>
              <Typography variant="h1" component="div" gutterBottom>
                  Event Name
              </Typography>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from(Array(3)).map((_, index) => (
                    <ButtonBase item xs={1} sm={1} md={2} key={index}>
                      <Item>
                      <Typography variant="button" component="div" gutterBottom 
                      sx={{ cursor: 'pointer' }}>
                          Tag
                      </Typography>
                      </Item>
                    </ButtonBase>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ display: 'flex'}}>
                <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px'}}>
                  <Typography paragraph variant="body2" color="text.secondary"
                  sx={{ p: 2, marginleft: '1', maxWidth: 500, flexGrow: 1}}>
                      Description
                      Description
                      Description
                      Description
                  </Typography>
                </Box> 
              </Box>
            </Grid>

            <Grid item 
            direction="row"
            item xs={12} sm container>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Attendee
              </Typography>
              
              <AvatarGroup max={3}>
                <Avatar alt="Jiessie" src="" />
                <Avatar alt="Mizna" src="" />
                <Avatar alt="Sue" src="" />
                <Avatar alt="Onur" src="" />
              </AvatarGroup>

            </Grid>

          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="div">
              Host name
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </Grid> 

  );

}
}
export default Event;