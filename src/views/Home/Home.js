import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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
      dark: '#6b705c',
    },
  },

});


  theme = {
    ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
  },
};

export class Home extends React.Component {

  render() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container component="main" 
        spacing={0}
        padding = '0px'
        padding-left='0px'
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', minWidth: '100vw'}}
        sx={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>

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
          spacing={10}

        >
          <Avatar alt="Logo" src="/images/Connected-pana.png" 
          sx={{ width: 300, height: 300, bgcolor: lightGreen[100]} }
          />
        </Stack>
        <Paper
          component="form"
          sx={{ p: '2px 3px', display: 'flex', justifyContent: "center", alignItems: 'center', width: 400, margin: 2}}
        >
          <InputBase
            sx={{ ml: 1, flex: 1}}
            placeholder="Search"
            margin='none'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        </Box>
        </Grid>   
      </Grid> 
       
    </ThemeProvider>
  );

}
}
export default Home;
