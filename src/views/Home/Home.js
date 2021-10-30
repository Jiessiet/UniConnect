import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { lightGreen } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Background from "./bg_img_simp.png"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const Img = styled('images/Connected-pana.png')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

let theme = createTheme({
  palette: {
    primary: {
      light: '#b7b7a4',
      main: '#a5a58d',
    },
  },

});


export class Home extends React.Component {

  render() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container component="main" 
        spacing={0}
        padding = '0px'
        padding-left='0px'
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh', minWidth: '100vw'}}
        sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}
        >
        <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{
        width: 10,
        height: 10,
        mt: 3}}>
        <Avatar alt="Logo" src="images/globe-removebg-preview.png"sx={{
        width: 200,
        height: 100}}/>
      </Toolbar>
        </AppBar>

      <Grid item xs={3}>
      <Box component="spand" sx={{
        width: 100,
        height: 100,
        backgroundImage: 'url(${Background})',
      }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={20}

        >
          <Avatar alt="Logo" src="/images/Connected-pana.png" 
          sx={{ width: 400, height: 400, bgcolor: lightGreen[100]} }
          />
        </Stack>

        <Paper
          component="form"
          sx={{ p: '2px 3px', display: 'flex', justifyContent: "center", alignItems: 'center', width: 350, margin: 2}}
        >
          <InputBase
            sx={{ ml: 1, flex: 1}}
            placeholder="Find buddies :)"
            margin='none'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <Link to="/timeline">
            <SearchIcon />
          </Link>
          </IconButton>
        </Paper>

        <Grid 
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}>
              
            <Button variant="contained" backgroundColor='#a5a58d' sx={{mt:2}} href="/login">
                <Typography variant="button" component="div" gutterBottom 
                sx={{ cursor: 'pointer'}}>
                    Login
                </Typography>
            </Button>

            <Button href="/signup" variant="contained" backgroundColor='#a5a58d' sx={{mt:2}}>
                <Typography variant="button" component="div" gutterBottom 
                sx={{ cursor: 'pointer' }}>
                    Signup
                </Typography>

            </Button>

          </Grid>

        </Box>
        </Grid>   
      </Grid> 
       
    </ThemeProvider>
  );

}
}
export default Home;
