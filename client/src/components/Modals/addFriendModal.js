import * as React from 'react';
import { useState } from 'react';
import { Icon, InputBase, Button, Alert, IconButton, Tooltip, Snackbar, Grid, Paper, Autocomplete, Avatar, Typography, Box, TextField, Link, SliderValueLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { ControlCameraOutlined, HowToVoteRounded } from '@material-ui/icons';
import { useUser } from '../../Contexts/UserContext';
import { useHistory } from 'react-router-dom';
import axios from '../../api';


function Modal({ handleClose }) {
    const [friend, setFriend] = useState('');
    const [username, setUsername] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { currentUser } = useUser();
    const history = useHistory();

    const handleUserChange = (event) => {
        const value = event.target.value;
        setUsername(value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        console.log('ahhhh')
        if (username != '') {
        axios({
            method: 'get',
            url: '/api/users/username',
            data: {
                username: username
            }
          }).then(response => {
                setFriend(response)
                history.push({
                    pathname: '/userDetails',
                    state: { user: { friend } }
            })
          })
        } else {
            setOpenSnackbar(true)
        }
    }
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false)
      };

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <Grid
            container
            xs={12}
            alignItems="center"
            justifyContent='center'
            marginTop='10vh'
            sx={{
                minheight: '100vh',
                minWidth: '100vw',
            }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyItems='center'
                justifyContent='center'
                component={Paper}
                elevation={6}
                variant='outlined'
                borderRadius={16}
                padding={0}
                xs={9}
                md={8}
                lg={3}
                style={{
                    minHeight: '30vh',
                    minWidth: '30vw',
                    border: `3px solid ${green[200]}`,
                    paddingLeft: '4vh',
                    paddingRight: '4vh',
                    paddingBottom: '4vh',
                    paddingTop: '2vh'
                }}>


                <Grid container direction='column' alignItems='center'>
                    <Grid container direction='row' alignSelf='flex-start'>
                        <Grid item xs={10.5} />
                        <Grid item xs={1.5}>
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton>
                            <PersonAddAlt1Icon sx={{ fontSize: 60, color: green[300], mb: '2' }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography component="h1" variant='h3' align='center' fontFamily='revert'> Add Friend</Typography>
                    </Grid>
                </Grid>
               
                <form>
                {/* <Grid item align='center' marginTop='20' marginBottom='2' xs={12}> */}
                        {/* component="form"
                        sx={{
                            p: '2px 3px',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            margin: 2,
                        }} */}
                        <TextField
                            // sx={{ ml: 1, flex: 1, border: '2px' }}
                            placeholder="Input your friend's username"
                            // in
                            // margin='none'
                            // inputProps={{ 'aria-label': 'search' }}
                            value={username}
                            onChange={handleUserChange}
                        />
                {/* </Grid> */}
                {/* <Grid item padding='0'> */}
                    <IconButton type="submit" 
                    // onSubmit={handleClick}
                    >
                        <SearchIcon 
                            onClick={handleClick} 
                        />
                    </IconButton>
                {/* </Grid> */}
                </form>
            </Grid>
            <div>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={2000}
                        onClose={handleCloseSnackbar}
                    >
                        <Alert severity='error'> Friend Not Found </Alert>
                    </Snackbar>
                </div>
        </Grid>)
}
export default Modal