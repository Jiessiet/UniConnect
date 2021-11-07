import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import {Box, ThemeProvider, createTheme, positions} from '@mui/system';
import { GridClassKey } from '@material-ui/core';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

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
  width: '20rem',
  height: '8rem',
  border: 1,

};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export class AddFriend extends React.Component {

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
        borderRadius: '16px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'linear-gradient(141deg, #C9D991 0%, #d0f0c0 51%, #F2F2F2 75%);',}}
    >

    <Grid 
      container 
      direction="row" 
      alignItems="center" 
      component={Paper} 
      elevation={6}
      borderRadius= {16}
      padding= '15px'
      xs={5}
      >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Avatar
            alt="Friend"
            sx={{ width: 100, height: 100 }}>
            </Avatar>
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>

          <Grid item xs container direction="column" spacing={2}>
            
            <Grid item xs>
              <Typography variant="h3" component="div" gutterBottom>
                  Friend Name
              </Typography>

              <Grid item xs
              container
              direction="row">
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <FavoriteIcon sx={{borderRadius: 2}}/>
                    <Typography variant="subtitle1" component="div">
                      3 (Heart number)
                    </Typography>
                </IconButton>
              </Grid>

              <Box sx={{p:'10px', flexGrow: 1, display: 'flex', borderRadius: '50%'}}
              item xs="auto">
                
                <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                  
                  {Array.from(Array(3)).map((_, index) => (
                    <Button color="secondary">
                      <Item>
                        <Typography variant="button" component="div" gutterBottom 
                        sx={{ cursor: 'pointer' }}>
                            Tag
                        </Typography>
                      </Item>
                    </Button>
                    ))}

                </Grid>
              </Box>
              
              <Box sx={{ display: 'flex', width: 300, height: 200}}>
                <Box sx={{ ...commonStyles, border: 1, borderRadius: '16px'}}>
                  <Typography paragraph variant="body2" color="text.secondary"
                  sx={{ p: 2, marginleft: '1', maxWidth: 300, flexGrow: 1}}>
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
                justifyContent="flex-start"
                alignItems="flex-start">

                <Button component={Link} to='/profile' color="secondary">
                  <Item>
                    <Typography variant="button" component="div" gutterBottom 
                    sx={{ cursor: 'pointer' }}>
                        Add as Friend
                    </Typography>
                  </Item>
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
export default AddFriend;